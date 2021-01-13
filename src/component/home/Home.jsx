import React from 'react';
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { Link, NavLink } from "react-router-dom";

export default class Home extends React.Component {
 
  render() {

  
    return (
      <>
        <Navbar />

        <div class="container mt-5">

          <div class="row">


            <div class="col-lg-3 mt-4">


              <div class="card shadow p-3">
                <input type="search" class="form-control" id="gsearch" name="gsearch" />
                <button type="button" class="btn btn-dark mt-2">Search</button>

              </div>
              <h5 class="my-4">Online judge</h5>
              <div class="list-group shadow">
                <a href="#" class="list-group-item active">Codecheaf</a>
                <Link className="list-group-item" exact to="/codeforces">
                  Codeforces
               </Link>
                <a href="#" class="list-group-item">Uva</a>
              </div>
            </div>


            <div class="col-lg-9">

              <div class="card shadow mt-4">
                <img class="card-img-top img-fluid" src="https://images2.content-hci.com/commimg/video/CH/myhc_279666.jpg" alt="" />
                <div class="card-body">
                  <h3 class="card-title">Metropilitan University Programming Group</h3>
                  <h4>$24.99</h4>
                  <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
                  <span class="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
        4.0 stars
      </div>
              </div>


              <div class="card card-outline-secondary my-4">
                <div class="card-header">
                  Product Reviews
      </div>
                <div class="card-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                  <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                  <hr></hr>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                  <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                  <hr></hr>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                  <small class="text-muted">Posted by Anonymous on 3/1/17</small>
                  <hr></hr>
                  <a href="#" class="btn btn-success">Leave a Review</a>
                </div>
              </div>


            </div>

          </div>
        </div>

        <Footer />



      </>
    );
  }
}

