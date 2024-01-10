import React from 'react';

export default function ItemListContainer({ greetings }) {
    const greetingsStyles = {
        color: '#fcc5da',
        fontSize: '16px',
        fontStyle: 'cursive',
        textAlign: 'center'
    };

    return (
        <div>
            <h2 style={greetingsStyles}>{greetings}</h2>
        </div>
    );
}
