import React from 'react';

function Footer() {
    const d = new Date();
    var year = d.getFullYear()
    return (
        <footer> 
            <p>Copyright to Vincent Chiang {year} </p>
        </footer>
    )
}

export default Footer