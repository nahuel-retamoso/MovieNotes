import { GridItem,  Text, Image } from "@chakra-ui/react";
import Modal from "../Modal";

function Card (props) {
    return (
        <GridItem w='100%' bg='whiteAlpha.900' shadow={'md'} h='350px' display={'flex'} flexDirection='column' alignItems='center' justifyContent='center'>
            <Image src={props.image} alt='image' boxSize='150px'/>
            <Text fontSize='lg' m={'18px'} color='blackAlpha.800'>{props.title}</Text>
            <Modal title = { props.title } image = { props.image }/>
         </GridItem>
    )
}

export default Card;