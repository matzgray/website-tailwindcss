// import Image from "next/image";
// import logo from "../../public/white-shoe-removebg-preview.png"

export default function Nav() {
  return (
    <div>
    <main className="desktop">
      <nav id="home">

        <ul className="nav">
          <li className="logo">
            
            {/* <a href="#"> */}
              <b>
              {/* <Image className="nav-div-img"
              src={logo}
              alt="logo"
              width={150}
            /> */}
          <h1 className="tag-name">Groove</h1>
           </b>
          
          {/* </a> */}
          </li>
          <li><a href="/">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li><a href="/contact-us">Contact Us</a></li>
         
        
        </ul>
      </nav>
      </main>

            {/* for  mobile screen */}
            <center>
            <div className="mobile-nav">
            <div className="mobile-logo">
                {/* <Image 
                        src={logo}
                        alt="logo"
                        height={200}
                        width={200} /> */}
              <h1 className="tag-name2">Groove</h1>
                    
                </div>

      
            <div className="mobile-link" >
              <ul >
              <li><a href="/">Home</a></li>
          <li ><a href="/products">Products</a></li>
          <li ><a href="/contact-us">Contact Us</a></li>
               </ul>
            </div>
        </div>
        </center>
        </div>
  
  );
}

