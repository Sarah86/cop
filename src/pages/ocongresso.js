import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'

import Layout from '../components/layout'
import Image from '../components/image'
import { PaddedContentBox, Paragraph, ListOl, PaddedText, ReadMore } from '../components/typography'
import Photo from '../components/photo'
import LinkedPhoto from '../components/LinkedPhoto'
import FramedVideo from '../components/framedVideo'
import Botao from '../components/botao'
import Background from '../components/background'
import FullWidth from '../components/fullwidth'
import Separador from '../components/separador'
import { FadeParagraphTitle } from '../components/FadeElements'
import LinkedImage from '../components/LinkedImage'
import { CongressoFirstBlock, CongressoSecondBlock } from '../components/textBlocks'
import OCongressoMobile from '../components/oCongressoMobile'


const Dados = require('../data/dados.json')
const Cronograma = require('../data/cronograma.json')

const FullWidthInscricao = styled(FullWidth)`
  background-color: var(--amber);
  text-align: center;
  padding: 1.5em;
  margin-top: 1.5em;
`

const Video = () => (
  //Aguardando video. Substituir pelo banner
  <>
    <PaddedContentBox>
      <h1>o congresso</h1>
    </PaddedContentBox>
    <FramedVideo
      url="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
      controls
      width="100%"
      height="100%"
    />
  </>
)

// Desktop

const OCongressoDesktopFirstBlock = () => (
  <>
    <Container style={{ position: 'relative' }}>
      <Background />
      <Row>
        <Col className="pt-5">
          <CongressoFirstBlock />
        </Col>
        <Col>
          <Image imgName="ocongresso_composite.png" />
        </Col>
      </Row>
    </Container>
    <FullWidthInscricao>
      <Botao
        inverted
        texto="Inscreva-se Agora!"
        width="19em"
        fontSize="2em"
        borderWidth="9px"
        padding="1em"
        to={Dados.linkInscricao}
      />
    </FullWidthInscricao>
  </>
)

const TemasInteresse = () => (
  <PaddedContentBox>
    <FadeParagraphTitle sm>temas de interesse</FadeParagraphTitle>
    <ListOl>
      <li>Operações de Choque;</li>
      <li>Operações Especiais;</li>
      <li>Operações de Fronteiras;</li>
      <li>Tiro Policiais - Sniper;</li>
      <li>Proteção Dignatário;</li>
      <li>Sistema Prisional;</li>
      <li>Operações de Inteligência;</li>
      <li>Operações Integradas Promotoria e Judiciário;</li>
      <li>Tecnologia aplicada a operações policiais;</li>
      <li>Licitações Internacionais;</li>
      <li>Operações Policiais em outros países.</li>
    </ListOl>
  </PaddedContentBox>
)

const OCongressoDesktopSecondBlock = () => (
  <div className="mt-5">
    <Photo imgName="ocongresso_auditorio.jpg" />
    <Container style={{ position: 'relative' }}>
      <Background position="left top" left="-40%" />
      <Row>
        <Col>
          <CongressoSecondBlock />
        </Col>
        <Col>
          <TemasInteresse />
        </Col>
      </Row>
    </Container>
  </div>
)

