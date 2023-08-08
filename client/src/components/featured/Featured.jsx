import React from 'react'
import "./Featured.scss";
import featuredMan from "../../../public/img/man.png"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

const Featured = () => {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Find the right <span>freelance</span> service, right away</h1>
                <div className="search">
                    <div className="searchInput">
                        <input type="text" placeholder='Search for any service...' />
                    </div>
                    <button>
                            <SearchOutlinedIcon />
                    </button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Website Design</button>
                    <button>Word Press</button>
                    <button>Logo Design</button>
                    <button>AI Services</button>
                </div>
            </div>
            <div className="right">
                <img src={featuredMan} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured