import React,{useState,useEffect} from "react";

function Search({partSearch}) {

const [search,setSearch] = useState("")


useEffect(()=>{
    partSearch(search)

},[search])


  return (
    <div className="searchbar">
      <label htmlFor="search"><h1>Search Part:</h1></label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;