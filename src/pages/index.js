import Serving from "@/components/Serving";
import Preparing from "@/components/Preparing";
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  return (
    <div>
      <div className="flex  bg-gray-400 place-content-center m-1 rounded-lg"></div>
      <div className="bg-red-400 pb-6 m-10 rounded-lg">
        {" "}
        {<Preparing data={data} setData={setData} />}
        {<Serving servings={data} setData={setData} />}
      </div>
    </div>
  );
}
