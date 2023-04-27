import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Pokedex from "../Pokedex/Pokedex";
import Pokemon from "../Pokemon/Pokemon";

export default function Main() {
  return (
    <>
     <div>
       <Banner />
       <Header />
       <Pokedex />
       <Pokemon />
       <Footer />
     </div>
    </>
  )
}