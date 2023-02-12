import { icons } from '../../constants'
import { userDetailsObj } from '../../constants';
import { Iinfo } from '../../constants/userDetailsObj';

type CardProps = {
  cardTitle: string,
  cardContent: string
}
//Getting the data sent over from the dashboard page

const userDetails = window.localStorage.getItem("userDetails");
console.log(userDetails)

//Parsing the data

export const parsedData = JSON.parse(userDetails || "")
console.log("parsedData: ", parsedData)

const DashboardUserDetails = () => {

  // Each card component

  const Card = ({cardTitle, cardContent}: CardProps) => {
    return (
      <div className='cards'>
        <p>{cardTitle}</p>
        <p>{cardContent}</p>
      </div>
    )
  }

// Generating the information sections and placing the cards accordingly.

  const sectionTitles : string[] = Object.keys(userDetailsObj);

  const getSections = sectionTitles.map((sectionTitle, i) => {
    let allCards : JSX.Element[] = [];
    const info : Iinfo[] = userDetailsObj[sectionTitle as keyof typeof userDetailsObj]
    info.map((tile, j) => {
      const cardTitle = tile.title
      const cardContent = tile.content
      allCards.push(<Card key={j} cardTitle={cardTitle} cardContent={cardContent} />)
    })
    return (
    <div key={i} className="section_details">
      <p className='section_title'>
        {sectionTitle}
      </p>
      <div className='section_cards'>
        {allCards}
      </div>
    </div>
    )
  })

  return (
    <div className='userDetails'>
      <div className='userDetails_header'>
        <div className='header_mainInfo'>
          <div className='user'>
            <div className='user_img'><img src={parsedData.profile.avatar} alt="" /></div>
            <div className='user_name'>
              <h2>{parsedData.profile.firstName + " " + parsedData.profile.lastName}</h2>
              <p>{parsedData.userName}</p>
            </div>
          </div>
          <div className='user_tier'>
            <p>User's Tier</p>
            <div className='tier_star'>
              <img src={icons.starFilled} alt="star" />
              <img src={icons.starLine} alt="star" />
              <img src={icons.starLine} alt="star" />
            </div>
          </div>
          <div className='user_account'>
            <h2>{"₦" + parsedData.accountBalance}</h2>
            <p>{parsedData.accountNumber + "/" + parsedData.orgName}</p>
          </div>
        </div>
        <div className='info_headings'>
          <p>General Details</p>
          <p>Documents</p>
          <p>Bank Details</p>
          <p>Loans</p>
          <p>Savings</p>
          <p>App and System</p>
        </div>
      </div>
      <div className='info_section'>
        {getSections}
      </div>
    </div>
  )
}

export default DashboardUserDetails