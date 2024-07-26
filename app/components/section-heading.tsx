import React from "react";


function SectionHeading({children}: {children: string}) {
  return (
    <div>
      <h2 className="text-3xl font-medium capitalize mb-8 text-center">{children}</h2>
    </div>
  );
}

export default SectionHeading;
