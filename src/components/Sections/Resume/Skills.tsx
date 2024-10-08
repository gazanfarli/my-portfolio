import { FC, memo, PropsWithChildren } from 'react';

import { Skill as SkillType, SkillGroup as SkillGroupType } from '../../../data/dataDef';

export const SkillGroup: FC<PropsWithChildren<{ skillGroup: SkillGroupType }>> = memo(({ skillGroup }) => {
  const { name, skills } = skillGroup;
  return (
    <div className="mt-4 flex flex-col gap-4">
      <span className="text-lg font-bold">{name}</span>
      <div className="flex flex-wrap gap-y-2 gap-x-2">
        {skills.map((skill, index) => (
          <Skill key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{ skill: SkillType }> = memo(({ skill }) => {
  const { name } = skill;

  return (
    <div className="flex flex-col">
      <span className="rounded-lg border border-orange-500 p-4 text-sm font-medium">{name}</span>
    </div>
  );
});

Skill.displayName = 'Skill';
