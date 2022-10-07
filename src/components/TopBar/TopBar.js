import "./TopBar.css"
import ProfilePicture from "../../images/ProfilePicture.jpg"
export default function TopBar(){
    return(
        <div className="top-bar">
            <div className="top-left">
            <i class="top-icon fa-brands fa-square-facebook"></i>
            <i class="top-icon fa-brands fa-square-instagram"></i>
            <i class="top-icon fa-brands fa-square-twitter"></i>
            </div>
            <div className="top-centre">
                <ul className="top-list">
                    <li className="top-list-item">HOME</li>
                    <li className="top-list-item">ABOUT</li>
                    <li className="top-list-item">CONTACT</li>
                    <li className="top-list-item">WRITE</li>
                </ul>
            </div>
            <div className="top-right">
            <img
              className="top-img"
              src={ProfilePicture}
              alt=""
            />
            <i className="top-serach-icon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}