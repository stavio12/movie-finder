import React, { useEffect, useState, useContext, useRef } from "react";
import ReactDOM from 'react-dom'
import Axios from "axios";
import SearchForm from './components/SearchForm'
import Results from './components/Results'
import MovieDetails from './components/MovieDetails'

function App(props) {
  const [searchData, setSearchData] = useState([])
  const [title, setTitle] = useState()
 
async function handleSubmit(data){
  setTitle(data)     

try {
  const response = await Axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=439203c9&s=${data}`)
  setSearchData(response.data.Search)
  setTitle(data)     
} catch (e) {
  console.log(e);
}


}
 
return (
    <>
     <SearchForm searchMovie={handleSubmit}/>
     <Results  handleData={searchData}/>  

     </>
  )
  }

ReactDOM.render(<App />, document.querySelector("#app"));

if (module.hot) {
  module.hot.accept();
}
