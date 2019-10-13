import { IRoute } from 'models/route';

//#region Routes declaration
const HOME_PAGE_URL = '/';
//#endregion

export const APP_ROUTES: IRoute[] = [
  {
    name: 'homePage',
    linkTo: HOME_PAGE_URL,
    icon: 'home',
    displayName: 'Home',
  },
];
