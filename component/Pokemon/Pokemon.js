import Image from "next/image";
import { Spin } from "@douyinfe/semi-ui";

import { useGetPokemonByNameQuery } from "@/service/pokemon";

export default function Pokemon() {
  const { data, error, isLoading } = useGetPokemonByNameQuery("pikachu");
  const datas = useGetPokemonByNameQuery("pikachu");
  console.log(datas);

  return (
    <div className="App">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <Spin />
      ) : data ? (
        <>
          <h3>{data.species.name}</h3>
          <Image
            src={data.sprites.front_shiny}
            alt={data.species.name}
            width={100}
            height={100}
          />
        </>
      ) : null}
    </div>
  );
}
