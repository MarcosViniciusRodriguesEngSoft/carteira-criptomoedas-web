import styled from 'styled-components';
import Pixel from "../../_assets/img/img-btn/btn_pixel.png";

/********************************| BTN Padrão |********************************/
export const Btn = styled.span`

    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;
    color: white;
  
    margin: 20px;
    padding: 10px 50px;
  
    border: 2px solid violet;
    position: relative;
    overflow: hidden;
    
    &:before{
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        background-color: darkviolet;
        z-index: -1;
        transition: .7s ease;
        
    }

`;

/********************************| BTN fundo preenche ao mesmo tempo para os dois lados |********************************/
export const BTNTwoSides = styled(Btn)`
    &:before{
        width: 0;
        height: 100%;
        transform: translate(-50%, -50%);
    }

    &:hover{
        &:before{
            width: 100%;
        }
    }
`;

/********************************| BTN fundo preenche ao mesmo tempo para cima e baixo |********************************/
export const BTNUpDown = styled(Btn)`

    &:before{
        width: 110%;
        height: 0;
        transform: translate(-50%, -50%);
    }

    &:hover{
        &:before{
            height: 100%;
        }
    }
`;

/********************************| BTN fundo preenche ao mesmo tempo diagonal para a esquerda |********************************/
export const BTNDiagonallyLeft = styled(Btn)`

    &:before{
        width: 110%;
        height: 0;
        transform: translate(-50%, -50%) rotate(45deg);
    }

    &:hover{
        &:before{
            height: 350%;
        }
    }
`;

/********************************| BTN fundo preenche ao mesmo tempo diagonal para a direita |********************************/
export const BTNDiagonallyRight = styled(Btn)`

    &:before{
        width: 110%;
        height: 0;
        transform: translate(-50%, -50%) rotate(-45deg);
    }

    &:hover{
        &:before{
            height: 350%;
        }
    }
`;

/********************************| BTN fundo preenche em forma de circulo |********************************/
export const BTNFullCycle = styled(Btn)`

    &:before{
        width: 110%;
        height: 0;
        border-radius: 50%;
        transform: translate(-50%, -50%);
    }

    &:hover{
        &:before{
            height: 350%;
        }
    }
`;

/********************************| BTN fundo com rotação |********************************/
export const BTNRotation = styled(Btn)`

    &:before{
        width: 100%;
        height: 0;
        transform: translate(-50%, -50%) rotate(-360deg);
        transition: .7s ease;
    }
  
      &:hover{
          &:before{
            height: 350%;
            transform: translate(-100%, -100%) rotate(-180deg);
            background-color: blueviolet;
          }
      }
    &:hover{
          &:before{
            height: 100%;
            transform: translate(-50%, -50%) rotate(-3600deg);
            background-color: red;
        }
    }
`;

/********************************| BTN fundo preenche para a direita |********************************/
export const BTNFillRight = styled(Btn)`

    &:before{
        width: 0;
        height: 100%;
        top: 0%;
        left: 0%;
    }

    &:hover{
        &:before{
            width: 100%;
            transition: .7s ease;
        }
    }
`;

/********************************| BTN fundo preenche deveria preencher para esquerda "VERIFICAR" |********************************/
export const BtnVerificar = styled(Btn)`

    &:before{
        width: 0%;
        height: 100%;
        top: 0%;
        right: 0%;
    }
    &:hover{
        &:before{
            width: 100%;
            transition: .7s ease;
        }
    }
`;

/********************************| BTN fundo move para direita |********************************/
export const BTNMoveRight = styled(Btn)`

    &:before{
        width: 100%;
        height: 100%;

        top: 0;
        left: 0;

        transform: scaleX(0);
        transform-origin: right;
        transition: transform 300ms ease-in;
    }
    &:hover{
        &:before{
            transform: scaleX(1);
            transform-origin: left;
        }
    }
`;

/********************************| BTN fundo move para esquerda |********************************/
export const BTNMoveLeft = styled(Btn)`

    &:before{
        width: 100%;
        height: 100%;

        top: 0;
        left: 0;

        transform: scaleX(0);
        transform-origin: left;
        transition: transform 300ms ease-in;
    }
    &:hover{
        &:before{
            transform: scaleX(1);
            transform-origin: right;
        }
    }
`;

