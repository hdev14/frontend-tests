import { useNavigate } from 'react-router-dom';
import Button from '../Button';
import './index.css';

interface RepoProps {
  profiles: string[]
}

function Profiles({ profiles }: RepoProps) {
  const navigate = useNavigate();

  const onClickHandler = (username: string) => () => {
    navigate(`/repos/${username}`);
  }

  return (
    <ul data-test='profiles-ul' className="profiles">
      {profiles.map((username) => (
        <li key={username}>{username} <Button type='button' className='link' onClick={onClickHandler(username)}>ver repos</Button></li>
      ))}
    </ul>
  );
}

export default Profiles;
