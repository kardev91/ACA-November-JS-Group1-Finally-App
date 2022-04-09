import React  from "react";
import Footer from "./Footer/Footer";
import NavigationBar from './NavigationBar/NavigationBar'

export default function Salad(){
    return (
        <>
            <NavigationBar/>
            <article>
                <p> Welcome to Salads Page. </p>
            </article>
            <Footer/>
        </>
    )
}
