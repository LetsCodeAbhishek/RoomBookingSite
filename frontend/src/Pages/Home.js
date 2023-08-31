import Header from "../Common/Header";
import "./Home.css";
import Footer from "../Common/Footer";

const Home =() =>{

     return(
      <div> <Header/>
        <div className='container home-main'>
       
        <div className="row home-img">
        <div className="col-6 home-heading">
        Discover The Brand <span className="color-change">Luxurious</span> Hotel

        </div>
        <div className="col-6 home-button">
          <button className="home-button-1">Our Rooms</button>
          <button className="home-button-2">Book A Rooms</button>
        </div>

        </div>
        
        </div>


        <Footer/>
        </div>
    )
};

export default Home;