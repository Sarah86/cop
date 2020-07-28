import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'
import styled from 'styled-components'

import { Paragraph, TitleH3 } from '../components/typography'
import '../components/modal.css'

const StyledModal = styled(Modal)`
  .modal-content {
    background-color: var(--blackpearl);
  }
  .close {
    color: white;
  }
`

const ModalCorona = () => {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    handleShow()
  }, [])

  return (
    <>
      <StyledModal show={show} onHide={handleClose} centered={true} size="lg">
        <Modal.Header closeButton>
          <TitleH3>
            COMUNICADO DO <strong>CONGRESSO INTERNACIONAL DE OPERAÇÕES POLICIAIS </strong> SOBRE O
            CORONAVÍRUS
          </TitleH3>
        </Modal.Header>
        <Modal.Body>
          <Paragraph>
            Por motivo de possível expansão do vírus <strong>(COVID-19)</strong> no estado de Santa
            Catarina e seguindo recomendação do Ministério da Saúde, das secretarias: Estadual e
            Municipal de Florianópolis, e em cumprimento ao decreto N. 21.340 publicado na data de
            hoje (<strong>sexta-feira - 13 de março de 2020</strong>), a organização do COP
            Internacional comunica o{' '}
            <strong>
              adiamento do Congresso Internacional de 2020 que aconteceria nos dias 17, 18 e 19 de
              março de 2020
            </strong>
            , no Centro de Eventos Luiz Henrique da Silveira.
          </Paragraph>
          <Paragraph>
            <strong>A nova data está sendo programada para o segundo semestre de 2020</strong>,
            estando normalizado a crise nacional sobre Coronavírus.
          </Paragraph>
          <Paragraph style={{ paddingLeft: '2em' }}>
            “Informo a todos que está <strong>proibida</strong>, a partir de segunda-feira,{' '}
            <strong>16 de março</strong>, a realização de eventos na cidade de Florianópolis com
            mais de 250 pessoas, ao ar livre, e 100 pessoas, em ambientes fechados. A medida,
            decidida junto a nossa área técnica da saúde, e baseada em resultados internacionais e
            recomendações nacionais, visa diminuir o risco exponencial de contágio.”<br></br>
            <strong>Gean Loureiro - Prefeito de Florianópolis</strong>
          </Paragraph>
          <Paragraph>
            Agradecemos a compreensão de todos os envolvidos como autoridades, expositores,
            fornecedores e os mais de cinco mil congressistas confirmados no COP 2020.
          </Paragraph>
        </Modal.Body>
      </StyledModal>
    </>
  )
}

export default ModalCorona
