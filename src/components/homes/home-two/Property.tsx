import services_data from "../../../data/home-data/ServicesData"
import Image from "next/image"
import Link from "next/link"

import serviceShape from "@/assets/images/shape/shape_17.svg"
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react"

const Services = () => {
   return (
      <div className="xl-mt-120 our-services position-relative z-1 mt-150 pb-150 xl-pb-120 lg-pb-80">
         <div className="container">
            <div className="position-relative">
               <div className="title-one mb-25 lg-mb-20 wow fadeInUp">
                  <h2 className="font-garamond">Our Key Services</h2>
                  <p className="fs-22 mt-xs">Explore our comprehensive e-waste management solutions.</p>
               </div>

               <div className="row gx-xxl-5">
                  {services_data.filter((items: { page: string }) => items.page === "home_2").map((item: { id: Key | null | undefined; data_delay_time: any; category: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; carousel: any; carousel_thumb: any[]; title: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; description: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; service_features: any[]; impact: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined; impact_unit: string | number | bigint | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<AwaitedReactNode> | null | undefined }) => (
                     <div key={item.id} className="col-lg-4 col-md-6 d-flex mt-40 wow fadeInUp" data-wow-delay={item.data_delay_time}>
                        <div className="service-card style-two h-100 w-100">
                           <div className="img-gallery">
                              <div className="position-relative overflow-hidden">
                                 <div className="service-tag fw-500">{item.category}</div>
                                 <div id={`carousel${item.carousel}`} className="carousel slide">
                                    <div className="carousel-indicators">
                                       <button type="button" data-bs-target={`#carousel${item.carousel}`} data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                       <button type="button" data-bs-target={`#carousel${item.carousel}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
                                       <button type="button" data-bs-target={`#carousel${item.carousel}`} data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    </div>
                                    <div className="carousel-inner">
                                       {item.carousel_thumb.map((item, i) => (
                                          <div key={i} className={`carousel-item ${item.active}`} data-bs-interval="1000000">
                                             <Link href="/service_details" className="d-block">
                                                <Image src={item.img} className="w-100" alt={item.alt} />
                                             </Link>
                                          </div>
                                       ))}
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="service-info p-25">
                              <Link href="/service_details" className="title tran3s">{item.title}</Link>
                              <div className="description">{item.description}</div>
                              <ul className="style-none features d-flex flex-wrap align-items-center justify-content-between pb-5">
                                 {item.service_features.map((feature, index) => (
                                    <li key={index} className="d-flex align-items-center">
                                       <Image src={feature.icon} alt="" className="lazy-img icon me-2" />
                                       <span className="fs-16">{feature.feature}</span>
                                    </li>
                                 ))}
                              </ul>
                              <div className="card-footer top-border d-flex align-items-center justify-content-between">
                                 <strong className="impact fw-500 color-dark">
                                    {item.impact}+ {item.impact_unit}
                                 </strong>
                                 <Link href="/service_details" className="btn-four">
                                    <i className="bi bi-arrow-up-right"></i>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>

               <div className="section-btn text-center md-mt-60">
                  <Link href="/services" className="btn-eight">
                     <span>View All Services</span> 
                     <i className="bi bi-arrow-up-right"></i>
                  </Link>
               </div>
            </div>
         </div>
         <Image src={serviceShape} alt="" className="lazy-img shapes shape_01" />
      </div>
   )
}

export default Services;