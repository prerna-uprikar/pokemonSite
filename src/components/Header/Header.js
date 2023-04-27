import Image from "next/image";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <>
      <div className={` ${styles.headerContainer}`}>
        <div className={`${styles.headerSection}`}>
          <li className={`${styles.headerList} x  xome}`}>
            <div className={`${styles.headerInfo}`}>
              <div className={` ${styles.icons}`}>
                <svg
                  fill="#808080"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  version="1.2"
                  baseProfile="tiny"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 3s-6.186 5.34-9.643 8.232c-.203.184-.357.452-.357.768 0 .553.447 1 1 1h2v7c0 .553.447 1 1 1h3c.553 0 1-.448 1-1v-4h4v4c0 .552.447 1 1 1h3c.553 0 1-.447 1-1v-7h2c.553 0 1-.447 1-1 0-.316-.154-.584-.383-.768-3.433-2.892-9.617-8.232-9.617-8.232z" />
                </svg>
              </div>
              <a href="" className={`${styles.headerLink}`}>
                Home
              </a>
            </div>
          </li>
          <li className={`${styles.headerList} ${styles.Pokedox}`}>
            <div className={`${styles.headerInfo}`}>
              <div className={` ${styles.icons}`}>
                <svg
                  fill="#FFFFFF"
                  width="30px"
                  height="30px"
                  viewBox="0 0 512 512"
                  data-name="Layer 1"
                  id="Layer_1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <path d="M450.46,256.09C449.35,175.17,399.81,102.71,324,73.79,247.59,44.67,157.49,69,105.82,132.13,54.4,195,46.61,285.58,88.49,355.68c41.8,69.95,123.74,106,203.55,91.63,91-16.37,156.14-98.12,158.35-189.14A20.16,20.16,0,0,0,450.46,256.09ZM119.05,174.38C152.76,118,220.23,87,285,99.43c69.4,13.29,120.43,70.47,128.83,139H318.41c-8.26-27.36-32-48-62.62-48-29.65,0-55.15,20.65-63.11,48H97.74A158,158,0,0,1,119.05,174.38ZM286.13,256.1c-2,38.75-60.67,39.4-60.67,0S284.17,217.33,286.13,256.1Zm24,149.79C246.85,428.58,175,408.74,132.3,356.82a157.53,157.53,0,0,1-34.57-83H192.6c7.91,27.39,33.7,48,63.19,48,30.67,0,54.36-20.68,62.62-48h95.45C406.61,333,367.54,385.32,310.14,405.89Z" />
                </svg>
              </div>
              <a href="" className={`${styles.headerLink} ${styles.pokee}`}>
                Pokedex
              </a>
            </div>
          </li>
          <li className={`${styles.headerList} ${styles.Video}`}>
            <div className={`${styles.headerInfo}`}>
              <div className={` ${styles.icons}`}>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <rect height="11.5" width="8.25" y="2.75" x="1.75" />
                  <path d="m10 3.75 4.25 2-4.25 7.5" />
                </svg>
              </div>
              <a href="" className={`${styles.headerLink}`}>
                Video Games & Apps
              </a>
            </div>
          </li>
          <li className={`${styles.headerList} ${styles.Trading}`}>
            <div className={`${styles.headerInfo}`}>
              <div className={` ${styles.icons}`}>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 16 16"
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  fill="none"
                  stroke="#000000"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                >
                  <rect height="11.5" width="8.25" y="2.75" x="1.75" />
                  <path d="m10 3.75 4.25 2-4.25 7.5" />
                </svg>
              </div>
              <a href="" className={`${styles.headerLink}`}>
                Trading Card Games
              </a>
            </div>
          </li>
          <li className={`${styles.headerList} ${styles.Pokemin}`}>
            <div className={`${styles.headerInfo}`}>
              <div className={` ${styles.icons}`}>
                <svg
                  width="30px"
                  height="30px"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 11.5V13.5M12.5 11.5V13.5M1 13.5H4M11 13.5H14M0.5 2.5L0.5 10.5C0.5 11.0523 0.947715 11.5 1.5 11.5L13.5 11.5C14.0523 11.5 14.5 11.0523 14.5 10.5V2.5C14.5 1.94772 14.0523 1.5 13.5 1.5L1.5 1.5C0.947716 1.5 0.5 1.94772 0.5 2.5Z"
                    stroke="#000000"
                  />
                </svg>
              </div>
              <a href="" className={`${styles.headerLink}`}>
                Pokemin TV
              </a>
            </div>
          </li>
          <li className={`${styles.headerList} ${styles.Events}`}>
            <div className={`${styles.headerInfo}`}>
              <div className={` ${styles.icons}`}>
                <svg
                  fill="#808080"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  version="1.2"
                  baseProfile="tiny"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 3s-6.186 5.34-9.643 8.232c-.203.184-.357.452-.357.768 0 .553.447 1 1 1h2v7c0 .553.447 1 1 1h3c.553 0 1-.448 1-1v-4h4v4c0 .552.447 1 1 1h3c.553 0 1-.447 1-1v-7h2c.553 0 1-.447 1-1 0-.316-.154-.584-.383-.768-3.433-2.892-9.617-8.232-9.617-8.232z" />
                </svg>
              </div>
              <a href="" className={`${styles.headerLink}`}>
                Play! Pokemon events
              </a>
            </div>
          </li>
          <li className={`${styles.headerList} ${styles.News}`}>
            <div className={`${styles.headerInfo}`}>
              <div className={` ${styles.icons}`}>
                <svg
                  fill="#808080"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  version="1.2"
                  baseProfile="tiny"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 3s-6.186 5.34-9.643 8.232c-.203.184-.357.452-.357.768 0 .553.447 1 1 1h2v7c0 .553.447 1 1 1h3c.553 0 1-.448 1-1v-4h4v4c0 .552.447 1 1 1h3c.553 0 1-.447 1-1v-7h2c.553 0 1-.447 1-1 0-.316-.154-.584-.383-.768-3.433-2.892-9.617-8.232-9.617-8.232z" />
                </svg>
              </div>
              <a href="" className={`${styles.headerLink}`}>
                News
              </a>
            </div>
          </li>
        </div>
      </div>
    </>
  );
}
