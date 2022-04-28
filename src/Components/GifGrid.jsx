import { useFetchGifs } from "../Hooks/useFetchGifs";
import GifGridItem from "./GifGridItem";

const GifGrid = ( { category } ) => {

 const { data:images, loading } = useFetchGifs( category );


  return (
    <>
     <h3>{ category }</h3>

      {loading && 'Loading...'}
      <div className="cards-grid" >
      {images.map( ({id, title, url}) => {
        return <GifGridItem key={id} title={title} url={url} />
      })}
      </div>
    </>
  );
};

export default GifGrid;
