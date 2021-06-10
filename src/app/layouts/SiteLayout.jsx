import React from 'react';


export default function AppLayout({ children }) {

    React.useEffect(() => {
        window.scrollTo(0, 0);
    }, [children])

    return (
        <React.Fragment>
            <div style={{ minHeight: '100%', height: 'auto' }}>
                {children}
            </div>
        </React.Fragment>
    )
}

