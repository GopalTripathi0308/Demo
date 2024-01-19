import Image from "next/image";
import buildingImg from "@/./../public/images/building-logo.svg";
import fallbackImg from "@/./../public/images/placeholder.png";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";

const cloudinaryImageLoader = ({ src }: any) => {
  return `https://d126h31mg8tzcs.cloudfront.net/grand-reve/file/thumbnail/${src}`;
};

const ForSaleProperties = (props: any) => {
  //
  console.log(props.property);

  //

  const renderPropertyCard = (properties: any[]) =>
    properties.map(
      (
        property: {
          files: { thumbnail: { name: any }[] };
          title:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
          priceDisplay:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
        },
        index: Key | null | undefined
      ) => (
        <div
          className="flex border p-4 rounded-lg items-center shadow-at-4 mb-4 gap-4 md:justify-start md:gap-8 items-end"
          key={index}
        >
          <div>
            <Image
              src={
                property.files.thumbnail && property.files.thumbnail[0]?.name
              }
              width={80}
              height={80}
              objectFit="cover"
              alt="logo"
              loader={cloudinaryImageLoader}
              className="rounded-lg"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null; // Avoid infinite loop
                target.src = "/images/placeholder.png"; // Set your fallback image source
              }}
            />
          </div>
          <div className="flex flex-col">
            <p className="font-bold">{property.title}</p>
            <p className="text-sm text-default opacity-70">
              {property.priceDisplay}
            </p>
            <div className="flex items-center gap-2">
              <Image src={buildingImg} width={16} height={16} alt="logo" />
              <span className="opacity-70">content</span>
            </div>
          </div>
        </div>
      )
    );

  return (
    <div className="flex flex-col gap-2 p-4">
      <h2 className="font-bold text-lg mb-6">
        Off-The-Plan Residences For Sale At Grand Reve
      </h2>
      {renderPropertyCard(props.property)}
    </div>
  );
};

export default ForSaleProperties;
