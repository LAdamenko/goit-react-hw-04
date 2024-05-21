import { useEffect, useState } from "react";
import { getImages } from "../../images-api";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPage, setTotalPage] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    if (searchQuery.trim() === "") {
      return;
    }

    async function fetchImages() {
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await getImages(searchQuery, page);
        setTotalPage(page < Math.ceil(data.total / 12));
        setImages((prevState) => [...prevState, ...data.results]);
      } catch (error) {
        setIsError(true);
        console.log("error");
      } finally {
        setIsLoading(false);
      }
    }

    fetchImages();
  }, [page, searchQuery]);

  const handlSearch = async (image) => {
    setSearchQuery(image);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage("");
    setModalIsOpen(false);
  };

  return (
    <div>
      <SearchBar onSearch={handlSearch} />
      {isError && <ErrorMessage />}
      {images.length > 0 && (
        <ImageGallery items={images} onImageClick={openModal} />
      )}
      {isLoading && <Loader />}
      {totalPage > 0 && !isLoading && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        imageUrl={selectedImage}
      />
    </div>
  );
}
