import { use } from "react";
import fetchData from "../../components/dataFetcher";
import Details from "../../components/details";
import UserListComponent from "../../components/UserListComponent";

const getStaticPropsRevalidate = () => {
  const data = use(
    fetchData(`https://jsonplaceholder.typicode.com/users`, {
      next: { revalidate: 2 },
    })
  );

  return (
    <div className=" ">
      <Details
        text="getStaticProps with revalidate"
        description="Displaying list of 10 users on fron json placeholder API. Revalidating the page in every 2 second and user is not clickable"
      />
      <UserListComponent data={data} />
    </div>
  );
};

export default getStaticPropsRevalidate;
