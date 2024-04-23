import React, {useState} from "react";
export const CreateUser = ({closeCreateUser}) => {
    return(
        <div id="create-user">
            
            <div>
                <text id="close-create-user" onClick={closeCreateUser}>Close X</text>
                <div>
                    <h2 id="create-user-title">Create an account</h2>
                    <div className="email-container">
                        <text className="email" >Email: </text>
                        <input id="create-user-email" className="input-email"/>
                    </div>
                    <div className="password-container">
                        <text className="password" >Password: </text>
                        <input id="create-user-password" className="input-password" />
                    </div>
                    <div>
                        <button id="create-user-button" onClick={closeCreateUser}>Sign Up</button>
                    </div>
                </div>
            </div>
        
        </div>
    );
}