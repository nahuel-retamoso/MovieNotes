import { GridItem,  Text, Image } from "@chakra-ui/react";
import Modal from "../Modal";

function Card (props) {
    return (
        <GridItem w='100%' bgGradient='linear(to-t, #fffff5, #edede9)' shadow={'base'} h='390px' display={'flex'} flexDirection='column' alignItems='center' justifyContent='center'>
            <Image src={props.image} alt='image' mt='3%' mb='3%' boxSize='230px' boxShadow='dark-lg'/>
            <Text fontSize='lg' m={'18px'} color='blackAlpha.700'>{props.title}</Text>
            <Modal title = { props.title } note={props.note} image = { props.image }/>
         </GridItem>
    )
}

export default Card;