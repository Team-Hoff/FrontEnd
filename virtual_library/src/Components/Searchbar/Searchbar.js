import React, {useState} from 'react';
import './Searchbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ClosedIcon  from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function Searchbar({placeholder, data}) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setwordEntered] = useState("");

    const handleFilter=(event)=>{
        const searchWord = event.target.value;
        setwordEntered(searchWord);
        const newFilter = data.filter((value)=>{
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
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
                <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter}/>
                <div className='searchIcon'>
                   {filteredData.length === 0 ? <SearchIcon/> : <ClosedIcon id="clearBtn" onClick={clearInput}/>} 
                </div>
            </div>
            {filteredData.length !==0 && (
            <div className='dataResult'>
                {filteredData.slice(0,15).map((value,key)=>{
                    return <Link className='dataItem' to={`/home/${value.ID}/${value.id}`}><p>{value.name}, {value.ID.toUpperCase()}</p></Link>
                })}
            </div>
)}
        </div>
    </div>
  )
}

export default Searchbar;