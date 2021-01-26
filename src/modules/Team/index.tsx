import React, { useCallback, createRef } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { GoDeviceDesktop } from 'react-icons/go';
import { CgMoreO } from 'react-icons/cg';
import { RiLayoutMasonryFill } from 'react-icons/ri';
import { HiSearch } from 'react-icons/hi';
import { SiMarketo } from 'react-icons/si';

import Card from './components/Card';
import Modal, { ModalHandles } from './components/Modal';
import { Container } from './styles';
import CardUser from './components/CardUser';
import Background from '../../components/Background';

const Team: React.FC = () => {
  const modalRef = createRef<ModalHandles>();

  const handleModal = useCallback(() => {
    modalRef.current?.handleOpenModal();
  }, [modalRef]);

  return (
    <Background>
      <Container>
        <section className="options">
          <p>Team Onboard</p>

          <div>
            <button type="button" className="addUser" onClick={handleModal}>
              <FaUserPlus size={15} />
              New Member
            </button>
          </div>
        </section>

        <section className="cards">
          <Card title="All team" value={20} icon={FiUsers} color="#1cb508" />
          <Card
            title="Dev`s"
            value={10}
            icon={GoDeviceDesktop}
            color="#2C88FF"
          />
          <Card
            title="Designer' s"
            value={2}
            icon={RiLayoutMasonryFill}
            color="#FB724B"
          />
          <Card title="Marketing" value={3} icon={SiMarketo} color="pink" />
          <Card title="Others" value={5} icon={CgMoreO} color="grey" />
        </section>

        <section className="list">
          <div className="listOptions">
            <h4>Team</h4>

            <div className="search">
              <HiSearch color="grey" size={20} />
              <input type="text" placeholder="Search" />
            </div>
          </div>

          <div className="usersList">
            <CardUser />
            <CardUser />
            <CardUser />
            <CardUser />
          </div>
        </section>

        <Modal ref={modalRef} />
      </Container>
    </Background>
  );
};

export default Team;
