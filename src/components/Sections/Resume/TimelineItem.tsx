import { FC, memo } from 'react';

import { TTimelineItem } from '../../../data/dataDef';

const TimelineItem: FC<{ item: TTimelineItem; isLastItem: boolean }> = memo(({ item, isLastItem }) => {
  const { title, date, location, content } = item;
  return (
    <div className="flex flex-col pb-4 last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      {content}
      {!isLastItem && <hr className="mt-4 border-neutral-300" />}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
