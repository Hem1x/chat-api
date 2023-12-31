import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage } from './components/store/chatSlice/chatSlice';

const App = () => {
  const state = useSelector((state) => state.chat);

  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const fetchAnswer = async () => {
    try {
      const response = await axios.get(
        'https://64b519e9f3dbab5a95c6b423.mockapi.io/todos',
        {
          params: {
            q: value,
          },
        },
      );
      const answer = response.data['Hello'];
      return answer;
    } catch (error) {
      console.error('Ошибка при получении ответа:', error);
      return 'Произошла ошибка при получении ответа';
    }
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    dispatch(addMessage(value));
    const answer = await fetchAnswer();
    dispatch(addMessage(answer));
    setValue('');
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button>Отправить</button>
      </form>

      {state.map((message, index) => (
        <div key={index}>{message}</div>
      ))}
    </div>
  );
};

export default App;
