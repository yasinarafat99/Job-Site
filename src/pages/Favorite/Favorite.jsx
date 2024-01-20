import { useEffect, useState } from "react";
import FavoriteShow from './FavoriteShow';


function Favorite() {
  const [favData, setFavData] = useState();

  useEffect(() => {
    const favDataFunc = async () => {
      try {
        const data = await fetch("http://localhost:9000/jobs");
        const jsontArr = await data.json();
        setFavData(jsontArr?.filter((fav) => fav.isFavorite));
      } catch (err) {
        console.log(err);
      }
    };
    favDataFunc();
  }, []);
  return (
    <>
      {favData?.map((fav) => (
        <FavoriteShow fav={fav} key={fav.id} />
      ))}
    </>
  );
}

export default Favorite;
