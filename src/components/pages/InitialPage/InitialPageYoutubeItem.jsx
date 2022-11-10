import cn from 'classnames';
import s from './InitialPage.module.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const InitialPageYoutubeItem = ({ id, image, title }) => {
  const [loaded, setLoaded] = useState(false);

  const loadedHandler = () => setLoaded(true);

  return (
    <a
      style={{ backgroundImage: `url(${image})` }}
      className={cn(s.link, !loaded && 'skeleton')}
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noreferrer"
      title={title}
    >
      <img onLoad={loadedHandler} src={image} alt={title} />
    </a>
  );
};

InitialPageYoutubeItem.propTypes = {
  id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
