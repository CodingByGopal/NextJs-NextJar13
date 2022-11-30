"use client";
import useSWR from "swr";
import { Suspense } from "react";
import fetchData from "../../components/dataFetcher";
import Details from "../../components/details";
import ErrorCustom from "../../components/ErrorCustom";
import UserListComponent from "../../components/UserListComponent";
import CustomLoading from "../../components/CustomLoading";
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
        description="Displaying list of 12 items from fake store API. Fetching data using SWR library (React Hooks for Data Fetching). Listed Results are not clickable"
      />
      <UserListComponent data={data} />
    </section>
  );
};
export default clientSideFetch;
