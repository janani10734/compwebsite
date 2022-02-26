import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Footer from "../components/footer";

export default function services() {
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

    
                <section className={utilStyles.headerS}>
                <p>Services</p>
                </section>
                <section className={utilStyles.alternate}>
                <div className={utilStyles.servicemain}>
                    <div classname={utilStyles.serviceleft}>
                    
                    <img src  ="./services_left.png" width = "900px" height="300px"></img>
                    </div>
                    
                    <div classname={utilStyles.serviceright}>
                    <Image src= "/service1.JPG" width = "200px" height="200px"></Image>
                    <Image src= "/border_right.png" width = "4px" height="200px"></Image>
                    <Image src= "/service2.JPG" width = "200px" height="200px"></Image>
                    <Image src= "/border_right.png" width = "4px" height="200px"></Image>
                    <Image src= "/service3.JPG" width = "200px" height="200px"></Image>
                    
                    <Image src= "/service4.JPG" width = "200px" height="200px"></Image>
                    <Image src= "/border_right.png" width = "4px" height="200px"></Image>
                    <Image src= "/service5.JPG" width = "200px" height="200px"></Image>
                    <Image src= "/border_right.png" width = "4px" height="200px"></Image>
                    <Image src= "/service6.JPG" width = "200px" height="200px"></Image> 
                    </div>
                </div>
                </section>
            </div>

            
        


            <Footer />

        </div>
     
    );
}
