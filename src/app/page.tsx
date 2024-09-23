import Image from "next/image";
import Navbar from "./components/Navbar";
import Mythumb from "/public/Mythumb.png";
import { ImHtmlFive } from "react-icons/im";
import { FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { SiCss3,SiJavascript,SiTailwindcss } from "react-icons/si";
import ProjectOne from "/public/ProjectOne.jpg";
import NumGuess from "/public/num-guess.jpg"
import MyHome from "/public/home.jpg"
import Footer from "./components/Footer";
export default function Home() {
  const projects = [
    {
      id: 1,
      title: "Text Editor",
      description: "Text Editor built with React! Having features of Bold & Italic for Styling your text, Text Alignment Options, Text Transformation to Upercase or lowercase, and many more.",
      image: ProjectOne,
      link: "https://fizasohail1.github.io/Text-Editor/",
    },
    {
      id: 2,
      title: "Traveling Website",
      description: "Built with HTML, Tailwind CSS, and JavaScript, this fully responsive website ensures a seamless experience across all devices, showcasing the beauty of beaches at your fingertips.",
      image: Mythumb,
      link: "https://fizasohail1.github.io/Travel-website/",
    },
    {
      id: 3,
      title: " Number Guessing Game",
      description: "Check out this cool Number Guessing Game I created using HTML, Tailwind CSS, and JavaScript!",
      image: NumGuess,
      link: "https://fizasohail1.github.io/Num-guessing-game/",
    },
  ];
  return (
    <>
    <div className="">
       <Navbar/>
         <div id="Home" className="mx-12 ">
            <div className="flex-col flex md:flex-row md:justify-between items-center text-left  font-serif text-lg text-white pt-32 md:py-28">
                 <div className=" text-md md:text-2xl text-white font-serif mx-auto">
                       <h3 className=" text-2xl md:text-3xl">Hi </h3> 
                       <h1 className="text-3xl md:text-4xl">I am <span className="text-orange-700 font-extrabold">Fiza Sohail<br/></span> a Web Developer</h1>
                        <p className="text-white md:w-3/5 lg:w-4/5 text-sm sm:text-base md:text-lg mt-4 mr-10 leading-normal ">
                        Welcome to my personal portfolio.I am a web developer with a strong background in computer science and a passion for frontend development. I specialize in building responsive and visually appealing websites using HTML, CSS, JavaScript, and TypeScript, with a focus on Tailwind CSS. Currently, I am  honing my skills in React.js and Next.js, eager to transform creative ideas into dynamic web experiences.
                        </p>
            <a href="/contact" className="bg-orange-600 hover:bg-white text-black text-sm  my-10 justify-center flex md:text-lg text-center  rounded-full p-2 font-bold w-44 h-full animate-bounce">Contact Me</a>
            </div>
                <div className="border-orange-700 w-[350px] md:w-[1500px] lg:w-[1000px]  bg-black border-x-4 border-y-4 flex justify-center items-center rounded-full h-[350px] md:h-[300px] lg:h-[300px]  overflow-hidden my-12">
                    <Image src={MyHome}
                     alt="abc"
                     objectFit="cover"
                     objectPosition="center" className=""/>
                </div>  
            </div>

          
         </div>
        </div>
    <div className="secoundsec bg-neutral-800">
    <section className="mt-10 md:my-20 ">
      <h2 className="text-center text-3xl font-bold mb-8 text-white ">
        Recent Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-10 my-16">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-gray-300 rounded-lg shadow-lg overflow-hidden border-x-4 border-y-4 border border-white border-solid transition-opacity hover:duration-300">
            <div className="relative w-full h-44">
              <Image
                src={project.image}
                alt={project.title}
                layout="fill" 
                objectFit="cover" 
                className="rounded-t-lg"
              />
            </div>
            <div className="p-2">
              <h3 className="text-xl text-black font-bold mb-2">{project.title}</h3>
              <p className="text-black">{project.description}</p>
              <a href={project.link} className="block mt-4 font-bold hover:text-black hover:duration-150 text-orange-700">
                View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
    <a href="https://github.com/FizaSohail1?tab=repositories" className="bg-orange-600 hover:bg-white text-black text-sm  my-10 mx-auto justify-center flex md:text-lg text-center items-center rounded-full p-2 font-bold w-44 h-full animate-bounce">View More</a>
   
    </div>
    <section id="skills" className="md:ml-32 py-20">
          <div className="container ">
            <h2 className="text-2xl md:text-4xl text-center mb-8">My Skills</h2>
            <div className="flex md:justify-center">
              <ul className="mx-auto">
                <li className=" text-white shadow-md "><ImHtmlFive className="text-3xl text-orange-600"/></li>
                <div className=" bg-gray-300 w-[300px]  md:w-[600px]  text-right rounded-full my-7">        
                 <div className="bg-orange-700  w-[95%] text-right text-sm font-bold ">95%</div>
                </div>                 
                <li className=" text-white shadow-md"><SiCss3 className="text-3xl text-blue-500"/></li>
                <div className=" bg-gray-300  w-[300px]  md:w-[600px] text-right rounded-full my-7">        
                 <div className="bg-orange-700  w-[90%] text-right text-xs font-bold">90%</div>
                </div> 
                <li className=" text-white shadow-md">< SiJavascript className="text-3xl text-yellow-200"/></li>
                <div className=" bg-gray-300 w-[300px]  md:w-[600px] text-right rounded-full my-5">        
                 <div className="bg-orange-700  w-[80%] text-right text-xs font-bold">80%</div>
                </div> 
                <li className=" text-white shadow-md"><FaReact className="text-3xl text-blue-500"/></li>
                <div className=" bg-gray-300  w-[300px]  md:w-[600px] text-right rounded-full my-5">        
                 <div className="bg-orange-700  w-[45%] text-right text-xs font-bold">40%</div>
                </div> 
                <li className=" text-white shadow-md"><RiNextjsFill className="text-3xl"/></li>
                <div className=" bg-gray-300  w-[300px]  md:w-[600px] text-right rounded-full my-5">        
                 <div className="bg-orange-700  w-[35%] text-right text-xs font-bold">30%</div>
                </div> 
                <li className=" text-white shadow-md"><SiTailwindcss className="text-3xl text-blue-400"/></li>
                <div className=" bg-gray-300  w-[300px]  md:w-[600px] text-right rounded-full my-5">        
                 <div className="bg-orange-700  w-[75%] text-right text-xs font-bold">75%</div>
                </div> 
              </ul>
            </div>
          </div>
        </section>
      
    <Footer/>
      </>
  );
}
