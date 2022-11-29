import ActorListComponent from "../components/ActorListComponent";
import apiConfig from "../components/apiConfigTmdb";
import { use } from "react";
import Details from "../components/details";
import fetchData from "../components/dataFetcher";

const Home = () => {
  const data = use(
    fetchData(
      `https://api.themoviedb.org/3/person/popular?api_key=${apiConfig.apiKey}&language=en-US`,
      { cache: "no-store" }
    )
  );
  return (
    <section>
      <Details
        description="Displaying list of top 20 actors on The Movie Database API (TMDB). Click on image/text to see full details page "
        text="getServerSideProps"
      />
      <ActorListComponent results={data.results} />
    </section>
  );
};

export default Home;
