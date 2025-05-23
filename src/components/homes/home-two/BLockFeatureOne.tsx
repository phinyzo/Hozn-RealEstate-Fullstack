import feature_data from "@/data/home-data/FeatureData"
import Link from "next/link"
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Ewaste Collection & Management",
    description: "Comprehensive collection and management of electronic waste for institutions and organizations.",
    icon: "/assets/images/agent/img_01.jpg",
    link: "/services/ewaste-collection",
    delay: "0.1s",
    bg: "bg-success"
  },
  {
    id: 2,
    title: "Safe & Responsible Disposal",
    description: "Certified and environmentally responsible disposal of ewaste.",
    icon: "/assets/images/agent/img_02.jpg",
    link: "/services/disposal",
    delay: "0.2s",
    bg: "bg-primary"
  },
  {
    id: 3,
    title: "IT Equipment Repairs & Refurbishment",
    description: "Repair and refurbishment of IT equipment to extend their useful life.",
    icon: "/assets/images/agent/img_03.jpg",
    link: "/services/refurbishment",
    delay: "0.3s",
    bg: "bg-warning"
  },
  {
    id: 4,
    title: "Consultancy on Ewaste Handling",
    description: "Expert advice and policy development for ewaste handling and management.",
    icon: "/assets/images/agent/img_04.jpg",
    link: "/services/consultancy",
    delay: "0.4s",
    bg: "bg-info"
  }
];

// Using agent images as partner logo placeholders
const partners = [
  { name: "Light for the World", logo: "/assets/images/agent/img_05.jpg" },
  { name: "Bopinc", logo: "/assets/images/agent/img_06.jpg" },
  { name: "WEEE Centre", logo: "/assets/images/agent/img_07.jpg" },
  { name: "Rock", logo: "/assets/images/agent/img_08.jpg" },
  { name: "Lementila Enterprise", logo: "/assets/images/agent/img_09.jpg" },
  { name: "Teamjoint Company Limited", logo: "/assets/images/agent/img_10.jpg" },
  { name: "Waitronics", logo: "/assets/images/agent/img_01.jpg" },
];

const BLockFeatureOne = () => {
   return (
      <div className="block-feature-six mt-150 xl-mt-100">
         <div className="container">
            <div className="position-relative z-1">
               <div className="row">
                  <div className="col-xl-9 m-auto">
                     <div className="title-one text-center mb-35 lg-mb-20 wow fadeInUp">
                        <h2 className="font-garamond">Welcome to Grizzly Technologies</h2>
                        <p className="fs-22 mt-xs">
                          Dedicated to responsible ewaste management, device refurbishment, and sustainability across Kenya.
                        </p>
                     </div>
                  </div>
               </div>

               <div className="row gx-xxl-5">
                  {services.map((item) => (
                    <div key={item.id} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={item.delay}>
                      <div className={`location-card-two position-relative z-1 d-flex flex-column align-items-center justify-content-center mt-30 ${item.bg} p-4 rounded`}>
                        <Image src={item.icon} alt={item.title} width={48} height={48} />
                        <div className="content text-center mt-3">
                          <h5 className="text-white font-garamond">{item.title}</h5>
                          <p className="text-white-50">{item.description}</p>
                        </div>
                        <a href={item.link} className="stretched-link"></a>
                      </div>
                    </div>
                  ))}
               </div>

               {/* Partners Section */}
               <div className="mt-80">
                  <h3 className="text-center mb-4">Our Partners</h3>
                  <div className="row justify-content-center">
                    {partners.map((partner) => (
                      <div key={partner.name} className="col-6 col-md-3 text-center mb-4">
                        <Image
                          src={partner.logo}
                          alt={partner.name}
                          width={120}
                          height={80}
                          style={{ objectFit: "contain" }}
                        />
                        <div className="mt-2">{partner.name}</div>
                      </div>
                    ))}
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default BLockFeatureOne
