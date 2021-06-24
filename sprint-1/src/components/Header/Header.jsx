import "./Header.scss"
import logo from "../../assets/Logo/Logo-brainflix.svg"
import userImg from "../../assets/Images/Mohan-muruge.jpg"
import upload from "../../assets/Icons/Icon-upload.svg";


  
function Header(){
    return (
        <header className="header">
            <a className="header__img" href="../../index.js" >
                <img
                    src={logo}
                    alt="BrainFlix Logo"
                />
            </a>
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
                    <button className="nav__button">
                        <img className="nav__button-icon"
                            src={upload}
                            alt="Upload Icon"
                        />
                        <span>UPLOAD</span>
                    </button>
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



