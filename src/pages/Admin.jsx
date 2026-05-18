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

// ✅ CSS IMPORT
import "../styles/admin.css";

function Admin() {

  const [user, setUser] = useState(null);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loginLoading, setLoginLoading] = useState(false);

  // ✅ ADMIN EMAIL
  const ADMIN_EMAIL = "raajkumar.devops@gmail.com";

  // 🔐 AUTH CHECK
  useEffect(() => {

    const unsub = onAuthStateChanged(auth, async (currentUser) => {

      // ❌ FORCE LOGOUT IF NOT ADMIN
      if (
        currentUser &&
        currentUser.email !== ADMIN_EMAIL
      ) {

        await signOut(auth);

        setUser(null);
        setLoading(false);

        return;
      }

      setUser(currentUser);
      setLoading(false);

    });

    return () => unsub();

  }, []);

  // 🔥 FETCH MESSAGES
  useEffect(() => {

    if (!user) return;

    const fetchData = async () => {

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

    fetchData();

  }, [user]);

  // 🔐 LOGIN
  const handleLogin = async () => {

    try {

      setLoginLoading(true);

      const result = await signInWithPopup(
        auth,
        provider
      );

      if (
        result.user.email !== ADMIN_EMAIL
      ) {

        alert("Unauthorized Access ❌");

        await signOut(auth);

        return;

      }

    } catch (error) {

      console.error(error);

      alert("Login Failed ❌");

    } finally {

      setLoginLoading(false);

    }

  };

  // 🔥 LOGOUT
  const handleLogout = async () => {

    await signOut(auth);

  };

  // 🔥 DELETE
  const handleDelete = async (id) => {

    const confirmDelete = window.confirm(
      "Delete this message?"
    );

    if (!confirmDelete) return;

    try {

      await deleteDoc(
        doc(db, "contacts", id)
      );

      setMessages(
        messages.filter(
          (msg) => msg.id !== id
        )
      );

    } catch (error) {

      console.error(error);

    }

  };

  // 🔄 LOADING
  if (loading) {

    return (
      <div className="admin-center">
        <h1>Loading Dashboard...</h1>
      </div>
    );

  }

  // ❌ LOGIN SCREEN
  if (!user) {

    return (

      <div className="admin-login-wrapper">

        <div className="admin-login-card">

          <h1 className="admin-title">
            Admin Access 🔐
          </h1>

          <p className="admin-subtitle">
            Secure Firebase Dashboard
          </p>

          <button
            onClick={handleLogin}
            className="admin-login-btn"
            disabled={loginLoading}
          >
            {
              loginLoading
                ? "Authenticating..."
                : "Login with Google"
            }
          </button>

        </div>

      </div>

    );

  }

  // ✅ DASHBOARD
return (

  <div className="admin-wrapper">

    {/* =========================
        HEADER
    ========================= */}
    <div className="admin-header">

      <div>

        <h1 className="admin-dashboard-title">
          Admin Dashboard
        </h1>

        <p className="admin-email">
          {user.email}
        </p>

      </div>

      <button
        onClick={handleLogout}
        className="admin-logout-btn"
      >
        Logout
      </button>

    </div>

    {/* =========================
        STATS
    ========================= */}
<div className="admin-stats-grid">

  {/* TOTAL REQUESTS */}
  <div className="admin-stat-card requests-card">

    <div className="admin-stat-top">
      <span className="admin-stat-label">
        Total Requests
      </span>

      <span className="admin-stat-icon">
        📩
      </span>
    </div>

    <h2 className="admin-stat-number">
      {messages.length}
    </h2>

    <p className="admin-stat-desc">
      Client project requests received
    </p>

  </div>

  {/* DATABASE */}
  <div className="admin-stat-card firebase-card">

    <div className="admin-stat-top">

      <span className="admin-stat-label">
        Database Status
      </span>

      <span className="admin-stat-icon">
        🔥
      </span>

    </div>

    <h2 className="admin-stat-number">
      Online
    </h2>

    <p className="admin-stat-desc">
      Firebase connected successfully
    </p>

  </div>

</div>

    {/* =========================
        EMPTY STATE
    ========================= */}
    {
      messages.length === 0 && (
        <div className="admin-empty">
          No project requests yet 📭
        </div>
      )
    }

    {/* =========================
        CLIENT REQUESTS
    ========================= */}
    <div className="admin-grid">

      {
        messages.map((msg) => (

          <div
            key={msg.id}
            className="admin-card"
          >

            {/* =========================
                TOP
            ========================= */}
            <div className="admin-card-top">

              <div>

                <h3 className="admin-name">
                  {msg.name}
                </h3>

                <p className="admin-msg-email">
                  {msg.email}
                </p>

              </div>

              <button
                onClick={() =>
                  handleDelete(msg.id)
                }
                className="admin-delete-btn"
              >
                Delete
              </button>

            </div>

            {/* =========================
                CLIENT DETAILS
            ========================= */}

            <div className="admin-details">

              <p>
                <strong>📞 Phone:</strong>
                {" "}
                {msg.phone || "N/A"}
              </p>

              <p>
                <strong>🌐 Website Type:</strong>
                {" "}
                {msg.websiteType || "N/A"}
              </p>

              <p>
                <strong>💰 Budget:</strong>
                {" "}
                {msg.budget || "N/A"}
              </p>

              <p>
                <strong>✅ Agreement:</strong>
                {" "}
                {
                  msg.agreement
                    ? "Accepted"
                    : "Not Accepted"
                }
              </p>

            </div>

            {/* =========================
                REQUIREMENT
            ========================= */}
            <div className="admin-requirement-box">

              <h4>
                Project Requirement
              </h4>

              <p className="admin-message">
                {
                  msg.message ||
                  "No requirement provided"
                }
              </p>

            </div>

            {/* =========================
                DATE
            ========================= */}
            <p className="admin-date">

              {
                msg.createdAt
                  ?.toDate?.()
                  ?.toLocaleString()
              }

            </p>

          </div>

        ))
      }

    </div>

  </div>

);
}

export default Admin;