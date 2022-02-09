
import { Component } from "react";
import { SRLWrapper } from "simple-react-lightbox"


class Modal extends Component {
  state = { 
    showModalWindow: false,
  } 

  openModal(e) {
    if (e.target.node === "IMG") {
      this.setState({ showModalWindow: true })
    }
  }

  closeModal(e) {
    if (e.target.keyCode === "escape") {
      this.setState({ showModalWindow: false })
    }
  }
  
  componentDidMount() {
    window.addEventListener("keydown", this.closeModal)
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeModal)
  }

  render() { 
    const { showModalWindow } = this.state;
    return (
      
      showModalWindow
          &&
         ( <div className="Overlay">
            <div className="Modal">
        // <SRLWrapper>
          <img src="" alt="" />
        // </SRLWrapper>
            </div>
          </div>)
      
    );
  }
}
 
export default Modal;

