import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row p-3 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>

      <div
        className="row p-3 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-3 text-center">
          <img
            src="media/profile.png"
            alt="Vishwanath S H"
            style={{ borderRadius: "100%", width: "50%" }}
          />

          <h4 className="mt-5">Vishwanath S H</h4>

          <h6>Founder & Developer, ZenTradeX</h6>
        </div>

        <div className="col-6 p-3">
          <p>
            Vishwanath S H founded ZenTradeX in 2026 with the vision of creating
            a modern and user-friendly stock trading platform for investors and
            traders across India.
          </p>

          <p>
            ZenTradeX focuses on delivering a seamless investing experience
            through clean design, powerful technology, real-time market
            insights, and simplified trading tools.
          </p>

          <p>
            The platform was built as a next-generation fintech solution to make
            investing more accessible, transparent, and efficient for everyone.
          </p>

          <p>
            Apart from development and technology, Vishwanath is passionate
            about innovation, UI/UX design, and building impactful digital
            products.
          </p>

          <p>
            Connect on{" "}
            <a
              href="https://www.linkedin.com/in/vishwanath-s-h-8987502a6"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              LinkedIn
            </a>
            {" / "}
            
            <a
              href="https://github.com/vishwa-000"
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
            >
              GitHub
            </a>

            {" / "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
