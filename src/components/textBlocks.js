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
      Depois do sucesso absoluto da estreia em 2018 o Congresso de Operações Policiais retorna mais
      abrangente, inclusivo, dinâmico, informativo e tecnológico.
    </Paragraph>
    <Paragraph lastLineRightDesktop reversedSkew>
      Congresso se realizará de forma gratuita nos dias 17, 18 e 19 de Março de 2019 para um público
      diário de aproximadamente 2000 pessoas.
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
        <InternalParagraphLink to="/agenda-e-palestrantes">Palestras</InternalParagraphLink> e{' '}
        <InternalParagraphLink to="/agenda-e-palestrantes">Exposições</InternalParagraphLink> será
        uma oportunidade única adquirir conhecimento, ter contato com o que existe de mais moderno
        em táticas e equipamentos de defesa e debater pontos críticos da segurança pública; sempre
        na direção de uma sociedade mais segura.
      </Paragraph>
    </PaddedText>
  </PaddedContentBox>
)
