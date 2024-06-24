import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Home = () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/photos"

    const [photos, setPhotos] = useState([]);

    const getData = async () => {
        try {
            const response = await axios.get(apiUrl);
            setPhotos(response.data);
        } catch (error) {
            console.log("error");
        }
    }

    useEffect(() => {
        getData()
    }, [])
    console.log(photos);
    return (
        <div>
            <h1>Welcome to React JS Training</h1>
            <h3>Click the above links to Navigate to topics</h3>
            {photos.slice(0, 5).map((item) => {
                return (
                    <div key={item.id}>
                        <h2>{item.title}</h2>
                        <img src={item.url} alt={item.title} />
                    </div>
                )
            })}
        </div>
    )
}

export default Home