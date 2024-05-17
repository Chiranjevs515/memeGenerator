import logo from "./images/troll-face.png";
import  "./App.css";
import 'bootstrap/dist/css/bootstrap.css';
export default function Navbar(){
    return (
        <div className="nav-container">
            <img src={logo} className="nav-img"/>
            <h2>Meme Generator</h2>
            <button type="button" class="btn btn-primary">Regenerate</button>
        </div>
    )
}