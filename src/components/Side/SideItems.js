import { Text, Flex, Icon } from "@chakra-ui/react";
import MovieContext from "../../contexts/MovieContext";
import { useContext } from "react";
import { MdLabelOutline } from 'react-icons/md'

function SideItems ({name}) {

    const { setSideSelect } = useContext(MovieContext);

    return (
        <Flex w='100%' h='9%' boxShadow='base' align={'center'} _active={{boxShadow: 'inner'}} _hover={{bg:'yellow.100'}} onClick={() => setSideSelect(name)}>
            <Icon as={MdLabelOutline} h={6} w={6} ml='10%' color='blackAlpha.700'/>
            <Text color='blackAlpha.800' ml='10%'>{name}</Text>
        </Flex>
    )
}

export default SideItems;