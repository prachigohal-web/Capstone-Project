function Login({ darkMode }) {
  return (
    <div
      style={{
        padding: "20px",
        minHeight: "100vh",
        background: darkMode ? "#0d0d0d" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <h1>Login Page </h1>

      <input placeholder="Email" />
      <br />
      <input type="password" placeholder="Password" />
      <br />

      <button>Login</button>
    </div>
  );
}

export default Login;