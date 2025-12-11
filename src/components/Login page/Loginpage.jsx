import React, { useState } from "react";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Login qilindi!\nUsername: ${username}`);
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center px-4 relative"
            style={{ backgroundImage: "url('/imgs/LoginBackground.jpg')" }}
        >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm"></div>

            <form
                onSubmit={handleSubmit}
                className="relative w-full max-w-md bg-white/15 backdrop-blur-lg border border-white/30 shadow-2xl p-8 rounded-3xl"
            >
                <h1 className="text-white text-4xl mb-8 text-center font-semibold tracking-wide">
                    Login
                </h1>

                {/* Username */}
                <div className="mb-5">
                    <label htmlFor="username" className="text-white text-sm mb-1 block">
                        Username
                    </label>
                    <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3">
                        <i className="fa-solid fa-user text-white"></i>
                        <input
                            id="username"
                            type="text"
                            className="bg-transparent outline-none text-white placeholder-gray-300 flex-1"
                            placeholder="Enter username..."
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="password" className="text-white text-sm mb-1 block">
                        Password
                    </label>
                    <div className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-xl px-4 py-3">
                        <i className="fa-solid fa-lock text-white"></i>
                        <input
                            id="password"
                            type="password"
                            className="bg-transparent outline-none text-white placeholder-gray-300 flex-1"
                            placeholder="Enter password..."
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                </div>

                <div className="flex justify-between items-center text-white text-sm mb-5">
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="accent-white"
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                        />
                        Remember me
                    </label>
                    <p className="cursor-pointer hover:underline">Forgot password?</p>
                </div>

                <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-white/80 text-gray-900 font-semibold hover:bg-white transition shadow-lg"
                >
                    Login
                </button>

                <div className="mt-6 text-white text-center">
                    <p className="text-sm opacity-80">Or Sign Up Using</p>
                    <div className="flex justify-center gap-6 text-xl mt-3">
                        <i
                            className="fa-brands fa-facebook cursor-pointer hover:scale-110 transition"
                            aria-label="Login with Facebook"
                        ></i>
                        <i
                            className="fa-brands fa-google cursor-pointer hover:scale-110 transition"
                            aria-label="Login with Google"
                        ></i>
                        <i
                            className="fa-brands fa-twitter cursor-pointer hover:scale-110 transition"
                            aria-label="Login with Twitter"
                        ></i>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;
