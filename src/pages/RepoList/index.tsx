import { useNavigate } from 'react-router-dom';
import Repos from '../../components/Repos';
import './index.css';

const data = [
  {
    name: 'clean-code',
    url: 'https://github.com/hdev14/clean-code-example'
  }
];

function RepoList() {
  const navigate = useNavigate();
  
  const onClickHandler = () => {
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