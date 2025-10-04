import { Component } from "react";
import './Modal.scss';

export class Modal extends Component {
  render() {
    return (
      <div className="overlay" style={{ display: 'none' }}>
        <div className="modal-content">
          <img src="" alt="Modal" />
        </div>
      </div>
    );
  }
}