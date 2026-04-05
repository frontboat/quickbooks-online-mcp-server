export interface Root {
  models: Models;
  codes: Codes;
}

export interface Models {
  qbpayments: Qbpayments;
  qbo: Qbo;
}

export interface Qbpayments {
  echeckrefundidretrieve: Echeckrefundidretrieve;
  lodging: Lodging;
  bankaccountretrieve: Bankaccountretrieve;
  chargerequestid: Chargerequestid;
  bankaccountid: Bankaccountid;
  echeckrefundresponse: Echeckrefundresponse;
  cardid: Cardid;
  refundresponse: Refundresponse;
  capturerequest: Capturerequest;
  txnrequestresponse: Txnrequestresponse;
  checkquery: Checkquery;
  bankaccount: Bankaccount;
  txnrequestcontext: Txnrequestcontext;
  cardrequest: Cardrequest;
  cvvVerification: CvvVerification;
  bankaccountquery: Bankaccountquery;
  echeckrequest: Echeckrequest;
  chargequery: Chargequery;
  paymentreceipt: Paymentreceipt;
  captureresponse: Captureresponse;
  restaurant: Restaurant;
  paymentcontext: Paymentcontext;
  cardquery: Cardquery;
  cardpresent: Cardpresent;
  checkcontext: Checkcontext;
  echeckrefundrequest: Echeckrefundrequest;
  cardidretrieve: Cardidretrieve;
  bankaccountrequest: Bankaccountrequest;
  refundquery: Refundquery;
  requestid: Requestid;
  address: Address2;
  tokenrequest: Tokenrequest;
  card: Card2;
  echeckresponse: Echeckresponse;
  bankaccountidretrieve: Bankaccountidretrieve;
  chargeresponse: Chargeresponse;
  errortype: Errortype;
  deviceinfo: Deviceinfo;
  cardqueryretrieve: Cardqueryretrieve;
  token: Token4;
  bankaccountiddelete: Bankaccountiddelete;
  error: Error;
  refundrequest: Refundrequest;
  chargerequest: Chargerequest;
  zerodollarverification: Zerodollarverification;
}

export interface Echeckrefundidretrieve {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties;
}

export interface Properties {
  echeck_id: EcheckId;
  refund_id: RefundId;
}

