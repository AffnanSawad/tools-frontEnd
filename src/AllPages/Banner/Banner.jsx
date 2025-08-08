import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {

    
       
        
    return (
      <div className="bg-black">

<Carousel   autoPlay interval={3000} infiniteLoop stopOnHover={false}>
      <div>
        <img  src="https://i.ibb.co.com/Y4N5ks6V/zan-lazarevic-1-BWBi-UUT-AA-unsplash.jpg"   alt="Banner 1" />
      </div>
      <div>
        <img src="https://i.ibb.co.com/gbQLGcbn/tyler-clemmensen-d1-Jum1v-VLew-unsplash-1.jpg"   alt="Banner 2" />
      </div>
      <div>
        <img src="https://i.ibb.co.com/jP6ZcKR3/campbell-3-ZUs-NJhi-Ik-unsplash.jpg" alt="Banner 3" />
      </div>
      <div>
        <img src="https://i.ibb.co.com/ns82V97w/tyler-clemmensen-w-Lp-TPp2dzs-Y-unsplash.jpg"  alt="Banner 3" />
      </div>
      <div>
        <img src="https://i.ibb.co.com/WWvNwhhv/jon-koop-kh-YVy-Hi-NZo0-unsplash.jpg" alt="Banner 3" />
      </div>
      <div>
        <img src="https://i.ibb.co.com/w85gNqH/yannis-zaugg-s-DPr3-ZWfy9w-unsplash.jpg"  alt="Banner 3" />
      </div>
    </Carousel>


      </div>
    );
};

export default Banner;