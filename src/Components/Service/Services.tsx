import "./Services.css";

import ServiceCard from "./ServiceCard";

const data = [
  {
    id: 1,
    image:
      "https://storage.googleapis.com/cms-storage-bucket/0dbfcc7a59cd1cf16282.png",
    bgColor: "#ffd166",
    title: "Flutter",
    des: "Build Mobile App (Android/IOS) with Flutter",
  },
  {
    id: 2,
    image: "https://mvolkmann.github.io/blog/assets/dart-logo.png?v=1.0.21",
    bgColor: "#06d6a0",
    title: "Dart",
    des: "Build API, Backend, Console App, Bare bone Web App with Dart",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/practicaldev/image/fetch/s--gdQaWYIJ--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/vvsq4h7d5ol45lfbrzoy.png",
    bgColor: "#113ab2",
    title: "UX/UI",
    des: "Draw UI/UX for your business",
  },
  {
    id: 4,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
    bgColor: "#118ab2",
    title: "React Js",
    des: "Build FrontEnd Web App with React Js + Typescript.",
  },
];

const Services = () => {
  return (
    <section className="services container section" id="service">
      <h2 className="section__title">Services</h2>
      <div className="services__container grid">
        {data.map(({ title, id, image, des, bgColor }) => (
          <ServiceCard
            id={id}
            image={image}
            title={title}
            des={des}
            bgColor={bgColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
