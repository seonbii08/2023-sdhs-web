import * as S from './styled';

import type { ButtonHTMLAttributes } from "react";

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>){
    return<S.Button {...props}>{props.children}</S.Button>
}

export default Button;