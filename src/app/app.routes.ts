import { Routes } from '@angular/router';

export const MainRoutes: Routes = [
  { path: '**', loadChildren: './plugin/plugin.module#PluginModule' }
];
