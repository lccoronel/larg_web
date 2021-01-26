import React from 'react';

import { Container } from './styles';

const CardUser: React.FC = () => {
  return (
    <Container>
      <section className="info">
        <img
          src="https://avatars2.githubusercontent.com/u/54275445?s=460&u=ea9d639a1b02421e9ece251e5d5d319a651d43ba&v=4"
          alt="Lucas"
        />

        <section>
          <h4>Lucas Coronel</h4>
          <p>lccoronel7@icloud.com</p>
          <p>1 project</p>

          <section className="functions">
            <div className="office">
              <p>master</p>
            </div>
            <div className="office">
              <p>dev</p>
            </div>
          </section>
        </section>
      </section>

      <button type="button">
        <p>View more</p>
      </button>
    </Container>
  );
};

export default CardUser;
