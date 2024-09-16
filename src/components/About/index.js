// Write your code here
// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'

      const bgClassName = isDarkTheme ? 'about-bg-dark' : 'about-bg-light'

      const textHeading = isDarkTheme ? '' : ''
      return (
        <div className={`about-main-container ${bgClassName}`}>
          <Navbar />
          <div className="about-page">
            <img src={imageUrl} alt="about" className="about-image" />
            <h1>about</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
