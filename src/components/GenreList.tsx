import { Button, HStack, Heading, Image, List, ListItem, Spinner } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageURL from "../services/image-url";

interface Props{
    onSelectGenre:(genre : Genre) => void;
    selectedGenre : Genre | null
}
const GenreList = ({onSelectGenre,selectedGenre}:Props) => {
    const {data,error,isLoading} = useGenres();
    if(isLoading) return <Spinner/>;
    if(error) return null;
  return (
    <>
    <Heading marginBottom={3} fontSize={'2xl'}>Genres</Heading>
    <List>
        {data.map(genre => 
        <ListItem key={genre.id} paddingY="5px">
            <HStack>
                <Image boxSize="32px" borderRadius={8} objectFit="cover" src={getCroppedImageURL(genre.image_background)}/>
                <Button whiteSpace='normal' textAlign='left' fontWeight={selectedGenre?.id == genre.id ? 'bold': 'normal'} onClick={() => onSelectGenre(genre)} variant='link' fontSize='lg'>{genre.name}</Button>
            </HStack>
        </ListItem>)}
    </List>
    </>
  )
}

export default GenreList;
