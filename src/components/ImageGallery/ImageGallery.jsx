import { Component } from "react";
import './ImageGallery.scss'

export class ImageGallery extends Component {
    openModal = (e) => {
        const modal = document.querySelector('.overlay')
        modal.style.display = 'flex'
        modal.children[0].children[0].src = e.target.dataset.source
        modal.addEventListener('click', () => {
            const modal = document.querySelector('.overlay')
            modal.style.display = 'none'
        })
    }

    render() {
        return <ul className="gallery">
            {this.props.images.map(img => {
                return <li className="gallery-item" key={img.id}>
                    <button type="button" onClick={this.openModal} >
                        <img src={img.previewURL} data-source={img.largeImageURL} />
                    </button>
                </li>
            })}
        </ul>
    }
}