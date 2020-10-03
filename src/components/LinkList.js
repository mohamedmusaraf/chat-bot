import React from "react";

import "./LinkList.css";

const LinkList = (props) => {
  const linkMarkup = props.options.map((link) => (
    <li key={link.id} className="link-list-item">
      <p
        className="link-list-item-url"
      >
        {link.text}
      </p>
      <p
        className="link-list-item-url"
      >
        {link.answer}
      </p>
    </li>
  ));

  return <ul className="link-list">{linkMarkup}</ul>;
};

export default LinkList;