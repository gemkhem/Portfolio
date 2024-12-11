import React from 'react' 
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      {/* footer-top section */}

      <div className="footer-conatiner">

        {/* About me */}

        <div className="about-container">
            {/* logo */}
                  <Link to="/" className='logo'>Logo</Link>

            {/* description */}
            <p className="description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia quo tempora sit ad quibusdam pariatur? Incidunt deleniti impedit vel iure.
            </p>



        </div>


        {/* Quick links */}


        {/* useful links */}
        

        {/* follow Us */}


      </div>

      {/* copyright-section */}

    </footer>
  )
}

export default Footer
