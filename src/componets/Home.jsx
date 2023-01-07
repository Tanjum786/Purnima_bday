import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <div class="card">
        <img
          src="https://raw.githubusercontent.com/DenverCoder1/Responsive-Birthday-Card/main/birthday.svg"
          alt="birthday"
          class="birthday"
        />
        <div class="text">
          <h1>Happppyy Birthday,, Bubbly girl :)</h1>
          <p> For your birthday, we’ve gotten you something that’s gluten free,
            zero calories, and absolutely delightful. </p>
          <p>Hope you have a wonderful birthday</p>
          <p class="muted">-Niswey ❤️ </p>
          <button>
            <Link to="/wishespage" className="button">
              Just Click it
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