/********************************| BTN fundo move de cima para baixo |********************************/
export const BTNMoveUpDown = styled(Btn)`

    &:before{
        width: 100%;
        height: 100%;

        top: 0;
        left: 0;

        transform: scaleY(0);
        transform-origin: bottom;
        transition: transform 300ms ease-in;
    }
    &:hover{
        &:before{
            transform: scaleY(1);
            transform-origin: top;
        }
    }
`;

/********************************| BTN fundo move de baixo para cima |********************************/
export const BTNMoveDownUp = styled(Btn)`

    &:before{
        width: 100%;
        height: 100%;

        top: 0;
        left: 0;

        transform: scaleY(0);
        transform-origin: top;
        transition: transform 300ms ease-in;
    }
    &:hover{
        &:before{
            transform: scaleY(1);
            transform-origin: bottom;
        }
    }
`;

/********************************| BTN2 Botão |********************************/
export const Btn2 = styled.span`

    display: flex;
    justify-content: center;
    position: relative;
    margin: 20px;
    padding: 10px 50px;
    color: var(--branco);
    border: 2px solid rgb(138, 43, 226);
    text-decoration: none;
    cursor: pointer;
    transition: .5s;
`;

/********************************| BTN2 especial pixel|********************************/
export const BTNPixel = styled(Btn2)`

    &:hover{
        background: #730bec url(${Pixel});
        background-size: 100%;
        transition-delay: 0.8s;
        animation: animate1 0.8s steps(8) forwards;
    }

    @keyframes animate1{
        0%{
            background-position-y: 0;
        }
            100%{
            background-position-y: -480px;
        }
    }    
`;

/********************************| BTN borda que completa ao colocar a seta no botão |********************************/
export const BTNMoveBorder = styled(Btn2)`

    span{
    position: relative;
    z-index: 3;
    }

    &::before{
        content: "";

        width: calc(100% + 2px);
        height: calc(100% - 12px);

        position: absolute;
        top: 6px;
        left: -1px;

        background: lightslategray;

        transition: .5s ease-in-out;
        transform: scaleY(1);
    }

    &:hover{
        &:before{
            transform: scaleY(0);
        }
    }
    
    &:after{
        content: "";

        width: calc(100% - 12px);
        height: calc(100% + 4px);

        position: absolute;
        top: -2px;
        left: 6px;

        background: lightslategray;

        transition: .5s ease-in-out;
        transform: scaleX(1);
    }

    &:hover{
        &:after{
            transform: scaleX(0);
        }
    }
`;

/********************************| BTN2 com efeito especial circular bordar e acender o fundo|********************************/
export const BTNCircleEdgeLight = styled(Btn2)`

    position: absolute;
    overflow: hidden;
    border-radius: 20px;
    border-color: var(--vermelho);

    transition: .2s;

    &:hover{
        color: var(--branco);
        background: var(--vermelho);
        box-shadow: 0 0 10px var(--vermelho), 0 0 15px var(--vermelho), 0 0 30px var(--vermelho);  

        transition-delay: 1s;
    }

    span{
        position: absolute;
        display: block;
    }

    span:nth-child(1){
        width: 100%;
        height: 2px;

        top: 0;
        left: -100%;

        background: linear-gradient(88.89deg, transparent, var(--vermelho));
    }
   
    &:hover span:nth-child(1){
        left: 100%;
        transition: 1s;
    }

    span:nth-child(2){
        width: 2px;
        height: 100%;

        right: 0;
        top: -100%;

        background: linear-gradient(181.44deg, transparent, var(--vermelho));
    }

    &:hover span:nth-child(2){
        top: 100%;
        transition: 1s;
        transition-delay: .25s;
    }

    span:nth-child(3){
        width: 100%;
        height: 2px;

        bottom: 0;
        right: -100%;

        background: linear-gradient(269.44deg, transparent, var(--vermelho));
    }

    
    &:hover span:nth-child(3){
        right: 100%;
        transition: 1s;
        transition-delay: .5s;
    }

    span:nth-child(4){
        width: 2px;
        height: 100%;

        left: 0;
        bottom: -100%;

        background: linear-gradient(359.88deg, transparent, var(--vermelho));
    }

    &:hover span:nth-child(4){
        bottom: 100%;
        transition: 1s;
        transition-delay: .75s;
    }

`;