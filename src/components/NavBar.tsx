import { HStack, Image } from "@chakra-ui/react"
import logo from "../assets/react.svg"
import ColorModeSwitch from "./ColorModeSwitch"
import SearchInput from "./SearchInput"

interface Props{
  onSearch:(searchText:string) => void;
}
export const NavBar = ({onSearch}:Props) => {
  return (
    <HStack padding="10px">
        <Image src={logo} boxSize="50px"></Image>
        <SearchInput onSearch={(searchText) => onSearch(searchText)}/>
        <ColorModeSwitch/>
    </HStack>
  )
}
