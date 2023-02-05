import React from "react";
import styled from "styled-components";
import star from "../../assets/star.svg";
const Wrapper = styled.section`
  .container {
    max-width: 1300px;
    margin: 0 auto;
  }
  .outsideheading span {
    font-size: 25px;
    margin: 30px 0;
    display: inline-block;
    font-weight: 700;
  }
  .box {
    width: 400px;
    height: 300px;
    margin: 0 0 7.7px;
    padding: 261px 371px 10px 10px;
    border-radius: 16px;
    background-color: #000;
  }
  .box-price {
    width: 70px;
    height: 29px;
    padding: 5px 10px;
    border-radius: 14.5px;
    background-color: #fff;
  }
  .box-description-rating .description {
    margin-top: 8px;
    display: inline-block;
  }
  .box-description-rating .rating img {
    width: 15px;
    margin: 0 2px;
  }
  .box-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    justify-content: center;
  }
  .breadcrumbs img {
    width: 20px;
    margin: 0 10px;
  }
  .breadcrumbs {
    text-align: right;
    margin-top: 30px;
  }
`;
export default function index() {
  return (
    <Wrapper>
      <div className="container">
        <div className="breadcrumbs">
          <span className="map-view">
            <img src={star} alt="" />
          </span>
          <span className="filter">
            <img src={star} alt="" />
          </span>
        </div>
        <div className="outsideheading">
          <span>work from outside</span>
        </div>

        <div className="box-wrapper">
          <div className="box-container">
            <div className="box">
              <div className="box-price">
                <span className="price">$56.50</span>
              </div>
            </div>
            <div className="box-description-rating">
              <span className="description">Bushwick Lofts</span>
              <div className="rating">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="box-price">
                <span className="price">$56.50</span>
              </div>
            </div>
            <div className="box-description-rating">
              <span className="description">Bushwick Lofts</span>
              <div className="rating">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="box-price">
                <span className="price">$56.50</span>
              </div>
            </div>
            <div className="box-description-rating">
              <span className="description">Bushwick Lofts</span>
              <div className="rating">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="box-price">
                <span className="price">$56.50</span>
              </div>
            </div>
            <div className="box-description-rating">
              <span className="description">Bushwick Lofts</span>
              <div className="rating">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="box-price">
                <span className="price">$56.50</span>
              </div>
            </div>
            <div className="box-description-rating">
              <span className="description">Bushwick Lofts</span>
              <div className="rating">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="box-price">
                <span className="price">$56.50</span>
              </div>
            </div>
            <div className="box-description-rating">
              <span className="description">Bushwick Lofts</span>
              <div className="rating">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="box-price">
                <span className="price">$56.50</span>
              </div>
            </div>
            <div className="box-description-rating">
              <span className="description">Bushwick Lofts</span>
              <div className="rating">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="box-price">
                <span className="price">$56.50</span>
              </div>
            </div>
            <div className="box-description-rating">
              <span className="description">Bushwick Lofts</span>
              <div className="rating">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="box-price">
                <span className="price">$56.50</span>
              </div>
            </div>
            <div className="box-description-rating">
              <span className="description">Bushwick Lofts</span>
              <div className="rating">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="box-price">
                <span className="price">$56.50</span>
              </div>
            </div>
            <div className="box-description-rating">
              <span className="description">Bushwick Lofts</span>
              <div className="rating">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="box-price">
                <span className="price">$56.50</span>
              </div>
            </div>
            <div className="box-description-rating">
              <span className="description">Bushwick Lofts</span>
              <div className="rating">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
          <div className="box-container">
            <div className="box">
              <div className="box-price">
                <span className="price">$56.50</span>
              </div>
            </div>
            <div className="box-description-rating">
              <span className="description">Bushwick Lofts</span>
              <div className="rating">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
