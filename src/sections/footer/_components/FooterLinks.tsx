interface LinkGroup {
  title: string;
  links: string[];
}

const linkGroups: LinkGroup[] = [
  {
    title: "عن تدرب",
    links: [
      "انضم كمدرب",
      "الشروط والأحكام",
      "الشروط والأحكام للمدرب",
      "سياسات الخصوصية",
      "سياسة ملفات تعريف الارتباط",
    ],
  },
  {
    title: "روابط هامة",
    links: [
      "تدرب بلا حدود",
      "الدورات التدريبية",
      "الدورات المجانية",
      "المدربين",
      "المدونة",
    ],
  },
];

export default function FooterLinks() {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 md:gap-10">
        {linkGroups.map((group, index) => (
          <ul
            key={index}
            className="flex flex-col items-center sm:items-end gap-2 sm:gap-3 text-center sm:text-end"
          >
            <li className="text-sm font-bold lg:text-base text-[#B0B0BA]">
              {group.title}
            </li>
            {group.links.map((link, linkIndex) => (
              <li
                key={linkIndex}
                className="text-sm font-bold text-white lg:text-base hover:text-gray-300 transition-colors cursor-pointer"
              >
                {link}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
