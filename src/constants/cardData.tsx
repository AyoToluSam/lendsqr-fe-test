import icons from "./icons"

type cardDataTypes = {
  iconUrl: string,
  title: string,
  userNum: string,
  color: string
}

const cardData: cardDataTypes[] = [
  {
    iconUrl: icons.groupUsers,
    title: "USERS",
    userNum: "2,453",
    color: "pink"
  },
  {
    iconUrl: icons.activeUsers,
    title: "ACTIVE USERS",
    userNum: "2,453",
    color: "purple"
  },
  {
    iconUrl: icons.userLoans,
    title: "USERS WITH LOANS",
    userNum: "12,453",
    color: "orange"
  },
  {
    iconUrl: icons.userSavings,
    title: "USERS WITH SAVINGS",
    userNum: "102,453",
    color: "red"
  }
];

export default cardData