import Collections from "./Collections";
import Footer from "./Footer";
import Hero from "./Hero";
import Intro from "./Intro";
import Safari from "./Safari";
import ShopByFabric from "./ShopByFabric";

export default function Home(){
    return(
        <>
            <Hero />
            <Intro />
            <Safari />
            <Collections />
            <ShopByFabric />
            <Footer />
        </>

    )
}