import { Link as ChakraLink, Button,Flex, useColorMode, Box, Icon, Alert,AlertIcon} from '@chakra-ui/core'



export const PilihanCard = (props) => {
  const property = {

    title: props.title,
    
  };


  return (
  <Button size ="xs" >

    {property.title} X

  </Button>
  );
};

