import { use } from "react";
import fetchData from "../../components/dataFetcher";
import Details from "../../components/Details";

import UserListComponent from "../../components/UserListComponent";

const getStaticPropsRevalidate = () => {
  const data = use(
    fetchData(`https://jsonplaceholder.typicode.com/users`, {
      next: { revalidate: 60 },
    })
  );

  return (
    <section className=" pt-20">
      <Details
        text="GetStaticProps with ISR & GenerateStaticParams"
        description="Displaying list of 9 users on from json placeholder API. Revalidating the page in every 2 second and click on listed users to see full details page"
      />
      <UserListComponent clickable={true} data={data.slice(0, 9)} />
    </section>
  );
};

export default getStaticPropsRevalidate;
