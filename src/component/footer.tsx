import Image from "next/image";
import logo from "../../public/white-shoe-removebg-preview.png"

export default function Footer() {
    return (
        <div className="main_footer">
    <div className="footer">
        <Image
        src={logo}  alt="" 
        width="140" />

    </div>
    <br/>
    <div className="footer_content">
        <div className="footer_content1">
            <p>Lorem ipsum dolor sit, amet consectetur 
            adipisicing elit. Facilis esse veniam quos necessitatibus 
            saepe illum exercitationem eveniet harum nam eligendi vero fuga ut 
            aspernatur eius culpa perspiciatis, delectus doloribus aliquam..</p>
        </div>
        <div className="footer_content2">
            <ul className="sub_footer2_ul">
                <li><a href=""> Location : ABC London </a></li>
                <li><a href=""> E-mail : matzgray1@gmail.com</a></li>
            <li>
                <a href=""><i className="fa-brands fa-facebook"></i></a>
                <a href=""><i className="fa-brands fa-square-instagram"></i></a>
                <a href=""><i className="fa-brands fa-twitter"></i></a>
                <a href=""><i className="fa-brands fa-linkedin"></i></a>
            </li>
        </ul>
        </div>
    </div>
    <br/>
    <center> <ul className="footer-links">
            <li><a href="#">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="contact us">Contact us</a></li>
        </ul></center>
       
     
      
    <center><p>Copyright 2024 Muzammil Hussain | All right reserved.</p></center>
</div>

    );
    }