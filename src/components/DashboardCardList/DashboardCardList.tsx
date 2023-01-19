import './DashboardCardList.scss'
import { cardData } from '../../constants'

type CardProps = {
  cardDetails: {
    iconUrl: string,
    title: string,
    userNum: number
  }
}

const DashboardCardList = () => {
  
  const Card = ({cardDetails}: CardProps) => {
    return (
    <div className='dashboard_cards'>
      <div><img src={cardDetails.iconUrl} alt="" /></div>
      <p>{cardDetails.title}</p>
      <p>{cardDetails.userNum}</p>
    </div>
    )
  }

  return (
    <div className='dashboard_cardlist'>
      {
        cardData.map( (card, i) => {
          return (
            <Card key={i} cardDetails ={card} />
          )
        })
      }
    </div>
  )
}

export default DashboardCardList