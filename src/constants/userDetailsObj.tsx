import { parsedData } from "../components/DashboardUserDetails/DashboardUserDetails";

export type Iinfo = {
  title : string,
  content: string
}

export type IuserDetailsObj = {
  "Personal Information" : Iinfo[],
  "Education and Employment" : Iinfo[],
  "Socials" : Iinfo[],
  "Guarantor" : Iinfo[],
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


export default userDetailsObj