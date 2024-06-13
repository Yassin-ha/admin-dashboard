import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { IoCloseOutline } from 'react-icons/io5';

const Login: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        try {
            const response = await axios.post('/api/login', { email, password });
            console.log('Login successful', response.data);
            // handle successful login (e.g., redirect to dashboard)
        } catch (error) {
            setError('Invalid email or password');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full mx-3 bg-white p-8 rounded-lg shadow-md ">
                <h2 className="text-2xl font-bold mb-6 text-center">
                    {' '}
                    تسجيل الدخول / Login{' '}
                </h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-gray-700">
                            البريد الالكتروني / Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder='البريد الالكتروني '
                            required
                            className="w-full p-2 border outline-none border-gray-300 rounded-sm mt-1"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700">
                            الرقم السري / Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder='الرقم السري '
                            required
                            className="w-full p-2 outline-none border border-gray-300 rounded-sm mt-1"
                        />
                    </div>
                    {error && <div className="text-red-500 mb-4">{error}</div>}
                    <button
                        type="submit"
                        className=" w-25 flex justify-center mx-auto p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
