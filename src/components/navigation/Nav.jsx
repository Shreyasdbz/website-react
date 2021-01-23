import React from "react";
import { Link } from "react-scroll";

function Nav() {
  return (
    <div className="nav">
      <li>
        <Link
          to="Hero"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Hero
        </Link>
      </li>
      <li>
        <Link
          to="About"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          About
        </Link>
      </li>
      <li>
        <Link
          to="Projects"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
        >
          Projects
        </Link>
      </li>
    </div>
  );
}

export default Nav;
