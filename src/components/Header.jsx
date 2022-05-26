import * as React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <React.Fragment>
      <span><FontAwesomeIcon icon={["fab", "facebook"]}/></span>
      <span><FontAwesomeIcon icon={["fab", "twitter"]}/></span>
      <span><FontAwesomeIcon icon={["fab", "instagram"]}/></span>
      <span><FontAwesomeIcon icon={["fab", "tiktok"]}/></span>
      <span><FontAwesomeIcon icon={["fab", "linkedin"]}/></span>
      <span><FontAwesomeIcon icon={["fab", "reddit"]}/></span>
      <span><FontAwesomeIcon icon={["fab", "tumblr"]}/></span>
    </React.Fragment>
  );
}

export default Header;