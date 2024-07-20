import React from "react";
import "./HeroSection.css";
import background from "./background.png";
import playButton from "./play-button.png";
import manOnMountain from "./man-on-mountain.png";

const HeroSection: React.FC = () => {
  return (
    <div
      className="hero-background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="hero-section">
        <div className="hero-content">
          <h1>
            <span className="hero-title">ШКОЛА</span>
            <span className="hero-slogan">
              <span>МОГУ</span>
              <span>ВСЁ ИЗМЕНИТЬ!</span>
            </span>
            <span className="hero-title">НАСТАВНИЧЕСТВА</span>
          </h1>
          <p>
            Онлайн-программа обучения навыкам социального проектирования для
            финалистов конкурса «Могу всё изменить!» позволит запустить и
            масштабировать свои социальные проекты при поддержке команды
            наставников, экспертов и советников, которые помогут подготовиться к
            грантовому конкурсу и повысят шансы на победу.
          </p>
          <div className="buttons">
            <div className="orange-buttons">
              <button className="apply-button">ПОДАТЬ ЗАЯВКУ</button>
              <button className="apply-button">ПОДАТЬ ЗАЯВКУ</button>
            </div>
            <div className="watch-section">
              <img
                src={playButton}
                alt="Play Button"
                className="watch-button"
              />
              <span className="watch-text">
                Смотрите видео
                <br />с награждения
                <br />
                конкурса 2022 года
              </span>
            </div>
          </div>
        </div>
        <img
          src={manOnMountain}
          alt="Man on Mountain"
          className="man-on-mountain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
