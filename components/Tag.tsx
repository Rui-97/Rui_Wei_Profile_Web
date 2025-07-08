import React from "react";

const Tag = ({ content }: { content: string }) => {
  return (
    <div className="inline-block rounded-[30px] bg-transparentGreen text-green text-sm py-1 px-4 text-center">
      {content}
    </div>
  );
};

export default Tag;
