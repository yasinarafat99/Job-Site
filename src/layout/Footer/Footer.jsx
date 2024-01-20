import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
  } from "react-icons/fa";
  import "./footer.css";
  import { Link } from "react-router-dom";
  
  const social_iconsStyles = { color: "#fff", fontSize: "20px" };
  function Footer() {
    return (
      <>
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-col">
                <h4>company</h4>
                <ul>
                  <li>
                    <Link>about us</Link>
                  </li>
                  <li>
                    <Link>our services</Link>
                  </li>
                  <li>
                    <Link>privacy policy</Link>
                  </li>
                  <li>
                    <Link>Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>get help</h4>
                <ul>
                  <li>
                    <Link>FAQ</Link>
                  </li>
                  <li>
                    <Link>Career Counseling</Link>
                  </li>
                  <li>
                    <Link>Employability Test</Link>
                  </li>
                  <li>
                    <Link>Video CV new</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>Job Seekers</h4>
                <ul>
                  <li>
                    <Link>Jobs Panel</Link>
                  </li>
                  <li>
                    <Link>List of Features</Link>
                  </li>
                  <li>
                    <Link>Create Account</Link>
                  </li>
                  <li>
                    <Link> Career Counseling</Link>
                  </li>
                </ul>
              </div>
              <div className="footer-col">
                <h4>follow us</h4>
                <div className="social-links">
                  <Link>
                    <FaFacebookF style={social_iconsStyles} />
                  </Link>
                  <Link>
                    <FaTwitter style={social_iconsStyles} />
                  </Link>
                  <Link>
                    <FaInstagram style={social_iconsStyles} />
                  </Link>
                  <Link>
                    <FaLinkedinIn style={social_iconsStyles} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
  
  export default Footer;
  