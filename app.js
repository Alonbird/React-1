import axios from "axios";

async function getData(number) {
  const { data: data1 } = await axios(
    `https://jsonplaceholder.typicode.com/users/${number}`
  );

  console.log(data1);
}

export default getData;
