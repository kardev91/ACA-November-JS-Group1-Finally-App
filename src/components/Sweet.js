import React  from "react";
import Footer from "./Footer/Footer";
import NavigationBar from './NavigationBar/NavigationBar'

export default function Sweet(){
    return (
        <>
            <NavigationBar/>
            <article>
                <p> Welcome to Sweets Page. </p>
            </article>
            <Footer/>
        </>
    )
}
