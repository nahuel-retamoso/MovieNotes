import { Input, Flex, Text, Button, Icon, InputGroup, Kbd, InputRightElement } from "@chakra-ui/react";
import MovieContext from '../contexts/MovieContext';
import { useContext, useRef } from 'react';
import AuthContext from '../contexts/AuthContext';
import { BiMovie } from 'react-icons/bi'
import { RiLogoutBoxRLine } from 'react-icons/ri'


function NavBar () {
    const { searchMovie, setSideSelect } = useContext(MovieContext);
    const inputRef = useRef(null);

    function Search () {
        searchMovie(inputRef.current.value)
        setSideSelect('')
    }

    const { currentUser, logout } = useContext(AuthContext);

    return (
        <Flex  w='100vw' h='10vh' bg='yellow.300' boxShadow='base'>
            <Flex ml='3%' w='35%' align='center'>
                <Icon as={BiMovie} h={12} w={12} color='green.600'/>
                <Text ml='2%' fontSize='1.4em' color='green.700'>Movie Notes</Text>
            </Flex>
            <Flex w='30%' alignItems='center'>
                <InputGroup>
                    <InputRightElement opacity='70%' mr='2%' pointerEvents='none' children={<Kbd>⏎</Kbd>}/>
                    <Input ref={inputRef} variant='filled' placeholder='Search for some movie' onKeyPress={event => { if (event.key === 'Enter') {Search()}}} />
                </InputGroup>
            </Flex>
            <Flex w='31%' mr='4%' align='center' justify='right'>
                <Text mr='5%' color='blackAlpha.700' fontSize='1.2em'>{currentUser.displayName}</Text>
                <Button mr='2%' h='50%' colorScheme='yellow' variant='outline' rightIcon={<Icon as={RiLogoutBoxRLine} h={5} w={5}/>} onClick={() => logout()}>Logout</Button>
            </Flex>
             
        </Flex>
    )
}

export default NavBar;