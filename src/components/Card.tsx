import styled from "styled-components";

const Card = styled.div`
    width: auto;
    height: auto;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
`;

const CardTitle = styled.span`
    font-size: medium;
    font-weight: bold;
    @media (max-width: 768px) {
        font-size: small;
    }
`;

const CardContent = styled.div`
    padding: 5px;
`;

export {
    Card,
    CardTitle,
    CardContent
};