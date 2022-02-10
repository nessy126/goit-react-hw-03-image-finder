import { Component } from "react";
import Modal from "../Modal/Modal";
// import { SRLWrapper } from "simple-react-lightbox"


class ImageGalleryItem extends Component {
   state = { 
    showModalWindow: false,
  } 

  openModal =() => {
    this.setState({ showModalWindow: true });
    window.addEventListener("keydown", this.closeModal)
  }

  closeModal = (e) => {
    console.log(e.target)
    console.log(e.currentTarget)
    if (e.keyCode === 27 || e.target === e.currentTarget) {
      this.setState({ showModalWindow: false })
      window.removeEventListener("keydown", this.closeModal)
    }
  }
  

 

  render() { 
        const { showModalWindow } = this.state;
    const { imageBig, tags, image } = this.props
    return (
      <li className="ImageGalleryItem">
        {/* <SRLWrapper> */}
        <img
          onClick={this.openModal}
          className="ImageGalleryItemImage"
          src={image}
          alt=""
        />
        {/* </SRLWrapper> */}
        {showModalWindow && (
          <Modal imageBig={imageBig} tags={tags} closeModal={this.closeModal} />
        )}
      </li>
    )
  }
}
 
export default ImageGalleryItem;
