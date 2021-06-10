import React, { useEffect } from 'react';

export default function Register({ layout, pageConfig }) {

    useEffect(() => {

        layout('AuthLayout')

        pageConfig({
            pageDescription: 'React',
            pageTitle: 'page',
        });

    }, [layout, pageConfig])

    return <h1>Register</h1>
}