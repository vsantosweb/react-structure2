import React, { useEffect } from 'react';


export default function ForgetPassword({ layout, pageConfig }) {

    useEffect(() => {

        layout('AuthLayout')

        pageConfig({
            pageDescription: 'React',
            pageTitle: 'Recuperar Senha',
        })

    }, [layout, pageConfig])

    return (<h1>ForgotPassowrd</h1>)
}