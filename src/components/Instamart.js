import { useState } from "react";

const Section = ({ title, declaration, isVisible, setIsVisible }) => {
  return (
    <div className="border border-black p-2 m-2">
      <h1 className="font-bold text-2xl">{title}</h1>
      {isVisible ? (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible(false)}
        >
          Hide
        </button>
      ) : (
        <button
          className="cursor-pointer underline"
          onClick={() => setIsVisible(true)}
        >
          Show
        </button>
      )}
      <p>{isVisible && declaration}</p>
    </div>
  );
};

const Instamart = () => {
  const [sectionConfig, setSectionConfig] = useState({
    showAbout: false,
    showTeam: false,
    showCareer: false,
  });
  return (
    <div>
      <h1 className="text-3xl p-2 m-2 font-bold">Instamart</h1>

      <Section
        isVisible={sectionConfig.showAbout}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: true,
            showTeam: false,
            showCareer: false,
          });
        }}
        title={"About Instamart"}
        declaration={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. is About"
        }
      />
      <Section
        isVisible={sectionConfig.showTeam}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: false,
            showTeam: true,
            showCareer: false,
          });
        }}
        title={"Team"}
        declaration={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. is About"
        }
      />
      <Section
        isVisible={sectionConfig.showCareer}
        setIsVisible={() => {
          setSectionConfig({
            showAbout: false,
            showTeam: false,
            showCareer: true,
          });
        }}
        title={"Careers"}
        declaration={
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc. is About"
        }
      />
    </div>
  );
};
export default Instamart;
