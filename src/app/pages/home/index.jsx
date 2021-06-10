import React, { useEffect } from 'react';

export default function Home({ layout, pageConfig }) {

    useEffect(() => {
        layout('SiteLayout')
        pageConfig({
            pageDescription: 'React',
            pageTitle: 'Início',
            pageUrl: '/home',
            image: null,
            navbarColor: ''

        })

    }, [layout, pageConfig]);

    return (
        <h1>Home</h1>
    )
}