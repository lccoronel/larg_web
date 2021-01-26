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
          <h3>New member</h3>
          <button type="button" onClick={handleCloseModal}>
            <FiX color="#fff" size={20} />
          </button>
        </section>

        <section className="main">
          <h4>Create a new member to team</h4>
          <p>Create and add new members to our team and community</p>

          <form action="">
            <div className="row">
              <Input label="First Name" idLabel="firstName" />
              <Input label="Last Name" idLabel="lastName" inputRow />
            </div>

            <Input label="Birth of date" idLabel="birthDate" />

            <h4>Our functions</h4>
            <p>
              If a function is not here or you want to create another function
              you can configure it on the function page
            </p>

            <label htmlFor="cars" className="labelSelect">
              Office
              <select name="cars" id="cars">
                <option value="...">...</option>
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </label>

            <div className="row">
              <Input label="Phone" idLabel="Phone" />
              <Input label="E-mail" idLabel="email" inputRow />
            </div>

            <h4>Register address</h4>
            <p>
              Try to register looking for the zip code or fill in all the
              information
            </p>
            <div className="row">
              <Input
                label="Zip code"
                idLabel="zipCode"
                value={zipCode}
                onChange={v => setZipCode(v.target.value)}
              />
              <button type="button" onClick={handleSearchZipCode}>
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>

            <div className="row">
              <Input label="Address" idLabel="address" />
              <Input label="Neighborhood" idLabel="neighborhood" inputRow />
              <Input label="Number" idLabel="number" inputRow />
            </div>
          </form>
        </section>

        <section className="footer">
          <button type="button" onClick={handleCloseModal}>
            Cancelar
          </button>
          <button type="button" style={{ backgroundColor: '#2C88FF' }}>
            Salvar
          </button>
        </section>
      </div>
    </Container>
  );
});

export default Modal;
