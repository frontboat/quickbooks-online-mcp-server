// https://static.developer.intuit.com/JSONObjects/TocJsonObject_v1.json

export interface Root {
  qbpayments: Qbpayments;
  qbo: Qbo;
}

export interface Qbpayments {
  name: string;
  childAttributes: ChildAttributes;
}

export interface ChildAttributes {
  resources: Resources;
}

export interface Resources {
  name: string;
  childAttributes: ChildAttributes2;
}

export interface ChildAttributes2 {
  "all-entities": AllEntities;
}

export interface AllEntities {
  entityList: string[];
  name: string;
  childAttributes: ChildAttributes3;
}

export interface ChildAttributes3 {
  bankaccounts: string;
  cards: string;
  charges: string;
  echecks: string;
  tokens: string;
  paymentreceipt: string;
}

export interface Qbo {
  name: string;
  childAttributes: ChildAttributes4;
}

export interface ChildAttributes4 {
  accounting: Accounting;
}

export interface Accounting {
  name: string;
  childAttributes: ChildAttributes5;
}

export interface ChildAttributes5 {
  "all-entities": AllEntities2;
  "most-commonly-used": MostCommonlyUsed;
  ecommerce: Ecommerce;
  "report-entities": ReportEntities;
}

export interface AllEntities2 {
  entityList: string[];
  name: string;
  childAttributes: ChildAttributes6;
}

export interface ChildAttributes6 {
  account: string;
  accountlistdetail: string;
  apagingdetail: string;
  apagingsummary: string;
  aragingdetail: string;
  aragingsummary: string;
  attachable: string;
  balancesheet: string;
  batch: string;
  bill: string;
  billpayment: string;
  budget: string;
  cashflow: string;
  changedatacapture: string;
  class: string;
  companycurrency: string;
  companyinfo: string;
  creditmemo: string;
  creditcardpayment: string;
  customer: string;
  customerbalance: string;
  customerbalancedetail: string;
  customerincome: string;
  fecreport: string;
  customertype: string;
  department: string;
  deposit: string;
  employee: string;
  entitlements: string;
  estimate: string;
  exchangerate: string;
  generalledger: string;
  generalledgerfr: string;
  inventoryadjustment: string;
  inventoryvaluationdetail: string;
  inventoryvaluationsummary: string;
  invoice: string;
  item: string;
  journalcode: string;
  journalentry: string;
  journalreport: string;
  journalreportfr: string;
  payment: string;
  paymentmethod: string;
  preferences: string;
  profitandloss: string;
  profitandlossdetail: string;
  purchase: string;
  purchaseorder: string;
  recurringtransaction: string;
  refundreceipt: string;
  reimbursecharge: string;
  salesbyclasssummary: string;
  salesbycustomer: string;
  salesbydepartment: string;
  salesbyproduct: string;
  salesreceipt: string;
  taxclassification: string;
  taxcode: string;
  taxpayment: string;
  taxrate: string;
  taxservice: string;
  taxsummary: string;
  taxagency: string;
  term: string;
  timeactivity: string;
  transactionlist: string;
  transactionlistbyvendor: string;
  transactionlistbycustomer: string;
  transactionlistwithsplits: string;
  transfer: string;
  trialbalance: string;
  vendor: string;
  vendorbalance: string;
  vendorbalancedetail: string;
  vendorcredit: string;
  vendorexpenses: string;
}

export interface MostCommonlyUsed {
  entityList: string[];
  name: string;
  childAttributes: ChildAttributes7;
}

export interface ChildAttributes7 {
  account: string;
  bill: string;
  companyinfo: string;
  customer: string;
  employee: string;
  estimate: string;
  invoice: string;
  item: string;
  payment: string;
  preferences: string;
  profitandloss: string;
  taxagency: string;
  vendor: string;
}

export interface Ecommerce {
  entityList: string[];
  name: string;
  childAttributes: ChildAttributes8;
}

export interface ChildAttributes8 {
  account: string;
  bill: string;
  companyinfo: string;
  inventoryvaluationsummary: string;
  invoice: string;
  journalreport: string;
  preferences: string;
  purchase: string;
  salesbyclasssummary: string;
  salesbycustomer: string;
  salesbydepartment: string;
  salesbyproduct: string;
}

export interface ReportEntities {
  entityList: string[];
  name: string;
  childAttributes: ChildAttributes9;
}

export interface ChildAttributes9 {
  accountlistdetail: string;
  apagingdetail: string;
  apagingsummary: string;
  aragingdetail: string;
  aragingsummary: string;
  balancesheet: string;
  cashflow: string;
  customerbalance: string;
  customerbalancedetail: string;
  customerincome: string;
  fecreport: string;
  generalledger: string;
  generalledgerfr: string;
  inventoryvaluationdetail: string;
  inventoryvaluationsummary: string;
  journalreport: string;
  profitandloss: string;
  profitandlossdetail: string;
  salesbyclasssummary: string;
  salesbycustomer: string;
  salesbydepartment: string;
  salesbyproduct: string;
  taxsummary: string;
  transactionlist: string;
  transactionlistbycustomer: string;
  transactionlistbyvendor: string;
  transactionlistwithsplits: string;
  trialbalance: string;
  vendorbalance: string;
  vendorbalancedetail: string;
  vendorexpenses: string;
}
