interface IBreadcrumb {
  displayName: string;
  urlPath?: string;
}

const BreadCrumb = ({
  breadcrumbRecord,
}: {
  breadcrumbRecord: IBreadcrumb[];
}) => {
  //
  return (
    <ul className="flex overflow-hidden pb-1.5 hover:shadow-none md:px-3 md:py-4 lightScrollBar">
      {breadcrumbRecord.map((link) => (
        <li
          key={link.displayName}
          className="whitespace-nowrap flex justify-evenly basis-24 mt-2 items-center"
        >
          <div className="text-at-dark-700 hover:text-at-primary hover:underline hover:text-[#0073CF] text-xs font-medium">
            <a href={"#"}>{link.displayName}</a>
          </div>

          <div>{link.urlPath && <span className="p-4 lg:p-0 lg:ml-4">&gt;</span>}</div>
        </li>
      ))}
    </ul>
  );
};

export default BreadCrumb;
