import fetch from "node-fetch";
import  {bahan}  from '../../components/AutoInput'



export default async (req, res) => {
  var dataTotal=[],i;
  
  var fix = ""+bahan;
  
console.log(fix);

    
    async function getSortedPostsData0() {
      // Instead of the file system,
      // fetch post data from an external API endpoint
      const res = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${fix}&number=30&ranking=2&ignorePantry=true&apiKey=49a86e8fc50842fc9d6de7deb051f30b`
     );
      return res.json();
     
    }
    
    const data0 = await getSortedPostsData0();
    const results0 = (data0.results);
    dataTotal = dataTotal.concat(results0);
      
  res.status(200).json({ dataTotal});
  //console.log(results0[0]);
  

};
