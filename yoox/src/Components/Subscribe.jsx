import {Box,Text,Input,Flex,Checkbox,Button,Stack} from "@chakra-ui/react"
import {AiOutlineMail} from "react-icons/ai"
export default function Subscribe(){
    return(
        <>
        <Box p="10px" bg="white">
            <Stack alignItems="center">
            <AiOutlineMail />
            <Text fontSize="18px" fontWeight="bold">TOOX NEWS</Text>
            <Text>Subscribe for the newsletter
                and discover the latest arrivals and promotions</Text>
        <Input type="text" placeholder="ENTER YOUR EMAIL ADDRESS"/>
        <Flex gap={5}>
        <Checkbox size='lg' colorScheme='orange' >
        Men
        </Checkbox>
        <Checkbox size='lg' colorScheme='orange' >
        Women
        </Checkbox>
        </Flex>
        <Button w="200px" bg="#333333" variant="black" color="white">Subscribe</Button>
        </Stack>
        </Box>
        </>
    )
}