import { NavLink } from "react-router-dom";
import { getFullYear } from "../utils/getFullYear";
import { StarsIcon } from "./Icons";

const Card = ({ item }) => {
  const { title, topics, url, stars, content, created_at } = item;

  const Topics = topics.map((topic, index) => {
    return (
      <div key={index} className='tag card__tag'>
        {topic}
      </div>
    );
  });

  return (
    <article className='card'>
      <header className='card-header'>
        <p className='card__year'>{getFullYear(created_at)}</p>
        <p className='card__stars'>
          <StarsIcon size={12} /> <span>{stars}</span>
        </p>
      </header>
      <h3 className='card__title'>
        <NavLink target='_blank' to={url} className='card__link'>
          {title}
        </NavLink>
      </h3>
      <p className='card__text'>{content}</p>
      <div className='tags card__tags'>{Topics}</div>
    </article>
  );
};

export default Card;
