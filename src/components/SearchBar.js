import React, { useEffect, useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import data from '../Data.json'
import Select from 'react-select';
import Result from "./Result";
import Flags from 'country-flag-icons/react/3x2'

function SearchBar({ placeholder}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");
    const [words, setWords] = useState([]);
    const [selected, setSelected] = useState([]);
    const [option, setOption] = useState('eng');
    const [option1, setOption1] = useState('eng');
    const [classname, setClassname] = useState(true);

    useEffect(() => {   
          setWords(data);
      }, []);

      const options = [
        { value: 'eng', label: <Flags.US title="United States" className="flag"/> },
        { value: 'uz', label: <Flags.UZ title="United States" className="flag"/> },
      ]
      const options1 = [
        { value: 'eng', label: <Flags.US title="United States" className="flag"/> },
        { value: 'uz', label: <Flags.UZ title="United States" className="flag"/> },
      ]
    
    const handleFilter = (event) => {
        setClassname(true)
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    if(option==='eng'){
    var newFilter = words.filter((value) => {
      return value.word_eng.toLowerCase().includes(searchWord.toLowerCase());
    })} else if(option==='uz'){
       newFilter = words.filter((value) => {
        return value.word_uz.toLowerCase().includes(searchWord.toLowerCase());
      })
    }

    if (searchWord === "") {
        setSelected('')
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  function handleSelected(value){
    setClassname(false)
    setSelected(value)
    {option==='eng'?setWordEntered(value.word_eng):setWordEntered(value.word_uz)}
  }

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
    setSelected('')

  };

  const handleChange=(value)=>{
      setOption(value.value)
  }
  const handleChange1=(value)=>{
      setOption1(value.value)
  }

  return (
    <div className="search">
      <div className="searchInputs">
      <Select className="select" options={options} defaultValue={{ value: 'eng', label: <Flags.US title="United States" className="flag"/> }} onChange={value =>handleChange(value)} />
        <div className="inputSearch">
          <input
          type="text"
          placeholder={placeholder}
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
        </div>
        
        <Select className="select" options={options1} defaultValue={{ value: 'eng', label: <Flags.US title="United States" className="flag"/> }} onChange={value =>handleChange1(value)} />
      </div>
      
      {filteredData.length !== 0 &&  (
        <div className={classname?"dataResult":'unvisible'}>
          {filteredData.slice(0, 15).map((value, key) => {
            return (
              <a className="dataItem" href="# " key={key} onClick={()=>handleSelected(value)} >
                {option==='eng'?<p >{value.word_eng} </p>:<p >{value.word_uz} </p>}
              </a>
            );
          })}
        </div>
      )}
      {selected.length!==0 &&  <Result selected={selected} option={option} option1={option1}/>}
     
    </div>
  );
}

export default SearchBar;