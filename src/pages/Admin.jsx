import {
  useEffect,
  useState,
} from "react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  FaGoogle,
  FaSignOutAlt,
  FaTrash,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaDatabase,
  FaClipboardList,
} from "react-icons/fa";

import {
  db,
  auth,
  provider,
} from "../firebase";

import {

  collection,
  getDocs,
  query,
  orderBy,
  deleteDoc,
  doc,

} from "firebase/firestore";

import {

  signInWithPopup,
  onAuthStateChanged,
  signOut,

} from "firebase/auth";

import "../styles/admin.css";

function Admin() {

  /* =================================
     STATES
  ================================= */

  const [user, setUser] =
    useState(null);

  const [messages, setMessages] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  const [loginLoading, setLoginLoading] =
    useState(false);

  const [authError, setAuthError] =
    useState(false);

  /* =================================
     ADMIN EMAIL
  ================================= */

  const ADMIN_EMAIL =
    "raajkumar.devops@gmail.com";

  /* =================================
     FRAMER VARIANTS
  ================================= */

  const containerVariants = {

    hidden: {},

    visible: {

      transition: {
        staggerChildren: 0.1,
      },

    },

  };

  const itemVariants = {

    hidden: {
      opacity: 0,
      y: 40,
    },

    visible: {

      opacity: 1,
      y: 0,

      transition: {
        duration: 0.7,
        ease: "easeOut",
      },

    },

  };

  /* =================================
     AUTH CHECK
  ================================= */

  useEffect(() => {

    const unsub =
      onAuthStateChanged(
        auth,

        async (currentUser) => {

          if (
            currentUser &&
            currentUser.email !==
              ADMIN_EMAIL
          ) {

            setAuthError(true);

            await signOut(auth);

            setUser(null);

            setLoading(false);

            return;
          }

          setUser(currentUser);

          setLoading(false);

        }
      );

    return () => unsub();

  }, []);

  /* =================================
     FETCH DATA
  ================================= */

  useEffect(() => {

    if (!user) return;

    const fetchData = async () => {

      try {

        const q = query(

          collection(db, "contacts"),

          orderBy(
            "createdAt",
            "desc"
          )

        );

        const snapshot =
          await getDocs(q);

        const data =
          snapshot.docs.map((doc) => ({

            id: doc.id,
            ...doc.data(),

          }));

        setMessages(data);

      } catch (error) {

        console.error(error);

      }

    };

    fetchData();

  }, [user]);

  /* =================================
     LOGIN
  ================================= */

  const handleLogin =
    async () => {

      try {

        setLoginLoading(true);

        setAuthError(false);

        const result =
          await signInWithPopup(
            auth,
            provider
          );

        if (
          result.user.email !==
          ADMIN_EMAIL
        ) {

          setAuthError(true);

          await signOut(auth);

          return;
        }

      } catch (error) {

        console.error(error);

        setAuthError(true);

      } finally {

        setLoginLoading(false);

      }

    };

  /* =================================
     LOGOUT
  ================================= */

  const handleLogout =
    async () => {

      await signOut(auth);

    };

  /* =================================
     DELETE
  ================================= */

  const handleDelete =
    async (id) => {

      const confirmDelete =
        window.confirm(
          "Delete this request?"
        );

      if (!confirmDelete) return;

      try {

        await deleteDoc(
          doc(
            db,
            "contacts",
            id
          )
        );

        setMessages(

          messages.filter(
            (msg) =>
              msg.id !== id
          )

        );

      } catch (error) {

        console.error(error);

      }

    };

  /* =================================
     LOADING SCREEN
  ================================= */

  if (loading) {

    return (

      <div className="admin-loading">

        <motion.div

          animate={{
            rotate: 360,
          }}

          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}

          className="loader-circle"
        />

        <h1>
          Loading Dashboard...
        </h1>

      </div>

    );

  }

  /* =================================
     LOGIN SCREEN
  ================================= */

  if (!user) {

    return (

      <div className="admin-login-wrapper">

        <motion.div

          className={`admin-login-card ${
            authError
              ? "auth-error"
              : ""
          }`}

          initial={{
            opacity: 0,
            y: 40,
          }}

          animate={
            authError
              ? {
                  opacity: 1,
                  y: 0,
                  x: [
                    0,
                    -10,
                    10,
                    -10,
                    10,
                    0,
                  ],
                }
              : {
                  opacity: 1,
                  y: 0,
                }
          }

          transition={{
            duration: 0.5,
          }}
        >

          <div className="login-orb"></div>

          <h1 className="admin-title">

            Admin Access 🔐

          </h1>

          <p className="admin-subtitle">

            Secure Firebase Dashboard

          </p>

          {
            authError && (

              <p className="auth-error-text">

                Unauthorized Access
                Detected ❌

              </p>

            )
          }

          <motion.button

            onClick={handleLogin}

            className="admin-login-btn"

            disabled={loginLoading}

            whileHover={{
              scale: 1.03,
              y: -2,
            }}

            whileTap={{
              scale: 0.96,
            }}
          >

            <FaGoogle />

            {
              loginLoading
                ? "Authenticating..."
                : "Login with Google"
            }

          </motion.button>

        </motion.div>

      </div>

    );

  }

  /* =================================
     DASHBOARD
  ================================= */

  return (

    <motion.div
      className="admin-wrapper"

      variants={containerVariants}

      initial="hidden"

      animate="visible"
    >

      {/* HEADER */}

      <motion.div
        className="admin-header"

        variants={itemVariants}
      >

        <div>

          <h1 className="admin-dashboard-title">

            Admin Dashboard

          </h1>

          <p className="admin-email">

            {user.email}

          </p>

        </div>

        <motion.button

          onClick={handleLogout}

          className="admin-logout-btn"

          whileHover={{
            scale: 1.04,
          }}

          whileTap={{
            scale: 0.95,
          }}
        >

          <FaSignOutAlt />

          Logout

        </motion.button>

      </motion.div>

      {/* STATS */}

      <motion.div
        className="admin-stats-grid"

        variants={containerVariants}
      >

        <motion.div
          className="admin-stat-card requests-card"

          variants={itemVariants}
        >

          <div className="admin-stat-icon-box">

            <FaClipboardList />

          </div>

          <div>

            <h2>
              {messages.length}
            </h2>

            <p>
              Total Requests
            </p>

          </div>

        </motion.div>

        <motion.div
          className="admin-stat-card firebase-card"

          variants={itemVariants}
        >

          <div className="admin-stat-icon-box">

            <FaDatabase />

          </div>

          <div>

            <h2>
              Online
            </h2>

            <p>
              Firebase Connected
            </p>

          </div>

        </motion.div>

      </motion.div>

      {/* EMPTY */}

      {
        messages.length === 0 && (

          <motion.div
            className="admin-empty"

            variants={itemVariants}
          >

            No project requests yet 📭

          </motion.div>

        )
      }

      {/* REQUEST GRID */}

      <motion.div
        className="admin-grid"

        variants={containerVariants}
      >

        <AnimatePresence>

          {
            messages.map((msg) => (

              <motion.div

                key={msg.id}

                className="admin-card"

                variants={itemVariants}

                initial={{
                  opacity: 0,
                  y: 30,
                }}

                animate={{
                  opacity: 1,
                  y: 0,
                }}

                exit={{
                  opacity: 0,
                  scale: 0.9,
                }}

                whileHover={{
                  y: -6,
                }}
              >

                <div className="admin-card-top">

                  <div>

                    <h3 className="admin-name">

                      {msg.name}

                    </h3>

                    <p className="admin-msg-email">

                      <FaEnvelope />

                      {msg.email}

                    </p>

                  </div>

                  <motion.button

                    onClick={() =>
                      handleDelete(
                        msg.id
                      )
                    }

                    className="admin-delete-btn"

                    whileHover={{
                      scale: 1.05,
                    }}

                    whileTap={{
                      scale: 0.95,
                    }}
                  >

                    <FaTrash />

                  </motion.button>

                </div>

                <div className="admin-details">

                  <p>

                    <FaPhoneAlt />

                    {msg.phone || "N/A"}

                  </p>

                  <p>

                    <FaGlobe />

                    {
                      msg.websiteType ||
                      "N/A"
                    }

                  </p>

                  <p>

                    💰
                    {" "}
                    {
                      msg.budget ||
                      "N/A"
                    }

                  </p>

                </div>

                <div className="admin-requirement-box">

                  <h4>

                    Project Requirement

                  </h4>

                  <p className="admin-message">

                    {
                      msg.message ||
                      "No requirement"
                    }

                  </p>

                </div>

                <p className="admin-date">

                  {
                    msg.createdAt
                      ?.toDate?.()
                      ?.toLocaleString()
                  }

                </p>

              </motion.div>

            ))
          }

        </AnimatePresence>

      </motion.div>

    </motion.div>

  );

}

export default Admin;