import React, { useState, useEffect } from "react";
import "./Portfolio.css";
import Aos from "aos";
import "aos/dist/aos.css";

// import icons

import { VscClose } from "react-icons/vsc";

// import assets
import portfo2 from "../../assets/portfo2.jpg";
import redberry from "../../assets/redberry.png";
import gaming from "../../assets/gaming.png";
import market from "../../assets/ultra.jpg";

// import components

import PortfolioCard from "./PortfolioCard";
import PortfolioModal from "./PortfolioModal";

// import data

import { redberryData } from "./PortfolioData";
import { gamingData } from "./PortfolioData";
import { marketData } from "./PortfolioData";

function Portfolio() {
  const [showRedberryContent, setShowRedberryContent] = useState(false);
  const [showGamingContent, setShowGamingContent] = useState(false);
  const [showMarketContent, setShowMarketContent] = useState(false);

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section className="portfolio-section" id="portfolio">
      <div className="container portfolio-container">
        <div className="portfolio-title">
          <h1>Portfolio</h1>
          <p>
            My works in the <br></br> development process
          </p>
        </div>

        <div className="portfolio-container">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            className="portfolio-card-wrapper"
          >
            <PortfolioCard
              img={portfo2}
              title="Redberry Project"
              setShowModal={setShowRedberryContent}
            />

            <PortfolioCard
              img={portfo2}
              title="exGaming Project"
              setShowModal={setShowGamingContent}
            />

            <PortfolioCard
              img={portfo2}
              title="ultraMarket Project"
              setShowModal={setShowMarketContent}
            />
          </div>

          <PortfolioModal
            showModal={showRedberryContent}
            title="Redberry Project"
            icon={
              <VscClose
                size={25}
                onClick={() => setShowRedberryContent(false)}
              />
            }
            img={redberry}
            description="ეს პროექტი აგებულია კომპანია 'redberry'-ის დავალების
            მიხედვით,რომლის იდეაც მდგომარეობს შემდეგში, კომპანიაში არსებობს
            ბევრი თანამშრომელი,რომლებსაც ურიგდებათ ლეპტოპები,რომლის მართვა
            და მენეჯმენტი სულ უფრო ძნელი ხდებოდა, შესაბამისად მათი სურვილი
            იყო,რომ შეექმნათ საიტი,სადაც თანამშრომელი,რომელიც კომპანიისგან
            მიიღებდა ლეპტოპს მას უნდა გაეკთებინა ჩანაწერი,რომელიც
            შეინახებოდა ბაზაში და შემდეგ მათი მართვა და გადახარისხება
            კომპანიისთვის უფრო მარტივი იქნება."
            functions={redberryData}
            netlify="https://redberrylaptop.netlify.app/"
            github="https://github.com/Mazmishvili26/redberryproject"
          />

          <PortfolioModal
            showModal={showGamingContent}
            title="exGaming Project"
            icon={
              <VscClose size={25} onClick={() => setShowGamingContent(false)} />
            }
            img={gaming}
            description="თამაშების ტიპის საიტი,სადაც გამოყენებულია gaming database api,რომელიც მითითებულაი github-ის about-ში, საიტის ფუნქციონალი აწყობილია ამ api-ის შესაბამისად."
            functions={gamingData}
            netlify="https://exgaming.netlify.app/"
            github="https://github.com/Mazmishvili26/exGamingProject"
          />

          <PortfolioModal
            showModal={showMarketContent}
            title="ultraMarket Project"
            icon={
              <VscClose size={25} onClick={() => setShowMarketContent(false)} />
            }
            img={market}
            description="ეს არის პირველი პროექტი,რომელსაც შევეჭიდე და ასე თუ ისე მივიყვანე ბოლომდე, საიტის დიზაინის ინსპირაცია აღებულია ultra.ge-იდან,საიტის ფუნქციონალი კი მდგომარეობს შემდეგში."
            functions={marketData}
            netlify="https://ultramarket.netlify.app/"
            github="https://github.com/Mazmishvili26/marketProject"
          />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
