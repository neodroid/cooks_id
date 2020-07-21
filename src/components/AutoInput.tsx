import { Flex, useColorMode ,Input,Box,Button} from '@chakra-ui/core'
import React, { useState, useContext } from 'react';
//import { GlobalContext } from '../context/GlobalState';
import topIngredients from './../topIngredients.json';
import Autosuggest from 'react-autosuggest';
import match from 'autosuggest-highlight/match';
import parse from 'autosuggest-highlight/parse';
import { Container } from './Container';

export var bahan = [];




export const AutoInput = (props) => {

  

  const [value, setValue] = useState('');
  const [suggestions, setSuggestion] = useState([]);
  const [ingredient, setIngredients] = useState([]);
  const [itemName, setItemName] = useState("");

  // const { addIngredient } = useContext(GlobalContext);
  bahan = ingredient;
  const onChange = (e, { newValue }) => {
    e.preventDefault();
    setValue(newValue);
   
   
    
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestion(getSuggestions(value));
    
  };

  const onSuggestionsClearRequested = () => {
    setSuggestion([]);
  };

  const escapeRegexCharacters = str => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  };

  const getSuggestions = value => {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
      return [];
    }

    const regex = new RegExp(escapedValue, 'i');

    const sortedByLength = topIngredients.sort((a, b) => {
      return a.name.length - b.name.length;
    });

    return sortedByLength.filter(ingredient => regex.test(ingredient.name));
  };

  function checkBahan(age) {
    return age != 32;
  }

  const hapus = (nilai)=>{
    bahan.filter
  }


  const onSuggestionSelected = (e, { suggestionValue }) => {
    const newIngredient = {
     
      value: suggestionValue
    };


   //  addIngredient(newIngredient);
    //console.log(newIngredient);
    setIngredients([
      ...ingredient,suggestionValue
      
    ]);
    bahan.push(suggestionValue);
    
    // console.log(ingredient);
    
    setValue('');
  };

  const addItem = event =>{
    event.preventDefault();
    setIngredients([
      ...ingredient,{
         itemName
      }
     
    ]);
    setItemName("");
  };

  const getSuggestionValue = suggestion => suggestion.name;

  const renderSuggestion = (suggestion, { query, isHighlighted }) => {
    const matches = match(suggestion.name, query);
    const parts = parse(suggestion.name, matches);
    return (
      <div>
        {parts.map((part, index) => {
          return part.highlight ? (
            <span key={String(index)} className="text-gray-900 font-normal">
              {part.text}
            </span>
          ) : (
            <strong key={String(index)} className="text-gray-600 font-normal">
              {part.text}
            </strong>
          );
        })}
      </div>
    );
  };

  console.log(ingredient);

  const inputProps = {
    placeholder: 'Ex: apples',
    value,
    onChange
  };

  return (
    <Container  width="60%" justifyContent="center" alignItems="center" bg="#6B46C1">
      <Box borderWidth="0px" borderColor="#2A69AC" rounded="md">
      <Autosuggest 
        suggestions={suggestions.slice(0, 6)}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
        onSuggestionSelected={onSuggestionSelected}
      />
      </Box>
      <Box >
      {
      ingredient.map(nilai=> 
        <Button color="#6B46C1" size="xs" bg="white" m="1px" borderWidth="1px" borderColor="#2A69AC" rounded="md" onClick={()=>{setIngredients(ingredient.filter(x=>x!=nilai)) }}>
          {nilai} X
        </Button>
        
        )
    }
      </Box>
        
      
    </Container>
    
   
  );
};


// className="w-full m-auto max-w-sm lg:max-w-md mb-4 relative"
