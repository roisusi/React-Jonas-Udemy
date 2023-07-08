const Skill = (props) => {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skillName}</span>
    </div>
  );
};
export default Skill;
