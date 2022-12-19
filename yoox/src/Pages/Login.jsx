import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Image
  } from '@chakra-ui/react';
import { useState } from 'react';
import {Link as RouterLink} from "react-router-dom";
  export default function Login() {

    const initital={email:"",password:""}
    const [state,setState]=useState(initital);
    const HandleChange=(e)=>{
      let {name,value}=e.target;
      setState({...state,[name]:value})
    }
    let arr=JSON.parse(localStorage.getItem("loginData"))||[]
    console.log(arr)
    let obj={
      email:state.email,
      password:state.password
    }
    const HandleClick=()=>{
      arr.some((e)=>{
        if(e.email==obj.email && e.password==obj.password){
          localStorage.setItem("loginStatus","true")
          
          alert("Login Success")
          window.location.href="/"
          
        }
      })
    }
    
    let {email,password}=state;
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>It's greate to see you again</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Login With
            </Text>
          </Stack>
          <Flex margin="auto" alignItems="center">
            <Box w="100px" margin="auto">
                <Image src='https://icons.iconarchive.com/icons/cornmanthe3rd/plex/256/Communication-facebook-icon.png'/>
            </Box>
            <Box margin="auto" w="100px">
                <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU"/>
            </Box >
          </Flex>
          <Text fontSize={'lg'} color={'gray.600'}>
              Or with your email address
            </Text>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email</FormLabel>
                <Input type="email" name='email' value={email} onChange={HandleChange}/>
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" name='password' value={password} onChange={HandleChange}/>
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                onClick={HandleClick}
                  bg="black"
                  color="white"
                  borderRadius="0"
                  _hover={{bg:"black"}}
                  >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }