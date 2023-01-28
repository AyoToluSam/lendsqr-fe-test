import { icons } from '../../constants'


type cardDataTypes = {
  iconUrl: string,
  title: string,
  userNum: string,
  color: string
}


type CardProps = {
  cardDetails: {
    iconUrl: string,
    title: string,
    userNum: string,
    color: string
  }
}

const DashboardCardList = ({data} : any) => {
  
  const Card = ({cardDetails}: CardProps) => {
    return (
    <div className='dashboard_cards'>
      <div className={"cardImg " + cardDetails.color}><img src={cardDetails.iconUrl} alt="" /></div>
      <p>{cardDetails.title}</p>
      <h2>{cardDetails.userNum}</h2>
    </div>
    )
  }

  const users = data.length
  let activeUsers = 0
  let usersLoans = 0
  let usersSavings = 0
  data.map( (each : any) => {
    if (each.status === "Active") {
      activeUsers++
    }
    if (Number(each.education.loanRepayment) > 0 ) {
      usersLoans++
    }
    if (Number(each.accountBalance) > 0 ) {
      usersSavings++
    }
  })

  const cardData: cardDataTypes[] = [
    {
      iconUrl: icons.groupUsers,
      title: "USERS",
      userNum: users,
      color: "pink"
    },
    {
      iconUrl: icons.activeUsers,
      title: "ACTIVE USERS",
      userNum: activeUsers,
      color: "purple"
    },
    {
      iconUrl: icons.userLoans,
      title: "USERS WITH LOANS",
      userNum: usersLoans,
      color: "orange"
    },
    {
      iconUrl: icons.userSavings,
      title: "USERS WITH SAVINGS",
      userNum: usersSavings,
      color: "red"
    }
  ];


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