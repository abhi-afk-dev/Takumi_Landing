// import { FaReact} from "react-icons/fa";
// import {
//   SiFlask,
//   SiDjango,
//   SiTailwindcss,
//   SiMysql,
//   SiMongodb,
// } from "react-icons/si";
// import { BiLogoPostgresql } from "react-icons/bi";

// function Second() {
//   return (
//     <div className="flex relative flex-col border border-[#F4F4F5]/20 px-10 py-10 w-full justify-center items-center gap-5">
//       <h1 className="text-[#F4F4F5] text-center text-4xl jet font-bold ">
//         Builds with standard industry stacks
//       </h1>
//       <div className="flex justify-center space-x-8">
//         <FaReact size="50" className="text-[#F4F4F5] hover:text-[#F59E0B]" />
//         <SiTailwindcss
//           size="50"
//           className="text-[#F4F4F5] hover:text-[#F59E0B]"
//         />
//         <SiDjango size="50" className="text-[#F4F4F5] hover:text-[#F59E0B]" />
//         <SiFlask size="50" className="text-[#F4F4F5] hover:text-[#F59E0B]" />
//         <BiLogoPostgresql
//           size="50"
//           className="text-[#F4F4F5] hover:text-[#F59E0B]"
//         />
//         <SiMysql size="50" className="text-[#F4F4F5] hover:text-[#F59E0B]" />
//         <SiMongodb size="50" className="text-[#F4F4F5] hover:text-[#F59E0B]" />
//       </div>
//     </div>
//   );
// }

// export default Second;
import { FaReact, FaGitAlt } from "react-icons/fa";
import {
  SiFlask,
  SiDjango,
  SiTailwindcss,
  SiMysql,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiDocker,
  SiNodedotjs,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";

const techStack = [
  { icon: FaReact, name: "React" },
  { icon: SiNextdotjs, name: "Next.js" },
  { icon: SiTypescript, name: "TypeScript" },
  { icon: SiTailwindcss, name: "Tailwind" },
  { icon: SiNodedotjs, name: "Node.js" },
  { icon: SiDjango, name: "Django" },
  { icon: SiFlask, name: "Flask" },
  { icon: BiLogoPostgresql, name: "PostgreSQL" },
  { icon: SiMysql, name: "MySQL" },
  { icon: SiMongodb, name: "MongoDB" },
  { icon: SiDocker, name: "Docker" },
  { icon: FaGitAlt, name: "Git" },
];

function Second() {
  return (
    <div className="w-full">
      <div className="flex relative flex-col border border-[#F4F4F5]/10 md:border-[#F4F4F5]/15 px-10 py-2 w-full justify-center items-center gap-5 overflow-hidden">
        <div className="flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex w-max gap-8 animate-scroll hover:[animation-play-state:paused]">
            {techStack.map((tech, index) => (
              <div
                key={`tech-1-${index}`}
                className="flex items-center justify-center min-w-[80px]"
              >
                <tech.icon
                  size="36"
                  className="text-[#F4F4F5] transition-colors duration-300 hover:text-[#F59E0B] cursor-pointer"
                  title={tech.name}
                />
              </div>
            ))}

            {techStack.map((tech, index) => (
              <div
                key={`tech-2-${index}`}
                className="flex items-center justify-center min-w-[80px]"
              >
                <tech.icon
                  size="36"
                  className="text-[#F4F4F5] transition-colors duration-300 hover:text-[#F59E0B] cursor-pointer"
                  title={tech.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Second;