import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_PATH, APP_PATH_LAYOUT } from './app-routing';
import { LayoutPublicComponent } from './layout/layout-public/layout-public.component';

const routes: Routes = [
    {
        path: APP_PATH_LAYOUT.LAYOUT_PUBLIC,
        component: LayoutPublicComponent,
        children: [
            {
                path: APP_PATH.HOME,
                loadChildren: (): Promise<unknown> =>
                    import('./pages/public/pages/home/home.module').then((m) => m.HomeModule)
            }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
