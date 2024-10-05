import React from "react";
import reactImage from "./Images/react.png";
import jsImage from "./Images/js.png";
import firebaseImage from "./Images/firebase.jpg";
import profileImage from "./Images/squirrel.jpg"
import gsap from 'gsap';

const HomePage = () => {

  const Icons = document.querySelectorAll('.rotate');
  Icons.forEach((icon) => {
    icon.addEventListener("mouseover", () => {      
      gsap.to(icon, {
        rotation: "360",
        duration: 1,
      });
    });
    icon.addEventListener("mouseout", function() {
      gsap.to(icon, {
        rotation: 0,
        duration: 1,
      });
    });
  })

  return (
    <div className="container text-center">
      <h1>PORTFOLIO</h1>

      <img src={profileImage} className="profileImage rotate" />

      <p>
        ポートフォリオ試作
        React使ってます
      </p>

      <section class="page-section" id="services">
        <div className="service">
          <div class="text-center">
            <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
            <h3 class="section-subheading text-muted mb-5">
              私が作った作品一覧です
            </h3>
          </div>
          <div class="row text-center">
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary rotate"></i>
                <i class="fas fa-shopping-cart fa-stack-1x fa-inverse rotate"></i>
              </span>
              <h4 class="my-3">ECサイト</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary rotate"></i>
                <i class="fas fa-laptop fa-stack-1x fa-inverse rotate"></i>
              </span>
              <h4 class="my-3">レスポンシブサイト</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
            <div class="col-md-4">
              <span class="fa-stack fa-4x">
                <i class="fas fa-circle fa-stack-2x text-primary rotate"></i>
                <i class="fas fa-lock fa-stack-1x fa-inverse rotate"></i>
              </span>
              <h4 class="my-3">ウェブセキュリティ</h4>
              <p class="text-muted">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima
                maxime quam architecto quo inventore harum ex magni, dicta
                impedit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skill">
        <div class="text-center">
          <h1 class="title">スキル</h1>
          <div class="row text-center">
            <div class="col-md-4 services">
              <img src={reactImage} className="rotate" />
              <h4>React</h4>
              <p>Reactがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={jsImage} className="rotate" />
              <h4>HTML/CSS</h4>
              <p>HTML/CSSがつかえます</p>
            </div>
            <div class="col-md-4 services">
              <img src={firebaseImage} className="rotate" />
              <h4>Firebase</h4>
              <p>Firebaseがつかえます</p>
            </div>
          </div>
          <button type="button" class="btn btn-primary">
            スキル一覧
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
