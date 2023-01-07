import React from "react";
import { image1, image2 } from "../Assets";
import "./bday.css";

let wishes = [
  {
    id: 1,
    name: "Swathi",
    wish:
      "Happy Birthday Purnima!!🥳 I never had a chance to speak to you in person, but got to see you speak on the RTB session. Loved the way you speak with such innocence and pure intentions..May you achieve everything you ever wished for and more!💜",
  },
  {
    id: 2,
    wish:
      "Wish you a very very Happy Birthday….and lots and lots of learning this year! Khoob mazze karo, aand mujhe bhi thodaa make-up karna sikhao 😉",
    name: "Nilanjana",
  },
  {
    id: 3,
    wish:
      "Happy birthday Purnima.Hope you have a good birthday and keep growing into best version of you.",
    name: "Shubham",
  },
  {
    id: 4,
    wish:
      "Happy Birthday Purnima! Hope you always be energetic and loving as you are, make many more awesome memories and enjoy every moment with your loved ones, cant wait to meet u in person. Have a blast!",
    name: "Nanditha",
  },
  {
    id: 5,
    wish:
      "Happpy birthday Purnima!You have a beautiful smile and I love hearing your stories. Hope this year brings you more happiness, cake, great food, successes and everything you wish for. Have a fun one :)” Anoushka",
    name: "Anoushka",
  },
  {
    id: 6,
    wish: " fly and touch the sky wish you a very happy birthday 🎁 purnima",
    name:"A M T"
  },
  {
    id: 7,
    wish: "Happy Birthday Purnima",
    name: "Kamal",
  },
  {
    id: 7,
    wish: "Happy Birthday Purnima",
    name: "Sahai",
  },
  {
    id: 8,
    name: "Natasha",
    images: image1,
  },
  {
    id: 8,
    name: "Suma",
    images: image2,
  },
  {
    id: 9,
    name: "Simran",
    wish:
      "Hey Purnima, A very Happy Birthday to you :birthday:I wish this year goes by in the way you intend it to, fulfilling your wishes, and bringing you lots of good connections and happiness.Keep doing the great work in design, keep learning, and keep trying to go beyond your comfort zone. Have a great day! 💜Love. ",
  },
  {
    id: 10,
    name: "Harry urf Hari",
    wish: "Happy Birthday Purnima",
  },
  {
    id: 11,
    name: "ANjana",
    wish:
      "Wish You a Very Happy Birthday DEAR HAve LOTS of FUN with mad but cool PEoPlE",
  },
  {
    id: 12,
    name: "Manoj",
    wish:
      "HaPPy BiRtHdAy meri Pyari Behen !! Whenever I am with you, fun is guaranteed! Thank you for always lighting up my day and bringing a smile to my face! ' Wishing you all the best on your special day and upcoming year,my loopy behen",
  },
  {
    id: 12,
    name: "Tanjum",
    wish:"Happy birthday to my absolute funniest, craziest, and most wonderfully wacky friend! May your special day be as crazy cool as you are ! Have wonderfull day and all your birthday wishes comes true may god bless you with every thing you except ",
  },
];
export const BirthdayWishes = () => {
  return (
    <>
      <div className="bdaywishes_container">
        <p className="para">
          Eat as much as you can because God has kept your birthday as a
          fat-free special day for you{" "}
        </p>
        <div className="wishes_wrapper">
          {wishes?.map((wishlist) => {
            return (
              <>
                <div class="birthdayCard">
                  <div class="cardFront">
                    <p class="name color">{wishlist.name}</p>
                    <h3 class="happy">HAPPY BIRTHDAY!</h3>

                    <div class="balloons">
                      <div class="balloonOne"></div>
                      <div class="balloonTwo"></div>
                      <div class="balloonThree"></div>
                      <div class="balloonFour"></div>
                    </div>
                  </div>
                  <div className="cardInside">
                    <h3 class="back">HAPPY BIRTHDAY!</h3>
                    <p>{wishlist.wish}</p>
                    {wishlist.images ? (
                      <img src={wishlist.images} alt="" />
                    ) : null}
                    <p class="name">{wishlist.name}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
