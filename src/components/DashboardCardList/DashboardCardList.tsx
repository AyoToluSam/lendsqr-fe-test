import './DashboardCardList.scss'
import { cardData } from '../../constants'

type CardProps = {
  cardDetails: {
    iconUrl: string,
    title: string,
    userNum: string,
    color: string
  }
}

const DashboardCardList = () => {
  
  const Card = ({cardDetails}: CardProps) => {
    return (
    <div className='dashboard_cards'>
      <div className={"cardImg " + cardDetails.color}><img src={cardDetails.iconUrl} alt="" /></div>
      <p>{cardDetails.title}</p>
      <h2>{cardDetails.userNum}</h2>
    </div>
    )
  }

  return (
    <div className='dashboard_cardlist'>
      {
        cardData.map( (card, i) => {
          return (
            <Card key={i} cardDetails={card} />
          )
        })
      }
    </div>
  )
}

export default DashboardCardList