import './Home.css';
import { Box, Stack, Typography, Button, Divider, Chip, Icon } from '@mui/material';
import MyPhoto from '../../assets/my-photo.jpg';

/**
 * Color palette & layout constants
 */
const COLORS = { bg: '#f5f5f5', card: '#ffffff' } as const;
const SPACING = 3;
const BORDER_RADIUS = 5;

/**
 * Data sources
 */
const MY_CONTACT = [
  { icon: 'fa-brands fa-github', name: 'Github', value: '@chhunvirak' },
  { icon: 'fa-brands fa-telegram', name: 'Telegram', value: '@chhunvirak' },
  { icon: 'fa-brands fa-facebook', name: 'Facebook', value: 'Chhoeung Chhunvirak' },
  { icon: 'fa-brands fa-instagram', name: 'Instagram', value: '@rakkk...' },
  { icon: 'fa-brands fa-x-twitter', name: 'Twitter', value: 'Chhoeung ChhunVirak' },
  { icon: 'fa-brands fa-medium', name: 'Medium', value: 'Chhoeung Chhunvirak' },
] as const;

const MY_SKILLS = [
  { icon: 'fa-brands fa-dart-lang', name: 'Dart' },
  { icon: 'fa-brands fa-flutter', name: 'Flutter' },
  { icon: 'fa-brands fa-square-js', name: 'JavaScript' },
  // { icon: 'fa-brands fa-node-js', name: 'NodeJS' },
  { icon: 'fa-brands fa-react', name: 'ReactJS' },
  { icon: 'fa-brands fa-figma', name: 'Figma' },
  // { icon: 'fa-brands fa-python', name: 'Python' },
  // { icon: 'fa-brands fa-docker', name: 'Docker' },
  // { icon: 'fa-brands fa-android', name: 'Android' },
  // { icon: 'fa-brands fa-apple', name: 'iOS' },
] as const;

const MY_EXPERIENCE = [
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
    id: 3,
    image: 'https://images.khmer24.co/profiles/pictures/22-01-06/p-15350015_1641444577_ab.png',
    bgColor: '#ffd166',
    title: 'Z1 Flexible Solution - Senior Flutter Developer',
    des: 'Develop Mobile Application, Train Internship, Flutter',
  },
  {
    id: 4,
    image: 'https://bakong.nbc.gov.kh/en/images/partners/bic.png',
    bgColor: '#ffd166',
    title: 'Software Developer',
    des: 'Mobile Banking, API',
  },
] as const;

/**
 * Shared styles
 */
const boxStyle = {
  width: '100%',
  backgroundColor: COLORS.card,
  borderRadius: BORDER_RADIUS,
  padding: SPACING,
};

/**
 * Re-usable UI helpers
 */
const TitleChip = ({ title, margin = 2 }: { title: string; margin?: number }) => (
  <Chip label={title} sx={{ mb: margin, fontSize: 16, fontWeight: 'bold' }} />
);

/**
 * Contact section
 */
const ContactItem = ({ icon, name, value }: { icon: string; name: string; value: string }) => (
  <Stack sx={{ ...boxStyle }} alignItems="start" justifyContent="start" gap={1}>
    <Icon className={icon} />
    <Typography variant="h2" component="h1">
      {name}
    </Typography>
    <Typography variant="body2">{value}</Typography>
  </Stack>
);

const ContactComponent = () => (
  <Stack
    sx={{
      width: '100%',
      flexDirection: { xs: 'column', sm: 'row' },
      gap: SPACING,
      px: 5,
      pb: 5,
    }}
  >
    {MY_CONTACT.map((contact, index) => (
      <ContactItem key={index} {...contact} />
    ))}
  </Stack>
);

/**
 * Experience section
 */
const ExperienceItem = ({
  name,
  position,
  date,
}: {
  name: string;
  position: string;
  date: string;
}) => (
  <Stack direction="row" width="100%" alignItems="end">
    <Stack direction="column" flexGrow={1} gap={0.5} width="50%">
      <Typography variant="subtitle1">{name}</Typography>
      <Typography variant="subtitle2">{position}</Typography>
    </Stack>
    <Typography variant="subtitle1">{date}</Typography>
  </Stack>
);

