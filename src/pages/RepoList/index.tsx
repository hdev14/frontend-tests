import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Repos from '../../components/Repos';
import { AppDispatch, Repo, RootState, fetchRepos } from '../../redux';
import './index.css';

function RepoList() {
  const dispatch = useDispatch<AppDispatch>();
  const { username } = useParams();
  const data = useSelector<RootState, Repo[]>((state) => state.repos)
  
  useEffect(() => {
    if (username) {
      dispatch(fetchRepos({ username }));
    }
  },[]);

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