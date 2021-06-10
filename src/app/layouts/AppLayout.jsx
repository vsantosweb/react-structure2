import React from 'react';


export default function AppLayout({ children }) {
    return (
        <React.Fragment>
            <div style={{ minHeight: '100%', height: 'auto' }}>
                {children}
            </div>
        </React.Fragment>
    )
}

