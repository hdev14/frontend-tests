import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import './index.css';

function ProfileList() {
  const navigate = useNavigate();
  
  const onClickHandler = () => {
    navigate('/add-profile');
  }

  return (
    <div className='center'>
      <h1>Profiles</h1>
      <div className='profile-list-container'>
        <Button className='profile-btn' type='button' onClick={onClickHandler}>Add</Button>
      </div>
    </div>
  );
}

export default ProfileList;