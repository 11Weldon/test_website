import React, { useState } from "react";
import axios from "axios";

export const Registration = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [email , setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);

    const submit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        try {
            const user = {
                username: username,
                email: email,
                first_name: first_name,
                last_name: last_name,
                password: password,
                confirmPassword: confirmPassword,

            };

            const { data } = await axios.post('http://localhost:8000/api/auth/register/', user, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            console.log(data);
            // Redirect or perform other actions after successful registration
        } catch (error) {
            console.error('Registration failed', error);
            setError('Registration failed. Please try again.');
        }
    };

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={submit}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Register</h3>
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                            className="form-control mt-1"
                            placeholder="Enter Username"
                            name="username"
                            type="text"
                            value={username}
                            required
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>First_name</label>
                        <input
                            className="form-control mt-1"
                            placeholder="Enter Username"
                            name="first_name"
                            type="text"
                            value={first_name}
                            required
                            onChange={(e) => setFirst_name(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Last_name</label>
                        <input
                            className="form-control mt-1"
                            placeholder="Enter Username"
                            name="last_name"
                            type="text"
                            value={last_name}
                            required
                            onChange={(e) => setLast_name(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email</label>
                        <input
                            className="form-control mt-1"
                            placeholder="Enter Email"
                            name="Email"
                            type="text"
                            value={email}
                            required
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            name="password"
                            type="password"
                            className="form-control mt-1"
                            placeholder="Enter password"
                            value={password}
                            required
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Confirm Password</label>
                        <input
                            name="confirmPassword"
                            type="password"
                            className="form-control mt-1"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            required
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-danger">{error}</p>}
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );

};
