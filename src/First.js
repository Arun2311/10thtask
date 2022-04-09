import React from 'react'
import './One.css'
import { GoMail } from "react-icons/go";
import { BiPhoneCall } from "react-icons/bi";
import { TiSocialGooglePlusCircular } from "react-icons/ti";
import {BsPinterest} from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { RiFacebookCircleLine } from "react-icons/ri";
import { BsDribbble } from "react-icons/bs";
import a from "./assets/a.png";
import icons from './assets/icons.png'
import { AiOutlineLeft } from "react-icons/ai";
import { AiOutlineRight } from "react-icons/ai";
import { MdBedroomParent } from "react-icons/md";
import { FaBath } from "react-icons/fa";
import { MdOutlineSquareFoot } from "react-icons/md";
import { FiRefreshCcw } from "react-icons/fi";
import { VscHeart } from "react-icons/vsc";
import { BsCurrencyDollar } from "react-icons/bs";
import york from "./assets/york.jpg";
import smar from "./assets/smar.jpg";
import glass from "./assets/glass.jpg";
import { BsShieldPlus } from "react-icons/bs";
import virat from "./assets/virat.jpg";
import signature from "./assets/signature.png";
import { FaQuoteLeft } from "react-icons/fa";
import line from "./assets/line.png";
import thala01 from "./assets/thala01.jpg";
import mahi007 from "./assets/mahi007.jpg";
import vij from "./assets/vij.jpg";
import iron from "./assets/iron.jpg";
import elon2 from "./assets/elon2.jpg";
import { GoPrimitiveDot } from "react-icons/go";
import one from "./assets/one.jpg"
import two from "./assets/two.webp"
import nrmal from "./assets/nrmal.jpg";
import { VscDebugStackframeDot } from "react-icons/vsc";
import think from "./assets/think.jpg";
import { AiFillBehanceCircle} from "react-icons/ai";
import three from "./assets/three.webp"
import four from  "./assets/four.jpg"
import five from "./assets/five.jpg"
function First(){
    return (
      <div>
        <div className='Nav-bar'>
          <div className='ic-lef'>
          <GoMail size="30"/>
          </div>
          <div className='lef '>
          <label>sample@sample.com</label>
          </div>

          
             <div className='ph-lef'>
              <BiPhoneCall size="30"/>
              </div>
              <div className='call'>
              <label>00 1234 5678</label>
              </div>


              
              <div className='go'>
              <TiSocialGooglePlusCircular size='35'/>
              </div>

              <div className='pin'>
                <BsPinterest size='26'/>
              </div>

              <div className='twit'>
                <AiFillTwitterCircle size='30'/>
              </div>

              <div className='fb'>
                <RiFacebookCircleLine size="30"/>
              </div>

              <div className='dri'>
              <BsDribbble size="26"/>
              </div>
          
        </div>

        <div className='imgs'>
        <div className='cent'>
          <img src={a}></img>
          <div className='texts'>
            <label><a href="">HOME</a></label>
            </div>
            <div className='texts'>
            <label><a href="">ABOUT</a></label>
            </div>
            <div className='texts'>
            <label><a href="">AGENTS</a></label>
            </div>
            <div className='texts'>
            <label><a href="">PROPERTIES</a></label>
            </div>
            <div className='texts'>
            <label><a href="">BLOG</a></label>
            </div>
            <div className='texts'>
            <label><a href="">CONTACT</a></label>
          </div>
          </div> 
          </div>


        <div className='fam'>
          
          <div className='cont1 '>
            <label><h2>Arun</h2></label>
            </div>
            <div className='cont2'>
            <label><h1>Find your house</h1></label>
            </div>

            
            <div>
            <button  className='btn btn-outline-info' >  +</button>
            </div>

            <div className='bod'>
            <div className='lefrig'>
              <label>1to5</label>
              <AiOutlineLeft/>
              <AiOutlineRight/>
            </div>
            </div>
          
        </div>

       
       <div classname='cons'>
         <img src={icons} ></img>
       </div>


      <div className='wp'>
      <img src={a} ></img>

      <div className='pro'>
       <label>Properties</label>
      </div>

      <div className='hs'>
        <label>HOME SALE</label>
      </div>
      </div>
        
        <div className='build'>
          <div className='his'>
          <div><label>Scandinavian style apartment</label></div>
          <div>
          < label>94-98  11237,USA</label>
          </div><br/><br></br>

         <div className='vij'>
          <div className='bed'>
            <MdBedroomParent/>
            <label> Beds: 3</label>
          </div>
          <div className='Bath'>
          <FaBath/>
          <label>Baths: 2</label>
          </div>

          <div>
            <MdOutlineSquareFoot/>
            <label>Sq Ft:900</label>
          </div>
          </div>
          <hr></hr>

          <div>
            <label> FOR RENT</label><br/>
            <BsCurrencyDollar size='20'/>
            <label className='font-monospace'><h5>54.000</h5></label>
            <div className='ref'>
            <div className='ics'>
            <FiRefreshCcw size='20' />
            <div className='heart'>
            <VscHeart size='20'/>
            </div>
          </div>
          </div>
        </div>

         

          </div>
        </div>

      
        <div className='newy'> 
            <img src={york} width='300' height='270'></img>
            <img src={smar} width='300' height='270'></img>
            <img src={glass} width='300' height='270'></img>
         </div>

         <div className='texty'>
           <a href=''><h4>Scandinavian style apartment</h4></a>
           <a href=''><h4>Lovelace Road Greenfield</h4></a>
           <a href=''> <h4>Building Complex Apartments</h4></a>
         </div>

         <div className='add'>
           <h6>94-98 Ingraham St, Brooklyn,NY 11237,USA</h6>
           <h6>120N St SW Thomaston,Georgia(GA),30286 </h6>
           <h6>319 Brookmeade Way Lawrencevile,Georgia(GA),30043</h6>
         </div>

        <div className='line'>
         <hr></hr>
         </div>

         <div className='plus'>
           <BsShieldPlus size='50' color='blue'/>
           <div className='more'>
           <h6>View More</h6>
           </div>
         </div><br/>


        <div className='fle'>
         
         <div className='par'>
         <h1><p>Beautifully designed,inside</p></h1>
         <h1><p>and out,Studio looks every bit</p></h1>
         <h1> <p>as power as it is</p> </h1>
          </div>
          <div className='ent'>
             <img src={virat} width="600" height="500"></img>
         </div>
           </div>
           <div className='lorel'>
           <h6><p>This is photoshop's versio of lorem ipsum.proin gravida nibh vel velit auctor aliquest.</p></h6>
          <h6><p>Aenean sollicitidin,lorem quin bibendum auctor,nsi elit consequat ,nec segithis sem</p></h6>   
          <h6><p> nibh id llit.Duis sed odio sit ament nibh vulputate curus a sit amet mauris</p></h6>
         </div>
           
         <div className='sign'>
           <img src={signature}></img>
         </div><br></br>
 
       <div className='vj'>
         <div className='rj'>
         <label>Our </label>
         </div>
         <div className='dj'>
           <label>Clients Review</label>
         </div>
       </div><br></br>

       <div className='DN'>
         <div className='Duane'>
         <label>Duane Neal</label>
         </div>
         <div className='Neal'>
         <label>Product Designer USA</label>
         </div>
       </div><br></br>

       <div className='quote'>
         <FaQuoteLeft size='30'/>
         <div className='top'>
        <p> I'm a freelance designer who specialises in print designs and combining fabrics.My designs have been sold all over Europe and</p>
        <p>the USA and I have worked with some of the biggest designers in the industry. I'm also currently working with abig supermarket to</p>
        <p>develop a gorgeous, yet affordable</p>
         </div>
       </div>

       <div className='lines'>
         <img src={line} width='1000'></img>
       </div>

       <div className='thala'>
         <div className='thalas'>
         <img src={thala01}  width='190' height='150'></img>
         </div>

         <div className='msds'>
         <img src={mahi007}  width='190' height='150'></img>
         </div>

         <div className='vijays'>
         <img src={vij} width='150' height='150'></img>
         </div>
         <div className='robss'>
         <img src={iron} width='150' height='150'></img>
         </div>
         <div className='elons'>
         <img src={elon2}  width='150' height='150'></img>
         </div>
       </div>

       <div className='dot'>
         <GoPrimitiveDot size='20' color='gray'/>
         <GoPrimitiveDot size='20' color='gray'/>
         <GoPrimitiveDot size='20' color='blue'/>
         <GoPrimitiveDot size='20' color='gray'/>
         <GoPrimitiveDot size='20' color='gray'/>
       </div><br></br>
       

       <div className='Blog'>
         <div className='blogs'>
         <label>Our</label>
         </div>
         <div className='blo'>
         <label>Blog</label>
         </div>
       </div><br></br>


       <div>
       <div className='beach2'>
         <img src={one} width='470' height='700'></img>
         </div>
         <div className='usas2'>
         <img src={two} width='360' height='300'></img>
         </div>
         <div className='hou2'>
         <img src={three} width='350' height='300'></img>
         </div>
         <div className='smar2'>
         <img src={four} width='350' height='300'></img>
         </div>
         <div className='dream2'>
         <img src={five} width='350' height='300'></img>
         </div>
         </div>


         <div className='imgcont'>
           <label>Lorem Ipsum is simple dummy text of</label>
           <div><label>the printing and typesetting.</label></div>
           <div className='kodu'><hr></hr></div>
           </div>
           <div className='date'>
             <label>13 March, 2020</label>
           </div>
           <div className='kajal'>
             <label>Contary to popular belief, Lorem Ipsum is not simply random text.</label>
             <div><label>It has roots in a piece of classical Latin literature from</label></div>
           </div>

           <div className='imgcont2'>
             <label>There are many varients of </label>
             <div><label>passangers of lorem ipsum</label></div>
             <div className='kodu'><hr></hr></div>
           </div>
           <div className='date1'>
             <label>13 March, 2020</label>
           </div>
           
         <div className='imgcont3'>
         <label>There are many varients of </label>
             <div><label>passangers of lorem ipsum</label></div>
             <div className='kodu'><hr></hr></div>
           </div>
           <div className='date2'>
             <label>13 March, 2020</label>

         </div>


         <div className='imgcont4'>
         <label>There are many varients of </label>
             <div><label>passangers of lorem ipsum</label></div>
             <div className='kodu'><hr></hr></div>
           </div>
           <div className='date3'>
             <label>13 March, 2020</label>

         </div>


         <div className='imgcont5'>
         <label>There are many varients of </label>
             <div><label>passangers of lorem ipsum</label></div>
             <div className='kodu'><hr></hr></div>
           </div>
           <div className='date4'>
             <label>13 March, 2020</label>

         </div>



         <div className='every'>
           <div className='thing'>
             <label>Everything is about to change.</label>
           </div>
           <div className='blue-cont'>
           <div className='sit'>
             <label>Lorem ipsum dolor sit amet, sed do eiusmod tempor incididunt ut labore et dolore</label></div>
            <div className='magna'><label>magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</label></div> 

            <div className='box'>
            <input type="email" className='form-control w-50 p-2' placeholder='Email Address'></input>
            <div><button className='btns '>Subscribe</button></div>
            </div>

           </div>
         </div>


         <div className='queen'>
           <div  className='king'>
           <div className='ted1'><label>WP</label></div>
           <div className='ted2'><label>/</label></div>
           <div className='ted3'><label>Real Estate</label></div>
           </div>

           <div className='minis'>
           <div className='ted4'><label>HOME</label></div>
           <div className='ted5'><label>ABOUT</label></div>
           <div className='ted6'><label>AGENTS</label></div>
           <div className='ted7'><label>PROPERTIES</label></div>
           <div className='ted8'><label>BLOG</label></div>
           <div className='ted9'><label>CONTACT</label></div>
           </div>
         </div>

         <div>
          <div className='pavi'>
            <div className='lab1'>
           <label>ABOUT</label>

        <div className='about123'>
            <div className='stud'>
            <label>ABOUT STUDIO</label>
            </div>

            <div className='sob'>
            <label> JOBS</label>
            </div>

            <div className='tea'>
            <label> TEAMS</label>
            </div>

            <div className='city'>
            <label> SECURITY</label>
            </div>

        </div>



           </div>

           <div  className='lab2'>

           <label>INFORMATION</label>

          <div className='beast'>
           <div className='cs'>
           <label>CUSTOMER SERVICE</label>
            </div>

            <div className='li'>
            <label> LEGAL INFORMATION</label>
            </div>

            <div className='sup'>
            <label> SUPPORT</label>
            </div>

            <div className='faq'>
            <label> FAQ</label>
            </div>
            </div>
           </div>

           <div  className='lab3'>
           <label>RECENT NEWS</label>
           <div className='doctor'>
             <img src={nrmal}></img>
           </div>
          <div className='valimai'>
              <label>Proin eros, ornare sed</label><br></br>
              <label>vehicula sit amet, feuigat</label>
              </div>
              <label className='aug'>Aug 12| 2017</label>

              <div>
              <div className='siva'>
              <img src={think} ></img>
              </div>
              <div className='ak'>
              <label>Proin eros, ornare sed</label><br></br>
              <label>vehicula sit amet, feuigat</label>
              </div>
              <label className='aug'>Aug 12| 2017</label>
              </div>

              </div>


              <div  className='lab4'>
           <label>GET IN TOUCH</label>

          <div className='vsdot'>
           <VscDebugStackframeDot/>
           <label>San Fransisco, CA</label>
          </div>
          <div className='dotvs'><label>125, califorinia, STP 2 Building</label></div>
            

          <div className='vsdot1'>
           <VscDebugStackframeDot/>
           <label>www.studiotheme.com</label>
          </div>


          <div className='vsdot2'>
           <VscDebugStackframeDot/>
           <label>+123 5645 8934</label>
          </div>
            

           </div>
       

           
        </div>
         </div><br></br>



         <div className='claks'>

           <div className='end'> 
         < BsDribbble size="30"/>
         </div>
         <div className='end1'>
         <RiFacebookCircleLine size="34"/>
         </div>
         <div className='end2'>
         <AiFillTwitterCircle size="34"/>
         </div>
         <div className='end3'>
         <AiFillBehanceCircle size="34"/>
         </div>

         <div>
         <div className='pptc'>
           <div className='privacy'><label>PRIVACY</label></div>
           <div className='privacy1'><label>POLICY</label></div>
           <div className='privacy2'><label>|</label></div>
           <div className='privacy3'><label>TERMS </label></div>
           <div className='privacy4'><label>&</label></div>
           <div className='privacy5'><label>CONDITIONS</label></div>
         </div>
       </div>

        </div>
       

       

      </div>
    )
  }

export default First