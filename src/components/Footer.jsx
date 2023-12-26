import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div
      style={{ width: "100%", height: "300px", color:"white", backgroundColor:"#5376AD" }}
      className="d-flex align-items-center justify-content-center flex-column "
    >
      <div className="d-flex justify-content-evenly align-items-center w-100">
        <div className="website" style={{width:'400px'}}>
          <h4 className='mb-3' style={{overflowY:'hidden'}}>
          <i class="fa-solid fa-cart-shopping me-2"></i>
                      AddNGo
          </h4>
          <h6>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae architecto harum dicta sit voluptate quisquam, pariatur tempore quae accusamus excepturi quibusdam nisi provident perspiciatis?
          </h6>
          <h6>similique? Nesquient , asagagadyur?</h6>
        </div>
        <div className="links d-flex flex-column ">
          <h4 className='mb-3' style={{overflowY:'hidden'}}>Links</h4>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          Home 
          </Link>
          <Link to="/cart" style={{ textDecoration: "none", color: "white" }}>
           Cart
          </Link>
          <Link
            to="/wishlist"
            style={{ textDecoration: "none", color: "white" }}
          >
           Wish List
          </Link>
        </div>
        <div className="guides d-flex flex-column ">
          <h4 className='mb-3' style={{overflowY:'hidden'}}>Guides</h4>
          <Link
            to="https://www.react.org/"
            style={{ textDecoration: "none", color: "white" }}
          >
            React
          </Link>
          <Link
            to="https://react-bootstrap.netlify.app/"
            style={{ textDecoration: "none", color: "white" }}
          >
            React Bootstrap
          </Link>
          <Link
            to="https://bootswatch.com/"
            style={{ textDecoration: "none", color: "white" }}
          >
            Bootstrap Watch
          </Link>
        </div>
        <div className="contacts d-flex flex-column">
          <h4 className='mb-3' style={{overflowY:'hidden'}}>Contact Us</h4>
          <div className="d-flex gap-3">
            <input style={{borderRadius:"5px"}} className="form-control " type="text" placeholder='Enter Your Email ID'/>
            <button style={{borderRadius:"5px"}} className="btn btn-warning ms-2 align-items-center justify-content-center d-flex p-3">Subscribe</button>
          </div>
          <div style={{cursor:"pointer"}} className="d-flex gap-5 mt-2">
          <i class="fa-brands fa-instagram fa-2x"></i>
          <i class="fa-brands fa-twitter fa-2x"></i>
          <i class="fa-brands fa-linkedin fa-2x"></i>
          <i class="fa-brands fa-facebook fa-2x"></i>
          </div>
        </div>
      </div>
      <p className="text-center">
        {" "}
        copyright @ 2023 e-cart built with react
      </p>
    </div>
  )
}

export default Footer