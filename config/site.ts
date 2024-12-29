export type SiteConfig = typeof siteConfig;
export type NavItem = typeof memberNavItems[number];
export const siteConfig = {
  name: "LibraryGG",
  description: "Tempat Library Keren",
};

export const memberNavItems = [
  {
    label: "Koleksi",
    href: "/",
  },
  {
    label: "Pinjaman Saya",
    href: "/myloan",
  },
];

export const adminNavItems = [
  {
    label: "Koleksi",
    href: "/",
  },
  {
    label: "Pinjaman",
    href: "/loan",
  },
  {
    label: "Member",
    href: "/member",
  },
];