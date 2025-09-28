import { Component } from "react";
import './Searchbar.scss'

export class Searchbar extends Component {
    state = {
        imageName: ''
    }
    sendSearchedImg = (e) => {
        e.preventDefault()
        this.props.searchImg(this.state.imageName)
        e.target.children.imgInp.value = ''
    }
    render() {
        return <header className="searchbar" onSubmit={this.sendSearchedImg}>
            <form className="form">


                <input
                name='imgInp'
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                    onChange={(e) => this.setState({ imageName: e.target.value })}
                />
            </form>
        </header>
    }
}