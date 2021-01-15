import React from "react";
import "./Copyright.css";

function Copyright() {
  return (
    <div className="copyright">
      <p className="copyright__text">
        Copyright &copy; 2021 | All Rights Reserved{" "}
      </p>
      <p className="copyright__developer">
        Developed By{" "}
        <span className="copyright__developerName">Guruprasad Pandit</span>
      </p>
    </div>
  );
}

export default Copyright;
