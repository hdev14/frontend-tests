import { useNavigate } from "react-router-dom";
import FormProfile from "../../components/FormProfile";

function AddProfile() {
  const navigate = useNavigate();

  const addProfileHandler = async (username: string) => {
    console.log(username);
    navigate('/');
  }

  return (
    <div className='center'>
      <h1>Add Profile</h1>
      <FormProfile addProfile={addProfileHandler} />
    </div>
  )
}

export default AddProfile;