import { Flex, Heading , Stack,Button} from '@chakra-ui/core'
import  {AutoInput}  from './AutoInput'
import  {Container}  from './Container'
import  {bahan}  from '../components/AutoInput'



function pencet(){
  //console.log(value);
  var fix = ""+bahan;
  //console.log(fix);
  
  console.log(`https://api.spoonacular.com/recipes/findByIngredients?ingredients=${fix}&number=30&ranking=2&ignorePantry=true&apiKey=49a86e8fc50842fc9d6de7deb051f30b`);;
};

export const Resep = (props) => (
  <Container  alignItems="center" w="100%" height="350px" >
  
    <Button variantColor="green" onClick={pencet} >Find Recipes</Button>
  </Container>
)
