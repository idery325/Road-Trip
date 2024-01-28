import React from "react";

function Page1() {
  return (
    <div className="element">
      <img className="IMG" alt="Img" src="IMG-9a04b1469a5b-1-1.png" />
      <div className="frame">
        <div className="div">
          <div className="text-wrapper">2495 Bancroft Way</div>
          <img className="ph-arrow-right" alt="Ph arrow right" src="ph-arrow-right.svg" />
          <div className="text-wrapper">405 Hilgard Ave</div>
        </div>
        <img className="ph-arrow-left" alt="Ph arrow left" src="ph-arrow-left.svg" />
      </div>
      <div className="frame-2">
        <div className="frame-3">
          <div className="text-wrapper-2">Trip Preferences</div>
          <div className="track">
            <div className="filled" />
          </div>
          <div className="div-wrapper">
            <p className="p">Tell us your preferences to personalize your ideal road trip route!</p>
          </div>
          <div className="group">
            <div className="frame-4">
              <div className="frame-5">
                <img className="img" alt="Gis route start" src="gis-route-start.svg" />
                <div className="text-wrapper-3">Departure Time</div>
              </div>
              <div className="frame-6">
                <div className="frame-7">
                  <div className="text-wrapper-4">Sat, Jan 27</div>
                </div>
                <div className="frame-7">
                  <div className="text-wrapper-4">3:15 PM</div>
                </div>
              </div>
            </div>
            <div className="frame-8">
              <div className="frame-5">
                <img className="img" alt="Gis route end" src="gis-route-end.svg" />
                <div className="text-wrapper-3">Target Arrival Time</div>
              </div>
              <div className="frame-6">
                <div className="frame-7">
                  <div className="text-wrapper-4">Sat, Jan 27</div>
                </div>
                <div className="frame-7">
                  <div className="text-wrapper-4">3:15 PM</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="frame-9">
          <div className="text-wrapper-5">Next</div>
        </div>
      </div>
    </div>
   );
  }
  
  export default Page1;