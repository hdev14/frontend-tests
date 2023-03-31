import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import './index.css';

interface RepoProps {
  usernames: string[]
}

function Profiles({ usernames }: RepoProps) {
  const navigate = useNavigate();

  const onClickHandler = (username: string) => () => {
    navigate(`/repos/${username}`);
  }

  return (
    <ul className="profiles">
      {usernames.map((username) => (
        <li>{username} <Button type='button' className='link' onClick={onClickHandler(username)}>ver repos</Button></li>
      ))}
    </ul>
  );
}

export default Profiles;
