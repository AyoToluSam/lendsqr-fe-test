import icons from "./icons"

type cardDataTypes = {
  iconUrl: string,
  title: string,
  userNum: number
}

const cardData: cardDataTypes[] = [
  {
    iconUrl: icons.groupUsers,
    title: "USERS",
    userNum: 2453
  },
  {
    iconUrl: icons.activeUsers,
    title: "ACTIVE USERS",
    userNum: 2453
  },
  {
    iconUrl: icons.userLoans,
    title: "USERS WITH LOANS",
    userNum: 12453
  },
  {
    iconUrl: icons.userLoans,
    title: "USERS WITH LOANS",
    userNum: 12453
  }
];

export default cardData