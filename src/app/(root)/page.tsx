"use client";

import { useState } from "react";
import Container from "../components/Container";
import SimpleSlider from "../components/Slider";

import AnimatedNumbers from "react-animated-numbers";

const Home = () => {
  const [num, setNum] = useState(0);

  return (
    <div className="h-[calc(100vh-120px)] py-3">
      <Container>
        <div className="rounded-lg">
          <SimpleSlider />
        </div>
      </Container>
      <div className="h-[200px] ">
        <div className="container">
          <AnimatedNumbers
            includeComma
            transitions={(index) => ({
              type: "tween",
              duration: index + 0.2,
            })}
            animateToNumber={num}
            fontStyle={{
              fontSize: 40,
              color: "red",
            }}
          />
          <div>
            <button
              className="bg-green-500 py-2 px-5"
              onClick={() => setNum((state) => state + 645)}
            >
              +
            </button>
            <button
              className="bg-green-500 py-2 px-5"
              onClick={() => setNum((state) => state - 645)}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
