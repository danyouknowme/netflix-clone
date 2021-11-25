import { useEffect, useState } from "react";
import "./home.scss";
import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import List from "../../components/list/List";
import axios from "axios";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {

    const options = {
      method: 'GET',
      url: 'https://imdb8.p.rapidapi.com/auto-complete',
      params: {q: 'game of thr'},
      headers: {
        'x-rapidapi-host': 'imdb8.p.rapidapi.com',
        'x-rapidapi-key': '28adc9baa5msha9ae4e65ee62004p11d19fjsne0a203707695'
      }
    };

    axios.request(options).then(function (response) {
      console.log(response.data);
    }).catch(function (error) {
      console.error(error);
    });
    // const getRandomLists = async () => {
    //   try {
    //     const response = await axios.get(
    //       `http://localhost:8080/api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
    //         headers: {
    //           token:
    //             "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTY5MWY3NTZhMWNlNzQ4OTAwNDgyNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNzU5OTQxNywiZXhwIjoxNjM4MDMxNDE3fQ.e3PMUnmpwa81RvnHOKawWXaaS0j6mAzz67PxZITtPP8",
    //         },
    //       }
    //     ).then(response => console.log(response)
    //     .catch((err) => {
    //         console.log(err);
    //     }));
    //     console.log(response);
    //     // setLists(response.data);
    //   } catch (err) {
    //     console.log(err);
    //   }
    // };
    // getRandomLists();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      <List />
      <List />
      <List />
      <List />
    </div>
  );
};

export default Home;
