import { useEffect, useState } from "react";
import { db, auth, provider } from "../firebase";

import {
  collection,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc
} from "firebase/firestore";

import {
  signInWithPopup,
  onAuthStateChanged,
  signOut
} from "firebase/auth";

function Admin() {
  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);

  const ADMIN_EMAIL = "yourgmail@gmail.com"; // 🔥 CHANGE THIS

  // 🔐 AUTH CHECK
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsub();
  }, []);

  // 🔥 FETCH DATA (ONLY IF ADMIN)
  useEffect(() => {
    if (!user || user.email !== ADMIN_EMAIL) return;

    const fetchData = async () => {
      const q = query(
        collection(db, "contacts"),
        orderBy("createdAt", "desc")
      );

      const snapshot = await getDocs(q);

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));

      setMessages(data);
    };

    fetchData();
  }, [user]);

  // 🔥 LOGIN
  const handleLogin = async () => {
    await signInWithPopup(auth, provider);
  };

  // 🔥 LOGOUT
  const handleLogout = async () => {
    await signOut(auth);
  };

  // 🔥 DELETE MESSAGE
  const handleDelete = async (id) => {
    await deleteDoc(doc(db, "contacts", id));
    setMessages(messages.filter((msg) => msg.id !== id));
  };

  // ❌ NOT LOGGED IN
  if (!user) {
    return (
      <div style={{ padding: "40px", color: "#fff" }}>
        <h1>Admin Login</h1>
        <button onClick={handleLogin}>
          Login with Google
        </button>
      </div>
    );
  }

  // ❌ WRONG USER
  if (user.email !== ADMIN_EMAIL) {
    return (
      <div style={{ padding: "40px", color: "#fff" }}>
        <h1>Access Denied ❌</h1>
        <p>{user.email}</p>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  // ✅ ADMIN PANEL
  return (
    <div style={{ padding: "40px", color: "#fff" }}>
      <h1>Admin Panel 🔐</h1>

      <p>{user.email}</p>
      <button onClick={handleLogout}>Logout</button>

      {messages.length === 0 && <p>No messages</p>}

      {messages.map((msg) => (
        <div
          key={msg.id}
          style={{
            border: "1px solid #ea2a33",
            padding: "20px",
            marginBottom: "20px",
            borderRadius: "10px"
          }}
        >
          <p><strong>Name:</strong> {msg.name}</p>
          <p><strong>Email:</strong> {msg.email}</p>
          <p><strong>Message:</strong> {msg.message}</p>

          <button onClick={() => handleDelete(msg.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;