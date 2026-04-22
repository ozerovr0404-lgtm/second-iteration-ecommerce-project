import './Footer.css';

function Footer () {

  const search = () => {
    console.log(`search is on`)
  }
    return (
      <div className='main-footer-row'>
        <div className='main-footer'>
          <div className='coloumn-footer'>
            <p className='footer-title'>
              About
            </p>
            <p className='footer-list'>
              About Us
            </p>
            <p className='footer-list'>
              Careers
            </p>
            <p className='footer-list'>
              Press
            </p>
          </div>
          <div className='coloumn-footer'>
            <p className='footer-title'>
              Support
            </p>
            <p className='footer-list'>
              Contact
            </p>
            <p className='footer-list'>
              FAQ
            </p>
            <p className='footer-list'>
              Shipping
            </p>
          </div>
          <div className='coloumn-footer'>
            <p className='footer-title'>
              Legal
            </p>
            <p className='footer-list'>
              Privacy Policy
            </p>
            <p className='footer-list'>
              Terms of Service
            </p>
            <p className='footer-list'>
              Returns
            </p>
          </div>
          <div className='coloumn-footer'>
            <p className='footer-title'>
              Newsletter
            </p>
            <form action={search} className='subscribe-form'>
              <label>Subscribe for exclusive deals</label>
              <div className='input-subscribe-conteiner'>
                <input 
                  type='text' 
                  className='input-email-to-subscribe' 
                  placeholder='Email'
                />
                <button className='sub-button-newsletter'>Subscribe</button>
              </div>
            </form>
          </div>
        </div>
          <div className='all-rights-reserved'>
            <p className='rights-text-styles'>© 2026 TechStore. All Rights reserved.</p>
          </div>
      </div>
    )
}

export default Footer;