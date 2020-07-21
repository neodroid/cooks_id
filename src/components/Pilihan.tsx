import { Link as ChakraLink, Button,Flex, useColorMode, Box, Icon, Alert,AlertIcon} from '@chakra-ui/core'
import { Container } from './Container';
import  {bahan}  from './AutoInput'



export const Pilihan = (props) => {
  const property = {

    title: props.title,
    
  };


  return (
      <Container>
{bahan.map( hit => 
    <Button size ="xs">

    {bahan[hit]} X
    
    </Button>
    
    )
   
    }

      </Container>
  
  );
};

