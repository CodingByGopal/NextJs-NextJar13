import ActorListComponent from "../components/ActorListComponent";
import apiConfig from "../components/apiConfigTmdb";
import { use } from "react";
import fetchData from "../components/dataFetcher";
import Details from "../components/Details";

const Home = () => {
  const data = use(
    fetchData(
      `https://api.themoviedb.org/3/person/popular?api_key=${apiConfig.apiKey}&language=en-US`,
      { cache: "no-store" }
    )
  );
  return (
    <section className=" pt-20">
      <Details
        description="Displaying list of top 20 actors on The Movie Database API (TMDB). Click on image/text to see full details page "
        text="GetServerSideProps"
      />
      <ActorListComponent results={data.results} />
    </section>
  );
};

export default Home;
