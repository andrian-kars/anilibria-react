import cn from 'classnames';
import { useQuery } from 'react-query';
import { Text, Heading } from 'src/components/common';
import { getTeam } from 'src/api/teamService';
import s from './TeamPage.module.scss';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { ERROR_CODE_500 } from 'src/constants';
import { useEffectOnce } from 'src/hooks';

const MOCKS_FOR_SKELETON = [0, 1, 2, 3, 4, 5];
const PAGE_TITLE = 'Команда проекта';

export const TeamPage = () => {
  useEffectOnce(() => {
    document.title = PAGE_TITLE;
  });

  const { data: team, error: queryError, isLoading } = useQuery([PAGE_TITLE], () => getTeam());
  const error = queryError || team?.error?.code;

  if (error) return <ErrorPage errorCode={typeof error === 'number' ? error : ERROR_CODE_500} />;

  return (
    <section className={s.content}>
      <Heading
        type="h3"
        content="УЧАСНИКИ КОМАНДЫ КОГДА-ЛИБО СУЩЕСТВОВАВШИЕ НА ПРОЕКТЕ"
        className={s.heading}
      />
      {isLoading
        ? MOCKS_FOR_SKELETON.map((t) => (
            <div key={t} className={s.team}>
              <div className={cn(s.dayNameSkeleton, 'skeleton')} />
              <div className={s.names}>
                {MOCKS_FOR_SKELETON.map((person) => (
                  <div key={person} className={cn('skeleton', 'skeleton-text', s.skeletonText)} />
                ))}
              </div>
            </div>
          ))
        : team.map(({ type, items }) => (
            <div key={type} className={s.team}>
              <Text className={s.dayName}>{type}</Text>
              <div className={s.names}>
                {items.map((person) => (
                  <Text key={person}>{person}</Text>
                ))}
              </div>
            </div>
          ))}
    </section>
  );
};
