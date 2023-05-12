import { useState } from 'react';

import * as S from './styled';

function SerchInput({ onChange }) {
  //   const [value, setValue] = useState('');

  //   const handleValue = ({ target: { value } }) => {

  const handleValue = e => {
    console.log(e.target.value);

    onChange(e.target.value);
  };

  return (
    <S.SearchInputBox>
      <S.SerchInput placeholder='검색할 내용을 입력하세요.' value={value} onChang={handleValue} />
    </S.SearchInputBox>
  );
}

export default SearchInput;