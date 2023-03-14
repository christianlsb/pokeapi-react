import React, { useState, useEffect } from 'react';
import * as S from "./styles/app"
import { getPokemonById } from './services/pokeapi';

const PokemonDetails = () => {
  const [pokemon, setPokemon] = useState();
  const [value, setValue] = useState("");

  useEffect(() => {
    const fetchPokemon = async () => {
      const data = await getPokemonById(1);
      setPokemon(data);
    }

    fetchPokemon();
  }, []);

  function handleChange(event) {
    if (event.target.value.length <= 3) {
      setValue(event.target.value);
    }
  }
  const nextPokemon = async () => {
    const data = await getPokemonById(pokemon.id + 1);
    setPokemon(data);
  }
  async function handleSearch() {
    const data = await getPokemonById(value);
    setPokemon(data);
  }

  const beforePokemon = async () => {
    const data = await getPokemonById(pokemon.id - 1);
    setPokemon(data);
  }
  return (
    <div>
      <S.Container>

        {pokemon && (
          <S.ContainerCard>
            <S.ContainerInput>
              <S.Input placeholder="search by id..." type={'number'} value={value} onChange={handleChange}/>
              <button onClick={handleSearch}>Buscar</button>
            </S.ContainerInput>
            <h1>{pokemon.name}</h1>
            <div className='ImgDiv'>
              <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            </div>
            <S.ContainerButtons>
              <S.Buttons onClick={beforePokemon}>Before</S.Buttons>
              <S.Buttons onClick={nextPokemon}>Next</S.Buttons>

            </S.ContainerButtons>
          </S.ContainerCard>
        )}
      </S.Container>
    </div>
  );
};

export default PokemonDetails;