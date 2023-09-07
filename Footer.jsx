import React from "react"
import { BsTwitter,BsInstagram,BsFacebook,BsYoutube } from "react-icons/bs";
const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
        <div className="footer-copyright text-center py-3 col-md-3 mb-md-0 mb-3"> © This is the official website of MSEDCL.
All rights reserved. Website Ownership and Maintenance: MSEDCL
    </div>
            <div className="col-md-6 mt-md-0 mt-3">
            
                <h5 className="text-uppercase">Address</h5>
                <p>1. Hongkong Bank Building, M.G. Road, Fort, Mumbai-400001.</p>
                <p>2. Prakashgad, Plot No. G-9, Anant Kanekar Marg Bandra (E), Mumbai–400051</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            

            <div className="col-md-3 mb-md-0 mb-3"> 
                <h5 className="text-uppercase">Follow Us On</h5>
                <ul className="list-unstyled">
                    <li><a href="#!"><BsTwitter /></a></li>
                    <li><a href="#!"><BsInstagram/></a></li>
                    <li><a href="#!"><BsFacebook/></a></li>
                    <li><a href="#!"><BsYoutube/></a></li>
                </ul>
            </div>
        </div>
    </div>

    

</footer>

export default Footer