import React  from "react";
import Footer from "./Footer/Footer";
import NavigationBar from './NavigationBar/NavigationBar'

export default function Home(){
    return (
        <>
            <NavigationBar/>
            <article>
                <p> Welcome to Home Page. </p>
            </article>
            <Footer/>
        </>
    )
}
