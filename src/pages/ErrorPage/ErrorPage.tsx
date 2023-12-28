import { useNavigate } from 'react-router-dom';
import { Path } from '../../router/types';
import { ErrorMessage } from '../../components/ErrorMessage/ErrorMessage';

export function ErrorPage() {
  const navigate = useNavigate();

  const redirectToWelcome = () => {
    navigate(Path.Welcome);
  };

  return (
    <ErrorMessage
      redirectName="go to welcome page"
      redirectFunction={redirectToWelcome}
    />
  );
}
