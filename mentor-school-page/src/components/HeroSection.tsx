import React from "react";
import "./HeroSection.css";
import background from "../assets/HeroSection/background.png";
import playButton from "../assets/HeroSection/play-button.png";
import manOnMountain from "../assets/HeroSection/man-on-mountain.png";

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
            <button className="apply-button">ПОДАТЬ ЗАЯВКУ</button>
            <button className="apply-button">ПОДАТЬ ЗАЯВКУ</button>
          </div>
          <div className="play-button">
            <img src={playButton} alt="Play Button" />
            <span>Смотрите видео с награждения конкурса 2022 года</span>
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
