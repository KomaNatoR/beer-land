// Створення КАСТОМНИХ силей!


// Можете змінювати їх по бажанню!

export const customModalStyles = ({colors}) => `
    position: absolute;
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    top: 0%;
    left: 50%;
    font-family: Manrope, "Segoe UI";
    background-color: rgba(0,0,0,0);
    transform: translate(-50%, 0%);
    box-shadow: 3px 8px 14px rgba(136, 198, 253, 0.19);

    // overflow-y: scroll;

@media (min-width: 768px) {
    top: 10%;

}
`;
//  font-family: Manrope, "Segoe UI";