import React, { useEffect, useState } from "react"; 
import axios from "axios"
import { directive } from "@babel/types";

function Data() {
    const [data, setData] = useState([]); 
    const [url, setUrl] = useState([]); 
    const [explanation, setExplanation] = useState([]); 
    const [date, setDate] = useState([]); 
    const [copyright, setCopyright] = useState([]); 

    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15')
        .then(response => {
            console.log(`nasa:api: ${response.data}`)
            setData(response.data); 
        })
        .catch(error => {
            console.log('There was an error:', error); 
        })}, []); 

        return (
            <div>
                <div>{data.title}</div>
                <img src={data.url} alt="nasa of the day"></img>
                <div>{data.explanation}</div>
                <div>{data.date}</div>
                <div>{data.copyright}</div>
            </div>
        )

}

export default Data; 