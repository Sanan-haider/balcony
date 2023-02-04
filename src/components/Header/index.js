import React from "react";
import searchicon from "../../assets/search.svg";
import styled from "styled-components";

export default function index() {
  const Wrapper = styled.section`
    .container {
      max-width: 1300px;
      margin: 0 auto;
    }
    .header-bar {
      margin-top: 20px;
      background-color: #fff;
      display: flex;
      align-items: center;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
      border-radius: 20px;
      padding: 10px 20px;
    }
    .header-bar .header-txt {
      outline: none;
      border: 0;
      flex: 1;
      background: transparent;
      font-size: 45px;
    }
    .header-bar .account-btn {
      background-color: #005451;
      border: 0;
      width: 110px;
      height: 42px;
      font-size: 18px;
      color: #fff;
      border-radius: 16px;
    }
    .search-btn {
      width: 42px;
      height: 42px;
      margin: 12px 0 12px 29px;
      padding: 11.5px 11.2px 11.5px 11.2px;
      box-shadow: 0 3px 6px 0 rgb(0 0 0 / 16%);
      background-color: #005451;
      border: 0;
      border-radius: 50%;
    }
    .search-btn img {
      width: 14px;
    }
  `;
  return (
    <Wrapper>
      <div class="container">
        <div class="header-bar">
          <span class="header-txt">balcony</span>
          <button class="account-btn" type="submit">
            account
          </button>
          <button class="search-btn" type="submit">
            <img src={searchicon} alt="" />
          </button>
        </div>
      </div>
    </Wrapper>
  );
}
