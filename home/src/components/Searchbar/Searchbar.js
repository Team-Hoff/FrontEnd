import React, {useState} from 'react'
import './Searchbar.css'
import SearchIcon from '@mui/icons-material/Search';
//import CloseIcon from '@mui/icons-material/Close';

function Searchbar({placeholder, data}) {
    //const [filterData, setFiltrData] = useState([])

   // const handleFilter = (event) => {
     //   const searchWord = event.target.value;
     //   const newFilter = data.filter((value) => {
     //       return value.title.toLowerCase().includes(searchWord.toLowerCase())
     // })
    

    //if (searchWord === ""){
    //    setFiltrData([]);
    //} else{
    //    setFiltrData(newFilter)
    //}
    //};
    
  return (
    <div className='search'>
        <div className='search_input'>
            <input type="text" placeholder={placeholder}/>
            <div className='search_icon'>
                <SearchIcon id/>
            </div>
        </div>
        <div className='search_result'>
           
        </div>
    </div>
  )
}

export default Searchbar