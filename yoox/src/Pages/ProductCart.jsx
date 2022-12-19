import { Box,Flex,Image as IImage,Text} from "@chakra-ui/react";
import { Link as RouterLink} from "react-router-dom";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function ProductCart({Image,NewPrice,OldPrice,Offer,brand,category,aSize,aSize2,aSize3,aSize4,id}){
    return(
        <>
        
        <RouterLink to={`/data/${id}`}>
        <Box fontFamily="sans-serif" w="200px">
        <Box boxShadow="md">
            <IImage src={Image} alt={category}/>
        </Box>
        <Box fontSize="13px" textAlign="center" alignItems="center">
            <Text fontWeight="bold" fontSize="18px" >{brand}</Text>
            <Text >{category}</Text>
            <Flex gap={3} justifyContent="center">
                <Text  textDecoration="line-through">{OldPrice}</Text>
                <Text>{Offer}</Text>
            </Flex>
            <Text fontWeight="bold">{NewPrice}</Text>
            <Flex color="gray" justifyContent="center" gap={1}>
                <Text>{aSize}</Text>
                <Text>{aSize2}</Text>
                <Text>{aSize3}</Text>
                <Text>{aSize4}</Text>
            </Flex>
        </Box>
        </Box>
        </RouterLink>
        
        </>
    )
}
export default ProductCart;