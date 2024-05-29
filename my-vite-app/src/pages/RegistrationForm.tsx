import React, { useState } from 'react';
import '../styles/RegistrationForm.css';
import AppButton from '../components/UI/AppButton/AppButton';
import Applink from '../components/UI/AppLink/Applink';
import AppInput from '../components/UI/AppInput/AppInput';
import AppHeader from '../components/UI/AppHeader/AppHeader';



const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ username, email, password });
  };

  return (
    <div className="registration-page">
       <AppHeader headerText='Регистрация' headerType='h1'/>
    <form className="registration-form" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Имя пользователя:</label>
      <AppInput id="username" inputType="text" inputValue={username} isRequired />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <AppInput id="email" inputType="email" inputValue={email} isRequired />
      </div>
      <div>
        <label htmlFor="password">Пароль:</label>
        <AppInput id="password" inputType="password" inputValue={password} isRequired />
      </div>
     <AppButton buttonText="Зарегистрироваться" buttonType="submit"isDisabled={false}/>
    </form>
    <Applink linkText='Забыли пароль?'/>
    </div>
    
  );
};

export default RegistrationForm;
