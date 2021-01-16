import { render } from '@testing-library/react';
import React from 'react';
import { Link, NavLink } from "react-router-dom";
export default class Sidebar extends React.Component {
    render() {
        return (
            <>

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

            </>
        )
    }
}