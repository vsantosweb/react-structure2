import React from 'react';

export default function ErrorLayout({ children }) {
    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
            
            {children}
        </div>
    )
}