import React from 'react';

import options from '../../helpers/dataMenu';
import { Container, ButtonMenu } from './styles';

const Background: React.FC = ({ children }) => {
  return (
    <Container>
      <div className="menu">
        <section className="info">
          <img
            src="https://avatars2.githubusercontent.com/u/54275445?s=460&u=ea9d639a1b02421e9ece251e5d5d319a651d43ba&v=4"
            alt="Lucas"
          />

          <div className="person">
            <h4>Lucas Coronel</h4>
            <p>
              <span>#Função em Larg</span>
              #Master
            </p>
          </div>
        </section>

        <section>
          {options.map(({ id, route, nome, icon: Icon, select }) => (
            <ButtonMenu to={route} key={id} selected={select}>
              <Icon size={25} color={select ? '#2c88ff' : '#fff'} />
              <p>{nome}</p>
            </ButtonMenu>
          ))}
        </section>
      </div>

      {children}
    </Container>
  );
};

export default Background;
