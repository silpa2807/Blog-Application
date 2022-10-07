import "./Home.css"
import Header from "../../components/Header/Header"
import SideBar from "../../components/SideBar/SideBar"
import Posts from "../../components/Posts/Posts"
export default function Home(){
    return (
        <>
         <Header/>
        <div className="home">
            <Posts/>
            <SideBar/>
        </div>
        </>
       
    )
}