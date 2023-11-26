import { SidenavItem } from './sidenav-item';

const URL_HOME = '/home';
const URL_BUY_TRANSACTION = '/buy';
const URL_SELL_TRANSACTION = '/sell';
const URL_SUMMARY = '/summary';
const URL_LOGOUT = '/logout';

export const SIDE_NAV: SidenavItem[] = [
  {
    id: 1,
    label: 'Home',
    url: URL_HOME,
  },
  {
    id: 2,
    label: 'Buy Transaction',
    url: URL_BUY_TRANSACTION,
  },
  {
    id: 3,
    label: 'Sell Transaction',
    url: URL_SELL_TRANSACTION,
  },
  {
    id: 4,
    label: 'Summary',
    url: URL_SUMMARY,
  },
  {
    id: 5,
    label: 'Logout',
    url: URL_LOGOUT,
  },
];
