import React, { useEffect } from 'react';

export default function PasswordReset({ layout, pageConfig, ...props }) {

    useEffect(() => {
        layout('AuthLayout')
        pageConfig({
            pageDescription: 'react',
            pageTitle: 'Redefinir Senha',
            image: null
        });
    }, [layout, pageConfig])

    return <h1>ResetPassword</h1>

}