import React  from "react";
import Footer from "./Footer/Footer";
import NavigationBar from './NavigationBar/NavigationBar'

export default function Soup(){
    return (
        <>
            <NavigationBar/>
            <article>
                <p> Welcome to Soups Page. </p>
            </article>
            <Footer/>
        </>
    )
}
