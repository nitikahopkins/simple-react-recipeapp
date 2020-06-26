import React from "react";
import { Link } from "@reach/router";
import styles from "../CSS/Nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.Nav} id="main-nav">
      <Link to="/" className={styles.NavLink}>
        Home
      </Link>
      <Link to="/recipes" className={styles.NavLink}>
        Recipes
      </Link>
    </nav>
  );
};

export default Nav;

/* export default () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/recipes">Recipes</Link>
    </nav>
  );
}; */
