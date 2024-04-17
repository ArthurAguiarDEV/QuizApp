import { GlobeOutline, LogoGithub } from "react-ionicons";
import background from "../../assets/images/fundo.jpg";

const FormHeader = () => {
  return (
    <div className="w-full flex items-center justify-center relative rounded-[10px]">
      <div className="absolute top-5 left-5 z-[10] flex items-center gap-3">
        <a
          href="https://github.com/ArthurAguiarDEV"
          target="_blank"
          rel="noreferrer"
          className="rounded-full hover:bg-purple-900 transition-all"
        >
          <LogoGithub
            color={"#fff"}
            width="45px"
            height="45px"
            cssClasses="cursor-pointer"
          />
        </a>
        <a
          href="https://portifolioarthuraguiar.netlify.app/"
          target="_blank"
          rel="noreferrer"
          className="rounded-full hover:bg-orange-900 transition-all"
        >
          <GlobeOutline
            color={"#fff"}
            width="35px"
            height="35px"
            cssClasses="cursor-pointer"
          />
        </a>
      </div>
      <img
        src={background}
        className="w-full roundend-tl-[10px] rounded-tr-[10px]"
        alt="Perguntando app"
      />
      <div className="w-full h-full absolute bg-[rgba(54,84,99,0.7)] roundend-tl-[10px] roundend-tr-[10px]"></div>
    </div>
  );
};

export default FormHeader;
