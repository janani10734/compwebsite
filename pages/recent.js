import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Footer from "../components/footer";

export default function about() {
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

           <section className={utilStyles.headerR}>
        <p>Recent Assignments</p>
        </section>
        <section className={utilStyles.alternate}>
          <div className={utilStyles.container}>
              <p>
              GSI Group was involved in the construction of the LIZA FPSO Series topsides , taking on scopes of pipe fabrication and installation . Fabrication and installation was done over at Dynamac Yard prior to integration and commissioning over at Keppel Yard. Scopes for GSI Group involved welding of Carbon Steel , Stainless Steel, Duplex & Super Duplex SS and Copper Nickel for fabrication as well as installation on site.
              </p>
              <p> 
              <Image src = "/recentpic1.jpg" width="200px" height ="200px"/>
              <Image src= "/border_right.png" width = "50px" height="200px"></Image>
              <Image src = "/recentpic2.jpg" width="200px" height ="200px"/>
              </p>

              <p>
              GSI Group was involved in the fabrication and installation of piping systems on the NOV Open Drain System for ONGC FPSO. Our workscopes involves welding of Carbon Steel , Stainless Steel, Duplex Stainless Steel and Copper Nickel for fabrication and installation of the piping systems.
              </p>
              <Image src = "/recentpic3.jpg" width="200px" height ="200px"/>
          </div>
      </section>

            </div>
        


            <Footer />

        </div>
     
    );
}
