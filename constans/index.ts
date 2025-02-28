import { ReactNode } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";


export interface HeaderDataProps {
    label: string;
    href: string;
  }

export const headerData: HeaderDataProps[]=[
    {
      label:"Home",
      href:"/"
    },
    {
      label:"About Us",
      href:"/about-us"
    },
    {
      label:"Services",
      href:"/services"
    },
    {
      label:"Cars",
      href:"/cars"
    },
    {
      label:"Contact Us",
      href:"/contact"
    },
  
  ]

  export interface FooterItemDataProps {
    title: string;
    items: { label: string; href: string }[];
  }

  
export const footerData: FooterItemDataProps[] = [
  {
    title:'Discover',
    items: [
      { label: 'How it works', href: '#' },
      { label: 'Featured Services', href: '#' },
      { label: 'Partnership', href: '#' },
      { label: 'Business Relation', href: '#' },
    ],
  },
  {
    title: 'Connect',
    items: [
      { label: 'Events', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Podcast', href: '#' },
      { label: 'Invite a friend', href: '#' },
    ],
  },
  {
    title: 'Support',
    items: [
      { label: 'Help Center', href: '#' },
      { label: 'Contact Us', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Cancellation Policy', href: '#' },
    ],
  },
  {
    title: 'Legal',
    items: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Cookie Policy', href: '#' },
    ],
  },
  
];

export type SocialMediaType = {
  icon: React.ElementType;
  label: string;
};


// Sosyal medya verileri
export const SocialMediaData: SocialMediaType[] = [
  {
    icon: FaFacebookF,
    label: "Facebook",
  },
  {
    icon: FaXTwitter,
    label: "Twitter",
  },
  {
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    icon: FaLinkedinIn,
    label: "LinkedIn",
  },
  {
    icon: FaYoutube,
    label: "YouTube",
  },
];

export type SliderProps = {
  label: string;
  description:string;
  image:string;
  href:string;
};


export const sliderData: SliderProps[] = [
  {
    label: "Discover the most beautiful places around the world",
    description: "Find the perfect car to explore breathtaking destinations.",
    image: "/slider/2.jpg", 
    href: "/", 
  },
  {
    label: "Experience thrilling adventures and activities",
    description: "Enjoy unforgettable journeys with our top-quality rental cars.",
    image: "/slider/4.jpeg", 
    href: "/", 
  },  
 
];

export interface CarProps {
  id: number;
  name: string;
  year: number;
  type: string;
  imageUrl: string;
  passengers: number;
  doors: number;
  bags: string;
  transmission: string;
  pricePerDay: number;
  fuel?: string;
  GPS?: boolean;
}

export const carsData: CarProps[] = [
  {
    id: 1,
    name: "Toyota Yaris",
    year: 2016,
    type: "Hatchback",
    imageUrl: "/cars/1.png",
    passengers: 4,
    doors: 4,
    bags: "2 Bags",
    transmission: "Auto",
    pricePerDay: 400,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 2,
    name: "Honda Civic",
    year: 2019,
    type: "Sedan",
    imageUrl: "/cars/2.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Manual",
    pricePerDay: 350,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 3,
    name: "BMW X5",
    year: 2021,
    type: "SUV",
    imageUrl: "/cars/3.png",
    passengers: 5,
    doors: 4,
    bags: "4 Bags",
    transmission: "Auto",
    pricePerDay: 500,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 4,
    name: "Audi A4",
    year: 2020,
    type: "Luxury Car",
    imageUrl: "/cars/4.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 450,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 5,
    name: "Mercedes Benz C-Class",
    year: 2018,
    type: "Luxury Car",
    imageUrl: "/cars/5.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 480,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 6,
    name: "Ford Mustang",
    year: 2017,
    type: "Sports Car",
    imageUrl: "/cars/6.png",
    passengers: 4,
    doors: 2,
    bags: "2 Bags",
    transmission: "Manual",
    pricePerDay: 600,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 7,
    name: "Tesla Model 3",
    year: 2022,
    type: "Sedan",
    imageUrl: "/cars/7.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 550,
    fuel: "Electric",
    GPS: true,
  },
  {
    id: 8,
    name: "Chevrolet Camaro",
    year: 2020,
    type: "Sports Car",
    imageUrl: "/cars/8.png",
    passengers: 4,
    doors: 2,
    bags: "2 Bags",
    transmission: "Manual",
    pricePerDay: 620,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 9,
    name: "Nissan Altima",
    year: 2019,
    type: "Sedan",
    imageUrl: "/cars/9.png",
    passengers: 5,
    doors: 4,
    bags: "2 Bags",
    transmission: "Auto",
    pricePerDay: 370,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 10,
    name: "Hyundai Tucson",
    year: 2021,
    type: "SUV",
    imageUrl: "/cars/10.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 400,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 12,
    name: "Volkswagen Passat",
    year: 2018,
    type: "Sedan",
    imageUrl: "/cars/12.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Manual",
    pricePerDay: 360,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 13,
    name: "Mazda CX-5",
    year: 2022,
    type: "SUV",
    imageUrl: "/cars/13.png",
    passengers: 5,
    doors: 4,
    bags: "4 Bags",
    transmission: "Auto",
    pricePerDay: 460,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 14,
    name: "Jaguar XF",
    year: 2021,
    type: "Luxury Car",
    imageUrl: "/cars/14.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 530,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 15,
    name: "Subaru Outback",
    year: 2019,
    type: "Crossover",
    imageUrl: "/cars/15.png",
    passengers: 5,
    doors: 4,
    bags: "4 Bags",
    transmission: "Manual",
    pricePerDay: 390,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 16,
    name: "Land Rover Discovery",
    year: 2021,
    type: "SUV",
    imageUrl: "/cars/16.png",
    passengers: 7,
    doors: 4,
    bags: "5 Bags",
    transmission: "Auto",
    pricePerDay: 650,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 17,
    name: "Porsche 911",
    year: 2018,
    type: "Sports Car",
    imageUrl: "/cars/17.png",
    passengers: 2,
    doors: 2,
    bags: "1 Bag",
    transmission: "Manual",
    pricePerDay: 700,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 18,
    name: "Ford Explorer",
    year: 2020,
    type: "SUV",
    imageUrl: "/cars/18.png",
    passengers: 7,
    doors: 4,
    bags: "5 Bags",
    transmission: "Auto",
    pricePerDay: 470,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 19,
    name: "Chevrolet Tahoe",
    year: 2019,
    type: "SUV",
    imageUrl: "/cars/19.png",
    passengers: 7,
    doors: 4,
    bags: "5 Bags",
    transmission: "Auto",
    pricePerDay: 600,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 20,
    name: "Volvo XC90",
    year: 2022,
    type: "SUV",
    imageUrl: "/cars/20.png",
    passengers: 7,
    doors: 4,
    bags: "6 Bags",
    transmission: "Auto",
    pricePerDay: 680,
    fuel: "Gas",
    GPS: true,
  },
  {
    id: 21,
    name: "Mercedes-Benz GLE 350d",
    year: 2021,
    type: "SUV",
    imageUrl: "/cars/21.png",
    passengers: 5,
    doors: 4,
    bags: "5 Bags",
    transmission: "Auto",
    pricePerDay: 620,
    fuel: "Diesel",
    GPS: true,
  },
  {
    id: 22,
    name: "Ford Escape Hybrid",
    year: 2021,
    type: "SUV",
    imageUrl: "/cars/22.png",
    passengers: 5,
    doors: 4,
    bags: "4 Bags",
    transmission: "Auto",
    pricePerDay: 460,
    fuel: "Hybrid",
    GPS: true,
  },
  {
    id: 22,
    name: ": BMW iX",
    year: 2023,
    type: "SUV",
    imageUrl: "/cars/24.png",
    passengers: 5,
    doors: 4,
    bags: "5 Bags",
    transmission: "Auto",
    pricePerDay: 720,
    fuel: "Electric",
    GPS: true,
  },
  {
    id: 27,
    name: "Lexus RX 500h",
    year: 2023,
    type: "SUV",
    imageUrl: "/cars/27.png",
    passengers: 5,
    doors: 4,
    bags: "4 Bags",
    transmission: "Auto",
    pricePerDay: 510,
    fuel: "Hybrid",
    GPS: true,
  },
  {
    id: 29,
    name: "Mercedes-Benz EQS",
    year: 2022,
    type: "Luxury Car",
    imageUrl: "/cars/29.png",
    passengers: 5,
    doors: 4,
    bags: "4 Bags",
    transmission: "Auto",
    pricePerDay: 790,
    fuel: "Electric",
    GPS: true,
  },
  {
    id: 31,
    name: "Lexus LS 500h",
    year: 2022,
    type: "Luxury Car",
    imageUrl: "/cars/31.png",
    passengers: 5,
    doors: 4,
    bags: "4 Bags",
    transmission: "Auto",
    pricePerDay: 730,
    fuel: "Hybrid",
    GPS: true,
  },
  {
    id: 32,
    name: "Audi e-tron GT",
    year: 2023,
    type: "Luxury Car",
    imageUrl: "/cars/32.png",
    passengers: 5,
    doors: 4,
    bags: "4 Bags",
    transmission: "Auto",
    pricePerDay: 770,
    fuel: "Electric",
    GPS: true,
  },
  {
    id: 34,
    name: " BMW 7 Series",
    year: 2021,
    type: "Luxury Car",
    imageUrl: "/cars/34.png",
    passengers: 5,
    doors: 4,
    bags: "4 Bags",
    transmission: "Auto",
    pricePerDay: 740,
    fuel: "Hybrid",
    GPS: true,
  },
  {
    id: 35,
    name: "  Jaguar XJ ",
    year: 2020,
    type: "Luxury Car",
    imageUrl: "/cars/35.png",
    passengers: 5,
    doors: 4,
    bags: "4 Bags",
    transmission: "Auto",
    pricePerDay: 730,
    fuel: " Diese",
    GPS: true,
  },
  {
    id: 37,
    name: " Toyota Camry Hybrid ",
    year: 2020,
    type: "Sedan",
    imageUrl: "/cars/37.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 460,
    fuel: " Hybrid",
    GPS: true,
  },
  {
    id: 38,
    name: "Honda Accord",
    year: 2021,
    type: "Sedan",
    imageUrl: "/cars/38.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 450,
    fuel: " Hybrid",
    GPS: true,
  },
  {
    id: 39,
    name: "BMW i4",
    year: 2023,
    type: "Sedan",
    imageUrl: "/cars/39.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 520,
    fuel: " Electric",
    GPS: true,
  },
  {
    id: 42,
    name: "BMW 5 Series",
    year: 2023,
    type: "Sedan",
    imageUrl: "/cars/42.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 510,
    fuel: "Diesel",
    GPS: true,
  },
  {
    id: 43,
    name: "Tesla Model S",
    year: 2023,
    type: "Sedan",
    imageUrl: "/cars/43.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 540,
    fuel: " Electric",
    GPS: true,
  },
  {
    id: 44,
    name: "Porsche Taycan Turbo S",
    year: 2023,
    type: "Sports Car",
    imageUrl: "/cars/44.png",
    passengers: 2,
    doors: 2,
    bags: "1 Bags",
    transmission: "Auto",
    pricePerDay: 950,
    fuel: " Electric",
    GPS: true,
  },
  {
    id: 46,
    name: "Acura NSX Hybrid",
    year: 2023,
    type: "Sports Car",
    imageUrl: "/cars/46.png",
    passengers: 2,
    doors: 2,
    bags: "1 Bags",
    transmission: "Auto",
    pricePerDay: 1000,
    fuel: "Hybrid",
    GPS: true,
  },
  {
    id: 46,
    name: "Acura NSX Hybrid",
    year: 2023,
    type: "Sports Car",
    imageUrl: "/cars/46.png",
    passengers: 2,
    doors: 2,
    bags: "1 Bags",
    transmission: "Auto",
    pricePerDay: 1000,
    fuel: "Hybrid",
    GPS: true,
  },
  {
    id: 53,
    name: " BMW 1 Series",
    year: 2023,
    type: "Hatchback",
    imageUrl: "/cars/53.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 320,
    fuel: "Diesel",
    GPS: true,
  },
  {
    id: 54,
    name: " Volkswagen Golf TDI",
    year: 2022,
    type: "Hatchback",
    imageUrl: "/cars/54.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 300,
    fuel: "Diesel",
    GPS: true,
  },
  {
    id: 56,
    name: " Renault Koleos Diesel",
    year: 2022,
    type: "Crossover",
    imageUrl: "/cars/56.png",
    passengers: 5,
    doors: 4,
    bags: "4 Bags",
    transmission: "Auto",
    pricePerDay: 470,
    fuel: "Diesel",
    GPS: true,
  },
  {
    id: 62,
    name: " Volkswagen ID.4",
    year: 2022,
    type: "Crossover",
    imageUrl: "/cars/62.png",
    passengers: 5,
    doors: 4,
    bags: "3 Bags",
    transmission: "Auto",
    pricePerDay: 470,
    fuel: "Electric",
    GPS: true,
  },
  {
    id: 65,
    name: "Lexus LC 500h Convertible",
    year: 2022,
    type: "Cabrio",
    imageUrl: "/cars/65.png",
    passengers: 4,
    doors: 2,
    bags: "2 Bags",
    transmission: "Auto",
    pricePerDay: 720,
    fuel: "Hybrid",
    GPS: true,
  },
  {
    id: 66,
    name: " Mini Cooper SE ",
    year: 2022,
    type: "Cabrio",
    imageUrl: "/cars/66.png",
    passengers: 5,
    doors: 4,
    bags: "2 Bags",
    transmission: "Auto",
    pricePerDay: 330,
    fuel: "Electric",
    GPS: true,
  },
  {
    id: 68,
    name: "BMW 4 Series  ",
    year: 2021,
    type: "Cabrio",
    imageUrl: "/cars/68.png",
    passengers:45,
    doors: 2,
    bags: "2 Bags",
    transmission: "Auto",
    pricePerDay: 600,
    fuel: "Diesel ",
    GPS: true,
  },
  
];


export interface  MainTypesCar {
  model: any;
  type: string;
  image: string;
};

export const  mainTypesCar:  MainTypesCar[] = [
  {
    type: 'Sport Car', image: '/types/1.jpg',
    model: undefined
  },
  {
    type: 'Cabrio', image: '/types/2.jpg',
    model: undefined
  },
  {
    type: 'Sedan', image: '/types/3.jpg',
    model: undefined
  },
  {
    type: 'Luxury Car', image: '/types/4.jpg',
    model: undefined
  },
  {
    type: 'Crossover', image: '/types/5.jpg',
    model: undefined
  },
  {
    type: 'Hatchback', image: '/types/6.jpg',
    model: undefined
  },
  {
    type: 'SUV', image: '/types/7.jpg',
    model: undefined
  },
];



export interface ServiceItemProps {
  id: number;
  title: string;
  description: string;
  image: string;
}

export const servicesData: ServiceItemProps[] = [
  {
    id: 1,
    title: 'Car rental with driver',
    description: 'Enjoy a comfortable, safe, and hassle-free journey with our experienced and professional drivers.',
    image: '/service/1.png',
  },
  {
    id: 2,
    title: 'Luxury car rental',
    description: 'Rent our premium vehicles for special occasions or business trips and experience ultimate comfort and luxury.',
    image: '/service/2.png',
  },
  {
    id: 3,
    title: 'Airport Transfer',
    description: 'Ensure a smooth, timely, and comfortable transfer to and from the airport with our professional service.',
    image: '/service/3.png',
  },
  {
    id: 4,
    title: 'Safe car rental',
    description: 'Drive with confidence in our fully insured and well-maintained vehicles, ensuring a safe and reliable experience.',
    image: '/service/4.png',
  },
];


export interface BlogProps {
  title: string;
  image: string;
  date: string;
  href: string;
}

export const blogData: BlogProps[] = [
  {
    title: 'Discover the Best Urban Getaways for a Perfect Weekend Escape',
    date: 'September 27, 2024',
    image: '/types/1.jpg',
    href: '/',
},
{
    title: 'The Ultimate Road Trip Guide: Top Routes & Essential Tips',
    date: 'October 5, 2024',
    image: '/types/2.jpg',
    href: '/',
},
{
    title: 'Sustainable Travel: How to Explore the World Responsibly',
    date: 'October 15, 2024',
    image: '/types/3.jpg',
    href: '/',
},
{
    title: 'Luxury Escapes: Indulge in the World’s Most Exclusive Destinations',
    date: 'October 22, 2024',
    image: '/types/4.jpg',
    href: '/',
},

];


export interface LogoProps {
  image: string;
}

export const logoData: LogoProps[] = [
  { image: '/logo/1.png' },
  { image: '/logo/2.png' },
  { image: '/logo/3.png' },
  { image: '/logo/4.png' },
  { image: '/logo/5.png' },
  { image: '/logo/6.png' },
  { image: '/logo/7.png' },
  { image: '/logo/8.png' },
];



export interface MissionProps {
  [x: string]: ReactNode;
  image: string;
  title:string;
  keys:string;
}
export const missionData: MissionProps[] = [
  { image: '/types/1.jpg', title:"Our Vision", keys:"vision" },
];

export interface PeopleProps {
  image: string;
  fullname: string;
  role: string;
}

export const personData: PeopleProps[] = [
  { image: '/people/1.png', fullname: "Our Vision", role: "Senior Chauffeur" },
  { image: '/people/2.png', fullname: "Jane Doe", role: "Customer Service Manager" },
  { image: '/people/3.png', fullname: "John Smith", role: "Operations Director" },
  { image: '/people/4.png', fullname: "Emily Johnson", role: "Marketing Specialist" }
];



export interface testimonialsDataProps {
  stars: number;
  comment: string;
  author: string;
  image: string;
  location: string;
  date: string;
}

export const testimonialsData:testimonialsDataProps[] = [
  {
    stars: 5,
    comment: "Great service and friendly staff!",
    author: "John Doe",
    image: "/testimonials/1.png",
    location: "New York, USA",
    date: "2025-01-15"
  },
  {
    stars: 4,
    comment: "The car was clean and well-maintained.",
    author: "Jane Smith",
    image: "/testimonials/2.png",
    location: "Istanbul, Turkey",
    date: "2022-5-19"
  },
  {
    stars: 5,
    comment: "Highly recommend this company!",
    author: "Mike Johnson",
    image: "/testimonials/5.png",
    location: "Toronto, Canada",
    date: "2024-06-04"
  },
  {
    stars: 4,
    comment: "Affordable prices and excellent customer service.",
    author: "Emily Davis",
    image: "/testimonials/4.png",
    location: "London, UK",
    date: "2023-01-10"
  },
  {
    stars: 5,
    comment: "Competitive prices and outstanding customer support.",
    author: "John Snow",
    image: "/testimonials/6.jpg",
    location: "Tokyo, Japan",
    date: "2025-11-17"
  },
  {
    stars: 4,
    comment: "Competitive prices and outstanding customer support.",
    author: "Alice Martin",
    image: "/testimonials/7.jpg",
    location: "Sivas, Turkey",
    date: "2024-01-24"
  },

];


export interface accordionDataProps {
  value: string;
  question: string;
  answer: string;
}

// Data for the accordion
export const accordionData: accordionDataProps[] = [
  {
    value: "item-1",
    question: "Is the booking process easy to navigate?",
    answer: "Yes, it's intuitive.",
  },
  {
    value: "item-2",
    question: "Are the car options clearly displayed?",
    answer: "Yes, they're well organized.",
  },
  {
    value: "item-3",
    question: "Can users compare different car models?",
    answer: "Yes, a comparison tool is available.",
  },
  {
    value: "item-4",
    question: "Is the pricing transparent and easy to understand?",
    answer: "Yes, pricing is clear.",
  },
  {
    value: "item-5",
    question: "Is payment secure and simple?",
    answer: "Yes, secure payment options are offered.",
  },
  {
    value: "item-6",
    question: "Are customer reviews or ratings available for cars?",
    answer: "Yes, reviews are visible.",
  },
  {
    value: "item-7",
    question: "Can users easily find rental policies and terms?",
    answer: "Yes, policies are accessible.",
  },
  {
    value: "item-8",
    question: "Is customer support available (chat, phone, email)?",
    answer: "Yes, support is available.",
  },
];




export interface whyChooseUsDataProps {
  id: number;
  title: string;
  description: string;
  icon:string;
}


export const whyChooseUsData: whyChooseUsDataProps[] = [
  {
    id: 1,
    title: "Extensive Fleet Options",
    description:
      "A variety of vehicles, including economy, luxury, and family cars.",
      icon: "/service/1.png", 
    },
  {
    id: 2,
    title: "Convenient Locations",
    description:
      "Easy access at airports, city centers, and business districts.",
      icon: "/service/2.png", 
    },
  {
    id: 3,
    title: "Exceptional Customer Service",
    description:
      "24/7 support, transparent pricing, and flexible rental terms.",
      icon: "/service/3.png", 
    },
  {
    id: 4,
    title: "Reliability And Safety",
    description:
      "Regular inspections for a smooth and secure driving experience.",
    icon: "/service/4.png", 
  },
];
