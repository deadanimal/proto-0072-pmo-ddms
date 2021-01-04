import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
// import { ManagementUserComponent } from "./management-user/management-user.component";
import { PengurusanPengunaComponent } from "./pengurusan-penguna/pengurusan-penguna.component";

export const AdminRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "ruang-kerja-digital",
        children: [
          {
            path: "pengurusan-penguna",
            component: PengurusanPengunaComponent,
          },
        ],
      },

      // {
      //   path: "users",
      // children: [
      //   {
      //     path: "user",
      // component: ManagementUserComponent,
      // },
      // ],
      // },
    ],
  },
];
