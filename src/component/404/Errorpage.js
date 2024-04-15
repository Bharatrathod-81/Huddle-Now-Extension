import React, { useEffect, useState } from "react";
import { Buttonwrapper, Descriptionwrapper, Imagecontainer, Innerwrapper, Maincontainer, Titlewrapper } from "./Errorpage.styles";


const Errorpage = () => {

    return(
        <>
            <Maincontainer>
                <Innerwrapper>
                    <Imagecontainer>404</Imagecontainer>
                    <Titlewrapper>An error occurred. Please try again later.</Titlewrapper>
                    <Descriptionwrapper>We are unable to process your request right now. Please try again after sometime.</Descriptionwrapper>
                </Innerwrapper>            
            </Maincontainer>
        </>
    )

}

export default Errorpage;
