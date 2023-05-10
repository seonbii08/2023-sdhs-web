import { useEffect, useState } from 'react';

import * as S from './styled';

import CreateItemBox from './CreateItemBox';
import ItemList from './ItemList';
import Button from '../../components/Button';

function Todos() {
  const [todoName, setTodoName] = useState('');
  const [todos, setTodos] = useState([]);

  const createTodo = () => {
    if (!todoName.trim()) {
      alert('값이 없습니다.');
      return;
    }
    setTodoName('');
    setTodos(prevState => [...prevState, { id: prevState.length + 1, name: todoName }]);
  };

  return (
    <S.Container>
      <S.Title>To do list</S.Title>
      <CreateItemBox value={todoName} onChange={setTodoName} createTodo={createTodo} />
      <ItemList todos={todos} />
    </S.Container>
  );
}

export default Todos;
