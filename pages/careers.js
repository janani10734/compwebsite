import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Footer from "../components/footer";

export default function careers() {
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

           <section className={utilStyles.header}>
        <p>Careers</p>
        </section>
        <section className={utilStyles.alternate}>
          <div className={utilStyles.container}>
              <p>
                  No careers available currently.
              </p>
          </div>
      </section>

            </div>
        


            <Footer />

        </div>
     
    );
}