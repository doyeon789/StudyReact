import './List.css'
import TodoItem from './TodoItem';
import { useState, useMemo, useContext } from 'react';
import { TodoStateContext } from '../App';

const List = () => {
    const todos = useContext(TodoStateContext)
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilterData = () => {
        if (search === "") {
            return todos;
        }

        return todos.filter((todo) => {
            return todo.content
                .toLowerCase()
                .includes(search.toLowerCase());
        });
    }

    const filteredTodos = getFilterData();

    const { totalCount, doneCount, notDoneCount } =
        useMemo(() => {
            const totalCount = todos.length
            const doneCount = todos.filter((todo) => todo.isDone).length;
            const notDoneCount = totalCount - doneCount
            return ({
                totalCount,
                doneCount,
                notDoneCount
            });
        }, [todos])

    return (
        <div className="List">
            <h4>Todo List</h4>
            <div>
                <div>total : {totalCount}</div>
                <div>done : {doneCount}</div>
                <div>notDone: {notDoneCount}</div>
            </div>
            <input
                value={search}
                onChange={onChangeSearch}
                placeholder="검색어를 입력하세요."
            />
            <div className='todos_wrapper'>
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} />
                })}
            </div>
        </div>
    );
};

export default List