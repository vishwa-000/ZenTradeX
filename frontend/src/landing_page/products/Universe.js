import React from "react";

function Universe() {
  return (
    <div className="container mt-5">

      <div className="row text-center">

        <h1 className="mb-3">The ZenTradeX Universe</h1>

        <p className="text-muted mb-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>

        {/* Row 1 */}

        <div className="col-4 p-4">
          <img
            src="media/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid"
            style={{
              width: "70%",
              maxHeight: "60px",
              objectFit: "contain",
            }}
          />
          <p className="text-muted mt-3">
            Thematic investment platform
          </p>
        </div>

        <div className="col-4 p-4">
          <img
            src="media/streakLogo.png"
            alt="Streak"
            className="img-fluid"
            style={{
              width: "70%",
              maxHeight: "60px",
              objectFit: "contain",
            }}
          />
          <p className="text-muted mt-3">
            Algo & Strategy Platform
          </p>
        </div>

        <div className="col-4 p-4">
          <img
            src="media/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid"
            style={{
              width: "70%",
              maxHeight: "60px",
              objectFit: "contain",
            }}
          />
          <p className="text-muted mt-3">
            Options trading platform
          </p>
        </div>

        {/* Row 2 */}

        <div className="col-4 p-4">
          <img
            src="media/zerodhaFundhouse.png"
            alt="Fundhouse"
            className="img-fluid"
            style={{
              width: "70%",
              maxHeight: "60px",
              objectFit: "contain",
            }}
          />
          <p className="text-muted mt-3">
            Asset Management Platform
          </p>
        </div>

        <div className="col-4 p-4">
          <img
            src="media/goldenpiLogo.png"
            alt="GoldenPi"
            className="img-fluid"
            style={{
              width: "70%",
              maxHeight: "60px",
              objectFit: "contain",
            }}
          />
          <p className="text-muted mt-3">
            Bonds Trading Platform
          </p>
        </div>

        <div className="col-4 p-4">
          <img
            src="media/dittoLogo.png"
            alt="Ditto"
            className="img-fluid"
            style={{
              width: "70%",
              maxHeight: "60px",
              objectFit: "contain",
            }}
          />
          <p className="text-muted mt-3">
            Insurance Platform
          </p>
        </div>

        <button
          className="p-2 btn btn-primary fs-5 mt-5 mb-5"
          style={{
            width: "20%",
            margin: "0 auto",
            borderRadius: "10px",
          }}
        >
          Signup Now
        </button>

      </div>
    </div>
  );
}

export default Universe;