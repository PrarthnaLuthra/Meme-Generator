
import React from "react";


export default function Meme(){
    const [meme, setMeme]= React.useState({
        topText:"",
        bottomText:"",
        randomImage:"http://i.imgflip.com/1bij.jpg"
    })
    const[allMemes,setAllMemes]=React.useState([])
        
    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMemeImage() {
        
        const randomNumber = Math.floor(Math.random() * allMemes.length)
        const url= allMemes[randomNumber].url
       
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage:url
        }))
        
        
    }
    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }


    return(
        <main>
            <div className="Form">
            <input
                type="text"
                placeholder="Top text" 
                className="FormInput"
                name="topText"
                value={meme.topText}
                onChange={handleChange}
                />
            <input 
                type="text" 
                placeholder="Bottom text" 
                className="FormInput"
                name="bottomText"
                value={meme.bottomText}
                onChange={handleChange}
                />
                <button onClick={getMemeImage} className="FormButton">Get a new meme image🖼️</button>
            </div>
            {/* <img className="MemeImage" src ={meme.randomImage}/> */}
            <div className="meme">
                <img src={meme.randomImage} className="MemeImage" />
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}