import { Box } from "@mui/system";
import { Banner } from "../../components/Banner"
import { Sidebar } from "../../components/Sidebar";
import { SlideBanner } from "../../components/SlideBanner";
import { Trending } from "../../components/Trending";




const Home = () => {
    return(
        <>
            <Banner />
            <Box maxWidth="l" className="mx-auto flex no_mobile">
                <Box margin="10px">
                    <Sidebar />
                </Box>
                <Box margin="10px">
                    <SlideBanner />
                    <Trending />
                </Box>
            </Box>
        </>
    )
}


export default Home;