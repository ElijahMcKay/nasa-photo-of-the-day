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
        .get('https://api.nasa.gov/planetary/apod?api_key=lScG6MrWnDarwPxYp1wdk8MlQgMs1MBqW59Sqfzp&date=2019-07-14')
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
                <Image imageSrc={data.url}/>
                <Title title={data.title}/>
                <Date date={data.date}/>
                <Explanation exp={data.explanation}/>
                <Copyright copyright={data.copyright}/>
            </div>
        )

}

export default Data; 