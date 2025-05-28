import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import type { StaticImageData } from "next/image";

import Tag from "./Tag";

const Project = ({
  title,
  description,
  tags,
  imgSrc,
  link,
}: {
  title: string;
  description: string;
  tags?: string[];
  imgSrc: StaticImageData;
  link: string;
}) => {
  return (
    <div className="group flex flex-row gap-6 p-6 rounded-xl mb-2 hover:shadow hover:bg-transparentGrey hover:cursor-pointer">
      <Image
        src={imgSrc}
        alt="project cover"
        className="w-[100px] h-[60px] self-start rounded-md border-0 border-gray-200 group-hover:border "
      />
      <a href={link} target="_blank" className="flex-[3] flex flex-col gap-2">
        <div className="flex flex-row gap-2">
          <p className="text-subtitle text-highlight group-hover:text-green">
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

export default Project;
