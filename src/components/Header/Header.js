import "./Header.css"
import HomePageImage from "../../images/HomePageImage.jpg"
export default function Header(){
    return (
        <div className="header">
            <div className="header-title">
                <span className="header-title-sm">Eat Healthy</span>
                <span className="header-title-lg">Recipies in less than 10 minutes</span>
            </div>
            <img className="header-img" src={HomePageImage} />
        </div>
    )
}