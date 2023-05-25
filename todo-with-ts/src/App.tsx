import {ChangeEvent, useState, KeyboardEvent, useEffect} from 'react';

import Input from "./components/Input";

import TodoList from "./components/TodoList";

import type { Todo } from "./types/todo";

import {v4 as uuidv4} from 'uuid';

import * as S from './styled';



function App() {
    const [todoName, setTodoName] = useState<Todo['name']>("");
    const [todos, setTodos] = useState<Todo[]>([]);
    const [searchValue,  setSearchValue] = useState<string>("")
    const [selectedTodoIds, setSelectedTodoIds] = useState<Todo["id"][]>([]);
    const [editedTodoId, setEditedTodoId] = useState<Todo['id'] | undefined>();
    const [editedName, setEditedName] = useState<Todo["name"]>('');

    const handleTodoName = ({
        target: {value},
     }: ChangeEvent<HTMLInputElement>) => {
        setTodoName(value);
    };
    
    const handleEnterPress = (e:KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            // setTodos((prevState) => [...prevState, {id: uuidv4(), name:todoName}]);
            addTodo();
        }
    }

    const handleSearchValue = ({
        target: {value},
    }: ChangeEvent<HTMLInputElement>) => {
        setSearchValue(value);
    };

    const handleDeleteTodo = (id: Todo["id"]) => {
        setTodos(prevState => {
            const filterTodos = [...prevState].filter((todo) => todo.id !== id);
            return filterTodos;
        });
    };

    const addTodo = () => {
        setTodos((prevState) => [...prevState, {id: uuidv4(), name: todoName }])
        // setTodoName("");
    };

    const toggleEditTodo = (id: Todo['id']) => {
        setEditedTodoId((prevState) => (prevState === id ? undefined : id));
            // if(prevState === id) {
            //     return undefined;
            // }
            // return id;
        }

    const handleEditedName = (name: Todo['name']) => {
        setEditedName(name);
    }

    const editTodo = () => {
        setTodos((prevState) => {
            return prevState.map(({id, name}) => {
                if(id === editedTodoId) {
                    return {id, name:editedName}
                }
                return {id, name};
            });
        });
        setEditedTodoId(undefined);
        setEditedName("");
    };
    

    useEffect(() => {
        setTodoName("");
    }, [todos])


    return (
        <div className="App">
            <Input value={todoName} onChange={handleTodoName} onKeyUp={handleEnterPress} placeholder="메시지를 입력하세요" />
            <button onClick={addTodo}>Todo 추가</button>
            <Input onChange={handleSearchValue} placeholder="검색"/>
            <TodoList 
                todos={todos} 
                searchValue={searchValue} 
                editedTodoId={editedTodoId}
                deleteTodo={handleDeleteTodo}
                setSelectedTodoIds={setSelectedTodoIds}
                toggleEditTodo={toggleEditTodo}
                setEditedName={handleEditedName}
                editTodo={editTodo}

            />
        </div>
    );
}

export default App;