import React from 'react';
import Navbar from "../../layout/Navbar";
import Footer from "../../layout/Footer";
import axios from 'axios';
import { Link, NavLink } from "react-router-dom";
export default class Codeforces extends React.Component {
    state = {
        persons: [],
        bangladesh: []
    }

    componentDidMount() {
        axios.get(`https://codeforces.com/api/user.ratedList?activeOnly=true`)
            .then(res => {
                console.log("api is connected = ", res.data.result)
                const persons = res.data.result;
                this.setState({ persons });
            })
    }

    render() {
        return (<>
            <Navbar />
            <div className="container">

                <div className="row mt-5 mb-5">



                    <div class="col-lg-3 mt-5">


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
                    <div className="col-8 mt-5">



                        {this.state.persons.map(person => <div>


                            <div class="card shdow">
                                <img class="card-img-top m-3" src={person.titlePhoto} alt="Card image" style={ { height: 50, width: 50 } }/>
                                <div class="card-body">
                                    <h4 class="card-title">{person.firstName}</h4>
                                    <p class="card-text">{person.country}</p>
                                    <a href="#" class="btn btn-dark">See Profile</a>
                                </div>
                            </div>
                        </div>

                        )}

                    </div>
                </div>
            </div>

            <Footer />
        </>);


    }
}
