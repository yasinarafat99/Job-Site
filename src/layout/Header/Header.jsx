import { useAuthState, useSignOut } from "react-firebase-hooks/auth";
import { auth } from "../../firbase/firebase";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/halalaJibikaLogo.png'
import './header.css'
function Header() {
  const [user] = useAuthState(auth);
  const [signOut, loading, error] = useSignOut(auth);
  const [signOutShow, setSignOutShow] = useState(false);
  const handleCheckboxClick = () => {
    const checkbox = document.getElementById("check");
    if (checkbox.checked) {
      checkbox.checked = false;
    }
  };

  const signOutClick = () => {
    setSignOutShow(!signOutShow);
  };

  const signOutBtn = () => {
    signOut();
    setSignOutShow(false)
  }
  return (
    <>
      <nav >
        <input type="checkbox" name="" id="check" />
        <label htmlFor="check" className="checkbtn">
          <FaBars />
        </label>
        <label className="logo">
          <NavLink to={"/"} onClick={handleCheckboxClick}>
            {" "}
            <img src={logo} alt="Halal Jibika" />{" "}
          </NavLink>
        </label>
        <div className="menu">
          <ul>
            <li>
              <NavLink to={"/home"} onClick={handleCheckboxClick}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/jobs"} onClick={handleCheckboxClick}>Jobs</NavLink>
            </li>
            <li>
              <NavLink to={
                
                "/favorite"} onClick={handleCheckboxClick}>Favorite</NavLink>
            </li>
            <li>
              <NavLink to={"/about"} onClick={handleCheckboxClick}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} onClick={handleCheckboxClick}>Contact</NavLink>
            </li>
            {
              !user ? (
                <li>
                  <NavLink className="signup" to={"/signup"} onClick={handleCheckboxClick}>
                    Sign up
                  </NavLink>
                </li>
              ) : (
                <img
                  onClick={signOutClick}
                  src={user?.photoURL}
                  alt="user"
                />
              )
            }
          </ul>
          {signOutShow && <p className="signOutBtn"><button onClick={signOutBtn}>Sign Out</button></p>}
        </div>
      </nav>
    </>
  );
}

export default Header;
