import React, { useState, useEffect } from "react"
import { Modal, Button } from "react-bootstrap"
import styled from "styled-components"

import {Paragraph, TitleH3} from "../components/typography"

const StyledModal = styled(Modal)`
    .modal-content  {
        background-color: var(--blackpearl);
    }
    .close {
        color: white;
    }
    
`

const ModalCorona = () => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        handleShow();
    },[])
  
    return (
      <>  
        <StyledModal show={show} onHide={handleClose} centered={true} size='lg'>
          <Modal.Header closeButton>
            <TitleH3>COMUNICADO DO <strong>CONGRESSO INTERNACIONAL DE OPERAÇÕES POLICIAIS </strong> SOBRE O CORONAVÍRUS</TitleH3>
          </Modal.Header>
          <Modal.Body>
            <Paragraph><strong>O COP 2020</strong>, preocupado com a transmissão do <strong>SARS-CoV-2 (Covid-19)</strong>, e com a saúde e bem-estar de seu público, seguindo as orientações do Ministério da Saúde e das Secretárias estadual e municipal de saúde, entidades que estão monitorando o possível avanço do vírus em Santa Catarina, vem tomando em conjunto com a organização do evento as medidas que minimizem 
            o risco de infecção, sem risco para a realização do evento, no qual <strong>está garantida a sua realização.</strong></Paragraph>
            <Paragraph>O <strong>COP</strong> reforça que, aqueles que tenham viajado para o exterior nas últimas duas semanas ou tenham tido contato com pessoas que tenham voltado de viagem neste período, <strong>redobrem a atenção aos sintomas.</strong></Paragraph>
          </Modal.Body>
        </StyledModal>
      </>
    );
  }
  
  export default ModalCorona