import React from "react";

export const VideoContent: React.FC<{}> = () => {
  return (
    <div className='flex flex-row w-[100%] justify-center py-5 bg-[#e4c9c9b1]'>
      <iframe
        src='https://www.youtube.com/embed/42w-3h75vww?si=yoyvhhiYslDop0vr'
        title='You-tube video'
        allowFullScreen
        className='w-[90%] h-[500px] rounded-xl'></iframe>
    </div>
  );
};
