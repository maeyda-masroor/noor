import {Link} from 'react-router-dom'
import React from "react"; 
const AnnualReport = () => {
    let url = "https://drive.google.com/file/d/1h1E5xEGbyYzejVE8_BkqMkrdgpDT8WZ6/view?usp=sharing"; 
    return ( 
        <div style={{padding:'10px',margin:'10px'}}> 
            <center> 
                <h1>Our Annual Report For Year 2023</h1> 
                <h3>Click on below link to open 
                    PDF file in new tab</h3> 
                <Link to={url} target="_blank"
                    rel="noreferrer"> 
                    Open Annual Report
                </Link> <br></br> 
            </center> 
        </div> 
    ); 
}; 
  
export default AnnualReport;