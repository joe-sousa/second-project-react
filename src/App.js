import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Empresa from './pages/Empresa'
import Contato from './pages/Contato'
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import { FaSearch, FaBook, FaLink, FaUser } from 'react-icons/fa'
import styles from './Itens.module.css'
import React from 'react';

const List = (props) => props.listBook.map(function (item) {
  return <div key={item.objectID}>
    <ul className={styles.list}>
      <li className={styles.item}>
        <span>
          <FaUser />{item.author}
        </span>
      </li>
      <li className={styles.item}>
        <span>
          <FaBook /> {item.title}
        </span>
      </li>
      <li className={styles.item}>
        <span>
          <FaLink /><a href={item.url}>{item.url}</a>
        </span>
      </li>
    </ul>

  </div>
})

const Search = props => {
  return (
    <div>
      <label htmlFor='search'>Search: </label>
      <input id='search' type='text' onChange={props.onSearch} />
      <FaSearch />
    </div>
  );
}


function App() {

  const books = [
    {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
    },
    {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
    }
  ]

  const [searchTerm, setSearchTerm] = React.useState('');

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const searchedBooks = books.filter(function (livro) {
    return livro.title.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>

      <div>
        <Search onSearch={handleSearch} />
        <hr />
        <List listBook={searchedBooks} />
      </div>

      <Footer />
    </Router>
  )
}

export default App;
