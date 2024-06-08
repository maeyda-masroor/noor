import CEOMessage from '../component/CEOMessage';
import AnnualReport from '../component/AnnualReport';
import Slider from '../component/Slider';
import OurProvenSuccess from '../component/OurProvenSuccess';
import Testinomials from '../component/Testinomials';
import CompanyLogo from '../component/CompanyLogo';
import photos from "../component/Gallery";
import PhotoAlbum from "react-photo-album";

function Home(){
    return <div>
        <Slider/>
        <CEOMessage/>
        <OurProvenSuccess/>
        <PhotoAlbum photos={photos} layout="rows" targetRowHeight={150}  />
        <AnnualReport/>
        <Testinomials/>
        <CompanyLogo/>
        
    </div>
}
export default Home;