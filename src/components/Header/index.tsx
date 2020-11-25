import React from 'react';

import { Link } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <img src={Logo} alt="GoFinances" />
      <nav>
        {
          <>
            <Link to='/import'>
              <h2>Importar</h2>
            </Link>
            <Link to='/'>
              <h2>Dashboard</h2>
            </Link>
          </>
        }
      </nav>
    </header>
  </Container>
);

export default Header;
