import { Box } from "@mui/system";
import { Banner } from "../../components/Banner"
import { Sidebar } from "../../components/Sidebar";




const Home = () => {
    return(
        <>
            <Banner />
            <Box maxWidth="l" className="mx-auto flex">
                <Sidebar className="pl-10" />
            </Box>
        </>
    )
}


export default Home;