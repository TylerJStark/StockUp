import React from "react";
import "./LoginBtn.css";

const LoginBtn = props => <button type="button" id="loginBtn" class="btn btn-dark" data-toggle="modal" data-target="loginModal">{props.children}</button>;

export default LoginBtn;