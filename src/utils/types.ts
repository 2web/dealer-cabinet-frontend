import { ReactNode } from "react";

export interface OrdersTableItemGeneric {
  id: string;
  image: string;
  order: string;
  orderdesc: string;
  date: string;
  customer: string;
  status: string;
  type: string;
  description: string;
  error: string;
}

export interface OrdersTableItemProps extends OrdersTableItemGeneric {
  handleClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
}

export interface CSSTransitionGeneric {
  show: boolean;
  enter?: string;
  enterStart?: string;
  enterEnd?: string;
  leave?: string;
  leaveStart?: string;
  leaveEnd?: string;
  appear?: boolean;
  unmountOnExit?: boolean;
  tag: string;
  children: ReactNode;
}

export interface TooltipProps {
  children: React.ReactNode; // Specify the type for the 'children' prop
  className?: string;
  bg?: string;
  size?: string;
  position?: string;
}