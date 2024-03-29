import React from "react";

const PageContainer = (props: {
  children:
    | string
    | number
    | boolean
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | Iterable<React.ReactNode>
    | React.ReactPortal
    | null
    | undefined;
}) => {
  return (
    <div className="my-0 mx-auto max-w-1200 text-default px-4 md:px-0">
      {props.children}
    </div>
  );
};

export default PageContainer;
