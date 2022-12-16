import { Grid, GridItem,Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProductCart from "../Components/ProductCart";
import Carousel from "react-elastic-carousel";
function Home(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:8080/data`)
        .then((res)=>res.json())
        .then((res)=>setData(res))
        .catch((err)=>console.log(err))
    },[])
    console.log(data)
    return(
        <>
        <Image w="100%" src="https://www.yoox.com/images/yoox80/banners/6895_1_Genz_WM_Main.png?634485886869569819&impolicy=cropDefault&width=960&height=510"/>
        <Grid templateColumns="repeat(4,1fr)" gap={6}>
            {
                data?.length>0&&data.map((e)=>{
                    return(
                        <GridItem key={e.Image}>
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
        </Grid>
        </>
    )
}
export default Home;