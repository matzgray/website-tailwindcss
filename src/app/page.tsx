import Image from "next/image";
import heroImage from "../../public/shoe-red-removebg-preview.png";
import Products from "../component/products";

export default function Home() {
  return (
     <div>
 
  
<div className="header_container" >
    <div className="header_content">
    <h2 className="header_content1">Lorem ipsum dolor sit amet consectetur adipisicing.</h2>
    <h1 className="header_content2">its Time To<br /> <span /><b>Groove!</b></h1>
     </div>
     <Image 
      src={heroImage}
      alt="hero-section-image"
       className="header_img"             />
</div>

<Products />

<center><button className="banner_btn"><a href="/products">See More</a></button></center>

</div>

  );
}
