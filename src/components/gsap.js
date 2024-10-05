import React from "react";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Gsap = () => {
  gsap.registerPlugin(useGSAP);

  document.addEventListener("mousemove", (e) => {
    // カーソルの位置を取得
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    gsap.to(".circle", {
      x: mouseX,
      y: mouseY,
      stagger: -0.1
    });

    gsap.set(".cursor", {
      x: mouseX,
      y: mouseY,
    })
  })

  return (
    <div>
      
      <div className="cursor"></div>

      <div className="circles">
        <div className="circle circle1"></div>
        <div className="circle circle2"></div>
        <div className="circle circle3"></div>
      </div>

    </div>
  );
};

export default Gsap;
