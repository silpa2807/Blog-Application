import "./SinglePost.css"
import p1 from "../../images/p1.jpg"
export default function SinglePost() {
  return (
    <div className="single-post">
      <div className="single-post-wrapper">
        <img className="single-post-img" src={p1}/>
        <h1 className="single-post-title"> Oats Smoothie </h1>
        <div className="single-post-edit">
            <i class="single-post-icon fa-solid fa-pen-to-square"></i>
            <i class="single-post-icon fa-solid fa-trash-can"></i>
        </div>
        <div className="single-post-info">
          <span>
            Author:
            <b className="single-post-author">
             Silpa T M
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="single-post-description">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
      </div>
    </div>
  )
}
