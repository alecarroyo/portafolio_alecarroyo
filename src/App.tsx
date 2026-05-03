import ProjectCard from './ProjectCard'
import { FaGithub } from "react-icons/fa";


const projects = [
  {
    name: 'AsoWheel',
    description: 'Enterprise raffle system with participant, winner, and absentee management ',
    tags: ['React', 'Tailwind', 'Vite'],
    image: '', // Add image path if available
    liveDemoUrl: 'https://asowheel.netlify.app/',
    icon: 'open_in_new',
  },
  {
    name: 'Puramente',
    description: 'A scalable e-commerce platform with shopping cart and payment integration.',
    tags: ['PHP', 'Javascript', 'Tailwind CSS'],
    image: '',
    liveDemoUrl: 'https://your-ecommerce-link.com',
    icon: 'shopping_cart',
  },
  

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
              <a>
                <button className="text-neutral-400 px-4 py-2 md:px-8 font-normal rounded-md text-xs md:text-base hover:bg-neutral-800 hover:font-semibold hover:text-white hover:border-yl-main  transition duration-300 ease-in-out hover:scale-105">
                  Home
                </button>
              </a>
              <a>
                <button className="text-neutral-400 px-4 py-2 md:px-8 font-normal rounded-md text-xs md:text-base hover:bg-neutral-800 hover:font-semibold hover:text-white hover:border-yl-main  transition duration-300 ease-in-out hover:scale-105">
                  Projects
                </button>
              </a>
              <a>
                <button className="text-neutral-400 px-4 py-2 md:px-8 font-normal rounded-md text-xs md:text-base hover:bg-neutral-800 hover:font-semibold hover:text-white hover:border-yl-main  transition duration-300 ease-in-out hover:scale-105">
                  Contact
                </button>
              </a>
            </div>

            {/* Botones Desktop */}


            <div className="flex text-2xl font-bold select-none">

            </div>



          </nav>


          <section className='flex justify-between items-center my-22'>

            {/* Texto */}
            <div className='px-15'>
              <h1 className='text-neutral-300 text-6xl md:text-7xl py-2 '>
                Hi. <span className='text-teal-400 font-Major-Mono'>Alec</span> Here!
              </h1>

              <p className='text-neutral-300 text-lg md:text-sm font-light my-2 pr-20'>
                Im a 21 year old software engineer from
                <span className='text-neutral-200 font-medium'> Costa Rica </span>,
                Full Stack Developer & UX/UI Designer. I build user friendly and scalable apps
              </p>

              {/* CONTENEDOR FLEX */}
              <div className="flex items-center gap-4 my-15">

                <a href="/resume.pdf" download>
                  <button className="flex items-center text-neutral-500 px-4 py-2 md:px-8 font-medium border border-neutral-400 rounded-md text-sm md:text-base hover:bg-neutral-800 hover:text-teal-400 hover:border-teal-400 transition duration-300 ease-in-out hover:scale-105">
                    Resume
                    <span className="material-symbols-outlined mx-2">
                      download
                    </span>
                  </button>
                </a>

                <button title='Email' className="flex items-center text-neutral-500 px-4 py-2 md:px-8 font-medium text-sm md:text-base hover:text-neutral-100 transition duration-300 ease-in-out hover:scale-105">
                  <span className="material-symbols-outlined mx-2">
                    mail
                  </span>

                </button>
                <FaGithub className='text-neutral-500 text-3xl hover:text-neutral-100 transition duration-300 ease-in-out hover:scale-105' />
              </div>
            </div>

            {/* Placeholder imagen */}
            <div className='hidden md:flex items-center justify-center mx-1.5'>
              <div className='w-84 h-84 rounded-2xl bg-neutral-800 border border-neutral-700 flex items-center justify-center rounded-full'>
                <span className='text-neutral-500 text-sm rounded-full'>
                  <img className='w-full h-full object-cover aspect-square rounded-full'
                    src="https://i.postimg.cc/rpFtnRPk/53646.png"
                    alt="" />
                </span>
              </div>
            </div>

          </section>

          <section className='py-10'>

            <div className="flex items-center gap-3 mb-10 text-neutral-300 font-light text-3xl md:text-2xl">
              <span>Featured Projects</span>
              <span className="material-symbols-outlined text-neutral-400">
                kid_star
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
                  icon={project.icon}
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
