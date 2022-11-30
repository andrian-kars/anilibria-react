import { NavLink, useNavigate } from 'react-router-dom';
import cn from 'classnames';
import s from './Navigation.module.scss';
import PropTypes from 'prop-types';
import { getRandom } from 'src/api/titleService';

export const NavigationItem = ({ to, text, svg = null, onClick = null }) => {
  const navigate = useNavigate();

  const content = (
    <>
      {svg && (
        <svg>
          <use href={`#${svg}`}></use>
        </svg>
      )}
      <span className={s.description}>{text}</span>
    </>
  );

  const handleOpenRandom = async () => {
    const randomTitleCode = await getRandom();
    navigate(`release/${randomTitleCode}`);
    onClick();
  };

  return (
    <li className={s.item}>
      {to.includes('random') ? (
        <a title={text} className={s.link} onClick={handleOpenRandom}>
          {content}
        </a>
      ) : to.includes('http') ? (
        <a
          title={text}
          href={to}
          target="_blank"
          rel="noreferrer"
          className={s.link}
          onClick={onClick}
        >
          {content}
          <svg className={cn(s.externalSvg, s.description)}>
            <use href="#external"></use>
          </svg>
        </a>
      ) : (
        <NavLink
          title={text}
          className={({ isActive }) => cn(s.link, isActive && s.active)}
          to={to}
          onClick={onClick}
        >
          {content}
        </NavLink>
      )}
    </li>
  );
};

NavigationItem.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  svg: PropTypes.string,
  onClick: PropTypes.func,
};
