import styled from "@emotion/styled";

export const BeerItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    // flex-basis: 320px;
    min-height: 100%;

    background: ${({ theme, isSelected}) => isSelected ? theme.colors.lightBlue : theme.colors.pureWhite};
    border: 2px solid ${({ theme, isSelected}) => isSelected ? theme.colors.blue : theme.colors.yellow};
    border-radius: 20px;
    box-shadow: ${({ theme }) => theme.shadows.small};

    cursor: pointer;
    overflow: hidden;

    div:first-of-type {
        box-sizing: border-box;
        position: relative;
        flex-grow: 1;

        width: 100%;
        padding: 20px 5px;

        
        .btn_remove {
            box-sizing: content-box;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            z-index: 2;

            // width: 32px;
            height: 36px;

            background: ${({ theme }) => theme.colors.yellow};
            border: 0px solid ${({ theme }) => theme.colors.blue};
            border-radius: 20px 20px 0px 0px;
            cursor: pointer;
        }
        p {
            margin: 0;
            color: ${({ theme }) => theme.colors.gray};

            span {
                font-weight: bold;
                color: ${({ theme }) => theme.colors.gray};
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

            background: ${({ theme }) => theme.colors.lightGray};;
            border-radius: 16px 16px 0px 0px;
            
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
            color: ${({ theme }) => theme.colors.yellow};
        }
        p {
            color: ${({ theme }) => theme.colors.gray};
        }
    }

    :hover, :focus {
        img {
            transform: rotateY(90deg);
        }
    }
`;

export const BeerRecipeStyled = styled.div`
    box-sizing: border-box;

    width: 768px;
    min-height: 320px;
    padding: 0px 10px 40px 20px;

    color: ${({ theme }) => theme.colors.yellow};
    border-radius: 20px;

    p {
        margin: 0;

        text-align: start;
        font-weight: bolder; 
        color: ${({ theme }) => theme.colors.yellow};

        span {
            font-weight: normal;; 
            color: ${({ theme }) => theme.colors.gray};
        }
    }
    div {
        margin: 0;

        text-align: start;
        font-weight: bolder; 
        color: ${({ theme }) => theme.colors.yellow};

        span {
            font-weight: normal;; 
            color: ${({ theme }) => theme.colors.gray};
        }
    }
`;