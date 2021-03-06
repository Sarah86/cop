import styled from 'styled-components'
import Isotipo from '../images/logo_cop_isotipo.png'

const Background = styled.div`
  position: absolute;
  width: 128%;
  height: 118%;
  background-image: url(${Isotipo});
  background-position: top right;
  background-position: ${props => props.position};
  background-repeat: no-repeat;
  background-size: 65%;
  background-size: ${props => props.size};
  z-index: -1;
  left: ${props => props.left};
  top: ${props => props.top};
`

export default Background
