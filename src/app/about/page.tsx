import React from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
function page() {
  return (
<>
<Navbar/>
      <section id="about" >
      <div className="  text-gray-200 mb-5 p-5">
            <div className="text-left ">
                <h1 className="font-serif text-2xl  md:text-3xl mt-20 text-center  ">About Me</h1>
                <div className="text-sm mt-10 w-4/6 mx-auto justify-center md:text-lg">
                Hello, I am Fiza Sohail!<br/>With a background in computer science, I have embarked on an exciting journey as a web developer, specializing in frontend development. My passion for technology and creativity drives me to explore new horizons in this dynamic field, where I am already proficient in essential languages and tools such as <span className="text-orange-700">HTML</span> , <span className="text-orange-700">CSS</span>, <span className="text-orange-700">Javascript/Typescript</span >.
                    <br/>In addition to these core skills, I have also honed my expertise in <span className="text-orange-700">Tailwind CSS</span>, which empowers me to create visually appealing and responsive designs with efficiency. This combination of technical knowledge and aesthetic sensibility allows me to craft web experiences that are not only functional but also engaging and user-friendly.<br/><br/>Currently, I am delving deeper into the world of <span className="text-orange-700">React.js</span> and <span className="text-orange-700">Next.js</span>, two powerful frameworks that are revolutionizing frontend development. As I continue to explore and master these technologies, I am eager to apply my growing skillset to innovative projects that push the boundaries of web design and functionality.<br/><br/>
                    My enthusiasm for learning and staying updated with the latest trends in the industry fuels my commitment to continuous improvement. I am passionate about transforming creative ideas into reality and am excited to contribute to the web development community through meaningful and impactful work.
            </div>
            </div>
        </div>
        <a href="/contact" className="bg-orange-600 hover:bg-white text-black text-sm  my-10 mx-auto justify-center flex md:text-lg text-center items-center rounded-full p-2 font-bold w-44 h-full animate-bounce">Contact Me</a>

        </section>
        <Footer/>
    </>   
  )
}

export default page
