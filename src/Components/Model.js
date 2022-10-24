import React from "react";
import "../Styles/models.css";
import banner from "../assets/data";
const arrowIcon = process.env.PUBLIC_URL + "/icons/down-arrow.svg";

const Model = () => {
  return (
    <div style={{ width: "100%", height: "auto" }}>
      {banner.map((value, index) => (
        <section
          className="models-main"
          style={{
            backgroundImage: `url(${value.bgImgSrc})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          key={index}
        >
          <div className="models-container">
            <div className="model-container-child-div-1">
              <h1>{value.title}</h1>
              {index === 0 || index === 1 || index === 2 || index === 3 ? (
                <p>
                  {value.text}
                  <a href="https://www.w3schools.com">Touchless Delivery</a>
                </p>
              ) : (
                <p>{value.text}</p>
              )}
            </div>
            <div className="model-container-child-div-2">
              <div className="model-btn-div">
                {index === 6 ? (
                  <button className="left-btn">{value.leftBtn}</button>
                ) : (
                  <>
                    <button className="left-btn">{value.leftBtn}</button>
                    <button className="right-btn">{value.rightBtn}</button>
                  </>
                )}
              </div>
              {index === 0 ? (
                <img src={arrowIcon} alt="down-arrow" className="down-arrow" />
              ) : (
                ""
              )}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default Model;
