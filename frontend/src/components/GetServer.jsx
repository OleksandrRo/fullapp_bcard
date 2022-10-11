import axios from "axios";
import { useState } from "react";
import { ClickButton } from "../components/Button"
import { AboutMe, Item, HomePage } from "../App.styled";



export const GetServer = () => {
    const [myData, setMyData] = useState({})

    const fetchData = async () => {
        const response = await axios.get(`http://localhost:3001/`);
        setMyData(response.data)
    }


    return <HomePage>
        <AboutMe>
            <Item>Name: {myData.name}</Item>
            <Item>Hobby: {myData.hobby}</Item>
        </AboutMe>
        <ClickButton fetchData={fetchData} />
    </HomePage>

};
