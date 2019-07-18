import React, { useEffect, useState } from "react"; 
import axios from "axios"
import { directive } from "@babel/types";
import Title from "./components/Title";
import Image from "./components/Image"; 
import Explanation from "./components/Explanation"; 
import Date from "./components/Date"; 
import Copyright from "./components/Copyright"; 

function Data() {
    const [data, setData] = useState([]); 


    useEffect(() => {
        axios
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2019-07-15')
        .then(response => {
            console.log(`nasa:api: ${response.data}`)
            setData(response.data); 
            console.log(response.data); 
            console.log(data.url); 
        })
        .catch(error => {
            console.log('There was an error:', error); 
        })}, []); 

        return (
            <div>
                <Title title={data.title}/>
                <Image imageSrc={data.url}/>
                <Explanation exp={data.explanation}/>
                <Date date={data.date}/>
                <Copyright copyright={data.copyright}/>
            </div>
        )

}

export default Data; 