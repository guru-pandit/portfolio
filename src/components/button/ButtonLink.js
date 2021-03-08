import React from "react";
import "./ButtonLink.css";

function ButtonLink({ btnText, outlined, href }) {
  return (
    <div className="button">
      {outlined ? (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="buttonlink__primary buttonlink__primary--outlined"
        >
          {btnText}
        </a>
      ) : (
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="buttonlink__primary buttonlink__primary--filled"
        >
          {btnText}
        </a>
      )}
      ;
    </div>
  );
}

export default ButtonLink;
