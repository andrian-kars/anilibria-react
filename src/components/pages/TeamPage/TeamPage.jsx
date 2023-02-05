import cn from 'classnames';
import { useQuery } from 'react-query';
import { Text, Heading } from 'src/components/common';
import { getTeam } from 'src/api/anilibria/teamService';
import s from './TeamPage.module.scss';
import { ErrorPage } from '../ErrorPage/ErrorPage';
import { ERROR_CODE_500 } from 'src/constants';
import { useEffectOnce } from 'src/hooks';
import { FormattedMessage, useIntl } from 'react-intl';

const MOCKS_FOR_SKELETON = [0, 1, 2, 3, 4, 5];

export const TeamPage = () => {
  const { formatMessage } = useIntl();
  const pageTitle = formatMessage({ id: 'team.title' });

  useEffectOnce(() => {
    document.title = pageTitle;
  });

  const { data: team, error: queryError, isLoading } = useQuery([pageTitle], () => getTeam());
  const error = queryError || team?.error?.code;

  if (error) return <ErrorPage errorCode={typeof error === 'number' ? error : ERROR_CODE_500} />;

  return (
    <section className={s.content}>
      <Heading type="h3" content={formatMessage({ id: 'team.heading' })} className={s.heading} />
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
        : [
            {
              type: 'engineer',
              items: ['andrian-kars', 'viktor-yadelskyi'],
              links: ['https://github.com/andrian-kars', 'https://github.com/viktor-yadelskyi'],
            },
            ...team,
          ].map(({ type, items, links }) => (
            <div key={type} className={s.team}>
              <Text className={s.dayName}>
                <FormattedMessage id={`team.${type}`} />
              </Text>
              <div className={s.names}>
                {items.map((person, index) =>
                  links ? (
                    <a
                      className={s.link}
                      key={person}
                      href={links[index]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Text key={person}>{person}</Text>
                    </a>
                  ) : (
                    <Text key={person}>{person}</Text>
                  ),
                )}
              </div>
            </div>
          ))}
    </section>
  );
};
