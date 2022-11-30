import React, { use } from "react";
import fetchData from "../../components/dataFetcher";
import Details from "../../components/Details";

import UserListComponent from "../../components/UserListComponent";

const getStaticProps = () => {
  const data = use(
    fetchData(`https://jsonplaceholder.typicode.com/comments`, {
      cache: "force-cache",
    })
  );
  return (
    <section className=" pt-20">
      <Details
        text="GetStaticProps"
        description="Displaying list of 12 comments on from json placeholder API. getStaticProps has been used without revalidation and listed users/comments are not clickable"
      />
      <UserListComponent data={data?.slice(0, 12)} />
    </section>
  );
};

export default getStaticProps;
