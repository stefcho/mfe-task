import { Routes } from '@angular/router';
import { loadRemoteModule } from "@angular-architects/native-federation";

export const routes: Routes = [
  {
    path: 'shell/:param',
    children: [
      {
        path: '',
        outlet: 'mailboxOutlet',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            exposedModule: './routes'
          })
            .then(m => m.mailboxRoutes)
      },
      {
        path: '',
        outlet: 'calendarOutlet',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:4202/remoteEntry.js',
            exposedModule: './routes'
          })
            .then(m => m.calendarRoutes)
      }
    ]
  },
  {
    path: 'mailbox',
    outlet: '',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './routes'
      })
        .then(m => m.mailboxRoutes)
  },
  {
    path: 'calendar',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4202/remoteEntry.js',
        exposedModule: './routes'
      })
        .then(m => m.calendarRoutes)
  }
];
