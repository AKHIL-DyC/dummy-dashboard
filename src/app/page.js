"use client"
import React, { useState } from 'react'
import { Jura } from "next/font/google";
const jura = Jura({ subsets: ["latin"], weight: ["400"] });
import { FaEye } from "react-icons/fa";
import { GrAnalytics } from "react-icons/gr";
import { SiGoogleanalytics } from "react-icons/si";
import Piechart from "@/components/piechart"
import Sales from "@/components/sales"
import Returns from "@/components/returns"
const page = () => {
  const[select,setselect]=useState(0);
  return (
    <div style={{display:'flex',width:'100vw',height:'100vh',justifyContent:'center',alignContent:'space-between',gap:'3vh',alignItems:'center',backgroundColor:'#fefae0'}}>
      <div style={{display:'flex',width:'15vw',height:'95vh',backgroundColor:'red',borderRadius:'30px', backgroundColor:'#dda15e',boxShadow: 'inset 0 10px 20px rgba(0, 0, 0, 0.2)',flexDirection:'column',alignItems:'center',paddingTop:'3vh'}}>
      <svg width="153" height="21" viewBox="0 0 153 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.6 21C1.07 21 0.805 20.735 0.805 20.205V2.46C0.805 1.93 1.07 1.665 1.6 1.665H8.83C11.32 1.665 13.13 2.235 14.26 3.375C15.4 4.515 15.97 6.33 15.97 8.82V13.845C15.97 16.335 15.4 18.15 14.26 19.29C13.13 20.43 11.32 21 8.83 21H1.6ZM2.38 19.425H8.83C10.19 19.425 11.275 19.245 12.085 18.885C12.905 18.525 13.495 17.94 13.855 17.13C14.215 16.31 14.395 15.215 14.395 13.845V8.82C14.395 7.46 14.215 6.375 13.855 5.565C13.495 4.745 12.905 4.155 12.085 3.795C11.275 3.425 10.19 3.24 8.83 3.24H2.38V19.425ZM25.3813 21C23.8213 21 22.6763 20.64 21.9463 19.92C21.2263 19.19 20.8663 18.045 20.8663 16.485C20.8663 14.925 21.2313 13.78 21.9613 13.05C22.6913 12.32 23.8313 11.955 25.3813 11.955H32.2063C32.1863 10.635 31.8863 9.715 31.3063 9.195C30.7363 8.665 29.7613 8.4 28.3813 8.4H26.6413C25.3713 8.4 24.4413 8.535 23.8513 8.805C23.2613 9.075 22.8963 9.535 22.7563 10.185C22.6863 10.435 22.5913 10.62 22.4713 10.74C22.3613 10.85 22.1813 10.905 21.9313 10.905C21.6713 10.905 21.4663 10.835 21.3163 10.695C21.1763 10.545 21.1263 10.345 21.1663 10.095C21.2963 8.955 21.8113 8.125 22.7113 7.605C23.6213 7.085 24.9313 6.825 26.6413 6.825H28.3813C30.2513 6.825 31.6163 7.26 32.4763 8.13C33.3463 8.99 33.7813 10.355 33.7813 12.225V20.205C33.7813 20.735 33.5213 21 33.0013 21C32.4713 21 32.2063 20.735 32.2063 20.205V18.72C31.2463 20.24 29.5313 21 27.0613 21H25.3813ZM25.3813 19.425H27.0613C28.0313 19.425 28.8813 19.32 29.6113 19.11C30.3513 18.89 30.9463 18.54 31.3963 18.06C31.8463 17.58 32.1163 16.94 32.2063 16.14V13.53H25.3813C24.2713 13.53 23.5013 13.745 23.0713 14.175C22.6513 14.595 22.4413 15.365 22.4413 16.485C22.4413 17.595 22.6513 18.365 23.0713 18.795C23.5013 19.215 24.2713 19.425 25.3813 19.425ZM42.2303 20.97C41.0003 20.97 40.0603 20.71 39.4103 20.19C38.7603 19.66 38.3703 18.855 38.2403 17.775C38.2103 17.515 38.2653 17.315 38.4053 17.175C38.5453 17.025 38.7503 16.95 39.0203 16.95C39.2703 16.95 39.4553 17.015 39.5753 17.145C39.7053 17.275 39.7903 17.47 39.8303 17.73C39.9203 18.35 40.1453 18.785 40.5053 19.035C40.8753 19.275 41.4503 19.395 42.2303 19.395H47.1503C48.0803 19.395 48.7203 19.22 49.0703 18.87C49.4203 18.52 49.5953 17.88 49.5953 16.95C49.5953 16.01 49.4203 15.365 49.0703 15.015C48.7203 14.665 48.0803 14.49 47.1503 14.49H42.2903C40.9903 14.49 40.0203 14.18 39.3803 13.56C38.7503 12.93 38.4353 11.965 38.4353 10.665C38.4353 9.335 38.7503 8.36 39.3803 7.74C40.0103 7.11 40.9803 6.795 42.2903 6.795H47.0003C49.2603 6.795 50.5153 7.795 50.7653 9.795C50.8053 10.055 50.7503 10.26 50.6003 10.41C50.4603 10.55 50.2603 10.62 50.0003 10.62C49.7503 10.62 49.5603 10.555 49.4303 10.425C49.3103 10.295 49.2253 10.105 49.1753 9.855C49.1053 9.295 48.9003 8.91 48.5603 8.7C48.2303 8.48 47.7103 8.37 47.0003 8.37H42.2903C41.4203 8.37 40.8203 8.53 40.4903 8.85C40.1703 9.17 40.0103 9.775 40.0103 10.665C40.0103 11.515 40.1753 12.105 40.5053 12.435C40.8353 12.755 41.4303 12.915 42.2903 12.915H47.1503C48.5303 12.915 49.5453 13.245 50.1953 13.905C50.8453 14.555 51.1703 15.57 51.1703 16.95C51.1703 18.32 50.8453 19.335 50.1953 19.995C49.5453 20.645 48.5303 20.97 47.1503 20.97H42.2303ZM56.6781 21C56.1481 21 55.8831 20.735 55.8831 20.205V0.974999C55.8831 0.454999 56.1481 0.194999 56.6781 0.194999C57.1981 0.194999 57.4581 0.454999 57.4581 0.974999V9.045C58.4081 7.565 60.1281 6.825 62.6181 6.825H63.4581C65.3281 6.825 66.6931 7.26 67.5531 8.13C68.4231 8.99 68.8581 10.355 68.8581 12.225V20.205C68.8581 20.735 68.5981 21 68.0781 21C67.5481 21 67.2831 20.735 67.2831 20.205V12.225C67.2831 10.795 66.9981 9.8 66.4281 9.24C65.8681 8.68 64.8781 8.4 63.4581 8.4H62.6181C61.0681 8.4 59.8481 8.645 58.9581 9.135C58.0681 9.625 57.5681 10.39 57.4581 11.43V20.205C57.4581 20.735 57.1981 21 56.6781 21ZM74.9887 21C74.4587 21 74.1937 20.735 74.1937 20.205V0.974999C74.1937 0.454999 74.4587 0.194999 74.9887 0.194999C75.5087 0.194999 75.7687 0.454999 75.7687 0.974999V8.91C76.2187 8.22 76.8587 7.695 77.6887 7.335C78.5287 6.975 79.6087 6.795 80.9287 6.795H82.0687C83.9387 6.795 85.3037 7.23 86.1637 8.1C87.0337 8.97 87.4687 10.34 87.4687 12.21V15.585C87.4687 17.455 87.0337 18.825 86.1637 19.695C85.3037 20.565 83.9387 21 82.0687 21H80.9287C79.6087 21 78.5287 20.825 77.6887 20.475C76.8587 20.115 76.2187 19.585 75.7687 18.885V20.205C75.7687 20.735 75.5087 21 74.9887 21ZM80.9287 19.425H82.0687C83.4987 19.425 84.4937 19.145 85.0537 18.585C85.6137 18.015 85.8937 17.015 85.8937 15.585V12.21C85.8937 10.78 85.6087 9.785 85.0387 9.225C84.4787 8.655 83.4887 8.37 82.0687 8.37H80.9287C79.3687 8.37 78.1187 8.615 77.1787 9.105C76.2387 9.595 75.7687 10.34 75.7687 11.34V16.515C75.7887 17.485 76.2687 18.215 77.2087 18.705C78.1487 19.185 79.3887 19.425 80.9287 19.425ZM97.69 21C95.82 21 94.45 20.57 93.58 19.71C92.71 18.84 92.275 17.475 92.275 15.615V12.225C92.275 10.335 92.71 8.96 93.58 8.1C94.45 7.23 95.82 6.805 97.69 6.825H100.15C102.02 6.825 103.385 7.26 104.245 8.13C105.115 8.99 105.55 10.355 105.55 12.225V15.585C105.55 17.455 105.115 18.825 104.245 19.695C103.385 20.565 102.02 21 100.15 21H97.69ZM93.85 15.615C93.85 17.025 94.13 18.015 94.69 18.585C95.26 19.145 96.26 19.425 97.69 19.425H100.15C101.58 19.425 102.575 19.145 103.135 18.585C103.695 18.015 103.975 17.015 103.975 15.585V12.225C103.975 10.795 103.695 9.8 103.135 9.24C102.575 8.68 101.58 8.4 100.15 8.4H97.69C96.73 8.39 95.97 8.505 95.41 8.745C94.85 8.985 94.45 9.385 94.21 9.945C93.97 10.505 93.85 11.265 93.85 12.225V15.615ZM114.971 21C113.411 21 112.266 20.64 111.536 19.92C110.816 19.19 110.456 18.045 110.456 16.485C110.456 14.925 110.821 13.78 111.551 13.05C112.281 12.32 113.421 11.955 114.971 11.955H121.796C121.776 10.635 121.476 9.715 120.896 9.195C120.326 8.665 119.351 8.4 117.971 8.4H116.231C114.961 8.4 114.031 8.535 113.441 8.805C112.851 9.075 112.486 9.535 112.346 10.185C112.276 10.435 112.181 10.62 112.061 10.74C111.951 10.85 111.771 10.905 111.521 10.905C111.261 10.905 111.056 10.835 110.906 10.695C110.766 10.545 110.716 10.345 110.756 10.095C110.886 8.955 111.401 8.125 112.301 7.605C113.211 7.085 114.521 6.825 116.231 6.825H117.971C119.841 6.825 121.206 7.26 122.066 8.13C122.936 8.99 123.371 10.355 123.371 12.225V20.205C123.371 20.735 123.111 21 122.591 21C122.061 21 121.796 20.735 121.796 20.205V18.72C120.836 20.24 119.121 21 116.651 21H114.971ZM114.971 19.425H116.651C117.621 19.425 118.471 19.32 119.201 19.11C119.941 18.89 120.536 18.54 120.986 18.06C121.436 17.58 121.706 16.94 121.796 16.14V13.53H114.971C113.861 13.53 113.091 13.745 112.661 14.175C112.241 14.595 112.031 15.365 112.031 16.485C112.031 17.595 112.241 18.365 112.661 18.795C113.091 19.215 113.861 19.425 114.971 19.425ZM129.51 21C128.98 21 128.715 20.735 128.715 20.205V7.605C128.715 7.085 128.98 6.825 129.51 6.825C130.03 6.825 130.29 7.085 130.29 7.605V9.915C130.81 8.915 131.56 8.15 132.54 7.62C133.53 7.09 134.7 6.825 136.05 6.825C136.58 6.825 136.845 7.085 136.845 7.605C136.845 8.135 136.58 8.4 136.05 8.4C134.27 8.4 132.89 8.805 131.91 9.615C130.93 10.415 130.39 11.56 130.29 13.05V20.205C130.29 20.735 130.03 21 129.51 21ZM144.448 21C142.578 21 141.208 20.565 140.338 19.695C139.468 18.825 139.033 17.455 139.033 15.585V12.225C139.033 10.355 139.468 8.99 140.338 8.13C141.208 7.26 142.578 6.825 144.448 6.825H150.733V0.974999C150.733 0.454999 150.998 0.194999 151.528 0.194999C152.048 0.194999 152.308 0.454999 152.308 0.974999V20.205C152.308 20.735 152.048 21 151.528 21C150.998 21 150.733 20.735 150.733 20.205V18.915C150.303 19.605 149.673 20.125 148.843 20.475C148.013 20.825 146.928 21 145.588 21H144.448ZM144.448 19.425H145.588C147.148 19.425 148.393 19.18 149.323 18.69C150.263 18.19 150.733 17.445 150.733 16.455V8.4H144.448C143.018 8.4 142.018 8.685 141.448 9.255C140.888 9.815 140.608 10.805 140.608 12.225V15.585C140.608 17.015 140.888 18.015 141.448 18.585C142.018 19.145 143.018 19.425 144.448 19.425Z" fill="white"/>
</svg>
      <div style={{paddingTop:'4vh',display:'flex',gap:'9vh',flexDirection:'column'}}>
     
    
    <div className="flex items-center gap-2" onClick={()=>{setselect(2)}}>
      <GrAnalytics className="text-gray-600 text-lg" />
      <h3 className={`${jura.className} text-gray-800 text-lg font-medium hover:text-white`}>Sales</h3>
    </div>
    <div className="flex items-center gap-2" onClick={()=>{setselect(1)}}>
      <FaEye className="text-gray-600 text-lg" />
      <h3 className={`${jura.className} text-gray-800 text-lg font-medium hover:text-white`}>Visitors</h3>
    </div>

    <div className="flex items-center gap-2" onClick={()=>{setselect(3)}}>
      <SiGoogleanalytics className="text-gray-600 text-lg" />
      <h3 className={`${jura.className} text-gray-800 text-lg font-medium hover:text-white`}>Returns</h3>
    </div>
        </div>
      </div>
      <div style={{display:'flex',width:'70vw',height:'95vh',backgroundColor:'blue',borderRadius:'30px',backgroundColor:'#ced4da' ,boxShadow: 'inset 0 10px 20px rgba(0, 0, 0, 0.2)',overflow:'hidden'}}>
      {(() => {
  switch (select) {
    case 1:
      return <Piechart />;
    case 2:
      return <Sales />;
    case 3:
      return <Returns />;
    default:
      return <Piechart/>; 
  }
})()}
      </div>
    </div>
  )
}

export default page