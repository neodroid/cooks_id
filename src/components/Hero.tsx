import { Flex, Heading , Stack,Button} from '@chakra-ui/core'
import  {AutoInput}  from './AutoInput'
import  {Container}  from './Container'
import  {bahan}  from './AutoInput'

import  {Pilihan}  from './Pilihan'

import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Box

} from "@chakra-ui/core";

export const Hero = (props) => (
  <Box w="100%">
    <Alert status="error" w="100%" justifyContent="center" alignItems="center" >
  <AlertIcon />
  <AlertTitle mr={2}>The site is still under construction!</AlertTitle>
  <AlertDescription>Sorry 🙇, Your Cooking experience may be degraded.</AlertDescription>
</Alert>
<Container justifyContent="center" alignItems="center" w="100%" height="300px" bg="#6B46C1" >
    
   <Heading fontSize="50px" color="white" mb={5}>cooks.id</Heading>
   <Heading fontSize="25px" color="white" mb={5}>what's inside your fridge?</Heading>
    <AutoInput  />
    
  </Container>
  </Box>
  
)

Hero.defaultProps = {
  title: 'with-chakra-ui',
}
