import { useContext, useState } from "react";
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
} from '@chakra-ui/react';
import { useRef } from 'react';
import AuthContext from "../contexts/AuthContext";
import { useNavigate, } from "react-router-dom";


const SignIn = () => {

  const navigate = useNavigate();

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useContext(AuthContext)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit() {
    console.log(emailRef.current.value)

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      navigate('/')
    } catch {
      setError("Failed to log in")
      console.log(error)
    }

    setLoading(false)
  }

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" ref={emailRef}/>
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input type="password" ref={passwordRef}/>
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'yellow.400'}
                color={'white'}
                _hover={{
                  bg: 'yellow.500',
                }} onClick={() => handleSubmit()}>
                Sign in
              </Button>
              <Flex>
                <Text ml="3%">You do not have an account?</Text>
                <Link href="/signup" color='green.600' ml='13%'>Sign Up</Link>
              </Flex>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default SignIn;
