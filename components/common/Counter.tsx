"use client";
import React, { useEffect, useState } from "react";
import AnimatedNumbers from "react-animated-numbers";

export default function Counter({ num }: { num: number }) {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    setShow(true);
  }, []);
  return (
    <>
      {show && (
        <AnimatedNumbers
        includeComma
        transitions={(index) => ({
          type: "spring",
          duration: index + 0.3,
        })}
        animateToNumber={num}
        fontStyle={{
          fontSize: 40,
          color: "red",
        }}
      />
      )}
    </>
  );
}