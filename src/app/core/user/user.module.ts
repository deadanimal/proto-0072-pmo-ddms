import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule,
  TabsModule,
  TooltipModule,
} from "ngx-bootstrap";
import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { LoadingBarModule } from "@ngx-loading-bar/core";

import { RouterModule } from "@angular/router";
import { UserRoutes } from "./user.routing";
import { QuillModule } from "ngx-quill";
import { NgxDropzoneModule } from "ngx-dropzone";
import { OrgChartModule } from "angular-org-chart";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { PengurusanMesejComponent } from "./pengurusan-mesej/pengurusan-mesej.component";
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

@NgModule({
  declarations: [
    DashboardComponent,
    PengurusanDokumenComponent,
    PengurusanFolderComponent,
    PengurusanTemplatComponent,
    PengurusanEmailComponent,
    PengurusanTugasanComponent,
    PengurusanKalendarComponent,
    PengurusanAplikasiComponent,
    PengurusanSoalSelidikComponent,
    PengurusanPendaftaranAduanComponent,
    PengurusanRekodComponent,
    PengurusanPromosiComponent,
    PengurusanMesejComponent,
    PengurusanHalamanComponent,
    PengurusanLaporanDinamikComponent,
    PengurusanLaporanStatikComponent,
    PengurusanCarianComponent,
    PengurusanForumComponent,
    PengurusanRepositoriComponent,
    PengurusanAnalitikComponent,
    MyPengurusanHalamanComponent,
    MyPengurusanLaporanDinamikComponent,
    MyPengurusanLaporanStatikComponent,
    MyPengurusanPengunaComponent,
    PengurusanFolderDetailsComponent,
  ],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(UserRoutes),
    QuillModule.forRoot(),
    NgxDropzoneModule,
    OrgChartModule,
  ],
})
export class UserModule {}
