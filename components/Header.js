import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from '../routes';

export default () => {
  return (
    <Menu attached='top' style={{ marginTop: '33px' }}>
      <Link route='/'>
        <a className='item'>Back Room Deals</a>
      </Link>
    </Menu>
  );
};
