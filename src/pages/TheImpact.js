import React from 'react';
import  MyPieChart  from '../component/MyPieChart';

import './TheirImpact.css'; // Assuming you put the CSS code above in App.css
function TheirImpact() {
    
        return <div class="container">
             <div class="row text-center" data-scroll-reveal="enter from the bottom after .3s">
            <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
                <h2>The impact</h2>
                <p>Following percentage are define for using the fund that our avaialble</p>
                <p> </p>
            </div>
            <div class="col-lg-12 text-center">
                <center><MyPieChart/></center>    
            </div>
            <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2">
            <p>Uptil now program like education program and nutrition program are introduced but it is planed to <br/> 
            introduced also another programs such as Noor technical program ,<br/> Noor Healthcare program and Noor earlychildhood program</p>
            </div>  
        </div>
    </div>
       
    }
export default TheirImpact;
