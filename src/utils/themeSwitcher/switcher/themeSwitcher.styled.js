import styled from "@emotion/styled";

export const SwitcherStyled = styled.p`
    display: flex;
    position: absolute;
    top: 5px;
    margin: 0;
    cursor: pointer;

    svg path {
        fill: ${({ theme }) => theme.colors.puerBlack};
    }
    span {
        font-weight: 500;
        font-size: 12px;
        line-height: calc(16 / 12);
        color: ${({ theme }) => theme.colors.black};
    }
`;