import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";

export default function App() {
  const handlSearch = async () => {
    return console.log("submit");
  };
  return (
    <div>
      <SearchBar onSearch={handlSearch} />
      <ImageGallery />
    </div>
  );
}
