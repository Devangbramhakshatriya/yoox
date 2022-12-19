import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
    Image
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import {Link as RouterLink} from "react-router-dom"
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    
  const initital={email:"",password:""}
  const [state,setState]=useState(initital);
  const HandleChange=(e)=>{
    let {name,value}=e.target;
    setState({...state,[name]:value})
  }
  let arr=JSON.parse(localStorage.getItem("loginData"))||[]
  let obj={
    email:state.email,
    password:state.password
  }
  const HandleClick=()=>{
    
      arr.push(obj)
      localStorage.setItem("loginData",JSON.stringify(arr))
      localStorage.setItem("loginStatus","true")
      
      alert("Account Created")
      window.location.href="/"
  }
 
  console.log(state);
  let {email,password}=state
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              MYOOX
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              REGISTRATION
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
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input type="text"/>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input type="text" />
                  </FormControl>
                </Box>
              
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" name='email' value={email} onChange={HandleChange}/>
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} name='password' value={password} onChange={HandleChange}/>
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                  onClick={HandleClick}
                  w={[200,300,400,400]}
                  loadingText="Submitting"
                  bg="black"
                  color="white"
                  borderRadius="0"
                  _hover={{bg:"black"}}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <RouterLink to="/login">
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
                </RouterLink>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }