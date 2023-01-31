import { Input, Flex, Image, Text, IconButton, Button } from "@chakra-ui/react";
import { SearchIcon, SettingsIcon } from "@chakra-ui/icons";
import MovieContext from '../contexts/MovieContext';
import { useContext, useRef } from 'react';
import AuthContext from '../contexts/AuthContext';


function NavBar () {
    const { searchMovie, setSideSelect } = useContext(MovieContext);
    const inputRef = useRef(null);

    function Search () {
        searchMovie(inputRef.current.value)
        setSideSelect('')
    }

    const { currentUser, logout } = useContext(AuthContext);

    return (
        <Flex w='100vw' h='10vh' bg='yellow.300' boxShadow='base'>
            <Flex w='35%' align='center'>
                <Image src='play-button.png' alt='Logo' h='70%' ml='2%'/>
                <Text ml='2%' fontSize='18'>Movie Notes</Text>
            </Flex>
            <Flex w='30%' alignItems='center'>
                <IconButton onClick={() => Search()} aria-label='Search database' icon={<SearchIcon />} mr='1%'/>
                <Input ref={inputRef} variant='filled' placeholder='Search' />
            </Flex>
            <Flex w='35%' align='center' justify='right'>
                <Text mr='5%'>{currentUser.displayName}</Text>
                <Button mr='2%' colorScheme='yellow' variant='outline' onClick={() => logout()}>LogOut</Button>
                <IconButton aria-label='Settings' icon={<SettingsIcon />} mr='3%'/>
            </Flex>
             
        </Flex>
    )
}

export default NavBar;