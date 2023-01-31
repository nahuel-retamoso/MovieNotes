import { Grid } from "@chakra-ui/react";
import Card from './Card';
import MovieContext from '../../contexts/MovieContext.js';
import { useContext } from 'react';

function Body () {

    const { Movies } = useContext(MovieContext);


    return (
                <Grid p='2%' templateColumns='repeat(4, 1fr)' gridRowGap='4.5%' gap={'2%'} bg='blackAlpha.100' w='87vw' overflow='auto' sx={ { '::-webkit-scrollbar':{ display:'none' }}}>

                    {Movies.length !== 0 && Movies.map((result, index) => <Card  key={index} image={result.image} title={result.title}/>)}

                </Grid>
            )
        }

export default Body