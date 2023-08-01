import { HeroText } from "@/components/HeroText/HeroText";
import { Footer, ImageCover, Navbar } from "@/components/Shared";

import ImageOne from "../assets/images/img_1.jpg";
import ImageTwo from "../assets/images/img_2.jpg";
import ImageThree from "../assets/images/img_3.jpg";
import ImageFour from "../assets/images/img_4.jpg";
import ImageFive from "../assets/images/img_5.jpg";
import { RightArrow } from "@/assets/svg/Arrow";

const sectionData = [
  {
    title: "Home",
    subtitle: "Welcome to our website",
    img: ImageFive,
  },
  {
    title: "About Us",
    subtitle: "Learn more about our company",
    img: ImageTwo,
  },
  {
    title: "Services",
    subtitle: "Explore the services we offer",
    img: ImageThree,
  },
  {
    title: "Portfolio",
    subtitle: "Browse through our projects and works",
    img: ImageFour,
  },
  {
    title: "Contact",
    subtitle: "Get in touch with us",
    img: ImageOne,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="hero-container px-10 py-24">
        <HeroText />
      </div>

      <div className="relative z-50">
        {sectionData.map((content, index) => (
          <div
            className="sticky h-screen top-0 left-0 flex items-end sticky-section px-10 py-20"
            key={index}
          >
            <a className="group text-contents flex flex-col justify-start relative z-10 cursor-pointer trans">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={50}
                className="group-hover:translate-x-8 transition-all"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
              <h1 className="text-5xl font-medium uppercase tracking-tighter mt-4 mb-2">
                {content.title}
              </h1>
              <p className="tracking-tight">{content.subtitle}</p>
            </a>
            <ImageCover img={content.img} />
          </div>
        ))}
      </div>
      <Footer />
    </main>
  );
}
