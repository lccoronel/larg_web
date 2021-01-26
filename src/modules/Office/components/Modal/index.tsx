import React, { useCallback, useState, useImperativeHandle } from 'react';
import { FiX } from 'react-icons/fi';
import axios from 'axios';

import Input from '../Input';
import { Container } from './styles';

export interface ModalHandles {
  handleOpenModal: () => void;
}

const Modal = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false);
  const [zipCode, setZipCode] = useState('');
  const [loading, setLoading] = useState(false);

  const handleOpenModal = useCallback(() => setVisible(true), []);
  const handleCloseModal = useCallback(() => setVisible(false), []);

  useImperativeHandle(ref, () => {
    return {
      handleOpenModal,
    };
  });

  const handleSearchZipCode = useCallback(async () => {
    setLoading(true);
    await axios.get(`https://viacep.com.br/ws/${zipCode}/json/`);

    setLoading(false);
  }, [zipCode]);

  return (
    <Container open={visible} onClose={handleCloseModal}>
      <div className="containerModal">
        <section className="header">
          <h3>New function</h3>
          <button type="button" onClick={handleCloseModal}>
            <FiX color="#fff" size={20} />
          </button>
        </section>

        <section className="main">
          <h4>Create a new function to company</h4>
          <p>Create and add new functions to our company</p>

          <form action="">
            <Input label="Name" idLabel="Name" />

            <h4>Level</h4>
            <p>Choose a level that this function will have</p>

            <label htmlFor="cars" className="labelSelect">
              Level
              <select name="cars" id="cars">
                <option value="...">...</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </label>

            <Input label="Description" idLabel="Description" />
          </form>
        </section>

        <section className="footer">
          <button type="button" onClick={handleCloseModal}>
            Cancel
          </button>
          <button type="button" style={{ backgroundColor: '#2C88FF' }}>
            Save
          </button>
        </section>
      </div>
    </Container>
  );
});

export default Modal;
