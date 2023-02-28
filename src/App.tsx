import React from 'react';
import './App.css';
import {Header} from "./site/Header/Header";
import {Body} from "./site/Body/Body";
import {Footer} from "./site/Footer/Footer";

function App() {
    return (
        <>
            <Header titleForHeader={'Header'}/>
            <Body titleForBody={'Content'}/>
            <Footer titleForFooter={'Bottom'}/>
        </>
    );
}

export default App;
