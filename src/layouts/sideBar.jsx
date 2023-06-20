import "./sidebar.css";
import { AiFillHome, AiOutlineSearch } from "react-icons/Ai";
import { BsStars } from "react-icons/Bs";
import { BiCrown, BiLogIn } from "react-icons/Bi";
import { Link } from "react-router-dom";

const sideBar = () => {
  return (
    <>
      <nav className="sidebar">
        <span className="title">I Movie</span>
        <div className="menu">
          <div className="menu-top">
            <div className="list">
              <Link to="/" style={{ color: "teal" }}>
                <i className="icon">
                  <AiFillHome />
                </i>
                <spam>Home</spam>
              </Link>
            </div>
            <div className="list">
              <Link to="/discover" style={{ color: "teal" }}>
                <i className="icon">
                  <AiOutlineSearch />
                </i>
                <spam> Discover</spam>
              </Link>
            </div>
            {/* <div className="list">
              <a href="#">
                <i className="icon">
                  <BsStars />
                </i>
                <spam>Award</spam>
              </a>
            </div>
            <div className="list">
              <a href="#">
                <i className="icon">
                  <BiCrown />
                </i>
                <spam>Top250</spam>
              </a>
            </div> */}
          </div>
          {/* <div className="menu-bottom">
            <div className="list account">
              <a href="#">
                <i className="icon">
                  <BiLogIn />
                </i>
                <spam>Login</spam>
              </a>
            </div>
            <div className="list account">
              <a href="#">
                <i className="icon">
                  <BiLogIn />
                </i>
                <spam>Sign In</spam>
              </a>
            </div>
          </div> */}
        </div>
      </nav>
    </>
  );
};

export default sideBar;
