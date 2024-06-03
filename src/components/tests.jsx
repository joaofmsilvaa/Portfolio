import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import { Draggable } from "gsap/Draggable";
import { Observer } from "gsap/Observer";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

function Tests() {
  gsap.config({
    nullTargetWarn: false,
  });

  let restart = useRef();
  let pause = useRef();
  let myDiv = useRef();
  let linkBtn = useRef();

  gsap.registerPlugin(
    useGSAP,
    ScrollTrigger,
    TextPlugin,
    Draggable,
    Observer,
    ScrollToPlugin
  );
  useGSAP((context, contextSafe) => {
    let tl = gsap.timeline();

    tl.to(".green", {
      rotation: 360,
      x: 100,
      y: 200,
      duration: 1,
      delay: 1,
    });
    tl.to(".purple", { rotation: 360, x: 100, y: 250, duration: 1 });
    tl.to(".blue", { rotation: 360, x: 100, y: 300, duration: 1 }, "-=0.5");

    gsap.timeline().to(".red", { x: 400, duration: 10 });

    restart = contextSafe(() => {
      tl.restart();
    });

    pause = contextSafe(() => {
      tl.pause();
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
  });

  useGSAP(() => {
    let div = myDiv.current;

    Observer.create({
      target: window,
      type: "wheel,touch,scroll,pointer",
      onUp: () => div.classList.add("box2"),
      onDown: () => div.classList.remove("box2"),
    });
  });

  useGSAP((context, contextSafe) => {
    let scrollToBigDiv = contextSafe(() => {
      gsap.to(window, { duration: 1, scrollTo: "#bigDiv", ease: "power2" });
    });

    linkBtn.current.addEventListener("click", scrollToBigDiv);
  });

  return (
    <div>
      <div style={{ position: "fixed" }}>
        <button id="gsap-restart" className="gsap-restart" ref={restart}>
          Restart
        </button>
        <button id="gsap-pause" className="gsap-pause" ref={pause}>
          Pause
        </button>
        <a ref={linkBtn}>go to big div</a>
      </div>

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

      <div
        id="bigDiv"
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <div ref={myDiv} className="box box2"></div>
      </div>

      <div className="box gradient-green green"></div>
      <div className="box gradient-purple purple"></div>
      <div className="box gradient-blue blue"></div>
    </div>
  );
}

export default Tests;
