import ActorListComponent from "../components/ActorListComponent";
import apiConfig from "../components/apiConfigTmdb";
import { use } from "react";

const fetchData = async () => {
  return await (
    await fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${apiConfig.apiKey}&language=en-US`,
      { cache: "no-store" }
    )
  ).json();
};

const Home = () => {
  const data = use(fetchData());
  return (
    <section>
      <ActorListComponent results={data.results} />
    </section>
  );
};

export default Home;
