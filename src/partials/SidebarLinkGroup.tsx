import { FC,ReactNode,useState } from 'react';

type TSidebarLinkGroup = {
    children?: (handleClick: () => void, open: boolean) => ReactNode;
    activecondition?: boolean;
  }
  const SidebarLinkGroup: FC<TSidebarLinkGroup> = ({ children, activecondition }) =>{

  const [open, setOpen] = useState(!!activecondition);

  const handleClick = () => {
    setOpen(!open);
  }

  return (
    <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${activecondition && 'bg-[#E3E4E9]'}`}>
      {children && children(handleClick, open)}
    </li>
  );
}

export default SidebarLinkGroup;