const OCongressoDesktopThirdBlock = () => (
  <Container className="mt-5">
    <Row>
      <Col className="text-justify d-flex flex-column">
        <Photo imgName="ocongresso_foto_abopesp.jpg" />
        <FadeParagraphTitle sm>4º enpoe - 2020</FadeParagraphTitle>
        <div className="d-flex flex-column justify-content-between flex-grow-1">
          <PaddedText>
            <Paragraph>
            O <strong>Encontro Nacional de Profissionais de Operações especiais (4º ENPOE - 2020)</strong> já tem data e local marcado, será dentro do COP Internacional nos dias 17, 18 e 19 de março de 2020, em Florianópolis-SC.  
            A direção da <strong>ABOPESP (Associação Brasileira de Operações Especiais)</strong>, realizadora do encontro, fez o anúncio durante o último evento que ocorreu  em Fortaleza-CE. 
            </Paragraph>
            <Paragraph>
            O Encontro visa deliberar <strong>temas importantes</strong> relacionados às atividades de Operações Especiais, como doutrina mundial e emprego de novas tecnologias, além do Feedback para empresas fornecedoras de equipamentos e material bélico. Poderão participar Militares e Policiais possuidores do curso de Operações Especiais ou que operem em Unidades de OE de suas Instituições e convidados.
            </Paragraph>
            <LinkedImage
              imgName="ocongresso_logos_sociais_abopesp.png"
              to="https://abopesp.com.br/"
              className="w-75"
              noyellowlayer
            />
          </PaddedText>
          <Separador sm widthTotal="100px" />
        </div>
      </Col>
       <Col>
       <Photo imgName="destaque_triplo_home_3.jpg" />
        <FadeParagraphTitle size="2.5em" width="3.65em">
          clínicas &  workshops
        </FadeParagraphTitle>
        <Paragraph>
        <strong>Reunião Técnica da Coordenadoria Geral de fronteiras da Secretaria de Op. Integradas do Ministério da Justiça e Segurança Pública.</strong>
        </Paragraph>
        <Paragraph>
        Prioridade de <strong>combate ao crime de fronteiras</strong>, o encontro do Ministério da Justiça e Segurança Pública tem entre seus projetos estratégicos a integração entre as principais lideranças que atuam em área de fronteiras.
        </Paragraph>
        <Paragraph>
        O objetivo é blindar o país da entrada de armas, drogas e produtos contrabandeados pelos cerca de 16 mil quilômetros de fronteira.  Entre as linhas de atuação estão as <strong>operações integradas, aquisição de equipamentos, capacitações e bases operacionais com integração de sistemas</strong>.
        </Paragraph>
      </Col>
      <Col className="text-justify d-flex flex-column">
        <Photo imgName="ocongresso_foto_social.jpg" />
        <FadeParagraphTitle sm>ações sociais</FadeParagraphTitle>
        <div className="d-flex flex-column justify-content-between flex-grow-1">
          <PaddedText>
            <Paragraph>
              O COP Internacional fará a coleta de alimentos não-perecíveis durante os 3 dias de
              evento.
            </Paragraph>
            <Paragraph>
              Então ao participar do congresso você estará automaticamente ajudando duas
              instituições filantrópicas da cidade-sede do evento: A Igreja Bola de Neve e o SEOVE
              Caridade.
            </Paragraph>
            <Paragraph>
              <strong>É obrigatória a doação de 1kg de alimento não-perecível.</strong>
            </Paragraph>
            <div className="d-flex justify-content-between" style={{ width: '50%' }}>
              <LinkedImage
                imgName="ocongresso_logos_sociais_seove.png"
                to="http://seove.org.br/"
                className="mx-1"
                noyellowlayer
              />
              <LinkedImage
                imgName="ocongresso_logos_sociais_boladeneve.png"
                to="http://www.boladeneve.com/"
                className="mx-1"
                noyellowlayer
              />
            </div>
          </PaddedText>
          <Separador sm widthTotal="100px" />
        </div>
      </Col>
    </Row>
  </Container>
)

const OCongressoDesktopForthBlock = () => {
  const PalestranteContainer = Cronograma.slice(0, 8).map((dia,i) => (
    <>
      {dia.atividades.map((atividade,i) => (
        <>
          {atividade.palestrante ? (
            <Col lg={3} className="p-1" key={i} style={{order: `${atividade.ordemGaleriaOCongresso}`}}>
              <LinkedPhoto
                key={atividade.slug}
                imgName={atividade.imagem}
                title={atividade.palestrante}
                subtitle={atividade.qualificacao}
                to={`/agenda-e-palestrantes/${atividade.slug}`}
              />
            </Col>
          ) : null}
        </>
      ))}
    </>
  ))
  return (
    <Container className="mt-5 position-relative">
      <Background />
      <FadeParagraphTitle>palestrantes</FadeParagraphTitle>
      <Row noGutters>{PalestranteContainer}</Row>
      <ReadMore className="align-self-end" to="/agenda-e-palestrantes">
        veja a programação
      </ReadMore>
    </Container>
  )
}

const OCongressoDesktop = () => (
  <MediaQuery minWidth={992}>
    <OCongressoDesktopFirstBlock />
    <OCongressoDesktopSecondBlock />
    <Separador center sm widthTotal="80%" />
    <OCongressoDesktopThirdBlock />
    <OCongressoDesktopForthBlock />
  </MediaQuery>
)


const OCongresso = () => (
    <Layout>
        <OCongressoMobile />
        <OCongressoDesktop />
    </Layout>
)


export default OCongresso

//Por pedido do cliente, foi removido o conteudo do Congresso Mobile e alocado na home, index.js
