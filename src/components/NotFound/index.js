import {Link} from 'react-router-dom'
import './index.css'

const NotFound = () => (
  <div className="notFound-container">
    <h1 className="heading">Lost Your Way ?</h1>
    <p className="texting">
      we are sorry the page you requested could not be found Please go back to
      the homepage.
    </p>
    <Link to="/">
      <button type="button" className="home-button">
        Go to Home
      </button>
    </Link>
  </div>
)

export default NotFound
