import React from "react";

//import libraries from react-router-dom
import { Outlet } from "react-router-dom";
//importing components
import ResponsiveAppBar from "../AppBar/AppBar";


const Layout = () => {
    return (
        <>
            <ResponsiveAppBar />
            <Outlet />
        </>
    );
};

export default Layout;