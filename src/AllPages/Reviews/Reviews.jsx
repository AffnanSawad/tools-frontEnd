import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import { Navigation } from 'swiper/modules';

const Reviews = () => {
    return (
        




        <div className="bg-orange-50 my-10">
            
            
            {/* title */}
            <section className="text-center px-4 pt-16">
          <h1 className="text-3xl text-black md:text-4xl font-bold">
           What Clients Say <span className="text-orange-400"> About Us !</span>
          </h1>
        </section>



        <div className='pb-10'>
       

    {/* reviews */}
    
    <Swiper  navigation={true} modules={[Navigation]}    className="mySwiper mt-10 mb-10">


        <SwiperSlide>   <div className="m-10">


     
              
              <p className="font-semibold w-1/2 mx-auto"> I had my car repaired at Car Fusion, and I couldn't be happier with the service. The staff was professional, the pricing was transparent, and the turnaround time was fast. Highly recommend! </p>

     
              <h4 className="text-2xl font-bold text-yellow-500 text-center">  Jawad Iqbal </h4>


            </div> </SwiperSlide>





            {/* 2 */}
            
        <SwiperSlide>   <div className="m-10">
              
              <p className="font-semibold w-1/2 mx-auto">I took my car in for a full service and was blown away by the level of care and attention to detail. They really go above and beyond at Car Fusion. Will continue using their services for sure! </p>
              <h4 className="text-2xl font-bold text-yellow-500 text-center">  Israt Jerin Tonni </h4>


            </div> </SwiperSlide>









            {/* 3 */}

            
        <SwiperSlide>   <div className="m-10">
              
              <p className="font-semibold w-1/2 mx-auto"> I recently bought my first car from Car Fusion and had a great experience! The team was super helpful, and they walked me through every step of the process. A great place for buying and servicing cars! </p>
              <h4 className="text-2xl font-bold text-yellow-500 text-center">  Nafis Javed </h4>


            </div> </SwiperSlide>











                {/* 4 */}

        
                <SwiperSlide>   <div className="m-10">
              
              <p className="font-semibold w-1/2 mx-auto"> Car Fusion made the entire car buying process smooth and easy. The team is very knowledgeable and helped me choose the perfect car for my needs. Will definitely be coming back for any future purchases or services. </p>
              <h4 className="text-2xl font-bold text-yellow-500 text-center mt-2">  Sarah Khan </h4>


            </div> </SwiperSlide>
     
        



         

        </Swiper>
            



        </div>

        

        </div>


        
    );
};

export default Reviews;