import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Circles from "../components/Circles/Circles";
import Card from "../components/Card";
import { formatDate } from "../utils/formatDate";
import ProjectRepository from "../repositories/ProjectRepository";

const initialStateArticles = [
  {
    id: 1,
    title: "Bookkeeping: 2020",
    date: new Date(2021, 0, 1),
  },
  {
    id: 2,
    title: "Bookkeeping: 2021",
    date: new Date(2022, 0, 1),
  },
  {
    id: 3,
    title: "Graduation with honors from college",
    date: new Date(2022, 5, 22),
  },
  {
    id: 4,
    title: "React Inter Roadmap",
    date: new Date(2022, 8, 1),
  },
  {
    id: 5,
    title: "Happy New Year 2023! 🎄",
    date: new Date(2022, 11, 31),
  },
  {
    id: 6,
    title: "Bookkeeping: 2022",
    date: new Date(2023, 0, 1),
  },
];

const intialStateCards = [
  // {
  //   id: 1,
  //   title: "PharmaBoosters",
  //   text: "Finalizing the theme and fixing bugs",
  //   year: 2020,
  //   tags: ["Shopify", "Freelance"],
  // },
  // {
  //   id: 2,
  //   title: "Potted",
  //   text: "Refining the customer's theme",
  //   year: 2020,
  //   tags: ["Shopify", "Freelance"],
  // },
  // {
  //   id: 3,
  //   title: "12Storezz",
  //   text: "Finalizing the theme and developing letters",
  //   year: 2020,
  //   tags: ["Shopify", "Freelance"],
  // },
  // {
  //   id: 4,
  //   title: "ParrotPercel",
  //   text: "Website Theme Development",
  //   year: 2020,
  //   tags: ["Shopify", "Freelance"],
  // },
  // {
  //   id: 5,
  //   title: "BEGGANI",
  //   text: "Revising an existing website theme",
  //   year: 2022,
  //   tags: ["Shopify", "Freelance"],
  // },
  // {
  //   id: 6,
  //   title: "LED Ligths Design",
  //   text: "Developing a website theme",
  //   year: 2022,
  //   tags: ["Shopify", "Freelance"],
  // },
];

const HomePage = () => {
  // const projectRepository = new ProjectRepository();

  // const [cards, setCards] = useState(intialStateCards);
  // const [articles, setArticles] = useState(initialStateArticles);

  // const fetchProjects = useCallback(async () => {
  //   const response = await projectRepository.getFilteredProject("all", 1, 6);

  //   setCards(response.data.data.items);
  // }, []);

  // useEffect(() => {
  //   fetchProjects();
  // }, [fetchProjects]);

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

      {/* <section className='section project'>
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
      </section> */}
{/* 
      <section className='section blog'>
        <div className='container'>
          <header className='section-header'>
            <h2 className='section-header__title'>Latest </h2>

            <NavLink to='/projects' className='button'>
              View all
            </NavLink>
          </header>

          <ul className='articles'>
            {articles.map((article) => {
              return (
                <li className='article' key={article.id}>
                  <NavLink className='article__title'>{article.title}</NavLink>
                  <p className='article__date'>{formatDate(article.date)}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </section> */}
    </>
  );
};

export default HomePage;
