import Image from "next/image";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <>
      <div className={`${styles.footerContainerWrapper}`}>
        <div className={`${styles.footerContainer}`}>
          <div className={`${styles.footerSec1}`}>
            <h3 className={`${styles.footer}`}>The Pokemon Company</h3>
            <a className={`${styles.footer}`}>News</a>
            <a className={`${styles.footer}`}>Parents Guide</a>
            <a className={`${styles.footer}`}>Customer Service</a>

            <a className={`${styles.footer}`}>About our Company</a>

            <a className={`${styles.footer}`}>Careers</a>

            <a className={`${styles.footer}`}>select a Country/Region</a>

            <a className={`${styles.footer}`}>Press Site</a>
          </div>
          <div className={`${styles.footerSec2}`}>
            <h3>icons</h3>
          </div>
          <div className={`${styles.footerSec3}`}>
            <a>
              <Image src="https://assets.pokemon.com/static2/_ui/img/footer/thepokemoncompanyinternational-seal-1596150491.png"
                height={50}
                width={130}
              />
            </a>
            <a className={`${styles.footer}`}>Terms of Use</a>
            <a className={`${styles.footer}`}>Privacy Notice</a>
            <a className={`${styles.footer}`}>Cookie Page</a>
            <a className={`${styles.footer}`}>Security</a>
            <a className={`${styles.footer}`}>
              ©2023 Pokémon. ©1995 - 2023 <br /> Nintendo/Creatures Inc./GAME
              FREAK inc. TM, <br /> ®Nintendo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
