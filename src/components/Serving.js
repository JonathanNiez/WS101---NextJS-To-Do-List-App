export default function Serving({ servings, setData }) {
  let itemIndex = 1;

  function buttonClicked(index) {
    let modifedTodos = servings.filter((serving, serveIndex) => {
      if (index !== serveIndex) {
        console.log(index);
        return serving;
      }
    });
    setData(modifedTodos);
  }

  const display = () => {
    if (servings.length === 0) {
      return (
        <h1 className="font-bold p-3 bg-white rounded-md shadow-lg text-2xl">
          Nothing
        </h1>
      );
    } else {
      return servings.map((serving, index) => {
        if (serving.isPreparing === true) {
          return (
            <li
              className="text-lg bg-white rounded-md p-3 mt-3 shadow-lg flex"
              key={index}
            >
              <div className="grow">
                <div className="font-bold text-2xl">
                  {itemIndex++}: {serving.title}
                  <button onClick={() => buttonClicked(index)}>x</button>
                </div>
              </div>
            </li>
          );
        }
      });
    }
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="grow shrink-0 w-[500px]">
        <div className="pt-5">
          <h1 className="text-lg font-bold">Now Serving</h1>
        </div>
        <ul>{display()}</ul>
      </div>
    </div>
  );
}
