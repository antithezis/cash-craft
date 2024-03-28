import { Routes } from "@angular/router";

export const DASHBOARD_ROUTES: Routes = [
  {
    path: "dashboard",
    loadComponent: () => import("./components/dashboard/dashboard.component").then((c) => c.DashboardComponent),
  }
];
