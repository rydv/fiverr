import React from 'react';
import "./Home.scss";
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import CatCard from '../../components/catCard/CatCard'
import { cards } from '../../data';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card)=>(
          <CatCard item={card} key={card.id}/>
        ))}     
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>The best part? Everything.</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Stick to your budget
            </div>
            <p>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Get quality work done quickly
            </div>
            <p>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
            {/* <div className="title">
              <img src="./img/check.png" alt="" />
              Pay when you're happy
            </div>
            <p>Upfront quotes mean no surprises. Payments only get released when you approve.</p> */}
            <div className="title">
              <img src="./img/check.png" alt="" />
              Count on 24/7 support
            </div>
            <p>Our round-the-clock support team is available to help anytime, anywhere.</p>
          </div>
          <div className="item">
            <video src="./img/video.mp4" controls></video>
          </div>
        </div>
      </div>
      <div className="featuresBuz">
        <div className="container">
          <div className="item">
            <div className="itemHead">
              <h1>fiverr<span>.</span></h1>
              <span className='subHead'>Business Solutions</span>
            </div>
            <h1>Advanced solutions and professional talent for businesses</h1>
            <div className="businesscat">
              <div className="icon">
                <VerifiedRoundedIcon />
              </div>
              <p>
                <span>Fiverr Pro</span><br />
                Access top freelancers and professional business tools for any project
              </p>
            </div>
            <div className="businesscat">
              <div className="icon">
                <VerifiedRoundedIcon />
              </div>
              <p>
                <span>Fiverr Certified</span><br />
                Build your own branded marketplace of certified experts
              </p>
            </div>
            <div className="businesscat">
              <div className="icon">
                <VerifiedRoundedIcon />
              </div>
              <p>
                <span>Fiverr Enterprise</span><br />
                Manage your freelance workforce and onboard additional talent with an end-to-end SaaS solution
              </p>
            </div>
            <button>
              Learn More
            </button>
          </div>
          <div className="item">
            <img src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"></img>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;