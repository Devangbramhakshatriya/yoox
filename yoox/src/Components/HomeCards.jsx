import { Image as IImage, Box,Text,Flex,Grid,GridItem,SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
function HomeCards(){
    const [data,setData]=useState([]);
    useEffect(()=>{
        fetch(`http://localhost:8080/category`)
        .then((res)=>res.json())
        .then((res)=>setData(res))
        .catch((err)=>console.log(err))
    },[])
    console.log(data)
    return(
        <Box marginLeft="3%" >
        <SimpleGrid minChildWidth='300px' spacing='10px'>
            {
                data?.length>0&&data.map((e)=>{
                    return(
                        <GridItem key={e.Image}>
                           <Box fontFamily="sans-serif" w="200px" >
        <Box boxShadow="md">
            <IImage src={e.Image} alt={e.category}/>
        </Box>
        <Box fontSize="13px" textAlign="center" alignItems="center">
            <Text fontWeight="bold" fontSize="18px" >{e.brand}</Text>
            <Text >{e.category}</Text>
            <Flex gap={3} justifyContent="center">
                <Text  textDecoration="line-through">{e.OldPrice}</Text>
                <Text>{e.Offer}</Text>
            </Flex>
            <Text fontWeight="bold">{e.NewPrice}</Text>
            <Flex color="gray" justifyContent="center" gap={1}>
                <Text>{e.aSize? e.aSize:""}</Text>
                <Text>{e.aSize2? e.aSize2:""}</Text>
                <Text>{e.aSize3? e.aSize3:""}</Text>
                <Text>{e.aSize4? e.aSize4:""}</Text>
            </Flex>
        </Box>
        </Box>
                        </GridItem>
                    )
                })
            }
        </SimpleGrid>
        </Box>
    )
}
export default HomeCards;