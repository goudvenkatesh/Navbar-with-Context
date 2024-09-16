// Write your code here
// Write your code here
// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/not-found-img.png '
        : 'https://assets.ccbp.in/frontend/react-js/not-found-img.png '

      const bgClassName = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'

      const textHeading = isDarkTheme ? '' : ''
      return (
        <div className={`not-found-main-container ${bgClassName}`}>
          <Navbar />
          <div className="not-found-page">
            <img className="random-img" src={imageUrl} alt="not found" />
            <h1>Lost Your Way?</h1>
            <p>we cannot seem to find the page your looking for</p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
