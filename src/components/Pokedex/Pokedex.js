import styles from "./Pokedex.module.scss";

export default function Pokedex() {
  return (
    <>
      <div className={`${styles.pokedexContainer}`}>
        <div className={`${styles.pokedoxSection}`}>
          <h3 className={`${styles.pokedoxHeading}`}>Pokedex</h3>
        </div>
        <div className={`${styles.nameNumberSec}`}>
          <div className={`${styles.nameNumberSecContainer}`}>
            <div className={`${styles.nameNoSection}`}>
              <p className={`${styles.NameOrNum}`}>Name or Number</p>
              <div className={`${styles.textInput}`}>
                <input
                  type="text"
                  className={`${styles.textInputFieldSearch}`}
                />
                <span className={`${styles.magnifyingGlassIcon}`}>
                  <svg
                    width="30px"
                    height="20px"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 6.5C10 8.433 8.433 10 6.5 10C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5ZM9.30884 10.0159C8.53901 10.6318 7.56251 11 6.5 11C4.01472 11 2 8.98528 2 6.5C2 4.01472 4.01472 2 6.5 2C8.98528 2 11 4.01472 11 6.5C11 7.56251 10.6318 8.53901 10.0159 9.30884L12.8536 12.1464C13.0488 12.3417 13.0488 12.6583 12.8536 12.8536C12.6583 13.0488 12.3417 13.0488 12.1464 12.8536L9.30884 10.0159Z"
                      fill="#FFFFFF"
                    />
                  </svg>
                </span>
              </div>
              <p className={`${styles.useAdvanceText}`}>
                Use the Advanced Search to explore Pokémon by type, <br />{" "}
                weakness, Ability, and more!
              </p>
            </div>
            <div className={`${styles.searchForPokemon}`}>
              <p className={`${styles.searchForPokemonText}`}>
                Search for a Pokémon by name or using its National Pokédex
                number.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
