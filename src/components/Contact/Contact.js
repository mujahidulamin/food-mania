import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa";
import './Contact.css'
const Contact = () => {
  return (
    <div className="bg pb-14">
      <div className="hero bg">
        <div className="hero-content2 lg:gap-36 flex-col lg:flex-row mt-8">
          <div className="text-center lg:text-left">
            <div className="mt-12">
              <p className="title-contact">Contact US</p>

              <div className="flex items-center mt-10 contact">
                <FaMapMarkerAlt className="mr-6"></FaMapMarkerAlt>
                <span>
                  Anchal Tower, Sixmile, <br /> Guwahati, Assam 781022, India
                </span>
              </div>

              <div className="flex items-center  contact">
                <FaPhoneAlt className="mr-6"></FaPhoneAlt>
                <span>+918333552531</span>
              </div>

              <div className="flex items-center contact">
                <FaWarehouse className="mr-6"></FaWarehouse>
                <span>foodmania@gmail.com</span>
              </div>
            </div>
          </div>
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name *</span>
              </label>
              <div className="flex gap-5">
                <input
                  type="text"
                  name="user_name"
                  className="input input-bordered bg-[#E7E6E4] w-32"
                  required
                />
                <input
                  type="text"
                  name="user_name"
                  className="input w-32 input-bordered bg-[#E7E6E4]"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email *</span>
              </label>
              <input
                type="email"
                className="input input-bordered bg-[#E7E6E4]"
                name="user_email"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message *</span>
              </label>
              <textarea
                name="message"
                className="textarea textarea-primary bg-[#E7E6E4] border-0 h-32"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn btn-blue"
                type="submit"
                value="Send"
                required
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
