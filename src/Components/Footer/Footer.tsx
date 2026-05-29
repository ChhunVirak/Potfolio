const Footer = () => {
  return (
    <div className='mt-4 w-screen min-h-[20vh] border-t border-gray-100 flex flex-col justify-end p-[5%] gap-2'>
      <ul>
        <li>
          <a className='flex items-center gap-1 text-sm' href=''>
            <i className='fa-brands fa-github'></i>
            <p className='underline'>Source Code</p>
          </a>
        </li>
      </ul>
      <p className='font-light text-sm'>
        Copyright © 2026 by Chhoeung Chunvirak.
      </p>
    </div>
  );
};

export default Footer;
