"use client";

import { useEffect } from "react";
import ErrorCustom from "../components/ErrorCustom";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <ErrorCustom onClickHandler={() => reset()} />
    </div>
  );
}
