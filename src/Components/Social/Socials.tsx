import { CONTACT_LINKS, RESUME_URL } from '../../data/portfolio';

const Contact = () => (
  <section
    id='contact'
    aria-labelledby='contact-h'
    className='mt-[88px] flex flex-col gap-9 pt-14 pb-16 md:mt-36 md:pt-[72px] md:pb-20'
  >
    <h2
      id='contact-h'
      className='m-0 max-w-[44rem] text-[clamp(2rem,4.5vw,3.25rem)] leading-[1.08] font-semibold tracking-[-0.035em]'
    >
      Have an idea worth building? I'd love to hear about it.
    </h2>
    <ul aria-label='Contact links' className='m-0 flex list-none flex-wrap gap-x-8 gap-y-3 p-0'>
      {CONTACT_LINKS.map(({ label, href }) => (
        <li key={label}>
          <a
            className='link-ul'
            href={href}
            {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {label} ↗
          </a>
        </li>
      ))}
      <li>
        <a className='link-ul' href={RESUME_URL} download>
          Résumé ↓
        </a>
      </li>
    </ul>
  </section>
);

export default Contact;
