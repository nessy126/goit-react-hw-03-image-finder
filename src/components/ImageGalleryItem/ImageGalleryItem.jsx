const ImageGalleryItem = ({ image }) => {
  console.log(image);
  return (
    <li className="ImageGalleryItem">
      <img className="ImageGalleryItemImage" src={image} alt="" />
    </li>
  )
}
 
export default ImageGalleryItem;
