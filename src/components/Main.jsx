import { use } from "react"
import { useState, useEffect } from "react"
function Main() {

    const [meme, setMeme] = useState({
        topText: "One does not simply",
        bottomText: "Walk into Mordor",
        imageUrl: "https://i.imgflip.com/1bij.jpg"
    });

    const [allMemes, setAllMemes] = useState([]);

    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function handleChange(event) {
        const { value, name } = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    function handleClick(){
        const randomMeme = Math.floor(Math.random() * allMemes.length)
        const mem = allMemes[randomMeme].url
        setMeme(prevMeme => ({
            ...prevMeme,
            imageUrl: mem
        }))
    }

    return (
        <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>
                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
   b                     name="bottomText"
                        onChange={handleChange}
                        // value={meme.bottomText}
                    />
                </label>
                <button onClick={handleClick}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} className="img" alt="Meme Image" />
                <span>{meme.topText}</span>
                <span>{meme.bottomText}</span>
            </div>
        </main>
    )

}

export default Main