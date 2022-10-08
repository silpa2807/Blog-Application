import "./SideBar.css";
import ProfilePicture from "../../images/ProfilePicture.jpg"
export default function SideBar() {
  return (
    <div className="sidebar">
        <div className="sidebar-item">
            <span className="sidebar-title">ABOUT ME</span>
            <img className="sidebar-img" src={ProfilePicture}/>
            <p className="sidebar-text">I am Silpa, a techie who aims to eat and stay healthy amid the tight deadlines. I am healthy diet enthusiast who always tries to make homely food to keep my body good. Most of the people who works in corporate finds it difficult to stay healthy beacuse they often eat out and have a lot of junk food. Why do we always eat outside? ...Mostly due to lack of time and energy to prepare food after a long and tiring dfay of work. So here i introduce dishes that can be preparted in short time and are very much healthy. It will save time and keep your body fit. Lets stop eating too much junk and start wearing the chef hat for sometime an cook tasty dishes in no time.</p>
        </div>
        <div className="sidebar-item">
            <span className="sidebar-title">CATEGORIES</span>
            <ul className="sidebar-list">
                <li className="sidebar-list-item"> Smoothies</li>
                <li className="sidebar-list-item"> Salads </li>
                <li className="sidebar-list-item"> Veggies </li>
                <li className="sidebar-list-item"> Fruits </li>
            </ul>
        </div>
        <div className="sidebar-item">
          <span className="sidebar-title">FOLLOW US</span>
          <div className="sidebar-social">
              <i class="sidebar-icon fa-brands fa-square-facebook"></i>
              <i class="sidebar-icon fa-brands fa-square-instagram"></i>
              <i class="sidebar-icon fa-brands fa-square-twitter"></i>
          </div>
        </div>
    </div>
  )
}
