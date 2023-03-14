import styled from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #171923;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  align-items: center;
  justify-content: center;
`

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #322659;
  border-radius: 5px;
  width: 300px;
  height: 600px;
  align-items: center;
  justify-content: center;
  h1{
    margin-top: 30px;
    color: white;
  }
  .ImgDiv{
    display: flex;
    width: 200px;
    height: 200px;
    img{
      width: 100%;
      height: 100%;
    }
  }
`

export const Buttons = styled.button`
    width: 80px;
    height: 30px;
    cursor: pointer;
    background-color: transparent;
    border-radius: 5px;
    background-color: #1A365D;
    border: none;
    color: white;
    &:hover{
      opacity: 0.8;
      transition: 2s;
    }
    `

export const ContainerButtons = styled.div`
      display: flex;
      gap: 10px;
  `

  export const Input = styled.input`
    height: 30px;
    outline: none;
    padding-left: 15px;
  `

  export const ContainerInput = styled.div`
    display: flex;
    flex-direction: row;
    gap: 5px;
    button{
      cursor: pointer;
    }
  `