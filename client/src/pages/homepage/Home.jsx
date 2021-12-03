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
    const getRandomList = async () => {
      try {

        const res = await axios.get(
          `http://localhost:8800/api/lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
            headers: {
              token: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxOTY5MWY3NTZhMWNlNzQ4OTAwNDgyNSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODM1OTQwOSwiZXhwIjoxNjM4NzkxNDA5fQ.QHFKQrmw8JxJIrP8Pegh6TItpx7i5JR1j_XaE0OEFtY'
            }
          }
        );
        setLists(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomList();
  }, [type, genre]);
  return (
    <div className="home">
      <Navbar />
      <Featured type={type} />
      {lists.map((list) => (
        <List list={list}/>
      ))}
    </div>
  );
};

export default Home;
