import { useState, useEffect, useContext } from 'react'
import './DashboardUserDetails.scss'
import { icons } from '../../constants'

const DashboardUserDetails = () => {
  
  const [userDetails, setUserDetails] = useState<any>([]);

  useEffect(() => {
    const userDetails: any = window.localStorage.getItem("userDetails");
  
    return () => {
      setUserDetails(JSON.parse(userDetails));
    }
  }, [])
  

  let userDetailsArray = [
    {
      "Personal Information" : [
        {
          title: "FULL NAME",
          content: userDetails.profile.firstName + " " + userDetails.profile.lastName
        },
        {
          title: "PHONE NUMBER",
          content: userDetails.phoneNumber
        },
        {
          title: "EMAIL ADDRESS",
          content: userDetails.email
        },
        {
          title: "BVN",
          content: userDetails.profile.bvn
        },
        {
          title: "GENDER",
          content: userDetails.profile.gender
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
      ]
    },
    {
      "Education and Employment" : [
        {
          title: "LEVEL OF EDUCATION",
          content: userDetails.education.level
        },
        {
          title: "EMPLOYMENT STATUS",
          content: userDetails.education.employmentStatus
        },
        {
          title: "SECTOR OF EMPLOYMENT",
          content: userDetails.education.sector
        },
        {
          title: "DURATION OF EMPLOYMENT",
          content: userDetails.education.duration
        },
        {
          title: "OFFICE EMAIL",
          content: userDetails.education.officeEmail
        },
        {
          title: "MONTHLY INCOME",
          content: userDetails.education.monthlyIncome[0] + "-" + userDetails.education.monthlyIncome[1]
        },
        {
          title: "LOAN REPAYMENT",
          content: userDetails.education.loanRepayment
        }
      ]
    },
    {
      "Socials" : [
        {
          title: "TWITTER",
          content: userDetails.socials.twitter
        },
        {
          title: "FACEBOOK",
          content: userDetails.socials.facebook
        },
        {
          title: "INSTAGRAM",
          content: userDetails.socials.instagram
        }
      ]
    },
    {
      "Guarantor" : [
        {
          title: "FULL NAME",
          content: userDetails.guarantor.firstName + " " + userDetails.guarantor.lastName
        },
        {
          title: "PHONE NUMBER",
          content: userDetails.guarantor.phoneNumber
        },
        {
          title: "EMAIL ADDRESS",
          content: "N/A"
        },
        {
          title: "RELATIONSHIP",
          content: "N/A" 
        }
      ]
    },
  ];
  
  let detailsInfo = userDetailsArray.map((details : { [key: string]: any }) => {

    const infoTitle = Object.keys(details)[0];
    const cardTitle = details[infoTitle].title
    const cardContent = details[infoTitle].content

    return (
      <div className='info_section'>
        <p className='section_title'>{infoTitle}</p>
        <div className='section_cards'>
          <div>
            <p>{cardTitle}</p>
            <p>{cardContent}</p>
          </div>
        </div>
      </div>
    )
  })

  return (
    <div className='userDetails'>
      <div className='userDetails_header'>
        <div className='header_mainInfo'>
          <div className='user'>
            <div><img src="" alt="" /></div>
            <div className='user_name'>
              <h2>Grace Effiom</h2>
              <p>LSQFf587g90</p>
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
            <h2>₦200,000.00</h2>
            <p>9912345678/Providus Bank</p>
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
      <div className='userDetails_info'>
        {detailsInfo}
      </div>
    </div>
  )
}

export default DashboardUserDetails