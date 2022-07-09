import React from "react";
import { signIn, useSession } from "next-auth/react";

function Footer({ showLoginModal = true }) {
  const { data: session } = useSession();
  return (
    <div>
      {/* Login */}
      {!session && showLoginModal === true && (
        <div className="py-10 text-center border border-gray-400 my-10">
          <p className="text-sm mb-1">See personalized recommendations</p>
          <button className="button w-64 font-bold" onClick={signIn}>
            Sign in
          </button>
          <p className="text-sm mt-1">
            New customer? <a href="">Start here.</a>
          </p>
        </div>
      )}

      {/* Back to top */}
      <div className="bg-amazon_blue-light text-white w-full text-center py-2 text-sm">
        Back to top
      </div>

      {/* Footer */}
      <div className="bg-amazon_blue w-full">
        {/* Top */}
        <div className="text-gray-300 flex  flex-wrap space-x-24 py-16 px-16 sm:px-8  md:px-16 lg:px-36">
          {/*  */}
          <div className=" w-72 py-4">
            <h6 className="text-xl font-bold mb-1">Get to Know Us</h6>
            <p className="footer-link">Careers</p>
            <p className="footer-link">Blog</p>
            <p className="footer-link">About Amazon</p>
            <p className="footer-link">Investor Relations</p>
            <p className="footer-link">Amazon Devices</p>
            <p className="footer-link">Amazon Science</p>
          </div>
          {/*  */}
          <div className="w-72 py-4">
            <h6 className="text-xl font-bold mb-1">Make Money with Us</h6>
            <p className="footer-link">Sell products on Amazon</p>
            <p className="footer-link">Sell on Amazon Business</p>
            <p className="footer-link">Sell apps on Amazon</p>
            <p className="footer-link">Become an Affiliate</p>
            <p className="footer-link">Advertise Your Products</p>
            <p className="footer-link">Self-Publish with Us</p>
            <p className="footer-link">Become an Affiliate</p>
            <p className="footer-link">Host an Amazon Hub</p>
            <p className="footer-link">Self-Publish with Us</p>
          </div>
          {/*  */}
          <div className="w-72 py-4">
            <h6 className="text-xl font-bold mb-1">Amazon Payment Products</h6>
            <p className="footer-link">Amazon Business Card</p>
            <p className="footer-link">Shop with Points</p>
            <p className="footer-link">Reload Your Balance</p>
            <p className="footer-link">Amazon Currency Converter</p>
          </div>

          {/*  */}
          <div className="w-72 py-4">
            <h6 className="text-xl font-bold mb-1">Let Us Help You</h6>
            <p className="footer-link">Sell products on Amazon</p>
            <p className="footer-link">Sell on Amazon Business</p>
            <p className="footer-link">Sell apps on Amazon</p>
            <p className="footer-link">Become an Affiliate</p>
            <p className="footer-link">Advertise Your Products</p>
            <p className="footer-link">Self-Publish with Us</p>
            <p className="footer-link">Become an Affiliate</p>
            <p className="footer-link">Host an Amazon Hub</p>
            <p className="footer-link">Self-Publish with Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
