import Skill from "./Skill";

const SkillList = () => {
  return (
    <div className="skill-list">
      <Skill skillName={"JavaScript"} color="blue" />
      <Skill skillName={"HTML"} color="red" />
      <Skill skillName={"React"} color="yellow" />
    </div>
  );
};
export default SkillList;
