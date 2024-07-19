import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="flex justify-evenly">
                <Link to="https://www.linkedin.com/in/paulohenriquechi/" target="_blank">
                    <Linkedin className="size-12 text-gray-300" />
                </Link>
                <Link to="https://github.com/paulohenriquechi" target="_blank">
                    <Github className="size-12 text-gray-300" />
                </Link>
                <Link to="mailto:paulo.henrique.chi@outlook.com" target="_blank">
                    <Mail className="size-12 text-gray-300" />
                </Link>
            </div>
            <h5 className="text-center text-gray-500">Made by Paulo Henrique Chi</h5>
        </footer>
    )
}
