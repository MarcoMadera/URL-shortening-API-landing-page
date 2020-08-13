import React from "react";
import "./css/Details.css";
import DetailBox from "./DetailBox";
import BrandRecognition from "../images/BrandRecognition";
import DetailedRecords from "../images/DetailedRecords";
import FullyCustomizable from "../images/FullyCustomizable";

const Details = () => {
  return (
    <div className="Details">
      <div className="Details__content">
        <h3>Advanced Statistics</h3>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="Details__container">
        <DetailBox
          title="Brand Recognition"
          desc="Boost your brand recognition with each click. Generic links don’t mean
          a thing. Branded links help instil confidence in your content."
        >
          <BrandRecognition witdh={40} height={44} />
        </DetailBox>
        <DetailBox
          title="Detailed Records"
          desc="Gain insights into who is clicking your links. Knowing when and where
          people engage with your content helps inform better decisions."
        >
          <DetailedRecords witdh={40} height={44} />
        </DetailBox>
        <DetailBox
          title="Fully Customizable"
          desc="Improve brand awareness and content discoverability through
          customizable links, supercharging audience engagement."
        >
          <FullyCustomizable witdh={40} height={44} />
        </DetailBox>
      </div>
    </div>
  );
};

export default Details;
