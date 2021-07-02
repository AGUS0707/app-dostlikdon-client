import React, {useEffect} from 'react';
import Navbar from "../components/Navbar";
import NavbarNav from "../components/NavbarNav";
import Footer from "../components/Footer";
import SongiXabarlar from "../components/SongiXabarlar";
import Basic from "../components/Basic";
import {getNewsByUrl} from "../redux/actions/newsAction";
import {connect} from "react-redux";

const Yangiliklar = (props) => {
    useEffect(()=>{
          props.getNewsByUrl(props.match.params.url)
        console.log(props)
    },[])

    return (
        <div className="yangiliklar">
            <div className="container p-0">
                <div className="row py-3">
                    <Navbar/>
                </div>
            </div>
                <div className="bg-white"><div className="container p-1">
                    <NavbarNav/>
                </div>
            </div>
            <Basic news={props.newsByUrl}/>
            <div className="">
                <SongiXabarlar/>
            </div>
            <Footer/>
        </div>
    );
};
const mapStateToProps = (state) =>{
    return{
        newsByUrl: state.news.newsByUrl
    }
}

export default connect(mapStateToProps,{getNewsByUrl})(Yangiliklar) ;