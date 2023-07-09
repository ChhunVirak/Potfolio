import "./Archievement.css";

const data = [
  {
    id: 1,
    image:
      "https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/a1/0a/df/a10adf7d-3e6c-edd6-c5bf-24e711fafb8c/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg",
    bgColor: "#ffd166",
    title: "CiC App",
    des: "Digital Plateform",
  },
  {
    id: 2,
    image:
      "https://media.licdn.com/dms/image/D4D12AQH7k7RQkcOKEg/article-cover_image-shrink_720_1280/0/1687085394712?e=2147483647&v=beta&t=0Ehb3OXJ1XdmvgC3YvdX-z7rqTMQE_paWCRqG-1SNkY",
    bgColor: "#ffd166",
    title: "Json to Freezed Class",
    des: "A freezed Class Generator using json data.",
  },
  {
    id: 2,
    image: "https://svgsilh.com/svg/312334.svg",
    bgColor: "#ffd166",
    title: "SVG Generator",
    des: "Fix SVG problem",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1305960836/vector/mentor-and-mentee-in-workplace-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=9vQ8Hd9QLCiK6L9G90ebJU9H6w3djFKrw2NHuG9AMXA=",
    bgColor: "#ffd166",
    title: "Internship Trainer",
    des: "8 tranies passed",
  },
];

const Archievement = () => {
  return (
    <section className="archievement container section" id="archievement">
      <h2 className="section__title">Archievements</h2>
      <div className="archievements__container grid">
        {data.map(({ id, title, des, image }) => (
          <div className="archievements__card grid" key={id}>
            <div className="archievements__image grid">
              <img src={image} />
            </div>

            <div className="archievements__title">
              <h3 className="archievements__name">{title}</h3>
              <p className="archievements__description">{des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Archievement;
