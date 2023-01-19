import icons from "./icons"

type cardDataTypes = {
  iconUrl: string,
  title: string,
  userNum: string
}

const cardData: cardDataTypes[] = [
  {
    iconUrl: icons.groupUsers,
    title: "USERS",
    userNum: "2,453"
  },
  {
    iconUrl: icons.activeUsers,
    title: "ACTIVE USERS",
    userNum: "2,453"
  },
  {
    iconUrl: icons.userLoans,
    title: "USERS WITH LOANS",
    userNum: "12,453"
  },
  {
    iconUrl: icons.userSavings,
    title: "USERS WITH SAVINGS",
    userNum: "102,453"
  }
];

export default cardData