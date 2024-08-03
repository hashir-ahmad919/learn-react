import { useState } from "react";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);
  let myObject = {
    username: "Hashir",
    age: 21,
    email: "hak47dev@gmail.com",
  };
  let arr = [1, 2, 3, 4];

  return (
    /**
     * First we visited tailwindcss.com/guides/vite
     *  - npm install -D tailwindcss postcss autoprefixer
     *  - npx tailwindcss init -p
     *  - change the content data in tailwind.config.js
     *  - Add the follwing in index.css: @tailwind base, @tailwind components, @tailwind utilities;
     *  - npm run dev
     */
    <>
      <h1 className="text-3xl font-bold underline bg-green-700 p-4 rounded-xl mb-4">
        Hello world!
      </h1>
      <Card username="Hashir" btnText="click here" />
      <Card username="Shah Alam" btnText="View here" />
    </>
  );
}

export default App;
