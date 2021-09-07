import { Formik } from 'formik';
import React, { useState } from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import { Form, Button, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Pokemon } from '../../components/pokemon';
import { MoonLoader } from 'react-spinners';

const FormContainer = styled.div`
    width: 400px;
    -webkit-box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0); 
    box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0,0,0,0);
    ${tw`
        flex
        flex-col
        items-center
        justify-center
        mt-10
        p-10
    `}
`;

const LoadingContainer = styled.div`
    ${tw`
        w-full
        mt-9
        flex
        items-center
        justify-center
        text-base
        text-black 
    `}

`;


const PokemonContainer = styled.div`
    ${tw`
        w-full
        flex
        items-center
        justify-center
    `}

`;

export function CreateTeamForm() {

    const [userRequest, setUserRequest] = useState({
        pokemonData: {
            name: '',
            base_experience: 0,
            abilities: [],
            types: [],
            sprites: {
                front_default: ''
            },
        },
        isLoading: false,
      });

    const pokeApi = {
        apiUrl: 'https://pokeapi.co/api/v2/',
        endpoint: 'pokemon/'
    }

    const generateRandomNuber = () => Math.floor(Math.random() * 200) + 1;

    const getRandomPokemon = async () => {
        setUserRequest({
            pokemonData: {
                name: '',
                base_experience: 0,
                abilities: [],
                types: [],
                sprites: {
                    front_default: ''
                },
            },
            isLoading: true
          });
        const url = pokeApi.apiUrl + pokeApi.endpoint + generateRandomNuber();
	    fetch(url)
            .then((data) => data.json())
            .then((pokemon) =>
                setUserRequest({
                    pokemonData: pokemon,
                    isLoading: false
                })
            )
            .catch((err) => {
                console.error(err);
                setUserRequest({
                    pokemonData: {
                        name: '',
                        base_experience: 0,
                        abilities: [],
                        types: [],
                        sprites: {
                            front_default: ''
                        },
                    },
                    isLoading: false
                  });
                });
      }

      const { pokemonData, isLoading } = userRequest;


    return (
        <FormContainer>
            <Formik 
            initialValues={{ Name:""}}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
              >
            {( {values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting }) => (
                <Form onSubmit={handleSubmit}>
                    <Form.Group
                        className="mb-3">
                        <Form.Label>Name Of The Team</Form.Label>
                        <Form.Control
                            type="text"
                            name="Name"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.Name}
                            placeholder="Name"/>
                        <Form.Text className="text-muted">
                        Choose an original name :)
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                            <Button
                                onClick={getRandomPokemon}
                                variant="primary">
                            Get Random Pokemon
                            </Button>
                    </Form.Group>
                    {isLoading && (
                        <LoadingContainer>
                            <MoonLoader loading size={20}/>
                        </LoadingContainer>
                    )}
                   { pokemonData && pokemonData.sprites.front_default && !isLoading && (
                    <PokemonContainer>
                        <Pokemon
                                name={pokemonData.name}
                                base_experience={pokemonData.base_experience}
                                abilities={pokemonData.abilities}
                                types={pokemonData.types}
                                thumbnailSrc={pokemonData.sprites.front_default}/>
                    </PokemonContainer>
                        )}
                    <Form.Group className="mb-3 mt-3 text-center">
                        <Button
                            variant="success"
                            disabled={isSubmitting}
                            type="submit">
                        Create
                        </Button>
                    </Form.Group>
                </Form>
            )}
            </Formik>
        </FormContainer>
    );
}