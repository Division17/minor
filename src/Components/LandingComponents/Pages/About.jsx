import React from "react";

function About() {
  return (
    <div className="service" id="about">
      <div className="content">
        <h1>About</h1>
        <p>
          <span className="font-bold text-teal-500 text-xl cursor-pointer">
            “Connect”{" "}
          </span>
          a strategic solution, a Web-App. This innovative platform serves as a
          unifying space, bringing together students from various disciplines to
          showcase their projects, fostering collaboration, and promoting
          engagement .
        </p>
      </div>
      <div className="sare-cards">
        <div className="cards">
          <div className="card">
            <p>
              Users can like, Share and do discussion in comments about posts
            </p>
          </div>
          <div className="cards">
            <div className="card">
              <p>
                User can post about their project and view other user's posts
              </p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Connect to other students/unverties across platform</p>
              </div>
            </div>
          </div>
          <div className="circle"></div>
        </div>
      </div>
    </div>
  );
}

export default About;
