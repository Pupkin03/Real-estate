import { Link } from "react-router-dom/cjs/react-router-dom"
import { nav } from "../../data/Data"
import "./header.css"
import { useState } from "react"


const Header = () => {
    const [navlist, setnavlist] = useState(false)
    return (
    <>
    <header>
        <div className='container flex'>
            <div className='logo'>
                <img src='../images/location/logo.png' alt=''/>
            </div>
            <div className="nav">
            <ul className={navlist ? "small" : "flex"}>
                {nav.map((list, index) => (
                <li key={index}>
                <Link to={list.path}>{list.text}</Link>
                </li>
                ))}
            </ul>
            </div>
            <div className="button flex">
                <h4>
                    <span>2</span> My List
                </h4>
                <button className="btn1">
                    <i className="fa fa-sign-out"></i> Sign In
                </button>
            </div>
            <div className="toggle">
                <button onClick={() =>setnavlist(!navlist)}>
                {navlist ?  <i className="fa fa-times"></i> : <i 
                className="fa fa-bars"></i>}
                </button>
            </div>
        </div>
    </header>
    </>
    )
}

export default Header