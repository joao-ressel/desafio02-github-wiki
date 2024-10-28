import styles from "styled-components";

export const ButtonContainer = styles.button`
    border: 2px solid #ccc;
    border-radius: 20px;
    background-color: #ccc;

    height: 62px;
    width: 80%;
    &:hover{
        background-color: #cccccc80;
        cursor: pointer;
    }

`;
