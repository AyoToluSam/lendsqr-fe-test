import { icons } from '../../constants';
import { useDetails } from '../../App';

type CardProps = {
  cardTitle: string,
  cardContent: string
}

type Iinfo = {
  title : string,
  content: string
}

type IuserDetailsObj = {
  "Personal Information" : Iinfo[],
  "Education and Employment" : Iinfo[],
  "Socials" : Iinfo[],
  "Guarantor" : Iinfo[],
}

const DashboardUserDetails = () => {
  
  const data = useDetails();
  
  //Getting the data sent over from the dashboard page
  
  console.log(window.localStorage.hasOwnProperty("userDetails"))
  
  const userDetails = window.localStorage.getItem("userDetails");
  
  console.log("userDetails: ", userDetails);
  
  //Parsing the data
  
  const parsedData =  (userDetails !== undefined && userDetails !== null) ? JSON.parse(userDetails || "") : data[0]
  
  console.log("parsedData: ", parsedData)

  // Each card component

  const Card = ({cardTitle, cardContent}: CardProps) => {
    return (
      <div className='cards'>
        <p>{cardTitle}</p>
        <p>{cardContent}</p>
      </div>
    )
  }
  
  //An object containing arrays, to dynamically generate the user
  //information cards.
  
  const userDetailsObj: IuserDetailsObj = {
    "Personal Information" : [
      {
        title: "FULL NAME",
        content: parsedData.profile ? parsedData.profile.firstName + " " + parsedData.profile.lastName : "null"
      },
      {
        title: "PHONE NUMBER",
        content: parsedData.phoneNumber
      },
      {
        title: "EMAIL ADDRESS",
        content: parsedData.email
      },
      {
        title: "BVN",
        content: parsedData.profile ? parsedData.profile.bvn : "null"
      },
      {
        title: "GENDER",
        content: parsedData.profile ? parsedData.profile.gender : "null"
      },
      {
        title: "MARITAL STATUS",
        content: "N/A"
      },
      {
        title: "CHILDREN",
        content: "N/A"
      },
      {
        title: "TYPE OF RESIDENCE",
        content: "N/A"
      }
    ],
    "Education and Employment" : [
      {
        title: "LEVEL OF EDUCATION",
        content: parsedData.education ? parsedData.education.level : "null"
      },
      {
        title: "EMPLOYMENT STATUS",
        content: parsedData.education ? parsedData.education.employmentStatus : "null"
      },
      {
        title: "SECTOR OF EMPLOYMENT",
        content: parsedData.education ? parsedData.education.sector : "null"
      },
      {
        title: "DURATION OF EMPLOYMENT",
        content: parsedData.education ? parsedData.education.duration : "null"
      },
      {
        title: "OFFICE EMAIL",
        content: parsedData.education ? parsedData.education.officeEmail : "null"
      },
      {
        title: "MONTHLY INCOME",
        content: parsedData.education ? parsedData.education.monthlyIncome[0] + "-" + parsedData.education.monthlyIncome[1] : "null"
      },
      {
        title: "LOAN REPAYMENT",
        content: parsedData.education ? parsedData.education.loanRepayment : "null"
      }
    ],
    "Socials" : [
      {
        title: "TWITTER",
        content: parsedData.socials ? parsedData.socials.twitter : "null"
      },
      {
        title: "FACEBOOK",
        content: parsedData.socials ? parsedData.socials.facebook : "null"
      },
      {
        title: "INSTAGRAM",
        content: parsedData.socials ? parsedData.socials.instagram : "null"
      }
    ],
    "Guarantor" : [
      {
        title: "FULL NAME",
        content: parsedData.guarantor ? parsedData.guarantor.firstName + " " + parsedData.guarantor.lastName : "null"
      },
      {
        title: "PHONE NUMBER",
        content: parsedData.guarantor ? parsedData.guarantor.phoneNumber : "null"
      },
      {
        title: "EMAIL ADDRESS",
        content: "N/A"
      },
      {
        title: "RELATIONSHIP",
        content: "N/A" 
      }
    ],
  };

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