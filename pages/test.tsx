import React from "react";
import { fetchAPI } from "../lib/api";

function test({ test }) {
  console.log(test);
  return (
    <>
      <div>
        <p>{test.attributes.title}</p>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const [testRes] = await Promise.all([fetchAPI("/test", { populate: "*" })]);

  return {
    props: {
      test: testRes.data,
    },
    revalidate: 1,
  };
}

export default test;
