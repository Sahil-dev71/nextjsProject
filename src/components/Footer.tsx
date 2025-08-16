import { px } from "motion";
import React from "react";

function Footer() {
  return (
    <div className="mb-0">
      <footer>
        <div className="bg-gray-700 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center py-6">
          <div>
            <img
              src="/file.svg"
              alt="Music School"
              className="h-32 mix-blend-multiply  bg-gray-700 text-white "
            />
          </div>
          <div className="w-auto mx-8 text-center flex flex-col justify-center items-center">
            <h3 className="font-bold">About-us</h3>
            <p className=" max-auto text-center mt-2 font-light ">
              Inspiring a love for music through lessons, passion, and
              creativity for all ages
            </p>
          </div>
          <div className="w-auto mx-8 text-center flex flex-col justify-center items-center">
            <h3 className="font-bold"> Contact Us</h3>
            <p className="max-auto text-center mt-2 font-light">
              XYZ School of Music,42 Evergreen Heights <br /> Sector 15,
              Greenview Colony <br />
              Pune,Maharastra 411001, India
            </p>
          </div>
          <div>4</div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
