import Breadcrumbs from "@/app/components/Breadcrumbs";
import Layout from "@/app/components/Layout";
import Navbar from "@/app/components/Navbar";
import React from "react";


const About = () => {
    return(
        <Layout>
        <div>
            <Navbar></Navbar>
            <Breadcrumbs></Breadcrumbs>
            <h1>Aqui é a pagina sobre! Não sei o que colocar!</h1>
        </div>
        </Layout>
    )
}

export default About;