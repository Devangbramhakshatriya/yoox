import { Box, Flex, Grid, GridItem,Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Slides } from "../Components/Carousel";
import ProductCart from "./ProductCart";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import HomeCards from "../Components/HomeCards";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
function Home(){
    // const [data,setData]=useState([]);
    // useEffect(()=>{
    //     fetch(`http://localhost:8080/data`)
    //     .then((res)=>res.json())
    //     .then((res)=>setData(res))
    //     .catch((err)=>console.log(err))
    // },[])
    // console.log(data)
    return(
        <>
        <Navbar/>
        <Image w="100%" src="https://www.yoox.com/images/yoox80/banners/6895_1_Genz_WM_Main.png?634485886869569819&impolicy=cropDefault&width=960&height=510"/>
        <Box p={100} w="80%" margin="auto">
        <Slides/>
        </Box>
        <Box margin="auto">
            <HomeCards/>
        </Box>
        <Box>
            <Flex margin="auto" gap={6} >
                <Image w="600px" src="https://www.yoox.com/images/yoox80/banners/6824_1_TrendSpace_HL_M.jpg?634485886869569819#width=430&height=600"/>
                <Image w="600px" src="https://www.yoox.com/images/yoox80/banners/6971_2_HL_DM_US.png?634485886869569819#width=430&height=600"/>
                <Image w="600px" src="https://www.yoox.com/images/yoox80/banners/6825_1_COS_Tris_M.png?634485886869569819#width=473&height=660"/>
            </Flex>
        </Box>
        {/* <Grid templateColumns="repeat(4,1fr)" gap={6}>
            {
                data?.length>0&&data.map((e)=>{
                    return(
                        <GridItem key={e.id}>
                            <ProductCart
                            Image={e.Image}
                            category={e.category}
                            NewPrice={e.NewPrice}
                            OldPrice={e.OldPrice}
                            Offer={e.Offer}
                            brand={e.brand}
                            aSize={e.aSize? e.aSize:""}
                            aSize2={e.aSize2? e.aSize2:""}
                            aSize3={e.aSize3? e.aSize3:""}
                            aSize4={e.aSize4? e.aSize4:""}
                            />
                        </GridItem>
                    )
                })
            }
            </Grid> */}
            <Footer/>
        </>
    )
}
export default Home;