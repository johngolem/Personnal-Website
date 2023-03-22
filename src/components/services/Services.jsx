import React from "react";
import "./services.css";
import { BsPatchCheck } from "react-icons/bs";
import SearchProperty from "../Pages/SearchProperty";

const Services = () => {
  return (
    <section id="services">
      <h2>What We Offer</h2>
      {/* <h2> Services</h2> */}
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>LAND REGISTRATION</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Caution </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Lease </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty">
                {" "}
                Registration of certificate of Titles/Leases{" "}
              </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Charge </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Replacement of Title </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Restriction </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Search </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Stamp Duty </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Transfer </a>
            </li>
          </ul>
        </article>

        {/* start of web development  */}

        <article className="service">
          <div className="service__head">
            <h3>LAND ADMINISTRATION</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Pay Land Rate </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Subdivision </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Extension of Lease </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Change of User </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Consent </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Lease preparation </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Extension of User </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Renewal of Lease </a>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>SURVEY AND MAPPING</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Subdivision </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Amalgamation </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> New grant </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Re-Survey </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Sectional property </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> eXtension of Lease </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Change of use </a>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>VALUATION</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty">Asset Valuation </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Government Leasing </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty">Government Purchase </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Estate Administration </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Arbitration </a>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>PHYSICAL PLANNING</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty">Approval of Part Development Plans </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Planning Documents Requisition </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty"> Cerificate of Compliance </a>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>ADJUDICATION & SETTLEMENT</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty">Adjudication </a>
            </li>
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty">Settlement </a>
            </li>
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>NATIONAL LAND COMMISSION</h3>
          </div>
          <ul className="service__list">
            <li>
              <BsPatchCheck className="service__list-icon" />
              <a href="/searchproperty">Land Allocation </a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
