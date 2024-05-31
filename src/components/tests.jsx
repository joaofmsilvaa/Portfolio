import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Draggable } from "gsap/Draggable";

function Tests() {
  let [scaleValue, setScaleValue] = useState(1);

  gsap.config({
    nullTargetWarn: false,
  });

  let restart = useRef();
  let pause = useRef();
  let scale = useRef();

  gsap.registerPlugin(useGSAP, ScrollTrigger, TextPlugin, Draggable);

  useGSAP((context, contextSafe) => {
    let tl = gsap.timeline();

    tl.to(".green", { rotation: 360, x: 100, y: 200, duration: 1, delay: 1 });
    tl.to(".purple", { rotation: 360, x: 100, y: 250, duration: 1 });
    tl.to(".blue", { rotation: 360, x: 100, y: 300, duration: 1 }, "-=0.5");

    let longTl = gsap.timeline().to(".red", { x: 400, duration: 10 });

    restart = contextSafe(() => {
      tl.restart();
    });

    pause = contextSafe(() => {
      tl.pause();
    });

    scale = contextSafe(() => {
      longTl.timeScale(scaleValue);
      setScaleValue(scaleValue++);
    });

    gsap.fromTo(
      ".orange",
      { opacity: 0 },
      { opacity: 1, duration: 10, ease: "elastic" }
    );

    Draggable.create(".flair--2", {
      bounds: ".container",
      inertia: true,
    });

    document.getElementById("gsap-restart").addEventListener("click", restart);
    document.getElementById("gsap-pause").addEventListener("click", pause);
    document.getElementById("gsap-scale").addEventListener("click", scale);
  }, []);

  return (
    <div style={{ height: "100vh", padding: 20 }}>
      <button id="gsap-restart" className="gsap-restart" ref={restart}>
        Restart
      </button>
      <button id="gsap-pause" className="gsap-pause" ref={pause}>
        Pause
      </button>
      <button id="gsap-scale" className="gsap-scale" ref={scale}>
        Timescale ( {scaleValue} )
      </button>

      <div className="box gradient-red red"></div>
      <div className="box gradient-orange orange"></div>

      <div className="container">
        <div className="wrapper">
          <div className="flair flair--2"></div>
        </div>
        <div className="wrapper">
          <div className="flair flair--2"></div>
        </div>
        <div className="wrapper">
          <div className="flair flair--2"></div>
        </div>
      </div>

      <div className="box gradient-green green"></div>
      <div className="box gradient-purple purple"></div>
      <div className="box gradient-blue blue"></div>
    </div>
  );
}

export default Tests;
