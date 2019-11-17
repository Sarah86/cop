import React from 'react'
import { Carousel } from 'react-bootstrap'
import CarouselCaption from 'react-bootstrap/CarouselCaption'
import styled from 'styled-components'

import Image from '../components/image'

import { MolduraTop, MolduraBottom } from '../components/moldura'
import { CarouselCaptionTitle } from '../components/typography'
import Shadow from '../components/shadow'

const StyledCarouselCaption = styled(CarouselCaption)`
  && {
    bottom: 0;
    padding: 0;
    text-align: left;
    left: 7%;
    right: 7%;
  }
`

export const CongressoFirstCarousel = () => {
  const Slides = [
    {
      imagem: 'ocongresso_slider01-01.jpg',
      caption: 'Ct. Eventos. Gov. Luiz H. Silveira',
    },
    {
      imagem: 'ocongresso_slider01-02.jpg',
      caption: 'Auditório',
    },
    {
      imagem: 'ocongresso_slider01-03.jpg',
      caption: 'Chegando em Florianópolis',
    },
    {
      imagem: 'ocongresso_slider01-04.jpg',
      caption: 'Ponte Hercílio Luz',
    },
    {
      imagem: 'ocongresso_slider01-05.jpg',
      caption: 'Credenciamento',
    },
    {
      imagem: 'ocongresso_slider01-06.jpg',
      caption: 'Hall',
    },
    {
      imagem: 'ocongresso_slider01-07.jpg',
      caption: 'Tradução simultânea',
    },
    {
      imagem: 'ocongresso_slider01-08.jpg',
      caption: 'Controle auditório',
    },
    {
      imagem: 'ocongresso_slider01-09.jpg',
      caption: 'Público',
    },
    {
      imagem: 'ocongresso_slider01-10.jpg',
      caption: 'Instalação no hall',
    },
    {
      imagem: 'ocongresso_slider01-11.jpg',
      caption: 'Autoridades',
    },
    {
      imagem: 'ocongresso_slider01-12.jpg',
      caption: 'Sinalização',
    },
  ]

  const CarouselItem = Slides.map((slide,i) => (
    <Carousel.Item key={i}>
      <Image imgName={slide.imagem} />
      <StyledCarouselCaption>
        <CarouselCaptionTitle>{slide.caption}</CarouselCaptionTitle>
      </StyledCarouselCaption>
    </Carousel.Item>
  ))
  return (
    <div style={{ position: 'relative' }}>
      <MolduraTop />
      <Carousel indicators={false}>{CarouselItem}</Carousel>
      <MolduraBottom />
      <Shadow />
    </div>
  )
}

export const CongressoSecondCarousel = () => {
  const Slides = [
    {
      imagem: 'ocongresso_slider02-01.jpg',
      caption: 'Autoridades',
    },
    {
      imagem: 'ocongresso_slider02-02.jpg',
      caption: 'Palestrante internacional',
    },
    {
      imagem: 'ocongresso_slider02-03.jpg',
      caption: 'Cobertura midiática',
    },
    {
      imagem: 'ocongresso_slider02-04.jpg',
      caption: 'Entrevista',
    },
    {
      imagem: 'ocongresso_slider02-05.jpg',
      caption: 'Cobertura midiática',
    },
    {
      imagem: 'ocongresso_slider02-06.jpg',
      caption: 'Entrevista',
    },
    {
      imagem: 'ocongresso_slider02-07.jpg',
      caption: 'Stand 5.11 Tactical',
    },
    {
      imagem: 'ocongresso_slider02-08.jpg',
      caption: 'Workshop',
    },
    {
      imagem: 'ocongresso_slider02-09.jpg',
      caption: 'Vigilância e tecnologia',
    },
    {
      imagem: 'ocongresso_slider02-10.jpg',
      caption: 'Stand Condor Não Letal',
    },
    {
      imagem: 'ocongresso_slider02-11.jpg',
      caption: 'Stand Taurus',
    },
  ]

  const CarouselItem = Slides.map((slide,i) => (
    <Carousel.Item key={i}>
      <Image imgName={slide.imagem} />
      <StyledCarouselCaption>
        <CarouselCaptionTitle>{slide.caption}</CarouselCaptionTitle>
      </StyledCarouselCaption>
    </Carousel.Item>
  ))
  return (
    <div style={{ position: 'relative' }}>
      <MolduraTop />
      <Carousel indicators={false}>{CarouselItem}</Carousel>
      <MolduraBottom />
      <Shadow />
    </div>
  )
}

export const AgendaEPalestrantesCarousel = () => {
  const Slides = [
    {
      imagem: 'palestrantes_topbanner_01.jpg',
    },
    {
      imagem: 'palestrantes_topbanner_02.jpg',
    },
    {
      imagem: 'palestrantes_topbanner_03.jpg',
    },
    {
      imagem: 'palestrantes_topbanner_04.jpg',
    },
    {
      imagem: 'palestrantes_topbanner_05.jpg',
    }
  ]

  const CarouselItem = Slides.map((slide,i) => (
    <Carousel.Item key={i}>
      <Image imgName={slide.imagem} />
    </Carousel.Item>
  ))
  return (
    <div style={{ position: 'relative' }}>
      <MolduraTop />
      <Carousel indicators={false}>{CarouselItem}</Carousel>
      <MolduraBottom />
      <Shadow />
    </div>
  )
}