import React, { useEffect, useState } from 'react'

export default function PhotoData() {
    const [ pics, setPics ] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = () => {
        fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY')
        .then((res) => res.json())
        .then((data) => {
            console.log(data.photos)
            setPics(data.photos)
        })
    }


    return (
        <div>
            Images:
            {
                pics.map((pic) => {
                    return (
                        <div>
                            <h3>{pic.camera.name}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}
