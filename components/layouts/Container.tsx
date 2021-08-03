import React from "react";
import Head from "next/head";
import NavBar from "../NavBar";
export interface Props {
  children: React.ReactNode;
  title: string;
}

const Container = (props: Props): React.ReactElement => {
  const { title } = props;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        ></link>
      </Head>
      <NavBar />
      <div>{props.children}</div>
    </div>
  );
};

export default Container;
