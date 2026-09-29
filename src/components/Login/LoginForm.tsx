import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../api/auth";
import { useAuthStore } from "../../stores/authStore";

const LoginForm = () => {
  const navigate = useNavigate();
  const setLogin = useAuthStore((state) => state.setLogin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError("");
    setLoading(true);

    try {
      const user = await loginUser(email, password);

      setLogin(user.email, user.userToken);

      navigate("/");
    } catch (err) {
      setError("Invalid email or password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-[calc(100vh-80px)] bg-white px-6 py-20 text-black">
      <div className="mx-auto max-w-md">
        {/* HEADER */}
        <div className="mb-10 text-center">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-gray-500">
            Private Access
          </p>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Welcome back.
          </h1>

          <p className="mt-5 leading-7 text-gray-600">
            Sign in to access the Saputra-Wayne Co. editorial workspace.
          </p>
        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
          {/* EMAIL */}
          <div>
            <label htmlFor="email" className="mb-3 block text-sm font-medium">
              Email
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
              required
              autoComplete="email"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-black"
            />
          </div>

          {/* PASSWORD */}
          <div className="mt-6">
            <label
              htmlFor="password"
              className="mb-3 block text-sm font-medium">
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Enter your password"
              required
              autoComplete="current-password"
              className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-black"
            />
          </div>

          {/* ERROR */}
          {error && (
            <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-600">
              {error}
            </div>
          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="mt-8 w-full rounded-full bg-black px-6 py-3.5 text-sm font-medium text-white transition hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-50">
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* FOOTNOTE */}
        <p className="mt-6 text-center text-xs leading-5 text-gray-400">
          Authorized access only. This area is reserved for Saputra-Wayne Co.
          members.
        </p>
      </div>
    </section>
  );
};

export default LoginForm;
