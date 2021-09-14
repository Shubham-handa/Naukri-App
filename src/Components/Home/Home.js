import React from "react";
import { Link, Router, Switch, Route, Redirect } from "react-router-dom";
import "./Home.css";
import Jobs from "../Jobs/Jobs.js";
import Login from "../Login/Login.js";
import Companies from "../Companies/Companies.js";
import About from "../About/About.js";
import { IoMdSearch, IoIosPin } from "react-icons/io";

const Home = () => {
  return (
    <div>
      <form>
        <div className="d-flex flex-row mb-3 " id="container1">
          <IoMdSearch className="search"></IoMdSearch>
          <input
            type="text"
            className="form-control me-5 ms-1"
            placeholder="Enter the job title"
          />
          <IoIosPin className="loc"></IoIosPin>
          <input
            type="text"
            className="form-control me-5 ms-1"
            placeholder="Enter the location"
          />
          <button type="submit" className="btn btn-primary" id="submit">
            Search
          </button>
        </div>
      </form>
      <div className="d-flex" id="container3">
        <h3>Top Recruiters</h3>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide mx-1"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://mma.prnewswire.com/media/1373438/cognizant_Logo.jpg?p=facebook"
                    className="d-block"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://mms.businesswire.com/media/20170502006181/en/584250/5/1WiproNewLogoImage.jpg"
                    className="d-block"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://mma.prnewswire.com/media/1477373/TCS_Logo.jpg?p=facebook"
                    className="d-block"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide mx-4"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://www.drupal.org/files/Capgemini_Logo_2COL_RGB.png"
                    className="d-block"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://mma.prnewswire.com/media/949195/Rakuten_Logo.jpg?p=facebook"
                    className="d-block"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://webassets.mongodb.com/_com_assets/cms/bosch-eh3i4e45px.png"
                    className="d-block"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide mx-4"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="http://media.corporate-ir.net/media_files/IROL/17/176060/Oct18/Amazon%20logo.PNG"
                    className="d-block"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://jobs.vibhaga.com/wp-content/uploads/2018/08/Virtusa-Logo-2.jpg"
                    className="d-block"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://index.impakter.com/wp-content/uploads/2021/03/HCL-Technologies-Logo.jpg"
                    className="d-block"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              id="carouselExampleSlidesOnly"
              className="carousel slide mx-4"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="https://index.impakter.com/wp-content/uploads/2020/11/Oracle-Logo.png"
                    className="d-block"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://mms.businesswire.com/media/20210709005090/en/890318/22/New_Tech_M_Logo_High-res_highres.jpg"
                    className="d-block"
                    alt="..."
                  />
                </div>
                <div className="carousel-item">
                  <img
                    src="https://www.dognet.com/wp-content/uploads/2021/01/Adobe_logo.png"
                    className="d-block"
                    alt="..."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex" id="container4">
        <h3>Upload CV</h3>
      </div>
      <div className="d-flex mb-3" id="fileChoosen">      
        <input class="form-control" type="file" id="formFile" />
        <button type="submit" className="btn btn-primary mx-4" id="submit">
            Submit
          </button>
      </div>
    </div>
  );
};

export default Home;
