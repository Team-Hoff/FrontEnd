import React, {useState} from 'react';
import './Searchbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ClosedIcon  from '@mui/icons-material/Close';

function Searchbar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setwordEntered] = useState("");

    const handleFilter=(event)=>{
        const searchWord = event.target.value;
        setwordEntered(searchWord);
        const newFilter = data.filter((value)=>{
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === ""){
            setFilteredData([]); 
        }
        else{
        setFilteredData(newFilter);}
    }

    const clearInput = () => {
        setFilteredData([]);
        setwordEntered("");
    }
  return (
    <div className='Appss'>
        <div className='search'>
            <div className='searchInputs'>
                <input class  type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
                <div className='searchIcon'>
                   {filteredData.length === 0 ? <SearchIcon/> : <ClosedIcon id="clearBtn" onClick={clearInput}/>} 
                </div>
            </div>
            {filteredData.length !==0 && (
            <div className='dataResult'>
                {filteredData.slice(0,15).map((value,key)=>{
                    return <a className='dataItem' href={value.link} target="_blank"><p>{value.title}</p></a>
                })}
            </div>
)}
        </div>
    </div>
  )
}

export default Searchbar;