import { useState } from 'react';

export const FunctionalTrafficLight = () => {
  const [colorIndex, setColorIndex] = useState(0);

  const colors = ['red', 'green', 'yellow'];
  const currentColor = colors[colorIndex];

  const handleChangeColor = () => {
    setColorIndex(colorIndex === 2 ? 0 : colorIndex + 1);
  };

  return (
    <div className="traffic-light-box">
      <h2>Functional Traffic Light</h2>
      <div className="traffic-light">
        {/* Background color can be black | yellow | red | green */}
        <div
          className={`circle ${currentColor === 'red' ? 'red' : 'black'}`}
        ></div>
        <div
          className={`circle ${currentColor === 'yellow' ? 'yellow' : 'black'}`}
        ></div>
        <div
          className={`circle ${currentColor === 'green' ? 'green' : 'black'}`}
        ></div>
      </div>
      <button className="next-state-button" onClick={handleChangeColor}>
        Next State
      </button>
    </div>
  );
};