const ExperienceComponent = () => (
  <Box
    sx={{
      ...boxStyle,
      aspectRatio: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
    }}
    flex={2}
  >
    <TitleChip title="Experiences" />
    <Stack
      gap={2}
      flexGrow={1}
      width="100%"
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {MY_EXPERIENCE.map((exp) => (
        <ExperienceItem key={exp.id} name={exp.title} position={exp.des} date="2023 - Present" />
      ))}
    </Stack>
    <Button variant="outlined">View Resume</Button>
  </Box>
);

const SkillItem = ({ icon, name }: { icon: string; name: string }) => (
  <Stack direction="row" width="100%" alignItems="center" gap={1}>
    <Icon className={icon} />
    <Typography variant="subtitle1">{name}</Typography>
  </Stack>
);

/**
 * Skills section – styled the same way as Experiences
 */
const SkillsComponent = () => (
  <Box
    sx={{
      ...boxStyle,
      aspectRatio: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'start',
    }}
    flex={2}
  >
    <TitleChip title="Skills" />
    <Stack
      gap={2}
      flexGrow={1}
      width="100%"
      divider={<Divider orientation="horizontal" flexItem />}
    >
      {MY_SKILLS.map((skill, index) => (
        <SkillItem key={index} {...skill} />
      ))}
    </Stack>
  </Box>
);

/**
 * Layout columns
 */
const Left = () => (
  <Stack sx={{ width: '100%', flexDirection: 'column', gap: SPACING }}>
    <SkillsComponent />
    <Box className="card" flex={1} />
    <Box className="card" gap={SPACING} />
  </Stack>
);

const Middle = () => (
  <Stack
    sx={{
      width: '100%',
      flexDirection: 'column',
      gap: SPACING,
      order: { xs: -1, md: 0 }, // Show on top in small screens
    }}
  >
    {' '}
    <Box
      sx={{
        ...boxStyle,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
      }}
      flex={1}
    >
      <TitleChip title="About me" />
      <Typography variant="subtitle2">
        I am a Flutter Mobile App Developer with expertise in ReactJS and Spring Boot, dedicated to
        creating seamless, intuitive digital experiences.
      </Typography>
    </Box>
    <Stack
      sx={{
        ...boxStyle,
        aspectRatio: 1,
        order: {
          xs: -1,
          md: 0,
        },
      }}
      flex={2}
      gap={SPACING}
      alignItems="start"
    >
      <TitleChip title="Current User" margin={0} />
      <Typography variant="h2">CHHOEUNG CHHUNVIRAK</Typography>

      <Box
        sx={{
          height: '100%',
          width: '100%',
          backgroundImage: `url(${MyPhoto})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: BORDER_RADIUS,
        }}
      />
    </Stack>
    <Box
      sx={{
        ...boxStyle,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
      }}
      flex={1}
    >
      <TitleChip title="About me" />
      <Typography variant="subtitle2">
        I am a Flutter Mobile App Developer with expertise in ReactJS and Spring Boot, dedicated to
        creating seamless, intuitive digital experiences.
      </Typography>
    </Box>
  </Stack>
);

const Right = () => (
  <Stack sx={{ width: '100%', flexDirection: 'column', gap: SPACING }}>
    <Box className="card" flex={1} />
    <Box className="card" flex={1} />
    <ExperienceComponent />
  </Stack>
);

/**
 * Root component
 */
const Home = () => (
  <Stack direction="column" id="home" sx={{}}>
    <Stack
      sx={{
        width: '100%',
        background: 'rgba(255, 255, 255, 0)',
        flexDirection: { xs: 'column', md: 'row' },
        gap: SPACING,
        p: { xs: 3, md: 5 },
      }}
    >
      <Left />
      <Middle />
      <Right />
    </Stack>

    <ContactComponent />
  </Stack>
);

export default Home;
