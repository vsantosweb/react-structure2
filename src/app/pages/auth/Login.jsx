import React, { useEffect } from 'react';

export default function Login({ layout, pageConfig }) {

    useEffect(() => {

        layout('AuthLayout')

        pageConfig({
            pageDescription: 'React',
            pageTitle: 'Login',
        })

    }, [layout, pageConfig])


    return ( <h1>Login</h1> )
}