import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PengurusanDokumenComponent } from "./pengurusan-dokumen/pengurusan-dokumen.component";
import { PengurusanFolderComponent } from "./pengurusan-folder/pengurusan-folder.component";
import { PengurusanTemplatComponent } from "./pengurusan-templat/pengurusan-templat.component";
import { PengurusanEmailComponent } from "./pengurusan-email/pengurusan-email.component";
import { PengurusanTugasanComponent } from "./pengurusan-tugasan/pengurusan-tugasan.component";
import { PengurusanKalendarComponent } from "./pengurusan-kalendar/pengurusan-kalendar.component";
import { PengurusanAplikasiComponent } from "./pengurusan-aplikasi/pengurusan-aplikasi.component";
import { PengurusanSoalSelidikComponent } from "./pengurusan-soal-selidik/pengurusan-soal-selidik.component";
import { PengurusanPendaftaranAduanComponent } from "./pengurusan-pendaftaran-aduan/pengurusan-pendaftaran-aduan.component";
import { PengurusanRekodComponent } from "./pengurusan-rekod/pengurusan-rekod.component";
import { PengurusanPromosiComponent } from "./pengurusan-promosi/pengurusan-promosi.component";
import { PengurusanMesejComponent } from "./pengurusan-mesej/pengurusan-mesej.component";
import { PengurusanHalamanComponent } from "./pengurusan-halaman/pengurusan-halaman.component";
import { PengurusanLaporanDinamikComponent } from "./pengurusan-laporan-dinamik/pengurusan-laporan-dinamik.component";
import { PengurusanLaporanStatikComponent } from "./pengurusan-laporan-statik/pengurusan-laporan-statik.component";
import { PengurusanCarianComponent } from "./pengurusan-carian/pengurusan-carian.component";
import { PengurusanForumComponent } from "./pengurusan-forum/pengurusan-forum.component";
import { PengurusanRepositoriComponent } from "./pengurusan-repositori/pengurusan-repositori.component";
import { PengurusanAnalitikComponent } from "./pengurusan-analitik/pengurusan-analitik.component";
import { MyPengurusanHalamanComponent } from "./my-pengurusan-halaman/my-pengurusan-halaman.component";
import { MyPengurusanLaporanDinamikComponent } from "./my-pengurusan-laporan-dinamik/my-pengurusan-laporan-dinamik.component";
import { MyPengurusanLaporanStatikComponent } from "./my-pengurusan-laporan-statik/my-pengurusan-laporan-statik.component";
import { MyPengurusanPengunaComponent } from "./my-pengurusan-penguna/my-pengurusan-penguna.component";
import { PengurusanFolderDetailsComponent } from './pengurusan-folder-details/pengurusan-folder-details.component';

export const UserRoutes: Routes = [
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
            path: "pengurusan-dokumen",
            component: PengurusanDokumenComponent,
          },
          {
            path: "pengurusan-templat",
            component: PengurusanTemplatComponent,
          },
          {
            path: "pengurusan-folder",
            component: PengurusanFolderComponent,
          },
          {
            path:"pengurusan-sub-folder",
            component:PengurusanFolderDetailsComponent,
          },
          {
            path: "pengurusan-email",
            component: PengurusanEmailComponent,
          },
          {
            path: "pengurusan-tugasan",
            component: PengurusanTugasanComponent,
          },
          {
            path: "pengurusan-kalendar",
            component: PengurusanKalendarComponent,
          },
          {
            path: "pengurusan-applikasi",
            component: PengurusanAplikasiComponent,
          },

          {
            path: "pengurusan-soal-selidik",
            component: PengurusanSoalSelidikComponent,
          },
          {
            path: "pengurusan-pendaftaran-aduan",
            component: PengurusanPendaftaranAduanComponent,
          },
          {
            path: "pengurusan-rekod",
            component: PengurusanRekodComponent,
          },
          {
            path: "pengurusan-promosi",
            component: PengurusanPromosiComponent,
          },
          {
            path: "pengurusan-mesej",
            component: PengurusanMesejComponent,
          },
          {
            path: "pengurusan-halaman-utama",
            component: PengurusanHalamanComponent,
          },
          {
            path: "pengurusan-laporan-dinamik",
            component: PengurusanLaporanDinamikComponent,
          },
          {
            path: "pengurusan-laporan-statik",
            component: PengurusanLaporanStatikComponent,
          },
        ],
      },
      {
        path: "mygovpedia",
        children: [
          {
            path: "pengurusan-carian",
            component: PengurusanCarianComponent,
          },
          {
            path: "pengurusan-forum",
            component: PengurusanForumComponent,
          },
          {
            path: "pengurusan-repositori",
            component: PengurusanRepositoriComponent,
          },
          {
            path: "pengurusan-analitik",
            component: PengurusanAnalitikComponent,
          },
          {
            path: "pengurusan-halaman",
            component: MyPengurusanHalamanComponent,
          },
          {
            path: "pengurusan-laporan-dinamik",
            component: MyPengurusanLaporanDinamikComponent,
          },
          {
            path: "pengurusan-laporan-statik",
            component: MyPengurusanLaporanStatikComponent,
          },
          {
            path: "pengurusan-penguna",
            component: MyPengurusanPengunaComponent,
          },
        ],
      },
    ],
  },
];
