import React from "react";
import Circle from "../components/Circle";
import { NavLink } from "react-router-dom";

const circleColorMatrix = [
  ["#FF67F7", "#FF67F7", "#FF67F7", "#FF67F7", "#FF67F7"],
  ["#936DF9", "#936DF9", "#936DF9", "#936DF9", "#936DF9"],
  ["#59ABF7", "#59ABF7", "#59ABF7", "#59ABF7", "#59ABF7"],
  ["#5EDDAC", "#5EDDAC", "#5EDDAC", "#5EDDAC", "#5EDDAC"],
  ["#F6CD5D", "#F6CD5D", "#F6CD5D", "#F6CD5D", "#F6CD5D"],
];

const circleSize = 48;

const HomePage = () => {
  return (
    <>
      <section className='section welcome'>
        <div className='container'>
          <div className='wrapper'>
            <div className='text-block'>
              <h2 className='heading'>Hey, I’m Alan!</h2>
              <p className='text'>
                <span>Welcome to my digital garden. 🌱</span>
                <span>
                  I’m a software developer in Kazan. I make web app, write about
                  code and life. I like teaching, self-development, listening to
                  music and playing
                </span>
              </p>
            </div>

            <div
              className='circles'
              style={{
                gridTemplateColumns: `repeat(${circleColorMatrix.length}, ${circleSize}px)`,
                gridTemplateRows: `repeat(${circleColorMatrix.length}, ${circleSize}px)`,
                gap: circleSize / 2,
              }}
            >
              {circleColorMatrix.map((colors, parentIndex) => {
                return colors.map((color, index) => {
                  return (
                    <Circle
                      size={circleSize}
                      color={color}
                      key={`${parentIndex}${index}`}
                    />
                  );
                });
              })}
            </div>
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
            {/* Cards */}
            <article className='card'>
              <p className='card__year'>2020</p>
              <h3 className='card__title'>
                <NavLink className='card__link'>PharmaBoosters</NavLink>
              </h3>
              <p className='card__text'>Finalizing the theme and fixing bugs</p>
              <div className='tags card__tags'>
                <div className='tag card__tag'>Shopify</div>
                <div className='tag card__tag'>Freelance</div>
              </div>
            </article>

            <article className='card'>
              <p className='card__year'>2020</p>
              <h3 className='card__title'>
                <NavLink className='card__link'>Potted</NavLink>
              </h3>
              <p className='card__text'>Refining the customer's theme</p>
              <div className='tags card__tags'>
                <div className='tag card__tag'>Shopify</div>
                <div className='tag card__tag'>Freelance</div>
              </div>
            </article>

            <article className='card'>
              <p className='card__year'>2020</p>
              <h3 className='card__title'>
                <NavLink className='card__link'>12Storeez</NavLink>
              </h3>
              <p className='card__text'>
                Finalizing the theme and developing letters
              </p>
              <div className='tags card__tags'>
                <div className='tag card__tag'>Shopify</div>
                <div className='tag card__tag'>Freelance</div>
              </div>
            </article>

            <article className='card'>
              <p className='card__year'>2020</p>
              <h3 className='card__title'>
                <NavLink className='card__link'>ParrotParcel</NavLink>
              </h3>
              <p className='card__text'>Website Theme Development</p>
              <div className='tags card__tags'>
                <div className='tag card__tag'>Shopify</div>
                <div className='tag card__tag'>Freelance</div>
              </div>
            </article>

            <article className='card'>
              <p className='card__year'>2022</p>
              <h3 className='card__title'>
                <NavLink className='card__link'>BEGGANI</NavLink>
              </h3>
              <p className='card__text'>Revising an existing website theme</p>
              <div className='tags card__tags'>
                <div className='tag card__tag'>Shopify</div>
                <div className='tag card__tag'>Freelance</div>
              </div>
            </article>

            <article className='card'>
              <p className='card__year'>2022</p>
              <h3 className='card__title'>
                <NavLink className='card__link'>LED Lights Design</NavLink>
              </h3>
              <p className='card__text'>Developing a website theme</p>
              <div className='tags card__tags'>
                <div className='tag card__tag'>Shopify</div>
                <div className='tag card__tag'>Freelance</div>
              </div>
            </article>
            {/* End Cards */}
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
