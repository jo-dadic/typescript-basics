import React, {useContext} from 'react';

import TodoItem from './TodoItem';
import {TodosContext} from '../store/todos-context';

import styles from './Todos.module.css';

const Todos: React.FC = () => {   // FC is a generic type and we add props object
  const todoCtx = useContext(TodosContext);
    return (
     <ul className={styles.todos}>
       {todoCtx.items.map(item => <TodoItem key={item.id} text={item.text} onRemoveTodo={todoCtx.removeTodo.bind(null, item.id)}/> )}
    </ul>
    ) 
}

export default Todos;