const RoundedButton = ({ text, href }: { text: string; href?: string }) => {
  return (
    <a
      href={href}
      className='rounded-full bg-black dark:bg-white dark:text-black shadow-xl text-white px-5 py-2 font-display font-medium hover:cursor-pointer transition-colors'
    >
      {text}
    </a>
  );
};

export default RoundedButton;
