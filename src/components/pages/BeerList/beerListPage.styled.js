import styled from "@emotion/styled";

export const ListHeaderStyled = styled.div`
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    gap:25px;

    max-width: 1280px;
    padding: 5px;
    margin-left: auto;
    margin-right: auto;

    background: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 20px;

    h2 {
        color: ${({ theme }) => theme.colors.gray};
    }
    a {
        height: 22px;
        padding: 5px;
        
        font-weight: bolder;
        text-align: center;
        text-decoration: none;

        color: ${({ theme }) => theme.colors.gray};
        background: ${({ theme }) => theme.colors.yellow};
        border: 2px solid ${({ theme }) => theme.colors.gray};
        border-radius: 12px;
    }
`;

export const ListMainStyled = styled.div`
    max-width: 1280px;
    min-height: calc(100vh - 95px);
    padding: 5px;
    margin-left: auto;
    margin-right: auto;

    background: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 20px;


    ul {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 10px;

        padding: 0;
        margin: 0;
        list-style: none;

        li {
            width: 240px;
            // flex: auto;
        }
    }
    .error_p {
        text-align: center;
        color: ${({ theme }) => theme.colors.gray};
    }
`;