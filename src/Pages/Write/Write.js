import "./Write.css";
import p1 from "../../images/p1.jpg"
export default function Write() {
  return (
    <div className="write">
      <img className="write-img" src={p1}></img>
      <form className="write-form">
        <div className="write-form-group">
            <label htmlFor="file-input">
                <i className="write-icon fa-sharp fa-solid fa-plus"></i>
            </label>
            <input type="file" id="file-input" style={{display:"none"}}></input>
            <input type="text" placeholder="Title" className="write-input" autoFocus={true}></input>
            
        </div>
        <div className="write-form-group">
            <textarea className="write-input write-text" placeholder="Add new recipie"></textarea>
        </div>
        <button className="write-submit">Publish</button>
    
      </form>
    </div>
  )
}
