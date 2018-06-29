import { GetPoppularComponent } from './get-poppular';
import { HomeComponent } from './container/home/home.component'
import { GetDetailComponent } from './get-detail/get-detail.component'

export const route = [
    {
        path: 'movies_poppular',
        component: HomeComponent
    },
    {
        path: 'movies_details',
        component: GetDetailComponent
    }
];
