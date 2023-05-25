import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { setTodos, createTodo, deleteTodo, deleteSelectedTodos } from '../../reduce/todos';

import * as S from './styled';

import CreateItemBox from './CreateItemBox';
import ItemList from './ItemList';

function Todos() {
  const [todoName, setTodoName] = useState('');
  const [todos, setTodos] = useState([]);

  const createTodo = () => {
    // if (!todoName.trim()) {
    //   alert("값이 없습니다.");
    //   return;
    // }
    setTodoName('');
    setTodos(prevState => [...prevState, { id: uuidv4(), name: todoName }]);
  };

  const deleteTodo = id => {
    const findIndex = todos.findIndex(v => v.id === id);
    setTodos(prevState => {
      const tempArr = [...prevState];
      tempArr.splice(findIndex, 1);
      return tempArr;
    });
  };

  useEffect(() => {
    try {
      const parseTodos = JSON.parse(localStorage.getItem('todos'));
      dispatch(setTodos(parseTodos));
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    try {
      const stringifyTodos = JSON.stringify(todos);
      localStorage.setItem('todos', stringifyTodos);
    } catch (error) {
      console.log(error);
    }
  }, [todos]);

  return (
    <S.Container>
      <S.Title>To do list</S.Title>
      <CreateItemBox value={todoName} onChange={setTodoName} createTodo={createTodo} />
      <ItemList todos={todos} deleteTodo={deleteTodo} />
    </S.Container>
  );
}

export default Todos;
