import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);


    const handleSubmit = async (e) => {

        e.preventDefault();

        setError("");
        setLoading(true);

        try {

            await axios.post(
                "http://localhost:5000/api/auth/register",
                {
                    name,
                    email,
                    password,
                }
            );

            alert("Registration successful!");

            navigate("/login");

        } catch (error) {

            setError(
                error.response?.data?.message ||
                "Registration failed"
            );

        } finally {

            setLoading(false);

        }
    };


    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">

            <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-md">

                <h1 className="text-center text-3xl font-bold">
                    Create Account
                </h1>

                <p className="mt-2 text-center text-gray-500">
                    Join STYLEHUB today
                </p>


                {error && (
                    <div className="mt-5 rounded bg-red-100 p-3 text-sm text-red-700">
                        {error}
                    </div>
                )}


                <form
                    onSubmit={handleSubmit}
                    className="mt-6 space-y-4"
                >

                    <div>

                        <label className="mb-1 block text-sm font-medium">
                            Name
                        </label>

                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Enter your name"
                            className="w-full rounded border px-4 py-3 outline-none focus:border-black"
                            required
                        />

                    </div>


                    <div>

                        <label className="mb-1 block text-sm font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                            className="w-full rounded border px-4 py-3 outline-none focus:border-black"
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
                            className="w-full rounded border px-4 py-3 outline-none focus:border-black"
                            required
                        />

                    </div>


                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-black py-3 font-semibold text-white hover:bg-gray-800 disabled:bg-gray-400"
                    >
                        {loading ? "Creating Account..." : "Register"}
                    </button>

                </form>


                <p className="mt-6 text-center text-sm text-gray-600">

                    Already have an account?{" "}

                    <Link
                        to="/login"
                        className="font-semibold text-black hover:underline"
                    >
                        Login
                    </Link>

                </p>

            </div>

        </div>
    );
}

export default Register;