import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-center">
          We are redefining the future of investing in India
          <br />
          with simplicity, speed, and powerful technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5">
          <p>
            ZenTradeX was created with the vision of making stock market
            investing simple, transparent, and accessible for everyone. Our goal
            is to eliminate unnecessary complexity and provide traders with a
            seamless investing experience.
          </p>

          <p>
            We combine modern technology with a clean and intuitive platform to
            help investors trade smarter and manage their portfolios
            efficiently.
          </p>

          <p>
            From beginners entering the stock market to experienced traders,
            ZenTradeX empowers users with fast execution, real-time insights,
            and user-friendly investment tools.
          </p>
        </div>

        <div className="col-6 p-5">
          <p>
            In addition, we aim to build a strong financial learning ecosystem
            through educational resources, market analysis, and community-driven
            initiatives.
          </p>

          <p>
            <a href="" style={{ textDecoration: "none" }}>
              ZenLabs
            </a>
            , our innovation and fintech initiative, focuses on building modern
            solutions that simplify investing and improve financial awareness
            for the next generation.
          </p>

          <p>
            At ZenTradeX, innovation never stops. Every day we work towards
            creating smarter, faster, and more reliable financial technology for
            investors across India.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;