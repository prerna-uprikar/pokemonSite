import React, { useEffect } from "react";
import { ApolloClient, ApolloProvider, InMemoryCache, gql } from "@apollo/client";
import styles from "./Pokemon.module.scss";
import Image from "next/image";
import Modal from 'react-modal';
import ReactDOM from 'react-dom';

// const [modalOpen, setModalOpen] = React.useState(false);

const graphqlEndpoint = "https://graphql-pokemon2.vercel.app/";

const ALL_POKEMONS_QUERY = gql`
  query {
    pokemons(first: 30) {
      id
      name
      image
      types
    }
  }
`;


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};


export default function Pokemon() {
  const [pokemons, setPokemons] = React.useState([]);
  // console.log("pokemons",pokemons)

  const client = new ApolloClient({
    uri: graphqlEndpoint,
    cache: new InMemoryCache(),
  });

  useEffect(() => {
    async function fetchData() {
      const response = await client.query({
        query: ALL_POKEMONS_QUERY,
      });
      const { data } = response;
      setPokemons(data.pokemons);
    }
    fetchData();
  }, []);


  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
}


  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <ApolloProvider client={client}>
        <div className={`${styles.pokemonContainer}`}>
          <div className={`${styles.pokemonSection}`}>
            <div className={`${styles.advaceSearch}`}>
              <p>Show Advance Search</p>
              <div className={`${styles.downArrow}`}>
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="48" height="48" fill="white" fill-opacity="0.01" />
                  <path
                    d="M37 18L25 30L13 18"
                    stroke="#000000"
                    stroke-width="4"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className={`${styles.supriseSectionContainer}`}>
              <div className={`${styles.supriseSection}`}>
                <div className={`${styles.supriseMeButton}`}>
                  <a className={`${styles.supriseMeButn}`}>Suprise Me!</a>
                </div>
                <div className={`${styles.sortSectionWrapper}`}>
                  <p className={`${styles.sortBy}`}>Sort By</p>
                  <div className={`${styles.lowestNumberCont}`}>
                    <p className={`${styles.lowestNember}`}>
                      Lowest Number (First)
                    </p>
                    <div className={`${styles.lowestNumberDownArrow}`}>
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 48 48"
                        fill="#ffffff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="48"
                          height="48"
                          fill="white"
                          fill-opacity="0.01"
                        />
                        <path
                          d="M37 18L25 30L13 18"
                          stroke="#ffffff"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.pokemonCardSectionWrapper}`}>
              <div className={`${styles.pokemonCardSection}`}>
                {pokemons.map((pokemon) => (
                  <div className={`${styles.pokemonCard}`} key={pokemon.id}>
                    <div className={`${styles.pokemonCardImage}`}>
                      <div className={`${styles.pokeCardImage}`}>
                        <a href="#pokemonDetails" onClick={openModal}>
                          <Image
                            src={pokemon.image}
                            alt="Banner 1"
                            height={200}
                            width={200}
                          />
                        </a>
                      </div>
                      <p className={`${styles.pokemonId}`}>#{parseInt(pokemon.id)}</p>
                      <p className={`${styles.pokemonName}`}>{pokemon.name}</p>
                      <div className={`${styles.pokemonTypeContainer}`}>
                        <div>
                          {pokemon.types.map((type, index) => (
                            <span className={`${styles.pokemonType}`} key={index}>{type}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className={`${styles.loadMorePokeom}`}>
            <p>Load more Pokemon</p>
          </div>
        </div>


        <div>
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={() => {
                subtitle = document.querySelector(".subtitle");
                afterOpenModal();
            }}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <h2 className={`subtitle ${styles.titlee}`}>Bulbasur #0001</h2>
            <div className={`${styles.EvoSection}`}>
              <div className={`${styles.pokemonEvoImageSec}`}>
                <Image src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png" width={400} height={400} />
              </div>
              <div>
                <p className={`${styles.evoTextPara}`}>There is a plant seed on its back right from the day this Pokémon is born. The seed slowly grows larger</p>
                <p className={`${styles.evoVersion}`}>Versions:</p>
                <div className={`${styles.boxSection}`}>
                  <div className={`${styles.boxchild1}`}>
                    <div className={`${styles.boxchild1}`}>
                      <div className={`${styles.evoDetails}`}>
                        <p>Height</p>
                        <p>2'04"</p>
                      </div>
                      <div className={`${styles.evoDetails}`}>
                        <p>Height</p>
                        <p>2'04"</p>
                      </div>
                      <div className={`${styles.evoDetails}`}>
                        <p>Height</p>
                        <p>2'04"</p>
                      </div>
                    </div>

                  </div>
                  <div lassName={`${styles.boxchild2}`}>
                    <div>
                      <div className={`${styles.evoDetails}`}>
                        <p>Height</p>
                        <p>2'04"</p>
                      </div>

                      <div className={`${styles.evoDetails}`}>
                        <p>Height</p>
                        <p>2'04"</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={`${styles.typeSection}`}>
                  <p className={`${styles.typeSectionText}`}>Type</p>
                  <div className={`${styles.typeSectionText}`}>
                  <p className={`${styles.typeSectionTextType}`}>Grass</p>
                  <p className={`${styles.typeSectionTextTypePoi}`}>Poison</p>
                  </div>
                </div>

                <div className={`${styles.typeSection}`}>
                  <p className={`${styles.typeSectionText}`}>Weakness</p>
                  <div className={`${styles.typeSectionText}`}>
                  <p className={`${styles.typeSectionTextTypeFire}`}>Fire</p>
                  <p className={`${styles.typeSectionTextTypePsychic}`}>Psychic</p>
                  <p className={`${styles.typeSectionTextTypeIce}`}>Ice</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`${styles.evolutionSectionWrap}`}> 
              <div>
                <p className={`${styles.evolutiontxt}`}>Evolution</p>
                <div className={`${styles.eimageWrap}`}>
                <div className={`${styles.evolutioImages}`}>
                   <Image src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png" height={200}  width={200} />
                </div>
                <svg width="40px" height="40px" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><polygon points="150.46 478 129.86 456.5 339.11 256 129.86 55.49 150.46 34 382.14 256 150.46 478"/></svg>
                <div className={`${styles.evolutioImages}`}>
                   <Image src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/002.png" height={200}  width={200} />
                </div>
                <svg width="40px" height="40px" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><polygon points="150.46 478 129.86 456.5 339.11 256 129.86 55.49 150.46 34 382.14 256 150.46 478"/></svg>

                <div className={`${styles.evolutioImages}`}>
                   <Image src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/003.png" height={200}  width={200} />
                </div>
                </div>
              </div>
            </div> 
          </Modal>
        </div>
      </ApolloProvider>
    </>
  );
}