import React, { FC } from "react";
import { Header } from "../../components/header/Header";
interface RootPageProps{
    header: string;
}

const Rootpage: FC = (props) => {
    return (
        <>
        <Header/> 

        {props.children}

        
        </>
    )
}

export default Rootpage;