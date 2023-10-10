'use client'

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthenticatonFailed, AuthenticatonSuccess } from '../Redux/Authentication/action'
import { useLocation, useNavigate } from 'react-router-dom'
export default function LoginCard() {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  let items = JSON.parse(localStorage.getItem("user")) || []
  const location = useLocation();
  let path =location.state ?? '/'
 
  
  const handleclick = () => {

    
    if (email && password) {
      if (items.length) {
        let isEmailhere = false
        let flag = false
        let name;
        for (let i = 0; i < items.length; i++) {
          isEmailhere=items[i].Email.includes(email)
          console.log(isEmailhere)
          if (items[i].Email == email && items[i].Password == password) {
            flag = true
            name = items[i].Firstname + " " + items[i].Lastname
            break
          }
        }
        if(!isEmailhere){
          alert('Email is not registered')
          return
        }

        if (flag) {
          alert('login successfull')
          dispatch(AuthenticatonSuccess(name))
          navigate(path)
        } else {
          alert('Wrong credential')
        }
      } else {
        alert('Email is not registered')
      }
    } else {
      alert('Please Fill all the details')
    }
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
          <Heading fontSize={'2xl'} >Sign in to your account</Heading>

        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={1}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e) => setemail(e.target.value)} />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e) => setpassword(e.target.value)} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue'}>Forgot password?</Text>
              </Stack>
              <Button
                bg={'blue.700'}
                color={'white'}
                _hover={{
                  bg: 'blue.600',
                }}
                onClick={handleclick}
              >
                Sign in
              </Button>
              <Text>Dont have account ? <a style={{ color: 'blue' }} href='/signup'>click here</a></Text>

            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}