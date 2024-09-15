
import { FaGithub } from "react-icons/fa6";
import { MdContacts } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineAttachEmail } from "react-icons/md";
import { MdOutlineContactPage } from "react-icons/md";

export const Footer = () =>{

    return(
        <div className="justify-center items-center border mt-16  rounded-md bg-slate-900 m-5 ">
        <div className="flex flex-row border-l-2 h-1/2 m-5 sm:items-center sm:justify-center sm:border-none">
            <div className="flex flex-col sm:flex-row text-lg text-white m-8 sm:gap-2">
                <a href=""><h3 className="flex flex-row items-center gap-1 sm:border-l pl-2">Contato <MdContacts /></h3></a>
                <a href="https://github.com/MarlonBBo"><h3 className="flex flex-row items-center gap-1 sm:border-l pl-2">Github <FaGithub /></h3></a>
                <a href="https://www.linkedin.com/in/marlonbborges1606/"><h3 className="flex flex-row items-center gap-1 sm:border-l pl-2">Linkedin <FaLinkedin /></h3></a>
                <a href=""><h3 className="flex flex-row items-center gap-1 sm:border-l pl-2">Email <MdOutlineAttachEmail /></h3></a>
                <a href=""><h3 className="flex flex-row items-center gap-1 sm:border-l pl-2">Portfolio <MdOutlineContactPage /></h3></a>
                </div>
                
        </div>
        <h2 className="text-center mb-10 text-white">
            &copy; 2024 Desenvolvido por <a
              target="_blank"
              href="https://github.com/MarlonBBo"
              className="text-primary transition-all border-primary hover:border-b-2"
            > Marlon B. Borges</a>
          </h2>
        </div>
    )
}