import styled from "@emotion/styled";

export const LoaderStyled = styled.div`
    position: relative;
    display: flex;
    // flex-direction: row-reverse;
    width: 60px;
    height: 15px;
    margin-left: auto;
    margin-right: auto;

    // background: red;
    // p {
    //     position: absolute;
    //     left: -80px;
    //     width: 220px;
    // }


        
    @keyframes stepFolowing {
        0% {
            opacity: 1;
        }
        25% {
            opacity: 1;
        }
        45% {
            opacity: 1;
        }
        55% {
            opacity: 0;
        }
        75% {
            opacity: 0;
        }
        100% {
            opacity: 0;
        }
    }
    .loader {fill:${({theme})=>theme.colors.yellow}};
    .loader_one {
        position: absolute;
        top: -3px;
        right: 0;
        width: 15px;
        height: 15px;
        // transform: rotateZ(15deg);
        
        animation-name: stepFolowing;
        animation-duration: 2400ms;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    .loader_two {
        position: absolute;
        top: 3px;
        right: 15px;
        width: 15px;
        height: 15px;
        // transform: rotateZ(335deg);
        transform: rotateX(180deg);
           
        animation-name: stepFolowing;
        animation-duration: 2400ms;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    .loader_three {
        position: absolute;
        top: -3px;
        right: 30px;
        width: 15px;
        height: 15px;
        // transform: rotateZ(15deg);
           
        animation-name: stepFolowing;
        animation-duration: 2400ms;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
    .loader_four {
        position: absolute;
        top: 3px;
        right: 45px;
        width: 15px;
        height: 15px;
        // transform: rotateZ(335deg);
        transform: rotateX(180deg);
             
        animation-name: stepFolowing;
        animation-duration: 2400ms;
        animation-timing-function: linear;
        animation-iteration-count: infinite;
    }
`;