import React from "react";
import "./App.css";
import memeData from "./memedata.jsx"
export default function Form(){
    const [memeImage , setImage]= React.useState("");

    function setMemeImage(){
    let memeArray =memeData.data.memes;
    let randomNumber=Math.floor(Math.random()* memeArray.length);
    setImage(memeArray[randomNumber].url)
    }

    return (
        <>
        <div className="form-container">
            <div className="main-form">
                <label >Top text
            <input type="text" className="form-inout" placeholder="top" />
            </label>
            <label > Bottom text
            <input type="textt" className="form-inout" placeholder="bottom"/>
            </label>
            <button onClick={setMemeImage} className="">Get a new meme image</button>
            
            </div>
            
            
            
            
            
        </div>
        <section className="img-container">
            <img src={memeImage} className="meme-img"/>
            </section>
        </>
        
    )
}