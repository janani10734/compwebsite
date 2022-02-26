import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

export default function Footer() {
    return (
        <div className={utilStyles.footer}>
            <table>
                <tr>
                    <td width="400px">
                    <img src="./cred1.jpeg" width = "150px"></img> 
                    </td>
                    <td width="400px" >
                    <img src="./cred2.jpeg" width = "150px"></img> 
                    </td>
                    <td width="700px">
                        <span className="material-icons">place</span> No.3 Soon Lee Street #04-12 Pioneer Junction, Singapore-627606
                        <br></br>
                        <span className="material-icons">mail</span>
                        <Link href="mailto:sales@gsigroup.com.sg">sales@gsigroup.com.sg</Link>
                        <br></br>
                        <span className="material-icons">phone</span> 6694 3657
                        <br></br>
                        <span className="material-icons">fax</span> 6694 2009
                        <br></br>
                        <Link href="https://www.linkedin.com/in/gsi-group-8aa46b230/"><span className="material-icons">linkedin</span></Link>
                        <br></br>
                    </td>
                </tr>
            </table>
            <hr></hr>

            <p>&#169; 2022 GSI Engineeering and Construction Pte Ltd. All rights reserved </p>
        </div>
    );
}
