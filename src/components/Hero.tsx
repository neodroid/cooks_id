import { Flex, Heading , Stack,Button} from '@chakra-ui/core'
import  {AutoInput}  from './AutoInput'
import  {Container}  from './Container'
import  {bahan}  from './AutoInput'

import  {Pilihan}  from './Pilihan'



export const Hero = (props) => (
  <Container justifyContent="center" alignItems="center" w="100%" height="300px" bg="#6B46C1" color="white">
   <Heading fontSize="50px" mb={5}>cooks.id</Heading>
   <Heading fontSize="25px" mb={5}>what's inside your fridge?</Heading>
    <AutoInput array={props} />
    
  </Container>
)

Hero.defaultProps = {
  title: 'with-chakra-ui',
}
