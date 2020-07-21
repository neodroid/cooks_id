import {
    Link as ChakraLink,
    Text,
    Code,
    Icon,
    List,
    ListIcon,
    Box,
    Stack,
    Button
  } from '@chakra-ui/core'
  import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/core";
  
  import { Hero } from '../components/Hero'
  import { Container } from '../components/Container'
  import { Main } from '../components/Main'
  import { DarkModeSwitch } from '../components/DarkModeSwitch'
  import { CTA } from '../components/CTA'
  import { Footer } from '../components/Footer'
  import  {AutoInput}  from '../components/AutoInput'
  import  {bahan}  from '../components/AutoInput'
  
  import  {CardResep}  from '../components/CardResep'
  
  import React, { useState, useContext, useEffect } from 'react';
  import axios from 'axios';





const Index = () => {
  

  const [recipes, setRecipes] = useState([]); 
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const fetchRecipes = async (e) => {
    var fix = ""+bahan;
    var linkfix = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${fix}&number=30&ranking=1&ignorePantry=true&apiKey=f0765ed2dda24d8d9dd8691366340d25`;


    //api portal f0765ed2dda24d8d9dd8691366340d25
    //api main 49a86e8fc50842fc9d6de7deb051f30b
    console.log(""+bahan);
    
    e.preventDefault();
    setError(false);
    setLoading(true);
    try {
      const recipes = await axios.get(
       linkfix
      );   
    const filteredRecipes = recipes.data;

      //console.log(linkfix);

      setRecipes(filteredRecipes);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };
  

  


  return (
    <Container>
    <Hero />
    <Button  mt={5} variantColor="purple" onClick={fetchRecipes} >Find Recipes</Button>
    <Container 
    flexDirection="row"
    flexWrap="wrap"
    bottom="0"
    width="100%"
    flex="1"
    justifyContent="center" 
    py={2}
    >
    {
      recipes.map(hit=>
        <CardResep 
            img={hit.image}
            title={hit.title}
            rating={hit.likes}
            review={hit.missedIngredientCount}
            id={hit.id}
        />
        
       
      )
    }
    </Container>
    
    <Footer>
      <Text>with ❤️ by kevinahmad</Text>
    </Footer>
    
  </Container>
  );
};


export default Index;
