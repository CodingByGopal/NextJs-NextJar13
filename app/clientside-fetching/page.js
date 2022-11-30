"use client";
import useSWR from "swr";

import fetchData from "../../components/dataFetcher";

import ErrorCustom from "../../components/ErrorCustom";
import UserListComponent from "../../components/UserListComponent";
import CustomLoading from "../../components/CustomLoading";
import Details from "../../components/Details";
const clientSideFetch = () => {
  const { data, error } = useSWR(
    "https://fakestoreapi.com/products?limit=12",
    fetchData
  );

  if (error) return <ErrorCustom />;
  if (!data & !error) return <CustomLoading />;
  return (
    <section className=" pt-20">
      <Details
        text="ClientSide Fetching"
        description="Displaying list of 12 items from fake store API. Fetching data using SWR library (React Hooks for Data Fetching). Listed results are not clickable"
      />
      <UserListComponent data={data} />
    </section>
  );
};
export default clientSideFetch;
