import React, { useState, useEffect, useRef } from 'react';
import './Searchbar.css';
import SearchIcon from '@mui/icons-material/Search';
import ClosedIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

function Searchbar({ placeholder, data }) {
    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setwordEntered] = useState("");
    const [display, setdisplay] = useState(false);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setwordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });
        if (searchWord === "") {
            setFilteredData([]);
        }
        else {
            setFilteredData(newFilter);
        }
    }


    const clearInput = () => {
        setFilteredData([]);
        setwordEntered("");
    }

    const handleClick = event => {
        setdisplay(true)
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            setdisplay(false)
        }
    })

    let menuRef = useRef();
    useEffect(() => {
        let handler = (e) => {
            if (!menuRef.current.contains(e.target)) {
                setdisplay(false)
            }

        }


        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler)
        }
    })




    return (
        <div className='Appss'>
            <div className='search' ref={menuRef}>
                <div className='searchInputs'>
                    <div className='absolute pt-1 pl-1'>
                        <SearchIcon id="clearBtn" />
                    </div>
                    <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} onClick={handleClick} />
                    <div className='relative -left-8 pt-1'>
                        {wordEntered === "" ? <ClosedIcon style={{ visibility: 'hidden' }} /> : <ClosedIcon id="clearBtn" onClick={clearInput} />}
                    </div>
                </div>
                {filteredData.length !== 0 && (
                    <div className='dataResult' style={{ visibility: display ? 'visible' : 'hidden' }}>
                        {filteredData.slice(0, 15).map((value, key) => {
                            return <Link key={[value.id, value.IDM]} className='dataItem' to={`/home/${value.IDM}/${value.id}`}><p>{value.name}, {value.IDM.toUpperCase()}</p></Link>
                        })}
                    </div>
                )}
            </div>
        </div >
    )
}

export default Searchbar;

