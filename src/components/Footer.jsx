import React from "react";
import email from "../assets/footer-logo/email.png";
import facebook from "../assets/footer-logo/facebook.png";
import instagram from "../assets/footer-logo/instagram.png";
import youtube from "../assets/footer-logo/youtube.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className=" h-[full] border-t pb-8 lg:p-8">
        <div className="header-text-footer  md:text-[40px]"></div>
        <div className="contact-detail md:flex justify-center md:justify-center items-center pt-3">
          <div className="social-logo h-20  md:w-[250px] flex justify-center p-5 space-x-5">
            <img className="w-10" src={email} />
            <img className="w-10" src={facebook} />
            <img className="w-10" src={instagram} />
            <img className="w-10" src={youtube} />
          </div>
          {/* <div className="line md:border-l md:h-[80px] md:w-[20px]"></div> */}
          <div className="detial-text-footer  md:border-l md:pl-[20px] md:w-[250px] flex-col md:text-left space-y-1">
            <p>
              Photo{" "}
              <Link to={`https://unsplash.com/`}>
                <span className=" font-bold">unsplash.com</span>
              </Link>
            </p>{" "}
            <p>
              Designed by{" "}
              <Link to={`https://github.com/MYNTCODE`}>
                <span className=" font-bold">MYNTCODE</span>
              </Link>
            </p>
            <p> December 2023</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
