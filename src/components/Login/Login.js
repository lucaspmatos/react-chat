import React from "react";
import Api from "../../Api";
import "./Login.css";

import FacebookIcon from '@material-ui/icons/Facebook';

export default function Login({ onReceive }) {
  const handleFbLogin = async () => {
    let result = await Api.fbPopUp();

    if (result) {
      onReceive(result.user);
    } else {
      alert("Erro: não foi possível logar com sua conta no Facebook!");
    }
  };

  return (
    <div className="login">
      <button onClick={handleFbLogin}>
        <FacebookIcon className="fbIcon"/>
        Entrar com o Facebook
      </button>
    </div>
  );
}