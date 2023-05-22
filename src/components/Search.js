import React, {  useState} from 'react';
import styles from './Search.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser , faShop,faHeart,faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Search = () => {


const [search,setSearch] = useState("");




const changeHandeler = event =>{
setSearch(event.target.value)
}


  return (
    <div className={styles.container}>
          <Link to="/SignUp"><FontAwesomeIcon icon={faUser} /></Link>
    <div>
      <Link to="/Cart"><FontAwesomeIcon icon={faShop} /></Link>
     
    </div>
    <div>
    <Link to="/like"><FontAwesomeIcon icon={faHeart} /></Link>
   
    </div>
    <span>
    <FontAwesomeIcon icon={faSearch} />
    <input type="text" value={search} onChange={changeHandeler} placeholder= "Suchen ..." />
    </span>
    </div>
  );
};

export default Search;