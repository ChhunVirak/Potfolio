import './Archievement.css';

const data = [
  {
    id: 1,
    image:
      'https://play-lh.googleusercontent.com/XtvDfLajZHVuTKn5fAxCDupl8SrfRSH-hzdlUotB8_OYKqYaMDiiWNfI-JgSOJIFlKoR',
    bgColor: '#ffd166',
    title: 'BIC Mobile V3',
    des: 'Mobile Banking',
  },
  {
    id: 1,
    image:
      'https://play-lh.googleusercontent.com/XtvDfLajZHVuTKn5fAxCDupl8SrfRSH-hzdlUotB8_OYKqYaMDiiWNfI-JgSOJIFlKoR',
    bgColor: '#ffd166',
    title: 'RDB Mobile',
    des: 'Mobile Banking',
  },
  {
    id: 2,
    image:
      'https://is4-ssl.mzstatic.com/image/thumb/Purple116/v4/a1/0a/df/a10adf7d-3e6c-edd6-c5bf-24e711fafb8c/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/512x512bb.jpg',
    bgColor: '#ffd166',
    title: 'CiC App',
    des: 'Digital Plateform, Innovative Financing Solution, Mobile App',
  },
  {
    id: 3,
    image: 'https://cdn3d.iconscout.com/3d/premium/thumb/convert-3-d-file-5379906-4498386.png',
    bgColor: '#ffd166',
    title: 'Dart Json Tools',
    des: 'A Tools for developer to generate Dart Data Model, Entity class from Json.',
  },
  {
    id: 4,
    image: 'https://svgsilh.com/svg/312334.svg',
    bgColor: '#ffd166',
    title: 'SVG Generator (BETA)',
    des: 'Fix SVG problem not support on Flutter',
  },
  {
    id: 5,
    image:
      'https://media.istockphoto.com/id/1305960836/vector/mentor-and-mentee-in-workplace-rgb-color-icon.jpg?s=612x612&w=0&k=20&c=9vQ8Hd9QLCiK6L9G90ebJU9H6w3djFKrw2NHuG9AMXA=',
    bgColor: '#ffd166',
    title: 'Internship Trainer',
    des: '8 tranies passed',
  },
];

const Archievement = () => {
  return (
    <section className="archievement container section" id="archievement">
      <h2 className="section__title">Archievements</h2>
      <div className="archievements__container grid">
        {data.map((archievement) => (
          <div className="archievements__card grid" key={archievement.id}>
            <div className="archievements__image grid">
              <img src={archievement.image} />
            </div>

            <div className="archievements__title">
              <h3 className="archievements__name">{archievement.title}</h3>
              <p className="archievements__description">{archievement.des}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Archievement;
