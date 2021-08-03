import React from "react";
import Head from "next/head";

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
      </Head>
      <div className="container">{props.children}</div>
    </div>
  );
};

export default Container;
