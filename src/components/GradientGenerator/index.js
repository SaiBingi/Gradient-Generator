import {Component} from 'react'
import GradientDirectionItem from '../GradientDirectionItem'
import {
  BgContainer,
  Container,
  Heading,
  CustomText,
  List,
  ColorContainer,
  InputContainer,
  Label,
  Input,
  CustomButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    activeDirectionInput: gradientDirectionsList[0].value,
    inputColor1: '#8ae323',
    inputColor2: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
    color1: '#8ae323',
    color2: '#014f7b',
  }

  onChangeDirection = activeDirectionInput => {
    this.setState({activeDirectionInput})
  }

  onChangeColor1 = event => {
    this.setState({inputColor1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({inputColor2: event.target.value})
  }

  onClickGenerate = () => {
    const {activeDirectionInput, inputColor1, inputColor2} = this.state

    this.setState({
      activeDirection: activeDirectionInput,
      color1: inputColor1,
      color2: inputColor2,
    })
  }

  render() {
    const {
      activeDirectionInput,
      inputColor1,
      inputColor2,
      activeDirection,
      color1,
      color2,
    } = this.state

    return (
      <BgContainer
        data-testid="gradientGenerator"
        direction={activeDirection}
        color1={color1}
        color2={color2}
      >
        <Container>
          <Heading>Generate a CSS Color Gradient</Heading>
          <CustomText>Choose Direction</CustomText>
          <List>
            {gradientDirectionsList.map(directionItem => (
              <GradientDirectionItem
                key={directionItem.directionId}
                directionItemDetails={directionItem}
                isActive={activeDirectionInput === directionItem.value}
                onChangeDirection={this.onChangeDirection}
              />
            ))}
          </List>
          <CustomText>Pick the Colors</CustomText>
          <ColorContainer>
            <InputContainer>
              <Label htmlFor="color1">{inputColor1}</Label>
              <Input
                type="color"
                onChange={this.onChangeColor1}
                id="color1"
                value={inputColor1}
              />
            </InputContainer>
            <InputContainer>
              <Label htmlFor="color2">{inputColor2}</Label>
              <Input
                type="color"
                onChange={this.onChangeColor2}
                id="color2"
                value={inputColor2}
              />
            </InputContainer>
          </ColorContainer>
          <CustomButton type="button" onClick={this.onClickGenerate}>
            Generate
          </CustomButton>
        </Container>
      </BgContainer>
    )
  }
}

export default GradientGenerator
