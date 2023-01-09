import React from "react";

function PortfolioModal({
  showModal,
  img,
  icon,
  functions,
  description,
  title,
  netlify,
  github,
}) {
  return (
    showModal && (
      <div className="portfolio-blur">
        <div className="portfolio-modal">
          <div className="porfolio-close-wrapper">
            <div className="portfolio-close">{icon}</div>
          </div>

          <div className="portfolio-wrapper">
            <div className="portfolio-header">
              <img src={img}></img>
            </div>

            <div className="portfolio-desc">
              <h1>{title}</h1>
              <p>{description}</p>
              <div className="portfolio-describe-wrapper">
                {functions.map((describe) => {
                  const { id, text } = describe;
                  return <p key={id}>{text}</p>;
                })}
              </div>
            </div>

            <div className="portfolio-btn-wrapper">
              <a href={netlify} target="_blank">
                <button className="show-site-btn">Live Server</button>
              </a>

              <a href={github} target="_blank">
                <button className="github-btn">GitHub</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default PortfolioModal;
