import { Box, Flex, Image as IImage,Text, Button} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Details(){
    const {id}=useParams();
    const [state,setState]=useState({});
    useEffect(()=>{
        fetch(`https://shpping-app3.onrender.com/category/${id}`)
        .then((res)=>res.json())
        .then((res)=>setState(res))
        .catch((err)=>console.log(err))
    },[id])
    console.log(state)
    let arr=JSON.parse(localStorage.getItem("cart"))||[];
    const HandleCart=()=>{
        arr.push(state)
        localStorage.setItem("cart",JSON.stringify(arr))
    }
    const {Image,category,brand,OldPrice,NewPrice,aSize,aSize2,aSize3,aSize4,Offer}=state;
    return(
        <>
        <Navbar/>
        <Box fontFamily="sans-serif" marginTop="30px">
            <Box margin="auto" display="flex" textAlign="start" >
                <Box margin="auto">
                    <IImage  w="450px" src={Image} alt={category}/>
                </Box>
                <Box >
                    <Text fontWeight="bold" paddingBottom={3}>{brand}</Text>
                    <Text paddingBottom={3}>{category}</Text>
                    <Flex paddingBottom={3} gap={1}><Text textDecoration="line-through" color="gray">{OldPrice}</Text><Text fontWeight="bold">{Offer}</Text></Flex>
                    <Text fontWeight="bold" fontSize="20" paddingBottom={3}>{NewPrice}</Text>
                    <Flex color="gray" fontSize="20" paddingBottom={3} gap={1}>
                        <Text>{aSize? aSize:""}</Text>
                        <Text>{aSize2? aSize2:""}</Text>
                        <Text>{aSize3? aSize3:""}</Text>
                        <Text>{aSize4? aSize4:""}</Text>
                    </Flex>
                    <Button onClick={HandleCart} h="50px" borderRadius="0px" bg="#333333" variant="#333333" color="white" w="500px">Add To Shopping Bag</Button>
                </Box>
            </Box>
            <hr/>
            <Box display="flex" justifyContent="space-around" textAlign="start" paddingBottom="30px" paddingTop="30px">
                <Box>
                    <Text fontWeight="Bold" fontSize="22px">SHIPPING</Text>
                    <Text fontWeight="Bold">Stadnard $9.95</Text>
                    <Text paddingBottom="13px">Within 8-10 Business Days</Text>
                    <Text fontWeight="Bold">Express $14.95</Text>
                    <Text>Within 4-6 Business Days</Text>
                </Box>
                <Box>
                    <Text fontWeight="Bold" fontSize="22px">RETURN/EXCHANGE</Text>
                    <Text paddingBottom="13px">Fast And Easy Returns</Text>
                    <Text fontWeight="Bold">Retuens</Text>
                    <Text paddingBottom="13px">Within 60 Days</Text>
                    <Text fontWeight="Bold">Exchange</Text>
                    <Text>Within 60 Days</Text>
                </Box>
            </Box>

        </Box>
        <Footer/>
        </>
    )
}
export default Details;