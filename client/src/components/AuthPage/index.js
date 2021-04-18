import React, { useState, useEffect, useContext } from 'react';
import { useHttp } from '../../hooks/http.hook';
import { useMessage } from '../../hooks/message.hook';
import { AuthContext } from '../../context/AuthContext'

const AuthPage = () => {
    const auth = useContext(AuthContext);
    console.log(auth);
    const message = useMessage();
    const { loading, error, clearError, request } = useHttp();
    const [form, setForm] = useState({
        emai:'', password: ''
    });

    useEffect(() => {
        message(error);
        clearError();
    }, [error, message, clearError])

    const changeHandler = (event) => {
        setForm({
            ...form, [event.target.name]: event.target.value
        })
    };

    const registerHandler = async () => {
        try {
            const data = await request('/api/auth/register', 'POST', {...form});
            message(data.message);
        } catch (e) {}
    }

    const loginHandler = async () => {
        try {
            const data = await request('/api/auth/login', 'POST', {...form});
            auth.login(data.token, data.userId);
        } catch (e) {}
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Enter your pass</h1>
                <div className="card teal darken-3">
                    <div className="card-content white-text">
                    <span className="card-title">Авторизация</span>
                    <div>
                        <div className="input-field">
                            <input
                                placeholder="Введите e-mail"
                                id="email"
                                name="email"
                                type="text"
                                className="yellow-input"
                                onChange={changeHandler}
                            />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="input-field">
                            <input
                                placeholder="Введите пароль"
                                id="password"
                                name="password"
                                type="password"
                                className="yellow-input"
                                onChange={changeHandler}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                   
                    </div>
                    <div className="card-action">
                        <button
                            className="btn yellow darken-4"
                            style={{ marginRight: 16 }}
                            onClick={loginHandler}
                            disabled={loading}
                        >
                            Enter
                        </button>
                        <button 
                            className="btn grey lighten-1 black-text"
                            onClick={registerHandler}
                            disabled={loading}
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AuthPage;

