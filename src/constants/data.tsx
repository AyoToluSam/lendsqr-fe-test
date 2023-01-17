import icons from "./icons"

type dashboardDataTypes = {
  id: number,
  iconUrl?: any,
  title: string,
  iconUrl2?: any,
  heading?: boolean
}

const dashboardData: dashboardDataTypes[] = [
  {
   id: 0,
   iconUrl: {icons.briefcase},
   title: "Switch Organization",
   iconUrl2: {icons.dropdown}
  },
  {
    id: 1,
    iconUrl: {icons.home},
    title: "Dashboard"
  },
  {
    id: 2,
    title: "CUSTOMERS",
    heading: true
  },
  {
    id: 3,
    iconUrl: {icons.userFriends},
    title: "Users"
  },
  {
    id: 4,
    iconUrl: {icons.users},
    title: "Guarantors"
  },
  {
    id: 5,
    iconUrl: {icons.sack},
    title: "Loans"
  },
  {
    id: 6,
    iconUrl: {icons.handshake},
    title: "Decision Models"
  },
  {
    id: 7,
    iconUrl: {icons.piggyBank},
    title: "Savings"
  },
  {
    id: 8,
    iconUrl: {icons.loan},
    title: "Loan Requests"
  },
  {
    id: 9,
    iconUrl: {icons.userCheck},
    title: "Whitelist"
  },
  {
    id: 10,
    iconUrl: {icons.userTimes},
    title: "Karma"
  },
  {
    id: 11,
    title: "Businesses",
    heading: true
  },
  {
    id: 12,
    iconUrl: {icons.briefcase},
    title: "Organization"
  },
  {
    id: 13,
    iconUrl: {icons.loan},
    title: "Loan Products"
  },
  {
    id: 14,
    iconUrl: {icons.savings},
    title: "Savings Product"
  },
  {
    id: 15,
    iconUrl: {icons.coins},
    title: "Fees and Charges"
  },
  {
    id: 16,
    iconUrl: {icons.transactions},
    title: "Transactions"
  },
  {
    id: 17,
    iconUrl: {icons.galaxy},
    title: "Services"
  },
  {
    id: 18,
    iconUrl: {icons.userCog},
    title: "Service Account"
  },
  {
    id: 19,
    iconUrl: {icons.scroll},
    title: "Settlements"
  },
  {
    id: 20,
    iconUrl: {icons.chartBar},
    title: "Reports"
  },
  {
    id: 21,
    title: "Settings",
    heading: true
  },
  {
    id: 22,
    iconUrl: {icons.sliders},
    title: "Preferences"
  },
  {
    id: 23,
    iconUrl: {icons.badgePercent},
    title: "Fees and Pricing"
  },
  {
    id: 24,
    iconUrl: {icons.clipboard},
    title: "Audit Logs"
  },
]

export default dashboardData