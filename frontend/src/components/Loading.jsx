import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin duration-300 rounded-full h-20 w-20 border-t-2 border-l-2 border-stone-800">&nbsp;</div>
    </div>
  );
};

export default Loading;
