import React from "react";
import styled from "styled-components";
import appstore from "../../assets/appst.png";
import instagram from "../../assets/instagram.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";

const Wrapper = styled.section`
  .container {
    max-width: 1300px;
    margin: 0 auto;
  }
  .menu-links li {
    list-style: none;
    margin-bottom: 25px;
    font-size: 20px;
  }
  .bottom-menu {
    width: 425px;
    height: 600px;
    margin: 226px 200px 50px 0;
    padding: 46.8px 62px 33.9px 48px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
    background-color: #fff;
    border-radius: 15px;
  }
  .menu-text {
    font-size: 28px;
    margin-bottom: 50px;
    display: inline-block;
  }
  .bottom-icon {
    margin-bottom: 25px;
  }
  .social-icons li {
    display: inline-block;
    list-style: none;
    margin: 0 15px 15px 0;
  }
`;
export default function index() {
  return (
    <Wrapper>
      <div className="container">
        <div className="bottom-menu">
          <span className="menu-text">read, discover, explore..</span>
          <ul className="menu-links">
            <li>about us</li>
            <li>terms and conditions</li>
            <li>privacy policy</li>
            <li>faq</li>
            <li>become a workspace host</li>
          </ul>
          <div className="bottom-icon">
            <img src={appstore} alt="" />
          </div>
          <div className="bottom-icon">
            <img src={appstore} alt="" />
          </div>
          <ul className="social-icons">
            <li>
              <img src={instagram} alt="" />
            </li>
            <li>
              <img src={twitter} alt="" />
            </li>
            <li>
              <img src={facebook} alt="" />
            </li>
          </ul>
          <div className="copyright">
            <span>© homework workspaces LLC</span>
          </div>
        </div>
        <div className="bottom-design"></div>
      </div>
    </Wrapper>
  );
}
