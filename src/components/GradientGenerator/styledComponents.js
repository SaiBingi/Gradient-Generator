import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
  background-size: cover;
  height: 100vh;
  font-family: 'Roboto';
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

export const Heading = styled.h1`
  color: #ededed;
  font-size: 30px;
  margin: 0;

  @media screen and (max-width: 767px) {
    font-size: 22px;
    max-width: 250px;
    line-height: 1.3;
  }
`

export const CustomText = styled.p`
  color: #ededed;
  padding-top: 20px;
  padding-bottom: 15px;
  font-size: 20px;
  font-weight: 500;

  @media screen and (max-width: 767px) {
    font-size: 18px;
    padding-top: 16px;
    padding-bottom: 14px;
  }
`
export const List = styled.ul`
  padding: 0px;
  margin: 1px;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const ColorContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-left: 25px;
  margin-right: 25px;
`

export const Input = styled.input`
  outline: none;
  border: none;
  width: 90px;
  height: 45px;
  background-color: transparent;
`

export const Label = styled.p`
  margin: 5px;
  color: #ffffff;
  font-weight: 500;
  margin-bottom: 15px;

  @media screen and (max-width: 767px) {
    margin-bottom: 13px;
  }
`

export const CustomButton = styled.button`
  color: #1e293b;
  background-color: #00c9b7;
  border-radius: 4px;
  padding: 10px 20px 10px 20px;
  border: none;
  font-family: 'Roboto';
  font-weight: 600;
  font-size: 14px;
  margin-top: 25px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    margin-top: 22px;
    font-size: 13px;
  }
`
