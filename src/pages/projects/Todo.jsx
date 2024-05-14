import React, { useState, useEffect } from 'react';

const Todo = () => {
    const [show, setShow] = useState('all');
    const [task, setTask] = useState({task: '', status: 'active'});
    const [edit, setEdit] = useState({status: false, index: null});
    const [filteredTodo, setFilteredTodo] = useState([]);
    const [todo, setTodo] = useState([]);

    useEffect(() => {
        if (show === 'active') {
            const newTodo = todo.filter((task) => task.status !== 'completed');
            setFilteredTodo([...newTodo]);
        } else if (show === 'completed') {
            const newTodo = todo.filter((task) => task.status !== 'active');
            setFilteredTodo([...newTodo]);
        } else {
            setFilteredTodo([...todo]);
        }
    }, [show, edit, todo]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.task === '') {
            alert('Please enter your task!');
            return;
        }
        if (edit.status) {
            todo[edit.index] = task;
            setTodo(todo);
            setEdit({status: false, index: null});
            setTask({task: '', status: 'active'});
            return;
        }
        setTodo([...todo, task]);
        setTask({task: '', status: 'active'});
    }

    const handleChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value});
    }

    const handleEdit = (elem, index) => {
        setTask(elem);
        setEdit({status: true, index});
    }

    const handleRemove = (index) => {
        todo.splice(index, 1);
        setTodo([...todo]);
    }

    return (
        <div className="px-[0.4rem] py-[8rem] text-[#fff] font-nunito w-full h-auto min-h-[100vh] todo-bg bg-cover bg-fixed">
            <div className="mx-auto w-full max-w-[500px]">
                <form onSubmit={handleSubmit} className="flex">
                    <input value={task.task} onChange={handleChange} name="task" type="text" placeholder="Enter task" className="px-[0.8rem] py-[0.4rem] text-[1.1rem] border-none outline-none bg-[#000] bg-opacity-60 rounded-s-lg"/>
                    <select value={task.status} onChange={handleChange} name="status" className="px-[0.8rem] py-[0.4rem] text-[1.1rem] border-l-[1px] border-[#222] outline-none bg-[#000]">
                        <option value="active">Active</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button type="submit" className="px-[1rem] text-[1.1rem] bg-green-800 border-none outline-none rounded-e-lg">{edit.status ? 'Update' : 'Submit'}</button>
                </form>

                <div className="mt-[1rem] flex items-center">
                    <button onClick={() => setShow('all')} className={`px-[0.8rem] py-[0.4rem] text-[1.1rem] ${show === 'all' ? 'bg-green-800 hover:bg-green-800' : 'bg-[#000] bg-opacity-60 hover:bg-opacity-100'} transition-all ease-in-out duration-300 rounded-s-lg`}>All</button>
                    <button onClick={() => setShow('active')} className={`px-[0.8rem] py-[0.4rem] text-[1.1rem] border-x-[1px] border-[#222] ${show === 'active' ? 'bg-green-800 hover:bg-green-800 border-green-800' : 'bg-[#000] bg-opacity-60 hover:bg-opacity-100'} ${show === 'all' ? 'border-l-green-800' : 'border-r-green-800'} transition-all ease-in-out duration-300`}>Active</button>
                    <button onClick={() => setShow('completed')} className={`px-[0.8rem] py-[0.4rem] text-[1.1rem] ${show === 'completed' ? 'bg-green-800 hover:bg-green-800' : 'bg-[#000] bg-opacity-60 hover:bg-opacity-100'} transition-all ease-in-out duration-300 rounded-e-lg`}>Completed</button>
                </div>

                <div className="mt-[1rem]">
                    <div className="w-full flex items-center">
                        <strong className="w-[45%] text-[1.1rem] underline">Task</strong>
                        <strong className="w-[25%] text-[1.1rem] underline">Status</strong>
                        <strong className="w-[30%] text-[1.1rem] underline">Actions</strong>
                    </div>

                    {!filteredTodo.length && <p className="py-[0.8rem] text-[1.1rem]">Add some task!</p>}
                    
                    {filteredTodo.length !== 0 && filteredTodo.map((elem, index) => {
                        return <div key={index} className="pt-[1rem] w-full flex items-start">
                            <span className="w-[45%] text-[1.1rem]">{elem.task}</span>
                            <span className={`w-[25%] text-[1.1rem] ${elem.status === 'active' ? 'text-[orange]' : 'text-[#3ab16e]'}`}>{elem.status}</span>
                            <span className="w-[30%] flex items-center gap-[0.6rem]">
                                <button onClick={() => handleEdit(elem, index)} className="px-[0.6rem] py-[0.2rem] text-[1rem] border-none outline-none rounded-md bg-[steelblue]">Edit</button>
                                <button onClick={() => handleRemove(index)} className="px-[0.6rem] py-[0.2rem] text-[1rem] border-none outline-none rounded-md bg-[crimson]">Delete</button>
                            </span>
                        </div>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Todo;