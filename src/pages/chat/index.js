import React from "react";
import styled from "styled-components";
import planner from "../../assets/calendar-cta.svg";
import account from "../../assets/account.svg";
import booked from "../../assets/booked.svg";
import chat from "../../assets/chat.svg";
import chaticon from "../../assets/oval.png";
import chaticon2 from "../../assets/chat-icon2.png";
import nexticon from "../../assets/next-icon.png";
import { Link, Router } from "react-router-dom";
const Wrapper = styled.section`
  .container {
    max-width: 1300px;
    margin: 0 auto;
  }
  .account-dashboard {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .dashboard-sidebar {
    width: 80px;
    height: 340px;
    margin: 50px 0 0 0;
    flex: 0 0 5%;
    padding: 35px 15px;
    border-radius: 25px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
    background-color: #fff;
  }
  .dashboard-chat {
    margin-top: 50px;
    flex: 0 0 80%;
  }
  .dashboard-chat-wrapper {
    display: flex;
    flex-wrap: wrap;
  }
  .sidebar-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 8px;
  }
  .sidebar-menu {
    font-size: 14px;
  }
  .chat-groups .group {
    display: flex;
    width: 320px;
    height: 70px;
    margin: 0 0 17px;
    padding: 10px 30px 10px 8px;
    border-radius: 12px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
    background-color: #faf9f6;
  }
  .group-icon {
    flex: 0 0 30%;
  }
  .group-text {
    flex: 0 0 70%;
    position: relative;
    top: -4px;
  }

  .group-text p {
    font-size: 12px;
    margin: 4px 0;
  }
  .chat-heading {
    display: inline-block;
    width: 100%;
    text-align: right;
    font-size: 22px;
    margin-bottom: 25px;
    font-weight: 700;
  }
  .group-text p:nth-child(1),
  .group-text p:nth-child(2) {
    font-weight: 700;
  }
  .chat-groups {
    padding-right: 150px;
    border-right: 1px solid;
  }
  .chat-module {
    padding-left: 150px;
  }
  .chat-box-right,
  .chat-box-left {
    display: flex;
    justify-content: center;
  }
  .chat-box-right .user-icon {
    order: 2;
    width: 20%;
  }
  .chat-box-right .user-input {
    color: #fff;
    width: 80%;
    font-size: 14px;
    margin: 4px 15px 11px 50px;
    padding: 8px 27px 10px 23px;
    border-radius: 20px 0px 20px 20px;
    box-shadow: inset 0 3px 6px 0 rgb(0 0 0 / 16%);
    background-color: #000;
  }
  .chat-box-left .user-input {
    color: #000;

    font-size: 14px;
    margin: 4px 60px 11px 15px;
    padding: 8px 27px 10px 23px;
    border-radius: 0px 20px 20px 20px;
    box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #faf9f6;
  }
  .message {
    width: 338px;
    height: 40px;
    border-radius: 16px;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
    border: solid 2px #000;
    background-color: #faf9f6;
    padding: 0 75px;
  }
  input[type="text"]::placeholder {
    text-align: center;
    font-size: 18px;
    font-weight: 700px;
  }
  .sidebar-wrapper {
    padding: 0;
    margin: 0;
  }
  .sidebar-wrapper li {
    list-style: none;
  }
  .menu-icon {
    text-align: center;
  }
  .group-icon img {
    width: 52px;
  }
  .user-icon img {
    width: 44px;
  }
  .submit-msg img {
    width: 40px;
  }
  .submit-msg {
    display: inline-block;
    vertical-align: middle;
    margin-left: 10px;
  }
  .chat-groups a {
    text-decoration: none;
    color: #000;
  }
`;
export default function index() {
  return (
    <Wrapper>
      <div class="container">
        <div class="account-dashboard">
          <div class="dashboard-sidebar">
            <ul class="sidebar-wrapper">
              <li class="sidebar-menu">
                <div className="menu-icon">
                  <img src={planner} alt="" />
                </div>
              </li>
              <li class="sidebar-menu">
                <div className="menu-icon">
                  <img src={chat} alt="" />
                </div>
              </li>
              <li class="sidebar-menu">
                <div className="menu-icon">
                  <img src={booked} alt="" />
                </div>
              </li>
              <li class="sidebar-menu">
                <div className="menu-icon">
                  <img src={account} alt="" />
                </div>
              </li>
            </ul>
          </div>
          <div class="dashboard-chat">
            <div class="dashboard-chat-wrapper">
              <div class="chat-groups">
                <span className="chat-heading">chats</span>
                <Link to="/mobile-module">
                  <div class="group">
                    <div class="group-icon">
                      <img src={chaticon} alt="" />
                    </div>
                    <div class="group-text">
                      <p>Charlie Sean / Bushwick Lofts</p>
                      <p>Parker & Companies, LLC</p>
                      <p>I am fine. How are you. How's your...</p>
                    </div>
                  </div>
                </Link>
                <Link to="/mobile-module">
                  <div class="group">
                    <div class="group-icon">
                      <img src={chaticon2} alt="" />
                    </div>
                    <div class="group-text">
                      <p>Richard Black / Iron Ceilings Tow..</p>
                      <p>WebShort Corp.</p>
                      <p>I am fine. How are you. How's your...</p>
                    </div>
                  </div>
                </Link>
                <Link to="/mobile-module">
                  <div class="group">
                    <div class="group-icon">
                      <img src={chaticon} alt="" />
                    </div>
                    <div class="group-text">
                      <p>Charlie Sean / Bushwick Lofts</p>
                      <p>Parker & Companies, LLC</p>
                      <p>I am fine. How are you. How's your...</p>
                    </div>
                  </div>
                </Link>
                <Link to="/mobile-module">
                  <div class="group">
                    <div class="group-icon">
                      <img src={chaticon2} alt="" />
                    </div>
                    <div class="group-text">
                      <p>Charlie Sean / Jackson Heights L..</p>
                      <p>WebShort Corp.</p>
                      <p>I am fine. How are you. How's your...</p>
                    </div>
                  </div>
                </Link>
                <Link to="/mobile-module">
                  <div class="group">
                    <div class="group-icon">
                      <img src={chaticon} alt="" />
                    </div>
                    <div class="group-text">
                      <p>Richard Black / Iron Ceilings Tow..</p>
                      <p>Parker & Companies, LLC</p>
                      <p>I am fine. How are you. How's your...</p>
                    </div>
                  </div>
                </Link>
                <Link to="/mobile-module">
                  <div class="group">
                    <div class="group-icon">
                      <img src={chaticon2} alt="" />
                    </div>
                    <div class="group-text">
                      <p>John Fisher / Bushwick Lofts</p>
                      <p>Parker & Companies, LLC</p>
                      <p>I am fine. How are you. How's your...</p>
                    </div>
                  </div>
                </Link>
                <Link to="/mobile-module">
                  <div class="group">
                    <div class="group-icon">
                      <img src={chaticon} alt="" />
                    </div>
                    <div class="group-text">
                      <p>Charlie Sean / Bushwick Lofts</p>
                      <p>Parker & Companies, LLC</p>
                      <p>I am fine. How are you. How's your...</p>
                    </div>
                  </div>
                </Link>
                <Link to="/mobile-module">
                  <div class="group">
                    <div class="group-icon">
                      <img src={chaticon2} alt="" />
                    </div>
                    <div class="group-text">
                      <p>Richard Black / Iron Ceilings Tow..</p>
                      <p>Parker & Companies, LLC</p>
                      <p>I am fine. How are you. How's your...</p>
                    </div>
                  </div>
                </Link>
              </div>
              <div class="chat-module">
                <span className="chat-heading">
                  Charlie Sean / Jackson Heights Lane
                </span>
                <div className="chat-boxes">
                  <div className="chat-box-right">
                    <div className="user-icon">
                      <img src={chaticon} alt="" />
                    </div>
                    <div className="user-input">I am fine. How are you?</div>
                  </div>
                  <div className="chat-box-left">
                    <div className="user-icon">
                      <img src={chaticon2} alt="" />
                    </div>
                    <div className="user-input">My apartment is in Miami.</div>
                  </div>
                  <div className="chat-box-right">
                    <div className="user-icon">
                      <img src={chaticon} alt="" />
                    </div>
                    <div className="user-input">
                      How are things going at your job?
                    </div>
                  </div>
                  <div className="chat-box-left">
                    <div className="user-icon">
                      <img src={chaticon2} alt="" />
                    </div>
                    <div className="user-input">
                      How are things going at your job?
                    </div>
                  </div>
                  <div className="chat-box-right">
                    <div className="user-icon">
                      <img src={chaticon} alt="" />
                    </div>
                    <div className="user-input">Hi, How are you?</div>
                  </div>
                  <div className="chat-box-right">
                    <div className="user-icon">
                      <img src={chaticon} alt="" />
                    </div>
                    <div className="user-input">Lorem Ipsum…….</div>
                  </div>
                  <div className="chat-box-right">
                    <div className="user-icon">
                      <img src={chaticon} alt="" />
                    </div>
                    <div className="user-input">I am fine. How are you?</div>
                  </div>

                  <div className="chat-box-left">
                    <div className="user-icon">
                      <img src={chaticon2} alt="" />
                    </div>
                    <div className="user-input">My apartment is in Miami.</div>
                  </div>
                  <div className="chat-box-right">
                    <div className="user-icon">
                      <img src={chaticon} alt="" />
                    </div>
                    <div className="user-input">
                      How are things going at your job?
                    </div>
                  </div>
                  <div className="chat-box-left">
                    <div className="user-icon">
                      <img src={chaticon2} alt="" />
                    </div>
                    <div className="user-input">
                      How are things going at your job?
                    </div>
                  </div>
                  <div className="chat-box-right">
                    <div className="user-icon">
                      <img src={chaticon} alt="" />
                    </div>
                    <div className="user-input">Hi, How are you?</div>
                  </div>
                  <div className="chat-box-right">
                    <div className="user-icon">
                      <img src={chaticon} alt="" />
                    </div>
                    <div className="user-input">Lorem Ipsum…….</div>
                  </div>
                  <div className="chat-box-right">
                    <div className="user-icon">
                      <img src={chaticon} alt="" />
                    </div>
                    <div className="user-input">I am fine. How are you?</div>
                  </div>
                </div>
                <form action="">
                  <input
                    className="message"
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Typing message here..."
                  />
                  <div className="submit-msg">
                    <img src={nexticon} alt="" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
