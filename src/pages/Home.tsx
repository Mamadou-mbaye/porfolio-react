import { startTransition, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { lazy } from "react";
const About = lazy(() => import("../components/About"));
const Portfolio = lazy(() => import("../components/Portfolio"));
const Skills = lazy(() => import("../components/Skills"));
const Tecnologies = lazy(() => import("../components/Tecnologies"));

/*const area_form = document.getElementById("area-form") as HTMLFormElement;
const full_name = document.getElementById("full-name") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const textarea = document.getElementById("textarea") as HTMLInputElement;
const submit_msg = document.getElementById("submit-msg") as HTMLButtonElement;

const isEmailValid = (email: string): boolean => {
  // Regex per validare un indirizzo email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const handleMessage = (): void => {
  submit_msg.addEventListener("click", (event) => {
    const full_name_value = full_name.value.trim();
    const email_value = email.value.trim();
    const textarea_value = textarea.value.trim();

    const msg_input = [full_name, email, textarea];

    const isFullNameValid = full_name_value !== "";
    const isEmailValidFlag = isEmailValid(email_value);
    const isTextareaValid = textarea_value !== "";
    event.preventDefault();
    if (!isFullNameValid || !isEmailValidFlag || !isTextareaValid) {
      msg_input.forEach((element) => {
        if (element.value.trim() === "") {
          element.classList.remove("bg-green-400");
          element.classList.add("bg-red-400");
        } else {
          element.classList.remove("bg-red-400");
          element.classList.add("bg-green-400");
        }
      });
      alert("Please enter valid values in all fields.");
    } else {
      alert("Your message has been sent successfully!");
    }
  });
};
const RegisterMsg = async (name: string, email: string, msg: string) => {
  area_form.addEventListener("submit", () => {});
  alert(`Fullname:${name} email:${email} message:${msg}`);
};
handleMessage();

*/
const Home = () => {
  const [infoContent, setInfoContent] = useState(<About />);
  const handleAboutClick = () => {
    startTransition(() => {
      setInfoContent(<About />);
    });
  };
  const handleSkillsClick = () => {
    startTransition(() => {
      setInfoContent(<Skills />);
    });
  };
  const handlePortfolioClick = () => {
    startTransition(() => {
      setInfoContent(<Portfolio />);
    });
  };
  const handleTecnologiesClick = () => {
    startTransition(() => {
      setInfoContent(<Tecnologies />);
    });
  };

  return (
    <main
      id="main"
      className="w-4/5 min-w-80 min-h-screen flex flex-col gap-5 items-center justify-self-center"
    >
      <section id="section" className="w-full">
        <div className="h-48 flex flex-col justify-center items-center gap-4">
          <h3 className="text-4xl">Web Developer</h3>
          <p className="text-xl text-center text-balance min-w-80  w-96 p-0 m-0 ">
            Hi, I'm <span className="text-sky-400 text-2xl">Mamadou</span>, a
            passionate full-stack web developer with skills in both front-end
            and back-end technologies.
          </p>
        </div>
        <div className="min-h-52 flex flex-col justify-center items-center gap-4">
          <h3 className="text-4xl">Tech Stack</h3>
          <div className="flex flex-row gap-4 flex-wrap justify-center items-center text-xl">
            <p>
              <span className="mx-2">HTML</span>
              <i className="fa-brands fa-html5"></i>
            </p>
            <p>
              <span className="mx-2">CSS</span>
              <i className="fa-brands fa-css3-alt"></i>
            </p>
            <p>
              <span className="mx-2">JAVASCRIPT</span>
              <i className="fa-brands fa-js"></i>
            </p>
            <p>
              <span className="mx-2">REACT</span>
              <i className="fa-brands fa-react"></i>
            </p>
            <p>
              <span className="mx-2">JAVA</span>
              <i className="fa-brands fa-java"></i>
            </p>
          </div>
        </div>
        <div
          id="info"
          className="grid gap-4 place-items-center mb-4 divide-y-2 divide-solid"
        >
          <div id="titles" className="flex justify-evenly w-full">
            <h3
              id="about"
              className="text-xl cursor-pointer hover:text-gray-400"
              onClick={handleAboutClick}
            >
              About Me
            </h3>
            <h3
              id="portfolio"
              className="text-xl cursor-pointer hover:text-gray-400"
              onClick={handlePortfolioClick}
            >
              Portfolio
            </h3>
            <h3
              id="skills"
              className="text-xl cursor-pointer hover:text-gray-400"
              onClick={handleSkillsClick}
            >
              Skills
            </h3>
            <h3
              id="tecnologies"
              className="text-xl cursor-pointer hover:text-gray-400"
              onClick={handleTecnologiesClick}
            >
              Tecnologies
            </h3>
          </div>
          <div
            id="info-content"
            className="text-slate-300 text-balance text-center grid place-items-center"
          >
            {infoContent}
          </div>
        </div>
      </section>
      <aside
        id="aside"
        className="w-full flex justify-center items-center flex-col gap-5 p-0 m-0"
      >
        <div id="img-container" className="w-72 h-80 rounded-3xl"></div>
        <div id="social-links" className="text-5xl flex gap-4">
          <a
            href="https://github.com/Mamadou-mbaye"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="text-slate-300 hover:text-slate-400"
              icon={faGithub}
            />
          </a>
          <a
            href="http://linkedin.com/in/mamadou-mbae-045modu"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon
              className="text-slate-300 hover:text-slate-400"
              icon={faLinkedin}
            />
          </a>
        </div>
      </aside>
    </main>
  );
};
export default Home;
