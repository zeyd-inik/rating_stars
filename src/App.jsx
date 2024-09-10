import { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { CiStar } from 'react-icons/ci';

import './App.css';

function App() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (index) => {
    setRating(index);
  };
  const handleHover = (index) => {
    setHover(index);
  };
  const handleLeave = (index) => {
    setHover(0);
    setRating(rating);
  };

  return (
    <div className="wrapper">
      {[...Array(5)].map((_, index) => {
        index++;
        return (
          <FaStar
            style={{
              cursor: 'pointer',
            }}
            className={
              index <= rating || index <= hover ? 'active' : 'disactive'
            }
            key={index}
            size={50}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleHover(index)}
            onMouseLeave={() => handleLeave(index)}
          />
        );
      })}
    </div>
  );
}

export default App;
