import { useEffect } from "react";
import { useState } from "react"

// eslint-disable-next-line react/prop-types
export default function Card({search, name}) {
    
    const [gif, setGif] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=7TkQTQcCKnUowWt57hE4H86f8uc73NIP&s=${search}`)
                if (!response.ok) new Error('Failed');


                const data = await response.json();
                setGif(data.data.images.original.url);
            } catch (error) {
                console.error(error);
            }
        }

        fetchData();
    }, []);


    //https://api.giphy.com/v1/gifs/translate?api_key=7TkQTQcCKnUowWt57hE4H86f8uc73NIP&s=cats
    // 7TkQTQcCKnUowWt57hE4H86f8uc73NIP

    return (
        <>
        <div className="card">
            <img src={gif} alt="" />
            <div className="name">{name}</div>
        </div>
        </>
    )
}