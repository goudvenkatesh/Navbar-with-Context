// Write your code here
import Navbar from '../Navbar'
import ThemeContext from '../../context/ThemeContext'
import './index.css'

const Home = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/home-dark-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/home-light-img.png'

      const bgClassName = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'

      const textClassName = isDarkTheme ? 'dark-heading' : 'light-heading'
      return (
        <div className={`home-main-container ${bgClassName}`}>
          <Navbar />
          <div className="home-page">
            <img className="home-image" src={imageUrl} alt="home" />
            <h1 className={textClassName}>Home</h1>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default Home
