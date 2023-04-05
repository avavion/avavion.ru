import { NavLink } from "react-router-dom";

const Card = ({ item }) => {
  const { year, title, url, text, tags } = item;

  const Tags = tags.map((tag, index) => {
    return (
      <div key={index} className='tag card__tag'>
        {tag}
      </div>
    );
  });

  return (
    <article className='card'>
      <p className='card__year'>{year}</p>
      <h3 className='card__title'>
        <NavLink target='_blank' to={url} className='card__link'>
          {title}
        </NavLink>
      </h3>
      <p className='card__text'>{text}</p>
      <div className='tags card__tags'>{Tags}</div>
    </article>
  );
};

export default Card;
