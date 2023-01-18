import cn from 'classnames';
import { useQuery } from 'react-query';
import { AnimeItem, Text, Heading } from 'src/components/common';
import { getSchedule } from 'src/api/anilibria/scheduleService';
import s from './SchedulePage.module.scss';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { ERROR_CODE_500 } from 'src/constants';
import { useEffectOnce } from 'src/hooks';
import { FormattedMessage, useIntl } from 'react-intl';

const MOCKS_FOR_SKELETON = [0, 1, 2, 3, 4];

export const SchedulePage = () => {
  const { formatMessage } = useIntl();
  const pageTitle = formatMessage({ id: 'schedule.title' });

  useEffectOnce(() => {
    document.title = pageTitle;
  });

  const { data: days, error: queryError, isLoading } = useQuery([pageTitle], () => getSchedule());
  const error = queryError || days?.error?.code;

  if (error) return <ErrorPage errorCode={typeof error === 'number' ? error : ERROR_CODE_500} />;

  return (
    <section className={s.content}>
      <Heading
        type="h3"
        content={formatMessage({ id: 'schedule.heading' })}
        className={s.heading}
      />
      <Text className={s.desc}>
        <FormattedMessage id="schedule.description" />
      </Text>
      {isLoading
        ? MOCKS_FOR_SKELETON.map((day) => (
            <div key={day} className={s.day}>
              <div className={cn(s.dayNameSkeleton, 'skeleton')} />
              <div className={s.animes}>
                {MOCKS_FOR_SKELETON.map((amine) => (
                  <div key={amine} className={cn(s.animeItem, 'skeleton')} />
                ))}
              </div>
            </div>
          ))
        : days.map(({ day, items }) => (
            <div key={day} className={s.day}>
              <Text className={s.dayName}>
                <FormattedMessage id={`day.${day}`} />
              </Text>
              <div className={s.animes}>
                {items.map((amine) => (
                  <AnimeItem
                    title={amine.names.ru}
                    episodes={amine.torrents.episodes.string}
                    description={amine.description}
                    posters={amine.posters}
                    code={amine.code}
                    key={`Catalog:${amine.code}`}
                    className={s.animeItem}
                  />
                ))}
              </div>
            </div>
          ))}
    </section>
  );
};
