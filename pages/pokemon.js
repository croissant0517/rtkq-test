import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "@douyinfe/semi-ui";

import Pokemon from "@/component/Pokemon/Pokemon";

export default function PokemonPage({ data }) {
  return <Pokemon listData={data} />;
}

export const getServerSideProps = async () => {
  const data = await fetch(
    "https://pokeapi.co/api/v2/pokemon?limit=10&offset=0"
  );
  const json = await data.json();
  return {
    props: {
      data: json,
    },
  };
};
