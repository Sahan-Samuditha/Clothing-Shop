import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

function Login() {

    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");
        setLoading(true);

        try {

            const response = await axios.post(
                "http://localhost:5000/api/auth/login",
                {
                    email,
                    password,
                }
            );

            // Save JWT token
            login(
                 response.data.user,
                 response.data.token
            );

            alert("Login successful!");

            navigate("/");

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Login failed"
            );

        } finally {

            setLoading(false);

        }
    };


    return (
        <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-stone-100 px-4 py-10">

            <div className="absolute inset-0 bg-[url('https://i.pinimg.com/736x/d9/18/a7/d918a7d245f9e6bebfd694e354e8673a.jpg')] bg-cover bg-[position:center_-20px]" />
            <div className="absolute inset-0 bg-black/35 backdrop-blur-[2px]" />

            <div className="relative grid w-full max-w-4xl overflow-hidden rounded-3xl border border-white/40 bg-white/20 shadow-[0_24px_80px_rgba(15,23,42,0.3)] backdrop-blur-xl md:grid-cols-2">

                <div className="hidden min-h-[500px] flex-col justify-end bg-black/25 bg-[url('https://i.pinimg.com/736x/d9/18/a7/d918a7d245f9e6bebfd694e354e8673a.jpg')] bg-cover bg-center bg-blend-overlay p-8 text-white md:flex">
                    <p className="text-sm font-semibold uppercase tracking-[0.35em] text-white/80">
                        STYLEHUB
                    </p>
                    <h2 className="mt-3 max-w-sm text-4xl font-bold leading-tight">
                        Your style starts here.
                    </h2>
                    <p className="mt-4 max-w-sm text-sm leading-6 text-white/80">
                        Discover modern pieces made for your everyday look.
                    </p>
                </div>

                <div className="bg-white/85 p-6 shadow-2xl sm:p-8">

                <h1 className="text-center text-3xl font-bold tracking-tight text-gray-900">
                    Welcome Back
                </h1>

                <p className="mt-2 text-center text-gray-500">
                    Login to your STYLEHUB account
                </p>


                {error && (
                    <div className="mt-5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-700">
                        {error}
                    </div>
                )}


                <form
                    onSubmit={handleSubmit}
                    className="mt-6 space-y-4"
                >

                    <div>

                        <label className="mb-1 block text-sm font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 outline-none transition focus:border-gray-900 focus:ring-4 focus:ring-gray-900/10"
                            required
                        />

                    </div>


                    <div>

                        <label className="mb-1 block text-sm font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            className="w-full rounded-xl border border-gray-200 bg-white/80 px-4 py-3 outline-none transition focus:border-gray-900 focus:ring-4 focus:ring-gray-900/10"
                            required
                        />

                    </div>


                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full rounded-xl bg-gray-900 py-3 font-semibold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-black hover:shadow-xl disabled:bg-gray-400"
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                </form>


                <p className="mt-6 text-center text-sm text-gray-600">

                    Don't have an account?{" "}

                    <Link
                        to="/register"
                        className="font-semibold text-gray-900 hover:text-gray-500"
                    >
                        Create Account
                    </Link>

                </p>

                </div>
            </div>

        </div>
    );
}

export default Login;