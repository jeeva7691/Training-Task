import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
    items: MenuItem[] | undefined;

    ngOnInit() {
        this.items = [
            {
                
            },
            {
                label: 'Cognosys',
                icon: 'pi pi-fw pi-pencil',
            //     items: [
            //         {
            //             label: 'Left',
            //             icon: 'pi pi-fw pi-align-left'
            //         },
            //         {
            //             label: 'Right',
            //             icon: 'pi pi-fw pi-align-right'
            //         },
            //         {
            //             label: 'Center',
            //             icon: 'pi pi-fw pi-align-center'
            //         },
            //         {
            //             label: 'Justify',
            //             icon: 'pi pi-fw pi-align-justify'
            //         }
            //     ]
            // },
            // {
            //     label: 'Cognosys',
            //     icon: 'pi pi-fw pi-user',
            //     items: [
            //         {
            //             label: 'New',
            //             icon: 'pi pi-fw pi-user-plus'
            //         },
            //         {
            //             label: 'Delete',
            //             icon: 'pi pi-fw pi-user-minus'
            //         },
            //         {
            //             label: 'Search',
            //             icon: 'pi pi-fw pi-users',
            //             items: [
            //                 {
            //                     label: 'Filter',
            //                     icon: 'pi pi-fw pi-filter',
            //                     items: [
            //                         {
            //                             label: 'Print',
            //                             icon: 'pi pi-fw pi-print'
            //                         }
            //                     ]
            //                 },
            //                 {
            //                     icon: 'pi pi-fw pi-bars',
            //                     label: 'List'
            //                 }
            //             ]
            //         }
            //     ]
            },
            {
                label: 'Dashboard',
                icon: 'pi pi-fw pi-calendar',
                // items: [
                //     {
                //         label: 'Edit',
                //         icon: 'pi pi-fw pi-pencil',
                //         items: [
                //             {
                //                 label: 'Save',
                //                 icon: 'pi pi-fw pi-calendar-plus'
                //             },
                //             {
                //                 label: 'Delete',
                //                 icon: 'pi pi-fw pi-calendar-minus'
                //             }
                //         ]
                //     },
                //     {
                //         label: 'Archieve',
                //         icon: 'pi pi-fw pi-calendar-times',
                //         items: [
                //             {
                //                 label: 'Remove',
                //                 icon: 'pi pi-fw pi-calendar-minus'
                //             }
                //         ]
                //     }
                // ]
            },
            {
                label: 'Pricing',
                icon: 'pi pi-fw pi-power-off'
            }
        ];
    }
}