export interface EcheckId {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface RefundId {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Lodging {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties2;
}

export interface Properties2 {
  LengthOfStay: LengthOfStay;
  CheckInDate: CheckInDate;
  RoomRate: RoomRate;
  SpecialProgram: SpecialProgram;
  ChargeType: ChargeType;
  FolioID: FolioId;
  ExtraCharges: ExtraCharges;
  CheckOutDate: CheckOutDate;
  TotalAuthAmount: TotalAuthAmount;
}

export interface LengthOfStay {
  type: string;
  description: string;
}

export interface CheckInDate {
  type: string;
  description: string;
}

export interface RoomRate {
  type: string;
  description: string;
}

export interface SpecialProgram {
  type: string;
  description: string;
}

export interface ChargeType {
  type: string;
  description: string;
}

export interface FolioId {
  maxLen: string;
  type: string;
  description: string;
}

export interface ExtraCharges {
  type: string;
  description: string;
}

export interface CheckOutDate {
  type: string;
  description: string;
}

export interface TotalAuthAmount {
  type: string;
  description: string;
}

export interface Bankaccountretrieve {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties3;
}

export interface Properties3 {
  Id: Id;
}

export interface Id {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Chargerequestid {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties4;
}

export interface Properties4 {
  charge_request_id: ChargeRequestId;
}

export interface ChargeRequestId {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Bankaccountid {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties5;
}

export interface Properties5 {
  bankaccount_id: BankaccountId;
  Id: Id2;
}

export interface BankaccountId {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Echeckrefundresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties6;
}

export interface Properties6 {
  Status: Status;
  Description: Description;
  Created: Created;
  Amount: Amount;
  Context: Context;
  Type: Type;
  Id: Id3;
}

export interface Status {
  readOnly: boolean;
  systemDefined: boolean;
  type: string;
  description: string;
  extra: string[];
}

export interface Description {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Created {
  readOnly: boolean;
  systemDefined: boolean;
  type: string;
  description: string;
  extra: string[];
}

export interface Amount {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Context {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Type {
  description: string;
  type: string;
  requiredFlag: string;
  extra: string[];
}

export interface Id3 {
  description: string;
  type: string;
  requiredFlag: string;
  extra: string[];
}

export interface Cardid {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties7;
}

export interface Properties7 {
  Id: Id4;
  card_id: CardId;
}

export interface Id4 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CardId {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Refundresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties8;
}

export interface Properties8 {
  Status: Status2;
  Description: Description2;
  Created: Created2;
  Amount: Amount2;
  Context: Context2;
  Type: Type2;
  Id: Id5;
}

export interface Status2 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Description2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Created2 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Amount2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Context2 {
  $ref: Ref[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref {
  paymentcontext: string;
}

export interface Type2 {
  systemDefined: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id5 {
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Capturerequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties9;
}

export interface Properties9 {
  Amount: Amount3;
  Description: Description3;
  Context: Context3;
}

export interface Amount3 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Description3 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Context3 {
  $ref: Ref2[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref2 {
  paymentcontext: string;
}

export interface Txnrequestresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties10;
}

export interface Properties10 {
  Status: Status3;
  Created: Created3;
  Amount: Amount4;
  Context: Context4;
  Type: Type3;
  Id: Id6;
}

export interface Status3 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Created3 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Amount4 {
  type: string;
  description: string;
}

export interface Context4 {
  type: string;
  description: string;
  $ref: Ref3[];
}

export interface Ref3 {
  txnrequestcontext: string;
}

export interface Type3 {
  type: string;
  description: string;
  extra: string[];
}

export interface Id6 {
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Checkquery {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties11;
}

export interface Properties11 {
  Id: Id7;
}

export interface Id7 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Bankaccount {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties12;
}

export interface Properties12 {
  Updated: Updated;
  entityType: EntityType;
  Name: Name;
  AccountNumber: AccountNumber;
  Default: Default;
  Country: Country;
  Created: Created4;
  InputType: InputType;
  Phone: Phone;
  AccountType: AccountType;
  BankCode: BankCode;
  entityId: EntityId;
  RoutingNumber: RoutingNumber;
  Id: Id8;
}

export interface Updated {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface EntityType {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Name {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountNumber {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Default {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Country {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Created4 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface InputType {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Phone {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountType {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface BankCode {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EntityId {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface RoutingNumber {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id8 {
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Txnrequestcontext {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties13;
}

export interface Properties13 {
  Mobile: Mobile;
  Recurring: Recurring;
}

export interface Mobile {
  default: boolean;
  type: string;
  description: string;
}

export interface Recurring {
  default: boolean;
  type: string;
  description: string;
}

export interface Cardrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties14;
}

export interface Properties14 {
  Name: Name2;
  Default: Default2;
  Number: Number;
  CommercialCardCode: CommercialCardCode;
  ExpMonth: ExpMonth;
  Address: Address;
  ExpYear: ExpYear;
  IsBusiness: IsBusiness;
  Cvc: Cvc;
}

export interface Name2 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Default2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Number {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CommercialCardCode {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ExpMonth {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Address {
  $ref: Ref4[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref4 {
  address: string;
}

export interface ExpYear {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface IsBusiness {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Cvc {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CvvVerification {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties15;
}

export interface Properties15 {
  Date: Date;
  Result: Result;
}

export interface Date {
  description: string;
  type: string;
  requiredFlag: string;
  extra: string[];
}

export interface Result {
  description: string;
  type: string;
  requiredFlag: string;
  extra: string[];
}

export interface Bankaccountquery {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties16;
}

export interface Properties16 {
  Id: Id9;
}

export interface Id9 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Echeckrequest {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties17;
}

export interface Properties17 {
  BankAccount: BankAccount;
  Description: Description4;
  CheckNumber: CheckNumber;
  PaymentMode: PaymentMode;
  Token: Token;
  BankAccountOnFile: BankAccountOnFile;
  Amount: Amount5;
  Context: Context5;
}

export interface BankAccount {
  type: string;
  description: string;
}

export interface Description4 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CheckNumber {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PaymentMode {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Token {
  type: string;
  description: string;
}

export interface BankAccountOnFile {
  type: string;
  description: string;
}

export interface Amount5 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Context5 {
  $ref: Ref5[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref5 {
  checkcontext: string;
}

export interface Chargequery {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties18;
}

export interface Properties18 {
  Id: Id10;
}

export interface Id10 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Paymentreceipt {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties19;
}

export interface Properties19 {
  clientTransID: ClientTransId;
}

export interface ClientTransId {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Captureresponse {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties20;
}

export interface Properties20 {
  Amount: Amount6;
  Description: Description5;
  Context: Context6;
  Created: Created5;
}

export interface Amount6 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Description5 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Context6 {
  $ref: Ref6[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref6 {
  paymentcontext: string;
}

export interface Created5 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Restaurant {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties21;
}

export interface Properties21 {
  BeverageAmount: BeverageAmount;
  ServerID: ServerId;
  TaxAmount: TaxAmount;
  FoodAmount: FoodAmount;
  TipAmount: TipAmount;
}

export interface BeverageAmount {
  type: string;
  description: string;
}

export interface ServerId {
  maxLen: string;
  type: string;
  description: string;
}

export interface TaxAmount {
  type: string;
  description: string;
}

export interface FoodAmount {
  type: string;
  description: string;
}

export interface TipAmount {
  type: string;
  description: string;
}

export interface Paymentcontext {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties22;
}

export interface Properties22 {
  Restaurant: Restaurant2;
  Mobile: Mobile2;
  Tax: Tax;
  IsEcommerce: IsEcommerce;
  DeviceInfo: DeviceInfo;
  Lodging: Lodging2;
  Recurring: Recurring2;
}

export interface Restaurant2 {
  type: string;
  description: string;
  $ref: Ref7[];
}

export interface Ref7 {
  restaurant: string;
}

export interface Mobile2 {
  default: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Tax {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface IsEcommerce {
  default: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DeviceInfo {
  $ref: Ref8[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref8 {
  deviceinfo: string;
}

export interface Lodging2 {
  type: string;
  description: string;
  $ref: Ref9[];
}

export interface Ref9 {
  lodging: string;
}

export interface Recurring2 {
  default: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Cardquery {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties23;
}

export interface Properties23 {
  Id: Id11;
}

export interface Id11 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Cardpresent {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties24;
}

export interface Properties24 {
  Track1: Track1;
  PinBlock: PinBlock;
  Track2: Track2;
  Ksn: Ksn;
}

export interface Track1 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PinBlock {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Track2 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ksn {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Checkcontext {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties25;
}

export interface Properties25 {
  DeviceInfo: DeviceInfo2;
}

export interface DeviceInfo2 {
  $ref: Ref10[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref10 {
  deviceinfo: string;
}

export interface Echeckrefundrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties26;
}

export interface Properties26 {
  Amount: Amount7;
  Description: Description6;
  Context: Context7;
}

export interface Amount7 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Description6 {
  maxLen: string;
  description: string;
  type: string;
  requiredFlag: string;
  extra: string[];
}

export interface Context7 {
  requiredFlag: string;
  $ref: Ref11[];
  type: string;
  description: string;
  extra: string[];
}

export interface Ref11 {
  checkcontext: string;
}

export interface Cardidretrieve {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties27;
}

export interface Properties27 {
  Id: Id12;
  card_id: CardId2;
}

export interface Id12 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CardId2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Bankaccountrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties28;
}

export interface Properties28 {
  Name: Name3;
  AccountNumber: AccountNumber2;
  Default: Default3;
  Country: Country2;
  Phone: Phone2;
  AccountType: AccountType2;
  BankCode: BankCode2;
  RoutingNumber: RoutingNumber2;
  InputType: InputType2;
}

export interface Name3 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountNumber2 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Default3 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Country2 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Phone2 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountType2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface BankCode2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface RoutingNumber2 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface InputType2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Refundquery {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties29;
}

export interface Properties29 {
  Id: Id13;
  refund_id: RefundId2;
}

export interface Id13 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface RefundId2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Requestid {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties30;
}

export interface Properties30 {
  "Request-Id": RequestId;
}

export interface RequestId {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Address2 {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties31;
}

export interface Properties31 {
  PostalCode: PostalCode;
  City: City;
  StreetAddress: StreetAddress;
  Region: Region;
  Country: Country3;
}

export interface PostalCode {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface City {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StreetAddress {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Region {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Country3 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Tokenrequest {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties32;
}

export interface Properties32 {
  BankAccount: BankAccount2;
  Card: Card;
}

export interface BankAccount2 {
  $ref: Ref12[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref12 {
  bankaccount: string;
}

export interface Card {
  $ref: Ref13[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref13 {
  card: string;
}

export interface Card2 {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties33;
}

export interface Properties33 {
  Updated: Updated2;
  Name: Name4;
  IsLevel3Eligible: IsLevel3Eligible;
  Created: Created6;
  Default: Default4;
  entityType: EntityType2;
  CommercialCardCode: CommercialCardCode2;
  Number: Number2;
  ExpMonth: ExpMonth2;
  CardType: CardType;
  Address: Address3;
  ExpYear: ExpYear2;
  entityId: EntityId2;
  IsBusiness: IsBusiness2;
  Id: Id14;
  Cvc: Cvc2;
  zeroDollarVerification: ZeroDollarVerification;
}

export interface Updated2 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Name4 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface IsLevel3Eligible {
  systemDefined: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Created6 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Default4 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EntityType2 {
  type: string;
  description: string;
}

export interface CommercialCardCode2 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Number2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ExpMonth2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CardType {
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Address3 {
  $ref: Ref14[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref14 {
  address: string;
}

export interface ExpYear2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EntityId2 {
  type: string;
  description: string;
}

export interface IsBusiness2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id14 {
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Cvc2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ZeroDollarVerification {
  available: string;
  description: string;
  requiredFlag: string;
  systemDefined: boolean;
  type: string;
  $ref: Ref15[];
}

export interface Ref15 {
  zerodollarverification: string;
}

export interface Echeckresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties34;
}

export interface Properties34 {
  Status: Status4;
  BankAccount: BankAccount3;
  Description: Description7;
  Created: Created7;
  CheckNumber: CheckNumber2;
  AuthCode: AuthCode;
  PaymentMode: PaymentMode2;
  Token: Token2;
  BankAccountOnFile: BankAccountOnFile2;
  Amount: Amount8;
  Context: Context8;
  Id: Id15;
}

export interface Status4 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface BankAccount3 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Description7 {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Created7 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface CheckNumber2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AuthCode {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface PaymentMode2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Token2 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface BankAccountOnFile2 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Amount8 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Context8 {
  $ref: Ref16[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref16 {
  deviceinfo: string;
}

export interface Id15 {
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Bankaccountidretrieve {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties35;
}

export interface Properties35 {
  bankaccount_id: BankaccountId2;
  Id: Id16;
}

export interface BankaccountId2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id16 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Chargeresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties36;
}

export interface Properties36 {
  Status: Status5;
  Capture: Capture;
  Description: Description8;
  Created: Created8;
  AuthCode: AuthCode2;
  CaptureDetail: CaptureDetail;
  RefundDetail: RefundDetail;
  AvsZip: AvsZip;
  Currency: Currency;
  Amount: Amount9;
  Token: Token3;
  Context: Context9;
  CardSecurityCodeMatch: CardSecurityCodeMatch;
  AvsStreet: AvsStreet;
  Id: Id17;
  Card: Card3;
}

export interface Status5 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Capture {
  default: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Description8 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Created8 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface AuthCode2 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface CaptureDetail {
  readOnly: boolean;
  $ref: Ref17[];
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Ref17 {
  captureresponse: string;
}

export interface RefundDetail {
  $ref: Ref18[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref18 {
  refundresponse: string;
}

export interface AvsZip {
  systemDefined: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Currency {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Amount9 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Token3 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Context9 {
  $ref: Ref19[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref19 {
  paymentcontext: string;
}

export interface CardSecurityCodeMatch {
  systemDefined: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AvsStreet {
  systemDefined: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id17 {
  systemDefined: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Card3 {
  $ref: Ref20[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref20 {
  card: string;
}

export interface Errortype {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties37;
}

export interface Properties37 {
  Errors: Errors;
}

export interface Errors {
  requiredFlag: string;
  $ref: Ref21[];
  type: string;
  description: string;
  extra: string[];
}

export interface Ref21 {
  error: string;
}

export interface Deviceinfo {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties38;
}

export interface Properties38 {
  MacAddress: MacAddress;
  Encrypted: Encrypted;
  IpAddress: IpAddress;
  Longitude: Longitude;
  PhoneNumber: PhoneNumber;
  Latitude: Latitude;
  Type: Type4;
  Id: Id18;
}

export interface MacAddress {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Encrypted {
  description: string;
  type: string;
  requiredFlag: string;
  extra: string[];
}

export interface IpAddress {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Longitude {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PhoneNumber {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Latitude {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Type4 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id18 {
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Cardqueryretrieve {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties39;
}

export interface Properties39 {
  Id: Id19;
}

export interface Id19 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Token4 {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties40;
}

export interface Properties40 {
  Value: Value;
}

export interface Value {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Bankaccountiddelete {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties41;
}

export interface Properties41 {
  bankaccount_id: BankaccountId3;
  Id: Id20;
}

export interface BankaccountId3 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id20 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Error {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties42;
}

export interface Properties42 {
  Type: Type5;
  Detail: Detail;
  Error: Error2;
  Message: Message;
  MoreInfo: MoreInfo;
  InfoLink: InfoLink;
}

export interface Type5 {
  type: string;
  description: string;
}

export interface Detail {
  type: string;
  description: string;
}

export interface Error2 {
  type: string;
  description: string;
}

export interface Message {
  type: string;
  description: string;
}

export interface MoreInfo {
  type: string;
  description: string;
}

export interface InfoLink {
  type: string;
  description: string;
}

export interface Refundrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties43;
}

export interface Properties43 {
  Amount: Amount10;
  Description: Description9;
  Context: Context10;
}

export interface Amount10 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Description9 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Context10 {
  $ref: Ref22[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref22 {
  paymentcontext: string;
}

export interface Chargerequest {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties44;
}

export interface Properties44 {
  Capture: Capture2;
  Description: Description10;
  Token: Token5;
  Currency: Currency2;
  Amount: Amount11;
  Context: Context11;
  CardOnFile: CardOnFile;
  Card: Card4;
}

export interface Capture2 {
  default: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Description10 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Token5 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Currency2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Amount11 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Context11 {
  $ref: Ref23[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref23 {
  paymentcontext: string;
}

export interface CardOnFile {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Card4 {
  $ref: Ref24[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref24 {
  card: string;
}

export interface Zerodollarverification {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties45;
}

export interface Properties45 {
  Status: Status6;
  TransactionId: TransactionId;
  Type: Type6;
}

export interface Status6 {
  type: string;
  description: string;
}

export interface TransactionId {
  readOnly: boolean;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Type6 {
  readOnly: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Qbo {
  balancesheetreporttoplevel: Balancesheetreporttoplevel;
  classresponse: Classresponse;
  cashflowquery: Cashflowquery;
  transactionlistwithsplitsquery: Transactionlistwithsplitsquery;
  cashbackinfo: Cashbackinfo;
  itemadjustmentlinedetail: Itemadjustmentlinedetail;
  attachablerequest: Attachablerequest;
  preferencesresponse: Preferencesresponse;
  reimburselinedetail: Reimburselinedetail;
  discountlinedetail: Discountlinedetail;
  datetime: Datetime;
  profitandlossreporttoplevel: Profitandlossreporttoplevel;
  purchaserequest: Purchaserequest;
  billrequest: Billrequest;
  threshold: Threshold;
  inventoryadjustmentrequest: Inventoryadjustmentrequest;
  checkpayment: Checkpayment;
  itembasedexpenselinebill: Itembasedexpenselinebill;
  deliveryinfo: Deliveryinfo;
  discountoverride: Discountoverride;
  creditmemoresponse: Creditmemoresponse;
  trialbalancequery: Trialbalancequery;
  inventoryadjustmentcreaterequest: Inventoryadjustmentcreaterequest;
  modificationmetadata: Modificationmetadata;
  billpaymentcreditcard: Billpaymentcreditcard;
  journalentrylinedetail: Journalentrylinedetail;
  creditchargeinfo: Creditchargeinfo;
  taxpaymentresponse: Taxpaymentresponse;
  frenchpcgaccountlist: Frenchpcgaccountlist;
  websiteaddress: Websiteaddress;
  jobinfo: Jobinfo;
  contactinfo: Contactinfo;
  journalentryresponse: Journalentryresponse;
  departmentresponse: Departmentresponse;
  customerbalancedetailquery: Customerbalancedetailquery;
  customfieldstringpo: Customfieldstringpo;
  taxlinedetail: Taxlinedetail;
  transactionlistreporttoplevel: Transactionlistreporttoplevel;
  trialbalancereportrows: Trialbalancereportrows;
  categoryresponse: Categoryresponse;
  trialbalancereporttoplevel: Trialbalancereporttoplevel;
  reportprefs: Reportprefs;
  reportoption: Reportoption;
  refundreceiptresponse: Refundreceiptresponse;
  entity: Entity2;
  reportheader: Reportheader;
  transactionlistreportheader: Transactionlistreportheader;
  accountbasedexpenselinedetail: Accountbasedexpenselinedetail;
  paymentmethodrequest: Paymentmethodrequest;
  dataservicesextensions: Dataservicesextensions;
  customfield: Customfield;
  vendorresponse: Vendorresponse;
  accountrequest: Accountrequest;
  accountbasedexpenseline: Accountbasedexpenseline;
  servicetypeenum: Servicetypeenum;
  taxratedetails: Taxratedetails;
  reportcolumns: Reportcolumns;
  itembasedexpenselinedetail: Itembasedexpenselinedetail;
  batchitemrequest: Batchitemrequest;
  taxrateresponse: Taxrateresponse;
  txntaxdetail: Txntaxdetail;
  memoref: Memoref;
  telephonenumber: Telephonenumber;
  invoicevoidresponse: Invoicevoidresponse;
  creditcardpaymentrequest: Creditcardpaymentrequest;
  pcesalesitemlinedetail: Pcesalesitemlinedetail;
  salesformspref: Salesformspref;
  journalcoderequest: Journalcoderequest;
  vendorcreditresponse: Vendorcreditresponse;
  budgetrequest: Budgetrequest;
  recurringinfo: Recurringinfo;
  departmentrequest: Departmentrequest;
  billpaymentresponse: Billpaymentresponse;
  taxcoderesponse: Taxcoderesponse;
  transactionlistquery: Transactionlistquery;
  vendorbalancequery: Vendorbalancequery;
  purchaseorderrequest: Purchaseorderrequest;
  profitandlossdetailstoplevel: Profitandlossdetailstoplevel;
  companycurrencyrequest: Companycurrencyrequest;
  subtotalline: Subtotalline;
  customfieldstringsales: Customfieldstringsales;
  vendorandpurchaseprefs: Vendorandpurchaseprefs;
  attachableref: Attachableref;
  effectivetaxratedata: Effectivetaxratedata;
  inventoryvaluationdetailquery: Inventoryvaluationdetailquery;
  markupinfo: Markupinfo;
  linelinkedtxn: Linelinkedtxn;
  departmentsalesquery: Departmentsalesquery;
  billpaymentcheck: Billpaymentcheck;
  creditchargeresponse: Creditchargeresponse;
  projectestimateresponse: Projectestimateresponse;
  taxagencyrequest: Taxagencyrequest;
  companycurrencyresponse: Companycurrencyresponse;
  reportsqueryall: Reportsqueryall;
  vendorexpensesquery: Vendorexpensesquery;
  itemreceiptline: Itemreceiptline;
  customfieldboolpo: Customfieldboolpo;
  agedpayablesquery: Agedpayablesquery;
  creditcardpayment: Creditcardpayment;
  cashflowreportrows: Cashflowreportrows;
  agedpayablestoplevel: Agedpayablestoplevel;
  purchaseorderitemline: Purchaseorderitemline;
  descriptiononly: Descriptiononly;
  agedreceivablesquery: Agedreceivablesquery;
  termrequest: Termrequest;
  depositline: Depositline;
  timeactivityrequest: Timeactivityrequest;
  creditcardpaymentresponse: Creditcardpaymentresponse;
  termresponse: Termresponse;
  inventoryvaluationquery: Inventoryvaluationquery;
  paymentline: Paymentline;
  customerrequest: Customerrequest;
  taxagencyresponse: Taxagencyresponse;
  batchrequest: Batchrequest;
  customertyperesponse: Customertyperesponse;
  itemreftype: Itemreftype;
  generalledgerquery: Generalledgerquery;
  balancesheetquery: Balancesheetquery;
  profitandlossreportrows: Profitandlossreportrows;
  agedreceivabledetailquery: Agedreceivabledetailquery;
  salesitemlinedetail: Salesitemlinedetail;
  reimbursechargeline: Reimbursechargeline;
  emailmessagetype: Emailmessagetype;
  projectestimaterequest: Projectestimaterequest;
  agedreceivablestoplevel: Agedreceivablestoplevel;
  taxserviceresponse: Taxserviceresponse;
  taxservicerequest: Taxservicerequest;
  taxratelist: Taxratelist;
  discountline: Discountline;
  agedreceivablesreportrows: Agedreceivablesreportrows;
  categoryrequest: Categoryrequest;
  groupline: Groupline;
  transferrequest: Transferrequest;
  accountinginfoprefs: Accountinginfoprefs;
  customerresponse: Customerresponse;
  recurringscheduleinfo: Recurringscheduleinfo;
  batchresponse: Batchresponse;
  customfieldboolsales: Customfieldboolsales;
  taxprefs: Taxprefs;
  creditmemorequest: Creditmemorequest;
  inventoryadjustmentdeleterequest: Inventoryadjustmentdeleterequest;
  currencyprefs: Currencyprefs;
  salesitemline: Salesitemline;
  transactionlistbyvendorquery: Transactionlistbyvendorquery;
  deleterequest: Deleterequest;
  voidrequest: Voidrequest;
  transferresponse: Transferresponse;
  refundreceiptrequest: Refundreceiptrequest;
  creditmemo: Creditmemo;
  customerbalancequery: Customerbalancequery;
  generalledgerqueryFR: GeneralledgerqueryFr;
  paymentrequest: Paymentrequest;
  itemgroupdetail: Itemgroupdetail;
  companyinforesponse: Companyinforesponse;
  emailaddress: Emailaddress;
  billpaymentrequest: Billpaymentrequest;
  timeactivityresponse: Timeactivityresponse;
  itemrequest: Itemrequest;
  batchitemresponse: Batchitemresponse;
  physicaladdress: Physicaladdress;
  accountlistquery: Accountlistquery;
  budgetresponse: Budgetresponse;
  reportrow: Reportrow;
  depositrequest: Depositrequest;
  profitandlossquery: Profitandlossquery;
  employeerequest: Employeerequest;
  itemgroupline: Itemgroupline;
  line: Line6;
  inventoryadjustmentresponse: Inventoryadjustmentresponse;
  changedatacaptureresponse: Changedatacaptureresponse;
  classrequest: Classrequest;
  profitandlossdetailquery: Profitandlossdetailquery;
  estimateresponse: Estimateresponse;
  grouplinedetail: Grouplinedetail;
  purchaseresponse: Purchaseresponse;
  agedpayabledetailquery: Agedpayabledetailquery;
  subtotallinedetail: Subtotallinedetail;
  vendorpaymentbankdetail: Vendorpaymentbankdetail;
  itemsalesquery: Itemsalesquery;
  journalcoderesponse: Journalcoderesponse;
  bundleresponse: Bundleresponse;
  paymentresponse: Paymentresponse;
  reimbursechargeresponse: Reimbursechargeresponse;
  timetrackingprefs: Timetrackingprefs;
  attachableresponse: Attachableresponse;
  accountresponse: Accountresponse;
  budgetdetail: Budgetdetail;
  depositlinedetail: Depositlinedetail;
  employeeresponse: Employeeresponse;
  customerincomequery: Customerincomequery;
  itemadjustmentline: Itemadjustmentline;
  recurringtransactionresponse: Recurringtransactionresponse;
  reportrows: Reportrows;
  linkedtxnBill: LinkedtxnBill;
  journalentryrequest: Journalentryrequest;
  currencyref: Currencyref;
  itemresponse: Itemresponse;
  journalentryline: Journalentryline;
  purchaseorderitemlinedetail: Purchaseorderitemlinedetail;
  billresponse: Billresponse;
  categoryupdaterequest: Categoryupdaterequest;
  vendorrequest: Vendorrequest;
  journalreportquery: Journalreportquery;
  salesreceiptrequest: Salesreceiptrequest;
  fecreportquery: Fecreportquery;
  invoiceresponse: Invoiceresponse;
  depositresponse: Depositresponse;
  referencetype: Referencetype;
  exchangerateresponse: Exchangerateresponse;
  pcesalesitemline: Pcesalesitemline;
  purchaseorderresponse: Purchaseorderresponse;
  itembasedexpenseline: Itembasedexpenseline;
  vendorbalancedetailquery: Vendorbalancedetailquery;
  vendorcreditrequest: Vendorcreditrequest;
  transactionlistbycustomerquery: Transactionlistbycustomerquery;
  balancesheetreportrows: Balancesheetreportrows;
  classsalesquery: Classsalesquery;
  paymentmethodresponse: Paymentmethodresponse;
  paymentlinedetail: Paymentlinedetail;
  invoicerequest: Invoicerequest;
  telephonenumber30: Telephonenumber30;
  cashflowtoplevel: Cashflowtoplevel;
  customertyperef: Customertyperef;
  productandservicesprefs: Productandservicesprefs;
  recurringtransactionrequest: Recurringtransactionrequest;
  taxsummaryquery: Taxsummaryquery;
  taxclassification: Taxclassification;
  taxline: Taxline;
  agedpayablesreportrows: Agedpayablesreportrows;
  date: Date2;
  descriptiononlyline: Descriptiononlyline;
  journalreportqueryUS: JournalreportqueryUs;
  salesreceiptresponse: Salesreceiptresponse;
  customersalesquery: Customersalesquery;
  emailmessagesprefs: Emailmessagesprefs;
  linkedtxn: Linkedtxn;
  estimaterequest: Estimaterequest;
  reporttoplevel: Reporttoplevel;
  accountbasedexpenselinebill: Accountbasedexpenselinebill;
  entitlementsresponse: Entitlementsresponse;
  taxratedetail: Taxratedetail;
  reportcolumn: Reportcolumn;
}

export interface Balancesheetreporttoplevel {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties46;
}

export interface Properties46 {
  Header: Header;
  Rows: Rows;
  Columns: Columns;
}

export interface Header {
  description: string;
  $ref: Ref25[];
}

export interface Ref25 {
  reportheader: string;
}

export interface Rows {
  description: string;
  $ref: Ref26[];
}

export interface Ref26 {
  balancesheetreportrows: string;
}

export interface Columns {
  description: string;
  $ref: Ref27[];
}

export interface Ref27 {
  reportcolumns: string;
}

export interface Classresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties47;
}

export interface Properties47 {
  SyncToken: SyncToken;
  Name: Name5;
  FullyQualifiedName: FullyQualifiedName;
  SubClass: SubClass;
  ParentRef: ParentRef;
  Active: Active;
  Id: Id21;
  MetaData: MetaData;
}

export interface SyncToken {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Name5 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface FullyQualifiedName {
  sortable: boolean;
  description: string;
  filterable: boolean;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface SubClass {
  systemDefined: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ParentRef {
  $ref: Ref28[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref28 {
  referencetype: string;
}

export interface Active {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface Id21 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface MetaData {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref29[];
}

export interface Ref29 {
  modificationmetadata: string;
}

export interface Cashflowquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties48;
}

export interface Properties48 {
  customer: Customer;
  vendor: Vendor;
  end_date: EndDate;
  date_macro: DateMacro;
  class: Class;
  item: Item;
  sort_order: SortOrder;
  summarize_column_by: SummarizeColumnBy;
  department: Department;
  start_date: StartDate;
}

export interface Customer {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Vendor {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DateMacro {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Class {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Item {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SummarizeColumnBy {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Transactionlistwithsplitsquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties49;
}

export interface Properties49 {
  docnum: Docnum;
  name: Name6;
  end_date: EndDate2;
  date_macro: DateMacro2;
  payment_method: PaymentMethod;
  source_account_type: SourceAccountType;
  transaction_type: TransactionType;
  group_by: GroupBy;
  sort_by: SortBy;
  sort_order: SortOrder2;
  start_date: StartDate2;
  columns: Columns2;
}

export interface Docnum {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Name6 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface EndDate2 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DateMacro2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PaymentMethod {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SourceAccountType {
  default: string;
  table: Table;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table {
  account_types: string[];
}

export interface TransactionType {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface GroupBy {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortBy {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate2 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Columns2 {
  default: string;
  table: Table2;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table2 {
  columns_tax: string[];
}

export interface Cashbackinfo {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties50;
}

export interface Properties50 {
  AccountRef: AccountRef;
  Amount: Amount12;
  Memo: Memo;
}

export interface AccountRef {
  $ref: Ref30[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref30 {
  referencetype: string;
}

export interface Amount12 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Memo {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Itemadjustmentlinedetail {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties51;
}

export interface Properties51 {
  QtyDiff: QtyDiff;
  ItemRef: ItemRef;
}

export interface QtyDiff {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ItemRef {
  $ref: Ref31[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref31 {
  referencetype: string;
}

export interface Attachablerequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties52;
}

export interface Properties52 {
  Note: Note;
  AttachableRef: AttachableRef;
  FileName: FileName;
}

export interface Note {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface AttachableRef {
  $ref: Ref32[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref32 {
  attachableref: string;
}

export interface FileName {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Preferencesresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties53;
}

export interface Properties53 {
  EmailMessagesPrefs: EmailMessagesPrefs;
  SyncToken: SyncToken2;
  ProductAndServicesPrefs: ProductAndServicesPrefs;
  ReportPrefs: ReportPrefs;
  AccountingInfoPrefs: AccountingInfoPrefs;
  SalesFormsPrefs: SalesFormsPrefs;
  VendorAndPurchasesPrefs: VendorAndPurchasesPrefs;
  TaxPrefs: TaxPrefs;
  OtherPrefs: OtherPrefs;
  TimeTrackingPrefs: TimeTrackingPrefs;
  CurrencyPrefs: CurrencyPrefs;
  Id: Id22;
  MetaData: MetaData2;
}

export interface EmailMessagesPrefs {
  $ref: Ref33[];
}

export interface Ref33 {
  emailmessagesprefs: string;
}

export interface SyncToken2 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface ProductAndServicesPrefs {
  $ref: Ref34[];
}

export interface Ref34 {
  productandservicesprefs: string;
}

export interface ReportPrefs {
  $ref: Ref35[];
}

export interface Ref35 {
  reportprefs: string;
}

export interface AccountingInfoPrefs {
  description: string;
  $ref: Ref36[];
}

export interface Ref36 {
  accountinginfoprefs: string;
}

export interface SalesFormsPrefs {
  $ref: Ref37[];
}

export interface Ref37 {
  salesformspref: string;
}

export interface VendorAndPurchasesPrefs {
  $ref: Ref38[];
}

export interface Ref38 {
  vendorandpurchaseprefs: string;
}

export interface TaxPrefs {
  $ref: Ref39[];
}

export interface Ref39 {
  taxprefs: string;
}

export interface OtherPrefs {
  table: Table3;
  description: string;
}

export interface Table3 {
  otherprefs: string[];
}

export interface TimeTrackingPrefs {
  $ref: Ref40[];
}

export interface Ref40 {
  timetrackingprefs: string;
}

export interface CurrencyPrefs {
  $ref: Ref41[];
}

export interface Ref41 {
  currencyprefs: string;
}

export interface Id22 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface MetaData2 {
  $ref: Ref42[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref42 {
  modificationmetadata: string;
}

export interface Reimburselinedetail {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties54;
}

export interface Properties54 {
  ClassRef: ClassRef;
  TaxCodeRef: TaxCodeRef;
  MarkupInfo: MarkupInfo;
  ItemAccountRef: ItemAccountRef;
  ItemRef: ItemRef2;
}

export interface ClassRef {
  $ref: Ref43[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref43 {
  referencetype: string;
}

export interface TaxCodeRef {
  $ref: Ref44[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref44 {
  referencetype: string;
}

export interface MarkupInfo {
  $ref: Ref45[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref45 {
  markupinfo: string;
}

export interface ItemAccountRef {
  $ref: Ref46[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref46 {
  referencetype: string;
}

export interface ItemRef2 {
  $ref: Ref47[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref47 {
  referencetype: string;
}

export interface Discountlinedetail {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties55;
}

export interface Properties55 {
  ClassRef: ClassRef2;
  TaxCodeRef: TaxCodeRef2;
  DiscountAccountRef: DiscountAccountRef;
  PercentBased: PercentBased;
  DiscountPercent: DiscountPercent;
}

export interface ClassRef2 {
  $ref: Ref48[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref48 {
  referencetype: string;
}

export interface TaxCodeRef2 {
  $ref: Ref49[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref49 {
  referencetype: string;
}

export interface DiscountAccountRef {
  $ref: Ref50[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref50 {
  referencetype: string;
}

export interface PercentBased {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DiscountPercent {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Datetime {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties56;
}

export interface Properties56 {
  dateTime: DateTime;
}

export interface DateTime {
  type: string;
  description: string;
}

export interface Profitandlossreporttoplevel {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties57;
}

export interface Properties57 {
  Header: Header2;
  Rows: Rows2;
  Columns: Columns3;
}

export interface Header2 {
  description: string;
  $ref: Ref51[];
}

export interface Ref51 {
  reportheader: string;
}

export interface Rows2 {
  description: string;
  $ref: Ref52[];
}

export interface Ref52 {
  profitandlossreportrows: string;
}

export interface Columns3 {
  description: string;
  $ref: Ref53[];
}

export interface Ref53 {
  reportcolumns: string;
}

export interface Purchaserequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties58;
}

export interface Properties58 {
  PaymentType: PaymentType;
  AccountRef: AccountRef2;
  CurrencyRef: CurrencyRef;
  "Line [0..n]": Line0N;
}

export interface PaymentType {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountRef2 {
  $ref: Ref54[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref54 {
  referencetype: string;
}

export interface CurrencyRef {
  $ref: Ref55[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref55 {
  currencyref: string;
}

export interface Line0N {
  $ref: Ref56[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref56 {
  accountbasedexpenseline: string;
}

export interface Billrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties59;
}

export interface Properties59 {
  CurrencyRef: CurrencyRef2;
  VendorRef: VendorRef;
  "Line [0..n]": Line0N2;
}

export interface CurrencyRef2 {
  $ref: Ref57[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref57 {
  currencyref: string;
}

export interface VendorRef {
  filterable: boolean;
  $ref: Ref58[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref58 {
  referencetype: string;
}

export interface Line0N2 {
  $ref: Ref59[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref59 {
  accountbasedexpenseline: string;
}

export interface Threshold {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties60;
}

export interface Properties60 {
  currentCount: CurrentCount;
  aboveThreshold: AboveThreshold;
  enforced: Enforced;
  limit: Limit;
  name: Name7;
}

export interface CurrentCount {
  type: string;
  description: string;
}

export interface AboveThreshold {
  type: string;
  description: string;
}

export interface Enforced {
  type: string;
  description: string;
}

export interface Limit {
  type: string;
  description: string;
}

export interface Name7 {
  type: string;
  description: string;
}

export interface Inventoryadjustmentrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties61;
}

export interface Properties61 {
  DocNumber: DocNumber;
  AdjustAccountRef: AdjustAccountRef;
  PrivateNote: PrivateNote;
  "Line [0..n]": Line0N3;
  TxnDate: TxnDate;
}

export interface DocNumber {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AdjustAccountRef {
  description: string;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
  $ref: Ref60[];
}

export interface Ref60 {
  referencetype: string;
}

export interface PrivateNote {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Line0N3 {
  $ref: Ref61[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref61 {
  itemadjustmentline: string;
}

export interface TxnDate {
  $ref: Ref62[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref62 {
  datetime: string;
}

export interface Checkpayment {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties62;
}

export interface Properties62 {
  CheckNum: CheckNum;
  Status: Status7;
  NameOnAcct: NameOnAcct;
  AcctNum: AcctNum;
  BankName: BankName;
}

export interface CheckNum {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Status7 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface NameOnAcct {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AcctNum {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface BankName {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Itembasedexpenselinebill {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties63;
}

export interface Properties63 {
  "LinkedTxn [0..n]": LinkedTxn0N;
  Description: Description11;
  ItemBasedExpenseLineDetail: ItemBasedExpenseLineDetail;
  LineNum: LineNum;
  Amount: Amount13;
  DetailType: DetailType;
  Id: Id23;
}

export interface LinkedTxn0N {
  readOnly: boolean;
  $ref: Ref63[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref63 {
  linkedtxnbill: string;
}

export interface Description11 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ItemBasedExpenseLineDetail {
  type: string;
  requiredFlag: string;
  $ref: Ref64[];
}

export interface Ref64 {
  itembasedexpenselinedetail: string;
}

export interface LineNum {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Amount13 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DetailType {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id23 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Deliveryinfo {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties64;
}

export interface Properties64 {
  DeliveryType: DeliveryType;
  DeliveryTime: DeliveryTime;
}

export interface DeliveryType {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface DeliveryTime {
  readOnly: boolean;
  type: string;
  description: string;
  $ref: Ref65[];
}

export interface Ref65 {
  datetime: string;
}

export interface Discountoverride {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties65;
}

export interface Properties65 {
  DiscountAccountRef: DiscountAccountRef2;
  DiscountRef: DiscountRef;
  PercentBased: PercentBased2;
  DiscountPercent: DiscountPercent2;
}

export interface DiscountAccountRef2 {
  $ref: Ref66[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref66 {
  referencetype: string;
}

export interface DiscountRef {
  $ref: Ref67[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref67 {
  referencetype: string;
}

export interface PercentBased2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DiscountPercent2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Creditmemoresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties66;
}

export interface Properties66 {
  TxnDate: TxnDate2;
  CurrencyRef: CurrencyRef3;
  "CustomField ": CustomField;
  HomeBalance: HomeBalance;
  ClassRef: ClassRef3;
  PrintStatus: PrintStatus;
  SalesTermRef: SalesTermRef;
  GlobalTaxCalculation: GlobalTaxCalculation;
  TotalAmt: TotalAmt;
  RemainingCredit: RemainingCredit;
  InvoiceRef: InvoiceRef;
  TransactionLocationType: TransactionLocationType;
  ApplyTaxAfterDiscount: ApplyTaxAfterDiscount;
  DocNumber: DocNumber2;
  PrivateNote: PrivateNote2;
  RecurDataRef: RecurDataRef;
  "Line [0..n]": Line0N4;
  CustomerMemo: CustomerMemo;
  ProjectRef: ProjectRef;
  TaxExemptionRef: TaxExemptionRef;
  Balance: Balance;
  CustomerRef: CustomerRef;
  TxnTaxDetail: TxnTaxDetail;
  SyncToken: SyncToken3;
  PaymentMethodRef: PaymentMethodRef;
  ExchangeRate: ExchangeRate;
  ShipAddr: ShipAddr;
  HomeTotalAmt: HomeTotalAmt;
  DepartmentRef: DepartmentRef;
  EmailStatus: EmailStatus;
  BillAddr: BillAddr;
  MetaData: MetaData3;
  BillEmail: BillEmail;
  Id: Id24;
}

export interface TxnDate2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface CurrencyRef3 {
  $ref: Ref68[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref68 {
  currencyref: string;
}

export interface CustomField {
  $ref: Ref69[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref69 {
  customfield: string;
}

export interface HomeBalance {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface ClassRef3 {
  $ref: Ref70[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref70 {
  referencetype: string;
}

export interface PrintStatus {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface SalesTermRef {
  filterable: boolean;
  $ref: Ref71[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref71 {
  referencetype: string;
}

export interface GlobalTaxCalculation {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface TotalAmt {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface RemainingCredit {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface InvoiceRef {
  description: string;
  default: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  $ref: Ref72[];
}

export interface Ref72 {
  referencetype: string;
}

export interface TransactionLocationType {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface ApplyTaxAfterDiscount {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface DocNumber2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface PrivateNote2 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface RecurDataRef {
  readOnly: boolean;
  type: string;
  description: string;
  $ref: Ref73[];
}

export interface Ref73 {
  referencetype: string;
}

export interface Line0N4 {
  $ref: Ref74[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref74 {
  salesitemline?: string;
  groupline?: string;
  descriptiononlyline?: string;
  discountline?: string;
  subtotalline?: string;
}

export interface CustomerMemo {
  $ref: Ref75[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref75 {
  memoref: string;
}

export interface ProjectRef {
  filterable: boolean;
  requiredFlag: string;
  type: string;
  description: string;
  $ref: Ref76[];
}

export interface Ref76 {
  referencetype: string;
}

export interface TaxExemptionRef {
  readOnly: boolean;
  $ref: Ref77[];
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Ref77 {
  referencetype: string;
}

export interface Balance {
  filterable: boolean;
  type: string;
  readOnly: boolean;
  sortable: boolean;
  description: string;
}

export interface CustomerRef {
  filterable: boolean;
  $ref: Ref78[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref78 {
  referencetype: string;
}

export interface TxnTaxDetail {
  $ref: Ref79[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref79 {
  txntaxdetail: string;
}

export interface SyncToken3 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface PaymentMethodRef {
  readOnly: boolean;
  $ref: Ref80[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref80 {
  referencetype: string;
}

export interface ExchangeRate {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface ShipAddr {
  table: Table4;
  $ref: Ref81[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table4 {
  physical_address: string[];
}

export interface Ref81 {
  physicaladdress: string;
}

export interface HomeTotalAmt {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface DepartmentRef {
  $ref: Ref82[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref82 {
  referencetype: string;
}

export interface EmailStatus {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface BillAddr {
  table: Table5;
  $ref: Ref83[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table5 {
  physical_address: string[];
}

export interface Ref83 {
  physicaladdress: string;
}

export interface MetaData3 {
  $ref: Ref84[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref84 {
  modificationmetadata: string;
}

export interface BillEmail {
  $ref: Ref85[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref85 {
  emailaddress: string;
}

export interface Id24 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Trialbalancequery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties67;
}

export interface Properties67 {
  accounting_method: AccountingMethod;
  end_date: EndDate3;
  date_macro: DateMacro3;
  sort_order: SortOrder3;
  summarize_column_by: SummarizeColumnBy2;
  start_date: StartDate3;
}

export interface AccountingMethod {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate3 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DateMacro3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SummarizeColumnBy2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate3 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Inventoryadjustmentcreaterequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties68;
}

export interface Properties68 {
  DocNumber: DocNumber3;
  AdjustAccountRef: AdjustAccountRef2;
  PrivateNote: PrivateNote3;
  "Line [0..n]": Line0N5;
  TxnDate: TxnDate3;
}

export interface DocNumber3 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AdjustAccountRef2 {
  $ref: Ref86[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref86 {
  referencetype: string;
}

export interface PrivateNote3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Line0N5 {
  $ref: Ref87[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref87 {
  itemadjustmentline: string;
}

export interface TxnDate3 {
  $ref: Ref88[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref88 {
  datetime: string;
}

export interface Modificationmetadata {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties69;
}

export interface Properties69 {
  CreateTime: CreateTime;
  LastUpdatedTime: LastUpdatedTime;
}

export interface CreateTime {
  sortable: boolean;
  description: string;
  filterable: boolean;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
  $ref: Ref89[];
}

export interface Ref89 {
  datetime: string;
}

export interface LastUpdatedTime {
  sortable: boolean;
  description: string;
  filterable: boolean;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
  $ref: Ref90[];
}

export interface Ref90 {
  datetime: string;
}

export interface Billpaymentcreditcard {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties70;
}

export interface Properties70 {
  CCAccountRef: CcaccountRef;
}

export interface CcaccountRef {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref91[];
}

export interface Ref91 {
  referencetype: string;
}

export interface Journalentrylinedetail {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties71;
}

export interface Properties71 {
  TaxAmount: TaxAmount2;
  JournalCodeRef: JournalCodeRef;
  TaxInclusiveAmt: TaxInclusiveAmt;
  ClassRef: ClassRef4;
  DepartmentRef: DepartmentRef2;
  TaxCodeRef: TaxCodeRef3;
  BillableStatus: BillableStatus;
  TaxApplicableOn: TaxApplicableOn;
  PostingType: PostingType;
  AccountRef: AccountRef3;
  Entity: Entity;
}

export interface TaxAmount2 {
  maxLen: string;
  type: string;
  description: string;
  locales: string[];
}

export interface JournalCodeRef {
  minorVersion: number;
  description: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  $ref: Ref92[];
}

export interface Ref92 {
  referencetype: string;
}

export interface TaxInclusiveAmt {
  minorVersion: number;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface ClassRef4 {
  $ref: Ref93[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref93 {
  referencetype: string;
}

export interface DepartmentRef2 {
  $ref: Ref94[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref94 {
  referencetype: string;
}

export interface TaxCodeRef3 {
  $ref: Ref95[];
  type: string;
  requiredFlag: string;
  locales: string[];
  description: string;
}

export interface Ref95 {
  referencetype: string;
}

export interface BillableStatus {
  readOnly: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TaxApplicableOn {
  type: string;
  requiredFlag: string;
  locales: string[];
  description: string;
}

export interface PostingType {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountRef3 {
  $ref: Ref96[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref96 {
  referencetype: string;
}

export interface Entity {
  $ref: Ref97[];
  requiredFlag: string;
  description: string;
}

export interface Ref97 {
  entity: string;
}

export interface Creditchargeinfo {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties72;
}

export interface Properties72 {
  CcExpiryMonth: CcExpiryMonth;
  ProcessPayment: ProcessPayment;
  PostalCode: PostalCode2;
  Amount: Amount14;
  NameOnAcct: NameOnAcct2;
  CcExpiryYear: CcExpiryYear;
  Type: Type7;
  BillAddrStreet: BillAddrStreet;
}

export interface CcExpiryMonth {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ProcessPayment {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PostalCode2 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Amount14 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface NameOnAcct2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CcExpiryYear {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Type7 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface BillAddrStreet {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Taxpaymentresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties73;
}

export interface Properties73 {
  Refund: Refund;
  TxnDate: TxnDate4;
  PaymentAccountRef: PaymentAccountRef;
  Description: Description12;
  SyncToken: SyncToken4;
  PaymentAmount: PaymentAmount;
  Id: Id25;
  MetaData: MetaData4;
}

export interface Refund {
  type: string;
  minorVersion: number;
  description: string;
}

export interface TxnDate4 {
  default: string;
  readOnly: boolean;
  type: string;
  minorVersion: number;
  description: string;
}

export interface PaymentAccountRef {
  minorVersion: number;
  description: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
  $ref: Ref98[];
}

export interface Ref98 {
  referencetype: string;
}

export interface Description12 {
  readOnly: boolean;
  systemDefined: boolean;
  type: string;
  minorVersion: number;
  description: string;
}

export interface SyncToken4 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface PaymentAmount {
  readOnly: boolean;
  type: string;
  minorVersion: number;
  description: string;
}

export interface Id25 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface MetaData4 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref99[];
}

export interface Ref99 {
  modificationmetadata: string;
}

export interface Frenchpcgaccountlist {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties74;
}

export interface Properties74 {}

export interface Websiteaddress {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties75;
}

export interface Properties75 {
  URI: Uri;
}

export interface Uri {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Jobinfo {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties76;
}

export interface Properties76 {
  Status: Status8;
  StartDate: StartDate4;
  EndDate: EndDate4;
  Description: Description13;
  JobTypeRef: JobTypeRef;
  ProjectedEndDate: ProjectedEndDate;
}

export interface Status8 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate4 {
  $ref: Ref100[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref100 {
  date: string;
}

export interface EndDate4 {
  $ref: Ref101[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref101 {
  date: string;
}

export interface Description13 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface JobTypeRef {
  $ref: Ref102[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref102 {
  referencetype: string;
}

export interface ProjectedEndDate {
  $ref: Ref103[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref103 {
  date: string;
}

export interface Contactinfo {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties77;
}

export interface Properties77 {
  Type: Type8;
  Telephone: Telephone;
}

export interface Type8 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Telephone {
  type: string;
  requiredFlag: string;
}

export interface Journalentryresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties78;
}

export interface Properties78 {
  DocNumber: DocNumber4;
  SyncToken: SyncToken5;
  PrivateNote: PrivateNote4;
  RecurDataRef: RecurDataRef2;
  TxnDate: TxnDate5;
  TotalAmt: TotalAmt2;
  ExchangeRate: ExchangeRate2;
  CurrencyRef: CurrencyRef4;
  TaxRateRef: TaxRateRef;
  HomeTotalAmt: HomeTotalAmt2;
  TransactionLocationType: TransactionLocationType2;
  TxnTaxDetail: TxnTaxDetail2;
  GlobalTaxCalculation: GlobalTaxCalculation2;
  Adjustment: Adjustment;
  Id: Id26;
  "Line [0..n]": Line0N6;
  MetaData: MetaData5;
}

export interface DocNumber4 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface SyncToken5 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface PrivateNote4 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface RecurDataRef2 {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
  $ref: Ref104[];
}

export interface Ref104 {
  referencetype: string;
}

export interface TxnDate5 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
  $ref: Ref105[];
}

export interface Ref105 {
  date: string;
}

export interface TotalAmt2 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface ExchangeRate2 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface CurrencyRef4 {
  $ref: Ref106[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref106 {
  currencyref: string;
}

export interface TaxRateRef {
  description: string;
  $ref: Ref107[];
  type: string;
  requiredFlag: string;
  minorVersion: number;
}

export interface Ref107 {
  referencetype: string;
}

export interface HomeTotalAmt2 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface TransactionLocationType2 {
  minorVersion: number;
  default: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  description: string;
}

export interface TxnTaxDetail2 {
  $ref: Ref108[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref108 {
  txntaxdetail: string;
}

export interface GlobalTaxCalculation2 {
  minorVersion: number;
  default: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  description: string;
}

export interface Adjustment {
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface Id26 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Line0N6 {
  $ref: Ref109[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref109 {
  journalentryline?: string;
  descriptiononlyline?: string;
}

export interface MetaData5 {
  $ref: Ref110[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref110 {
  modificationmetadata: string;
}

export interface Departmentresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties79;
}

export interface Properties79 {
  SyncToken: SyncToken6;
  Name: Name8;
  FullyQualifiedName: FullyQualifiedName2;
  SubDepartment: SubDepartment;
  ParentRef: ParentRef2;
  Active: Active2;
  Id: Id27;
  MetaData: MetaData6;
}

export interface SyncToken6 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Name8 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface FullyQualifiedName2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface SubDepartment {
  sortable: boolean;
  description: string;
  default: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface ParentRef2 {
  $ref: Ref111[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref111 {
  referencetype: string;
}

export interface Active2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface Id27 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface MetaData6 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref112[];
}

export interface Ref112 {
  modificationmetadata: string;
}

export interface Customerbalancedetailquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties80;
}

export interface Properties80 {
  customer: Customer2;
  shipvia: Shipvia;
  term: Term;
  end_duedate: EndDuedate;
  start_duedate: StartDuedate;
  custom1: Custom1;
  sort_by: SortBy2;
  arpaid: Arpaid;
  report_date: ReportDate;
  sort_order: SortOrder4;
  aging_method: AgingMethod;
  department: Department2;
  columns: Columns4;
}

export interface Customer2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Shipvia {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Term {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDuedate {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDuedate {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Custom1 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortBy2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Arpaid {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ReportDate {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AgingMethod {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Columns4 {
  default: string;
  table: Table6;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table6 {
  columns_araging: string[];
}

export interface Customfieldstringpo {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties81;
}

export interface Properties81 {
  StringValue: StringValue;
  Type: Type9;
  Name: Name9;
}

export interface StringValue {
  type: string;
  description: string;
}

export interface Type9 {
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Name9 {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface Taxlinedetail {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties82;
}

export interface Properties82 {
  NetAmountTaxable: NetAmountTaxable;
  PercentBased: PercentBased3;
  TaxInclusiveAmount: TaxInclusiveAmount;
  OverrideDeltaAmount: OverrideDeltaAmount;
  TaxRateRef: TaxRateRef2;
  TaxPercent: TaxPercent;
}

export interface NetAmountTaxable {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PercentBased3 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TaxInclusiveAmount {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface OverrideDeltaAmount {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TaxRateRef2 {
  $ref: Ref113[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref113 {
  referencetype: string;
}

export interface TaxPercent {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Transactionlistreporttoplevel {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties83;
}

export interface Properties83 {
  Header: Header3;
  Rows: Rows3;
  Columns: Columns5;
}

export interface Header3 {
  description: string;
  $ref: Ref114[];
}

export interface Ref114 {
  reportheader: string;
}

export interface Rows3 {
  description: string;
  $ref: Ref115[];
}

export interface Ref115 {
  reportrows: string;
}

export interface Columns5 {
  description: string;
  $ref: Ref116[];
}

export interface Ref116 {
  reportcolumns: string;
}

export interface Trialbalancereportrows {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties84;
}

export interface Properties84 {
  "Row [0..n]": Row0N;
}

export interface Row0N {
  table: Table7;
  description: string;
  $ref: Ref117[];
}

export interface Table7 {
  group_trialbalancedetails: string[];
}

export interface Ref117 {
  reportrow: string;
}

export interface Categoryresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties85;
}

export interface Properties85 {
  SyncToken: SyncToken7;
  Name: Name10;
  Level: Level;
  FullyQualifiedName: FullyQualifiedName3;
  SubItem: SubItem;
  ParentRef: ParentRef3;
  Active: Active3;
  Type: Type10;
  Id: Id28;
  MetaData: MetaData7;
}

export interface SyncToken7 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Name10 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Level {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface FullyQualifiedName3 {
  filterable: boolean;
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface SubItem {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ParentRef3 {
  $ref: Ref118[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref118 {
  referencetype: string;
}

export interface Active3 {
  filterable: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Type10 {
  filterable: boolean;
  type: string;
  sortable: boolean;
  description: string;
  requiredFlag: string;
}

export interface Id28 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface MetaData7 {
  $ref: Ref119[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref119 {
  modificationmetadata: string;
}

export interface Trialbalancereporttoplevel {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties86;
}

export interface Properties86 {
  Header: Header4;
  Rows: Rows4;
  Columns: Columns6;
}

export interface Header4 {
  description: string;
  $ref: Ref120[];
}

export interface Ref120 {
  reportheader: string;
}

export interface Rows4 {
  description: string;
  $ref: Ref121[];
}

export interface Ref121 {
  profitandlossreportrows: string;
}

export interface Columns6 {
  description: string;
  $ref: Ref122[];
}

export interface Ref122 {
  reportcolumns: string;
}

export interface Reportprefs {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties87;
}

export interface Properties87 {
  ReportBasis: ReportBasis;
  CalcAgingReportFromTxnDate: CalcAgingReportFromTxnDate;
}

export interface ReportBasis {
  type: string;
  description: string;
}

export interface CalcAgingReportFromTxnDate {
  default: boolean;
  readOnly: boolean;
  type: string;
  description: string;
}

export interface Reportoption {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties88;
}

export interface Properties88 {
  name: Name11;
  value: Value2;
}

export interface Name11 {
  type: string;
  description: string;
}

export interface Value2 {
  type: string;
  description: string;
}

export interface Refundreceiptresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties89;
}

export interface Properties89 {
  TxnDate: TxnDate6;
  CurrencyRef: CurrencyRef5;
  "CustomField ": CustomField2;
  HomeBalance: HomeBalance2;
  ClassRef: ClassRef5;
  PrintStatus: PrintStatus2;
  PaymentRefNum: PaymentRefNum;
  CheckPayment: CheckPayment;
  TxnSource: TxnSource;
  RecurDataRef: RecurDataRef3;
  GlobalTaxCalculation: GlobalTaxCalculation3;
  TotalAmt: TotalAmt3;
  TransactionLocationType: TransactionLocationType3;
  MetaData: MetaData8;
  DocNumber: DocNumber5;
  PrivateNote: PrivateNote5;
  DepositToAccountRef: DepositToAccountRef;
  "Line [0..n]": Line0N7;
  CustomerMemo: CustomerMemo2;
  ProjectRef: ProjectRef2;
  TaxExemptionRef: TaxExemptionRef2;
  CreditCardPayment: CreditCardPayment;
  Balance: Balance2;
  CustomerRef: CustomerRef2;
  TxnTaxDetail: TxnTaxDetail3;
  SyncToken: SyncToken8;
  PaymentMethodRef: PaymentMethodRef2;
  ExchangeRate: ExchangeRate3;
  ShipAddr: ShipAddr2;
  Id: Id29;
  DepartmentRef: DepartmentRef3;
  PaymentType: PaymentType2;
  BillAddr: BillAddr2;
  ApplyTaxAfterDiscount: ApplyTaxAfterDiscount2;
  BillEmail: BillEmail2;
  HomeTotalAmt: HomeTotalAmt3;
}

export interface TxnDate6 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface CurrencyRef5 {
  $ref: Ref123[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref123 {
  currencyref: string;
}

export interface CustomField2 {
  $ref: Ref124[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref124 {
  customfield: string;
}

export interface HomeBalance2 {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
}

export interface ClassRef5 {
  $ref: Ref125[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref125 {
  referencetype: string;
}

export interface PrintStatus2 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface PaymentRefNum {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface CheckPayment {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
  $ref: Ref126[];
}

export interface Ref126 {
  checkpayment: string;
}

export interface TxnSource {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface RecurDataRef3 {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
  $ref: Ref127[];
}

export interface Ref127 {
  referencetype: string;
}

export interface GlobalTaxCalculation3 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface TotalAmt3 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface TransactionLocationType3 {
  minorVersion: number;
  default: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  description: string;
}

export interface MetaData8 {
  $ref: Ref128[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref128 {
  modificationmetadata: string;
}

export interface DocNumber5 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface PrivateNote5 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DepositToAccountRef {
  $ref: Ref129[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref129 {
  referencetype: string;
}

export interface Line0N7 {
  $ref: Ref130[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref130 {
  salesitemline?: string;
  groupline?: string;
  descriptiononlyline?: string;
  discountline?: string;
  subtotalline?: string;
}

export interface CustomerMemo2 {
  $ref: Ref131[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref131 {
  memoref: string;
}

export interface ProjectRef2 {
  description: string;
  filterable: boolean;
  requiredFlag: string;
  $ref: Ref132[];
  type: string;
  minorVersion: number;
}

export interface Ref132 {
  referencetype: string;
}

export interface TaxExemptionRef2 {
  minorVersion: number;
  description: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
  $ref: Ref133[];
}

export interface Ref133 {
  referencetype: string;
}

export interface CreditCardPayment {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
  $ref: Ref134[];
}

export interface Ref134 {
  creditcardpayment: string;
}

export interface Balance2 {
  filterable: boolean;
  type: string;
  readOnly: boolean;
  sortable: boolean;
  description: string;
}

export interface CustomerRef2 {
  filterable: boolean;
  $ref: Ref135[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref135 {
  referencetype: string;
}

export interface TxnTaxDetail3 {
  $ref: Ref136[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref136 {
  txntaxdetail: string;
}

export interface SyncToken8 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface PaymentMethodRef2 {
  $ref: Ref137[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref137 {
  referencetype: string;
}

export interface ExchangeRate3 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface ShipAddr2 {
  table: Table8;
  $ref: Ref138[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table8 {
  physical_address: string[];
}

export interface Ref138 {
  physicaladdress: string;
}

export interface Id29 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface DepartmentRef3 {
  $ref: Ref139[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref139 {
  referencetype: string;
}

export interface PaymentType2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface BillAddr2 {
  table: Table9;
  $ref: Ref140[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table9 {
  physical_address: string[];
}

export interface Ref140 {
  physicaladdress: string;
}

export interface ApplyTaxAfterDiscount2 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface BillEmail2 {
  $ref: Ref141[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref141 {
  emailaddress: string;
}

export interface HomeTotalAmt3 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Entity2 {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties90;
}

export interface Properties90 {
  Type: Type11;
  EntityRef: EntityRef;
}

export interface Type11 {
  type: string;
  description: string;
}

export interface EntityRef {
  $ref: Ref142[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref142 {
  referencetype: string;
}

export interface Reportheader {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties91;
}

export interface Properties91 {
  Customer: Customer3;
  ReportName: ReportName;
  Vendor: Vendor2;
  Option: Option;
  Item: Item2;
  Employee: Employee;
  ReportBasis: ReportBasis2;
  StartPeriod: StartPeriod;
  Class: Class2;
  Currency: Currency3;
  EndPeriod: EndPeriod;
  Time: Time;
  Department: Department3;
  SummarizeColumnsBy: SummarizeColumnsBy;
}

export interface Customer3 {
  type: string;
  description: string;
}

export interface ReportName {
  type: string;
  description: string;
}

export interface Vendor2 {
  type: string;
  description: string;
}

export interface Option {
  description: string;
  $ref: Ref143[];
}

export interface Ref143 {
  reportoption: string;
}

export interface Item2 {
  type: string;
  description: string;
}

export interface Employee {
  type: string;
  description: string;
}

export interface ReportBasis2 {
  type: string;
  description: string;
}

export interface StartPeriod {
  type: string;
  description: string;
}

export interface Class2 {
  type: string;
  description: string;
}

export interface Currency3 {
  type: string;
  description: string;
}

export interface EndPeriod {
  type: string;
  description: string;
}

export interface Time {
  type: string;
  description: string;
}

export interface Department3 {
  type: string;
  description: string;
}

export interface SummarizeColumnsBy {
  type: string;
  description: string;
}

export interface Transactionlistreportheader {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties92;
}

export interface Properties92 {
  Customer: Customer4;
  ReportName: ReportName2;
  Vendor: Vendor3;
  Option: Option2;
  Item: Item3;
  Employee: Employee2;
  ReportBasis: ReportBasis3;
  StartPeriod: StartPeriod2;
  Currency: Currency4;
  EndPeriod: EndPeriod2;
  Time: Time2;
  Department: Department4;
  SummarizeColumnsBy: SummarizeColumnsBy2;
}

export interface Customer4 {
  type: string;
  description: string;
}

export interface ReportName2 {
  type: string;
  description: string;
}

export interface Vendor3 {
  type: string;
  description: string;
}

export interface Option2 {
  description: string;
  $ref: Ref144[];
}

export interface Ref144 {
  reportoption: string;
}

export interface Item3 {
  type: string;
  description: string;
}

export interface Employee2 {
  type: string;
  description: string;
}

export interface ReportBasis3 {
  type: string;
  description: string;
}

export interface StartPeriod2 {
  type: string;
  description: string;
}

export interface Currency4 {
  type: string;
  description: string;
}

export interface EndPeriod2 {
  type: string;
  description: string;
}

export interface Time2 {
  type: string;
  description: string;
}

export interface Department4 {
  type: string;
  description: string;
}

export interface SummarizeColumnsBy2 {
  type: string;
  description: string;
}

export interface Accountbasedexpenselinedetail {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties93;
}

export interface Properties93 {
  TaxAmount: TaxAmount3;
  TaxInclusiveAmt: TaxInclusiveAmt2;
  ClassRef: ClassRef6;
  TaxCodeRef: TaxCodeRef4;
  MarkupInfo: MarkupInfo2;
  BillableStatus: BillableStatus2;
  AccountRef: AccountRef4;
  CustomerRef: CustomerRef3;
}

export interface TaxAmount3 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TaxInclusiveAmt2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ClassRef6 {
  $ref: Ref145[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref145 {
  referencetype: string;
}

export interface TaxCodeRef4 {
  $ref: Ref146[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref146 {
  referencetype: string;
}

export interface MarkupInfo2 {
  $ref: Ref147[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref147 {
  markupinfo: string;
}

export interface BillableStatus2 {
  readOnly: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountRef4 {
  $ref: Ref148[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref148 {
  referencetype: string;
}

export interface CustomerRef3 {
  $ref: Ref149[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref149 {
  referencetype: string;
}

export interface Paymentmethodrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties94;
}

export interface Properties94 {
  Name: Name12;
}

export interface Name12 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Dataservicesextensions {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties95;
}

export interface Properties95 {}

export interface Customfield {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties96;
}

export interface Properties96 {
  DefinitionId: DefinitionId;
  StringValue: StringValue2;
  Type: Type12;
  Name: Name13;
}

export interface DefinitionId {
  requiredFlag: string;
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface StringValue2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Type12 {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface Name13 {
  readOnly: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Vendorresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties97;
}

export interface Properties97 {
  PrimaryEmailAddr: PrimaryEmailAddr;
  DisplayName: DisplayName;
  OtherContactInfo: OtherContactInfo;
  Title: Title;
  APAccountRef: ApaccountRef;
  TermRef: TermRef;
  Source: Source;
  GSTIN: Gstin;
  GivenName: GivenName;
  T4AEligible: T4Aeligible;
  Fax: Fax;
  BusinessNumber: BusinessNumber;
  CurrencyRef: CurrencyRef6;
  HasTPAR: HasTpar;
  TaxReportingBasis: TaxReportingBasis;
  Mobile: Mobile3;
  PrimaryPhone: PrimaryPhone;
  Active: Active4;
  AlternatePhone: AlternatePhone;
  MetaData: MetaData9;
  Vendor1099: Vendor1099;
  CostRate: CostRate;
  MiddleName: MiddleName;
  BillRate: BillRate;
  WebAddr: WebAddr;
  T5018Eligible: T5018Eligible;
  Balance: Balance3;
  SyncToken: SyncToken9;
  Suffix: Suffix;
  CompanyName: CompanyName;
  FamilyName: FamilyName;
  VendorPaymentBankDetail: VendorPaymentBankDetail;
  TaxIdentifier: TaxIdentifier;
  AcctNum: AcctNum2;
  GSTRegistrationType: GstregistrationType;
  PrintOnCheckName: PrintOnCheckName;
  BillAddr: BillAddr3;
  Id: Id30;
}

export interface PrimaryEmailAddr {
  $ref: Ref150[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref150 {
  emailaddress: string;
}

export interface DisplayName {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface OtherContactInfo {
  $ref: Ref151[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref151 {
  contactinfo: string;
}

export interface Title {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface ApaccountRef {
  minorVersion: number;
  description: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  $ref: Ref152[];
}

export interface Ref152 {
  referencetype: string;
}

export interface TermRef {
  $ref: Ref153[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref153 {
  referencetype: string;
}

export interface Source {
  requiredFlag: string;
  type: string;
  minorVersion: number;
  description: string;
}

export interface Gstin {
  minorVersion: number;
  requiredFlag: string;
  maxLen: string;
  type: string;
  locales: string[];
  description: string;
}

export interface GivenName {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface T4Aeligible {
  minorVersion: number;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface Fax {
  $ref: Ref154[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref154 {
  telephonenumber30: string;
}

export interface BusinessNumber {
  minorVersion: number;
  requiredFlag: string;
  maxLen: string;
  type: string;
  locales: string[];
  description: string;
}

export interface CurrencyRef6 {
  readOnly: boolean;
  $ref: Ref155[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref155 {
  currencyref: string;
}

export interface HasTpar {
  requiredFlag: string;
  type: string;
  minorVersion: number;
  locales: string[];
  description: string;
}

export interface TaxReportingBasis {
  minorVersion: number;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface Mobile3 {
  $ref: Ref156[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref156 {
  telephonenumber30: string;
}

export interface PrimaryPhone {
  $ref: Ref157[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref157 {
  telephonenumber30: string;
}

export interface Active4 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface AlternatePhone {
  $ref: Ref158[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref158 {
  telephonenumber30: string;
}

export interface MetaData9 {
  $ref: Ref159[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref159 {
  modificationmetadata: string;
}

export interface Vendor1099 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CostRate {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface MiddleName {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface BillRate {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface WebAddr {
  $ref: Ref160[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref160 {
  websiteaddress: string;
}

export interface T5018Eligible {
  minorVersion: number;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface Balance3 {
  filterable: boolean;
  type: string;
  readOnly: boolean;
  sortable: boolean;
  description: string;
}

export interface SyncToken9 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Suffix {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface CompanyName {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface FamilyName {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface VendorPaymentBankDetail {
  description: string;
  requiredFlag: string;
  minorVersion: number;
  type: string;
  locales: string[];
  $ref: Ref161[];
}

export interface Ref161 {
  vendorpaymentbankdetail: string;
}

export interface TaxIdentifier {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AcctNum2 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface GstregistrationType {
  minorVersion: number;
  requiredFlag: string;
  maxLen: string;
  type: string;
  locales: string[];
  description: string;
}

export interface PrintOnCheckName {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface BillAddr3 {
  table: Table10;
  $ref: Ref162[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table10 {
  physical_address: string[];
}

export interface Ref162 {
  physicaladdress: string;
}

export interface Id30 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Accountrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties98;
}

export interface Properties98 {
  AcctNum: AcctNum3;
  TaxCodeRef: TaxCodeRef5;
  Name: Name14;
  AccountType: AccountType3;
  AccountSubType: AccountSubType;
}

export interface AcctNum3 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface TaxCodeRef5 {
  $ref: Ref163[];
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface Ref163 {
  referencetype: string;
}

export interface Name14 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface AccountType3 {
  filterable: boolean;
  table: Table11;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table11 {
  accounttypes: string[];
}

export interface AccountSubType {
  filterable: boolean;
  table: Table12;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table12 {
  accounttypes: string[];
}

export interface Accountbasedexpenseline {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties99;
}

export interface Properties99 {
  Description: Description14;
  DetailType: DetailType2;
  LineNum: LineNum2;
  Amount: Amount15;
  Id: Id31;
  AccountBasedExpenseLineDetail: AccountBasedExpenseLineDetail;
}

export interface Description14 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DetailType2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface LineNum2 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Amount15 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id31 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface AccountBasedExpenseLineDetail {
  $ref: Ref164[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref164 {
  accountbasedexpenselinedetail: string;
}

export interface Servicetypeenum {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties100;
}

export interface Properties100 {}

export interface Taxratedetails {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties101;
}

export interface Properties101 {
  RateValue: RateValue;
  TaxRateId: TaxRateId;
  TaxApplicableOn: TaxApplicableOn2;
  TaxAgencyId: TaxAgencyId;
  TaxRateName: TaxRateName;
}

export interface RateValue {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface TaxRateId {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface TaxApplicableOn2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TaxAgencyId {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface TaxRateName {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Reportcolumns {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties102;
}

export interface Properties102 {
  "Column [0..n]": Column0N;
}

export interface Column0N {
  description: string;
  $ref: Ref165[];
}

export interface Ref165 {
  reportcolumn: string;
}

export interface Itembasedexpenselinedetail {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties103;
}

export interface Properties103 {
  TaxInclusiveAmt: TaxInclusiveAmt3;
  ItemRef: ItemRef3;
  CustomerRef: CustomerRef4;
  PriceLevelRef: PriceLevelRef;
  ClassRef: ClassRef7;
  TaxCodeRef: TaxCodeRef6;
  MarkupInfo: MarkupInfo3;
  BillableStatus: BillableStatus3;
  Qty: Qty;
  UnitPrice: UnitPrice;
}

export interface TaxInclusiveAmt3 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ItemRef3 {
  $ref: Ref166[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref166 {
  referencetype: string;
}

export interface CustomerRef4 {
  $ref: Ref167[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref167 {
  referencetype: string;
}

export interface PriceLevelRef {
  $ref: Ref168[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref168 {
  referencetype: string;
}

export interface ClassRef7 {
  $ref: Ref169[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref169 {
  referencetype: string;
}

export interface TaxCodeRef6 {
  $ref: Ref170[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref170 {
  referencetype: string;
}

export interface MarkupInfo3 {
  $ref: Ref171[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref171 {
  markupinfo: string;
}

export interface BillableStatus3 {
  readOnly: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Qty {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface UnitPrice {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Batchitemrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties104;
}

export interface Properties104 {
  optionsData: OptionsData;
  bId: BId;
  Query: Query;
  operation: Operation;
  resourceName: ResourceName;
}

export interface OptionsData {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface BId {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Query {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Operation {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface ResourceName {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Taxrateresponse {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties105;
}

export interface Properties105 {
  RateValue: RateValue2;
  SyncToken: SyncToken10;
  Name: Name15;
  AgencyRef: AgencyRef;
  SpecialTaxType: SpecialTaxType;
  EffectiveTaxRate: EffectiveTaxRate;
  DisplayType: DisplayType;
  TaxReturnLineRef: TaxReturnLineRef;
  Active: Active5;
  MetaData: MetaData10;
  Id: Id32;
  OriginalTaxRate: OriginalTaxRate;
  Description: Description15;
}

export interface RateValue2 {
  readOnly: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SyncToken10 {
  requiredFlag: string;
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Name15 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  readOnly: boolean;
  type: string;
}

export interface AgencyRef {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  readOnly: boolean;
  type: string;
  $ref: Ref172[];
}

export interface Ref172 {
  referencetype: string;
}

export interface SpecialTaxType {
  readOnly: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EffectiveTaxRate {
  readOnly: boolean;
  $ref: Ref173[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref173 {
  effectivetaxratedata: string;
}

export interface DisplayType {
  readOnly: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TaxReturnLineRef {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  readOnly: boolean;
  type: string;
  $ref: Ref174[];
}

export interface Ref174 {
  referencetype: string;
}

export interface Active5 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  readOnly: boolean;
  type: string;
}

export interface MetaData10 {
  $ref: Ref175[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref175 {
  modificationmetadata: string;
}

export interface Id32 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface OriginalTaxRate {
  minorVersion: number;
  requiredFlag: string;
  readOnly: boolean;
  type: string;
  locales: string[];
  description: string;
}

export interface Description15 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  readOnly: boolean;
  type: string;
}

export interface Txntaxdetail {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties106;
}

export interface Properties106 {
  TxnTaxCodeRef: TxnTaxCodeRef;
  TotalTax: TotalTax;
  "TaxLine [0..n]": TaxLine0N;
}

export interface TxnTaxCodeRef {
  requiredFlag: string;
  type: string;
  description: string;
  $ref: Ref176[];
}

export interface Ref176 {
  referencetype: string;
}

export interface TotalTax {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TaxLine0N {
  type: string;
  requiredFlag: string;
  $ref: Ref177[];
}

export interface Ref177 {
  taxline: string;
}

export interface Memoref {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties107;
}

export interface Properties107 {
  value: Value3;
}

export interface Value3 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Telephonenumber {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties108;
}

export interface Properties108 {
  FreeFormNumber: FreeFormNumber;
}

export interface FreeFormNumber {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Invoicevoidresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties109;
}

export interface Properties109 {
  TxnDate: TxnDate7;
  ShipFromAddr: ShipFromAddr;
  CurrencyRef: CurrencyRef7;
  HomeBalance: HomeBalance3;
  ShipDate: ShipDate;
  TrackingNum: TrackingNum;
  ClassRef: ClassRef8;
  PrintStatus: PrintStatus3;
  SalesTermRef: SalesTermRef2;
  DeliveryInfo: DeliveryInfo;
  TxnSource: TxnSource2;
  "LinkedTxn [0..n]": LinkedTxn0N2;
  GlobalTaxCalculation: GlobalTaxCalculation4;
  TotalAmt: TotalAmt4;
  InvoiceLink: InvoiceLink;
  AllowOnlineACHPayment: AllowOnlineAchpayment;
  TransactionLocationType: TransactionLocationType4;
  DueDate: DueDate;
  MetaData: MetaData11;
  DocNumber: DocNumber6;
  PrivateNote: PrivateNote6;
  DepositToAccountRef: DepositToAccountRef2;
  "Line [0..n]": Line0N8;
  BillEmailCc: BillEmailCc;
  CustomerMemo: CustomerMemo3;
  EmailStatus: EmailStatus2;
  ProjectRef: ProjectRef3;
  ExchangeRate: ExchangeRate4;
  TaxExemptionRef: TaxExemptionRef3;
  Deposit: Deposit;
  Balance: Balance4;
  CustomerRef: CustomerRef5;
  TxnTaxDetail: TxnTaxDetail4;
  AllowOnlineCreditCardPayment: AllowOnlineCreditCardPayment;
  SyncToken: SyncToken11;
  CustomField: CustomField3;
  ShipAddr: ShipAddr3;
  HomeTotalAmt: HomeTotalAmt4;
  DepartmentRef: DepartmentRef4;
  BillEmailBcc: BillEmailBcc;
  ShipMethodRef: ShipMethodRef;
  BillAddr: BillAddr4;
  FreeFormAddress: FreeFormAddress;
  ApplyTaxAfterDiscount: ApplyTaxAfterDiscount3;
  BillEmail: BillEmail3;
  Id: Id33;
  AllowOnlinePayment: AllowOnlinePayment;
  AllowIPNPayment: AllowIpnpayment;
}

export interface TxnDate7 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface ShipFromAddr {
  minorVersion: number;
  description: string;
  requiredFlag: string;
  table: Table13;
  type: string;
  $ref: Ref178[];
}

export interface Table13 {
  physical_address: string[];
}

export interface Ref178 {
  physicaladdress: string;
}

export interface CurrencyRef7 {
  $ref: Ref179[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref179 {
  currencyref: string;
}

export interface HomeBalance3 {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
}

export interface ShipDate {
  $ref: Ref180[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref180 {
  date: string;
}

export interface TrackingNum {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ClassRef8 {
  $ref: Ref181[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref181 {
  referencetype: string;
}

export interface PrintStatus3 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface SalesTermRef2 {
  filterable: boolean;
  $ref: Ref182[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref182 {
  referencetype: string;
}

export interface DeliveryInfo {
  readOnly: boolean;
  type: string;
  description: string;
  $ref: Ref183[];
}

export interface Ref183 {
  deliveryinfo: string;
}

export interface TxnSource2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface LinkedTxn0N2 {
  $ref: Ref184[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref184 {
  linkedtxn: string;
}

export interface GlobalTaxCalculation4 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface TotalAmt4 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface InvoiceLink {
  readOnly: boolean;
  description: string;
  type: string;
  minorVersion: number;
  systemDefined: boolean;
}

export interface AllowOnlineAchpayment {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface TransactionLocationType4 {
  minorVersion: number;
  default: string;
  requiredFlag: string;
  table: Table14;
  type: string;
  locales: string[];
  description: string;
}

export interface Table14 {
  locationtype: string[];
}

export interface DueDate {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref185[];
}

export interface Ref185 {
  date: string;
}

export interface MetaData11 {
  $ref: Ref186[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref186 {
  modificationmetadata: string;
}

export interface DocNumber6 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface PrivateNote6 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DepositToAccountRef2 {
  $ref: Ref187[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref187 {
  referencetype: string;
}

export interface Line0N8 {
  $ref: Ref188[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref188 {
  salesitemline?: string;
  groupline?: string;
  descriptiononlyline?: string;
  discountline?: string;
  subtotalline?: string;
}

export interface BillEmailCc {
  $ref: Ref189[];
  type: string;
  description: string;
  minorVersion: number;
  requiredFlag: string;
}

export interface Ref189 {
  emailaddress: string;
}

export interface CustomerMemo3 {
  $ref: Ref190[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref190 {
  memoref: string;
}

export interface EmailStatus2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ProjectRef3 {
  requiredFlag: string;
  type: string;
  description: string;
  minorVersion: number;
  $ref: Ref191[];
}

export interface Ref191 {
  referencetype: string;
}

export interface ExchangeRate4 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface TaxExemptionRef3 {
  minorVersion: number;
  description: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
  $ref: Ref192[];
}

export interface Ref192 {
  referencetype: string;
}

export interface Deposit {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Balance4 {
  filterable: boolean;
  type: string;
  readOnly: boolean;
  sortable: boolean;
  description: string;
}

export interface CustomerRef5 {
  filterable: boolean;
  $ref: Ref193[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref193 {
  referencetype: string;
}

export interface TxnTaxDetail4 {
  $ref: Ref194[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref194 {
  txntaxdetail: string;
}

export interface AllowOnlineCreditCardPayment {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface SyncToken11 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface CustomField3 {
  $ref: Ref195[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref195 {
  customfield: string;
}

export interface ShipAddr3 {
  table: Table15;
  $ref: Ref196[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table15 {
  physical_address: string[];
}

export interface Ref196 {
  physicaladdress: string;
}

export interface HomeTotalAmt4 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface DepartmentRef4 {
  $ref: Ref197[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref197 {
  referencetype: string;
}

export interface BillEmailBcc {
  $ref: Ref198[];
  type: string;
  description: string;
  minorVersion: number;
  requiredFlag: string;
}

export interface Ref198 {
  emailaddress: string;
}

export interface ShipMethodRef {
  $ref: Ref199[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref199 {
  referencetype: string;
}

export interface BillAddr4 {
  table: Table16;
  $ref: Ref200[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table16 {
  physical_address: string[];
}

export interface Ref200 {
  physicaladdress: string;
}

export interface FreeFormAddress {
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface ApplyTaxAfterDiscount3 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface BillEmail3 {
  $ref: Ref201[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref201 {
  emailaddress: string;
}

export interface Id33 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface AllowOnlinePayment {
  deprecated: boolean;
  type: string;
  description: string;
}

export interface AllowIpnpayment {
  deprecated: boolean;
  type: string;
  description: string;
}

export interface Creditcardpaymentrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties110;
}

export interface Properties110 {
  PrivateNote: PrivateNote7;
  TxnDate: TxnDate8;
  Amount: Amount16;
  BankAccountRef: BankAccountRef;
  CreditCardAccountRef: CreditCardAccountRef;
}

export interface PrivateNote7 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TxnDate8 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Amount16 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface BankAccountRef {
  $ref: Ref202[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref202 {
  referencetype: string;
}

export interface CreditCardAccountRef {
  $ref: Ref203[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref203 {
  referencetype: string;
}

export interface Pcesalesitemlinedetail {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties111;
}

export interface Properties111 {
  ItemAccountRef: ItemAccountRef2;
  ItemRef: ItemRef4;
  ClassRef: ClassRef9;
  TaxCodeRef: TaxCodeRef7;
  MarkupInfo: MarkupInfo4;
  UnitCostPrice: UnitCostPrice;
  ServiceDate: ServiceDate;
  Qty: Qty2;
  UnitPrice: UnitPrice2;
}

export interface ItemAccountRef2 {
  $ref: Ref204[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref204 {
  referencetype: string;
}

export interface ItemRef4 {
  $ref: Ref205[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref205 {
  referencetype: string;
}

export interface ClassRef9 {
  $ref: Ref206[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref206 {
  referencetype: string;
}

export interface TaxCodeRef7 {
  $ref: Ref207[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref207 {
  referencetype: string;
}

export interface MarkupInfo4 {
  $ref: Ref208[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref208 {
  markupinfo: string;
}

export interface UnitCostPrice {
  type: string;
  minorVersion: number;
  description: string;
}

export interface ServiceDate {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Qty2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface UnitPrice2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Salesformspref {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties112;
}

export interface Properties112 {
  SalesEmailBcc: SalesEmailBcc;
  AllowServiceDate: AllowServiceDate;
  EstimateMessage: EstimateMessage;
  EmailCopyToCompany: EmailCopyToCompany;
  DefaultCustomerMessage: DefaultCustomerMessage;
  AllowShipping: AllowShipping;
  SalesEmailCc: SalesEmailCc;
  DefaultDiscountAccount: DefaultDiscountAccount;
  IPNSupportEnabled: IpnsupportEnabled;
  ETransactionPaymentEnabled: EtransactionPaymentEnabled;
  DefaultTerms: DefaultTerms;
  UsingProgressInvoicing: UsingProgressInvoicing;
  AllowDeposit: AllowDeposit;
  UsingPriceLevels: UsingPriceLevels;
  DefaultShippingAccount: DefaultShippingAccount;
  ETransactionAttachPDF: EtransactionAttachPdf;
  CustomTxnNumbers: CustomTxnNumbers;
  ETransactionEnabledStatus: EtransactionEnabledStatus;
  AllowEstimates: AllowEstimates;
  AllowDiscount: AllowDiscount;
  CustomField: CustomField4;
  AutoApplyCredit: AutoApplyCredit;
}

export interface SalesEmailBcc {
  $ref: Ref209[];
  type: string;
  description: string;
  minorVersion: number;
  requiredFlag: string;
}

export interface Ref209 {
  emailaddress: string;
}

export interface AllowServiceDate {
  default: boolean;
  type: string;
  description: string;
}

export interface EstimateMessage {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface EmailCopyToCompany {
  default: boolean;
  type: string;
  description: string;
}

export interface DefaultCustomerMessage {
  type: string;
  description: string;
}

export interface AllowShipping {
  default: boolean;
  type: string;
  description: string;
}

export interface SalesEmailCc {
  $ref: Ref210[];
  type: string;
  description: string;
  minorVersion: number;
  requiredFlag: string;
}

export interface Ref210 {
  emailaddress: string;
}

export interface DefaultDiscountAccount {
  type: string;
  description: string;
}

export interface IpnsupportEnabled {
  default: boolean;
  readOnly: boolean;
  type: string;
  description: string;
}

export interface EtransactionPaymentEnabled {
  default: boolean;
  type: string;
  description: string;
}

export interface DefaultTerms {
  type: string;
  description: string;
  $ref: Ref211[];
}

export interface Ref211 {
  referencetype: string;
}

export interface UsingProgressInvoicing {
  description: string;
  default: string;
  requiredFlag: string;
  readOnly: boolean;
  type: string;
  minorVersion: number;
}

export interface AllowDeposit {
  default: boolean;
  type: string;
  description: string;
}

export interface UsingPriceLevels {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface DefaultShippingAccount {
  default: boolean;
  type: string;
  description: string;
}

export interface EtransactionAttachPdf {
  default: boolean;
  type: string;
  description: string;
}

export interface CustomTxnNumbers {
  default: boolean;
  type: string;
  description: string;
}

export interface EtransactionEnabledStatus {
  default: boolean;
  readOnly: boolean;
  type: string;
  description: string;
}

export interface AllowEstimates {
  default: boolean;
  type: string;
  description: string;
}

export interface AllowDiscount {
  default: boolean;
  type: string;
  description: string;
}

export interface CustomField4 {
  readOnly: boolean;
  $ref: Ref212[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref212 {
  customfieldboolsales?: string;
  customfieldstringsales?: string;
}

export interface AutoApplyCredit {
  default: boolean;
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
}

export interface Journalcoderequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties113;
}

export interface Properties113 {
  Name: Name16;
}

export interface Name16 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Vendorcreditresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties114;
}

export interface Properties114 {
  DocNumber: DocNumber7;
  SyncToken: SyncToken12;
  PrivateNote: PrivateNote8;
  "LinkedTxn [0..n]": LinkedTxn0N3;
  VendorRef: VendorRef2;
  RecurDataRef: RecurDataRef4;
  GlobalTaxCalculation: GlobalTaxCalculation5;
  TotalAmt: TotalAmt5;
  ExchangeRate: ExchangeRate5;
  APAccountRef: ApaccountRef2;
  DepartmentRef: DepartmentRef5;
  TxnDate: TxnDate9;
  IncludeInAnnualTPAR: IncludeInAnnualTpar;
  "Line [0..n]": Line0N9;
  TransactionLocationType: TransactionLocationType5;
  Balance: Balance5;
  Id: Id34;
  CurrencyRef: CurrencyRef8;
  MetaData: MetaData12;
}

export interface DocNumber7 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface SyncToken12 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface PrivateNote8 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface LinkedTxn0N3 {
  description: string;
  requiredFlag: string;
  readOnly: boolean;
  minorVersion: number;
  type: string;
  $ref: Ref213[];
}

export interface Ref213 {
  linkedtxn: string;
}

export interface VendorRef2 {
  $ref: Ref214[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref214 {
  referencetype: string;
}

export interface RecurDataRef4 {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
  $ref: Ref215[];
}

export interface Ref215 {
  referencetype: string;
}

export interface GlobalTaxCalculation5 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface TotalAmt5 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface ExchangeRate5 {
  default: number;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface ApaccountRef2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref216[];
}

export interface Ref216 {
  referencetype: string;
}

export interface DepartmentRef5 {
  $ref: Ref217[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref217 {
  referencetype: string;
}

export interface TxnDate9 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface IncludeInAnnualTpar {
  minorVersion: number;
  default: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  description: string;
}

export interface Line0N9 {
  $ref: Ref218[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref218 {
  itembasedexpenseline?: string;
  accountbasedexpenseline?: string;
}

export interface TransactionLocationType5 {
  minorVersion: number;
  default: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  description: string;
}

export interface Balance5 {
  sortable: boolean;
  minorVersion: number;
  filterable: boolean;
  requiredFlag: string;
  readOnly: boolean;
  type: string;
  description: string;
}

export interface Id34 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface CurrencyRef8 {
  $ref: Ref219[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref219 {
  currencyref: string;
}

export interface MetaData12 {
  $ref: Ref220[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref220 {
  modificationmetadata: string;
}

export interface Budgetrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties115;
}

export interface Properties115 {
  "BudgetDetail [0..n]": BudgetDetail0N;
  BudgetEntryType: BudgetEntryType;
  EndDate: EndDate5;
  Name: Name17;
  StartDate: StartDate5;
  BudgetType: BudgetType;
}

export interface BudgetDetail0N {
  $ref: Ref221[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref221 {
  budgetdetail: string;
}

export interface BudgetEntryType {
  readOnly: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate5 {
  $ref: Ref222[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref222 {
  datetime: string;
}

export interface Name17 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  readOnly: boolean;
  type: string;
}

export interface StartDate5 {
  $ref: Ref223[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref223 {
  datetime: string;
}

export interface BudgetType {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  readOnly: boolean;
  type: string;
}

export interface Recurringinfo {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties116;
}

export interface Properties116 {
  Active: Active6;
  RecurType: RecurType;
  ScheduleInfo: ScheduleInfo;
  Name: Name18;
}

export interface Active6 {
  type: string;
  description: string;
}

export interface RecurType {
  filterable: boolean;
  type: string;
  sortable: boolean;
  description: string;
  requiredFlag: string;
}

export interface ScheduleInfo {
  $ref: Ref224[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref224 {
  recurringscheduleinfo: string;
}

export interface Name18 {
  filterable: boolean;
  type: string;
  sortable: boolean;
  description: string;
  requiredFlag: string;
}

export interface Departmentrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties117;
}

export interface Properties117 {
  Name: Name19;
  ParentRef: ParentRef4;
}

export interface Name19 {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface ParentRef4 {
  $ref: Ref225[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref225 {
  referencetype: string;
}

export interface Billpaymentresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties118;
}

export interface Properties118 {
  DocNumber: DocNumber8;
  SyncToken: SyncToken13;
  PrivateNote: PrivateNote9;
  VendorRef: VendorRef3;
  "Line [0..n]": Line0N10;
  TxnDate: TxnDate10;
  TotalAmt: TotalAmt6;
  ExchangeRate: ExchangeRate6;
  APAccountRef: ApaccountRef3;
  PayType: PayType;
  DepartmentRef: DepartmentRef6;
  CheckPayment: CheckPayment2;
  CreditCardPayment: CreditCardPayment2;
  TransactionLocationType: TransactionLocationType6;
  ProcessBillPayment: ProcessBillPayment;
  Id: Id35;
  CurrencyRef: CurrencyRef9;
  MetaData: MetaData13;
}

export interface DocNumber8 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface SyncToken13 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface PrivateNote9 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface VendorRef3 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref226[];
}

export interface Ref226 {
  referencetype: string;
}

export interface Line0N10 {
  $ref: Ref227[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref227 {
  linelinkedtxn: string;
}

export interface TxnDate10 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface TotalAmt6 {
  filterable: boolean;
  type: string;
  sortable: boolean;
  description: string;
  requiredFlag: string;
}

export interface ExchangeRate6 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface ApaccountRef3 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref228[];
}

export interface Ref228 {
  referencetype: string;
}

export interface PayType {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DepartmentRef6 {
  $ref: Ref229[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref229 {
  referencetype: string;
}

export interface CheckPayment2 {
  filterable: boolean;
  type: string;
  sortable: boolean;
  description: string;
  $ref: Ref230[];
}

export interface Ref230 {
  billpaymentcheck: string;
}

export interface CreditCardPayment2 {
  filterable: boolean;
  type: string;
  sortable: boolean;
  description: string;
  $ref: Ref231[];
}

export interface Ref231 {
  billpaymentcreditcard: string;
}

export interface TransactionLocationType6 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface ProcessBillPayment {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id35 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface CurrencyRef9 {
  $ref: Ref232[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref232 {
  currencyref: string;
}

export interface MetaData13 {
  $ref: Ref233[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref233 {
  modificationmetadata: string;
}

export interface Taxcoderesponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties119;
}

export interface Properties119 {
  SyncToken: SyncToken14;
  TaxGroup: TaxGroup;
  PurchaseTaxRateList: PurchaseTaxRateList;
  TaxCodeConfigType: TaxCodeConfigType;
  Taxable: Taxable;
  Name: Name20;
  Active: Active7;
  Description: Description16;
  Hidden: Hidden;
  MetaData: MetaData14;
  Id: Id36;
  SalesTaxRateList: SalesTaxRateList;
}

export interface SyncToken14 {
  requiredFlag: string;
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface TaxGroup {
  default: string;
  readOnly: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PurchaseTaxRateList {
  description: string;
  type: string;
  requiredFlag: string;
  $ref: Ref234[];
}

export interface Ref234 {
  taxratelist: string;
}

export interface TaxCodeConfigType {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
}

export interface Taxable {
  readOnly: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Name20 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Active7 {
  filterable: boolean;
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Description16 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Hidden {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
  requiredFlag: string;
}

export interface MetaData14 {
  $ref: Ref235[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref235 {
  modificationmetadata: string;
}

export interface Id36 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface SalesTaxRateList {
  description: string;
  type: string;
  requiredFlag: string;
  $ref: Ref236[];
}

export interface Ref236 {
  taxratelist: string;
}

export interface Transactionlistquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties120;
}

export interface Properties120 {
  date_macro: DateMacro4;
  payment_method: PaymentMethod2;
  duedate_macro: DuedateMacro;
  arpaid: Arpaid2;
  bothamount: Bothamount;
  transaction_type: TransactionType2;
  docnum: Docnum2;
  start_moddate: StartModdate;
  source_account_type: SourceAccountType2;
  group_by: GroupBy2;
  start_date: StartDate6;
  department: Department5;
  start_duedate: StartDuedate2;
  columns: Columns7;
  end_duedate: EndDuedate2;
  vendor: Vendor4;
  end_date: EndDate6;
  memo: Memo2;
  appaid: Appaid;
  moddate_macro: ModdateMacro;
  printed: Printed;
  createdate_macro: CreatedateMacro;
  cleared: Cleared;
  customer: Customer5;
  qzurl: Qzurl;
  term: Term2;
  end_createdate: EndCreatedate;
  name: Name21;
  sort_by: SortBy3;
  sort_order: SortOrder5;
  start_createdate: StartCreatedate;
  end_moddate: EndModdate;
}

export interface DateMacro4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PaymentMethod2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DuedateMacro {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Arpaid2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Bothamount {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TransactionType2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Docnum2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartModdate {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SourceAccountType2 {
  default: string;
  table: Table17;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table17 {
  account_types: string[];
}

export interface GroupBy2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate6 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Department5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDuedate2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Columns7 {
  default: string;
  table: Table18;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table18 {
  columns_tax: string[];
}

export interface EndDuedate2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Vendor4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate6 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Memo2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Appaid {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ModdateMacro {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Printed {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CreatedateMacro {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Cleared {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Customer5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Qzurl {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Term2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndCreatedate {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Name21 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface SortBy3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartCreatedate {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndModdate {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Vendorbalancequery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties121;
}

export interface Properties121 {
  qzurl: Qzurl2;
  accounting_method: AccountingMethod2;
  date_macro: DateMacro5;
  appaid: Appaid2;
  report_date: ReportDate2;
  sort_order: SortOrder6;
  summarize_column_by: SummarizeColumnBy3;
  department: Department6;
  vendor: Vendor5;
}

export interface Qzurl2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountingMethod2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DateMacro5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Appaid2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ReportDate2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SummarizeColumnBy3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Vendor5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Purchaseorderrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties122;
}

export interface Properties122 {
  CurrencyRef: CurrencyRef10;
  APAccountRef: ApaccountRef4;
  VendorRef: VendorRef4;
  "Line [0..n]": Line0N11;
}

export interface CurrencyRef10 {
  $ref: Ref237[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref237 {
  currencyref: string;
}

export interface ApaccountRef4 {
  filterable: boolean;
  $ref: Ref238[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref238 {
  referencetype: string;
}

export interface VendorRef4 {
  $ref: Ref239[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref239 {
  referencetype: string;
}

export interface Line0N11 {
  $ref: Ref240[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref240 {
  itembasedexpenseline: string;
}

export interface Profitandlossdetailstoplevel {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties123;
}

export interface Properties123 {
  Header: Header5;
  Rows: Rows5;
  Columns: Columns8;
}

export interface Header5 {
  description: string;
  $ref: Ref241[];
}

export interface Ref241 {
  reportheader: string;
}

export interface Rows5 {
  description: string;
  $ref: Ref242[];
}

export interface Ref242 {
  reportrows: string;
}

export interface Columns8 {
  description: string;
  $ref: Ref243[];
}

export interface Ref243 {
  reportcolumns: string;
}

export interface Companycurrencyrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties124;
}

export interface Properties124 {
  Code: Code;
}

export interface Code {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Subtotalline {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties125;
}

export interface Properties125 {
  Description: Description17;
  SubTotalLineDetail: SubTotalLineDetail;
  DetailType: DetailType3;
  LineNum: LineNum3;
  Amount: Amount17;
  Id: Id37;
}

export interface Description17 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SubTotalLineDetail {
  $ref: Ref244[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref244 {
  subtotallinedetail: string;
}

export interface DetailType3 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface LineNum3 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Amount17 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id37 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Customfieldstringsales {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties126;
}

export interface Properties126 {
  StringValue: StringValue3;
  Type: Type13;
  Name: Name22;
}

export interface StringValue3 {
  type: string;
  description: string;
}

export interface Type13 {
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Name22 {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface Vendorandpurchaseprefs {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties127;
}

export interface Properties127 {
  DefaultMarkupAccount: DefaultMarkupAccount;
  TrackingByCustomer: TrackingByCustomer;
  POCustomField: PocustomField;
  DefaultTerms: DefaultTerms2;
  BillableExpenseTracking: BillableExpenseTracking;
  DefaultMarkup: DefaultMarkup;
  TPAREnabled: Tparenabled;
}

export interface DefaultMarkupAccount {
  type: string;
  description: string;
  $ref: Ref245[];
}

export interface Ref245 {
  referencetype: string;
}

export interface TrackingByCustomer {
  default: boolean;
  type: string;
  description: string;
}

export interface PocustomField {
  readOnly: boolean;
  $ref: Ref246[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref246 {
  customfieldboolpo?: string;
  customfieldstringpo?: string;
}

export interface DefaultTerms2 {
  type: string;
  description: string;
  $ref: Ref247[];
}

export interface Ref247 {
  referencetype: string;
}

export interface BillableExpenseTracking {
  default: boolean;
  type: string;
  description: string;
}

export interface DefaultMarkup {
  type: string;
  description: string;
}

export interface Tparenabled {
  minorVersion: number;
  default: boolean;
  readOnly: boolean;
  type: string;
  locales: string[];
  description: string;
}

export interface Attachableref {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties128;
}

export interface Properties128 {
  IncludeOnSend: IncludeOnSend;
  LineInfo: LineInfo;
  NoRefOnly: NoRefOnly;
  "CustomField[0..n]": CustomField0N;
  Inactive: Inactive;
  EntityRef: EntityRef2;
}

export interface IncludeOnSend {
  filterable: boolean;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface LineInfo {
  filterable: boolean;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface NoRefOnly {
  filterable: boolean;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface CustomField0N {
  $ref: Ref248[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref248 {
  customfield: string;
}

export interface Inactive {
  default: string;
  filterable: boolean;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface EntityRef2 {
  filterable: boolean;
  $ref: Ref249[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref249 {
  referencetype: string;
}

export interface Effectivetaxratedata {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties129;
}

export interface Properties129 {
  RateValue: RateValue3;
  EndDate: EndDate7;
  EffectiveDate: EffectiveDate;
}

export interface RateValue3 {
  type: string;
  description: string;
}

export interface EndDate7 {
  type: string;
  description: string;
}

export interface EffectiveDate {
  type: string;
  description: string;
}

export interface Inventoryvaluationdetailquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties130;
}

export interface Properties130 {
  end_date: EndDate8;
  end_svcdate: EndSvcdate;
  date_macro: DateMacro6;
  svcdate_macro: SvcdateMacro;
  start_svcdate: StartSvcdate;
  group_by: GroupBy3;
  start_date: StartDate7;
  columns: Columns9;
}

export interface EndDate8 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndSvcdate {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DateMacro6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SvcdateMacro {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartSvcdate {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface GroupBy3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate7 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Columns9 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Markupinfo {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties131;
}

export interface Properties131 {
  PriceLevelRef: PriceLevelRef2;
  Percent: Percent;
  MarkUpIncomeAccountRef: MarkUpIncomeAccountRef;
}

export interface PriceLevelRef2 {
  $ref: Ref250[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref250 {
  referencetype: string;
}

export interface Percent {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface MarkUpIncomeAccountRef {
  description: string;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
  $ref: Ref251[];
}

export interface Ref251 {
  referencetype: string;
}

export interface Linelinkedtxn {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties132;
}

export interface Properties132 {
  Amount: Amount18;
  "LinkedTxn [0..n]": LinkedTxn0N4;
}

export interface Amount18 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface LinkedTxn0N4 {
  $ref: Ref252[];
  requiredFlag: string;
  description: string;
}

export interface Ref252 {
  linkedtxn: string;
}

export interface Departmentsalesquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties133;
}

export interface Properties133 {
  customer: Customer6;
  accounting_method: AccountingMethod3;
  end_date: EndDate9;
  date_macro: DateMacro7;
  class: Class3;
  item: Item4;
  sort_order: SortOrder7;
  summarize_column_by: SummarizeColumnBy4;
  department: Department7;
  start_date: StartDate8;
}

export interface Customer6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountingMethod3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate9 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DateMacro7 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Class3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Item4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder7 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SummarizeColumnBy4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department7 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate8 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Billpaymentcheck {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties134;
}

export interface Properties134 {
  PrintStatus: PrintStatus4;
  BankAccountRef: BankAccountRef2;
}

export interface PrintStatus4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface BankAccountRef2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref253[];
}

export interface Ref253 {
  referencetype: string;
}

export interface Creditchargeresponse {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties135;
}

export interface Properties135 {
  Status: Status9;
  AuthCode: AuthCode3;
  TxnAuthorizationTime: TxnAuthorizationTime;
  CCTransId: CctransId;
}

export interface Status9 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AuthCode3 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TxnAuthorizationTime {
  $ref: Ref254[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref254 {
  datetime: string;
}

export interface CctransId {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Projectestimateresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties136;
}

export interface Properties136 {
  TxnDate: TxnDate11;
  ShipFromAddr: ShipFromAddr2;
  CurrencyRef: CurrencyRef11;
  ShipDate: ShipDate2;
  ClassRef: ClassRef10;
  PrintStatus: PrintStatus5;
  HomeTotalCostAmount: HomeTotalCostAmount;
  CustomField: CustomField5;
  SalesTermRef: SalesTermRef3;
  TxnStatus: TxnStatus;
  "LinkedTxn [0..n]": LinkedTxn0N5;
  TotalAmt: TotalAmt7;
  AcceptedDate: AcceptedDate;
  ExpirationDate: ExpirationDate;
  DueDate: DueDate2;
  MetaData: MetaData15;
  DocNumber: DocNumber9;
  PrivateNote: PrivateNote10;
  RecurDataRef: RecurDataRef5;
  "Line [0..n]": Line0N12;
  CustomerMemo: CustomerMemo4;
  EmailStatus: EmailStatus3;
  ProjectRef: ProjectRef4;
  TaxExemptionRef: TaxExemptionRef4;
  CustomerRef: CustomerRef6;
  TxnTaxDetail: TxnTaxDetail5;
  SyncToken: SyncToken15;
  AcceptedBy: AcceptedBy;
  ExchangeRate: ExchangeRate7;
  TotalCostAmount: TotalCostAmount;
  ShipAddr: ShipAddr4;
  HomeTotalAmt: HomeTotalAmt5;
  DepartmentRef: DepartmentRef7;
  ShipMethodRef: ShipMethodRef2;
  BillAddr: BillAddr5;
  FreeFormAddress: FreeFormAddress2;
  ApplyTaxAfterDiscount: ApplyTaxAfterDiscount4;
  BillEmail: BillEmail4;
  Id: Id38;
}

export interface TxnDate11 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface ShipFromAddr2 {
  minorVersion: number;
  description: string;
  requiredFlag: string;
  table: Table19;
  type: string;
  $ref: Ref255[];
}

export interface Table19 {
  physical_address: string[];
}

export interface Ref255 {
  physicaladdress: string;
}

export interface CurrencyRef11 {
  $ref: Ref256[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref256 {
  currencyref: string;
}

export interface ShipDate2 {
  $ref: Ref257[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref257 {
  date: string;
}

export interface ClassRef10 {
  $ref: Ref258[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref258 {
  referencetype: string;
}

export interface PrintStatus5 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface HomeTotalCostAmount {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
  systemDefined: boolean;
}

export interface CustomField5 {
  $ref: Ref259[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref259 {
  customfield: string;
}

export interface SalesTermRef3 {
  $ref: Ref260[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref260 {
  referencetype: string;
}

export interface TxnStatus {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface LinkedTxn0N5 {
  $ref: Ref261[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref261 {
  linkedtxn: string;
}

export interface TotalAmt7 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface AcceptedDate {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ExpirationDate {
  $ref: Ref262[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref262 {
  date: string;
}

export interface DueDate2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref263[];
}

export interface Ref263 {
  date: string;
}

export interface MetaData15 {
  $ref: Ref264[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref264 {
  modificationmetadata: string;
}

export interface DocNumber9 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface PrivateNote10 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface RecurDataRef5 {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
  $ref: Ref265[];
}

export interface Ref265 {
  referencetype: string;
}

export interface Line0N12 {
  $ref: Ref266[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref266 {
  pcesalesitemline: string;
}

export interface CustomerMemo4 {
  $ref: Ref267[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref267 {
  memoref: string;
}

export interface EmailStatus3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ProjectRef4 {
  description: string;
  filterable: boolean;
  requiredFlag: string;
  $ref: Ref268[];
  type: string;
  minorVersion: number;
}

export interface Ref268 {
  referencetype: string;
}

export interface TaxExemptionRef4 {
  minorVersion: number;
  description: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
  $ref: Ref269[];
}

export interface Ref269 {
  referencetype: string;
}

export interface CustomerRef6 {
  filterable: boolean;
  $ref: Ref270[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref270 {
  referencetype: string;
}

export interface TxnTaxDetail5 {
  $ref: Ref271[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref271 {
  txntaxdetail: string;
}

export interface SyncToken15 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface AcceptedBy {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ExchangeRate7 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface TotalCostAmount {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
  systemDefined: boolean;
}

export interface ShipAddr4 {
  table: Table20;
  $ref: Ref272[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table20 {
  physical_address: string[];
}

export interface Ref272 {
  physicaladdress: string;
}

export interface HomeTotalAmt5 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface DepartmentRef7 {
  $ref: Ref273[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref273 {
  referencetype: string;
}

export interface ShipMethodRef2 {
  $ref: Ref274[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref274 {
  referencetype: string;
}

export interface BillAddr5 {
  table: Table21;
  $ref: Ref275[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table21 {
  physical_address: string[];
}

export interface Ref275 {
  physicaladdress: string;
}

export interface FreeFormAddress2 {
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface ApplyTaxAfterDiscount4 {
  default: boolean;
  type: string;
  requiredFlag: string;
  locales: string[];
  description: string;
}

export interface BillEmail4 {
  $ref: Ref276[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref276 {
  emailaddress: string;
}

export interface Id38 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Taxagencyrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties137;
}

export interface Properties137 {
  DisplayName: DisplayName2;
}

export interface DisplayName2 {
  maxLen: string;
  type: string;
  requiredFlag: string;
  sortable: boolean;
  description: string;
}

export interface Companycurrencyresponse {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties138;
}

export interface Properties138 {
  SyncToken: SyncToken16;
  Code: Code2;
  Name: Name23;
  "CustomField ": CustomField6;
  Active: Active8;
  Id: Id39;
  MetaData: MetaData16;
}

export interface SyncToken16 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Code2 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Name23 {
  systemDefined: boolean;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface CustomField6 {
  $ref: Ref277[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref277 {
  customfield: string;
}

export interface Active8 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface Id39 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface MetaData16 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref278[];
}

export interface Ref278 {
  modificationmetadata: string;
}

export interface Reportsqueryall {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties139;
}

export interface Properties139 {
  date_macro: DateMacro8;
  payment_method: PaymentMethod3;
  duedate_macro: DuedateMacro2;
  arpaid: Arpaid3;
  report_date: ReportDate3;
  sort_order: SortOrder8;
  summarize_column_by: SummarizeColumnBy5;
  account_status: AccountStatus;
  vendor: Vendor6;
  accounting_method: AccountingMethod4;
  "item<": Item5;
  employee: Employee3;
  columns: Columns10;
  account_type: AccountType4;
  shipvia: Shipvia2;
  "start_createdate end_createdate": StartCreatedateEndCreatedate;
  department: Department8;
  num_periods: NumPeriods;
  createdate_macro: CreatedateMacro2;
  past_due: PastDue;
  class: Class4;
  customer: Customer7;
  qzurl: Qzurl3;
  term: Term3;
  sort_by: SortBy4;
  appaid: Appaid3;
  aging_method: AgingMethod2;
  moddate_macro: ModdateMacro2;
  aging_period: AgingPeriod;
}

export interface DateMacro8 {
  default: string;
  type: string;
  description: string;
}

export interface PaymentMethod3 {
  type: string;
  description: string;
}

export interface DuedateMacro2 {
  default: string;
  type: string;
  description: string;
}

export interface Arpaid3 {
  default: string;
  type: string;
  description: string;
}

export interface ReportDate3 {
  default: string;
  type: string;
  description: string;
}

export interface SortOrder8 {
  default: string;
  type: string;
  description: string;
}

export interface SummarizeColumnBy5 {
  default: string;
  type: string;
  description: string;
}

export interface AccountStatus {
  default: string;
  type: string;
  description: string;
}

export interface Vendor6 {
  default: string;
  type: string;
  description: string;
}

export interface AccountingMethod4 {
  default: string;
  type: string;
  description: string;
}

export interface Item5 {
  default: string;
  type: string;
  description: string;
}

export interface Employee3 {
  default: string;
  type: string;
  description: string;
}

export interface Columns10 {
  type: string;
  description: string;
}

export interface AccountType4 {
  default: string;
  type: string;
  description: string;
}

export interface Shipvia2 {
  default: string;
  type: string;
  description: string;
}

export interface StartCreatedateEndCreatedate {
  type: string;
  description: string;
}

export interface Department8 {
  default: string;
  type: string;
  description: string;
}

export interface NumPeriods {
  default: string;
  type: string;
  description: string;
}

export interface CreatedateMacro2 {
  default: string;
  type: string;
  description: string;
}

export interface PastDue {
  type: string;
  description: string;
}

export interface Class4 {
  default: string;
  type: string;
  description: string;
}

export interface Customer7 {
  default: string;
  type: string;
  description: string;
}

export interface Qzurl3 {
  default: string;
  type: string;
  description: string;
}

export interface Term3 {
  default: string;
  type: string;
  description: string;
}

export interface SortBy4 {
  default: string;
  type: string;
  description: string;
}

export interface Appaid3 {
  default: string;
  type: string;
  description: string;
}

export interface AgingMethod2 {
  default: string;
  type: string;
  description: string;
}

export interface ModdateMacro2 {
  default: string;
  type: string;
  description: string;
}

export interface AgingPeriod {
  default: string;
  type: string;
  description: string;
}

export interface Vendorexpensesquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties140;
}

export interface Properties140 {
  customer: Customer8;
  vendor: Vendor7;
  end_date: EndDate10;
  date_macro: DateMacro9;
  class: Class5;
  sort_order: SortOrder9;
  summarize_column_by: SummarizeColumnBy6;
  department: Department9;
  accounting_method: AccountingMethod5;
  start_date: StartDate9;
}

export interface Customer8 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Vendor7 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate10 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DateMacro9 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Class5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder9 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SummarizeColumnBy6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department9 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountingMethod5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate9 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Itemreceiptline {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties141;
}

export interface Properties141 {
  LineNum: LineNum4;
  Amount: Amount19;
  Description: Description18;
  DetailType: DetailType4;
  Id: Id40;
}

export interface LineNum4 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Amount19 {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Description18 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DetailType4 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Id40 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Customfieldboolpo {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties142;
}

export interface Properties142 {
  BooleanValue: BooleanValue;
  Type: Type14;
  Name: Name24;
}

export interface BooleanValue {
  type: string;
  description: string;
}

export interface Type14 {
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Name24 {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface Agedpayablesquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties143;
}

export interface Properties143 {
  customer: Customer9;
  qzurl: Qzurl4;
  vendor: Vendor8;
  date_macro: DateMacro10;
  department: Department10;
  report_date: ReportDate4;
  sort_order: SortOrder10;
  aging_method: AgingMethod3;
}

export interface Customer9 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Qzurl4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Vendor8 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DateMacro10 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department10 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ReportDate4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder10 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AgingMethod3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Creditcardpayment {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties144;
}

export interface Properties144 {
  CreditChargeResponse: CreditChargeResponse;
  CreditChargeInfo: CreditChargeInfo;
}

export interface CreditChargeResponse {
  $ref: Ref279[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref279 {
  creditchargeresponse: string;
}

export interface CreditChargeInfo {
  $ref: Ref280[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref280 {
  creditchargeinfo: string;
}

export interface Cashflowreportrows {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties145;
}

export interface Properties145 {
  "Row [0..n]": Row0N2;
}

export interface Row0N2 {
  table: Table22;
  description: string;
  $ref: Ref281[];
}

export interface Table22 {
  group_cashflowsheet: string[];
}

export interface Ref281 {
  reportrow: string;
}

export interface Agedpayablestoplevel {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties146;
}

export interface Properties146 {
  Header: Header6;
  Rows: Rows6;
  Columns: Columns11;
}

export interface Header6 {
  description: string;
  $ref: Ref282[];
}

export interface Ref282 {
  reportheader: string;
}

export interface Rows6 {
  description: string;
  $ref: Ref283[];
}

export interface Ref283 {
  agedpayablesreportrows: string;
}

export interface Columns11 {
  description: string;
  $ref: Ref284[];
}

export interface Ref284 {
  reportcolumns: string;
}

export interface Purchaseorderitemline {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties147;
}

export interface Properties147 {
  Description: Description19;
  DetailType: DetailType5;
  LineNum: LineNum5;
  Amount: Amount20;
  CustomField: CustomField7;
  PurchaseOrderItemLineDetail: PurchaseOrderItemLineDetail;
  Id: Id41;
}

export interface Description19 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DetailType5 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface LineNum5 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Amount20 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CustomField7 {
  $ref: Ref285[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref285 {
  customfield: string;
}

export interface PurchaseOrderItemLineDetail {
  type: string;
  requiredFlag: string;
  $ref: Ref286[];
}

export interface Ref286 {
  purchaseorderitemlinedetail: string;
}

export interface Id41 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Descriptiononly {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties148;
}

export interface Properties148 {
  TaxCodeRef: TaxCodeRef8;
  ServiceDate: ServiceDate2;
}

export interface TaxCodeRef8 {
  $ref: Ref287[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref287 {
  referencetype: string;
}

export interface ServiceDate2 {
  $ref: Ref288[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref288 {
  date: string;
}

export interface Agedreceivablesquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties149;
}

export interface Properties149 {
  customer: Customer10;
  qzurl: Qzurl5;
  date_macro: DateMacro11;
  aging_method: AgingMethod4;
  report_date: ReportDate5;
  sort_order: SortOrder11;
  department: Department11;
}

export interface Customer10 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Qzurl5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DateMacro11 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AgingMethod4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ReportDate5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder11 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department11 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Termrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties150;
}

export interface Properties150 {
  DayOfMonthDue: DayOfMonthDue;
  DueDays: DueDays;
  Name: Name25;
}

export interface DayOfMonthDue {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DueDays {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Name25 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Depositline {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties151;
}

export interface Properties151 {
  Description: Description20;
  DetailType: DetailType6;
  ProjectRef: ProjectRef5;
  LineNum: LineNum6;
  Amount: Amount21;
  CustomField: CustomField8;
  Id: Id42;
  DepositLineDetail: DepositLineDetail;
}

export interface Description20 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DetailType6 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface ProjectRef5 {
  requiredFlag: string;
  type: string;
  description: string;
  $ref: Ref289[];
}

export interface Ref289 {
  referencetype: string;
}

export interface LineNum6 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Amount21 {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface CustomField8 {
  $ref: Ref290[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref290 {
  customfield: string;
}

export interface Id42 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface DepositLineDetail {
  type: string;
  requiredFlag: string;
  $ref: Ref291[];
}

export interface Ref291 {
  depositlinedetail: string;
}

export interface Timeactivityrequest {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties152;
}

export interface Properties152 {
  TxnDate: TxnDate12;
  EmployeeRef: EmployeeRef;
  ProjectRef: ProjectRef6;
  Hours: Hours;
  StartTime: StartTime;
  HourlyRate: HourlyRate;
  VendorRef: VendorRef5;
  EndTime: EndTime;
  CustomerRef: CustomerRef7;
  NameOf: NameOf;
}

export interface TxnDate12 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
  $ref: Ref292[];
}

export interface Ref292 {
  date: string;
}

export interface EmployeeRef {
  description: string;
  type: string;
  requiredFlag: string;
  $ref: Ref293[];
}

export interface Ref293 {
  referencetype: string;
}

export interface ProjectRef6 {
  requiredFlag: string;
  type: string;
  description: string;
  minorVersion: number;
  $ref: Ref294[];
}

export interface Ref294 {
  referencetype: string;
}

export interface Hours {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface StartTime {
  description: string;
  type: string;
  requiredFlag: string;
  $ref: Ref295[];
}

export interface Ref295 {
  datetime: string;
}

export interface HourlyRate {
  default: string;
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface VendorRef5 {
  description: string;
  type: string;
  requiredFlag: string;
  $ref: Ref296[];
}

export interface Ref296 {
  referencetype: string;
}

export interface EndTime {
  description: string;
  type: string;
  requiredFlag: string;
  $ref: Ref297[];
}

export interface Ref297 {
  datetime: string;
}

export interface CustomerRef7 {
  type: string;
  description: string;
  $ref: Ref298[];
}

export interface Ref298 {
  referencetype: string;
}

export interface NameOf {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Creditcardpaymentresponse {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties153;
}

export interface Properties153 {
  SyncToken: SyncToken17;
  PrivateNote: PrivateNote11;
  VendorRef: VendorRef6;
  CreditCardAccountRef: CreditCardAccountRef2;
  TxnDate: TxnDate13;
  Memo: Memo3;
  PrintStatus: PrintStatus6;
  CheckNum: CheckNum2;
  Amount: Amount22;
  BankAccountRef: BankAccountRef3;
  Id: Id43;
  MetaData: MetaData17;
}

export interface SyncToken17 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface PrivateNote11 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface VendorRef6 {
  filterable: boolean;
  $ref: Ref299[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref299 {
  referencetype: string;
}

export interface CreditCardAccountRef2 {
  $ref: Ref300[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref300 {
  referencetype: string;
}

export interface TxnDate13 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
  $ref: Ref301[];
}

export interface Ref301 {
  date: string;
}

export interface Memo3 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PrintStatus6 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface CheckNum2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Amount22 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface BankAccountRef3 {
  $ref: Ref302[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref302 {
  referencetype: string;
}

export interface Id43 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface MetaData17 {
  $ref: Ref303[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref303 {
  modificationmetadata: string;
}

export interface Termresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties154;
}

export interface Properties154 {
  SyncToken: SyncToken18;
  DayOfMonthDue: DayOfMonthDue2;
  Name: Name26;
  DiscountDayOfMonth: DiscountDayOfMonth;
  DiscountPercent: DiscountPercent3;
  DiscountDays: DiscountDays;
  DueNextMonthDays: DueNextMonthDays;
  DueDays: DueDays2;
  Active: Active9;
  Type: Type15;
  Id: Id44;
  MetaData: MetaData18;
}

export interface SyncToken18 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface DayOfMonthDue2 {
  maxLen: string;
  type: string;
  description: string;
}

export interface Name26 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface DiscountDayOfMonth {
  maxLen: string;
  type: string;
  description: string;
}

export interface DiscountPercent3 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DiscountDays {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DueNextMonthDays {
  maxLen: string;
  type: string;
  description: string;
}

export interface DueDays2 {
  maxLen: string;
  type: string;
  description: string;
}

export interface Active9 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface Type15 {
  systemDefined: boolean;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Id44 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface MetaData18 {
  $ref: Ref304[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref304 {
  modificationmetadata: string;
}

export interface Inventoryvaluationquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties155;
}

export interface Properties155 {
  qzurl: Qzurl6;
  date_macro: DateMacro12;
  item: Item6;
  report_date: ReportDate6;
  sort_order: SortOrder12;
  summarize_column_by: SummarizeColumnBy7;
}

export interface Qzurl6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DateMacro12 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Item6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ReportDate6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder12 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SummarizeColumnBy7 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Paymentline {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties156;
}

export interface Properties156 {
  Description: Description21;
  DetailType: DetailType7;
  LineNum: LineNum7;
  Amount: Amount23;
  PaymentLineDetail: PaymentLineDetail;
  Id: Id45;
}

export interface Description21 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DetailType7 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface LineNum7 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Amount23 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PaymentLineDetail {
  $ref: Ref305[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref305 {
  paymentlinedetail: string;
}

export interface Id45 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Customerrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties157;
}

export interface Properties157 {
  DisplayName: DisplayName3;
  Suffix: Suffix2;
  Title: Title2;
  MiddleName: MiddleName2;
  FamilyName: FamilyName2;
  GivenName: GivenName2;
}

export interface DisplayName3 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Suffix2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Title2 {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface MiddleName2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface FamilyName2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface GivenName2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Taxagencyresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties158;
}

export interface Properties158 {
  SyncToken: SyncToken19;
  TaxAgencyConfig: TaxAgencyConfig;
  DisplayName: DisplayName4;
  TaxTrackedOnSales: TaxTrackedOnSales;
  TaxTrackedOnPurchases: TaxTrackedOnPurchases;
  LastFileDate: LastFileDate;
  Id: Id46;
  TaxRegistrationNumber: TaxRegistrationNumber;
  MetaData: MetaData19;
}

export interface SyncToken19 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface TaxAgencyConfig {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
}

export interface DisplayName4 {
  maxLen: string;
  type: string;
  requiredFlag: string;
  sortable: boolean;
  description: string;
}

export interface TaxTrackedOnSales {
  default: string;
  readOnly: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TaxTrackedOnPurchases {
  default: string;
  readOnly: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface LastFileDate {
  minorVersion: number;
  requiredFlag: string;
  readOnly: boolean;
  type: string;
  locales: string[];
  description: string;
}

export interface Id46 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface TaxRegistrationNumber {
  readOnly: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface MetaData19 {
  $ref: Ref306[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref306 {
  modificationmetadata: string;
}

export interface Batchrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties159;
}

export interface Properties159 {
  BatchItemRequest: BatchItemRequest;
}

export interface BatchItemRequest {
  $ref: Ref307[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref307 {
  batchitemrequest: string;
}

export interface Customertyperesponse {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties160;
}

export interface Properties160 {
  Active: Active10;
  SyncToken: SyncToken20;
  MetaData: MetaData20;
  Name: Name27;
  Id: Id47;
}

export interface Active10 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface SyncToken20 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface MetaData20 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref308[];
}

export interface Ref308 {
  modificationmetadata: string;
}

export interface Name27 {
  systemDefined: boolean;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Id47 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Itemreftype {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties161;
}

export interface Properties161 {
  type: Type16;
  name: Name28;
  value: Value4;
}

export interface Type16 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Name28 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Value4 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Generalledgerquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties162;
}

export interface Properties162 {
  customer: Customer11;
  account: Account;
  accounting_method: AccountingMethod6;
  source_account: SourceAccount;
  end_date: EndDate11;
  date_macro: DateMacro13;
  account_type: AccountType5;
  sort_by: SortBy5;
  sort_order: SortOrder13;
  start_date: StartDate10;
  summarize_column_by: SummarizeColumnBy8;
  department: Department12;
  vendor: Vendor9;
  class: Class6;
  columns: Columns12;
}

export interface Customer11 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Account {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountingMethod6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SourceAccount {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate11 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DateMacro13 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountType5 {
  default: string;
  table: Table23;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table23 {
  account_types: string[];
}

export interface SortBy5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder13 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate10 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface SummarizeColumnBy8 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department12 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Vendor9 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Class6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Columns12 {
  default: string;
  table: Table24;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table24 {
  columns_generalLedger: string[];
}

export interface Balancesheetquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties163;
}

export interface Properties163 {
  customer: Customer12;
  qzurl: Qzurl7;
  accounting_method: AccountingMethod7;
  end_date: EndDate12;
  date_macro: DateMacro14;
  adjusted_gain_loss: AdjustedGainLoss;
  class: Class7;
  item: Item7;
  sort_order: SortOrder14;
  summarize_column_by: SummarizeColumnBy9;
  department: Department13;
  vendor: Vendor10;
  start_date: StartDate11;
}

export interface Customer12 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Qzurl7 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountingMethod7 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate12 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DateMacro14 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AdjustedGainLoss {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface Class7 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Item7 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder14 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SummarizeColumnBy9 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department13 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Vendor10 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate11 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Profitandlossreportrows {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties164;
}

export interface Properties164 {
  "Row [0..n]": Row0N3;
}

export interface Row0N3 {
  table: Table25;
  description: string;
  $ref: Ref309[];
}

export interface Table25 {
  group_profitandlosssheet: string[];
}

export interface Ref309 {
  reportrow: string;
}

export interface Agedreceivabledetailquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties165;
}

export interface Properties165 {
  customer: Customer13;
  shipvia: Shipvia3;
  term: Term4;
  end_duedate: EndDuedate3;
  start_duedate: StartDuedate3;
  custom1: Custom12;
  custom2: Custom2;
  custom3: Custom3;
  report_date: ReportDate7;
  num_periods: NumPeriods2;
  aging_method: AgingMethod5;
  past_due: PastDue2;
  aging_period: AgingPeriod2;
  columns: Columns13;
}

export interface Customer13 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Shipvia3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Term4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDuedate3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDuedate3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Custom12 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Custom2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Custom3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ReportDate7 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface NumPeriods2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AgingMethod5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PastDue2 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface AgingPeriod2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Columns13 {
  default: string;
  table: Table26;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table26 {
  columns_araging: string[];
}

export interface Salesitemlinedetail {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties166;
}

export interface Properties166 {
  TaxInclusiveAmt: TaxInclusiveAmt4;
  DiscountAmt: DiscountAmt;
  ItemRef: ItemRef5;
  ClassRef: ClassRef11;
  TaxCodeRef: TaxCodeRef9;
  MarkupInfo: MarkupInfo5;
  ItemAccountRef: ItemAccountRef3;
  ServiceDate: ServiceDate3;
  DiscountRate: DiscountRate;
  Qty: Qty3;
  UnitPrice: UnitPrice3;
  TaxClassificationRef: TaxClassificationRef;
}

export interface TaxInclusiveAmt4 {
  minorVersion: number;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface DiscountAmt {
  minorVersion: number;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface ItemRef5 {
  $ref: Ref310[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref310 {
  referencetype: string;
}

export interface ClassRef11 {
  $ref: Ref311[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref311 {
  referencetype: string;
}

export interface TaxCodeRef9 {
  $ref: Ref312[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref312 {
  referencetype: string;
}

export interface MarkupInfo5 {
  $ref: Ref313[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref313 {
  markupinfo: string;
}

export interface ItemAccountRef3 {
  $ref: Ref314[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref314 {
  referencetype: string;
}

export interface ServiceDate3 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DiscountRate {
  minorVersion: number;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface Qty3 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface UnitPrice3 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TaxClassificationRef {
  minorVersion: number;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  $ref: Ref315[];
  type: string;
  description: string;
}

export interface Ref315 {
  referencetype: string;
}

export interface Reimbursechargeline {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties167;
}

export interface Properties167 {
  "LinkedTxn [0..n]": LinkedTxn0N6;
  LineNum: LineNum8;
  ReimburseLineDetail: ReimburseLineDetail;
  LineId: LineId;
  DetailType: DetailType8;
}

export interface LinkedTxn0N6 {
  $ref: Ref316[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref316 {
  linkedtxn: string;
}

export interface LineNum8 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface ReimburseLineDetail {
  $ref: Ref317[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref317 {
  discountlinedetail: string;
}

export interface LineId {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DetailType8 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Emailmessagetype {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties168;
}

export interface Properties168 {
  Message: Message2;
  Subject: Subject;
}

export interface Message2 {
  type: string;
  description: string;
}

export interface Subject {
  type: string;
  description: string;
}

export interface Projectestimaterequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties169;
}

export interface Properties169 {
  ProjectRef: ProjectRef7;
  Line: Line;
  CustomerRef: CustomerRef8;
  CurrencyRef: CurrencyRef12;
}

export interface ProjectRef7 {
  description: string;
  filterable: boolean;
  requiredFlag: string;
  $ref: Ref318[];
  type: string;
  minorVersion: number;
}

export interface Ref318 {
  referencetype: string;
}

export interface Line {
  $ref: Ref319[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref319 {
  pcesalesitemline: string;
}

export interface CustomerRef8 {
  filterable: boolean;
  $ref: Ref320[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref320 {
  referencetype: string;
}

export interface CurrencyRef12 {
  $ref: Ref321[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref321 {
  currencyref: string;
}

export interface Agedreceivablestoplevel {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties170;
}

export interface Properties170 {
  Header: Header7;
  Rows: Rows7;
  Columns: Columns14;
}

export interface Header7 {
  description: string;
  $ref: Ref322[];
}

export interface Ref322 {
  reportheader: string;
}

export interface Rows7 {
  description: string;
  $ref: Ref323[];
}

export interface Ref323 {
  agedreceivablesreportrows: string;
}

export interface Columns14 {
  description: string;
  $ref: Ref324[];
}

export interface Ref324 {
  reportcolumns: string;
}

export interface Taxserviceresponse {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties171;
}

export interface Properties171 {
  TaxCodeId: TaxCodeId;
  TaxCode: TaxCode;
  "TaxRateDetails [0..n]": TaxRateDetails0N;
}

export interface TaxCodeId {
  readOnly: boolean;
  systemDefined: boolean;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface TaxCode {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TaxRateDetails0N {
  $ref: Ref325[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref325 {
  taxratedetails: string;
}

export interface Taxservicerequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties172;
}

export interface Properties172 {
  TaxCode: TaxCode2;
  "TaxRateDetails [0..n]": TaxRateDetails0N2;
}

export interface TaxCode2 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TaxRateDetails0N2 {
  $ref: Ref326[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref326 {
  taxratedetails: string;
}

export interface Taxratelist {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties173;
}

export interface Properties173 {
  "TaxRateDetail [0..n]": TaxRateDetail0N;
}

export interface TaxRateDetail0N {
  $ref: Ref327[];
  requiredFlag: string;
  description: string;
}

export interface Ref327 {
  taxratedetail: string;
}

export interface Discountline {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties174;
}

export interface Properties174 {
  DiscountLineDetail: DiscountLineDetail;
  Description: Description22;
  DetailType: DetailType9;
  LineNum: LineNum9;
  Amount: Amount24;
  Id: Id48;
}

export interface DiscountLineDetail {
  $ref: Ref328[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref328 {
  discountlinedetail: string;
}

export interface Description22 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DetailType9 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface LineNum9 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Amount24 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id48 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Agedreceivablesreportrows {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties175;
}

export interface Properties175 {
  "Row [0..n]": Row0N4;
}

export interface Row0N4 {
  table: Table27;
  description: string;
  $ref: Ref329[];
}

export interface Table27 {
  group_agedreceivablessheet: string[];
}

export interface Ref329 {
  reportrow: string;
}

export interface Categoryrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties176;
}

export interface Properties176 {
  SubItem: SubItem2;
  Type: Type17;
  Name: Name29;
  ParentRef: ParentRef5;
}

export interface SubItem2 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Type17 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Name29 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ParentRef5 {
  $ref: Ref330[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref330 {
  referencetype: string;
}

export interface Groupline {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties177;
}

export interface Properties177 {
  LineNum: LineNum10;
  GroupLineDetail: GroupLineDetail;
  Description: Description23;
  DetailType: DetailType10;
  Id: Id49;
}

export interface LineNum10 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface GroupLineDetail {
  type: string;
  requiredFlag: string;
  $ref: Ref331[];
}

export interface Ref331 {
  grouplinedetail: string;
}

export interface Description23 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DetailType10 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id49 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Transferrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties178;
}

export interface Properties178 {
  Amount: Amount25;
  ToAccountRef: ToAccountRef;
  FromAccountRef: FromAccountRef;
}

export interface Amount25 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ToAccountRef {
  $ref: Ref332[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref332 {
  referencetype: string;
}

export interface FromAccountRef {
  $ref: Ref333[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref333 {
  referencetype: string;
}

export interface Accountinginfoprefs {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties179;
}

export interface Properties179 {
  FirstMonthOfFiscalYear: FirstMonthOfFiscalYear;
  UseAccountNumbers: UseAccountNumbers;
  TaxYearMonth: TaxYearMonth;
  ClassTrackingPerTxn: ClassTrackingPerTxn;
  TrackDepartments: TrackDepartments;
  TaxForm: TaxForm;
  CustomerTerminology: CustomerTerminology;
  BookCloseDate: BookCloseDate;
  DepartmentTerminology: DepartmentTerminology;
  ClassTrackingPerTxnLine: ClassTrackingPerTxnLine;
}

export interface FirstMonthOfFiscalYear {
  default: string;
  readOnly: boolean;
  type: string;
  description: string;
}

export interface UseAccountNumbers {
  default: string;
  readOnly: boolean;
  type: string;
  description: string;
}

export interface TaxYearMonth {
  default: string;
  readOnly: boolean;
  type: string;
  description: string;
}

export interface ClassTrackingPerTxn {
  type: string;
  description: string;
}

export interface TrackDepartments {
  type: string;
  description: string;
}

export interface TaxForm {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface CustomerTerminology {
  type: string;
  description: string;
}

export interface BookCloseDate {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface DepartmentTerminology {
  type: string;
  description: string;
}

export interface ClassTrackingPerTxnLine {
  type: string;
  description: string;
}

export interface Customerresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties180;
}

export interface Properties180 {
  PrimaryEmailAddr: PrimaryEmailAddr2;
  DisplayName: DisplayName5;
  Title: Title3;
  ResaleNum: ResaleNum;
  SecondaryTaxIdentifier: SecondaryTaxIdentifier;
  ARAccountRef: AraccountRef;
  DefaultTaxCodeRef: DefaultTaxCodeRef;
  PreferredDeliveryMethod: PreferredDeliveryMethod;
  GSTIN: Gstin2;
  GivenName: GivenName3;
  SalesTermRef: SalesTermRef4;
  CustomerTypeRef: CustomerTypeRef;
  FullyQualifiedName: FullyQualifiedName4;
  Fax: Fax2;
  BusinessNumber: BusinessNumber2;
  BillWithParent: BillWithParent;
  CurrencyRef: CurrencyRef13;
  Mobile: Mobile4;
  Job: Job;
  BalanceWithJobs: BalanceWithJobs;
  PrimaryPhone: PrimaryPhone2;
  OpenBalanceDate: OpenBalanceDate;
  Taxable: Taxable2;
  AlternatePhone: AlternatePhone2;
  MetaData: MetaData21;
  ParentRef: ParentRef6;
  Level: Level2;
  MiddleName: MiddleName3;
  Notes: Notes;
  TaxExemptionReasonId: TaxExemptionReasonId;
  WebAddr: WebAddr2;
  Active: Active11;
  CompanyName: CompanyName2;
  Balance: Balance6;
  SyncToken: SyncToken21;
  ShipAddr: ShipAddr5;
  PaymentMethodRef: PaymentMethodRef3;
  Suffix: Suffix3;
  IsProject: IsProject;
  Source: Source2;
  FamilyName: FamilyName3;
  PrimaryTaxIdentifier: PrimaryTaxIdentifier;
  GSTRegistrationType: GstregistrationType2;
  PrintOnCheckName: PrintOnCheckName2;
  BillAddr: BillAddr6;
  Id: Id50;
}

export interface PrimaryEmailAddr2 {
  filterable: boolean;
  $ref: Ref334[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref334 {
  emailaddress: string;
}

export interface DisplayName5 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Title3 {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface ResaleNum {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SecondaryTaxIdentifier {
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface AraccountRef {
  $ref: Ref335[];
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface Ref335 {
  referencetype: string;
}

export interface DefaultTaxCodeRef {
  $ref: Ref336[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref336 {
  referencetype: string;
}

export interface PreferredDeliveryMethod {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Gstin2 {
  maxLen: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface GivenName3 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface SalesTermRef4 {
  $ref: Ref337[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref337 {
  referencetype: string;
}

export interface CustomerTypeRef {
  $ref: Ref338[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref338 {
  customertyperef: string;
}

export interface FullyQualifiedName4 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Fax2 {
  maxLen: string;
  $ref: Ref339[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref339 {
  telephonenumber30: string;
}

export interface BusinessNumber2 {
  maxLen: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface BillWithParent {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CurrencyRef13 {
  description: string;
  requiredFlag: string;
  maxLen: string;
  readOnly: boolean;
  type: string;
  $ref: Ref340[];
}

export interface Ref340 {
  referencetype: string;
}

export interface Mobile4 {
  maxLen: string;
  $ref: Ref341[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref341 {
  telephonenumber30: string;
}

export interface Job {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface BalanceWithJobs {
  type: string;
  sortable: boolean;
  requiredFlag: string;
  description: string;
}

export interface PrimaryPhone2 {
  maxLen: string;
  $ref: Ref342[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref342 {
  telephonenumber30: string;
}

export interface OpenBalanceDate {
  $ref: Ref343[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref343 {
  date: string;
}

export interface Taxable2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AlternatePhone2 {
  maxLen: string;
  $ref: Ref344[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref344 {
  telephonenumber30: string;
}

export interface MetaData21 {
  $ref: Ref345[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref345 {
  modificationmetadata: string;
}

export interface ParentRef6 {
  $ref: Ref346[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref346 {
  referencetype: string;
}

export interface Level2 {
  default: string;
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface MiddleName3 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Notes {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TaxExemptionReasonId {
  type: string;
  description: string;
}

export interface WebAddr2 {
  maxLen: string;
  $ref: Ref347[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref347 {
  websiteaddress: string;
}

export interface Active11 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface CompanyName2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Balance6 {
  filterable: boolean;
  type: string;
  sortable: boolean;
  requiredFlag: string;
  description: string;
}

export interface SyncToken21 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface ShipAddr5 {
  table: Table28;
  $ref: Ref348[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table28 {
  physical_address: string[];
}

export interface Ref348 {
  physicaladdress: string;
}

export interface PaymentMethodRef3 {
  $ref: Ref349[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref349 {
  referencetype: string;
}

export interface Suffix3 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface IsProject {
  default: string;
  readOnly: boolean;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Source2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface FamilyName3 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface PrimaryTaxIdentifier {
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface GstregistrationType2 {
  maxLen: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface PrintOnCheckName2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface BillAddr6 {
  table: Table29;
  $ref: Ref350[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table29 {
  physical_address: string[];
}

export interface Ref350 {
  physicaladdress: string;
}

export interface Id50 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Recurringscheduleinfo {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties181;
}

export interface Properties181 {
  DayOfWeek: DayOfWeek;
  StartDate: StartDate12;
  MaxOccurrences: MaxOccurrences;
  RemindDays: RemindDays;
  IntervalType: IntervalType;
  WeekOfMonth: WeekOfMonth;
  MonthOfYear: MonthOfYear;
  DaysBefore: DaysBefore;
  NextDate: NextDate;
  NumInterval: NumInterval;
  EndDate: EndDate13;
  PreviousDate: PreviousDate;
  DayOfMonth: DayOfMonth;
}

export interface DayOfWeek {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate12 {
  $ref: Ref351[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref351 {
  datetime: string;
}

export interface MaxOccurrences {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface RemindDays {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface IntervalType {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface WeekOfMonth {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface MonthOfYear {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DaysBefore {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface NextDate {
  readOnly: boolean;
  $ref: Ref352[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref352 {
  datetime: string;
}

export interface NumInterval {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate13 {
  $ref: Ref353[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref353 {
  datetime: string;
}

export interface PreviousDate {
  readOnly: boolean;
  $ref: Ref354[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref354 {
  datetime: string;
}

export interface DayOfMonth {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Batchresponse {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties182;
}

export interface Properties182 {
  BatchItemResponse: BatchItemResponse;
}

export interface BatchItemResponse {
  $ref: Ref355[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref355 {
  batchitemresponse: string;
}

export interface Customfieldboolsales {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties183;
}

export interface Properties183 {
  BooleanValue: BooleanValue2;
  Type: Type18;
  Name: Name30;
}

export interface BooleanValue2 {
  type: string;
  description: string;
}

export interface Type18 {
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Name30 {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface Taxprefs {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties184;
}

export interface Properties184 {
  PartnerTaxEnabled: PartnerTaxEnabled;
  TaxGroupCodeRef: TaxGroupCodeRef;
  UsingSalesTax: UsingSalesTax;
}

export interface PartnerTaxEnabled {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface TaxGroupCodeRef {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface UsingSalesTax {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface Creditmemorequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties185;
}

export interface Properties185 {
  ProjectRef: ProjectRef8;
  Line: Line2;
  CustomerRef: CustomerRef9;
  CurrencyRef: CurrencyRef14;
}

export interface ProjectRef8 {
  filterable: boolean;
  requiredFlag: string;
  type: string;
  description: string;
  $ref: Ref356[];
}

export interface Ref356 {
  referencetype: string;
}

export interface Line2 {
  $ref: Ref357[];
  requiredFlag: string;
  description: string;
}

export interface Ref357 {
  salesitemline?: string;
  groupline?: string;
}

export interface CustomerRef9 {
  filterable: boolean;
  $ref: Ref358[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref358 {
  referencetype: string;
}

export interface CurrencyRef14 {
  $ref: Ref359[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref359 {
  currencyref: string;
}

export interface Inventoryadjustmentdeleterequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties186;
}

export interface Properties186 {
  SyncToken: SyncToken22;
  id: Id51;
}

export interface SyncToken22 {
  requiredFlag: string;
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Id51 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Currencyprefs {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties187;
}

export interface Properties187 {
  HomeCurrency: HomeCurrency;
  MultiCurrencyEnabled: MultiCurrencyEnabled;
}

export interface HomeCurrency {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface MultiCurrencyEnabled {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface Salesitemline {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties188;
}

export interface Properties188 {
  Description: Description24;
  DetailType: DetailType11;
  SalesItemLineDetail: SalesItemLineDetail;
  LineNum: LineNum11;
  Amount: Amount26;
  Id: Id52;
}

export interface Description24 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DetailType11 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SalesItemLineDetail {
  type: string;
  requiredFlag: string;
  $ref: Ref360[];
}

export interface Ref360 {
  salesitemlinedetail: string;
}

export interface LineNum11 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Amount26 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id52 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Transactionlistbyvendorquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties189;
}

export interface Properties189 {
  date_macro: DateMacro15;
  payment_method: PaymentMethod4;
  duedate_macro: DuedateMacro3;
  arpaid: Arpaid4;
  bothamount: Bothamount2;
  transaction_type: TransactionType3;
  docnum: Docnum3;
  start_moddate: StartModdate2;
  source_account_type: SourceAccountType3;
  group_by: GroupBy4;
  start_date: StartDate13;
  department: Department14;
  start_duedate: StartDuedate4;
  columns: Columns15;
  end_duedate: EndDuedate4;
  vendor: Vendor11;
  end_date: EndDate14;
  memo: Memo4;
  appaid: Appaid4;
  moddate_macro: ModdateMacro3;
  printed: Printed2;
  createdate_macro: CreatedateMacro3;
  cleared: Cleared2;
  qzurl: Qzurl8;
  term: Term5;
  end_createdate: EndCreatedate2;
  name: Name31;
  sort_by: SortBy6;
  sort_order: SortOrder15;
  start_createdate: StartCreatedate2;
  end_moddate: EndModdate2;
}

export interface DateMacro15 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PaymentMethod4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DuedateMacro3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Arpaid4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Bothamount2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TransactionType3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Docnum3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartModdate2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SourceAccountType3 {
  default: string;
  table: Table30;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table30 {
  account_types: string[];
}

export interface GroupBy4 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate13 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Department14 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDuedate4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Columns15 {
  default: string;
  table: Table31;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table31 {
  columns_tax: string[];
}

export interface EndDuedate4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Vendor11 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate14 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Memo4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Appaid4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ModdateMacro3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Printed2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CreatedateMacro3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Cleared2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Qzurl8 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Term5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndCreatedate2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Name31 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface SortBy6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder15 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartCreatedate2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndModdate2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Deleterequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties190;
}

export interface Properties190 {
  SyncToken: SyncToken23;
  id: Id53;
}

export interface SyncToken23 {
  requiredFlag: string;
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Id53 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Voidrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties191;
}

export interface Properties191 {
  SyncToken: SyncToken24;
  id: Id54;
  sparse: Sparse;
}

export interface SyncToken24 {
  requiredFlag: string;
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Id54 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Sparse {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Transferresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties192;
}

export interface Properties192 {
  SyncToken: SyncToken25;
  PrivateNote: PrivateNote12;
  RecurDataRef: RecurDataRef6;
  TxnDate: TxnDate14;
  ToAccountRef: ToAccountRef2;
  Amount: Amount27;
  TransactionLocationType: TransactionLocationType7;
  Id: Id55;
  FromAccountRef: FromAccountRef2;
  MetaData: MetaData22;
}

export interface SyncToken25 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface PrivateNote12 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface RecurDataRef6 {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
  $ref: Ref361[];
}

export interface Ref361 {
  referencetype: string;
}

export interface TxnDate14 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
  $ref: Ref362[];
}

export interface Ref362 {
  date: string;
}

export interface ToAccountRef2 {
  $ref: Ref363[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref363 {
  referencetype: string;
}

export interface Amount27 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TransactionLocationType7 {
  minorVersion: number;
  default: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  description: string;
}

export interface Id55 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface FromAccountRef2 {
  $ref: Ref364[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref364 {
  referencetype: string;
}

export interface MetaData22 {
  $ref: Ref365[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref365 {
  modificationmetadata: string;
}

export interface Refundreceiptrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties193;
}

export interface Properties193 {
  CurrencyRef: CurrencyRef15;
  ProjectRef: ProjectRef9;
  DepositToAccountRef: DepositToAccountRef3;
  "Line [0..n]": Line0N13;
}

export interface CurrencyRef15 {
  $ref: Ref366[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref366 {
  currencyref: string;
}

export interface ProjectRef9 {
  description: string;
  filterable: boolean;
  requiredFlag: string;
  $ref: Ref367[];
  type: string;
  minorVersion: number;
}

export interface Ref367 {
  referencetype: string;
}

export interface DepositToAccountRef3 {
  $ref: Ref368[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref368 {
  referencetype?: string;
  currencyref?: string;
}

export interface Line0N13 {
  $ref: Ref369[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref369 {
  salesitemline?: string;
  groupline?: string;
}

export interface Creditmemo {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties194;
}

export interface Properties194 {
  TxnDate: TxnDate15;
  CurrencyRef: CurrencyRef16;
  HomeBalance: HomeBalance4;
  ShipDate: ShipDate3;
  TrackingNum: TrackingNum2;
  PrintStatus: PrintStatus7;
  CustomField: CustomField9;
  SalesTermRef: SalesTermRef5;
  GlobalTaxCalculation: GlobalTaxCalculation6;
  TotalAmt: TotalAmt8;
  DueDate: DueDate3;
  MetaData: MetaData23;
  DocNumber: DocNumber10;
  PrivateNote: PrivateNote13;
  DepositToAccountRef: DepositToAccountRef4;
  "Line [0..n]": Line0N14;
  CustomerMemo: CustomerMemo5;
  EmailStatus: EmailStatus4;
  ProjectRef: ProjectRef10;
  TaxExemptionRef: TaxExemptionRef5;
  Deposit: Deposit2;
  Balance: Balance7;
  CustomerRef: CustomerRef10;
  TxnTaxDetail: TxnTaxDetail6;
  SyncToken: SyncToken26;
  ExchangeRate: ExchangeRate8;
  ShipAddr: ShipAddr6;
  HomeTotalAmt: HomeTotalAmt6;
  DepartmentRef: DepartmentRef8;
  ShipMethodRef: ShipMethodRef3;
  BillAddr: BillAddr7;
  ApplyTaxAfterDiscount: ApplyTaxAfterDiscount5;
  BillEmail: BillEmail5;
  Id: Id56;
}

export interface TxnDate15 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
  $ref: Ref370[];
}

export interface Ref370 {
  date: string;
}

export interface CurrencyRef16 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface HomeBalance4 {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface ShipDate3 {
  $ref: Ref371[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref371 {
  date: string;
}

export interface TrackingNum2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PrintStatus7 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface CustomField9 {
  $ref: Ref372[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref372 {
  customfield: string;
}

export interface SalesTermRef5 {
  filterable: boolean;
  $ref: Ref373[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref373 {
  referencetype: string;
}

export interface GlobalTaxCalculation6 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface TotalAmt8 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DueDate3 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref374[];
}

export interface Ref374 {
  date: string;
}

export interface MetaData23 {
  $ref: Ref375[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref375 {
  modificationmetadata: string;
}

export interface DocNumber10 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface PrivateNote13 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DepositToAccountRef4 {
  readOnly: boolean;
  $ref: Ref376[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref376 {
  referencetype: string;
}

export interface Line0N14 {
  $ref: Ref377[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref377 {
  salesitemline: string;
}

export interface CustomerMemo5 {
  $ref: Ref378[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref378 {
  memoref: string;
}

export interface EmailStatus4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ProjectRef10 {
  filterable: boolean;
  requiredFlag: string;
  type: string;
  description: string;
  $ref: Ref379[];
}

export interface Ref379 {
  referencetype: string;
}

export interface TaxExemptionRef5 {
  readOnly: boolean;
  $ref: Ref380[];
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Ref380 {
  referencetype: string;
}

export interface Deposit2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Balance7 {
  filterable: boolean;
  type: string;
  readOnly: boolean;
  sortable: boolean;
  description: string;
}

export interface CustomerRef10 {
  filterable: boolean;
  requiredFlag: string;
  type: string;
  description: string;
  $ref: Ref381[];
}

export interface Ref381 {
  referencetype: string;
}

export interface TxnTaxDetail6 {
  $ref: Ref382[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref382 {
  txntaxdetail: string;
}

export interface SyncToken26 {
  requiredFlag: string;
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface ExchangeRate8 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface ShipAddr6 {
  table: Table32;
  $ref: Ref383[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table32 {
  physical_address: string[];
}

export interface Ref383 {
  physicaladdress: string;
}

export interface HomeTotalAmt6 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface DepartmentRef8 {
  $ref: Ref384[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref384 {
  referencetype: string;
}

export interface ShipMethodRef3 {
  $ref: Ref385[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref385 {
  referencetype: string;
}

export interface BillAddr7 {
  table: Table33;
  $ref: Ref386[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table33 {
  physical_address: string[];
}

export interface Ref386 {
  physicaladdress: string;
}

export interface ApplyTaxAfterDiscount5 {
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface BillEmail5 {
  $ref: Ref387[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref387 {
  emailaddress: string;
}

export interface Id56 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Customerbalancequery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties195;
}

export interface Properties195 {
  customer: Customer14;
  accounting_method: AccountingMethod8;
  date_macro: DateMacro16;
  arpaid: Arpaid5;
  report_date: ReportDate8;
  sort_order: SortOrder16;
  summarize_column_by: SummarizeColumnBy10;
  department: Department15;
}

export interface Customer14 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountingMethod8 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DateMacro16 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Arpaid5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ReportDate8 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder16 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SummarizeColumnBy10 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department15 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface GeneralledgerqueryFr {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties196;
}

export interface Properties196 {
  customer: Customer15;
  account: Account2;
  accounting_method: AccountingMethod9;
  source_account: SourceAccount2;
  end_date: EndDate15;
  date_macro: DateMacro17;
  account_type: AccountType6;
  sort_by: SortBy7;
  sort_order: SortOrder17;
  start_date: StartDate14;
  summarize_column_by: SummarizeColumnBy11;
  department: Department16;
  vendor: Vendor12;
  class: Class8;
}

export interface Customer15 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Account2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountingMethod9 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SourceAccount2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate15 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DateMacro17 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountType6 {
  default: string;
  table: Table34;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table34 {
  account_types: string[];
}

export interface SortBy7 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder17 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate14 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface SummarizeColumnBy11 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department16 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Vendor12 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Class8 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Paymentrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties197;
}

export interface Properties197 {
  TotalAmt: TotalAmt9;
  ProjectRef: ProjectRef11;
  CustomerRef: CustomerRef11;
  CurrencyRef: CurrencyRef17;
}

export interface TotalAmt9 {
  filterable: boolean;
  sortable: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ProjectRef11 {
  description: string;
  filterable: boolean;
  requiredFlag: string;
  $ref: Ref388[];
  type: string;
  minorVersion: number;
}

export interface Ref388 {
  referencetype: string;
}

export interface CustomerRef11 {
  filterable: boolean;
  requiredFlag: string;
  type: string;
  description: string;
  $ref: Ref389[];
}

export interface Ref389 {
  referencetype: string;
}

export interface CurrencyRef17 {
  $ref: Ref390[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref390 {
  currencyref: string;
}

export interface Itemgroupdetail {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties198;
}

export interface Properties198 {
  "ItemGroupLine [0..n]": ItemGroupLine0N;
}

export interface ItemGroupLine0N {
  $ref: Ref391[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref391 {
  itemgroupline: string;
}

export interface Companyinforesponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties199;
}

export interface Properties199 {
  SyncToken: SyncToken27;
  LegalAddr: LegalAddr;
  SupportedLanguages: SupportedLanguages;
  CompanyName: CompanyName3;
  Country: Country4;
  CompanyAddr: CompanyAddr;
  Email: Email;
  WebAddr: WebAddr3;
  "NameValue [0..n]": NameValue0N;
  FiscalYearStartMonth: FiscalYearStartMonth;
  CustomerCommunicationAddr: CustomerCommunicationAddr;
  PrimaryPhone: PrimaryPhone3;
  LegalName: LegalName;
  CompanyStartDate: CompanyStartDate;
  EmployerId: EmployerId;
  Id: Id57;
  MetaData: MetaData24;
}

export interface SyncToken27 {
  requiredFlag: string;
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface LegalAddr {
  table: Table35;
  $ref: Ref392[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table35 {
  physical_address: string[];
}

export interface Ref392 {
  physicaladdress: string;
}

export interface SupportedLanguages {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CompanyName3 {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Country4 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CompanyAddr {
  table: Table36;
  $ref: Ref393[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table36 {
  physical_address: string[];
}

export interface Ref393 {
  physicaladdress: string;
}

export interface Email {
  maxLen: string;
  $ref: Ref394[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref394 {
  emailaddress: string;
}

export interface WebAddr3 {
  maxLen: string;
  $ref: Ref395[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref395 {
  websiteaddress: string;
}

export interface NameValue0N {
  table: Table37;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table37 {
  dataservicesextensions: string[];
}

export interface FiscalYearStartMonth {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CustomerCommunicationAddr {
  table: Table38;
  $ref: Ref396[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table38 {
  physical_address: string[];
}

export interface Ref396 {
  physicaladdress: string;
}

export interface PrimaryPhone3 {
  $ref: Ref397[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref397 {
  telephonenumber: string;
}

export interface LegalName {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CompanyStartDate {
  readOnly: boolean;
  $ref: Ref398[];
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Ref398 {
  datetime: string;
}

export interface EmployerId {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id57 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface MetaData24 {
  $ref: Ref399[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref399 {
  modificationmetadata: string;
}

export interface Emailaddress {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties200;
}

export interface Properties200 {
  Address: Address4;
}

export interface Address4 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Billpaymentrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties201;
}

export interface Properties201 {
  VendorRef: VendorRef7;
  CurrencyRef: CurrencyRef18;
  TotalAmt: TotalAmt10;
  "Line [0..n]": Line0N15;
  PayType: PayType2;
  CreditCardPayment: CreditCardPayment3;
  CheckPayment: CheckPayment3;
}

export interface VendorRef7 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref400[];
}

export interface Ref400 {
  referencetype: string;
}

export interface CurrencyRef18 {
  $ref: Ref401[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref401 {
  currencyref: string;
}

export interface TotalAmt10 {
  filterable: boolean;
  type: string;
  sortable: boolean;
  description: string;
  requiredFlag: string;
}

export interface Line0N15 {
  $ref: Ref402[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref402 {
  linelinkedtxn: string;
}

export interface PayType2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CreditCardPayment3 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref403[];
}

export interface Ref403 {
  billpaymentcreditcard: string;
}

export interface CheckPayment3 {
  $ref: Ref404[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref404 {
  billpaymentcheck: string;
}

export interface Timeactivityresponse {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties202;
}

export interface Properties202 {
  TxnDate: TxnDate16;
  NameOf: NameOf2;
  ClassRef: ClassRef12;
  "BreakHours BreakMinutes": BreakHoursBreakMinutes;
  EndTime: EndTime2;
  Description: Description25;
  Hours: Hours2;
  Taxable: Taxable3;
  TransactionLocationType: TransactionLocationType8;
  MetaData: MetaData25;
  VendorRef: VendorRef8;
  CostRate: CostRate2;
  ItemRef: ItemRef6;
  ProjectRef: ProjectRef12;
  PayrollItemRef: PayrollItemRef;
  BillableStatus: BillableStatus4;
  HourlyRate: HourlyRate2;
  CustomerRef: CustomerRef12;
  SyncToken: SyncToken28;
  EmployeeRef: EmployeeRef2;
  DepartmentRef: DepartmentRef9;
  StartTime: StartTime2;
  Id: Id58;
}

export interface TxnDate16 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
  $ref: Ref405[];
}

export interface Ref405 {
  date: string;
}

export interface NameOf2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ClassRef12 {
  $ref: Ref406[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref406 {
  referencetype: string;
}

export interface BreakHoursBreakMinutes {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface EndTime2 {
  $ref: Ref407[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref407 {
  datetime: string;
}

export interface Description25 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Hours2 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Taxable3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TransactionLocationType8 {
  minorVersion: number;
  default: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  description: string;
}

export interface MetaData25 {
  $ref: Ref408[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref408 {
  modificationmetadata: string;
}

export interface VendorRef8 {
  $ref: Ref409[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref409 {
  referencetype: string;
}

export interface CostRate2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ItemRef6 {
  $ref: Ref410[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref410 {
  referencetype: string;
}

export interface ProjectRef12 {
  description: string;
  filterable: boolean;
  requiredFlag: string;
  $ref: Ref411[];
  type: string;
  minorVersion: number;
}

export interface Ref411 {
  referencetype: string;
}

export interface PayrollItemRef {
  $ref: Ref412[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref412 {
  referencetype: string;
}

export interface BillableStatus4 {
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  readOnly: boolean;
  type: string;
}

export interface HourlyRate2 {
  default: string;
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface CustomerRef12 {
  $ref: Ref413[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref413 {
  referencetype: string;
}

export interface SyncToken28 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface EmployeeRef2 {
  $ref: Ref414[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref414 {
  referencetype: string;
}

export interface DepartmentRef9 {
  $ref: Ref415[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref415 {
  referencetype: string;
}

export interface StartTime2 {
  $ref: Ref416[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref416 {
  datetime: string;
}

export interface Id58 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Itemrequest {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties203;
}

export interface Properties203 {
  QtyOnHand: QtyOnHand;
  Name: Name32;
  IncomeAccountRef: IncomeAccountRef;
  AssetAccountRef: AssetAccountRef;
  InvStartDate: InvStartDate;
  Type: Type19;
  ExpenseAccountRef: ExpenseAccountRef;
}

export interface QtyOnHand {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Name32 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface IncomeAccountRef {
  description: string;
  type: string;
  requiredFlag: string;
  $ref: Ref417[];
}

export interface Ref417 {
  referencetype: string;
}

export interface AssetAccountRef {
  description: string;
  type: string;
  requiredFlag: string;
  $ref: Ref418[];
}

export interface Ref418 {
  referencetype: string;
}

export interface InvStartDate {
  description: string;
  type: string;
  requiredFlag: string;
  $ref: Ref419[];
}

export interface Ref419 {
  date: string;
}

export interface Type19 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  minorVersion: string;
}

export interface ExpenseAccountRef {
  description: string;
  type: string;
  requiredFlag: string;
  $ref: Ref420[];
}

export interface Ref420 {
  referencetype: string;
}

export interface Batchitemresponse {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties204;
}

export interface Properties204 {
  ResourceName: ResourceName2;
  bId: BId2;
  QueryResponse: QueryResponse;
}

export interface ResourceName2 {
  type: string;
  description: string;
}

export interface BId2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface QueryResponse {
  type: string;
  description: string;
}

export interface Physicaladdress {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties205;
}

export interface Properties205 {
  City: City2;
  Country: Country5;
  Line5: Line5;
  Line4: Line4;
  Line3: Line3;
  Line2: Line22;
  Line1: Line1;
  PostalCode: PostalCode3;
  CountrySubDivisionCode: CountrySubDivisionCode;
  Id: Id59;
}

export interface City2 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Country5 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Line5 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Line4 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Line3 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Line22 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Line1 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PostalCode3 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CountrySubDivisionCode {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id59 {
  readOnly: boolean;
  systemDefined: boolean;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Accountlistquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties206;
}

export interface Properties206 {
  account_type: AccountType7;
  end_date: EndDate16;
  start_moddate: StartModdate3;
  sort_by: SortBy8;
  sort_order: SortOrder18;
  moddate_macro: ModdateMacro4;
  end_moddate: EndModdate3;
  account_status: AccountStatus2;
  createdate_macro: CreatedateMacro4;
  start_date: StartDate15;
  columns: Columns16;
}

export interface AccountType7 {
  default: string;
  table: Table39;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table39 {
  account_types: string[];
}

export interface EndDate16 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface StartModdate3 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface SortBy8 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder18 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ModdateMacro4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndModdate3 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface AccountStatus2 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CreatedateMacro4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate15 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Columns16 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Budgetresponse {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties207;
}

export interface Properties207 {
  SyncToken: SyncToken29;
  BudgetEntryType: BudgetEntryType2;
  EndDate: EndDate17;
  Name: Name33;
  "BudgetDetail [0..n]": BudgetDetail0N2;
  StartDate: StartDate16;
  BudgetType: BudgetType2;
  Active: Active12;
  Id: Id60;
  MetaData: MetaData26;
}

export interface SyncToken29 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface BudgetEntryType2 {
  readOnly: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate17 {
  $ref: Ref421[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref421 {
  datetime: string;
}

export interface Name33 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  readOnly: boolean;
  type: string;
}

export interface BudgetDetail0N2 {
  $ref: Ref422[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref422 {
  budgetdetail: string;
}

export interface StartDate16 {
  $ref: Ref423[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref423 {
  datetime: string;
}

export interface BudgetType2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  readOnly: boolean;
  type: string;
}

export interface Active12 {
  filterable: boolean;
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id60 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface MetaData26 {
  $ref: Ref424[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref424 {
  modificationmetadata: string;
}

export interface Reportrow {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties208;
}

export interface Properties208 {
  ColData: ColData;
  Summary: Summary;
  Rows: Rows8;
  Header: Header8;
}

export interface ColData {
  description: string;
}

export interface Summary {
  description: string;
}

export interface Rows8 {
  description: string;
}

export interface Header8 {
  description: string;
}

export interface Depositrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties209;
}

export interface Properties209 {
  ExchangeRate: ExchangeRate9;
  CurrencyRef: CurrencyRef19;
  DepositToAccountRef: DepositToAccountRef5;
  "Line [0..n]": Line0N16;
}

export interface ExchangeRate9 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface CurrencyRef19 {
  $ref: Ref425[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref425 {
  currencyref: string;
}

export interface DepositToAccountRef5 {
  $ref: Ref426[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref426 {
  referencetype: string;
}

export interface Line0N16 {
  $ref: Ref427[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref427 {
  depositline: string;
}

export interface Profitandlossquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties210;
}

export interface Properties210 {
  customer: Customer16;
  qzurl: Qzurl9;
  accounting_method: AccountingMethod10;
  end_date: EndDate18;
  date_macro: DateMacro18;
  adjusted_gain_loss: AdjustedGainLoss2;
  class: Class9;
  item: Item8;
  sort_order: SortOrder19;
  summarize_column_by: SummarizeColumnBy12;
  department: Department17;
  vendor: Vendor13;
  start_date: StartDate17;
}

export interface Customer16 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Qzurl9 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountingMethod10 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate18 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DateMacro18 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AdjustedGainLoss2 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface Class9 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Item8 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder19 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SummarizeColumnBy12 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department17 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Vendor13 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate17 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Employeerequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties211;
}

export interface Properties211 {
  GivenName: GivenName4;
  PrimaryAddr: PrimaryAddr;
  FamilyName: FamilyName4;
}

export interface GivenName4 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface PrimaryAddr {
  description: string;
  requiredFlag: string;
  maxLen: string;
  table: Table40;
  type: string;
  $ref: Ref428[];
}

export interface Table40 {
  physical_address: string[];
}

export interface Ref428 {
  physicaladdress: string;
}

export interface FamilyName4 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Itemgroupline {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties212;
}

export interface Properties212 {
  Qty: Qty4;
  ItemRef: ItemRef7;
}

export interface Qty4 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ItemRef7 {
  type: string;
  requiredFlag: string;
  $ref: Ref429[];
}

export interface Ref429 {
  itemreftype: string;
}

export interface Line6 {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties213;
}

export interface Properties213 {
  Received: Received;
  "LinkedTxn [0..n]": LinkedTxn0N7;
  Description: Description26;
  ProjectRef: ProjectRef13;
  LineNum: LineNum12;
  Amount: Amount28;
  Id: Id61;
}

export interface Received {
  readOnly: boolean;
  type: string;
  minorVersion: number;
  description: string;
}

export interface LinkedTxn0N7 {
  $ref: Ref430[];
  requiredFlag: string;
  description: string;
}

export interface Ref430 {
  linkedtxn: string;
}

export interface Description26 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ProjectRef13 {
  requiredFlag: string;
  type: string;
  description: string;
  minorVersion: number;
  $ref: Ref431[];
}

export interface Ref431 {
  referencetype: string;
}

export interface LineNum12 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Amount28 {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Id61 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Inventoryadjustmentresponse {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties214;
}

export interface Properties214 {
  DocNumber: DocNumber11;
  TxnDate: TxnDate17;
  PrivateNote: PrivateNote14;
  SyncToken: SyncToken30;
  "Line [0..n]": Line0N17;
  AdjustAccountRef: AdjustAccountRef3;
  id: Id62;
  MetaData: MetaData27;
}

export interface DocNumber11 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TxnDate17 {
  $ref: Ref432[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref432 {
  datetime: string;
}

export interface PrivateNote14 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SyncToken30 {
  requiredFlag: string;
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Line0N17 {
  $ref: Ref433[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref433 {
  itemadjustmentline: string;
}

export interface AdjustAccountRef3 {
  description: string;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
  $ref: Ref434[];
}

export interface Ref434 {
  referencetype: string;
}

export interface Id62 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface MetaData27 {
  $ref: Ref435[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref435 {
  modificationmetadata: string;
}

export interface Changedatacaptureresponse {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties215;
}

export interface Properties215 {
  startPosition: StartPosition;
  maxResults: MaxResults;
  totalCount: TotalCount;
  CDCResponse: Cdcresponse;
  "NameOfResource [0..n]": NameOfResource0N;
  "QueryResponse [0..n]": QueryResponse0N;
}

export interface StartPosition {
  type: string;
  description: string;
}

export interface MaxResults {
  type: string;
  description: string;
}

export interface TotalCount {
  type: string;
  description: string;
}

export interface Cdcresponse {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface NameOfResource0N {
  type: string;
  description: string;
}

export interface QueryResponse0N {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Classrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties216;
}

export interface Properties216 {
  Name: Name34;
  ParentRef: ParentRef7;
}

export interface Name34 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ParentRef7 {
  $ref: Ref436[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref436 {
  referencetype: string;
}

export interface Profitandlossdetailquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties217;
}

export interface Properties217 {
  customer: Customer17;
  account: Account3;
  accounting_method: AccountingMethod11;
  end_date: EndDate19;
  date_macro: DateMacro19;
  adjusted_gain_loss: AdjustedGainLoss3;
  class: Class10;
  sort_by: SortBy9;
  payment_method: PaymentMethod5;
  sort_order: SortOrder20;
  employee: Employee4;
  department: Department18;
  vendor: Vendor14;
  account_type: AccountType8;
  start_date: StartDate18;
  columns: Columns17;
}

export interface Customer17 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Account3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountingMethod11 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate19 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DateMacro19 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AdjustedGainLoss3 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface Class10 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortBy9 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PaymentMethod5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder20 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Employee4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department18 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Vendor14 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountType8 {
  default: string;
  table: Table41;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table41 {
  account_types: string[];
}

export interface StartDate18 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Columns17 {
  default: string;
  table: Table42;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table42 {
  columns_generalLedger: string[];
}

export interface Estimateresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties218;
}

export interface Properties218 {
  TxnDate: TxnDate18;
  ShipFromAddr: ShipFromAddr3;
  CurrencyRef: CurrencyRef20;
  ShipDate: ShipDate4;
  ClassRef: ClassRef13;
  PrintStatus: PrintStatus8;
  CustomField: CustomField10;
  SalesTermRef: SalesTermRef6;
  TxnStatus: TxnStatus2;
  "LinkedTxn [0..n]": LinkedTxn0N8;
  GlobalTaxCalculation: GlobalTaxCalculation7;
  TotalAmt: TotalAmt11;
  AcceptedDate: AcceptedDate2;
  ExpirationDate: ExpirationDate2;
  TransactionLocationType: TransactionLocationType9;
  DueDate: DueDate4;
  MetaData: MetaData28;
  DocNumber: DocNumber12;
  PrivateNote: PrivateNote15;
  RecurDataRef: RecurDataRef7;
  "Line [0..n]": Line0N18;
  CustomerMemo: CustomerMemo6;
  EmailStatus: EmailStatus5;
  ProjectRef: ProjectRef14;
  TaxExemptionRef: TaxExemptionRef6;
  CustomerRef: CustomerRef13;
  TxnTaxDetail: TxnTaxDetail7;
  SyncToken: SyncToken31;
  AcceptedBy: AcceptedBy2;
  ExchangeRate: ExchangeRate10;
  ShipAddr: ShipAddr7;
  HomeTotalAmt: HomeTotalAmt7;
  DepartmentRef: DepartmentRef10;
  ShipMethodRef: ShipMethodRef4;
  BillAddr: BillAddr8;
  FreeFormAddress: FreeFormAddress3;
  ApplyTaxAfterDiscount: ApplyTaxAfterDiscount6;
  BillEmail: BillEmail6;
  Id: Id63;
}

export interface TxnDate18 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface ShipFromAddr3 {
  minorVersion: number;
  description: string;
  requiredFlag: string;
  table: Table43;
  type: string;
  $ref: Ref437[];
}

export interface Table43 {
  physical_address: string[];
}

export interface Ref437 {
  physicaladdress: string;
}

export interface CurrencyRef20 {
  $ref: Ref438[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref438 {
  currencyref: string;
}

export interface ShipDate4 {
  $ref: Ref439[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref439 {
  date: string;
}

export interface ClassRef13 {
  $ref: Ref440[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref440 {
  referencetype: string;
}

export interface PrintStatus8 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface CustomField10 {
  $ref: Ref441[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref441 {
  customfield: string;
}

export interface SalesTermRef6 {
  $ref: Ref442[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref442 {
  referencetype: string;
}

export interface TxnStatus2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface LinkedTxn0N8 {
  $ref: Ref443[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref443 {
  linkedtxn: string;
}

export interface GlobalTaxCalculation7 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface TotalAmt11 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface AcceptedDate2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ExpirationDate2 {
  $ref: Ref444[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref444 {
  date: string;
}

export interface TransactionLocationType9 {
  minorVersion: number;
  default: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  description: string;
}

export interface DueDate4 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref445[];
}

export interface Ref445 {
  date: string;
}

export interface MetaData28 {
  $ref: Ref446[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref446 {
  modificationmetadata: string;
}

export interface DocNumber12 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface PrivateNote15 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface RecurDataRef7 {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
  $ref: Ref447[];
}

export interface Ref447 {
  referencetype: string;
}

export interface Line0N18 {
  $ref: Ref448[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref448 {
  salesitemline?: string;
  groupline?: string;
  descriptiononlyline?: string;
  discountline?: string;
  subtotalline?: string;
}

export interface CustomerMemo6 {
  $ref: Ref449[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref449 {
  memoref: string;
}

export interface EmailStatus5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ProjectRef14 {
  description: string;
  filterable: boolean;
  requiredFlag: string;
  $ref: Ref450[];
  type: string;
  minorVersion: number;
}

export interface Ref450 {
  referencetype: string;
}

export interface TaxExemptionRef6 {
  minorVersion: number;
  description: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
  $ref: Ref451[];
}

export interface Ref451 {
  referencetype: string;
}

export interface CustomerRef13 {
  filterable: boolean;
  $ref: Ref452[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref452 {
  referencetype: string;
}

export interface TxnTaxDetail7 {
  $ref: Ref453[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref453 {
  txntaxdetail: string;
}

export interface SyncToken31 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface AcceptedBy2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ExchangeRate10 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface ShipAddr7 {
  table: Table44;
  $ref: Ref454[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table44 {
  physical_address: string[];
}

export interface Ref454 {
  physicaladdress: string;
}

export interface HomeTotalAmt7 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface DepartmentRef10 {
  $ref: Ref455[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref455 {
  referencetype: string;
}

export interface ShipMethodRef4 {
  $ref: Ref456[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref456 {
  referencetype: string;
}

export interface BillAddr8 {
  table: Table45;
  $ref: Ref457[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table45 {
  physical_address: string[];
}

export interface Ref457 {
  physicaladdress: string;
}

export interface FreeFormAddress3 {
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface ApplyTaxAfterDiscount6 {
  default: boolean;
  type: string;
  requiredFlag: string;
  locales: string[];
  description: string;
}

export interface BillEmail6 {
  $ref: Ref458[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref458 {
  emailaddress: string;
}

export interface Id63 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Grouplinedetail {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties219;
}

export interface Properties219 {
  Quantity: Quantity;
  "Line [0..n]": Line0N19;
  GroupItemRef: GroupItemRef;
}

export interface Quantity {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Line0N19 {
  $ref: Ref459[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref459 {
  salesitemline: string;
}

export interface GroupItemRef {
  $ref: Ref460[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref460 {
  referencetype: string;
}

export interface Purchaseresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties220;
}

export interface Properties220 {
  TxnDate: TxnDate19;
  CurrencyRef: CurrencyRef21;
  PrintStatus: PrintStatus9;
  RemitToAddr: RemitToAddr;
  TxnSource: TxnSource3;
  "LinkedTxn [0..n]": LinkedTxn0N9;
  GlobalTaxCalculation: GlobalTaxCalculation8;
  TotalAmt: TotalAmt12;
  TransactionLocationType: TransactionLocationType10;
  MetaData: MetaData29;
  DocNumber: DocNumber13;
  PrivateNote: PrivateNote16;
  RecurDataRef: RecurDataRef8;
  "Line [0..n]": Line0N20;
  Credit: Credit;
  TxnTaxDetail: TxnTaxDetail8;
  SyncToken: SyncToken32;
  PaymentMethodRef: PaymentMethodRef4;
  PurchaseEx: PurchaseEx;
  ExchangeRate: ExchangeRate11;
  DepartmentRef: DepartmentRef11;
  PaymentType: PaymentType3;
  EntityRef: EntityRef3;
  IncludeInAnnualTPAR: IncludeInAnnualTpar2;
  AccountRef: AccountRef5;
  Id: Id64;
}

export interface TxnDate19 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface CurrencyRef21 {
  $ref: Ref461[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref461 {
  currencyref: string;
}

export interface PrintStatus9 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface RemitToAddr {
  description: string;
  requiredFlag: string;
  readOnly: boolean;
  table: Table46;
  type: string;
  $ref: Ref462[];
}

export interface Table46 {
  physical_address: string[];
}

export interface Ref462 {
  physicaladdress: string;
}

export interface TxnSource3 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface LinkedTxn0N9 {
  description: string;
  requiredFlag: string;
  readOnly: boolean;
  minorVersion: number;
  type: string;
  $ref: Ref463[];
}

export interface Ref463 {
  linkedtxn: string;
}

export interface GlobalTaxCalculation8 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface TotalAmt12 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface TransactionLocationType10 {
  minorVersion: number;
  default: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  description: string;
}

export interface MetaData29 {
  $ref: Ref464[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref464 {
  modificationmetadata: string;
}

export interface DocNumber13 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface PrivateNote16 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface RecurDataRef8 {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
  $ref: Ref465[];
}

export interface Ref465 {
  referencetype: string;
}

export interface Line0N20 {
  $ref: Ref466[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref466 {
  itembasedexpenseline?: string;
  accountbasedexpenseline?: string;
}

export interface Credit {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TxnTaxDetail8 {
  $ref: Ref467[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref467 {
  txntaxdetail: string;
}

export interface SyncToken32 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface PaymentMethodRef4 {
  $ref: Ref468[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref468 {
  referencetype: string;
}

export interface PurchaseEx {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ExchangeRate11 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DepartmentRef11 {
  $ref: Ref469[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref469 {
  referencetype: string;
}

export interface PaymentType3 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EntityRef3 {
  $ref: Ref470[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref470 {
  referencetype: string;
}

export interface IncludeInAnnualTpar2 {
  minorVersion: number;
  default: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  description: string;
}

export interface AccountRef5 {
  $ref: Ref471[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref471 {
  referencetype: string;
}

export interface Id64 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Agedpayabledetailquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties221;
}

export interface Properties221 {
  shipvia: Shipvia4;
  term: Term6;
  end_duedate: EndDuedate5;
  accounting_method: AccountingMethod12;
  start_duedate: StartDuedate5;
  custom1: Custom13;
  custom2: Custom22;
  custom3: Custom32;
  report_date: ReportDate9;
  num_periods: NumPeriods3;
  vendor: Vendor15;
  past_due: PastDue3;
  aging_period: AgingPeriod3;
  columns: Columns18;
}

export interface Shipvia4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Term6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDuedate5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountingMethod12 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDuedate5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Custom13 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Custom22 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Custom32 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ReportDate9 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface NumPeriods3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Vendor15 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PastDue3 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface AgingPeriod3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Columns18 {
  default: string;
  table: Table47;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table47 {
  columns_apaging: string[];
}

export interface Subtotallinedetail {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties222;
}

export interface Properties222 {
  ItemRef: ItemRef8;
}

export interface ItemRef8 {
  $ref: Ref472[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref472 {
  referencetype: string;
}

export interface Vendorpaymentbankdetail {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties223;
}

export interface Properties223 {
  BankAccountName: BankAccountName;
  BankBranchIdentifier: BankBranchIdentifier;
  BankAccountNumber: BankAccountNumber;
  StatementText: StatementText;
}

export interface BankAccountName {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface BankBranchIdentifier {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface BankAccountNumber {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StatementText {
  maxLen: string;
  type: string;
  description: string;
}

export interface Itemsalesquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties224;
}

export interface Properties224 {
  customer: Customer18;
  end_duedate: EndDuedate6;
  accounting_method: AccountingMethod13;
  end_date: EndDate20;
  date_macro: DateMacro20;
  start_duedate: StartDuedate6;
  class: Class11;
  item: Item9;
  sort_order: SortOrder21;
  summarize_column_by: SummarizeColumnBy13;
  department: Department19;
  start_date: StartDate19;
}

export interface Customer18 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDuedate6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountingMethod13 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate20 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DateMacro20 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDuedate6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Class11 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Item9 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder21 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SummarizeColumnBy13 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department19 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate19 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Journalcoderesponse {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties225;
}

export interface Properties225 {
  SyncToken: SyncToken33;
  Description: Description27;
  "CustomField ": CustomField11;
  Name: Name35;
  Type: Type20;
  Id: Id65;
  MetaData: MetaData30;
}

export interface SyncToken33 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Description27 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CustomField11 {
  $ref: Ref473[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref473 {
  customfield: string;
}

export interface Name35 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Type20 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id65 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface MetaData30 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref474[];
}

export interface Ref474 {
  modificationmetadata: string;
}

export interface Bundleresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties226;
}

export interface Properties226 {
  Sku: Sku;
  SyncToken: SyncToken34;
  Name: Name36;
  FullyQualifiedName: FullyQualifiedName5;
  Type: Type21;
  PurchaseCost: PurchaseCost;
  Active: Active13;
  ItemGroupDetail: ItemGroupDetail;
  Taxable: Taxable4;
  Description: Description28;
  PrintGroupedItems: PrintGroupedItems;
  UnitPrice: UnitPrice4;
  Id: Id66;
  MetaData: MetaData31;
}

export interface Sku {
  filterable: boolean;
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SyncToken34 {
  requiredFlag: string;
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Name36 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface FullyQualifiedName5 {
  filterable: boolean;
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Type21 {
  filterable: boolean;
  type: string;
  sortable: boolean;
  description: string;
  requiredFlag: string;
}

export interface PurchaseCost {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Active13 {
  filterable: boolean;
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ItemGroupDetail {
  $ref: Ref475[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref475 {
  itemgroupdetail: string;
}

export interface Taxable4 {
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface Description28 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PrintGroupedItems {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface UnitPrice4 {
  sortable: boolean;
  description: string;
  default: string;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Id66 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface MetaData31 {
  $ref: Ref476[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref476 {
  modificationmetadata: string;
}

export interface Paymentresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties227;
}

export interface Properties227 {
  SyncToken: SyncToken35;
  PrivateNote: PrivateNote17;
  PaymentMethodRef: PaymentMethodRef5;
  UnappliedAmt: UnappliedAmt;
  DepositToAccountRef: DepositToAccountRef6;
  CurrencyRef: CurrencyRef22;
  TotalAmt: TotalAmt13;
  ExchangeRate: ExchangeRate12;
  "Line [0..n]": Line0N21;
  ProjectRef: ProjectRef15;
  TxnSource: TxnSource4;
  PaymentRefNum: PaymentRefNum2;
  TxnDate: TxnDate20;
  CreditCardPayment: CreditCardPayment4;
  TaxExemptionRef: TaxExemptionRef7;
  TransactionLocationType: TransactionLocationType11;
  CustomerRef: CustomerRef14;
  Id: Id67;
  MetaData: MetaData32;
}

export interface SyncToken35 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface PrivateNote17 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PaymentMethodRef5 {
  $ref: Ref477[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref477 {
  referencetype: string;
}

export interface UnappliedAmt {
  readOnly: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DepositToAccountRef6 {
  default: string;
  $ref: Ref478[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref478 {
  referencetype: string;
}

export interface CurrencyRef22 {
  $ref: Ref479[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref479 {
  currencyref: string;
}

export interface TotalAmt13 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ExchangeRate12 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Line0N21 {
  $ref: Ref480[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref480 {
  linelinkedtxn: string;
}

export interface ProjectRef15 {
  description: string;
  filterable: boolean;
  requiredFlag: string;
  $ref: Ref481[];
  type: string;
  minorVersion: number;
}

export interface Ref481 {
  referencetype: string;
}

export interface TxnSource4 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PaymentRefNum2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  locales: string[];
}

export interface TxnDate20 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface CreditCardPayment4 {
  $ref: Ref482[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref482 {
  creditcardpayment: string;
}

export interface TaxExemptionRef7 {
  minorVersion: number;
  description: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
  $ref: Ref483[];
}

export interface Ref483 {
  referencetype: string;
}

export interface TransactionLocationType11 {
  minorVersion: number;
  default: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  description: string;
}

export interface CustomerRef14 {
  filterable: boolean;
  $ref: Ref484[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref484 {
  referencetype: string;
}

export interface Id67 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface MetaData32 {
  $ref: Ref485[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref485 {
  modificationmetadata: string;
}

export interface Reimbursechargeresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties228;
}

export interface Properties228 {
  SyncToken: SyncToken36;
  PrivateNote: PrivateNote18;
  "LinkedTxn [0..n]": LinkedTxn0N10;
  HasBeenInvoiced: HasBeenInvoiced;
  CurrencyRef: CurrencyRef23;
  ExchangeRate: ExchangeRate13;
  "Line [0..n]": Line0N22;
  HomeTotalAmt: HomeTotalAmt8;
  Amount: Amount29;
  CustomerRef: CustomerRef15;
  Id: Id68;
  MetaData: MetaData33;
}

export interface SyncToken36 {
  requiredFlag: string;
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface PrivateNote18 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface LinkedTxn0N10 {
  $ref: Ref486[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref486 {
  linkedtxn: string;
}

export interface HasBeenInvoiced {
  filterable: boolean;
  default: string;
  type: string;
  description: string;
}

export interface CurrencyRef23 {
  $ref: Ref487[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref487 {
  currencyref: string;
}

export interface ExchangeRate13 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Line0N22 {
  type: string;
  requiredFlag: string;
  $ref: Ref488[];
}

export interface Ref488 {
  reimbursechargeline: string;
}

export interface HomeTotalAmt8 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Amount29 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CustomerRef15 {
  filterable: boolean;
  $ref: Ref489[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref489 {
  referencetype: string;
}

export interface Id68 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface MetaData33 {
  $ref: Ref490[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref490 {
  modificationmetadata: string;
}

export interface Timetrackingprefs {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties229;
}

export interface Properties229 {
  WorkWeekStartDate: WorkWeekStartDate;
  MarkTimeEntriesBillable: MarkTimeEntriesBillable;
  ShowBillRateToAll: ShowBillRateToAll;
  UsingSalesTax: UsingSalesTax2;
  BillCustomers: BillCustomers;
}

export interface WorkWeekStartDate {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface MarkTimeEntriesBillable {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface ShowBillRateToAll {
  default: boolean;
  type: string;
  description: string;
}

export interface UsingSalesTax2 {
  default: boolean;
  type: string;
  description: string;
}

export interface BillCustomers {
  type: string;
  description: string;
}

export interface Attachableresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties230;
}

export interface Properties230 {
  Category: Category;
  SyncToken: SyncToken37;
  FileAccessUri: FileAccessUri;
  ContentType: ContentType;
  PlaceName: PlaceName;
  Size: Size;
  AttachableRef: AttachableRef2;
  Long: Long;
  FileName: FileName2;
  Note: Note2;
  Tag: Tag;
  Lat: Lat;
  ThumbnailFileAccessUri: ThumbnailFileAccessUri;
  TempDownloadUri: TempDownloadUri;
  ThumbnailTempDownloadUri: ThumbnailTempDownloadUri;
  Id: Id69;
  MetaData: MetaData34;
}

export interface Category {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface SyncToken37 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface FileAccessUri {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface ContentType {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface PlaceName {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Size {
  sortable: boolean;
  description: string;
  filterable: boolean;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface AttachableRef2 {
  $ref: Ref491[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref491 {
  attachableref: string;
}

export interface Long {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface FileName2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Note2 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Tag {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Lat {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface ThumbnailFileAccessUri {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface TempDownloadUri {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface ThumbnailTempDownloadUri {
  sortable: boolean;
  description: string;
  filterable: boolean;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Id69 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface MetaData34 {
  $ref: Ref492[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref492 {
  modificationmetadata: string;
}

export interface Accountresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties231;
}

export interface Properties231 {
  SyncToken: SyncToken38;
  SubAccount: SubAccount;
  Classification: Classification;
  FullyQualifiedName: FullyQualifiedName6;
  TxnLocationType: TxnLocationType;
  AccountType: AccountType9;
  CurrencyRef: CurrencyRef24;
  CurrentBalanceWithSubAccounts: CurrentBalanceWithSubAccounts;
  AccountAlias: AccountAlias;
  AcctNum: AcctNum4;
  TaxCodeRef: TaxCodeRef10;
  ParentRef: ParentRef8;
  AccountSubType: AccountSubType2;
  CurrentBalance: CurrentBalance;
  Description: Description29;
  Active: Active14;
  MetaData: MetaData35;
  Id: Id70;
  Name: Name37;
}

export interface SyncToken38 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface SubAccount {
  sortable: boolean;
  description: string;
  filterable: boolean;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Classification {
  description: string;
  filterable: boolean;
  systemDefined: boolean;
  default: string;
  readOnly: boolean;
  type: string;
}

export interface FullyQualifiedName6 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface TxnLocationType {
  default: string;
  type: string;
  description: string;
  locales: string[];
}

export interface AccountType9 {
  filterable: boolean;
  table: Table48;
  type: string;
  description: string;
}

export interface Table48 {
  accounttypes: string[];
}

export interface CurrencyRef24 {
  readOnly: boolean;
  $ref: Ref493[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref493 {
  currencyref: string;
}

export interface CurrentBalanceWithSubAccounts {
  filterable: boolean;
  type: string;
  readOnly: boolean;
  sortable: boolean;
  description: string;
}

export interface AccountAlias {
  default: string;
  type: string;
  description: string;
  locales: string[];
}

export interface AcctNum4 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface TaxCodeRef10 {
  type: string;
  description: string;
  locales: string[];
  $ref: Ref494[];
}

export interface Ref494 {
  referencetype: string;
}

export interface ParentRef8 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref495[];
}

export interface Ref495 {
  referencetype: string;
}

export interface AccountSubType2 {
  filterable: boolean;
  table: Table49;
  type: string;
  description: string;
}

export interface Table49 {
  accounttypes: string[];
}

export interface CurrentBalance {
  filterable: boolean;
  type: string;
  readOnly: boolean;
  sortable: boolean;
  description: string;
}

export interface Description29 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Active14 {
  filterable: boolean;
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface MetaData35 {
  $ref: Ref496[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref496 {
  modificationmetadata: string;
}

export interface Id70 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Name37 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Budgetdetail {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties232;
}

export interface Properties232 {
  ClassRef: ClassRef14;
  DepartmentRef: DepartmentRef12;
  Amount: Amount30;
  BudgetDate: BudgetDate;
  AccountRef: AccountRef6;
  CustomerRef: CustomerRef16;
}

export interface ClassRef14 {
  readOnly: boolean;
  $ref: Ref497[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref497 {
  referencetype: string;
}

export interface DepartmentRef12 {
  readOnly: boolean;
  $ref: Ref498[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref498 {
  referencetype: string;
}

export interface Amount30 {
  readOnly: boolean;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface BudgetDate {
  readOnly: boolean;
  $ref: Ref499[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref499 {
  datetime: string;
}

export interface AccountRef6 {
  readOnly: boolean;
  $ref: Ref500[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref500 {
  referencetype: string;
}

export interface CustomerRef16 {
  readOnly: boolean;
  $ref: Ref501[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref501 {
  referencetype: string;
}

export interface Depositlinedetail {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties233;
}

export interface Properties233 {
  PaymentMethodRef: PaymentMethodRef6;
  ClassRef: ClassRef15;
  CheckNum: CheckNum3;
  TaxCodeRef: TaxCodeRef11;
  TaxApplicableOn: TaxApplicableOn3;
  TxnType: TxnType;
  AccountRef: AccountRef7;
  Entity: Entity3;
}

export interface PaymentMethodRef6 {
  $ref: Ref502[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref502 {
  referencetype: string;
}

export interface ClassRef15 {
  $ref: Ref503[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref503 {
  referencetype: string;
}

export interface CheckNum3 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TaxCodeRef11 {
  $ref: Ref504[];
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface Ref504 {
  referencetype: string;
}

export interface TaxApplicableOn3 {
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface TxnType {
  table: Table50;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table50 {
  txntypeenum: string[];
}

export interface AccountRef7 {
  $ref: Ref505[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref505 {
  referencetype: string;
}

export interface Entity3 {
  $ref: Ref506[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref506 {
  referencetype: string;
}

export interface Employeeresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties234;
}

export interface Properties234 {
  PrimaryEmailAddr: PrimaryEmailAddr3;
  DisplayName: DisplayName6;
  Title: Title4;
  BillableTime: BillableTime;
  GivenName: GivenName5;
  V4IDPseudonym: V4Idpseudonym;
  BirthDate: BirthDate;
  MiddleName: MiddleName4;
  SSN: Ssn;
  PrimaryAddr: PrimaryAddr2;
  PrimaryPhone: PrimaryPhone4;
  Active: Active15;
  ReleasedDate: ReleasedDate;
  MetaData: MetaData36;
  CostRate: CostRate3;
  Mobile: Mobile5;
  Gender: Gender;
  HiredDate: HiredDate;
  BillRate: BillRate2;
  Organization: Organization;
  SyncToken: SyncToken39;
  Suffix: Suffix4;
  FamilyName: FamilyName5;
  PrintOnCheckName: PrintOnCheckName3;
  EmployeeNumber: EmployeeNumber;
  Id: Id71;
}

export interface PrimaryEmailAddr3 {
  $ref: Ref507[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref507 {
  emailaddress: string;
}

export interface DisplayName6 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Title4 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface BillableTime {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface GivenName5 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface V4Idpseudonym {
  "system generated": boolean;
  readOnly: boolean;
  type: string;
  minorVersion: number;
  description: string;
}

export interface BirthDate {
  $ref: Ref508[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref508 {
  date: string;
}

export interface MiddleName4 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Ssn {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PrimaryAddr2 {
  description: string;
  requiredFlag: string;
  maxLen: string;
  table: Table51;
  type: string;
  $ref: Ref509[];
}

export interface Table51 {
  physical_address: string[];
}

export interface Ref509 {
  physicaladdress: string;
}

export interface PrimaryPhone4 {
  maxLen: string;
  $ref: Ref510[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref510 {
  telephonenumber: string;
}

export interface Active15 {
  filterable: boolean;
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ReleasedDate {
  $ref: Ref511[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref511 {
  date: string;
}

export interface MetaData36 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CostRate3 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Mobile5 {
  maxLen: string;
  $ref: Ref512[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref512 {
  telephonenumber: string;
}

export interface Gender {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface HiredDate {
  $ref: Ref513[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref513 {
  date: string;
}

export interface BillRate2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Organization {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SyncToken39 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Suffix4 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface FamilyName5 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface PrintOnCheckName3 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface EmployeeNumber {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id71 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Customerincomequery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties235;
}

export interface Properties235 {
  customer: Customer19;
  term: Term7;
  accounting_method: AccountingMethod14;
  end_date: EndDate21;
  date_macro: DateMacro21;
  class: Class12;
  sort_order: SortOrder22;
  summarize_column_by: SummarizeColumnBy14;
  department: Department20;
  vendor: Vendor16;
  start_date: StartDate20;
}

export interface Customer19 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Term7 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountingMethod14 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate21 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DateMacro21 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Class12 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder22 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SummarizeColumnBy14 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department20 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Vendor16 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate20 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Itemadjustmentline {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties236;
}

export interface Properties236 {
  DetailType: DetailType12;
  ItemAdjustmentLineDetail: ItemAdjustmentLineDetail;
  Id: Id72;
}

export interface DetailType12 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ItemAdjustmentLineDetail {
  $ref: Ref514[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref514 {
  itemadjustmentlinedetail: string;
}

export interface Id72 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Recurringtransactionresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties237;
}

export interface Properties237 {
  SyncToken: SyncToken40;
  RecurringInfo: RecurringInfo;
  RecurDataRef: RecurDataRef9;
  Type: Type22;
  Id: Id73;
  MetaData: MetaData37;
}

export interface SyncToken40 {
  requiredFlag: string;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface RecurringInfo {
  $ref: Ref515[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref515 {
  recurringinfo: string;
}

export interface RecurDataRef9 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref516[];
}

export interface Ref516 {
  referencetype: string;
}

export interface Type22 {
  filterable: boolean;
  type: string;
  description: string;
}

export interface Id73 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  type: string;
}

export interface MetaData37 {
  filterable: boolean;
  $ref: Ref517[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref517 {
  modificationmetadata: string;
}

export interface Reportrows {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties238;
}

export interface Properties238 {
  "Row [0..n]": Row0N5;
}

export interface Row0N5 {
  description: string;
  $ref: Ref518[];
}

export interface Ref518 {
  reportrow: string;
}

export interface LinkedtxnBill {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties239;
}

export interface Properties239 {
  TxnLineId: TxnLineId;
  TxnId: TxnId;
  TxnType: TxnType2;
}

export interface TxnLineId {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TxnId {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TxnType2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Journalentryrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties240;
}

export interface Properties240 {
  JournalCodeRef: JournalCodeRef2;
  CurrencyRef: CurrencyRef25;
  "Line [0..n]": Line0N23;
}

export interface JournalCodeRef2 {
  minorVersion: number;
  description: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  $ref: Ref519[];
}

export interface Ref519 {
  referencetype: string;
}

export interface CurrencyRef25 {
  $ref: Ref520[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref520 {
  currencyref: string;
}

export interface Line0N23 {
  $ref: Ref521[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref521 {
  journalentryline: string;
}

export interface Currencyref {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties241;
}

export interface Properties241 {
  name: Name38;
  value: Value5;
}

export interface Name38 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Value5 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Itemresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties242;
}

export interface Properties242 {
  Sku: Sku2;
  SalesTaxIncluded: SalesTaxIncluded;
  TrackQtyOnHand: TrackQtyOnHand;
  ItemCategoryType: ItemCategoryType;
  SalesTaxCodeRef: SalesTaxCodeRef;
  ClassRef: ClassRef16;
  Source: Source3;
  InvStartDate: InvStartDate2;
  Type: Type23;
  PurchaseTaxIncluded: PurchaseTaxIncluded;
  FullyQualifiedName: FullyQualifiedName7;
  Description: Description30;
  AbatementRate: AbatementRate;
  ExpenseAccountRef: ExpenseAccountRef2;
  SubItem: SubItem3;
  Taxable: Taxable5;
  UQCDisplayText: UqcdisplayText;
  ReorderPoint: ReorderPoint;
  PurchaseDesc: PurchaseDesc;
  MetaData: MetaData38;
  PrefVendorRef: PrefVendorRef;
  Name: Name39;
  Level: Level3;
  IncomeAccountRef: IncomeAccountRef2;
  Active: Active16;
  UQCId: Uqcid;
  ReverseChargeRate: ReverseChargeRate;
  TaxClassificationRef: TaxClassificationRef2;
  PurchaseTaxCodeRef: PurchaseTaxCodeRef;
  SyncToken: SyncToken41;
  ServiceType: ServiceType;
  PurchaseCost: PurchaseCost2;
  QtyOnHand: QtyOnHand2;
  AssetAccountRef: AssetAccountRef2;
  ParentRef: ParentRef9;
  UnitPrice: UnitPrice5;
  Id: Id74;
}

export interface Sku2 {
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
  minorVersion: number;
}

export interface SalesTaxIncluded {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TrackQtyOnHand {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ItemCategoryType {
  minorVersion: number;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface SalesTaxCodeRef {
  $ref: Ref522[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref522 {
  referencetype: string;
}

export interface ClassRef16 {
  description: string;
  $ref: Ref523[];
  type: string;
  requiredFlag: string;
  minorVersion: number;
}

export interface Ref523 {
  referencetype: string;
}

export interface Source3 {
  requiredFlag: string;
  type: string;
  minorVersion: number;
  description: string;
}

export interface InvStartDate2 {
  description: string;
  type: string;
  requiredFlag: string;
  $ref: Ref524[];
}

export interface Ref524 {
  date: string;
}

export interface Type23 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  minorVersion: string;
}

export interface PurchaseTaxIncluded {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface FullyQualifiedName7 {
  filterable: boolean;
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Description30 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AbatementRate {
  minorVersion: number;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface ExpenseAccountRef2 {
  type: string;
  description: string;
  $ref: Ref525[];
}

export interface Ref525 {
  referencetype: string;
}

export interface SubItem3 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Taxable5 {
  type: string;
  requiredFlag: string;
  locales: string[];
  description: string;
}

export interface UqcdisplayText {
  minorVersion: number;
  requiredFlag: string;
  maxLen: string;
  type: string;
  locales: string[];
  description: string;
}

export interface ReorderPoint {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface PurchaseDesc {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface MetaData38 {
  $ref: Ref526[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref526 {
  modificationmetadata: string;
}

export interface PrefVendorRef {
  description: string;
  $ref: Ref527[];
  type: string;
  requiredFlag: string;
  minorVersion: number;
}

export interface Ref527 {
  referencetype: string;
}

export interface Name39 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Level3 {
  default: string;
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface IncomeAccountRef2 {
  description: string;
  type: string;
  requiredFlag: string;
  $ref: Ref528[];
}

export interface Ref528 {
  referencetype: string;
}

export interface Active16 {
  filterable: boolean;
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Uqcid {
  description: string;
  requiredFlag: string;
  table: Table52;
  type: string;
  locales: string[];
  minorVersion: number;
}

export interface Table52 {
  uqid: string[];
}

export interface ReverseChargeRate {
  minorVersion: number;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface TaxClassificationRef2 {
  type: string;
  description: string;
  minorVersion: number;
  $ref: Ref529[];
}

export interface Ref529 {
  referencetype: string;
}

export interface PurchaseTaxCodeRef {
  $ref: Ref530[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref530 {
  referencetype: string;
}

export interface SyncToken41 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface ServiceType {
  minorVersion: number;
  requiredFlag: string;
  table: Table53;
  type: string;
  locales: string[];
  description: string;
}

export interface Table53 {
  service_type: string[];
}

export interface PurchaseCost2 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface QtyOnHand2 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface AssetAccountRef2 {
  description: string;
  type: string;
  requiredFlag: string;
  $ref: Ref531[];
}

export interface Ref531 {
  referencetype: string;
}

export interface ParentRef9 {
  $ref: Ref532[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref532 {
  referencetype: string;
}

export interface UnitPrice5 {
  sortable: boolean;
  description: string;
  default: string;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Id74 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Journalentryline {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties243;
}

export interface Properties243 {
  Description: Description31;
  JournalEntryLineDetail: JournalEntryLineDetail;
  DetailType: DetailType13;
  ProjectRef: ProjectRef16;
  LineNum: LineNum13;
  Amount: Amount31;
  Id: Id75;
}

export interface Description31 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface JournalEntryLineDetail {
  type: string;
  requiredFlag: string;
  $ref: Ref533[];
}

export interface Ref533 {
  journalentrylinedetail: string;
}

export interface DetailType13 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ProjectRef16 {
  requiredFlag: string;
  type: string;
  description: string;
  minorVersion: number;
  $ref: Ref534[];
}

export interface Ref534 {
  referencetype: string;
}

export interface LineNum13 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Amount31 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id75 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Purchaseorderitemlinedetail {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties244;
}

export interface Properties244 {
  OpenQty: OpenQty;
  ItemRef: ItemRef9;
  ManuallyClosed: ManuallyClosed;
  PriceLevelRef: PriceLevelRef3;
  ClassRef: ClassRef17;
  TaxCodeRef: TaxCodeRef12;
  MarkupInfo: MarkupInfo6;
  ServiceDate: ServiceDate4;
  Qty: Qty5;
  UnitPrice: UnitPrice6;
}

export interface OpenQty {
  readOnly: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ItemRef9 {
  $ref: Ref535[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref535 {
  referencetype: string;
}

export interface ManuallyClosed {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PriceLevelRef3 {
  $ref: Ref536[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref536 {
  referencetype: string;
}

export interface ClassRef17 {
  $ref: Ref537[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref537 {
  referencetype: string;
}

export interface TaxCodeRef12 {
  $ref: Ref538[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref538 {
  referencetype: string;
}

export interface MarkupInfo6 {
  $ref: Ref539[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref539 {
  markupinfo: string;
}

export interface ServiceDate4 {
  $ref: Ref540[];
  requiredFlag: string;
  description: string;
}

export interface Ref540 {
  date: string;
}

export interface Qty5 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface UnitPrice6 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Billresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties245;
}

export interface Properties245 {
  TxnDate: TxnDate21;
  CurrencyRef: CurrencyRef26;
  APAccountRef: ApaccountRef5;
  HomeBalance: HomeBalance5;
  SalesTermRef: SalesTermRef7;
  "LinkedTxn [0..n]": LinkedTxn0N11;
  GlobalTaxCalculation: GlobalTaxCalculation9;
  TotalAmt: TotalAmt14;
  TransactionLocationType: TransactionLocationType12;
  DueDate: DueDate5;
  MetaData: MetaData39;
  DocNumber: DocNumber14;
  PrivateNote: PrivateNote19;
  VendorRef: VendorRef9;
  RecurDataRef: RecurDataRef10;
  "Line [0..n]": Line0N24;
  Balance: Balance8;
  TxnTaxDetail: TxnTaxDetail9;
  SyncToken: SyncToken42;
  ExchangeRate: ExchangeRate14;
  DepartmentRef: DepartmentRef13;
  IncludeInAnnualTPAR: IncludeInAnnualTpar3;
  Id: Id76;
}

export interface TxnDate21 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface CurrencyRef26 {
  $ref: Ref541[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref541 {
  currencyref: string;
}

export interface ApaccountRef5 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref542[];
}

export interface Ref542 {
  referencetype: string;
}

export interface HomeBalance5 {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface SalesTermRef7 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref543[];
}

export interface Ref543 {
  referencetype: string;
}

export interface LinkedTxn0N11 {
  readOnly: boolean;
  $ref: Ref544[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref544 {
  linkedtxn: string;
}

export interface GlobalTaxCalculation9 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface TotalAmt14 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  readOnly: boolean;
  type: string;
}

export interface TransactionLocationType12 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface DueDate5 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref545[];
}

export interface Ref545 {
  date: string;
}

export interface MetaData39 {
  $ref: Ref546[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref546 {
  modificationmetadata: string;
}

export interface DocNumber14 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface PrivateNote19 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface VendorRef9 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref547[];
}

export interface Ref547 {
  referencetype: string;
}

export interface RecurDataRef10 {
  readOnly: boolean;
  type: string;
  description: string;
  $ref: Ref548[];
}

export interface Ref548 {
  referencetype: string;
}

export interface Line0N24 {
  $ref: Ref549[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref549 {
  itembasedexpenselinebill?: string;
  accountbasedexpenselinebill?: string;
}

export interface Balance8 {
  filterable: boolean;
  readOnly: boolean;
  type: string;
  description: string;
}

export interface TxnTaxDetail9 {
  $ref: Ref550[];
  type: string;
  requiredFlag: string;
  locales: string[];
  description: string;
}

export interface Ref550 {
  txntaxdetail: string;
}

export interface SyncToken42 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface ExchangeRate14 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DepartmentRef13 {
  $ref: Ref551[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref551 {
  referencetype: string;
}

export interface IncludeInAnnualTpar3 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface Id76 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Categoryupdaterequest {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties246;
}

export interface Properties246 {
  SyncToken: SyncToken43;
  Name: Name40;
  Level: Level4;
  FullyQualifiedName: FullyQualifiedName8;
  SubItem: SubItem4;
  ParentRef: ParentRef10;
  Active: Active17;
  Type: Type24;
  Id: Id77;
  MetaData: MetaData40;
}

export interface SyncToken43 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Name40 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Level4 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface FullyQualifiedName8 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface SubItem4 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface ParentRef10 {
  type: string;
  description: string;
  $ref: Ref552[];
}

export interface Ref552 {
  referencetype: string;
}

export interface Active17 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Type24 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id77 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface MetaData40 {
  description: string;
  systemDefined: boolean;
  type: string;
  requiredFlag: string;
  $ref: Ref553[];
}

export interface Ref553 {
  modificationmetadata: string;
}

export interface Vendorrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties247;
}

export interface Properties247 {
  DisplayName: DisplayName7;
  Suffix: Suffix5;
  Title: Title5;
  MiddleName: MiddleName5;
  FamilyName: FamilyName6;
  GivenName: GivenName6;
}

export interface DisplayName7 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Suffix5 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Title5 {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface MiddleName5 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface FamilyName6 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface GivenName6 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface Journalreportquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties248;
}

export interface Properties248 {
  journal_code: JournalCode;
  end_date: EndDate22;
  date_macro: DateMacro22;
  sort_by: SortBy10;
  sort_order: SortOrder23;
  start_date: StartDate21;
  columns: Columns19;
}

export interface JournalCode {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate22 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DateMacro22 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortBy10 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder23 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate21 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Columns19 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Salesreceiptrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties249;
}

export interface Properties249 {
  CurrencyRef: CurrencyRef27;
  ProjectRef: ProjectRef17;
  "Line [0..n]": Line0N25;
}

export interface CurrencyRef27 {
  $ref: Ref554[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref554 {
  currencyref: string;
}

export interface ProjectRef17 {
  description: string;
  filterable: boolean;
  requiredFlag: string;
  $ref: Ref555[];
  type: string;
  minorVersion: number;
}

export interface Ref555 {
  referencetype: string;
}

export interface Line0N25 {
  $ref: Ref556[];
  requiredFlag: string;
  description: string;
}

export interface Ref556 {
  salesitemline?: string;
  groupline?: string;
}

export interface Fecreportquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties250;
}

export interface Properties250 {
  attachmentType: AttachmentType;
  withQboIdentifier: WithQboIdentifier;
  start_date: StartDate22;
  end_date: EndDate23;
  add_due_date: AddDueDate;
}

export interface AttachmentType {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface WithQboIdentifier {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface StartDate22 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface EndDate23 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface AddDueDate {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Invoiceresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties251;
}

export interface Properties251 {
  TxnDate: TxnDate22;
  ShipFromAddr: ShipFromAddr4;
  CurrencyRef: CurrencyRef28;
  HomeBalance: HomeBalance6;
  ShipDate: ShipDate5;
  TrackingNum: TrackingNum3;
  ClassRef: ClassRef18;
  PrintStatus: PrintStatus10;
  SalesTermRef: SalesTermRef8;
  DeliveryInfo: DeliveryInfo2;
  TxnSource: TxnSource5;
  "LinkedTxn [0..n]": LinkedTxn0N12;
  DepositToAccountRef: DepositToAccountRef7;
  GlobalTaxCalculation: GlobalTaxCalculation10;
  TotalAmt: TotalAmt15;
  InvoiceLink: InvoiceLink2;
  AllowOnlineACHPayment: AllowOnlineAchpayment2;
  TransactionLocationType: TransactionLocationType13;
  DueDate: DueDate6;
  MetaData: MetaData41;
  DocNumber: DocNumber15;
  PrivateNote: PrivateNote20;
  RecurDataRef: RecurDataRef11;
  "Line [0..n]": Line0N26;
  BillEmailCc: BillEmailCc2;
  CustomerMemo: CustomerMemo7;
  EmailStatus: EmailStatus6;
  ProjectRef: ProjectRef18;
  ExchangeRate: ExchangeRate15;
  TaxExemptionRef: TaxExemptionRef8;
  Deposit: Deposit3;
  Balance: Balance9;
  CustomerRef: CustomerRef17;
  TxnTaxDetail: TxnTaxDetail10;
  AllowOnlineCreditCardPayment: AllowOnlineCreditCardPayment2;
  SyncToken: SyncToken44;
  CustomField: CustomField12;
  ShipAddr: ShipAddr8;
  HomeTotalAmt: HomeTotalAmt9;
  DepartmentRef: DepartmentRef14;
  BillEmailBcc: BillEmailBcc2;
  ShipMethodRef: ShipMethodRef5;
  BillAddr: BillAddr9;
  FreeFormAddress: FreeFormAddress4;
  ApplyTaxAfterDiscount: ApplyTaxAfterDiscount7;
  BillEmail: BillEmail7;
  Id: Id78;
  AllowOnlinePayment: AllowOnlinePayment2;
  AllowIPNPayment: AllowIpnpayment2;
}

export interface TxnDate22 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface ShipFromAddr4 {
  minorVersion: number;
  description: string;
  requiredFlag: string;
  table: Table54;
  type: string;
  $ref: Ref557[];
}

export interface Table54 {
  physical_address: string[];
}

export interface Ref557 {
  physicaladdress: string;
}

export interface CurrencyRef28 {
  $ref: Ref558[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref558 {
  currencyref: string;
}

export interface HomeBalance6 {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
}

export interface ShipDate5 {
  $ref: Ref559[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref559 {
  date: string;
}

export interface TrackingNum3 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ClassRef18 {
  $ref: Ref560[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref560 {
  referencetype: string;
}

export interface PrintStatus10 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface SalesTermRef8 {
  filterable: boolean;
  $ref: Ref561[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref561 {
  referencetype: string;
}

export interface DeliveryInfo2 {
  readOnly: boolean;
  type: string;
  description: string;
  $ref: Ref562[];
}

export interface Ref562 {
  deliveryinfo: string;
}

export interface TxnSource5 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface LinkedTxn0N12 {
  $ref: Ref563[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref563 {
  linkedtxn: string;
}

export interface DepositToAccountRef7 {
  $ref: Ref564[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref564 {
  referencetype: string;
}

export interface GlobalTaxCalculation10 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface TotalAmt15 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface InvoiceLink2 {
  readOnly: boolean;
  description: string;
  type: string;
  minorVersion: number;
  systemDefined: boolean;
}

export interface AllowOnlineAchpayment2 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface TransactionLocationType13 {
  minorVersion: number;
  default: string;
  requiredFlag: string;
  table: Table55;
  type: string;
  locales: string[];
  description: string;
}

export interface Table55 {
  locationtype: string[];
}

export interface DueDate6 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref565[];
}

export interface Ref565 {
  date: string;
}

export interface MetaData41 {
  $ref: Ref566[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref566 {
  modificationmetadata: string;
}

export interface DocNumber15 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface PrivateNote20 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface RecurDataRef11 {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
  $ref: Ref567[];
}

export interface Ref567 {
  referencetype: string;
}

export interface Line0N26 {
  $ref: Ref568[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref568 {
  salesitemline?: string;
  groupline?: string;
  descriptiononlyline?: string;
  discountline?: string;
  subtotalline?: string;
}

export interface BillEmailCc2 {
  $ref: Ref569[];
  type: string;
  description: string;
  minorVersion: number;
  requiredFlag: string;
}

export interface Ref569 {
  emailaddress: string;
}

export interface CustomerMemo7 {
  $ref: Ref570[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref570 {
  memoref: string;
}

export interface EmailStatus6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ProjectRef18 {
  description: string;
  filterable: boolean;
  requiredFlag: string;
  $ref: Ref571[];
  type: string;
  minorVersion: number;
}

export interface Ref571 {
  referencetype: string;
}

export interface ExchangeRate15 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface TaxExemptionRef8 {
  minorVersion: number;
  description: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
  $ref: Ref572[];
}

export interface Ref572 {
  referencetype: string;
}

export interface Deposit3 {
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface Balance9 {
  filterable: boolean;
  type: string;
  readOnly: boolean;
  sortable: boolean;
  description: string;
}

export interface CustomerRef17 {
  filterable: boolean;
  $ref: Ref573[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref573 {
  referencetype: string;
}

export interface TxnTaxDetail10 {
  $ref: Ref574[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref574 {
  txntaxdetail: string;
}

export interface AllowOnlineCreditCardPayment2 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface SyncToken44 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface CustomField12 {
  $ref: Ref575[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref575 {
  customfield: string;
}

export interface ShipAddr8 {
  table: Table56;
  $ref: Ref576[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table56 {
  physical_address: string[];
}

export interface Ref576 {
  physicaladdress: string;
}

export interface HomeTotalAmt9 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface DepartmentRef14 {
  $ref: Ref577[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref577 {
  referencetype: string;
}

export interface BillEmailBcc2 {
  $ref: Ref578[];
  type: string;
  description: string;
  minorVersion: number;
  requiredFlag: string;
}

export interface Ref578 {
  emailaddress: string;
}

export interface ShipMethodRef5 {
  $ref: Ref579[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref579 {
  referencetype: string;
}

export interface BillAddr9 {
  table: Table57;
  $ref: Ref580[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table57 {
  physical_address: string[];
}

export interface Ref580 {
  physicaladdress: string;
}

export interface FreeFormAddress4 {
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface ApplyTaxAfterDiscount7 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface BillEmail7 {
  $ref: Ref581[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref581 {
  emailaddress: string;
}

export interface Id78 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface AllowOnlinePayment2 {
  deprecated: boolean;
  type: string;
  description: string;
}

export interface AllowIpnpayment2 {
  deprecated: boolean;
  type: string;
  description: string;
}

export interface Depositresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties252;
}

export interface Properties252 {
  SyncToken: SyncToken45;
  PrivateNote: PrivateNote21;
  RecurDataRef: RecurDataRef12;
  DepositToAccountRef: DepositToAccountRef8;
  GlobalTaxCalculation: GlobalTaxCalculation11;
  TotalAmt: TotalAmt16;
  ExchangeRate: ExchangeRate16;
  CurrencyRef: CurrencyRef29;
  HomeTotalAmt: HomeTotalAmt10;
  DepartmentRef: DepartmentRef15;
  TxnSource: TxnSource6;
  TxnDate: TxnDate23;
  "Line [0..n]": Line0N27;
  CashBack: CashBack;
  TransactionLocationType: TransactionLocationType14;
  Id: Id79;
  TxnTaxDetail: TxnTaxDetail11;
  MetaData: MetaData42;
}

export interface SyncToken45 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface PrivateNote21 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface RecurDataRef12 {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
  $ref: Ref582[];
}

export interface Ref582 {
  referencetype: string;
}

export interface DepositToAccountRef8 {
  $ref: Ref583[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref583 {
  referencetype: string;
}

export interface GlobalTaxCalculation11 {
  minorVersion: number;
  default: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  description: string;
}

export interface TotalAmt16 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface ExchangeRate16 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface CurrencyRef29 {
  $ref: Ref584[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref584 {
  currencyref: string;
}

export interface HomeTotalAmt10 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface DepartmentRef15 {
  $ref: Ref585[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref585 {
  referencetype: string;
}

export interface TxnSource6 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TxnDate23 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface Line0N27 {
  $ref: Ref586[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref586 {
  linelinkedtxn?: string;
  depositline?: string;
}

export interface CashBack {
  type: string;
  requiredFlag: string;
  $ref: Ref587[];
}

export interface Ref587 {
  cashbackinfo: string;
}

export interface TransactionLocationType14 {
  minorVersion: number;
  default: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  description: string;
}

export interface Id79 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface TxnTaxDetail11 {
  minorVersion: number;
  description: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  $ref: Ref588[];
}

export interface Ref588 {
  txntaxdetail: string;
}

export interface MetaData42 {
  $ref: Ref589[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref589 {
  modificationmetadata: string;
}

export interface Referencetype {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties253;
}

export interface Properties253 {
  name: Name41;
  value: Value6;
}

export interface Name41 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Value6 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Exchangerateresponse {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties254;
}

export interface Properties254 {
  SyncToken: SyncToken46;
  AsOfDate: AsOfDate;
  "CustomField ": CustomField13;
  SourceCurrencyCode: SourceCurrencyCode;
  Rate: Rate;
  TargetCurrencyCode: TargetCurrencyCode;
  MetaData: MetaData43;
}

export interface SyncToken46 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface AsOfDate {
  filterable: boolean;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface CustomField13 {
  $ref: Ref590[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref590 {
  customfield: string;
}

export interface SourceCurrencyCode {
  filterable: boolean;
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Rate {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface TargetCurrencyCode {
  default: string;
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface MetaData43 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref591[];
}

export interface Ref591 {
  modificationmetadata: string;
}

export interface Pcesalesitemline {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties255;
}

export interface Properties255 {
  Description: Description32;
  DetailType: DetailType14;
  SalesItemLineDetail: SalesItemLineDetail2;
  LineNum: LineNum14;
  Amount: Amount32;
  CostAmount: CostAmount;
  HomeCostAmount: HomeCostAmount;
  Id: Id80;
}

export interface Description32 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DetailType14 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SalesItemLineDetail2 {
  type: string;
  requiredFlag: string;
  $ref: Ref592[];
}

export interface Ref592 {
  pcesalesitemlinedetail: string;
}

export interface LineNum14 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Amount32 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CostAmount {
  maxLen: string;
  requiredFlag: string;
  type: string;
  minorVersion: number;
  description: string;
}

export interface HomeCostAmount {
  maxLen: string;
  requiredFlag: string;
  type: string;
  minorVersion: number;
  description: string;
}

export interface Id80 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Purchaseorderresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties256;
}

export interface Properties256 {
  TxnDate: TxnDate24;
  CurrencyRef: CurrencyRef30;
  "CustomField ": CustomField14;
  APAccountRef: ApaccountRef6;
  POEmail: Poemail;
  ClassRef: ClassRef19;
  SalesTermRef: SalesTermRef9;
  "LinkedTxn [0..n]": LinkedTxn0N13;
  GlobalTaxCalculation: GlobalTaxCalculation12;
  TotalAmt: TotalAmt17;
  Memo: Memo5;
  POStatus: Postatus;
  TransactionLocationType: TransactionLocationType15;
  DueDate: DueDate7;
  MetaData: MetaData44;
  DocNumber: DocNumber16;
  PrivateNote: PrivateNote22;
  VendorRef: VendorRef10;
  ShipMethodRef: ShipMethodRef6;
  RecurDataRef: RecurDataRef13;
  "Line [0..n]": Line0N28;
  TxnTaxDetail: TxnTaxDetail12;
  SyncToken: SyncToken47;
  ShipTo: ShipTo;
  ExchangeRate: ExchangeRate17;
  ShipAddr: ShipAddr9;
  VendorAddr: VendorAddr;
  EmailStatus: EmailStatus7;
  Id: Id81;
}

export interface TxnDate24 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface CurrencyRef30 {
  $ref: Ref593[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref593 {
  currencyref: string;
}

export interface CustomField14 {
  $ref: Ref594[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref594 {
  customfield: string;
}

export interface ApaccountRef6 {
  filterable: boolean;
  $ref: Ref595[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref595 {
  referencetype: string;
}

export interface Poemail {
  $ref: Ref596[];
  type: string;
  description: string;
  minorVersion: number;
  requiredFlag: string;
}

export interface Ref596 {
  emailaddress: string;
}

export interface ClassRef19 {
  $ref: Ref597[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref597 {
  referencetype: string;
}

export interface SalesTermRef9 {
  $ref: Ref598[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref598 {
  referencetype: string;
}

export interface LinkedTxn0N13 {
  readOnly: boolean;
  $ref: Ref599[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref599 {
  linkedtxn: string;
}

export interface GlobalTaxCalculation12 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface TotalAmt17 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface Memo5 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Postatus {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TransactionLocationType15 {
  minorVersion: number;
  default: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  description: string;
}

export interface DueDate7 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  type: string;
  $ref: Ref600[];
}

export interface Ref600 {
  date: string;
}

export interface MetaData44 {
  $ref: Ref601[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref601 {
  modificationmetadata: string;
}

export interface DocNumber16 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface PrivateNote22 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface VendorRef10 {
  $ref: Ref602[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref602 {
  referencetype: string;
}

export interface ShipMethodRef6 {
  $ref: Ref603[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref603 {
  referencetype: string;
}

export interface RecurDataRef13 {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
  $ref: Ref604[];
}

export interface Ref604 {
  referencetype: string;
}

export interface Line0N28 {
  $ref: Ref605[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref605 {
  itembasedexpenseline?: string;
  accountbasedexpenseline?: string;
}

export interface TxnTaxDetail12 {
  $ref: Ref606[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref606 {
  txntaxdetail: string;
}

export interface SyncToken47 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface ShipTo {
  $ref: Ref607[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref607 {
  referencetype: string;
}

export interface ExchangeRate17 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface ShipAddr9 {
  table: Table58;
  $ref: Ref608[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table58 {
  physical_address: string[];
}

export interface Ref608 {
  physicaladdress: string;
}

export interface VendorAddr {
  table: Table59;
  $ref: Ref609[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table59 {
  physical_address: string[];
}

export interface Ref609 {
  physicaladdress: string;
}

export interface EmailStatus7 {
  default: string;
  type: string;
  description: string;
  minorVersion: number;
  requiredFlag: string;
}

export interface Id81 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Itembasedexpenseline {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties257;
}

export interface Properties257 {
  "LinkedTxn [0..n]": LinkedTxn0N14;
  Description: Description33;
  ItemBasedExpenseLineDetail: ItemBasedExpenseLineDetail2;
  LineNum: LineNum15;
  Amount: Amount33;
  DetailType: DetailType15;
  Id: Id82;
}

export interface LinkedTxn0N14 {
  description: string;
  requiredFlag: string;
  readOnly: boolean;
  minorVersion: number;
  type: string;
  $ref: Ref610[];
}

export interface Ref610 {
  linkedtxn: string;
}

export interface Description33 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ItemBasedExpenseLineDetail2 {
  type: string;
  requiredFlag: string;
  $ref: Ref611[];
}

export interface Ref611 {
  itembasedexpenselinedetail: string;
}

export interface LineNum15 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Amount33 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DetailType15 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id82 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Vendorbalancedetailquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties258;
}

export interface Properties258 {
  term: Term8;
  end_duedate: EndDuedate7;
  accounting_method: AccountingMethod15;
  date_macro: DateMacro23;
  start_duedate: StartDuedate7;
  duedate_macro: DuedateMacro4;
  sort_by: SortBy11;
  report_date: ReportDate10;
  sort_order: SortOrder24;
  appaid: Appaid5;
  department: Department21;
  vendor: Vendor17;
  columns: Columns20;
}

export interface Term8 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDuedate7 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountingMethod15 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DateMacro23 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDuedate7 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DuedateMacro4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortBy11 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ReportDate10 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder24 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Appaid5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department21 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Vendor17 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Columns20 {
  default: string;
  table: Table60;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table60 {
  columns_apaging: string[];
}

export interface Vendorcreditrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties259;
}

export interface Properties259 {
  CurrencyRef: CurrencyRef31;
  VendorRef: VendorRef11;
  "Line [0..n]": Line0N29;
}

export interface CurrencyRef31 {
  $ref: Ref612[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref612 {
  currencyref: string;
}

export interface VendorRef11 {
  $ref: Ref613[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref613 {
  referencetype: string;
}

export interface Line0N29 {
  $ref: Ref614[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref614 {
  itembasedexpenseline?: string;
  accountbasedexpenseline?: string;
}

export interface Transactionlistbycustomerquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties260;
}

export interface Properties260 {
  date_macro: DateMacro24;
  payment_method: PaymentMethod6;
  duedate_macro: DuedateMacro5;
  arpaid: Arpaid6;
  bothamount: Bothamount3;
  transaction_type: TransactionType4;
  docnum: Docnum4;
  start_moddate: StartModdate4;
  source_account_type: SourceAccountType4;
  group_by: GroupBy5;
  start_date: StartDate23;
  department: Department22;
  start_duedate: StartDuedate8;
  columns: Columns21;
  end_duedate: EndDuedate8;
  end_date: EndDate24;
  memo: Memo6;
  appaid: Appaid6;
  moddate_macro: ModdateMacro5;
  printed: Printed3;
  createdate_macro: CreatedateMacro5;
  cleared: Cleared3;
  customer: Customer20;
  qzurl: Qzurl10;
  term: Term9;
  end_createdate: EndCreatedate3;
  name: Name42;
  sort_by: SortBy12;
  sort_order: SortOrder25;
  start_createdate: StartCreatedate3;
  end_moddate: EndModdate4;
}

export interface DateMacro24 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface PaymentMethod6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DuedateMacro5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Arpaid6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Bothamount3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TransactionType4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Docnum4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartModdate4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SourceAccountType4 {
  default: string;
  table: Table61;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table61 {
  account_types: string[];
}

export interface GroupBy5 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate23 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Department22 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDuedate8 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Columns21 {
  default: string;
  table: Table62;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Table62 {
  columns_tax: string[];
}

export interface EndDuedate8 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate24 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Memo6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Appaid6 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ModdateMacro5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Printed3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface CreatedateMacro5 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Cleared3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Customer20 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Qzurl10 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Term9 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndCreatedate3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Name42 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface SortBy12 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder25 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartCreatedate3 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndModdate4 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Balancesheetreportrows {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties261;
}

export interface Properties261 {
  "Row [0..n]": Row0N6;
}

export interface Row0N6 {
  table: Table63;
  description: string;
  $ref: Ref615[];
}

export interface Table63 {
  group_balancesheet: string[];
}

export interface Ref615 {
  reportrow: string;
}

export interface Classsalesquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties262;
}

export interface Properties262 {
  customer: Customer21;
  accounting_method: AccountingMethod16;
  end_date: EndDate25;
  date_macro: DateMacro25;
  class: Class13;
  item: Item10;
  summarize_column_by: SummarizeColumnBy15;
  department: Department23;
  start_date: StartDate24;
}

export interface Customer21 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountingMethod16 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate25 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DateMacro25 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Class13 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Item10 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SummarizeColumnBy15 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department23 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate24 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Paymentmethodresponse {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties263;
}

export interface Properties263 {
  SyncToken: SyncToken48;
  Name: Name43;
  Active: Active18;
  Type: Type25;
  Id: Id83;
  MetaData: MetaData45;
}

export interface SyncToken48 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface Name43 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Active18 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface Type25 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id83 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface MetaData45 {
  $ref: Ref616[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref616 {
  modificationmetadata: string;
}

export interface Paymentlinedetail {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties264;
}

export interface Properties264 {
  ClassRef: ClassRef20;
  Discount: Discount;
  Balance: Balance10;
  ItemRef: ItemRef10;
}

export interface ClassRef20 {
  $ref: Ref617[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref617 {
  referencetype: string;
}

export interface Discount {
  $ref: Ref618[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref618 {
  discountoverride: string;
}

export interface Balance10 {
  readOnly: boolean;
  type: string;
  description: string;
}

export interface ItemRef10 {
  $ref: Ref619[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref619 {
  referencetype: string;
}

export interface Invoicerequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties265;
}

export interface Properties265 {
  ProjectRef: ProjectRef19;
  CurrencyRef: CurrencyRef32;
  CustomerRef: CustomerRef18;
  "Line [0..n]": Line0N30;
}

export interface ProjectRef19 {
  description: string;
  filterable: boolean;
  requiredFlag: string;
  $ref: Ref620[];
  type: string;
  minorVersion: number;
}

export interface Ref620 {
  referencetype: string;
}

export interface CurrencyRef32 {
  $ref: Ref621[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref621 {
  currencyref: string;
}

export interface CustomerRef18 {
  filterable: boolean;
  $ref: Ref622[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref622 {
  referencetype: string;
}

export interface Line0N30 {
  $ref: Ref623[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref623 {
  salesitemline?: string;
  groupline?: string;
  descriptiononlyline?: string;
}

export interface Telephonenumber30 {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties266;
}

export interface Properties266 {
  FreeFormNumber: FreeFormNumber2;
}

export interface FreeFormNumber2 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Cashflowtoplevel {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties267;
}

export interface Properties267 {
  Header: Header9;
  Rows: Rows9;
  Columns: Columns22;
}

export interface Header9 {
  description: string;
  $ref: Ref624[];
}

export interface Ref624 {
  reportheader: string;
}

export interface Rows9 {
  description: string;
  $ref: Ref625[];
}

export interface Ref625 {
  cashflowreportrows: string;
}

export interface Columns22 {
  description: string;
  $ref: Ref626[];
}

export interface Ref626 {
  reportcolumns: string;
}

export interface Customertyperef {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties268;
}

export interface Properties268 {
  value: Value7;
}

export interface Value7 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Productandservicesprefs {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties269;
}

export interface Properties269 {
  RevenueRecognitionEnabled: RevenueRecognitionEnabled;
  RecognitionFrequencyType: RecognitionFrequencyType;
  ForSales: ForSales;
  QuantityOnHand: QuantityOnHand;
  QuantityWithPriceAndRate: QuantityWithPriceAndRate;
  ForPurchase: ForPurchase;
}

export interface RevenueRecognitionEnabled {
  default: string;
  type: string;
  minorVersion: number;
  description: string;
}

export interface RecognitionFrequencyType {
  type: string;
  minorVersion: number;
  description: string;
}

export interface ForSales {
  default: string;
  type: string;
  description: string;
}

export interface QuantityOnHand {
  default: string;
  type: string;
  description: string;
}

export interface QuantityWithPriceAndRate {
  default: string;
  type: string;
  description: string;
}

export interface ForPurchase {
  default: string;
  type: string;
  description: string;
}

export interface Recurringtransactionrequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties270;
}

export interface Properties270 {
  RecurringInfo: RecurringInfo2;
}

export interface RecurringInfo2 {
  $ref: Ref627[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref627 {
  recurringinfo: string;
}

export interface Taxsummaryquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties271;
}

export interface Properties271 {
  accounting_method: AccountingMethod17;
  end_date: EndDate26;
  date_macro: DateMacro26;
  agency_id: AgencyId;
  sort_order: SortOrder26;
  start_date: StartDate25;
}

export interface AccountingMethod17 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate26 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DateMacro26 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AgencyId {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder26 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate25 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Taxclassification {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties272;
}

export interface Properties272 {
  ApplicableTo: ApplicableTo;
  Code: Code3;
  Name: Name44;
  Level: Level5;
  ParentRef: ParentRef11;
  Description: Description34;
}

export interface ApplicableTo {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Code3 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Name44 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Level5 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface ParentRef11 {
  $ref: Ref628[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref628 {
  referencetype: string;
}

export interface Description34 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Taxline {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties273;
}

export interface Properties273 {
  DetailType: DetailType16;
  Amount: Amount34;
  TaxLineDetail: TaxLineDetail;
}

export interface DetailType16 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Amount34 {
  maxLen: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface TaxLineDetail {
  $ref: Ref629[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref629 {
  taxlinedetail: string;
}

export interface Agedpayablesreportrows {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties274;
}

export interface Properties274 {
  "Row [0..n]": Row0N7;
}

export interface Row0N7 {
  table: Table64;
  description: string;
  $ref: Ref630[];
}

export interface Table64 {
  group_agedpayablessheet: string[];
}

export interface Ref630 {
  reportrow: string;
}

export interface Date2 {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties275;
}

export interface Properties275 {
  date: Date3;
}

export interface Date3 {
  type: string;
  description: string;
}

export interface Descriptiononlyline {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties276;
}

export interface Properties276 {
  Description: Description35;
  DetailType: DetailType17;
  LineNum: LineNum16;
  Amount: Amount35;
  DescriptionLineDetail: DescriptionLineDetail;
  Id: Id84;
}

export interface Description35 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DetailType17 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface LineNum16 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Amount35 {
  readOnly: boolean;
  type: string;
  minorVersion: number;
  description: string;
}

export interface DescriptionLineDetail {
  type: string;
  requiredFlag: string;
  $ref: Ref631[];
}

export interface Ref631 {
  descriptiononly: string;
}

export interface Id84 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface JournalreportqueryUs {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties277;
}

export interface Properties277 {
  end_date: EndDate27;
  date_macro: DateMacro27;
  sort_by: SortBy13;
  sort_order: SortOrder27;
  start_date: StartDate26;
  columns: Columns23;
}

export interface EndDate27 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DateMacro27 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortBy13 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder27 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate26 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Columns23 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Salesreceiptresponse {
  name: string;
  ShowFirst: string[];
  Default: string[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: string[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties278;
}

export interface Properties278 {
  TxnDate: TxnDate25;
  ShipFromAddr: ShipFromAddr5;
  CurrencyRef: CurrencyRef33;
  "CustomField ": CustomField15;
  HomeBalance: HomeBalance7;
  ShipDate: ShipDate6;
  TrackingNum: TrackingNum4;
  ClassRef: ClassRef21;
  PrintStatus: PrintStatus11;
  PaymentRefNum: PaymentRefNum3;
  DeliveryInfo: DeliveryInfo3;
  TxnSource: TxnSource7;
  "LinkedTxn [0..n]": LinkedTxn0N15;
  RecurDataRef: RecurDataRef14;
  GlobalTaxCalculation: GlobalTaxCalculation13;
  TotalAmt: TotalAmt18;
  TransactionLocationType: TransactionLocationType16;
  ApplyTaxAfterDiscount: ApplyTaxAfterDiscount8;
  DocNumber: DocNumber17;
  PrivateNote: PrivateNote23;
  DepositToAccountRef: DepositToAccountRef9;
  "Line [0..n]": Line0N31;
  CustomerMemo: CustomerMemo8;
  EmailStatus: EmailStatus8;
  ProjectRef: ProjectRef20;
  CreditCardPayment: CreditCardPayment5;
  Balance: Balance11;
  CustomerRef: CustomerRef19;
  TxnTaxDetail: TxnTaxDetail13;
  SyncToken: SyncToken49;
  PaymentMethodRef: PaymentMethodRef7;
  ExchangeRate: ExchangeRate18;
  ShipAddr: ShipAddr10;
  HomeTotalAmt: HomeTotalAmt11;
  DepartmentRef: DepartmentRef16;
  ShipMethodRef: ShipMethodRef7;
  BillAddr: BillAddr10;
  FreeFormAddress: FreeFormAddress5;
  MetaData: MetaData46;
  BillEmail: BillEmail8;
  Id: Id85;
}

export interface TxnDate25 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  default: string;
  type: string;
}

export interface ShipFromAddr5 {
  minorVersion: number;
  description: string;
  requiredFlag: string;
  table: Table65;
  type: string;
  $ref: Ref632[];
}

export interface Table65 {
  physical_address: string[];
}

export interface Ref632 {
  physicaladdress: string;
}

export interface CurrencyRef33 {
  $ref: Ref633[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref633 {
  currencyref: string;
}

export interface CustomField15 {
  $ref: Ref634[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref634 {
  customfield: string;
}

export interface HomeBalance7 {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
}

export interface ShipDate6 {
  $ref: Ref635[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref635 {
  date: string;
}

export interface TrackingNum4 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ClassRef21 {
  $ref: Ref636[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref636 {
  referencetype: string;
}

export interface PrintStatus11 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface PaymentRefNum3 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DeliveryInfo3 {
  readOnly: boolean;
  type: string;
  description: string;
  $ref: Ref637[];
}

export interface Ref637 {
  deliveryinfo: string;
}

export interface TxnSource7 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface LinkedTxn0N15 {
  $ref: Ref638[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref638 {
  linkedtxn: string;
}

export interface RecurDataRef14 {
  readOnly: boolean;
  type: string;
  description: string;
  minorVersion: number;
  $ref: Ref639[];
}

export interface Ref639 {
  referencetype: string;
}

export interface GlobalTaxCalculation13 {
  default: string;
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface TotalAmt18 {
  filterable: boolean;
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface TransactionLocationType16 {
  minorVersion: number;
  default: string;
  requiredFlag: string;
  type: string;
  locales: string[];
  description: string;
}

export interface ApplyTaxAfterDiscount8 {
  type: string;
  description: string;
  locales: string[];
  requiredFlag: string;
}

export interface DocNumber17 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  maxLen: string;
  type: string;
}

export interface PrivateNote23 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DepositToAccountRef9 {
  $ref: Ref640[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref640 {
  referencetype: string;
}

export interface Line0N31 {
  $ref: Ref641[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref641 {
  salesitemline?: string;
  groupline?: string;
  descriptiononlyline?: string;
  discountline?: string;
  subtotalline?: string;
}

export interface CustomerMemo8 {
  $ref: Ref642[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref642 {
  memoref: string;
}

export interface EmailStatus8 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface ProjectRef20 {
  description: string;
  filterable: boolean;
  requiredFlag: string;
  $ref: Ref643[];
  type: string;
  minorVersion: number;
}

export interface Ref643 {
  referencetype: string;
}

export interface CreditCardPayment5 {
  $ref: Ref644[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref644 {
  creditcardpayment: string;
}

export interface Balance11 {
  filterable: boolean;
  type: string;
  readOnly: boolean;
  sortable: boolean;
  description: string;
}

export interface CustomerRef19 {
  filterable: boolean;
  $ref: Ref645[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref645 {
  referencetype: string;
}

export interface TxnTaxDetail13 {
  $ref: Ref646[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref646 {
  txntaxdetail: string;
}

export interface SyncToken49 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface PaymentMethodRef7 {
  $ref: Ref647[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref647 {
  referencetype: string;
}

export interface ExchangeRate18 {
  default: string;
  type: string;
  requiredFlag: string;
  description: string;
}

export interface ShipAddr10 {
  table: Table66;
  $ref: Ref648[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table66 {
  physical_address: string[];
}

export interface Ref648 {
  physicaladdress: string;
}

export interface HomeTotalAmt11 {
  readOnly: boolean;
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface DepartmentRef16 {
  $ref: Ref649[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref649 {
  referencetype: string;
}

export interface ShipMethodRef7 {
  $ref: Ref650[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref650 {
  referencetype: string;
}

export interface BillAddr10 {
  table: Table67;
  $ref: Ref651[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Table67 {
  physical_address: string[];
}

export interface Ref651 {
  physicaladdress: string;
}

export interface FreeFormAddress5 {
  type: string;
  description: string;
  systemDefined: boolean;
}

export interface MetaData46 {
  $ref: Ref652[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref652 {
  modificationmetadata: string;
}

export interface BillEmail8 {
  description: string;
  type: string;
  requiredFlag: string;
  $ref: Ref653[];
}

export interface Ref653 {
  emailaddress: string;
}

export interface Id85 {
  sortable: boolean;
  description: string;
  filterable: boolean;
  requiredFlag: string;
  systemDefined: boolean;
  readOnly: boolean;
  type: string;
}

export interface Customersalesquery {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties279;
}

export interface Properties279 {
  customer: Customer22;
  qzurl: Qzurl11;
  accounting_method: AccountingMethod18;
  end_date: EndDate28;
  date_macro: DateMacro28;
  class: Class14;
  item: Item11;
  sort_order: SortOrder28;
  summarize_column_by: SummarizeColumnBy16;
  department: Department24;
  start_date: StartDate27;
}

export interface Customer22 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Qzurl11 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface AccountingMethod18 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface EndDate28 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface DateMacro28 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Class14 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Item11 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SortOrder28 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface SummarizeColumnBy16 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Department24 {
  default: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface StartDate27 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Emailmessagesprefs {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties280;
}

export interface Properties280 {
  InvoiceMessage: InvoiceMessage;
  EstimateMessage: EstimateMessage2;
  SalesReceiptMessage: SalesReceiptMessage;
  StatementMessage: StatementMessage;
}

export interface InvoiceMessage {
  type: string;
  description: string;
  $ref: Ref654[];
}

export interface Ref654 {
  emailmessagetype: string;
}

export interface EstimateMessage2 {
  type: string;
  description: string;
  $ref: Ref655[];
}

export interface Ref655 {
  emailmessagetype: string;
}

export interface SalesReceiptMessage {
  type: string;
  description: string;
  $ref: Ref656[];
}

export interface Ref656 {
  emailmessagetype: string;
}

export interface StatementMessage {
  type: string;
  description: string;
  $ref: Ref657[];
}

export interface Ref657 {
  emailmessagetype: string;
}

export interface Linkedtxn {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties281;
}

export interface Properties281 {
  TxnLineId: TxnLineId2;
  TxnId: TxnId2;
  TxnType: TxnType3;
}

export interface TxnLineId2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TxnId2 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TxnType3 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Estimaterequest {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: any[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: string[];
  type: string;
  properties: Properties282;
}

export interface Properties282 {
  ProjectRef: ProjectRef21;
  Line: Line7;
  CustomerRef: CustomerRef20;
  CurrencyRef: CurrencyRef34;
}

export interface ProjectRef21 {
  description: string;
  filterable: boolean;
  requiredFlag: string;
  $ref: Ref658[];
  type: string;
  minorVersion: number;
}

export interface Ref658 {
  referencetype: string;
}

export interface Line7 {
  $ref: Ref659[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref659 {
  salesitemline?: string;
  groupline?: string;
}

export interface CustomerRef20 {
  filterable: boolean;
  $ref: Ref660[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref660 {
  referencetype: string;
}

export interface CurrencyRef34 {
  $ref: Ref661[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref661 {
  currencyref: string;
}

export interface Reporttoplevel {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties283;
}

export interface Properties283 {
  Header: Header10;
  Rows: Rows10;
  Columns: Columns24;
}

export interface Header10 {
  description: string;
  $ref: Ref662[];
}

export interface Ref662 {
  reportheader: string;
}

export interface Rows10 {
  description: string;
  $ref: Ref663[];
}

export interface Ref663 {
  reportrows: string;
}

export interface Columns24 {
  description: string;
  $ref: Ref664[];
}

export interface Ref664 {
  reportcolumns: string;
}

export interface Accountbasedexpenselinebill {
  name: string;
  ShowFirst: string[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties284;
}

export interface Properties284 {
  "LinkedTxn [0..n]": LinkedTxn0N16;
  Description: Description36;
  DetailType: DetailType18;
  LineNum: LineNum17;
  Amount: Amount36;
  Id: Id86;
  AccountBasedExpenseLineDetail: AccountBasedExpenseLineDetail2;
}

export interface LinkedTxn0N16 {
  readOnly: boolean;
  $ref: Ref665[];
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Ref665 {
  linkedtxnbill: string;
}

export interface Description36 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface DetailType18 {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface LineNum17 {
  type: string;
  requiredFlag: string;
  description: string;
}

export interface Amount36 {
  maxLen: string;
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Id86 {
  readOnly: boolean;
  description: string;
  type: string;
  requiredFlag: string;
  systemDefined: boolean;
}

export interface AccountBasedExpenseLineDetail2 {
  $ref: Ref666[];
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Ref666 {
  accountbasedexpenselinedetail: string;
}

export interface Entitlementsresponse {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties285;
}

export interface Properties285 {
  PlanName: PlanName;
  "Entitlement [0..n]": Entitlement0N;
  SupportedLanguages: SupportedLanguages2;
  Entitlement: Entitlement;
  CompanyStartDate: CompanyStartDate2;
  EmployerId: EmployerId2;
  QboCompany: QboCompany;
  Email: Email2;
  WebAddr: WebAddr4;
  FiscalYearStartMonth: FiscalYearStartMonth2;
  "Thresholds [0..n]": Thresholds0N;
  DaysRemainingTrial: DaysRemainingTrial;
  MaxUsers: MaxUsers;
  CurrentUsers: CurrentUsers;
}

export interface PlanName {
  type: string;
  description: string;
}

export interface Entitlement0N {
  description: string;
}

export interface SupportedLanguages2 {
  type: string;
  description: string;
}

export interface Entitlement {
  maxLen: string;
  type: string;
  description: string;
  $ref: Ref667[];
}

export interface Ref667 {
  telephonenumber: string;
}

export interface CompanyStartDate2 {
  type: string;
  description: string;
  $ref: Ref668[];
}

export interface Ref668 {
  datetime: string;
}

export interface EmployerId2 {
  type: string;
  description: string;
}

export interface QboCompany {
  type: string;
  description: string;
}

export interface Email2 {
  maxLen: string;
  type: string;
  description: string;
  $ref: Ref669[];
}

export interface Ref669 {
  emailaddress: string;
}

export interface WebAddr4 {
  type: string;
  description: string;
  $ref: Ref670[];
}

export interface Ref670 {
  websiteaddress: string;
}

export interface FiscalYearStartMonth2 {
  type: string;
  description: string;
}

export interface Thresholds0N {
  $ref: Ref671[];
  type: string;
  description: string;
  minorVersion: number;
}

export interface Ref671 {
  threshold: string;
}

export interface DaysRemainingTrial {
  type: string;
  description: string;
}

export interface MaxUsers {
  type: string;
  description: string;
}

export interface CurrentUsers {
  type: string;
  description: string;
}

export interface Taxratedetail {
  name: string;
  ShowFirst: any[];
  Default: any[];
  Optional: string[];
  Required: string[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties286;
}

export interface Properties286 {
  TaxTypeApplicable: TaxTypeApplicable;
  TaxRateRef: TaxRateRef3;
  TaxOrder: TaxOrder;
}

export interface TaxTypeApplicable {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface TaxRateRef3 {
  $ref: Ref672[];
  requiredFlag: string;
  description: string;
}

export interface Ref672 {
  referencetype: string;
}

export interface TaxOrder {
  type: string;
  description: string;
  requiredFlag: string;
}

export interface Reportcolumn {
  name: string;
  ShowFirst: any[];
  Default: string[];
  Optional: any[];
  Required: any[];
  RequiredForUpdate: any[];
  ConditionallyRequired: any[];
  type: string;
  properties: Properties287;
}

export interface Properties287 {
  ColType: ColType;
  ColTitle: ColTitle;
}

export interface ColType {
  type: string;
  description: string;
}

export interface ColTitle {
  type: string;
  description: string;
}

export interface Codes {
  qbpayments: Qbpayments2;
  qbo: Qbo2;
}

export interface Qbpayments2 {
  Charges: Charges;
  Paymentreceipt: Paymentreceipt2;
  Tokens: Tokens;
  Echecks: Echecks;
  Cards: Cards;
  Bankaccounts: Bankaccounts;
}

export interface Charges {
  "Create1-response": string;
  "Create1-request": string;
  "List0-response": string;
  "VoidTransaction0-response": string;
  "RefundsById0-response": string;
  "Read0-response": string;
  "Create0-response": string;
  "Create2-request": string;
  "Create2-response": string;
  "captureCharge0-request": string;
  "refundCharge0-request": string;
  "refundCharge0-response": string;
  "captureCharge0-response": string;
  "Create0-request": string;
}

export interface Paymentreceipt2 {
  "Get0-response": string;
}

export interface Tokens {
  "Create0-response": string;
  "Create1-response": string;
  "Create0-request": string;
  "Create1-request": string;
}

export interface Echecks {
  "Debit0-request": string;
  "Retrieve1-response": string;
  "Debit1-response": string;
  "Debit2-request": string;
  "RefundsById0-response": string;
  "voidOrRefund0-response": string;
  "Debit1-request": string;
  "Retrieve0-response": string;
  "voidOrRefund0-request": string;
  "Debit0-response": string;
  "Debit2-response": string;
}

export interface Cards {
  "Delete0-request": string;
  "Delete0-response": string;
  "createCardFromToken0-request": string;
  "Get0-request": string;
  "List0-response": string;
  "createCard0-response": string;
  "createCard0-request": string;
  "createCardFromToken0-response": string;
  "Get0-response": string;
}

export interface Bankaccounts {
  "Delete0-request": string;
  "Delete0-response": string;
  "createBankAccount0-request": string;
  "List0-response": string;
  "createBankAccount1-response": string;
  "createBankAccountFromToken0-request": string;
  "getBankAccount0-response": string;
  "getBankAccount0-request": string;
  "createBankAccount0-response": string;
  "createBankAccountFromToken0-response": string;
  "createBankAccount1-request": string;
}

export interface Qbo2 {
  Aragingdetail: Aragingdetail;
  Invoice: Invoice;
  Purchase: Purchase;
  Exchangerate: Exchangerate;
  Recurringtransaction: Recurringtransaction;
  Creditmemo: Creditmemo2;
  Taxrate: Taxrate;
  Entitlements: Entitlements;
  Employee: Employee5;
  Transactionlistbyvendor: Transactionlistbyvendor;
  Customerincome: Customerincome;
  Department: Department25;
  Customerbalance: Customerbalance;
  Salesbycustomer: Salesbycustomer;
  Preferences: Preferences;
  Balancesheet: Balancesheet;
  Reimbursecharge: Reimbursecharge;
  Vendor: Vendor18;
  Billpayment: Billpayment;
  Journalcode: Journalcode;
  Vendorbalancedetail: Vendorbalancedetail;
  Taxagency: Taxagency;
  Transactionlistwithsplits: Transactionlistwithsplits;
  Generalledger: Generalledger;
  Purchaseorder: Purchaseorder;
  Accountlistdetail: Accountlistdetail;
  Transfer: Transfer;
  Term: Term10;
  Profitandloss: Profitandloss;
  Customerbalancedetail: Customerbalancedetail;
  Paymentmethod: Paymentmethod;
  Class: Class15;
  Transactionlist: Transactionlist;
  Customer: Customer23;
  Apagingsummary: Apagingsummary;
  Account: Account4;
  Taxcode: Taxcode;
  Cashflow: Cashflow;
  Changedatacapture: Changedatacapture;
  Taxpayment: Taxpayment;
  Vendorexpenses: Vendorexpenses;
  Bill: Bill;
  Batch: Batch;
  Budget: Budget;
  Generalledgerfr: Generalledgerfr;
  Item: Item12;
  Refundreceipt: Refundreceipt;
  Timeactivity: Timeactivity;
  Deposit: Deposit4;
  Journalentry: Journalentry;
  Creditcardpayment: Creditcardpayment2;
  Salesbyproduct: Salesbyproduct;
  Companycurrency: Companycurrency;
  Profitandlossdetail: Profitandlossdetail;
  Companyinfo: Companyinfo;
  Inventoryvaluationsummary: Inventoryvaluationsummary;
  Vendorcredit: Vendorcredit;
  Salesbyclasssummary: Salesbyclasssummary;
  Taxclassification: Taxclassification2;
  Estimate: Estimate;
  Vendorbalance: Vendorbalance;
  Inventoryvaluationdetail: Inventoryvaluationdetail;
  Trialbalance: Trialbalance;
  Journalreportfr: Journalreportfr;
  Apagingdetail: Apagingdetail;
  Salesbydepartment: Salesbydepartment;
  Taxservice: Taxservice;
  Payment: Payment;
  Taxsummary: Taxsummary;
  Fecreport: Fecreport;
  Transactionlistbycustomer: Transactionlistbycustomer;
  zztemplate: Zztemplate;
  Inventoryadjustment: Inventoryadjustment;
  Salesreceipt: Salesreceipt;
  Customertype: Customertype;
  Attachable: Attachable;
  Journalreport: Journalreport;
  Aragingsummary: Aragingsummary;
}

export interface Aragingdetail {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Invoice {
  "Delete0-request": string;
  "Send0-response-xml": string;
  "Query0-request-xml": string;
  "Read0-response": string;
  "Update1-response-xml": string;
  "Update1-request-xml": string;
  "Update0-response": string;
  "Create0-response": string;
  "Update1-request": string;
  "Create0-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Void0-response": string;
  "Query0-request": string;
  "PDF0-response-xml": string;
  "Read0-response-xml": string;
  "Update0-request-xml": string;
  "Void0-request-xml": string;
  "Void0-response-xml": string;
  "Delete0-response": string;
  "PDF0-response": string;
  "Void0-request": string;
  "Delete0-request-xml": string;
  "Update0-request": string;
  "Send0-response": string;
  "Update0-response-xml": string;
  "Create0-request-xml": string;
  "Update1-response": string;
  "Query0-response": string;
}

export interface Purchase {
  "Delete0-request": string;
  "Query0-request-xml": string;
  "Read0-response": string;
  "Create2-request": string;
  "Create2-response": string;
  "Update0-response": string;
  "Create0-response": string;
  "Create1-request": string;
  "Create0-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request": string;
  "Read0-response-xml": string;
  "Create2-request-xml": string;
  "Update0-request-xml": string;
  "Create1-response-xml": string;
  "Delete0-response": string;
  "Create1-response": string;
  "Create2-response-xml": string;
  "Delete0-request-xml": string;
  "Update0-request": string;
  "Create1-request-xml": string;
  "Update0-response-xml": string;
  "Create0-request-xml": string;
  "Query0-response": string;
}

export interface Exchangerate {
  "Update0-response": string;
  "Query1-response-xml": string;
  "Query0-request": string;
  "Update0-response-xml": string;
  "Query1-response": string;
  "Update0-request-xml": string;
  "Update0-request": string;
  "Query1-request": string;
  "Query0-response": string;
  "Query0-request-xml": string;
  "Query0-response-xml": string;
}

export interface Recurringtransaction {
  "Delete0-request": string;
  "Delete0-response": string;
  "Create0-request-xml": string;
  "Delete0-request-xml": string;
  "Create0-response-xml": string;
  "Query0-request": string;
  "Read0-response": string;
  "Create0-response": string;
  "Read0-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request-xml": string;
  "Query0-response": string;
}

export interface Creditmemo2 {
  "Delete0-request": string;
  "Delete0-response": string;
  "Create0-request-xml": string;
  "Send0-response-xml": string;
  "Delete0-request-xml": string;
  "Create0-response-xml": string;
  "Query0-request": string;
  "Update0-response": string;
  "Update0-request-xml": string;
  "Read0-response": string;
  "Create0-response": string;
  "Update0-request": string;
  "Send0-response": string;
  "Read0-response-xml": string;
  "Update0-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request-xml": string;
  "Query0-response": string;
}

export interface Taxrate {
  "Query0-request": string;
  "Read0-response-xml": string;
  "Read0-response": string;
  "Query0-response": string;
  "Query0-request-xml": string;
  "Query0-response-xml": string;
}

export interface Entitlements {
  "Read0-response-xml": string;
  "Read0-response": string;
}

export interface Employee5 {
  "Create0-request-xml": string;
  "Query0-response-xml": string;
  "Create0-response-xml": string;
  "Query0-request": string;
  "Update0-response": string;
  "Update0-request-xml": string;
  "Read0-response": string;
  "Create0-response": string;
  "Update0-request": string;
  "Read0-response-xml": string;
  "Update0-response-xml": string;
  "Create0-request": string;
  "Query0-request-xml": string;
  "Query0-response": string;
}

export interface Transactionlistbyvendor {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Customerincome {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Department25 {
  "Create0-request-xml": string;
  "Query0-response-xml": string;
  "Create0-response-xml": string;
  "Query0-request": string;
  "Update0-response": string;
  "Update0-request-xml": string;
  "Read0-response": string;
  "Create0-response": string;
  "Update0-request": string;
  "Read0-response-xml": string;
  "Update0-response-xml": string;
  "Create0-request": string;
  "Query0-request-xml": string;
  "Query0-response": string;
}

export interface Customerbalance {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Salesbycustomer {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Preferences {
  "Query0-request": string;
  "Update0-response": string;
  "Update0-request-xml": string;
  "Read0-response-xml": string;
  "Update0-request": string;
  "Read0-response": string;
  "Update0-response-xml": string;
  "Query0-response": string;
  "Query0-request-xml": string;
  "Query0-response-xml": string;
}

export interface Balancesheet {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Reimbursecharge {
  "Query0-request": string;
  "Read0-response-xml": string;
  "Read0-response": string;
  "Query0-response": string;
  "Query0-request-xml": string;
  "Query0-response-xml": string;
}

export interface Vendor18 {
  "Create0-request-xml": string;
  "Query0-response-xml": string;
  "Create0-response-xml": string;
  "Query0-request": string;
  "Update0-response": string;
  "Update0-request-xml": string;
  "Read0-response": string;
  "Create0-response": string;
  "Update0-request": string;
  "Read0-response-xml": string;
  "Update0-response-xml": string;
  "Create0-request": string;
  "Query0-request-xml": string;
  "Query0-response": string;
}

export interface Billpayment {
  "Delete0-request": string;
  "Query0-request-xml": string;
  "Read0-response": string;
  "Update0-response": string;
  "Create0-response": string;
  "Create0-response-xml": string;
  "Update2-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request": string;
  "Read0-response-xml": string;
  "Update0-request-xml": string;
  "Update2-request-xml": string;
  "Delete0-response": string;
  "Delete0-request-xml": string;
  "Update0-request": string;
  "Update0-response-xml": string;
  "Update2-request": string;
  "Update2-response": string;
  "Create0-request-xml": string;
  "Query0-response": string;
}

export interface Journalcode {
  "Create0-request-xml": string;
  "Query0-response-xml": string;
  "Create0-response-xml": string;
  "Query0-request": string;
  "Update0-response": string;
  "Update0-request-xml": string;
  "Read0-response": string;
  "Create0-response": string;
  "Update0-request": string;
  "Read0-response-xml": string;
  "Update0-response-xml": string;
  "Create0-request": string;
  "Query0-request-xml": string;
  "Query0-response": string;
}

export interface Vendorbalancedetail {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Taxagency {
  "Create0-request-xml": string;
  "Query0-request": string;
  "Read0-response": string;
  "Create0-response": string;
  "Create0-request": string;
  "Query0-response": string;
}

export interface Transactionlistwithsplits {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Generalledger {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Purchaseorder {
  "Delete0-request": string;
  "Delete0-response": string;
  "Create0-request-xml": string;
  "Send0-response-xml": string;
  "Delete0-request-xml": string;
  "Create0-response-xml": string;
  "Query0-request": string;
  "Update0-response": string;
  "Update0-request-xml": string;
  "Read0-response": string;
  "Create0-response": string;
  "Update0-request": string;
  "Send0-response": string;
  "Read0-response-xml": string;
  "Update0-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request-xml": string;
  "Query0-response": string;
}

export interface Accountlistdetail {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Transfer {
  "Delete0-request": string;
  "Query0-request-xml": string;
  "Read0-response": string;
  "Update1-response-xml": string;
  "Update1-request-xml": string;
  "Update0-response": string;
  "Create0-response": string;
  "Update1-request": string;
  "Create0-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request": string;
  "Read0-response-xml": string;
  "Update0-request-xml": string;
  "Delete0-response": string;
  "Delete0-request-xml": string;
  "Update0-request": string;
  "Update0-response-xml": string;
  "Create0-request-xml": string;
  "Update1-response": string;
  "Query0-response": string;
}

export interface Term10 {
  "Create0-request-xml": string;
  "Query0-response-xml": string;
  "Create0-response-xml": string;
  "Query0-request": string;
  "Update0-response": string;
  "Update0-request-xml": string;
  "Read0-response": string;
  "Create0-response": string;
  "Update0-request": string;
  "Read0-response-xml": string;
  "Update0-response-xml": string;
  "Create0-request": string;
  "Query0-request-xml": string;
  "Query0-response": string;
}

export interface Profitandloss {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Customerbalancedetail {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Paymentmethod {
  "Create0-request-xml": string;
  "Query0-response-xml": string;
  "Create0-response-xml": string;
  "Query0-request": string;
  "Update0-response": string;
  "Update0-request-xml": string;
  "Read0-response": string;
  "Create0-response": string;
  "Update0-request": string;
  "Read0-response-xml": string;
  "Update0-response-xml": string;
  "Create0-request": string;
  "Query0-request-xml": string;
  "Query0-response": string;
}

export interface Class15 {
  "Create0-request-xml": string;
  "Query0-response-xml": string;
  "Create0-response-xml": string;
  "Query0-request": string;
  "Update0-response": string;
  "Update0-request-xml": string;
  "Read0-response": string;
  "Create0-response": string;
  "Update0-request": string;
  "Read0-response-xml": string;
  "Update0-response-xml": string;
  "Create0-request": string;
  "Query0-request-xml": string;
  "Query0-response": string;
}

export interface Transactionlist {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Customer23 {
  "Query0-request-xml": string;
  "Read0-response": string;
  "Update1-response-xml": string;
  "Update1-request-xml": string;
  "Update0-response": string;
  "Create1-request": string;
  "Update1-request": string;
  "Create0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request": string;
  "Read0-response-xml": string;
  "Update0-request-xml": string;
  "Create1-response-xml": string;
  "Create1-response": string;
  "Create0-response": string;
  "Update0-request": string;
  "Create1-request-xml": string;
  "Update0-response-xml": string;
  "Create0-request-xml": string;
  "Update1-response": string;
  "Query0-response": string;
}

export interface Apagingsummary {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Account4 {
  "Create0-request-xml": string;
  "Query0-response-xml": string;
  "Create0-response-xml": string;
  "Query0-request": string;
  "Update0-response": string;
  "Update0-request-xml": string;
  "Read0-response": string;
  "Create0-response": string;
  "Update0-request": string;
  "Read0-response-xml": string;
  "Update0-response-xml": string;
  "Create0-request": string;
  "Query0-request-xml": string;
  "Query0-response": string;
}

export interface Taxcode {
  "Query0-request": string;
  "Read0-response-xml": string;
  "Read0-response": string;
  "Query0-response": string;
  "Query0-request-xml": string;
  "Query0-response-xml": string;
}

export interface Cashflow {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Changedatacapture {
  "Query0-request": string;
  "Query0-response-xml": string;
  "Query0-request-xml": string;
  "Query0-response": string;
}

export interface Taxpayment {
  "Query0-request": string;
  "Read0-response-xml": string;
  "Read0-response": string;
  "Query0-response": string;
  "Query0-request-xml": string;
  "Query0-response-xml": string;
}

export interface Vendorexpenses {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Bill {
  "Delete0-request": string;
  "Delete0-response": string;
  "Create0-request-xml": string;
  "Delete0-request-xml": string;
  "Create0-response-xml": string;
  "Query0-request": string;
  "Update0-response": string;
  "Update0-request-xml": string;
  "Read0-response": string;
  "Create0-response": string;
  "Update0-request": string;
  "Read0-response-xml": string;
  "Update0-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request-xml": string;
  "Query0-response": string;
}

export interface Batch {
  "BatchRequest0-request": string;
  "BatchRequest0-response": string;
  "BatchRequest0-response-xml": string;
  "BatchRequest0-request-xml": string;
}

export interface Budget {
  "Delete0-request": string;
  "Delete0-response": string;
  "Create0-request-xml": string;
  "Delete0-request-xml": string;
  "Create0-response-xml": string;
  "Query0-request": string;
  "Update0-response": string;
  "Update0-request-xml": string;
  "Read0-response": string;
  "Create0-response": string;
  "Update0-request": string;
  "Read0-response-xml": string;
  "Update0-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request-xml": string;
  "Query0-response": string;
}

export interface Generalledgerfr {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Item12 {
  "Delete0-request": string;
  "Query0-request-xml": string;
  "Read0-response": string;
  "Create2-request": string;
  "Create2-response": string;
  "Read1-response": string;
  "Update0-response": string;
  "Create0-response": string;
  "Create1-request": string;
  "Create0-response-xml": string;
  "Read1-response-xml": string;
  "Update2-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query3-request": string;
  "Query0-response-xml": string;
  "Query3-response-xml": string;
  "Query1-request-xml": string;
  "Query1-response-xml": string;
  "Query0-request": string;
  "Update0-response-xml": string;
  "Query1-response": string;
  "Read0-response-xml": string;
  "Create2-request-xml": string;
  "Update0-request-xml": string;
  "Read3-response-xml": string;
  "Update2-request-xml": string;
  "Create1-response-xml": string;
  "Delete0-response": string;
  "Query3-response": string;
  "Create1-response": string;
  "Create2-response-xml": string;
  "Query3-request-xml": string;
  "Delete0-request-xml": string;
  "Update0-request": string;
  "Read3-response": string;
  "Create1-request-xml": string;
  "Query1-request": string;
  "Update2-request": string;
  "Update2-response": string;
  "Create0-request-xml": string;
  "Query0-response": string;
}

export interface Refundreceipt {
  "Delete0-request": string;
  "Send0-response-xml": string;
  "Query0-request-xml": string;
  "Read0-response": string;
  "Update1-response-xml": string;
  "Update1-request-xml": string;
  "Update0-response": string;
  "Create0-response": string;
  "Update1-request": string;
  "Create0-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request": string;
  "Read0-response-xml": string;
  "Update0-request-xml": string;
  "Delete0-response": string;
  "Delete0-request-xml": string;
  "Update0-request": string;
  "Send0-response": string;
  "Update0-response-xml": string;
  "Create0-request-xml": string;
  "Update1-response": string;
  "Query0-response": string;
}

export interface Timeactivity {
  "Delete0-request": string;
  "Delete0-response": string;
  "Create0-request-xml": string;
  "Delete0-request-xml": string;
  "Create0-response-xml": string;
  "Query0-request": string;
  "Update0-response": string;
  "Update0-request-xml": string;
  "Read0-response": string;
  "Create0-response": string;
  "Update0-request": string;
  "Read0-response-xml": string;
  "Update0-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request-xml": string;
  "Query0-response": string;
}

export interface Deposit4 {
  "Delete0-request": string;
  "Query0-request-xml": string;
  "Read0-response": string;
  "Update1-response-xml": string;
  "Update1-request-xml": string;
  "Update0-response": string;
  "Create0-response": string;
  "Create1-request": string;
  "Update1-request": string;
  "Create0-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request": string;
  "Read0-response-xml": string;
  "Update0-request-xml": string;
  "Create1-response-xml": string;
  "Delete0-response": string;
  "Create1-response": string;
  "Delete0-request-xml": string;
  "Update0-request": string;
  "Create1-request-xml": string;
  "Update0-response-xml": string;
  "Create0-request-xml": string;
  "Update1-response": string;
  "Query0-response": string;
}

export interface Journalentry {
  "Delete0-request": string;
  "Query0-request-xml": string;
  "Read0-response": string;
  "Update1-response-xml": string;
  "Update1-request-xml": string;
  "Update0-response": string;
  "Create0-response": string;
  "Update1-request": string;
  "Create0-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request": string;
  "Read0-response-xml": string;
  "Update0-request-xml": string;
  "Delete0-response": string;
  "Delete0-request-xml": string;
  "Update0-request": string;
  "Update0-response-xml": string;
  "Create0-request-xml": string;
  "Update1-response": string;
  "Query0-response": string;
}

export interface Creditcardpayment2 {
  "Delete0-request": string;
  "Query0-request-xml": string;
  "Read0-response": string;
  "Update1-response-xml": string;
  "Update1-request-xml": string;
  "Update0-response": string;
  "Create0-response": string;
  "Update1-request": string;
  "Create0-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request": string;
  "Read0-response-xml": string;
  "Update0-request-xml": string;
  "Delete0-response": string;
  "Delete0-request-xml": string;
  "Update0-request": string;
  "Update0-response-xml": string;
  "Create0-request-xml": string;
  "Update1-response": string;
  "Query0-response": string;
}

export interface Salesbyproduct {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Companycurrency {
  "Create0-request-xml": string;
  "Query0-response-xml": string;
  "Create0-response-xml": string;
  "Query0-request": string;
  "Update0-response": string;
  "Update0-request-xml": string;
  "Read0-response": string;
  "Create0-response": string;
  "Update0-request": string;
  "Read0-response-xml": string;
  "Update0-response-xml": string;
  "Create0-request": string;
  "Query0-request-xml": string;
  "Query0-response": string;
}

export interface Profitandlossdetail {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Companyinfo {
  "Update1-request": string;
  "Query0-request": string;
  "Update1-request-xml": string;
  "Update0-response": string;
  "Update0-request-xml": string;
  "Read0-response-xml": string;
  "Update0-request": string;
  "Update1-response-xml": string;
  "Read0-response": string;
  "Update0-response-xml": string;
  "Query0-response": string;
  "Update1-response": string;
  "Query0-request-xml": string;
  "Query0-response-xml": string;
}

export interface Inventoryvaluationsummary {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Vendorcredit {
  "Delete0-request": string;
  "Delete0-response": string;
  "Create0-request-xml": string;
  "Delete0-request-xml": string;
  "Create0-response-xml": string;
  "Query0-request": string;
  "Update0-response": string;
  "Update0-request-xml": string;
  "Read0-response": string;
  "Create0-response": string;
  "Update0-request": string;
  "Read0-response-xml": string;
  "Update0-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request-xml": string;
  "Query0-response": string;
}

export interface Salesbyclasssummary {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Taxclassification2 {
  "Read2-request": string;
  "Read2-response": string;
  "Read1-response": string;
  "Read0-response": string;
  "Read3-response": string;
}

export interface Estimate {
  "Delete0-request": string;
  "Send0-response-xml": string;
  "Query0-request-xml": string;
  "Read0-response": string;
  "Update1-response-xml": string;
  "Update1-request-xml": string;
  "Update0-response": string;
  "Create0-response": string;
  "Create1-request": string;
  "Update1-request": string;
  "Create0-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request": string;
  "Update0-response-xml": string;
  "Read0-response-xml": string;
  "Update0-request-xml": string;
  "Delete0-response": string;
  "Create1-response": string;
  "PDF0-response": string;
  "Delete0-request-xml": string;
  "Update0-request": string;
  "Send0-response": string;
  "PDF0-response-xml": string;
  "Create0-request-xml": string;
  "Update1-response": string;
  "Query0-response": string;
}

export interface Vendorbalance {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Inventoryvaluationdetail {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Trialbalance {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Journalreportfr {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Apagingdetail {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Salesbydepartment {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Taxservice {
  "Create0-response": string;
  "Create0-response-xml": string;
  "Create0-request": string;
  "Create0-request-xml": string;
}

export interface Payment {
  "Delete0-request": string;
  "Send0-response-xml": string;
  "Query0-request-xml": string;
  "Read0-response": string;
  "Update1-response-xml": string;
  "Update1-request-xml": string;
  "Update0-response": string;
  "Create0-response": string;
  "Create1-request": string;
  "Update1-request": string;
  "Create0-response-xml": string;
  "Update2-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request": string;
  "Read0-response-xml": string;
  "Update0-request-xml": string;
  "Update2-request-xml": string;
  "Create1-response-xml": string;
  "Delete0-response": string;
  "Create1-response": string;
  "Delete0-request-xml": string;
  "Update0-request": string;
  "Send0-response": string;
  "Create1-request-xml": string;
  "Update0-response-xml": string;
  "Update2-request": string;
  "Update2-response": string;
  "Create0-request-xml": string;
  "Update1-response": string;
  "Query0-response": string;
}

export interface Taxsummary {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Fecreport {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Transactionlistbycustomer {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Zztemplate {
  "Delete0-request": string;
  "Query0-request-xml": string;
  "Read0-response": string;
  "Update1-response-xml": string;
  "Update1-request-xml": string;
  "Update0-response": string;
  "Create0-response": string;
  "Update1-request": string;
  "Create0-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request": string;
  "Read0-response-xml": string;
  "Update0-request-xml": string;
  "Delete0-response": string;
  "Delete0-request-xml": string;
  "Update0-request": string;
  "Update0-response-xml": string;
  "Create0-request-xml": string;
  "Update1-response": string;
  "Query0-response": string;
}

export interface Inventoryadjustment {
  "Delete0-request": string;
  "Delete0-response": string;
  "Read0-response": string;
  "Create0-response": string;
  "Update0-request": string;
  "Create0-request": string;
  "Update0-response": string;
}

export interface Salesreceipt {
  "Delete0-request": string;
  "Send0-response-xml": string;
  "Query0-request-xml": string;
  "Read0-response": string;
  "Update1-response-xml": string;
  "Update1-request-xml": string;
  "Update0-response": string;
  "Create0-response": string;
  "Update1-request": string;
  "Create0-response-xml": string;
  "Update2-response-xml": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request": string;
  "PDF0-response-xml": string;
  "Read0-response-xml": string;
  "Update0-request-xml": string;
  "Update2-request-xml": string;
  "Delete0-response": string;
  "PDF0-response": string;
  "Delete0-request-xml": string;
  "Update0-request": string;
  "Send0-response": string;
  "Update0-response-xml": string;
  "Update2-request": string;
  "Update2-response": string;
  "Create0-request-xml": string;
  "Update1-response": string;
  "Query0-response": string;
}

export interface Customertype {
  "Query0-request": string;
  "Read0-response-xml": string;
  "Read0-response": string;
  "Query0-response": string;
  "Query0-request-xml": string;
  "Query0-response-xml": string;
}

export interface Attachable {
  "Delete0-request": string;
  "Upload0-response": string;
  "Query0-request-xml": string;
  "Read0-response": string;
  "Upload0-request": string;
  "Upload0-response-xml": string;
  "Update0-response": string;
  "Create0-response": string;
  "Download0-response-xml": string;
  "Create0-response-xml": string;
  "Upload0-request-xml": string;
  "Download0-response": string;
  "Delete0-response-xml": string;
  "Create0-request": string;
  "Query0-response-xml": string;
  "Query0-request": string;
  "Read0-response-xml": string;
  "Update0-request-xml": string;
  "Delete0-response": string;
  "Delete0-request-xml": string;
  "Update0-request": string;
  "Update0-response-xml": string;
  "Create0-request-xml": string;
  "Query0-response": string;
}

export interface Journalreport {
  "Query0-request": string;
  "Query0-response": string;
}

export interface Aragingsummary {
  "Query0-request": string;
  "Query0-response": string;
}
