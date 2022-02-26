import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Footer from "../components/footer";
import { useImperativeHandle } from "react";

export default function clients() {
    return (
        <div className={utilStyles.parent}>
            <div className={utilStyles.screen}>
                <Head>
                    <title>GSI</title>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
          <link href="https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,400;0,500;1,400;1,500display=swap" rel="stylesheet"></link>
                </Head>

                <div className={utilStyles.navBar}>
                    <Link href="/">
                        <a>
                        <Image src="/gsilogo.png" alt="gsi Logo" width = "200px" height = "60px"/> 
                        </a>
                    </Link>

                    <Link href="/about">
                        <a>About Us</a>
                    </Link>


                    <div className={utilStyles.dropdown}>
                        <a className={utilStyles.dropdownBtn}>Our Work</a>
                        <div className={utilStyles.dropdownContent}>
                        <Link href="/clients">Clients </Link>
                        <Link href="/recent">Recent Assignments</Link>
                        </div>
                    </div>
             
                    <Link href="/services">
                        <a>Services</a>
                    </Link>

                    <Link href="/contactus">
                        <a>ContactUs</a>
                    </Link>

                    <Link href="/careers">
                        <a>Careers</a>
                    </Link>

                </div>

                <section className={utilStyles.headerC}>
        <p>Clients</p>
        </section>
                <section className={utilStyles.alternate}>
       
          <div className={utilStyles.container}>
              
              <Image src="/clients.jpeg" width = "1000px" height = "400px"></Image>
              
          </div>
      </section>

            </div>
        


            <Footer />

        </div>
     
    );
}
