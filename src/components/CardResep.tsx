
import { Link as ChakraLink, Button,Image, useColorMode, Box, Icon, Alert,AlertIcon} from '@chakra-ui/core'
import { Badge } from "reactstrap";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text
} from "@chakra-ui/core";
import axios from 'axios';

import  {RecipeContent}  from '../components/RecipeContent'
import React, { useState, useContext, useEffect } from 'react';
import { Container } from './Container';
export const CardResep = (props) => {
  const property = {
  imageUrl: props.img,
    title: props.title,
    reviewCount: props.review,
    rating: props.rating,
    id: props.id,
  };
  
  let recipeCardContent;
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const [recipes, setRecipes] = useState({
    image:"", 
  title:"",
  extendedIngredients:[],
  analyzedInstructions:[{
    name:"",
    steps:[],
  }],
  sourceUrl:"",
  creditsText:""}); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const fetchRecipes = async (e) => {
    //
    var num= property.id;
    var fix = ""+num;
    var linkfix = `https://api.spoonacular.com/recipes/${fix}/information?includeNutrition=false&apiKey=f0765ed2dda24d8d9dd8691366340d25`;
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      const recipes = await axios.get(
       linkfix
      );   
      console.log(recipes.data);
      setRecipes(recipes.data);
      setLoading(false);
      recipeCardContent = (
        <RecipeContent recipeData={recipes.data}  />
      );

    } catch (err) {
      setError(true);
      setLoading(false);
      console.log("error");
      
    }
    
    
    onOpen();
  };
      
 
  
    
  return (
    <Box maxW="xs" borderWidth="0px" rounded="lg" overflow="hidden" m={2} bg="#6B46C1" borderColor="#2A69AC" color="white">
      <Box maxW="xs"  rounded="lg"  overflow="hidden" >
      <Image size="xs" src={property.imageUrl}  />
      </Box>
     
      <Box p="6">
        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
         // isTruncated
        >
          {property.title}
        </Box>
        <Box d="flex" alignItems="baseline" mt="2">
        
          <Badge rounded="full" px="2" >
          ⚠️ kurang {property.reviewCount} bahan
          </Badge>
          
        </Box>
          
        

        <Box d="flex"  alignItems="center">
          
          

          {/* <Box  color="orange.400" /> */}
          
          <Box as="span"   fontSize="sm">
          👍 {property.rating} likes 
          </Box>
          
          
          
        </Box>
        <Box     mt="1">
        
      <Button onClick={fetchRecipes} width="100%" borderWidth="2px" borderColor="white" >
        letsgo!
      </Button>
   

        </Box> 
      </Box>
      <>
       
        <Modal isOpen={isOpen} onClose={onClose} isCentered size="xl"  >
          <ModalOverlay />
          <ModalContent bg="#6B46C1">
           
          <ModalHeader bg="#6B46C1">{recipes.title}</ModalHeader>
          <ModalCloseButton />
          <Container justifyContent="center" alignItems="center" w="100%" bg="#6B46C1">
          <Image size="xs" src={recipes.image}  />
          <h1>{recipes.title}</h1>
          <h1 >
          From{' '}
          </h1>
          <Text as="u">
          <ChakraLink href={recipes.sourceUrl} isExternal>
          
            {recipes.creditsText}
        </ChakraLink>
         </Text>
       
        <Box maxW="70%" justifyContent="center" alignItems="center" w="100%"  bg="#6B46C1" >
        <h3 >Ingredients</h3>
        <ul>
          {recipes.extendedIngredients.map((ingredient) => {
            return (
              <Box borderWidth="1px" rounded="lg" overflow="hidden" m={2}  borderColor="white">
              <li >
                🟢
                {ingredient.original}
              </li>
              </Box>
            );
          })}
        </ul>
      </Box>
        {recipes.analyzedInstructions.length > 0 ? (
         
            <Box maxW="80%" justifyContent="center" alignItems="center" w="100%" bg="#6B46C1">
            <h3 >Instructions</h3>
     <ul>
              {recipes.analyzedInstructions[0].steps.map((step) => {
                return (
                  <Box borderWidth="1px" rounded="lg" overflow="hidden" m={3}  borderColor="white">
                  <li >
                    <span >
                      [ {step.number} ]
                    </span>{' '}
                    <span>{step.step}</span>
                  </li>
                  </Box>
                );
              })}
            </ul>
             </Box>
       
            ) : (
              <ChakraLink href={recipes.sourceUrl} isExternal>
              <Button
              
            
            >
              Click for instructions
              </Button>
              </ChakraLink>
           
          )}
          </Container>

          <ModalFooter>
          <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    </Box>
  );
};

