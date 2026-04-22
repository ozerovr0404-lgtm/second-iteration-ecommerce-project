import './SpecialOffer.css';

function SpecialOffer () {
    return (
        <div className='marketing-banner'>
          <div className='text-marking-container'>
            <div className='styles-for-string-timer'>
              <img src="timer-icon.svg" alt="Упс!"  className='timer-icon-margin'/>
            <p className='special-deal'>
              Special Deal!
            </p>
            <button className='close-cross-button'>
              <img src="cross-close-icon.svg" alt="Упс!" className='cross-close-icon'/>
            </button>
            </div>
            <p className='marketing-text'>
              Register now to unlock exclusive offers and discounts
            </p>
            <div className='styles-marketing-timer'>
              <p className='marketing-text'>
                Offer expires in:
              </p>
              <p className='marketing-timer'>0:59:59</p>
            </div>
          </div>
        </div>
    )
};

export default SpecialOffer;