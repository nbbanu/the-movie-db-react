import { useState } from "react";

const options = [
  {
    type: "trend",
    buttons: [
      {
        title: "Today",
        parameter: "day",
        id: 1,
      },
      {
        title: "This Week",
        parameter: "week",
        id: 2,
      },
    ],
  },
  {
    type: "trailers",
    buttons: [
      {
        title: "Popular",
        parameter: "movie",
        id: 1,
      },
      {
        title: "Streaming",
        parameter: "tv",
        id: 2,
      },
      {
        title: "On TV",
        parameter: "tv",
        id: 3,
      },
      {
        title: "For Rent",
        parameter: "movie",
        id: 4,
      },
      {
        title: "In Theatres",
        parameter: "movie",
        id: 5,
      },
    ],
  },
  {
    type: "populars",
    buttons: [
      {
        title: "Streaming",
        parameter: "movie",
        id: 1,
      },
      {
        title: "On TV",
        parameter: "tv",
        id: 2,
      },
      {
        title: "For Rent",
        parameter: "movie",
        id: 3,
      },
      {
        title: "In Theatres",
        parameter: "tv",
        id: 4,
      },
    ],
  },
  {
    type: "free-ones",
    buttons: [
      {
        title: "Movies",
        parameter: "day",
        id: 1,
      },
      {
        title: "TV",
        parameter: "week",
        id: 2,
      },
    ],
  },
];

const CardSelector = ({ type,handleCategoryClick }) => {
 
  const [currentButtonId, setCurrentButton] = useState(1);

  const currentList = options.find((item) => item.type === type);

  const loadMoviesByTypeToUI = (buttonId, buttonType) => {
    setCurrentButton(buttonId);
    handleCategoryClick(buttonType);
  };

  return (
    <div className="card__selector">
      {currentList?.buttons.map((item) => (
        <button
          onClick={() => loadMoviesByTypeToUI(item.id,item.parameter)}
          className={`card__selector-btn ${
            currentButtonId === item.id && "active"
          }`}
        >
          <span key={item.title}>{item.title}</span>
        </button>
      ))}
    </div>
  );
};

export default CardSelector;
