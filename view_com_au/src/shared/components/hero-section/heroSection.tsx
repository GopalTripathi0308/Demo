interface IProps {
  heading: string;
  description: string;
  className?: string;
  children?: React.ReactNode;
  isRounded?: boolean;
  bgColor?: string;
  extraMargin?: boolean;
}

const HeroBanner = ({
  heading,
  description,
  className,
  children,
  isRounded = true,
  bgColor,
  extraMargin,
}: IProps) => {
  return (
    <div
      className={`p-6 md:px-16 md:py-12 relative ${className} ${
        bgColor || `bg-banner-color`
      } ${isRounded && "rounded-xl"} `}
    >
      <div
        className={`flex flex-col text-default gap-4 w-full ${
          extraMargin && "mt-6"
        }`}
      >
        <h1 className="text-5xl banner-heading font-bold lg:text-7xl break-words">
          {heading}
        </h1>
        <p className="text-sm font-normal md:text-base mt-4">{description}</p>
      </div>
      {children}
    </div>
  );
};

export default HeroBanner;
