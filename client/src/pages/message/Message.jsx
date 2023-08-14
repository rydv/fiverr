import React from 'react'
import { Link } from 'react-router-dom'
import "./message.scss"

const Message = () => {
  return (
    <div className="message">
      <div className="container">
        <span className="breadcrumbs">
          <Link to="/messages">MESSAGES</Link> > JONH DOE >
        </span>
        <div className="messages">
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolore ratione neque, deserunt blanditiis debitis voluptatem quasi earum deleniti unde aliquam ab amet nobis aperiam! Nisi voluptatum amet in ipsa!
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolore ratione neque, deserunt blanditiis debitis voluptatem quasi earum deleniti unde aliquam ab amet nobis aperiam! Nisi voluptatum amet in ipsa!
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolore ratione neque, deserunt blanditiis debitis voluptatem quasi earum deleniti unde aliquam ab amet nobis aperiam! Nisi voluptatum amet in ipsa!
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolore ratione neque, deserunt blanditiis debitis voluptatem quasi earum deleniti unde aliquam ab amet nobis aperiam! Nisi voluptatum amet in ipsa!
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolore ratione neque, deserunt blanditiis debitis voluptatem quasi earum deleniti unde aliquam ab amet nobis aperiam! Nisi voluptatum amet in ipsa!
            </p>
          </div>
          <div className="item">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolore ratione neque, deserunt blanditiis debitis voluptatem quasi earum deleniti unde aliquam ab amet nobis aperiam! Nisi voluptatum amet in ipsa!
            </p>
          </div>
          <div className="item owner">
            <img src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolore ratione neque, deserunt blanditiis debitis voluptatem quasi earum deleniti unde aliquam ab amet nobis aperiam! Nisi voluptatum amet in ipsa!
            </p>
          </div>
        </div>
        <hr />
        <div className="write">
          <textarea name="" placeholder="write a message..."id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Message