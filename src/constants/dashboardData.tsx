import icons from "./icons"

type dashboardDataTypes = {
  id: number,
  iconUrl?: string,
  title: string,
  iconUrl2?: string,
  className: string,
  extraDiv?: boolean,
  notDisplay?: boolean
}

const dashboardData: dashboardDataTypes[] = [
  {
   id: 0,
   iconUrl: icons.briefcase,
   title: "Switch Organization",
   iconUrl2: icons.dropdownThin,
   className: "dropdown_main first"
  },
  {
    id: 1,
    iconUrl: icons.home,
    title: "Dashboard",
    className: "dropdown_list"
  },
  {
    id: 2,
    title: "CUSTOMERS",
    className: "dropdown_heading"
  },
  {
    id: 3,
    iconUrl: icons.userFriends,
    title: "Users",
    className: "dropdown_main highlightParent paddingTop",
    extraDiv: true
  },
  {
    id: 4,
    iconUrl: icons.users,
    title: "Guarantors",
    className: "dropdown_list"
  },
  {
    id: 5,
    iconUrl: icons.sack,
    title: "Loans",
    className: "dropdown_list"
  },
  {
    id: 6,
    iconUrl: icons.handshake,
    title: "Decision Models",
    className: "dropdown_list"
  },
  {
    id: 7,
    iconUrl: icons.piggyBank,
    title: "Savings",
    className: "dropdown_list"
  },
  {
    id: 8,
    iconUrl: icons.loan,
    title: "Loan Requests",
    className: "dropdown_list"
  },
  {
    id: 9,
    iconUrl: icons.userCheck,
    title: "Whitelist",
    className: "dropdown_list"
  },
  {
    id: 10,
    iconUrl: icons.userTimes,
    title: "Karma",
    className: "dropdown_list"
  },
  {
    id: 11,
    title: "BUSINESSES",
    className: "dropdown_heading"
  },
  {
    id: 12,
    iconUrl: icons.briefcase,
    title: "Organization",
    className: "dropdown_list paddingTop"
  },
  {
    id: 13,
    iconUrl: icons.loan,
    title: "Loan Products",
    className: "dropdown_list"
  },
  {
    id: 14,
    iconUrl: icons.savings,
    title: "Savings Product",
    className: "dropdown_list"
  },
  {
    id: 15,
    iconUrl: icons.coins,
    title: "Fees and Charges",
    className: "dropdown_list"
  },
  {
    id: 16,
    iconUrl: icons.transaction,
    title: "Transactions",
    className: "dropdown_list"
  },
  {
    id: 17,
    iconUrl: icons.galaxy,
    title: "Services",
    className: "dropdown_list"
  },
  {
    id: 18,
    iconUrl: icons.userCog,
    title: "Service Account",
    className: "dropdown_list"
  },
  {
    id: 19,
    iconUrl: icons.scroll,
    title: "Settlements",
    className: "dropdown_list"
  },
  {
    id: 20,
    iconUrl: icons.chartBar,
    title: "Reports",
    className: "dropdown_list"
  },
  {
    id: 21,
    title: "SETTINGS",
    className: "dropdown_heading"
  },
  {
    id: 22,
    iconUrl: icons.sliders,
    title: "Preferences",
    className: "dropdown_list paddingTop"
  },
  {
    id: 23,
    iconUrl: icons.badgePercent,
    title: "Fees and Pricing",
    className: "dropdown_list"
  },
  {
    id: 24,
    iconUrl: icons.clipboard,
    title: "Audit Logs",
    className: "dropdown_list"
  },
  {
    id: 25,
    iconUrl: icons.tire,
    title: "Systems Messages",
    className: "dropdown_list displayNone",
    notDisplay: true
  },
  {
    id: 26,
    iconUrl: icons.signOut,
    title: "Logout",
    className: "dropdown_main signOut displayNone",
    notDisplay: true
  },
  {
    id: 27,
    title: "v1.2.0",
    className: "version displayNone",
    notDisplay: true
  },
];

export default dashboardData