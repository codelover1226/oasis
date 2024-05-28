'use client'
import Image from "next/image";
import Banner from './assets/image/oasis_exterior1.jpeg';
import Banner2 from './assets/image/oasis_exterior2.jpeg';
import foot from './assets/image/items/foot.png';
import bike from './assets/image/items/bike.png';
import blue from './assets/image/items/blue.png';
import car from './assets/image/items/car.png';
import fitness from './assets/image/items/fitness.png';
import meeting from './assets/image/items/meeting.png';
import beach from './assets/image/items/beach.png';
import mfc from './assets/image/items/mfc.png';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center -z-30">
      <div className="w-full fixed top-[100px] h-[calc(100vh-80px)] -z-[50]" 
        style={{ backgroundImage : "url('/img/oasis_exterior1.jpeg')", 
        backgroundSize: 'cover', 
        backgroundPosition : 'center' }}>
        
      </div>
      <div className="h-[calc(100vh-80px)] w-[full]">
      </div>
      <div className="relative h-[80px] w-full text-center items-center mb-0">
        <p className="relative text-white z-20 top-6">Noble LIC 1st Place Winner <span><a className="underline cursor-pointer">2024 AIA Design Awards</a></span> </p>
        <div className="absolute top-0 right-0 bottom-0 left-0 opacity-80 bg-black"></div>      
      </div>
      <div className="relative w-full flex py-6 sm:py-24 bg-main-bg mt-0">
        <div className="max-w-[1280px] mx-6 sm:mx-auto">
          <div className="w-full md:flex">
            <div className="w-full">
             <Image src={Banner2} alt="" className="w-full"/>
            </div>
            <div className="w-full sm:pl-24">
              <p className="uppercase text-4xl font-bold mb-6 text-center sm:text-left">A COLLECTION OF FORTY-SIX BOUTIQUE CONDOMINIUM HOMES IN LONG ISLAND CITY</p>
              <p className="text-xl font-sans my-6 text-justify">Nestled between tree-lined streets, Noble LIC is a picture of perfection in Long Island City. With its hand-laid bright white Norman bricks, modern black European windows, and distinctive balcony design, the facade establishes Noble as the preeminent boutique condominium residence in Long Island City.</p>
              <p className="text-xl font-sans my-6 text-justify">Continuing the theme of contemporary elegance, the lobby has been designed with carefully selected porcelain wall and floor tiles. Each time you step inside, you will be delighted with your decision to make Noble LIC your home. </p>
            </div>
          </div>

          <div className="text-center mt-16 mb-12 text-4xl">
          ELEVATED AMENITIES
          </div>
          <p className="text-center text-lg">Noble offers services and amenities typically associated with a larger building as well as the exclusivity available only in a boutique condominium residence.</p>

          <div className="w-full sm:flex mt-12 sm:space-x-16">
            <div className="text-center my-6">
              <Image alt="" src={foot} width={100} className="mx-auto"/>
              <p className="text-red text-xl my-6">PET SPA</p>
              <p className="text-lg">Noble’s Pet Spa offers a top-notch bathing station and dryer so you can keep your canine companions looking their best.</p>
            </div>
            <div className="text-center my-6">
              <Image alt="" src={bike} width={100}  className="mx-auto"/>
              <p className="text-red text-xl my-6">BICYCLE STORAGE</p>
              <p className="text-lg">After cycling the 59th Street Bridge, exploring North Brooklyn, or enjoying Long Island City’s waterfront, you can park your bike in Noble’s onsite bike room.</p>
            </div>
            <div className="text-center my-6">
              <Image alt="" src={car} width={100}  className="mx-auto"/>
              <p className="text-red text-xl my-6">INDOOR PARKING</p>
              <p className="text-lg">Tired of searching for street parking? You can rent an indoor parking space in Noble’s onsite garage.</p>
            </div>
          </div>
          
          <div className="w-full sm:flex sm:mt-12 sm:space-x-16">
            <div className="text-center my-6">
              <Image alt="" src={meeting} width={100} className="mx-auto"/>
              <p className="text-red text-xl my-6">RESIDENTS LOUNGE</p>
              <p className="text-lg">Noble’s glass-enclosed Residents Lounge boasts high ceilings, custom millwork, a Porcelanosa catering kitchen, and a large smart screen. Ideal for daytime remote work or evening entertainment, the Noble’s lounge is the perfect extension of your home.</p>
            </div>
            <div className="text-center my-6">
              <Image alt="" src={beach} width={100}  className="mx-auto"/>
              <p className="text-red text-xl my-6">ROOF TERRACES</p>
              <p className="text-lg">Noble residents enjoy outdoor grilling and panoramic Manhattan skyline views from the 4,200-sq-ft landscaped roof deck. The 2nd floor also offers three common open spaces totaling more than 3,000 sq ft, an oasis for Noble residents.</p>
            </div>
            <div className="text-center my-6">
              <Image alt="" src={fitness} width={100}  className="mx-auto"/>
              <p className="text-red text-xl my-6">FITNESS CENTER</p>
              <p className="text-lg">The fitness center consists of indoor and outdoor areas. The indoor gym includes the latest cardio and strength equipment by Octane, True and Hudson Steel. You can bring your workout outdoors to the 997-sq-ft fitness terrace.</p>
            </div>
          </div>
          <div className="sm:w-[60%] sm:flex sm:mt-12 mx-auto">
            <div className="text-center my-6 sm:mx-8">
              <Image alt="" src={blue} width={100} className="mx-auto"/>
              <p className="text-red text-xl my-6">LATCH</p>
              <p className="text-lg">Latch enhances your quality of living by incorporating features such as keyless entry for residential units, remote intercom access, and secure
package room entry.</p>
            </div>
            <div className="text-center my-6 sm:mx-8">
              <Image alt="" src={mfc} width={100}  className="mx-auto"/>
              <p className="text-red text-xl my-6">PERSONAL STORAGE</p>
              <p className="text-lg">With your own onsite storage locker, you can keep your personal belongings tucked safely away. </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}