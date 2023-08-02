import { Image, ImageProps } from "@chakra-ui/react";
import bullseye from "../assets/bullseye.jpg"
import thumb from "../assets/thumb.jpg";

interface Props{
    rating : number
}

const Emoji = ({rating} : Props) => {
    if(rating < 3) return null;

    const emojiMap : {[key:number] : ImageProps} = {
        3 : {src : thumb, alt : 'thumb' , boxSize:'25px'},
        4 : {src : thumb, alt : 'thumb',boxSize:'25px'},
        5 : {src : bullseye, alt : 'bullseye', boxSize:'25px'},
    }
  return (
    <Image {...emojiMap[rating]} marginTop={1}/>
  )
}

export default Emoji;
