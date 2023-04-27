import Image from "next/image";
import styles from "./Banner.module.scss"

export default function Banner() {
  return (
    <>
      <div className={` ${styles.BannerContainer}`}>
        <div className={` ${styles.BannnerSection}`}>
          <li className={`${styles.bannerList}`}>
            <a href="">
              <Image
                src="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemon-79x45.png"
                alt="Banner 1"
                height={50}
                width={80}
              />
            </a>
          </li>
          <li className={`${styles.bannerList}`}>
            <a href="">
              <Image
                src="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/logo-pokemoncenter-79x45.png"
                alt="Banner 1"
                height={50}
                width={80}
              />
            </a>
          </li>
          <li className={`${styles.bannerList}`}>
            <a href="">
              <Image
                src="https://assets.pokemon.com/assets/cms2/img/misc/gus/buttons/corporate-en.png"
                alt="Banner 1"
                height={50}
                width={80}
              />
            </a>
          </li>
          <li className={`${styles.bannerList}`}>
            <a href="">
              <Image
                src="https://assets.pokemon.com/assets/cms2/img/misc/gus/promotions/sv01-gus-175-en.png"
                alt="Banner 1"
                height={50}
                width={100}
              />
            </a>
          </li>
          <li className={`${styles.bannerList}`}>
            <a href="">
              <Image
                src="https://assets.pokemon.com/assets/cms2/img/misc/gus/promotions/scarlet-violet-175x50-en.jpg"
                alt="Banner 1"
                height={50}
                width={130}
              />
            </a>
          </li>
          <li className={`${styles.bannerList}`}>
            <a href="">
              <Image
                src="https://assets.pokemon.com/assets/cms2/img/misc/gus/promotions/unite-176x50.jpg"
                alt="Banner 1"
                height={50}
                width={130}
              />
            </a>
          </li>
        </div>
      </div>
    </>
  );
}
