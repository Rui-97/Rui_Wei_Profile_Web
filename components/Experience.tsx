import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

import Tag from "./Tag";

interface ExperienceProps {
  duration: string;
  title: string;
  description: string;
  tags?: string[];
  link: string;
}
const Experience = ({
  duration,
  title,
  description,
  tags,
  link,
}: ExperienceProps) => {
  return (
    <div className="group flex gap-6 p-6 rounded-xl mb-2 hover:shadow hover:bg-transparentGrey hover:cursor-pointer">
      <div className="flex-[1] text-xs pt-2">{duration}</div>
      <a href={link} target="_blank" className="flex-[3] flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <p className="text-xl text-highlight group-hover:text-green">
            {title}
          </p>
          <FontAwesomeIcon
            icon={faArrowUpRightFromSquare}
            className="text-highlight group-hover:text-green group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:ease-in-out group-hover:duration-300"
          />
        </div>
        <p>{description}</p>
        <div className="flex flex-row gap-2 mt-2">
          {tags && tags.map((tag, i) => <Tag key={i} content={tag} />)}
        </div>
      </a>
    </div>
  );
};

export default Experience;
