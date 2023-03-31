import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Profiles from '../../components/Profiles';
import { RootState } from '../../redux';
import './index.css';

function ProfileList() {
  const navigate = useNavigate();
  const profiles = useSelector<RootState, string[]>((state) => state.profiles);

  const onClickHandler = () => {
    navigate('/add-profile');
  }

  return (
    <div className='center'>
      <h1>Profiles</h1>
      <div className='profile-list-container'>
        <Button className='profile-btn' type='button' onClick={onClickHandler}>add profile</Button>
        <Profiles profiles={profiles}/>
      </div>
    </div>
  );
}

export default ProfileList;