const ServicesData = [
  {
    id: 1,
    page: "home_2",
    data_delay_time: "0.1s",
    category: "E-Waste",
    title: "E-Waste Collection & Management",
    description: "Comprehensive collection services for all types of electronic waste",
    carousel: "1",
    carousel_thumb: [
      {
        img: "/images/agent/img_01.jpg",
        alt: "E-waste collection team",
        width: 400,
        height: 300,
        active: "active"
      },
      {
        img: "/images/property/property_1.jpg",
        alt: "Sorted e-waste materials",
        width: 400,
        height: 300,
        active: ""
      },
      {
        img: "/images/agent/img_02.jpg",
        alt: "E-waste transportation",
        width: 400,
        height: 300,
        active: ""
      }
    ],
    service_features: [
      {
        icon: "/images/icon/checkmark.svg",
        feature: "NEMA Certified"
      },
      {
        icon: "/images/icon/recycle.svg",
        feature: "Environmentally Safe"
      },
      {
        icon: "/images/icon/location.svg",
        feature: "Nationwide Coverage"
      }
    ],
    impact: 850,
    impact_unit: "Tonnes Collected"
  },
  {
    id: 2,
    page: "home_2",
    data_delay_time: "0.2s",
    category: "Refurbishment",
    title: "IT Equipment Repair & Refurbishment",
    description: "Extending the lifecycle of computers and electronic devices",
    carousel: "2",
    carousel_thumb: [
      {
        img: "/images/property/property_2.jpg",
        alt: "Technician repairing laptops",
        active: "active"
      },
      {
        img: "/images/agent/img_03.jpg",
        alt: "Refurbished computers",
        active: ""
      },
      {
        img: "/images/property/property_3.jpg",
        alt: "Quality testing",
        active: ""
      }
    ],
    service_features: [
      {
        icon: "/images/icon/computer.svg",
        feature: "All Device Types"
      },
      {
        icon: "/images/icon/warranty.svg",
        feature: "6-Month Warranty"
      },
      {
        icon: "/images/icon/school.svg",
        feature: "Education Discounts"
      }
    ],
    impact: 3200,
    impact_unit: "Devices Refurbished"
  },
  {
    id: 3,
    page: "home_2",
    data_delay_time: "0.3s",
    category: "Disposal",
    title: "Safe & Responsible Disposal",
    description: "Certified destruction and recycling of electronic waste",
    carousel: "3",
    carousel_thumb: [
      {
        img: "/images/property/property_4.jpg",
        alt: "Safe disposal process",
        active: "active"
      },
      {
        img: "/images/agent/img_04.jpg",
        alt: "Recycling facility",
        active: ""
      },
      {
        img: "/images/property/property_5.jpg",
        alt: "Certified destruction",
        active: ""
      }
    ],
    service_features: [
      {
        icon: "/images/icon/certificate.svg",
        feature: "WEEE Certified"
      },
      {
        icon: "/images/icon/data.svg",
        feature: "Data Destruction"
      },
      {
        icon: "/images/icon/report.svg",
        feature: "Certificates Provided"
      }
    ],
    impact: 98,
    impact_unit: "Recycling Rate %"
  }
];

export default ServicesData;