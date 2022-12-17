import {Box,Flex,Text,Center,Image,Input,HStack,Spacer} from "@chakra-ui/react"
import {BsPencilFill} from "react-icons/bs"
import {IoMdUnlock} from "react-icons/io"
import {FiShoppingBag} from "react-icons/fi"

function Navbar(){

    return(
        <>
        <Box >
            <Box bg="#FFFFFF" display="flex" justifyContent="end" gap="10" borderBottom="0.5px solid gray" >
                <Text display="flex"><BsPencilFill/>Register</Text>
                <Text display="flex" marginRight="5px"><IoMdUnlock/>Login</Text>
            </Box>
        </Box>

        <Box bg="#FFFFFF">
            <Box  w={{ base: '300px', md: '400px', lg: '600px' }} h="60px"  margin="auto" display="flex" justifyContent="center" alignItems="center" gap={{ base: '5px', md: '10px', lg: '10px' }}>

                <Text fontWeight="bold">MEN</Text>
                <Spacer/>
                <Image src="Yooxpic.jpg" alt="Logo" w="130px" h="60px" />
                <Spacer/>
                <Input type="text" placeholder="Search" w="50%" />
                <Spacer/>
                <FiShoppingBag size={40}/>
                
            </Box>
            <Box h="30px" color="White" display="flex" gap={{ base: '7px', md: '10px', lg: '15px' }} justifyContent="center" fontSize={{ base: '12px', md: '14px', lg: '15px' }} margin="auto" paddingTop="5px" bg="#333333">
                
                <Text>NEW ARRIVALS</Text>
                <Text>DESIGNER</Text>
                <Text>CLOTHING</Text>
                <Text>SHOES</Text>
                <Text>ACCESSORIES</Text>
                
            </Box>
        </Box>
        </>
    )
}
export default Navbar;