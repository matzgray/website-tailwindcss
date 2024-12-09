
import Image from "next/image";
import product1 from "../../public/shoes8.jpg"
import product2 from "../../public/shoes7.jpg"
import product3 from "../../public/shoes6.jpg"
import product4 from "../../public/shoes5.jpg"
import product5 from "../../public/shoes4.jpg"
import product6 from "../../public/shoes3.jpg"
import product7 from "../../public/shoes2.jpg"
import product8 from "../../public/shoes12.jpg"



export default function Products() {
    return (
        <div>

<div className="sub_banner">
            <div className="banner_img1 sub_banner_img">
              <Image 
              src={product1}
              alt ="menu5"
              width= {220} />
                <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                    Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>

                <center><button className="sub_btn">Add To Cart</button></center>
            </div>
            <div className="banner_img2  sub_banner_img">
                <Image 
                src={product2} alt="" 
                width={220}/>
                <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                    Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>

                <center><button className="sub_btn">Add To Cart</button></center>
            </div>
            <div className="banner_img3  sub_banner_img">
                <Image 
                src={product3} alt="" 
                width={220}/>
                <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                    Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>

                <center><button className="sub_btn">Add To Cart</button></center>
            </div>
            <div className="banner_img3  sub_banner_img">
                <Image 
                src={product4} alt="" 
                width={220}/>
                <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                    Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>

                <center><button className="sub_btn">Add To Cart</button></center>
            </div>

            </div>
            <div className="sub_banner">

            <div className="banner_img1 sub_banner_img">
              <Image 
              src={product5}
              alt ="menu5"
              width= {220} />
                <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                    Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>

                <center><button className="sub_btn">Add To Cart</button></center>
            </div>
            <div className="banner_img2  sub_banner_img">
                <Image 
                src={product6} alt="" 
                width={220}/>
                <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                    Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>

                <center><button className="sub_btn">Add To Cart</button></center>
            </div>
            <div className="banner_img3  sub_banner_img">
                <Image 
                src={product7} alt="" 
                width={220}/>
                <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                    Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>

                <center><button className="sub_btn">Add To Cart</button></center>
            </div>
            <div className="banner_img3  sub_banner_img">
                <Image 
                src={product8} alt="" 
                width={220}/>
                <p className="banner_p">Lorem ipsum dolor sit amet consectetur, adipisicing elit.

                    Mollitia accusantium cupiditate voluptatem beatae, in nostrum?</p>

                <center><button className="sub_btn">Add To Cart</button></center>
            </div>
        </div>

        </div>
    );}