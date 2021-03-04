import React from 'react';
import 'twin.macro';

interface EducationItemProps {
  educationType: string;
  schoolName: string;
  degreeName: string;
  startingDate: string;
  endingDate: string;
  className?: string;
}

const EducationItem = (props: EducationItemProps) => {
  const {
    schoolName,
    educationType,
    startingDate,
    endingDate,
    degreeName,
    className,
  } = props;

  return (
    <div tw="flex flex-row items-center mb-4 pb-4" className={className}>
      <div tw="flex flex-col">
        <div tw="font-medium text-lg">{schoolName}</div>
        <div tw="font-medium mb-1">{degreeName}</div>
        <div tw="text-xs uppercase mb-2">{educationType}</div>
        <div tw="text-sm">
          {startingDate} - {endingDate}
        </div>
      </div>
    </div>
  );
};
export { EducationItem };
