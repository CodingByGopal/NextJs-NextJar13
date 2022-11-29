import React, { use } from "react";
import fetchData from "../../components/dataFetcher";
import Details from "../../components/details";
import UserListComponent from "../../components/UserListComponent";

const getStaticProps = () => {
  const data = use(
    fetchData(`https://jsonplaceholder.typicode.com/comments`, {
      cache: "force-cache",
    })
  );
  return (
    <section>
      <Details
        text="getStaticProps"
        description="Displaying list of 12 comments on from json placeholder API. getStaticProps has been used without revalidation and user/comment is not clickable"
      />
      <UserListComponent data={data?.slice(0, 12)} />
    </section>
  );
};

export default getStaticProps;
