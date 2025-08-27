import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import BlogView from "../views/BlogView.vue";
import HargaView from "@/views/HargaView.vue";
import FeatureView from "@/views/feature/akuntansi/InvoiceView.vue";
import SolutionView from "@/views/SolutionView.vue";
import InvoiceView from "@/views/feature/akuntansi/InvoiceView.vue";
import BiayaView from "@/views/feature/akuntansi/BiayaView.vue";
import LaporanView from "@/views/feature/akuntansi/LaporanView.vue";
import AssetView from "@/views/feature/akuntansi/AssetView.vue";
import AkuntansiView from "@/views/feature/akuntansi/AkuntansiView.vue";
import InventoryView from "@/views/feature/supply-chain-management/InventoryView.vue";
import ManufakturView from "@/views/feature/supply-chain-management/ManufakturView.vue";
import MonthlyProfitView from "@/views/feature/perencanaan-dan-analisa-keuangan/MonthlyProfitView.vue";
import ManagementAnggaranView from "@/views/feature/perencanaan-dan-analisa-keuangan/ManagementAnggaranView.vue";
import CustomAnalyctycsView from "@/views/feature/perencanaan-dan-analisa-keuangan/CustomAnalyctycsView.vue";
import LaporanProfitabilitasView from "@/views/feature/perencanaan-dan-analisa-keuangan/LaporanProfitabilitasView.vue";
import IntegrationView from "@/views/feature/integrasi-dan-platform/IntegrationView.vue";
import HRISView from "@/views/feature/integrasi-dan-platform/HRISView.vue";
import POSSystemView from "@/views/feature/integrasi-dan-platform/POSSystemView.vue";
import PayrollView from "@/views/feature/integrasi-dan-platform/PayrollView.vue";
import BimbinganView from "@/views/solution/layanan-dan-organisasi/BimbinganView.vue";
import JasaView from "@/views/solution/layanan-dan-organisasi/JasaView.vue";
import KateringView from "@/views/solution/layanan-dan-organisasi/KateringView.vue";
import KlinikView from "@/views/solution/layanan-dan-organisasi/KlinikView.vue";
import KontraktorView from "@/views/solution/layanan-dan-organisasi/KontraktorView.vue";
import KoperasiView from "@/views/solution/layanan-dan-organisasi/KoperasiView.vue";
import LogistikView from "@/views/solution/layanan-dan-organisasi/LogistikView.vue";
import RestoranView from "@/views/solution/layanan-dan-organisasi/RestoranView.vue";
import YayasanView from "@/views/solution/layanan-dan-organisasi/YayasanView.vue";
import DistributorView from "@/views/solution/perdagangan-dan-industri/DistributorView.vue";
import OnlineShopView from "@/views/solution/perdagangan-dan-industri/OnlineShopView.vue";
import PeternakanView from "@/views/solution/perdagangan-dan-industri/PeternakanView.vue";
import RitelView from "@/views/solution/perdagangan-dan-industri/RitelView.vue";
import TradingView from "@/views/solution/perdagangan-dan-industri/TradingView.vue";
import MultiCabangView from "@/views/solution/skala-bisnis/MultiCabangView.vue";
import PerusahaanView from "@/views/solution/skala-bisnis/PerusahaanView.vue";
import StarUpView from "@/views/solution/skala-bisnis/StarUpView.vue";
import UMKMView from "@/views/solution/skala-bisnis/UMKMView.vue";
import SkincarePerdaganganView from "@/views/solution/perdagangan-dan-industri/SkincarePerdaganganView.vue";
import ManufakturPerdaganganView from "@/views/solution/perdagangan-dan-industri/ManufakturPerdaganganView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
      meta: { noNavbarFooter: true },
    },
    {
      path: "/signup",
      name: "signup",
      component: SignupView,
      meta: { noNavbarFooter: true },
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/harga",
      name: "harga",
      component: HargaView,
    },
    {
      path: "/feature/akuntansi/invoice",
      name: "invoice",
      component: InvoiceView,
    },
    {
      path: "/feature/akuntansi/biaya",
      name: "biaya",
      component: BiayaView,
    },
    {
      path: "/feature/akuntansi/laporan",
      name: "laporan",
      component: LaporanView,
    },
    {
      path: "/feature/akuntansi/asset",
      name: "asset",
      component: AssetView,
    },
    {
      path: "/feature/akuntansi/akuntansi",
      name: "akuntansi",
      component: AkuntansiView,
    },
    {
      path: "/feature/supply-chain-management/inventory",
      name: "inventory",
      component: InventoryView,
    },
    {
      path: "/feature/supply-chain-management/manufaktur",
      name: "manufaktur",
      component: ManufakturView,
    },
    {
      path: "/feature/perencanaan-dan-analisa-keuangan/monthly-profit",
      name: "monthly-profit",
      component: MonthlyProfitView,
    },
    {
      path: "/feature/perencanaan-dan-analisa-keuangan/management-anggaran",
      name: "management-anggaran",
      component: ManagementAnggaranView,
    },
    {
      path: "/feature/perencanaan-dan-analisa-keuangan/custom-analyctycs",
      name: "custom-analyctycs",
      component: CustomAnalyctycsView,
    },
    {
      path: "/feature/perencanaan-dan-analisa-keuangan/laporan-profitabilitas",
      name: "laporan-profitabilitas",
      component: LaporanProfitabilitasView,
    },
    {
      path: "/feature/integrasi-dan-platform/integrasi",
      name: "integrasi",
      component: IntegrationView,
    },
    {
      path: "/feature/integrasi-dan-platform/HRIS",
      name: "HRIS",
      component: HRISView,
    },
    {
      path: "/feature/integrasi-dan-platform/POS-system",
      name: "POS-system",
      component: POSSystemView,
    },
    {
      path: "/feature/integrasi-dan-platform/payroll",
      name: "payroll",
      component: PayrollView,
    },
    {
      path: "/solution/layanan-dan-organisasi/bimbingan-belajar",
      name: "bimbingan-belajar",
      component: BimbinganView,
    },
    {
      path: "/solution/layanan-dan-organisasi/jasa",
      name: "jasa",
      component: JasaView,
    },
    {
      path: "/solution/layanan-dan-organisasi/katering",
      name: "katering",
      component: KateringView,
    },
    {
      path: "/solution/layanan-dan-organisasi/klinik",
      name: "klinik",
      component: KlinikView,
    },
    {
      path: "/solution/layanan-dan-organisasi/kontraktor",
      name: "kontraktor",
      component: KontraktorView,
    },
    {
      path: "/solution/layanan-dan-organisasi/koperasi",
      name: "koperasi",
      component: KoperasiView,
    },
    {
      path: "/solution/layanan-dan-organisasi/logistik",
      name: "logistik",
      component: LogistikView,
    },
    {
      path: "/solution/layanan-dan-organisasi/restoran",
      name: "restoran",
      component: RestoranView,
    },
    {
      path: "/solution/layanan-dan-organisasi/yayasan",
      name: "yayasan",
      component: YayasanView,
    },
    {
      path: "/solution/perdagangan-dan-industri/distributor",
      name: "distributor",
      component: DistributorView,
    },
    {
      path: "/solution/perdagangan-dan-industri/manufaktur",
      name: "manufaktur",
      component: ManufakturPerdaganganView,
    },
    {
      path: "/solution/perdagangan-dan-industri/online-shop",
      name: "online-shop",
      component: OnlineShopView,
    },
    {
      path: "/solution/perdagangan-dan-industri/peternakan",
      name: "peternakan",
      component: PeternakanView,
    },
    {
      path: "/solution/perdagangan-dan-industri/ritel",
      name: "ritel",
      component: RitelView,
    },
    {
      path: "/solution/perdagangan-dan-industri/skincare",
      name: "skincare",
      component: SkincarePerdaganganView,
    },
    {
      path: "/solution/perdagangan-dan-industri/trading",
      name: "trading",
      component: TradingView,
    },
    {
      path: "/solution/perdagangan-dan-industri/waralaba",
      name: "waralaba",
      component: DistributorView,
    },
    {
      path: "/solution/skala-bisnis/multicabang",
      name: "multicabang",
      component: MultiCabangView,
    },
    {
      path: "/solution/skala-bisnis/perusahaan",
      name: "perusahaan",
      component: PerusahaanView,
    },
    {
      path: "/solution/skala-bisnis/starup",
      name: "starup",
      component: StarUpView,
    },
    {
      path: "/solution/skala-bisnis/umkm",
      name: "umkm",
      component: UMKMView,
    },

  ],
});

export default router;
