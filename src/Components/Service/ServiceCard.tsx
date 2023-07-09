interface ServiceCardInterface {
  id: string | number;
  image: string;
  title: string;
  des: string;
  bgColor: string;
}

const ServiceCard = ({
  id,
  image,
  title,
  des,
  bgColor,
}: ServiceCardInterface) => {
  return (
    <div
      className="services__card"
      key={id}
      style={{
        backgroundColor: bgColor,
      }}
    >
      <img src={image} alt="" className="services__image" />
      <h3 className="services__title">{title}</h3>
      <p className="services__description">{des}</p>
    </div>
  );
};

export default ServiceCard;
