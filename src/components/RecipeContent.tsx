
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
} from "@chakra-ui/core";

import React, { useState, useContext, useEffect } from 'react';


export const RecipeContent = ({ recipeData }) => {
    const {
        image,
        title,
        extendedIngredients,
        analyzedInstructions,
        sourceUrl,
        creditsText,
      } = recipeData;
 
    
  return (
    
          
        <h1>{title}</h1> 
  );
};

