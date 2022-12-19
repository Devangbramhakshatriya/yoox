import { useEffect, useState } from "react";
import {Grid, GridItem} from "@chakra-ui/react"
import ProductCart from "./ProductCart";
function Products(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch(`https://shpping-app3.onrender.com/category`)
        .then((res)=>res.json())
        .then((res)=>setData(res))
        .catch((err)=>console.log(err))
    },[])
    return(
        <>
        <Grid templateColumns="repeat(4,1fr)" gap={6}>
            {
                data?.length>0&&data.map((e)=>{
                    return(
                        <GridItem key={e.id}>
                            <ProductCart
                            id={e.id}
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
export default Products;