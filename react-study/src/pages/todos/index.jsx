import { useState } from 'react';

import * as S from './styled';

import CreateItemBox from './CreateItemBox';
import ItemList from './ItemList';

function Todos() {
  const [todoName, setTodoName] = useState('');
  const [items, setItems] = useState([]);

  return (
    <S.Container>
      <S.Title>To do list</S.Title>
      <CreateItemBox onChange={setTodoName} />
      <ItemList />
    </S.Container>
  );
}

export default Todos;
