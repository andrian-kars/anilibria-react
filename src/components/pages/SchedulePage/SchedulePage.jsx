import cn from 'classnames';
import { useQuery } from 'react-query';
import { AnimeItem, Text, Heading } from 'src/components/common';
import { getSchedule } from 'src/api/scheduleService';
import s from './SchedulePage.module.scss';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { ERROR_CODE_500 } from 'src/constants';
import { useEffectOnce } from 'src/hooks';

const MOCKS_FOR_SKELETON = [0, 1, 2, 3, 4];
const PAGE_TITLE = 'Новое аниме, онгоинги';

export const SchedulePage = () => {
  useEffectOnce(() => {
    document.title = PAGE_TITLE;
  });

  const { data: days, error: queryError, isLoading } = useQuery([PAGE_TITLE], () => getSchedule());
  const error = queryError || days?.error?.code;

  if (error) return <ErrorPage errorCode={typeof error === 'number' ? error : ERROR_CODE_500} />;

  return (
    <section className={s.content}>
      <Heading
        type="h3"
        content="РАСПИСАНИЕ ВЫХОДА СЕРИЙ В ОЗВУЧКЕ АНИЛИБРИИ*"
        className={s.heading}
      />
      <Text className={s.desc}>
        *новые серии выходят в этот день недели +-1 день. В начале сезона расписание может не
        соответствовать действительности. Если серии задерживаются — это будет указано в статусе
        релиза (над постером).
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
              <Text className={s.dayName}>{day}</Text>
              <div className={s.animes}>
                {items.map((amine) => (
                  <AnimeItem
                    title={amine.names.ru}
                    episodes={amine.torrents.series.string}
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
