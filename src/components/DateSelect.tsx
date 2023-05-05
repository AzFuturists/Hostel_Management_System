import styled from 'styled-components';

const DateSelectContainer = styled.div`
    width: 120px;
    height: 25px;
    margin-left: auto;
`;

const DateSelect = styled.select`
    width: 100%;
    height: 100%;
    border: 2px solid deepskyblue;
    border-radius: 5px;
    color: deepskyblue;
    &::selection {
        background-color: deepskyblue;
    }
`;

export {
    DateSelect,
    DateSelectContainer
};