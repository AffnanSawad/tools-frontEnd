import AboutSection from "../AllPages/AboutSection/AboutSection";
import Advertisement from "../AllPages/Advertisement/Advertisement";
import AfterBanner from "../AllPages/AfterBanner/AfterBanner";
import BotpressChatbot from "../AllPages/AIChatBot/BotpressChatbot";
import Banner from "../AllPages/Banner/Banner";
import CarLogoPage from "../AllPages/CarLogoPage/CarLogoPage";
import CarShowHome from "../AllPages/CarShowHome/CarShowHome";
import Reviews from "../AllPages/Reviews/Reviews";
import Sponsered from "../AllPages/Sponsered/Sponsered";
import SubMitReview from "../AllPages/SubMitReview/SubMitReview";
import YoutubeChannel from "../AllPages/YoutubeChannel/YoutubeChannel";


const Home = () => {
    return (
        <div>

            
        
           <Banner></Banner>      
           <AfterBanner></AfterBanner>
           <AboutSection></AboutSection>
           <CarShowHome></CarShowHome>
           <Advertisement></Advertisement>
           <YoutubeChannel></YoutubeChannel>
           <CarLogoPage></CarLogoPage>
           <Reviews></Reviews>
           <Sponsered></Sponsered>
            <SubMitReview></SubMitReview>
             <BotpressChatbot></BotpressChatbot>


        </div>
    );
};

export default Home;