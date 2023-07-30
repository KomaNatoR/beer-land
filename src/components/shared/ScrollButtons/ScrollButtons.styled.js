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

    svg {
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

    svg {
        fill: ${({ theme }) => theme.colors.yellow};
    }
`;