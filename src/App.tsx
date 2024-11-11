import Avatar from './assets/images/avatar-jessica.jpeg'
const App = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      link: 'https://github.com/jessica-randall',
    },
    {
      name: 'Frontend Mentor',
      link: 'https://www.frontendmentor.io/profile/jessica-randall',
    },
    {
      name: 'LinkedIn',
      link: 'https://www.linkedin.com/in/jessica-randall-a4a1b61b0/',
    },
    {
      name: 'Twitter',
      link: 'https://twitter.com/jessica_randall',
    },
    {
      name: 'Instagram',
      link: 'https://www.instagram.com/jessica.randall/',
    },
  ]
  return (
    <main className="flex flex-col bg-[#1F1F1F] sm:p-10 p-6 gap-6  rounded-xl my-[7.75rem] lg:my-[10.88rem]">
      {/* {/* Profile */}
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <img src={Avatar} alt="Avatar" className="size-[5.5rem] rounded-full" />
        <div className="">
          <h1 className='text-2xl font-semibold leading-9 text-white'>Jessica Randall</h1>
          <h2 className='text-sm font-bold leading-[1.3125rem] text-[#C4F82A]'>London, United Kingdom</h2>
        </div>
        <p className="text-sm font-normal leading-[1.3125rem] text-white">"Front-end developer and avid reader."</p>
      </div>
      {/* Social Links */}
      <div className="flex flex-col items-center justify-center gap-4">
        {
          socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-[17.44rem] sm:w-[19rem] bg-[#333] rounded-lg p-3 text-sm font-bold cursor-pointer transition-colors duration-300 ease-out leading-[1.3125rem] text-white hover:text-[#333] hover:bg-[#C4F82A]"
            >
              {link.name}
            </a>
          ))
        }
      </div>
    </main>
  )
}

export default App
