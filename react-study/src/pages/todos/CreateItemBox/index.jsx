import Button from '../../../components/Button';

import * as S from './styled';

function CreateItemBox({ value, onChange, createTodo }) {
  const handleInputValue = e => {
    onChange(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === 'Enter' && value.trim()) createTodo();
  };

  return (
    <S.InputBox>
      <S.Input
        value={value}
        placeholder='To do를 입력해주세요.'
        onChange={handleInputValue}
        onKeyUp={handleKeyPress}
      />
      <Button onClick={createTodo} disabled={!value.trim()}>
        등록
      </Button>
    </S.InputBox>
  );
}

export default CreateItemBox;
