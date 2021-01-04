export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  isCollapsed?: boolean;
  isCollapsing?: any;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  type?: string;
  collapse?: string;
  children?: ChildrenItems2[];
  isCollapsed?: boolean;
}
export interface ChildrenItems2 {
  path?: string;
  title?: string;
  type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: "/admin/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-home text-purple",
  },

  {
    path: "/admin/ruang-kerja-digital",
    title: "Ruang Kerja Digital",
    type: "sub",
    icontype: "fas fa-braille text-red",
    collapse: "qwe",
    isCollapsed: true,
    children: [
      { path: "pengurusan-penguna", title: "Pengurusan Penguna", type: "link" },
    ],
  },
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: "/user/dashboard",
    title: "Dashboard",
    type: "link",
    icontype: "fas fa-home text-purple",
  },

  {
    path: "/user/ruang-kerja-digital",
    title: "Ruang Kerja Digital",
    type: "sub",
    icontype: "fas fa-braille text-red",
    collapse: "asd",
    isCollapsed: true,
    children: [
      { path: "pengurusan-dokumen", title: "Pengurusan Dokumen", type: "link" },
      { path: "pengurusan-templat", title: "Pengurusan Templat", type: "link" },
      { path: "pengurusan-folder", title: "Pengurusan Folder", type: "link" },
      { path: "pengurusan-email", title: "Pengurusan E-Mail", type: "link" },
      { path: "pengurusan-tugasan", title: "Pengurusan Tugasan", type: "link" },
      {
        path: "pengurusan-kalendar",
        title: "Pengurusan Kalendar",
        type: "link",
      },
      {
        path: "pengurusan-applikasi",
        title: "Pengurusan Applikasi",
        type: "link",
      },
      {
        path: "pengurusan-soal-selidik",
        title: "Pengurusan Soal Selidik",
        type: "link",
      },
      {
        path: "pengurusan-pendaftaran-aduan",
        title: "Pengurusan Pendaftaran Aduan",
        type: "link",
      },
      { path: "pengurusan-rekod", title: "Pengurusan Rekod", type: "link" },
      { path: "pengurusan-promosi", title: "Pengurusan Promosi", type: "link" },
      { path: "pengurusan-mesej", title: "Pengurusan Mesej", type: "link" },
      {
        path: "pengurusan-halaman-utama",
        title: "Pengurusan Halaman (Home)",
        type: "link",
      },
      {
        path: "pengurusan-laporan-dinamik",
        title: "Pengurusan Laporan Dinamik",
        type: "link",
      },
      {
        path: "pengurusan-laporan-statik",
        title: "Pengurusan Laporan Statik",
        type: "link",
      },
    ],
  },

  {
    path: "/user/mygovpedia",
    title: "MyGovPedia",
    type: "sub",
    icontype: "fas fa-sliders-h text-green",
    collapse: "caf",
    isCollapsed: true,
    children: [
      { path: "pengurusan-carian", title: "Pengurusan Carian", type: "link" },
      { path: "pengurusan-forum", title: "Pengurusan Forum", type: "link" },
      {
        path: "pengurusan-repositori",
        title: "Pengurusan Repositori",
        type: "link",
      },
      {
        path: "pengurusan-analitik",
        title: "Pengurusan Analitik",
        type: "link",
      },
      {
        path: "pengurusan-halaman",
        title: "Pengurusan Halaman (Home)",
        type: "link",
      },
      {
        path: "pengurusan-laporan-dinamik",
        title: "Pengurusan Laporan Dinamik",
        type: "link",
      },
      {
        path: "pengurusan-laporan-statik",
        title: "Pengurusan Laporan Statik",
        type: "link",
      },
      { path: "pengurusan-penguna", title: "pengurusan Penguna", type: "link" },
    ],
  },
];
