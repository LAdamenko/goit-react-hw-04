import { useEffect, useState } from "react";
import { getImages } from "../../images-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {
  const [images, setImages] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }

    async function fetchImages() {
      try {
        // setIsLoading(true);
        // setIsError(false);
        const data = await getImages(searchQuery, page);
        setImages((prevState) => [...prevState, ...data.results]);
      } catch (error) {
        // setIsError(true);
        console.log("error");
      } finally {
        // setIsLoading(false);
      }
    }

    fetchImages();
  }, [page, searchQuery]);

  const handlSearch = async (image) => {
    setSearchQuery(image);
    setPage(1);
    setImages([]);
  };
  return (
    <div>
      <SearchBar onSearch={handlSearch} />
      {images.length > 0 && <ImageGallery items={images} />}
    </div>
  );
}
