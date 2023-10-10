'use client'

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
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

import { useNavigate } from 'react-router-dom'

export default function SignupCard() {
  const [showPassword, setShowPassword] = useState(false)
  const [inputvalue, setinputvalue] = useState({
    Firstname: "",
    Lastname: "",
    Email: "",
    Password: ""
  })

  const navigate = useNavigate()

  const handlechange = (e) => {
    const { name, value } = e.target
    setinputvalue({ ...inputvalue, [name]: value })
  }

  const handleclick = () => {
    let items = JSON.parse(localStorage.getItem("user")) || []
    if (inputvalue.Email && inputvalue.Firstname && inputvalue.Lastname && inputvalue.Password) {
      let flag = false
      if (items.length) {
        for (let i = 0; i < items.length; i++) {
          if (items[i].Email == inputvalue.Email) {
            flag = true
          }
        }
      }
      if (flag) {
        alert('Email is already registered')
      } else {
        items.push(inputvalue)
        localStorage.setItem('user', JSON.stringify(items))
        alert("success")
        setinputvalue({
          Firstname: "",
          Lastname: "",
          Email: "",
          Password: ""
        })
        navigate('/login')

      }
    } else {
      alert('please fill all the details')
    }

    console.log(items)
  }





  return (
    <Flex
      minH={'30vh'}
      w={'70%'}
      align={'center'}
      justify={'center'}
      m={'auto'}
      mt={'50'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={1}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input value={inputvalue.Firstname} name='Firstname' type="text" onChange={handlechange} />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input value={inputvalue.Lastname} name='Lastname' type="text" onChange={handlechange} />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input value={inputvalue.Email} name='Email' type="email" onChange={handlechange} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input value={inputvalue.Password} name='Password' onChange={handlechange} type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.700'}
                color={'white'}
                _hover={{
                  bg: 'blue.600',
                }}
                onClick={handleclick}

              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'blue.400'} href='/login'>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}