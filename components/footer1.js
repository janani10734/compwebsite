import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className={utilStyles.footer}>
            <div classname={utilStyles.mainfooter}>
            

           
            <div className={utilStyles.footercontent1}>
                <div className={utilStyles.li}>
             
                    <span className="material-icons">place</span>
                    <Link href="">
                        <a target="_blank" className={utilStyles.link}>
                        No.3 Soon Lee Street #04-12 Pioneer Junction, Singapore-627606
                        </a>
                    </Link>
                </div>

                <div className={utilStyles.li}>
                <span className="material-icons">mail</span>
                    <Link href="mailto:sales@gsigroup.com.sg">
                    
                        <a target="_blank" className={utilStyles.link}>
                        sales@gsigroup.com.sg
                        </a>
                    </Link>
                </div>

                <div className={utilStyles.li}>
                    <span className="material-icons">phone</span>
                    <Link href="">
                        <a target="_blank" className={utilStyles.link}>
                        6694 3657
                        </a>
                    </Link>
                </div>

                <div className={utilStyles.li}>
                    <span className="material-icons">fax</span>
                    <Link href="">
                        <a target="_blank" className={utilStyles.link}>
                        6694 2009
                        </a>
                    </Link>
                </div>
                <div className={utilStyles.li}>
                <span className="material-icons">linkedin</span>
                    <Link href="https://www.linkedin.com/in/gsi-group-8aa46b230/">
                        <a target="_blank" className={utilStyles.link}>
                        GSI group
                        </a>
                    </Link>
                </div>

                <div className={utilStyles.footercontent2} >
                <div className={utilStyles.li2}>
                    <img src="./cred1.jpeg" width = "150px"></img>
                </div>
            <div>

            </div>
                <div className={utilStyles.li2}>
                    <img src="./cred2.jpeg" width = "150px"></img>
                </div>
            </div>

            </div>
            
            </div>

            <hr></hr>

            <p>&#169; 2022 GSI Engineeering and Construction Pte Ltd. All rights reserved </p>
        </footer>

        
    );
}
