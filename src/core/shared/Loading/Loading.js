import React from "react";
import './Loading.css'

// Component

const Loader = () => {

    return (
        <div className="lds-spinner loading">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}

export { Loader }