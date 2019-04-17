import React from 'react';
import { NavLink } from 'react-router-dom';

interface ILink {
  to: string;
  label: string;
  icon: string;
}

interface IProps {
  links: ILink[]
}

export const BottomNavigation = (props: IProps) => (
  <div className="bottom-navigation">
    {props.links.map(link => (
      <NavLink className="bottom-navigation-item"
        to={link.to}
        title={link.label}
        activeClassName="selected"
        key={link.to}>
        <i className={'icon iconfont ' + link.icon} />
      </NavLink>
    ))}
  </div>
);
