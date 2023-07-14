import styled from "@emotion/styled";

export const ListHeaderStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:25px;

    width: 320px;
    padding: 5px;
    margin-left: auto;
    margin-right: auto;

    background: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 20px;

    h2 {
        color: ${({ theme }) => theme.colors.yellow};
    }
`;
export const ListMainStyled = styled.div`
    // display: flex;
    // flex-direction: column;
    // align-items: center;
    // gap:25px;

    // width: 320px;
    min-height: calc(100vh - 95px);
    padding: 5px;
    margin-left: auto;
    margin-right: auto;

    background: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 20px;


    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;

        padding: 0;
        margin: 0;
        list-style: none;

        li {
            width: 260px;
            // flex: auto;
        }
    }
`;