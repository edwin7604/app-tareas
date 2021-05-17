import {Todo, TodoList} from './classes';
import { crearTodohtml } from './js/componentes';
import './styles.css';


export const todoList = new TodoList();


todoList.todos.forEach(todo => crearTodohtml(todo));

console.log(todoList.todos);