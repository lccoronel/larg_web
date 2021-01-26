import { IconBaseProps } from 'react-icons';
import { HiUsers } from 'react-icons/hi';
import { IoIosHome } from 'react-icons/io';
import { MdWork } from 'react-icons/md';

export interface MenuOptions {
  id: number;
  nome: string;
  route: string;
  icon: React.ComponentType<IconBaseProps>;
  select: boolean;
}

const options: MenuOptions[] = [
  {
    id: 0,
    nome: 'Home',
    route: '/home',
    icon: IoIosHome,
    select: false,
  },
  {
    id: 1,
    nome: 'Team',
    route: '/team',
    icon: HiUsers,
    select: false,
  },
  {
    id: 2,
    nome: 'Offices',
    route: '/office',
    icon: MdWork,
    select: false,
  },
];

export default options;
