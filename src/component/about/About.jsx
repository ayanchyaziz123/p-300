import React from 'react';
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
export default class About extends React.Component{
    render()
    {
        return(
            <>
            <Navbar/>
            <div className="container">

           
            <div className="mt-5">This is About</div>
            </div>
            <Footer/>
            </>
        )
        
    }
}