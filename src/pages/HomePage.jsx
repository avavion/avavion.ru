import { useState } from "react";
import { NavLink } from "react-router-dom";
import Circles from "../components/Circles/Circles";
import Card from "../components/Card";

const intialStateCards = [
  {
    id: 1,
    title: "PharmaBoosters",
    text: "Finalizing the theme and fixing bugs",
    year: 2020,
    tags: ["Shopify", "Freelance"],
  },

  {
    id: 2,
    title: "Potted",
    text: "Refining the customer's theme",
    year: 2020,
    tags: ["Shopify", "Freelance"],
  },

  {
    id: 3,
    title: "12Storezz",
    text: "Finalizing the theme and developing letters",
    year: 2020,
    tags: ["Shopify", "Freelance"],
  },

  {
    id: 4,
    title: "ParrotPercel",
    text: "Website Theme Development",
    year: 2020,
    tags: ["Shopify", "Freelance"],
  },

  {
    id: 5,
    title: "BEGGANI",
    text: "Revising an existing website theme",
    year: 2022,
    tags: ["Shopify", "Freelance"],
  },

  {
    id: 6,
    title: "LED Ligths Design",
    text: "Developing a website theme",
    year: 2022,
    tags: ["Shopify", "Freelance"],
  },
];

const HomePage = () => {
  const [cards, setCards] = useState(intialStateCards);

  return (
    <>
      <section className='section welcome'>
        <div className='container'>
          <div className='wrapper'>
            <div className='text-block'>
              <h2 className='heading'>Hey, I’m Alan!</h2>
              <p className='text'>
                <span>
                  Welcome to my digital garden. <span className='xl'>🌱</span>
                </span>
                <span>
                  I’m a software developer in Kazan. I make web app, write about
                  code and life. I like teaching, self-development, listening to
                  music and playing
                </span>
              </p>
            </div>

            <Circles />
          </div>
        </div>
      </section>

      <section className='section project'>
        <div className='container'>
          <header className='section-header'>
            <h2 className='section-header__title'>Projects</h2>

            <NavLink to='/projects' className='button'>
              View all
            </NavLink>
          </header>

          <div className='projects'>
            {cards.map((card) => {
              return <Card item={card} key={card.id} />;
            })}
          </div>
        </div>
      </section>

      <section className='section blog'>
        <header className='section-header'>
          <h2 className='section-header__title'>Latest </h2>

          <NavLink to='/projects' className='button'>
            View all
          </NavLink>
        </header>
      </section>
    </>
  );
};

export default HomePage;
