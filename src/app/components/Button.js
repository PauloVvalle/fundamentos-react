import React from "react";

function Button({ children }){
    return (
        <button className="bg-black hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">
            {children}
        </button>
    )
}

export default Button;