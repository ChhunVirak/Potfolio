interface SkillInterface {
  name: string;
  percent: string;
  color: string;
}
function Skill({ name, percent, color }: SkillInterface) {
  return (
    <div className="skills__data">
      <div className="skills__titles">
        <h3 className="skills__name">{name}</h3>
        <span className="skills__number">{percent}</span>
      </div>

      <div className="skills__bar">
        <span
          className={`skills__percentage ${name}`}
          style={{
            width: percent,
            backgroundColor: color,
          }}
        ></span>
      </div>
    </div>
  );
}

export default Skill;
