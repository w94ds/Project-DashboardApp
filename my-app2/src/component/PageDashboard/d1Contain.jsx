import React, { useState } from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';

const D1Contain = () => {
    // const [isId, setIsId] = useState(0);
    const [isName, setIsName] = useState([]);

    // const ShowText = (props) => {
    //     return <p>Click {props.value}</p>;
    // };

    let jsonData

    const FetchClick = () => {
        console.log('HIHIHI')

        fetch('http://127.0.0.1:5000')
            .then((response) => response.json())
            .then((json) => {
                jsonData = json
                console.log(jsonData)
                // console.log(typeof (jsonData))
                // console.log(jsonData.Id)
                // console.log(jsonData.Name)
                UpdateUI()
            })
            .catch((error) => console.log(error));
    }

    const UpdateUI = () => {
        // setIsId(jsonData.Id)
        setIsName(jsonData.Name)
    }

    return (
        <div className="d1Contain">
            <DashboardIcon className="d1icon" />
            <button onClick={FetchClick}>Fetch</button>
            {/* <a >{setIsId}</a> */}
            <p>{setIsName}</p>
        </div>
    )
}
export default D1Contain;