import styled from "@emotion/styled";

export const ToTopButtStyled = styled.div`
    position: fixed;
    right: 20px;
    bottom: 50px;
    z-index: 998;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.scrollButtBlack};
    cursor: pointer;

    :hover .chat_svg,
    :hover p {
        display: block;
    }
    .chat_svg {
        display: none;

        position: absolute;
        top: -70px;
        right: 30px;
        
        width: 80px;
        height: 80px;

        fill: ${({ theme }) => theme.colors.yellow};
    }
    p {
        display: none;

        position: absolute;
        top: -66px;
        right: 38px;

        font-weight: bold;

        color: ${({ theme }) => theme.colors.black};
    }
    .shevron_svg {
        fill: ${({ theme }) => theme.colors.gray};
    }
    :hover .shevron_svg {
        fill: ${({ theme }) => theme.colors.yellow};
    }
`;

export const ToDownButtStyled = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 998;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.scrollButtBlack};
    cursor: pointer;

    :hover .chat_svg,
    :hover p {
        display: block;
    }
    .chat_svg {
        display: none;

        position: absolute;
        top: -70px;
        right: 30px;
        
        width: 80px;
        height: 80px;

        fill: ${({ theme }) => theme.colors.yellow};
    }
    p {
        display: none;

        position: absolute;
        top: -66px;
        right: 38px;

        width: 60px;
        font-weight: bold;

        color: ${({ theme }) => theme.colors.black};
    }
    .shevron_svg {
        fill: ${({ theme }) => theme.colors.gray};
    }
    :hover .shevron_svg {
        fill: ${({ theme }) => theme.colors.yellow};
    }
`;