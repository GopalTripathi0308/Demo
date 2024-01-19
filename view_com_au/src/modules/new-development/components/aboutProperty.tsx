import buildingImg from "@/./../public/images/building-logo.svg";
import bathTubImg from "@/./../public/images/bathtub-logo.svg";
import carImg from "@/./../public/images/car-logo.svg";
import apartmentImg from "@/./../public/images/apartment-logo.svg";
import houseImg from "@/./../public/images/house-logo.svg";

import Image from "next/image";

const AboutProperty = (props: any) => {
  console.log(props.data.developmentDetail);

  const { title, bathrooms, bedrooms, carSpaces, classification, details } =
    props.data.developmentDetail;

  const {
    area,
    country,
    postalCode,
    shortenState,
    slug,
    state,
    thoroughfare,
    thoroughfareNumber,
    buildingName,
  } = props.data.developmentDetail.address;

  console.log(props.data.developmentDetail.displaySuite);

  //
  interface IAboutGrandReve {
    imageSrc: any;
    alt: string;
    content: string;
  }

  interface IGrandReve {
    imageSrc: any;
    alt: string;
    heading: string;
    brief: string;
  }

  const GRAND_REVE_FEATURES: IAboutGrandReve[] = [
    { imageSrc: buildingImg, alt: "building-logo", content: bedrooms },
    { imageSrc: bathTubImg, alt: "bathTub-logo", content: bathrooms },
    { imageSrc: carImg, alt: "car-logo", content: carSpaces },
  ];

  const ABOUT_GRAND_REVE = [
    {
      imageSrc: apartmentImg,
      alt: "apartment-logo",
      heading: "Display Location",
      brief: "Shop 233B, 279 Old Northern Road, Castle Hill, NSW 2154",
    },
    {
      imageSrc: apartmentImg,
      alt: "apartment-logo",
      heading: "Property Type",
      brief: classification,
    },
    {
      imageSrc: houseImg,
      alt: "house-logo",
      heading: "size",
      brief: details.items,
    },
  ];

  const renderPropertyFeatures = (propertyArr: IAboutGrandReve[]) => (
    <div className="flex">
      {propertyArr.map((prop, index) => (
        <div className="flex gap-2 px-1" key={prop.alt}>
          <Image src={prop.imageSrc} width={16} height={8} alt={prop.alt} />
          <p className="text-sm">{prop.content}</p>
          {propertyArr.length - 1 === index ? (
            ""
          ) : (
            <span className="border-r"></span>
          )}
        </div>
      ))}
    </div>
  );

  const renderAboutProperty = (aboutProperty: IGrandReve[]) => (
    <div>
      {aboutProperty.map((property) => (
        <div className="flex flex-col gap-2 mt-2" key={property.heading}>
          <div className="flex gap-2">
            <Image
              src={property.imageSrc}
              width={16}
              height={16}
              alt={property.alt}
            />
            <p className="text-default text-sm opacity-90">
              {property.heading}
            </p>
          </div>
          <p>{property.brief}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full m-2 p-2 flex flex-col lg:gap-4 border-b">
      <p className="text-xl font-medium">About {title}</p>

      <h2 className="text-lg font-medium mt-4 mb-2 lg:text-2xl">
        {`${thoroughfareNumber}, ${thoroughfare}, ${area}, ${state} ${postalCode}`}
      </h2>

      {renderPropertyFeatures(GRAND_REVE_FEATURES)}

      {renderAboutProperty(ABOUT_GRAND_REVE)}
    </div>
  );
};

export default AboutProperty;
