import { useState } from "react";

export default function Preparing({ data, setData }) {
  const [todo, setTodo] = useState({
    title: "",
    index: -1,
    isPreparing: false,
  });

  let todoIndex = 1;

  const titleChange = (e) => {
    setTodo({ ...todo, title: e.target.value });
  };

  const buttonClicked = () => {
    if (todo.title === "") {
      return;
    }
    setData([...data, todo]);
    setTodo({ title: "" });
  };

  function doneClicked(index) {
    let modifedTodos = data.filter((data, todoIndex) => {
      if (index === todoIndex) {
        return (data.isPreparing = true);
      } else {
        return data;
      }
    });
    setData(modifedTodos);
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="grow shrink-0 w-[500px]">
        <div className="pt-5">
          <input
            name="title"
            value={todo.title}
            onChange={titleChange}
            className="shadow pb-2 appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
          />
          <button
            onClick={buttonClicked}
            className="mt-3 shadow bg-blue-400 hover:bg-blue-600 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Add
          </button>
          <h1>Now Preparing</h1>
        </div>
        <ul>
          {data.map((todo, index) => {
            if (todo.isPreparing !== true) {
              return (
                <li className="text-lg pt-5 flex" key={index}>
                  <div className="grow">
                    <div className="font-bold">
                      {todoIndex++}: {todo.title}
                    </div>
                    <div className="bg-white rounded-md p-3">
                      {todo.description}
                    </div>
                  </div>
                  <div>
                    <button
                      onClick={() => doneClicked(index)}
                      className="m-3 mr-4 shadow bg-yellow-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      ok
                    </button>
                  </div>
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
