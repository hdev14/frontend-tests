import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Repos from '../../components/Repos';
import { Repo, RootState } from '../../redux';
import './index.css';

function RepoList() {
  const navigate = useNavigate();
  const { username } = useParams();
  const data = useSelector<RootState, Repo[]>((state) => state.repos)
  
  const onClickHandler = () => {
    console.log(username);
    navigate('/add');
  }

  return (
    <div className='center'>
      <h1>Repos</h1>
      <div className='repo-list-container'>
        <Repos data={data} />
      </div>
    </div>
  );
}

export default RepoList;