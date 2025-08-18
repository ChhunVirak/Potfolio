import './Experience.css';

const data = [
  {
    id: 1,
    image: 'https://images.khmer24.co/profiles/pictures/22-01-06/p-15350015_1641444577_ab.png',
    bgColor: '#ffd166',
    title: 'Z1 Flexible Solution - Internship',
    des: 'Intern Mobile App Development, Flutter',
  },
  {
    id: 2,
    image: 'https://images.khmer24.co/profiles/pictures/22-01-06/p-15350015_1641444577_ab.png',
    bgColor: '#ffd166',
    title: 'Z1 Flexible Solution - Mobile App Developer',
    des: 'Develop Mobile Application, Flutter',
  },
  {
    id: 2,
    image: 'https://images.khmer24.co/profiles/pictures/22-01-06/p-15350015_1641444577_ab.png',
    bgColor: '#ffd166',
    title: 'Z1 Flexible Solution - Senior Flutter Developer',
    des: 'Develop Mobile Application, Train Internship, Flutter',
  },
  {
    id: 2,
    image: 'https://bakong.nbc.gov.kh/en/images/partners/bic.png',
    bgColor: '#ffd166',
    title: 'Software Developer',
    des: 'Mobile Banking, API',
  },
];

const Experience = () => {
  return (
    <section className="experience container section" id="experience">
      <h2 className="section__title">Experiences</h2>
      <div className="experiences__container grid">
        {data.map(({ id, title, des, image }) => (
          <div className="experiences__card grid" key={id}>
            <div className="experiences__image grid">
              <img src={image} />
            </div>

            <div className="experiences__title">
              <h3 className="experiences__name">{title}</h3>
              <p className="experiences__description">{des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
