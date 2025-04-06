export interface SidebarLink {
  label: string;
  href: string;
}

export interface SidebarSection {
  title: string;
  links: SidebarLink[];
}

export const menSidebarConfig: SidebarSection[] = [
  {
    title: "AGE",
    links: [
      { label: "Teens (+18)", href: "/teen" },
      { label: "Young", href: "/young" },
      { label: "Daddy", href: "/daddy" },
      { label: "Mature", href: "/mature" }
    ]
  },
  {
    title: "ETHNICITY",
    links: [
      { label: "Asian", href: "/asian" },
      { label: "Ebony", href: "/ebony" },
      { label: "Indian", href: "/indian" },
      { label: "Latino", href: "/latino" }
    ]
  },
  {
    title: "BODY TYPE",
    links: [
      { label: "Skinny", href: "/skinny" },
      { label: "Muscle", href: "/muscle" },
      { label: "Chubby", href: "/chubby" }
    ]
  },
  {
    title: "TAGS",
    links: [
      { label: "Gay", href: "/gay" },
      { label: "Couples", href: "/couples" },
      { label: "Cum", href: "/cum" },
      { label: "Anal", href: "/anal" },
      { label: "Black", href: "/black" },
      { label: "Lovense", href: "/lovense" },
      { label: "Twinks", href: "/twink" },
      { label: "Bears", href: "/bear" },
      { label: "Jocks", href: "/jock" },
      { label: "Otters", href: "/otter" },
      { label: "Feet", href: "/feet" },
      { label: "Big Ass", href: "/bigass" },
      { label: "Straight", href: "/straight" },
      { label: "Exhibitionist", href: "/exhibitionist" },
      { label: "BBC", href: "/bbc" },
      { label: "Smoke", href: "/smoke" },
      { label: "Slave", href: "/slave" },
      { label: "Married", href: "/married" },
      { label: "Hairy", href: "/hairy" },
      { label: "Ginger", href: "/ginger" },
      { label: "Selfsuck", href: "/selfsuck" }
    ]
  },
  {
    title: "REGIONS",
    links: [
      { label: "North America", href: "/north-american-cams" },
      { label: "South America", href: "/south-american-cams" },
      { label: "Asia", href: "/asian-cams" },
      { label: "Europe & Russia", href: "/euro-russian-cams" },
      { label: "Italian", href: "/italian" },
      { label: "Turkish", href: "/turkish" }
    ]
  }
];