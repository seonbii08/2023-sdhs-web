import * as S from "./styled";

function SearchInput({ onchange }) {
  const handleValue = (e) => {
    console.log(e.target.value);

    onchange(e.target.value);
  };

  return (
    <S.SearchInputBox>
      <S.SerchInput
        placeholder="검색할 내용을 입력하세요."
        onChange={handleValue}
      />
    </S.SearchInputBox>
  );
}

export default SearchInput;
