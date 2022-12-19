import { Box, Button, Flex, Image as IImage, Text} from "@chakra-ui/react";
import {RiDeleteBin6Line} from "react-icons/ri"
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
function Cart(){
    let obj={}
    let arr=JSON.parse(localStorage.getItem('cart'))||[];
    arr.forEach((e)=>{
        obj={
         Image:e.Image,
         category:e.category,
         brand:e.brand,
         OldPrice:e.OldPrice,
         NewPrice:e.NewPrice,
         aSize:e.aSize? e.aSize:"",
         aSize1:e.aSize1? e.aSize1:"",
         aSize2:e.aSize2? e.aSize2:"",
         aSize3:e.aSize3? e.aSize3:"",
         aSize4:e.aSize4? e.aSize4:"",
         Offer:e.Offer
        }
    })
    const HandleDelete=()=>{

    }
    console.log(obj.Image)
    return(
        <>
        <Navbar/>
        <Box boxShadow="md" marginTop="20px" marginBottom="20px">
            <Box display="flex" justifyContent="space-around">
                <Box>
                    <IImage src={obj.Image} alt={obj.category}/>
                </Box>
                <Box>
                    <Text fontSize="30px" fontWeight="bold">{obj.category}</Text>
                    <Text fontWeight="bold" fontSize="20">{obj.NewPrice}</Text>
                    <Flex gap={3}>
                     <Text textDecoration="line-through">{obj.OldPrice}</Text>
                     <Text fontWeight="bold" color="green">{obj.Offer}</Text>   
                    </Flex>
                    <Button onClick={HandleDelete}><RiDeleteBin6Line color="red"/></Button>
                </Box>
            </Box>
        </Box>
        <Footer/>
        </>
    )
}
export default Cart;