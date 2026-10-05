import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {

    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    if (!user) {
        return (
            <div className="mx-auto max-w-4xl px-6 py-16 text-center">
                <h1 className="text-2xl font-bold">
                    Please login to view your profile.
                </h1>

                <button
                    onClick={() => navigate("/login")}
                    className="mt-6 bg-black px-6 py-3 text-white hover:bg-gray-800"
                >
                    Login
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 px-6 py-12">

            <div className="mx-auto max-w-2xl">

                <h1 className="text-3xl font-bold">
                    My Profile
                </h1>

                <div className="mt-8 rounded-lg bg-white p-8 shadow-md">

                    <div className="mb-6">
                        <p className="text-sm text-gray-500">
                            Name
                        </p>

                        <p className="mt-1 text-lg font-semibold">
                            {user.name}
                        </p>
                    </div>

                    <div className="mb-6">
                        <p className="text-sm text-gray-500">
                            Email
                        </p>

                        <p className="mt-1 text-lg font-semibold">
                            {user.email}
                        </p>
                    </div>

                    <div className="mb-6">
                        <p className="text-sm text-gray-500">
                            Account Type
                        </p>

                        <p className="mt-1 text-lg font-semibold capitalize">
                            {user.role || "user"}
                        </p>
                    </div>

                    <button
                        onClick={handleLogout}
                        className="w-full bg-black py-3 font-semibold text-white hover:bg-gray-800"
                    >
                        Logout
                    </button>

                </div>

            </div>

        </div>
    );
}

export default Profile;