import React from "react";
import "./BottomRecordPicture.css";
import RecordPicture from "../../Assets/BottomRecordPicture/BottomVinylPicture.png";
import SpinningRecord from "../../Assets/BottomRecordPicture/SpinningRecord.svg";

const BottomRecordPicture = () => {
  return (
    <div className="recordContainer">
      <div className="recordPictureContainer">
        <img
          className="recordPicture"
          src={RecordPicture}
          alt="RecordPicture"
        />
        <img
          className="spinningRecord"
          src={SpinningRecord}
          alt="SpinningRecord"
        />
      </div>
    </div>
  );
};

export default BottomRecordPicture;
