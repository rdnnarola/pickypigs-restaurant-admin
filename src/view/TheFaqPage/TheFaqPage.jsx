import React from "react";
import pattern_img from "../../assets/images/pattern.png";
import down_arrow from "../../assets/images/who/down-arrow.svg";
import search_grey from "../../assets/images/who/search_grey.svg";
import OurVisionComponent from "../../components/OurVisionComponent/OurVisionComponent";

import "./TheFaqPage.scss";
import LoginPageHeader from "../../components/LoginPageHeader/LoginPageHeader";
import LoginPageFooter from "../../components/LoginPageFooter/LoginPageFooter";

function TheFaqPage() {
  return (
    <>
      <LoginPageHeader />
      <div className="the_faq_page_container">
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div
          className="gradient-bg"
          style={{
            height: "100vh",
            position: "absolute",
            top: 0,
            right: 0,
            width: "100%",
          }}
        ></div>
        {/* Faq Page content start */}
        <section className="faq-section position-relative">
          <div className="container">
            <h1 className="header-txt text-center brandon-Bold text-uppercase">
              FAQ
            </h1>
            <p className="f-15 text-center">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              <br /> nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam
            </p>

            <div className="row mt-4 mb-5">
              <div className="col-sm-12 mb-3">
                <div className="searchfaq-input position-relative ml-auto mr-auto">
                  <input
                    placeholder="Search FAQ"
                    type="text"
                    className="input-search form-control"
                  />
                  <div className="search-icon">
                    <img
                      src={search_grey}
                      alt="search_grey"
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-12">
                <div
                  className="accordion faq-accordion-wrapper"
                  id="accordionExample"
                >
                  <div className="card mb-2 faq-accordion">
                    <div className="card-header faq-heading" id="headingOne">
                      <h2 className="mb-0 w-100">
                        <button
                          className="btn btn-link btn-block text-dark text-decoration-none faq-btn text-left pl-0 pr-0 d-flex justify-content-between align-items-center position-relative"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          <p className="mb-0 f-15 faq-label">
                            Question 1: Lorem ipsum dolor sit amet?
                          </p>
                          <div className="faq-arrow arrow-down">
                            <img
                              width="14"
                              alt="down-arrow"
                              src={down_arrow}
                              className="img-fluid"
                            />
                          </div>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body pb-5 pl-0 pr-0">
                        <p className="f-15">
                          Anim pariatur cliche reprehenderit, enim eiusmod high
                          life accusamus terry richardson ad squid. 3 wolf moon
                          officia aute, non cupidatat skateboard dolor brunch.
                          Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                          wolf moon tempor, sunt aliqua put a bird on it squid
                          single-origin coffee nulla assumenda shoreditch et.
                          Nihil anim keffiyeh helvetica, craft beer labore wes
                          anderson cred nesciunt sapiente ea proident. Ad vegan
                          excepteur butcher vice lomo. Leggings occaecat craft
                          beer farm-to-table, raw denim aesthetic synth nesciunt
                          you probably haven't heard of them accusamus labore
                          sustainable VHS.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2 faq-accordion">
                    <div className="card-header faq-heading" id="headingTwo">
                      <h2 className="mb-0 w-100">
                        <button
                          className="btn btn-link btn-block text-dark text-decoration-none faq-btn text-left pl-0 pr-0 d-flex justify-content-between align-items-center position-relative collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          <p className="mb-0 f-15 faq-label">
                            Question 1: Lorem ipsum dolor sit amet?
                          </p>
                          <div className="faq-arrow arrow-down">
                            <img
                              width="14"
                              alt="down_arrow"
                              src={down_arrow}
                              className="img-fluid"
                            />
                          </div>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body pb-5 pl-0 pr-0">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div className="card mb-2 faq-accordion">
                    <div className="card-header faq-heading" id="headingThree">
                      <h2 className="mb-0 w-100">
                        <button
                          className="btn btn-link btn-block text-dark text-decoration-none faq-btn text-left pl-0 pr-0 d-flex justify-content-between align-items-center position-relative collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          <p className="mb-0 f-15 faq-label">
                            Question 1: Lorem ipsum dolor sit amet?
                          </p>
                          <div className="faq-arrow arrow-down">
                            <img
                              width="14"
                              alt="down_arrow"
                              src={down_arrow}
                              className="img-fluid"
                            />
                          </div>
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body pb-5 pl-0 pr-0">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Faq Page content end */}

        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="patternimg-wrapper">
                  <img
                    src={pattern_img}
                    alt="pattern_img"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <OurVisionComponent />
        </section>
      </div>
      <LoginPageFooter />
    </>
  );
}

export default TheFaqPage;
