import { useState } from "react";
import Header from "../Components/Header";
import Update from "../Components/LastUpdate";
import Source from "../Components/Source";

export default function Binary() {
  const [decimal, setDecimal] = useState("");
  const [binary, setBinary] = useState("");

  const handleDecimal = (event) => {
    const inputValue = event.target.value;
    setDecimal(inputValue);
    if (!isNaN(inputValue)) {
      const binaryValue = Number(inputValue).toString(2);
      setBinary(binaryValue);
    } else {
      setDecimal("");
    }
  };

  const handleBinary = (event) => {
    const inputValue = event.target.value;
    setBinary(inputValue);
    if (/^[01]+$/.test(inputValue)) {
      const decimalValue = parseInt(inputValue, 2);
      setDecimal(decimalValue);
    } else {
      setDecimal("");
    }
  };

  return (
    <>
      <div className="container">
        <Header />
        <h2 className="title">
          <span className="span-title">&lt;</span> decimal to binary{" "}
          <span className="span-title">&gt;</span>
        </h2>
        <div className="binary-container">
          <div style={{ display: "flex", gap: "1rem" }}>
            <div>
              <p className="binary-output">Decimal</p>
              <input
                value={decimal}
                onChange={handleDecimal}
                type="number"
              ></input>
            </div>
            <div>
              <p className="binary-output">Binary</p>
              <input
                value={binary}
                type="number"
                onChange={handleBinary}
              ></input>
            </div>
          </div>
          <p>
            A binary number is a number expressed in the{" "}
            <a href="https://en.wikipedia.org/wiki/Radix">base</a>-2{" "}
            <a href="https://en.wikipedia.org/wiki/Numeral_system">
              numeral system
            </a>{" "}
            or binary numeral system, a method of mathematical expression which
            uses only two symbols: typically "0" (zero) and "1" (one).
          </p>
          <p>
            The base-2 numeral system is a{" "}
            <a href="https://en.wikipedia.org/wiki/Positional_notation">
              positional notation
            </a>{" "}
            with a <a href="https://en.wikipedia.org/wiki/Radix">radix</a> of 2.
            Each digit is referred to as a{" "}
            <a href="https://en.wikipedia.org/wiki/Bit">bit</a>, or binary
            digit. Because of its straightforward implementation in digital
            electronic circuitry using logic gates, the binary system is used by
            almost all modern computers and computer-based devices, as a
            preferred system of use, over various other human techniques of
            communication, because of the simplicity of the language and the
            noise immunity in physical implementation.
          </p>
          <p>
            You can read more on{" "}
            <a href="https://en.wikipedia.org/wiki/Binary_number">
              binary wikipedia
            </a>
          </p>
        </div>
        <Source source={"https://github.com/AlexCtg5/code-morse-translator"} />
        <Update date={"March 28, 2024"} />
      </div>
    </>
  );
}
