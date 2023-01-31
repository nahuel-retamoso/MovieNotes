import { useState, createContext, useContext, useEffect } from 'react';
import { create, readNotes } from '../services/firebase/FirebaseFunctions';
import AuthContext from './AuthContext';

const MovieContext = createContext()


export function MovieProvider(props) {
  const [Movies, setMovies] = useState([])
  const [Notes, setNotes] = useState([])
  const [labels, setLabels] = useState([])
  const [sideSelect, setSideSelect] = useState('All')

  function searchMovie(search) {
       fetch(`https://imdb-api.com/en/API/Search/${process.env.REACT_APP_movieAPI}/${search}`)
       .then((response) => {return (response.json())})
       .then((json) => setMovies(json.results))
  }

  const { currentUser } = useContext(AuthContext);
  const userId = currentUser ? currentUser.uid : null;

  function createNote(title, img, note, label) {
    const newNote = {
        title: title,
        image: img,
        note: note,
        label: label,
      }
    setNotes([...Notes, newNote])
    const newArray = [...new Set([...labels, ...label])];
    setLabels(newArray);
    create(title ,newNote, userId);
  }

  function getNotes() {
    const notes = readNotes(userId);
    notes.then((result) => {
        const notes = [];
        const labels = [];
        result.forEach((doc) => {
            notes.push(doc.data());
            labels.push(...doc.data().label);
        })
        setNotes(notes);
        setLabels([...new Set(labels)]);
    })
  }

  useEffect(() => {
    if(sideSelect === 'All') {
      setMovies(Notes)
    } else if ( sideSelect !== '' ) {
      const filteredNotes = Notes.filter((note) => note.label.includes(sideSelect))
      setMovies(filteredNotes)
    }
  }, [sideSelect, Notes])

  return (
    <MovieContext.Provider value={{
      Movies,
      searchMovie,
      Notes,
      createNote,
      labels,
      setSideSelect,
      getNotes
    }}>
      {props.children}
    </MovieContext.Provider>
  )
}

export default MovieContext;