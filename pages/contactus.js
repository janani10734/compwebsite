import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";
import Footer from "../components/footer";

export default function contactus() {
    return (
        <body>
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
                    <div>
                    <section className={utilStyles.headerCo}>
                        <p>ContactUs</p>
                    </section>       
                <section className={utilStyles.form}>
                <form action="mailto:someone@example.com" method="post" enctype="text/plain">
                    <table>
                        <tr>
                            <td>Name:</td>
                            <td><input type="text" name="name" size="50"/></td>
                        </tr>
                        <tr>
                            <td>E-mail:</td>
                            <td><input type="text" name="mail" size="50"/></td>
                        </tr>
                        <tr>
                            <td>Comment:</td>
                            <td><input type="text" name="comment" size="50"></input></td>
                        </tr>
                        <tr><td></td><td> <input type="submit" value="Send"/>
                        &nbsp;&nbsp;<input type="reset" value="Reset"/></td>
                        </tr>
                    </table>                
                </form>

                </section>

                
                </div>
            </div>
            

            <Footer />

        </div>
        </body>
        
     
    );
}
