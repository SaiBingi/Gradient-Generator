import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionItemDetails, isActive, onChangeDirection} = props
  const {displayText, value} = directionItemDetails

  const onClickDirection = () => {
    onChangeDirection(value)
  }

  return (
    <DirectionButton isActive={isActive} onClick={onClickDirection}>
      <ListItem>{displayText}</ListItem>
    </DirectionButton>
  )
}

export default GradientDirectionItem
