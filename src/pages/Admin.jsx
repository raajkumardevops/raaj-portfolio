import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

function Admin() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
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
      } catch (error) {
        console.error(error);
      }
    };

    fetchMessages();
  }, []);

  return (
    <div style={{ padding: "40px", color: "#fff" }}>
      <h1 style={{ marginBottom: "30px" }}>Admin Panel</h1>

      {messages.length === 0 && <p>No messages yet</p>}

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
          <p style={{ fontSize: "12px", color: "#aaa" }}>
            {msg.createdAt?.toDate?.().toString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Admin;