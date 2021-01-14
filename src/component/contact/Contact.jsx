import { render } from '@testing-library/react';
import React from 'react';
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";

export default class Contact extends React.Component{
    render()
    {
        return(
            <>
            <Navbar/>
            <div className="m-5">This is Contact</div>
            <Footer/>
            </>
        )
    }
}