import * as S from './styled';

function Button(props) {
  return (
    <>
      <S.Button {...props}>{props.children}</S.Button>
      {/* {props.color} / {props.size} */}
    </>
  );
}

export default Button;
