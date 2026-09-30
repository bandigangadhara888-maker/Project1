import { useState } from "react";
import { Link } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import InputField from "../components/InputField";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setError("Email is required");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Enter a valid email");
      return;
    }

    setError("");
    setSent(true);
  };

  return (
    <AuthLayout
      title="Forgot Password?"
      subtitle="Enter your email and we'll send you a reset link"
    >
      {sent ? (
        <div className="success-box">
          <div className="success-icon">✓</div>
          <h3>Reset Link Sent</h3>
          <p>
            Please check your email for instructions to reset your password.
          </p>

          <Link to="/reset-password" className="primary-btn link-btn">
            Continue
          </Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>

          <InputField
            label="Email Address"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            error={error}
          />

          <button className="primary-btn">
            Send Reset Link
          </button>

        </form>
      )}

      <p className="bottom-text">
        Remember your password?{" "}
        <Link to="/signin">Back to Sign In</Link>
      </p>
    </AuthLayout>
  );
}

export default ForgotPassword;