import { useNavigate } from 'react-router-dom';
import { Button } from 'src/components/common';
import { AUTH_PAGE_REGISTRATION } from 'src/constants';
import { useIntl } from 'react-intl';
import s from './TermsPage.module.scss';

export const TermsPage = () => {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();

  const navigateBack = () => {
    navigate(AUTH_PAGE_REGISTRATION);
  };

  return (
    <div className={s.container}>
      <h1>You must not be a fucking slave</h1>
      <Button onClick={navigateBack}>{formatMessage({ id: 'termsPage.goBackButton' })}</Button>
    </div>
  );
};
