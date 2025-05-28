import React from "react";

const Tag = ({ content }: { content: string }) => {
  return (
    <div className="inline-block rounded-[30px] bg-transparentGreen text-green text-sm py-0.5 px-4 ">
      {content}
    </div>
  );
};

export default Tag;
