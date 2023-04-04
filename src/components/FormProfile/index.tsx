import { FormEvent, ChangeEvent, useState } from 'react';
import Button from '../Button';
import './index.css';

interface FormProfileProps {
  addProfile: (username: string) => Promise<void>;
}

function FormProfile({ addProfile }: FormProfileProps) {
  const [input, setInput] = useState('');

  const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input !== '') {
      await addProfile(input);
    }
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return (
    <form className="form-profile" onSubmit={submitHandler}>
      <input 
        type='text' 
        onChange={onChangeHandler} 
        placeholder='digite o username'
        data-test='form-profile-input'
      />

      <Button type='submit' data-test='form-profile-btn'>Adicionar</Button>
    </form>
  );
}

export default FormProfile;
