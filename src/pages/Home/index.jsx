import { Box } from "@mui/system";
import { Banner } from "../../components/Banner"
import { Featured } from "../../components/Featured";
import { Footer } from "../../components/Footer";
import { NavSlide } from "../../components/NavSlide";
import { NewTrending } from "../../components/NewTrending";
import { Sidebar } from "../../components/Sidebar";
import { SlideBanner } from "../../components/SlideBanner";
import { Trending } from "../../components/Trending";




const Home = () => {
    return(
        <>
            <Banner />
            {/* <NavSlide /> */}
            <Featured />
            <Trending />
            {/* <Box maxWidth="l" className="mx-auto flex no_mobile">
                <Box margin="10px">
                    <Sidebar />
                </Box>
                <Box margin="auto">
                    <SlideBanner />
                    <Trending />
                </Box>
            </Box> */}
            {/* <NewTrending /> */}
            <Footer />
        </>
    )
}


export default Home;