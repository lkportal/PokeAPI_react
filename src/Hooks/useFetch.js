import { useEffect, useState } from "react";




export const useFetch = (url) => {
const [pokemonsList, setList] = useState(null);
const [pokemonType, setType] = useState(null)
const[pokemonImg,setImg] = useState(null)


useEffect(() => {
async function fetchDataNome() {
const res = await fetch(url);
const json = await res.json();
setImg(json.results.map((e) => e.url))
setList(json.results.map((e) => e))
}

fetchDataNome();



async function getType(){
  const urlType = `https://pokeapi.co/api/v2/type`
  const url = await fetch(urlType)
  const json = await url.json()
  setType(json.results.map((e => e.name)))
}
  getType()
}, [url])
  return { pokemonsList,pokemonType,pokemonImg }
}