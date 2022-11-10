import { forwardRef } from 'react';
import s from './LoadMore.module.scss';
import PropTypes from 'prop-types';

export const LoadMore = forwardRef(({ hasNextPage, isFetchingNextPage, fetchNextPage }, ref) => (
  <button
    ref={ref}
    onClick={hasNextPage ? fetchNextPage : null}
    disabled={!hasNextPage || isFetchingNextPage}
    className={s.button}
  >
    {isFetchingNextPage ? (
      <span>Загрузка...</span>
    ) : hasNextPage ? (
      <span>Загрузить еще</span>
    ) : (
      <span>Больше нечего загружать</span>
    )}
  </button>
));

LoadMore.propTypes = {
  hasNextPage: PropTypes.bool.isRequired,
  isFetchingNextPage: PropTypes.bool.isRequired,
  fetchNextPage: PropTypes.func.isRequired,
};
