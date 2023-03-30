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
    await addProfile(input);
  }

  const onChangeHandler = async (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  }

  return (
    <form className="FormProfile" onSubmit={submitHandler}>
      <input type='text' onChange={onChangeHandler} />
      <Button type='submit'>Adicionar</Button>
    </form>
  );
}

export default FormProfile;
