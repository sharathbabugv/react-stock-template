export const GetData = (data) => {
  switch (data) {
    case "LISTED_STOCKS":
      return allStocks;
    case "NIFTY_INDEX":
      return niftyIndex;
    case "STOCKS_LIST":
      return stocksList;
    case "USER_WALLET":
      return userWallet;
    case "LATEST_NEWS":
      return latestNews;
    case "USER_STOCKS":
      return userStock;
    case "RECENT_TRANSACTIONS":
      return transactionHistory;
    default:
      return allStocks;
  }
};

// API - 1
let allStocks = [
  {
    stockId: 1,
    tickr: "RELI",
    price: 700.35,
    stockName: "Reliance Industries",
    profit_loss_percentage: 2.45,
    circulationQuantity: 2000,
  },
  {
    stockId: 2,
    tickr: "INFY",
    price: 1943.1598,
    tickPrice: 255,
    stockName: "Infosys",
    profit_loss_percentage: -3.6697868,
    circulationQuantity: 2000,
  },
  {
    stockId: 3,
    tickr: "SBI",
    price: 489.35,
    tickPrice: 255,
    stockName: "SBI",
    profit_loss_percentage: 2.45,
    circulationQuantity: 2000,
  },
  {
    stockId: 4,
    tickr: "TATA",
    price: 441.35,
    tickPrice: 255,
    stockName: "Tata Motors",
    profit_loss_percentage: 11.33,
    circulationQuantity: 2000,
  },
  {
    stockId: 5,
    tickr: "AXIS",
    price: 669.04,
    tickPrice: 255,
    stockName: "Axis Bank",
    profit_loss_percentage: -11.23,
    circulationQuantity: 2000,
  },
];

// API - 2
let niftyIndex = {
  index: "NIFTY",
  normalisedMarketCap: 167128.88343065846,
  gainLossPercent: 6.563936138194715,
};

// API - 3
let stocksList = {
  userId: "de35d3e0-2150-428a-b801-4a983c5ee77a",
  stocks: {
    HINDUNILVR: {
      quantity: 10,
      averagePurchasePrice: 2015.5,
      stockName: "Hindustan Unilever Ltd",
      profit_loss_percentage: 16.05,
    },
    ZOMATO: {
      quantity: 5,
      averagePurchasePrice: 199.51,
      stockName: "ZOMATO",
      profit_loss_percentage: 0.45,
    },
    TATAMOTORS: {
      quantity: 5,
      averagePurchasePrice: 440.5,
      stockName: "Tata Motors Limited Fully Paid Ord. Shrs",
      profit_loss_percentage: 9.65,
    },
    TATASTEEL: {
      quantity: 5,
      averagePurchasePrice: 199.51,
      stockName: "Tata Steel Limited Fully Paid Ord. Shrs",
      profit_loss_percentage: -14.75,
    },
    NYKAA: {
      quantity: 5,
      averagePurchasePrice: 1391.01,
      stockName: "Fsn E-Commerce Ventures Ltd",
      profit_loss_percentage: -62.3,
    },
  },
};

// API - 4
let userWallet = {
  name: "Dustin",
  contactNumber: "12347897987",
  email: "dustin@xyz.in",
  walletBalance: 100.78,
  DOB: "1996-06-06",
};

//API - 5
let latestNews = {
  ICICI:
    "Every quarter of the last 12 quarters has given reason to turn more positive and raise target multiples of ICICI Bank, said Khemka.",
  IIFL: "Every quarter of the last 12 quarters has given reason to turn more positive and raise target multiples of ICICI Bank, said Khemka.",
  PAYTM:
    "Every quarter of the last 12 quarters has given reason to turn more positive and raise target multiples of ICICI Bank, said Khemka.",
};

//API - 6
let transactionHistory = [
  {
    orderId: "03e3594a-4aac-42aa-8e1e-ffff4fa5b281",
    userId: "de35d3e0-2150-428a-b801-4a983c5ee77a",
    tickr: "Hindustan",
    position: "BUY",
    type: "MARKET",
    quantity: 10,
    pending_quantity: 0,
    price: 2015.5,
    profitLoss: 2.4,
    status: "EXECUTED",
    timestamp: "2022-03-31 03:02:35,523 +0530",
    transactions: [
      {
        transactionId: "b8e6af7c-53cb-4085-b22d-c77c08bc1b6f",
        quantity: 10,
        price: 2015.5,
      },
    ],
  },
  {
    orderId: "13e3594a-4aac-42aa-8e1e-ffff4fa5b281",
    userId: "de35d3e0-2150-428a-b801-4a983c5ee77a",
    tickr: "Mirae Asset",
    position: "BUY",
    type: "MARKET",
    quantity: 10,
    pending_quantity: 0,
    price: 201.5,
    profitLoss: 10.21,
    status: "EXECUTED",
    timestamp: "2022-03-31 03:02:35,523 +0530",
    transactions: [
      {
        transactionId: "b8e6af7c-53cb-4085-b22d-c77c08bc1b6f",
        quantity: 10,
        price: 201.5,
      },
    ],
  },
  {
    orderId: "23e3594a-4aac-42aa-8e1e-ffff4fa5b281",
    userId: "de35d3e0-2150-428a-b801-4a983c5ee77a",
    tickr: "Vedanta",
    position: "SELL",
    type: "MARKET",
    quantity: 5,
    pending_quantity: 0,
    price: 777.1,
    profitLoss: -2.51,
    status: "EXECUTED",
    timestamp: "2022-03-31 03:02:35,523 +0530",
    transactions: [
      {
        transactionId: "b8e6af7c-53cb-4085-b22d-c77c08bc1b6f",
        quantity: 5,
        price: 777.1,
      },
    ],
  },
  {
    orderId: "99e3594a-4aac-42aa-8e1e-ffff4fa5b281",
    userId: "de35d3e0-2150-428a-b801-4a983c5ee77a",
    tickr: "SAIL",
    position: "BUY",
    type: "MARKET",
    quantity: 5,
    pending_quantity: 0,
    price: 111.1,
    profitLoss: -1.6,
    status: "EXECUTED",
    timestamp: "2022-03-31 03:02:35,523 +0530",
    transactions: [
      {
        transactionId: "b8e6af7c-53cb-4085-b22d-c77c08bc1b6f",
        quantity: 5,
        price: 111.1,
      },
    ],
  },
  {
    orderId: "45e3594a-4aac-42aa-8e1e-ffff4fa5b281",
    userId: "de35d3e0-2150-428a-b801-4a983c5ee77a",
    tickr: "Zomato",
    position: "SELL",
    type: "MARKET",
    quantity: 5,
    pending_quantity: 0,
    price: 203.14,
    profitLoss: 5.67,
    status: "EXECUTED",
    timestamp: "2022-03-31 03:02:35,523 +0530",
    transactions: [
      {
        transactionId: "b8e6af7c-53cb-4085-b22d-c77c08bc1b6f",
        quantity: 5,
        price: 203.14,
      },
    ],
  },
];

let userStock = {
  investment: 100.0,
  current: 150.2,
};
