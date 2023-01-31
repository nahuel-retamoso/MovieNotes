import NavBar from './components/NavBar';
import Body from './components/Body/Body';
import SideSection from './components/Side/SideSection';
import { Box, Flex } from "@chakra-ui/react";
import MovieContext from './contexts/MovieContext';
import AuthContext from './contexts/AuthContext';
import { useContext, useEffect } from 'react';


function App() {
  const { loading } = useContext(AuthContext);
  const { getNotes } = useContext(MovieContext);


  useEffect(() => {
    getNotes()
  }, [])

  if(loading === true) {
    return <div>Loading...</div>
  }

  return (
    
    <Box>
      <NavBar/>
      <Flex w='100vw' h='90vh'>
        <SideSection/>
        <Body/>
      </Flex>
    </Box>
  );
}

export default App;
