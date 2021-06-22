import {Component} from 'react'
import './index.css'

class DestinationItem extends Component {
  render() {
    const {destinationDetails} = this.props
    const {imgUrl, name} = destinationDetails

    return (
      <li className="destination-list-container">
        <img src={imgUrl} className="image" alt={name} />
        <p className="name">{name}</p>
      </li>
    )
  }
}

export default DestinationItem
