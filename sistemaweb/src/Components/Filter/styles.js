import styled from "styled-components";

export const Container = styled.div`
    width: 150px;
    height: 50px;
    background: ${props => props.activation ? '#FF3812': '#000000'};
    padding: 1px;
    cursor: pointer;
    border-radius: 5px;
  
    
    
    img{
        width:25px;
        height:25px;
    }

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    
    span{
        color: #FFF;
        font-weight: bold;
        align-self: flex-end;
        font-size: 14px;
    }

    &:hover{
        background: #FF3812;
    }
`