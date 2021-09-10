import { Formik } from 'formik';
import React, { Dispatch, useState } from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';
import { Form, Button, } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import { Pokemon } from '../../components/pokemon';
import { MoonLoader } from 'react-spinners';
import { addTeam, newPokemon } from '../../services/teamService/mutations';
import { useMutation } from '@apollo/client';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

toast.configure();

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



export function CreateTeamForm(props: any) {

    const [userRequest, setUserRequest] = useState({
        pokemonData: {
            name: '',
            base_experience: 0,
            thumbnailSrc: '',
            abilities: [],
            types: [],
            sprites: {
                front_default: ''
            },
        },
        isLoading: false,
      });

    const [created, setCreated] = useState(false);

    const [teamCreatedID, setTeamCreatedID] = useState(0);


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
                thumbnailSrc: '',
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
                        thumbnailSrc: '',
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

      const [addNewTeam] = useMutation(addTeam, {
        onCompleted: (response) => {
            setTeamCreatedID(response.createTeams.id)
        }
    });

      const [createNewPokemon] = useMutation(newPokemon);


    return (
        <FormContainer>
            <Formik 
            initialValues={{ Name:""}}
            onSubmit={(values, { setSubmitting }) => {
               if (props.type === "edit") {
                createNewPokemon({variables: {
                    id: props.teamId,
                    pokemon: 
                      {
                        name: pokemonData.name,
                        base_experience: pokemonData.base_experience,
                        thumbnailSrc: pokemonData.sprites.front_default,
                        abilities: pokemonData.abilities.map((abilitys: any)=> ({name: abilitys.ability.name})),
                        types: pokemonData.types.map((types: any)=> ({name: types.type.name})),
                      }
                }
                }).then(() => {
                    setUserRequest({
                        pokemonData: {
                            name: '',
                            base_experience: 0,
                            thumbnailSrc: '',
                            abilities: [],
                            types: [],
                            sprites: {
                                front_default: ''
                            },
                        },
                        isLoading: false
                      });
                    setSubmitting(false);
                    toast('You just added new pokemon to the team!');
                })
               } else
               { addNewTeam({variables: {team: {
                    name: values.Name,
                    pokemon: [
                      {
                        name: pokemonData.name,
                        base_experience: pokemonData.base_experience,
                        thumbnailSrc: pokemonData.sprites.front_default,
                        abilities: pokemonData.abilities.map((abilitys: any)=> ({name: abilitys.ability.name})),
                        types: pokemonData.types.map((types: any)=> ({name: types.type.name})),
                      }
                    ]
                  }
                }
                }).then(() => {
                    setUserRequest({
                        pokemonData: {
                            name: '',
                            base_experience: 0,
                            thumbnailSrc: '',
                            abilities: [],
                            types: [],
                            sprites: {
                                front_default: ''
                            },
                        },
                        isLoading: false
                      });
                      values.Name = ''
                    setSubmitting(false);
                    toast('You just created a new team!');
                    setCreated(true);
                })}
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
                   {props.type === "edit" ? 
                    <Form.Label>Add new pokemons to the Team</Form.Label> :
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
                    </Form.Group>}
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
                    <Form.Group className="mb-3 mt-3">
                        <PokemonContainer>
                            <Pokemon 
                                    name={pokemonData.name}
                                    base_experience={pokemonData.base_experience}
                                    abilities={pokemonData.abilities}
                                    types={pokemonData.types}
                                    thumbnailSrc={pokemonData.sprites.front_default}/>
                        </PokemonContainer>
                    </Form.Group>
                        )}
                    <Form.Group className="mb-3 mt-3 text-center">
                        <Button
                            variant="success"
                            disabled={isSubmitting || (!values.Name && props.type === "!edit") || !pokemonData.name}
                            type="submit">
                        {props.type === "edit"? "Add pokemon" : "Gotta Catch 'Em All"}
                        </Button>
                    </Form.Group>
                    {props.type !== "edit" && created && 
                    <Form.Group className="mb-3 mt-3 text-center">
                        <Link to={"/team/" + teamCreatedID + "/edit"}>
                            Go To Team        
                        </Link>
                    </Form.Group>}
                </Form>
            )}
            </Formik>
        </FormContainer>
    );
}