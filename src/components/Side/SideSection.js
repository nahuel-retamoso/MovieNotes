import { Flex } from "@chakra-ui/react";
import SideItems from "./SideItems";
import MovieContext from "../../contexts/MovieContext";
import { useContext } from "react";

function SideSection () {

    const { labels } = useContext(MovieContext);

    return (
        <Flex w='20vw' h='90vh' pt='1%' bg='whiteAlpha.50' boxShadow='base' direction={'column'} align='center'>
            <SideItems name='All'/>
            {labels ? labels.map((label, index ) => <SideItems key={index} name={label}/>) : null}
        </Flex>
    )
}

export default SideSection;