
import { HomeTwoTone, ErrorTwoTone, AccountCircleTwoTone, BallotTwoTone } from '@material-ui/icons';

const Menuitems = [
    {
        href: '/dashboard',
        icon: HomeTwoTone,
        title: 'Dashboard'
    },
    {
        href: '/dashboard/profile',
        icon: AccountCircleTwoTone,
        title: 'Profile'
    },
    {
        href: '/dashboard/table',
        icon: BallotTwoTone,
        title: 'Users'
    },
    {
        href: '/dashboard/schedulebidding',
        icon: ErrorTwoTone,
        title: 'Schedule'
    }
];

export default Menuitems;