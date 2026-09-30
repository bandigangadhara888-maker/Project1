function AuthLayout({ title, subtitle, children }) {
  return (
    <div className="auth-page">
      <div className="auth-container">

        <div className="auth-brand">
          <div className="brand-icon">🔐</div>
          <h1>SecureAuthentication</h1>
          <p>Simple. Secure. Reliable.</p>
        </div>

        <div className="auth-card">
          <h2>{title}</h2>
          <p className="subtitle">{subtitle}</p>

          {children}
        </div>

      </div>
    </div>
  );
}

export default AuthLayout;