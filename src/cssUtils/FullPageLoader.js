import React from 'react';
import Spinner from 'react-bootstrap/Spinner'
import '../App.css';
const FullPageLoader = ()=>{
    return (
        <div className="fp-container">
            <div className="fp-loader">
            <div className="spinner-border load-spinner" role="status">
                    <span class="sr-only">Loading...</span>
            </div>
        </div>
        </div>
    )
}

export default FullPageLoader;