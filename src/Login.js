import React from "react";
export const Login = ({closeLogin, showCreateUser}) => {
    return(
        <div id="login">
             
            <div>
                <text id="close-login" onClick={closeLogin}>Close X</text>
                <div>
                    <div className="email-container">
                        <text className="email" >Email: </text>
                        <input id="user-email" className="input-email"/>
                    </div>
                    <div className="password-container">
                        <text className="password" >Password: </text>
                        <input id="user-password" className="input-password" />
                    </div>
                    <div>
                        <button id="login-button" onClick={closeLogin}>Sign In</button>
                    </div>
                    <div className="new-user">
                        <text>New User?</text>
                        <button id="create-account-button" onClick={showCreateUser}>Sign Up</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}