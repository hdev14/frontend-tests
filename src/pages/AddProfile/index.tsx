import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import FormProfile from "../../components/FormProfile";
import { AppDispatch, registerProfile } from "../../redux";

function AddProfile() {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const addProfileHandler = async (username: string) => {
    dispatch(registerProfile({ username })).then(() => {
      navigate('/');
    });
  }

  return (
    <div className='center'>
      <h1>Add Profile</h1>
      <FormProfile addProfile={addProfileHandler} />
    </div>
  )
}

export default AddProfile;