import styled from "@emotion/styled";

export const GreetingStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:25px;

    width: 250px;
    height: 200px;
    margin-top: 10vh;
    margin-left: auto;
    margin-right: auto;

    background: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 20px;

    h1 {
        text-align: center;
        color:${({theme})=>theme.colors.yellow};
    }
    a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 10px;

        border-radius: 40px;
        font-family: inherit;
        font-weight: 600;
        font-size: 16px;
        line-height: calc(22 / 16);
        letter-spacing: 0.04em;
        text-decoration: none;

        padding: 8px 20px;
        border: 2px solid ${({ theme }) => theme.colors.yellow};
        color:${({ theme }) => theme.colors.yellow};
        background: ${({ theme }) => theme.colors.pureWhite};

        @keyframes ding {
            0% {
                transform: scale(1);
            }
            70% {
                transform: scale(1.5);
            }
            100% {
                transform: scale(1);
            }
        }

        transition: background 300ms cubic-bezier(0.4, 0, 0.2, 1),
        color 300ms cubic-bezier(0.4, 0, 0.2, 1);
        :hover, :focus {
            padding: 10px 22px;
            color:${({ theme }) => theme.colors.white};
            background: ${({ theme }) => theme.colors.yellow};
            border: none;

            svg {
                animation-name: ding;
                animation-duration: 500ms;
                animation-timing-function: linear;
            }
        }
    }
`;//pureWhite