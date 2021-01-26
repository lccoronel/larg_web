import React, { createRef, useCallback } from 'react';
import { FaUserPlus } from 'react-icons/fa';
import { HiSearch } from 'react-icons/hi';
import { AiOutlineArrowUp } from 'react-icons/ai';

import Background from '../../components/Background';

import { Container } from './styles';
import Modal, { ModalHandles } from './components/Modal';

const Office: React.FC = () => {
  const modalRef = createRef<ModalHandles>();

  const handleModal = useCallback(() => {
    modalRef.current?.handleOpenModal();
  }, [modalRef]);

  return (
    <Background>
      <Container>
        <section className="options">
          <p>Offices Onboard</p>

          <div>
            <button type="button" className="addUser" onClick={handleModal}>
              <FaUserPlus size={15} />
              New Office
            </button>
          </div>
        </section>

        <section className="list">
          <div className="listOptions">
            <h4>Offices</h4>

            <div className="search">
              <HiSearch color="grey" size={20} />
              <input type="text" placeholder="Search" />
            </div>
          </div>

          <div className="functionsList">
            <div className="function">
              <div className="headerFunction">
                <div>
                  <h3>Dev - frontend</h3>
                  <p>Periodo integral</p>
                </div>

                <div className="infos">
                  <section className="level">
                    <h2>5</h2>
                    <p>Level</p>
                  </section>
                  <section className="situacion">
                    <AiOutlineArrowUp size={25} />
                    <p>Up</p>
                  </section>
                </div>
              </div>

              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officiis eligendi maxime ratione, quaerat eos tempore
                consequatur perspiciatis sint veritatis dolor expedita ad
                excepturi, quo labore optio molestias architecto voluptate aut.
              </p>
            </div>
          </div>
        </section>
        <Modal ref={modalRef} />
      </Container>
    </Background>
  );
};

export default Office;
