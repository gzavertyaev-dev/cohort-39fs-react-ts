import { useState } from "react";
import MUIButton from '@mui/material/Button';

import Button from "components/Button/Button";
import Modal from "components/Modal/Modal";

import { PageWrapper, ButtonControl } from "./styles";

function Consultation_03() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <PageWrapper>
      <ButtonControl>
        <Button name="Open Modal" onClick={openModal} />
      </ButtonControl>
      <MUIButton variant="outlined">Outlined</MUIButton>
      <Modal open={isModalOpen} onClose={closeModal}>
        <p>Conformation modal</p>
      </Modal>
    </PageWrapper>
  );
}

export default Consultation_03;
