import { NavLink } from "react-router-dom";

const SOCIALS = [
  {
    text: "GitHub",
    link: "https://gihub.com/avavion",
  },
  {
    text: "Telegram",
    link: "https://t.me/avavion",
  },
];

const Footer = () => {
  return (
    <footer className='footer' id='footer'>
      <div className='container'>
        <div className='wrapper'>
          <ul className='d-flex align-items-center justify-content-center socials'>
            {SOCIALS.map((social, index) => {
              return (
                <li key={index} className='social'>
                  <NavLink target="_blank" to={social.link}>{social.text}</NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
