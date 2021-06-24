import logo from "../../assets/Logo/Logo-brainflix.svg"
import userImg from "../../assets/Images/Mohan-muruge.jpg"
import upload from "../../assets/Icons/Icon-upload.svg";
import { Link } from "react-router-dom"
import "./Header.scss"

  
function Header() {
    return (
        <header className="header">
 
            <Link to="/">
                <img
                    src={logo}
                    alt="BrainFlix Logo"
                />
            </Link>

            <nav className="nav">
                <form className="nav__form">
                    <span className="nav__form-search"></span>
                    <input className="nav__form-input"
                        type="text"
                        name="search"
                        placeholder="Search"
                    />
                </form>
                <section className="nav__user">     
                    <Link to="/upload" className="nav__button">
                        <button className="nav__button">
                            <img className="nav__button-icon"
                                src={upload}
                                alt="Upload Icon"
                            />
                            <span className="nav__button-text">UPLOAD</span>
                        </button>
                    </Link>
                    <div className="nav__user-img">
                        <img className="nav__user-img--avatar"
                            src={userImg}
                            alt="User Avatar"
                        />
                    </div>
                </section>
            </nav>
        </header>
    )
}
  

export default Header



