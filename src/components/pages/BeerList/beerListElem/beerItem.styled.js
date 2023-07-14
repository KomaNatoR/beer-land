import styled from "@emotion/styled";

export const BeerItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-basis: 320px;
    min-height: 100%;

    background: ${({ theme }) => theme.colors.pureWhite};
    border: 2px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 20px;
    cursor: pointer;
    overflow: hidden;

    div:first-of-type {
        box-sizing: border-box;
        position: relative;
        // display: flex;
        // flex-direction: column;
        // gap: 2px;
        flex-grow: 1;

        width: 100%;
        padding: 20px 5px;

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
            top: 0;
            left: 0;
            display: inline-block;
            width: 100%;
            height: 100%;
            object-fit: contain;

            background: ${({ theme }) => theme.colors.gray};
            border-radius: 20px 20px 0px 0px;
            
            transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
    }
    div:last-of-type {
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: space-between;;
        height: 100px;

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
            transform: translateY(-98%);
        }
    }

`;