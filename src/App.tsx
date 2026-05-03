import ProjectCard from './ProjectCard'
import { FaLinkedin } from "react-icons/fa";


const projects = [
  {
    name: 'AsoWheel',
    description: 'Enterprise raffle system with participant, winner, and absentee management ',
    tags: ['React', 'Tailwind', 'Vite'],
    image: 'https://i.postimg.cc/HnRDhLCD/Captura-de-pantalla-2026-02-12-191546.png', // Add image path if available
    liveDemoUrl: 'https://asowheel.netlify.app/',
    icon: 'open_in_new',
    githubUrl: 'https://github.com/AlecArroyo/AsoWheel', // Replace with actual repo
  },
  {
    name: 'Puramente',
    description: 'An interactive web platform that reimagines traditional education through engaging gamified learning experiences for students.',
    tags: ['Laravel', 'Typescript', 'Tailwind CSS'],
    image: 'https://i.postimg.cc/pV7wxygM/Captura-de-pantalla-2025-10-06-100302.png',
    liveDemoUrl: 'https://puramente.vercel.app/',
    icon: 'shopping_cart',
    githubUrl: 'https://github.com/tallermulti2025-PM/PuraMente---Desarrollo', // Replace with actual repo
  },
  {
    name: 'Lucha contra Don Mate',
    description: 'A child-focused video game designed to help children learn math through creative and interactive gameplay. Developed as part of the Puramente project ',
    tags: ['CSS', 'Javascript', 'Tailwind CSS'],
    image: 'https://i.postimg.cc/DfMPMXR0/Captura-de-pantalla-2025-09-20-180239.png',
    liveDemoUrl: 'https://juegomatematicapuramente.netlify.app/',
    icon: 'shopping_cart',
    githubUrl: 'https://github.com/AlecArroyo/JuegoMatePuramente', // Replace with actual repo
  },
];


// Array escalable de links para la navbar
const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
];

function App() {
  return (
    <>
      {/* Contenedor principal con relative y overflow-hidden para contener las luces */}
      <section className="relative min-h-screen bg-neutral-950 font-Quicksand w-full overflow-hidden">

        {/* --- EFECTO DE LUZ (EL RESPLANDOR) --- */}
        {/* Luz blanca/suave en la esquina superior derecha (como en la foto) */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-neutral-900 rounded-full blur-[120px] pointer-events-none"></div>

        {/* Luz turquesa opcional en el lado izquierdo para dar contraste con tu color de marca */}
        <div className="absolute top-1/2 -left-34 w-80 h-80 bg-teal-950/55 rounded-full blur-[100px] pointer-events-none"></div>
        {/* ------------------------------------- */}

        <div className="max-w-5xl mx-auto relative z-10"> {/* z-10 para estar sobre la luz */}

          <nav className="h-20 flex items-center justify-between px-4 sm:px-6 md:px-10 border-neutral-900 border-b">
            {/* Logo */}
            <div className="hidden md:flex items-center gap-4">
              {navLinks.map((link) => (
                <a key={link.label} href={link.href}>
                  <button className="text-neutral-400 px-4 py-2 md:px-8 font-normal rounded-md text-xs md:text-base hover:bg-neutral-800 hover:font-semibold hover:text-teal-400 transition duration-300 ease-in-out">
                    {link.label}
                  </button>
                </a>
              ))}
            </div>

            {/* Botones Desktop */}

            <div className="flex text-2xl font-bold select-none">
              {/* ...puedes agregar aquí otros elementos si es necesario... */}
            </div>
          </nav>


          <section className='flex justify-between items-center my-20'>

            {/* Texto */}
            <div className='px-15'>
              <h1 className='text-neutral-300 text-6xl md:text-7xl py-2 '>
                Hi. <span className='text-teal-400 font-Major-Mono'>Alec</span> Here!
              </h1>

              <p className='text-neutral-300 text-lg md:text-smx font-light my-2 pr-20'>
                Im a 21 year old software engineer from
                <span className='text-neutral-200 font-medium'> Costa Rica </span>,
                Full Stack Developer & UX/UI Designer. I build user friendly and scalable apps
              </p>

              {/* CONTENEDOR FLEX */}
              <div className="flex items-center gap-4 my-15">

                <a href="/Alec_Arroyo_Software_Engineer_2026.pdf" download>
                  <button className="flex items-center text-neutral-200 px-4 py-2 md:px-8 font-medium border border-neutral-400 rounded-md text-sm md:text-base hover:bg-neutral-950 hover:text-teal-400 hover:border-teal-400 transition duration-300 ease-in-out hover:scale-105">
                    Resume
                    <span className="material-symbols-outlined mx-2">
                      download
                    </span>
                  </button>
                </a>

                <div className='flex items-center gap-4 my-0 p-0 mx-2'>
                  <a
                    href="https://www.linkedin.com/in/alec-arroyo-badilla-developer"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin className='text-neutral-500 text-3xl hover:text-neutral-100 transition duration-300 ease-in-out hover:scale-105' />
                  </a>
                  <a title='Email' href='mailto:alec.arroyo@ucr.ac.' className="flex items-center text-neutral-500 font-medium text-sm md:text-base hover:text-neutral-100 transition duration-300 ease-in-out hover:scale-105">
                    <span className="material-symbols-outlined mx-2">
                      mail
                    </span>
                  </a>



                </div>


              </div>
            </div>

            {/* Placeholder imagen */}
            <div className='hidden md:flex items-center justify-center mx-1.5'>
              <div className='w-84 h-84 rounded-full border border-neutral-700 relative group overflow-hidden hover:scale-125 transform duration-300 ease-in-out'>

                {/* Imagen */}
                <img
                  className='w-full h-full object-cover aspect-square rounded-full transition duration-300 ease-in-out group-hover:blur-3xl '
                  src="https://i.postimg.cc/rpFtnRPk/53646.png"
                  alt=""
                />

                {/* Overlay texto */}
                <div className='absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300'>
                  <div>
                    <p className='text-white text-center px-6 text-md font-medium'>
                      About Me
                    </p>
                    <p className='text-white text-center px-6 text-xs font-light'>
                      Since i was a kid i l've loved everything related to creating and designing. I always give my best in every project im working on.
                    </p>
                  </div>

                </div>

              </div>
            </div>

          </section>

          <section id="projects" className='py-10'>

            <div className="flex items-center gap-3 mb-10 text-neutral-200 font-normal text-3xl md:text-2xl">
              <span>Featured Projects</span>
              <span className="material-symbols-outlined text-neutral-400">
                star
              </span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, idx) => (
                <ProjectCard
                  key={idx}
                  name={project.name}
                  description={project.description}
                  tags={project.tags}
                  image={project.image}
                  liveDemoUrl={project.liveDemoUrl}
                  githubUrl={project.githubUrl}
                />
              ))}
            </div>



          </section>

        </div>

      </section>



    </>
  )
}

export default App
