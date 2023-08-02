// import useData from "./useData"; //enable this to load genres dynamically
import genres from "../data/genres";

export interface Genre{
    id:number,
    name:string,
    image_background:string
}


//enable it for fetching dynamically from server
//const useGenres = () => useData<Genre>('/genres');

//below implementation for static purpose
const useGenres = () => ({data : genres, error:null,isLoading : null});

export default useGenres;
