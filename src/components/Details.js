import React from "react";
import "./css/Details.css";
import DetailBox from "./DetailBox";
import BrandRecognition from "../images/BrandRecognition";
import DetailedRecords from "../images/DetailedRecords";
import FullyCustomizable from "../images/FullyCustomizable";

const Details = () => {
  return (
    <div className="Details">
      <h3>Advanced Statistics</h3>
      <p>
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="Details__container">
        <DetailBox title="Brand Recognition">
          <h4>Brand Recognition</h4>
          <BrandRecognition witdh={40} height={44} />
          Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content.
        </DetailBox>
        <DetailBox title="Detailed Records">
          <h4>Detailed Records</h4>
          <DetailedRecords witdh={40} height={44} />
          Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions.
        </DetailBox>
        <DetailBox title="Fully Customizable">
          <h4>Fully Customizable</h4>
          <FullyCustomizable witdh={40} height={44} />
          Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement.
        </DetailBox>
      </div>
    </div>
  );
};

export default Details;
