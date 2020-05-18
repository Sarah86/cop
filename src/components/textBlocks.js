import React from 'react'

import {
  PaddedContentBox,
  ParagraphLink,
  ParagraphTitle,
  Paragraph,
  List,
  PaddedText,
  InternalParagraphLink,
} from '../components/typography'

import { FadeParagraphTitle } from '../components/FadeElements'

export const CongressoFirstBlock = () => (
  <PaddedContentBox skewedOnDesktop className="text-justify">
    <ParagraphTitle reversedSkew className="text-lg-right">
      o congresso
    </ParagraphTitle>
    <Paragraph lastLineRightDesktop reversedSkew>
    Agentes de todos os estados da federação e de outros países, poderão trocar conhecimento e ter contato com o que de mais novo e eficiente está disponível no mercado.
    </Paragraph>
    <Paragraph lastLineRightDesktop reversedSkew>
    O público civil, praticantes de esportes outdoor, atiradores e colecionadores de armas também terão atividades e programação própria, pela primeira vez em nosso país, a integração da sociedade e segurança pública, juntos numa única missão, valorizar nossos nobres heróis e buscar uma sociedade mais justa e segura.
    </Paragraph>
    <Paragraph lastLineRightDesktop reversedSkew>
      A cidade-sede escolhida é pelo segundo ano consecutivo a belíssima{' '}
      <ParagraphLink href="http://www.pmf.sc.gov.br" target="_blank" rel="noopener noreferrer">
        Florianópolis
      </ParagraphLink>
      , que por sua vez abriga o moderno{' '}
      <ParagraphLink
        href="https://www.facebook.com/CentrodeEventosGovernadorLuizHenriquedaSilveira"
        target="_blank"
        rel="noopener noreferrer"
      >
        Centro de Eventos Governador Luiz Henrique da Silveira
      </ParagraphLink>
      .
    </Paragraph>
  </PaddedContentBox>
)

export const CongressoSecondBlock = () => (
  <PaddedContentBox className="text-justify">
    <FadeParagraphTitle sm>o congresso</FadeParagraphTitle>
    <PaddedText>
      <Paragraph>Durante os três dias de evento, o COP colocará em contato direto:</Paragraph>
      <List>
        <li>Autoridades nacionais e internacionais;</li>
        <li>Agentes de segurança pública;</li>
        <li>As principais marcas do setor;</li>
        <li>E a sociedade civil.</li>
      </List>
      <Paragraph>
        A intensa programação de{' '}
        <InternalParagraphLink to="/palestras-e-workshops">Palestras</InternalParagraphLink> e{' '}
        <InternalParagraphLink to="/palestras-e-workshops">Exposições</InternalParagraphLink> será
        uma oportunidade única adquirir conhecimento, ter contato com o que existe de mais moderno
        em táticas e equipamentos de defesa e debater pontos críticos da segurança pública; sempre
        na direção de uma sociedade mais segura.
      </Paragraph>
    </PaddedText>
  </PaddedContentBox>
)
