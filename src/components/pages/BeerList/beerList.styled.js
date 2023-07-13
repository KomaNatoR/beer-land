import styled from "@emotion/styled";

export const ListHeaderStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:25px;

    width: 250px;
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
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:25px;

    width: 250px;
    min-height: calc(100vh - 95px);
    padding: 5px;
    margin-left: auto;
    margin-right: auto;

    background: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 20px;


    .list_item {
        width: 220px;
        // min-height: 300px;

        background: ${({ theme }) => theme.colors.pureWhite};
        border: 2px solid ${({ theme }) => theme.colors.yellow};
        border-radius: 20px;
        cursor: pointer;
        overflow: hidden;

        div:first-of-type {
            position: relative;
            display: flex;
            flex-direction: column;
            gap: 2px;
            width: 100%;
            height: 220px;
            padding-left: 5px;
            padding-left: 5px;
            margin-top: 20px;

            p {
                margin: 0;
                color: ${({ theme }) => theme.colors.gray};

                span {
                    font-weight: bold;
                    color: ${({ theme }) => theme.colors.black};
                }
            }
            img {
                position: absolute;
                top: -20px;
                left: -5px;
                display: inline-block;
                width: 100%;
                height: 240px;

                background: ${({ theme }) => theme.colors.gray};
                border-radius: 20px 20px 0px 0px;
                
                transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
            }
        }
        div:last-of-type {
            padding: 5px;
            text-align: center;

            h3 {
                margin: 0;
                color: ${({ theme }) => theme.colors.black};
            }
            p {
                color: ${({ theme }) => theme.colors.gray};
            }
        }

        :hover, :focus {
            img {
                transform: translateY(-220px);
            }
        }
    }
`;