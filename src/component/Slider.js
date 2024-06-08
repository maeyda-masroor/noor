import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
const fadeImages = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
  ];
function Slider(){

    return <div>
        <div class="fh5co-hero">
			<div class="fh5co-overlay"></div>	
            <div id="carousel-slider" class="carousel slide" data-ride="carousel">
                <div class="slide-container">
            <Fade>
            <div class="each-fade">
            <img src={fadeImages[0]} width={'100%'} height={'500px'}/>
            </div>
            <div class="each-fade">
            <img src={fadeImages[1]}  width={'100%'}  height={'500px'}/>
            </div> 
            <div class="each-fade">
            <img src={fadeImages[2]}  width={'100%'} height={'500px'}/>
            </div>
            </Fade>
        </div>
        </div>
		</div>
    </div>
}
export default Slider;