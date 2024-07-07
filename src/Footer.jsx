import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <div className="foot-one">
            <h1>NEVER MISS A THING</h1>
            <p>Sign up for promotions, tailored new arrivals, stock updates and more - straight to your inbox</p>
            <input type="email" placeholder='Your email address'/>
            <button>Sign Up</button>
            <p>By signing up, you consent to receiving marketing by email and acknowledge you have read our Privacy Policy. Unsubscribe anytime at the bottom of our emails or by replying STOP to any of our email.</p>
        </div>
        <div className="faq">
            <div className="each-faq">
                <p>CUSTOMER SERVICES</p>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
            <div className="each-faq">
                <p>ABOUT TIMBU CLOUD STORE</p>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
            <div className="each-faq">
                <p>DISCOUNTS AND MEMBERSHIP</p>
                <ion-icon name="chevron-down-outline"></ion-icon>
            </div>
        </div>
        <div className="last">
            <p>Follow Us</p>
            <div className="socials">
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-behance"></ion-icon>
                <ion-icon name="logo-linkedin"></ion-icon>
                <ion-icon name="logo-youtube"></ion-icon>
            </div>
            <div className="terms">
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
            </div>
        </div>
        <div className="courtesy">
            <p>Designed with Figma by Osimen Victor</p>
            <p>Built with React by Innocent Prosper</p>
        </div>
    </footer>
  )
}

export default Footer