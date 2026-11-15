import type { TimelineItem } from '../../data/portfolio';

/** Date-on-the-left rows separated by hairlines, used by Experience, Recognition and Education. */
const Timeline = ({ items }: { items: TimelineItem[] }) => (
  <ol className='m-0 list-none p-0'>
    {items.map((item, i) => (
      <li
        key={`${item.date}-${item.title}`}
        className={`group flex flex-wrap gap-x-8 gap-y-1.5 border-line ${i === 0 ? 'pb-9' : i === items.length - 1 ? 'pt-9' : 'py-9'} ${i < items.length - 1 ? 'border-b' : ''}`}
      >
        <span className='basis-[150px] shrink-0 grow-0 font-mono text-[13px] leading-[1.85] text-muted'>
          {item.date}
        </span>
        <div className='flex min-w-0 grow basis-[360px] flex-col gap-1.5'>
          <h3 className='m-0 text-[17px] font-medium underline-offset-4 decoration-1 group-hover:underline'>
            {item.link ? (
              <a href={item.link} target='_blank' rel='noopener noreferrer'>
                {item.title}
                <span className='sr-only'> (opens in a new tab)</span>
              </a>
            ) : (
              item.title
            )}
          </h3>
          {item.description && <p className='m-0 max-w-xl text-muted'>{item.description}</p>}
          {item.items && item.items.length > 0 && (
            <ul className='mt-2 mb-0 flex list-none flex-col gap-1.5 p-0'>
              {item.items.map((entry) => (
                <li key={entry} className='flex gap-3'>
                  <span aria-hidden='true' className='mt-[0.7em] h-1 w-1 shrink-0 rounded-full bg-muted' />
                  <span>{entry}</span>
                </li>
              ))}
            </ul>
          )}
          {item.images && item.images.length > 0 && (
            <ul className='mt-4 mb-0 grid list-none grid-cols-3 gap-2 p-0 sm:grid-cols-4'>
              {item.images.map((img) => (
                <li key={img.src}>
                  <a
                    href={img.src}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='block aspect-[4/3] overflow-hidden rounded-md border border-line bg-chip'
                  >
                    <img
                      src={img.src}
                      alt={img.alt}
                      loading='lazy'
                      className='h-full w-full object-cover transition-transform duration-300 hover:scale-105'
                    />
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </li>
    ))}
  </ol>
);

export default Timeline;
