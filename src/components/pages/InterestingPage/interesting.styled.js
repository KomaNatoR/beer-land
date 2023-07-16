import styled from "@emotion/styled";

export const InterestingStyled = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;

    width: 480px;
    min-height: 200px;
    padding: 0px 22px 12px 22px;
    margin-top: 6vh;
    margin-left: auto;
    margin-right: auto;

    background: ${({ theme }) => theme.colors.white};
    border: 2px solid ${({ theme }) => theme.colors.yellow};
    border-radius: 0 20px 20px 20px;

    h2 {
        text-align: center;
        color:${({theme})=>theme.colors.yellow};
    }
    h3 {
        color:${({theme})=>theme.colors.gray};
    }
    p {
        margin: 0;
        color:${({ theme }) => theme.colors.gray};
        span {
            margin-left: 22px;
        }
    }

    > div:first-of-type {
        position: absolute;
        top: -42px;
        left: -2px;

        display: flex;
        gap: 2px;
    }
    .int_pages {
        position: absolute;
        top: 8px;
        z-index: -1;
        border-radius: 12px 12px 0 0;
    }
    .int_pages.active {
        top: 0;
        z-index: 0;

        padding: 8px 20px;
        background: ${({ theme }) => theme.colors.white};
        border-bottom-color: transparent;
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

    }
    > div:last-of-type {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 22px;
    }
    .down_links {
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
`;