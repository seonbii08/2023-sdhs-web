import {Todo as TodoType} from "../../types/todo";

import Button from "../Button";

import Input from "../Input";
import { ChangeEvent } from "react";
import * as S from './styled';

interface TodoProps {
    name: TodoType["name"];
    isEdited: boolean;
    deleteTodo: () => void; // 타입을 함수로
    handleSelected: (checked: boolean) => void; // 매개변수 type이 boolean
    toggleEditTodo: () => void;
    setEditedName: (name: TodoType["name"]) => void;
    editTodo: () => void;
}

function Todo({
    name, 
    isEdited, 
    deleteTodo, 
    handleSelected, 
    toggleEditTodo, 
    setEditedName,
    editTodo,
    
}:TodoProps) {
    
    const handleEditedName =({
        target: {value},
    }: ChangeEvent<HTMLInputElement> ) => {
        setEditedName(value);
    };

    return( 
    <li>
        {isEdited ? <Input defaultValue={name} onChange={handleEditedName}/> : <span>{name}</span>}
        <S.ButtonWrap onClick={deleteTodo}>삭제</S.ButtonWrap>
        <S.ButtonWrap onClick={toggleEditTodo}>{isEdited ? "취소" : "수정"}</S.ButtonWrap>
        {isEdited && <S.ButtonWrap onClick={editTodo}>저장</S.ButtonWrap>}
    </li>
    );
}

export default Todo;