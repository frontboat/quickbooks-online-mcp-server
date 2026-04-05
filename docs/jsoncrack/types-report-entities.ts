// https://static.developer.intuit.com/JSONObjects/EntityJsonObject_v1.json

export interface Root {
  entities: Entities;
}

export interface Entities {
  qbo: Qbo;
  qbpayments: Qbpayments;
}

export interface Qbo {
  APAgingDetail: ApagingDetail;
  APAgingSummary: ApagingSummary;
  ARAgingDetail: AragingDetail;
  ARAgingSummary: AragingSummary;
  Account: Account;
  AccountListDetail: AccountListDetail;
  Attachable: Attachable;
  BalanceSheet: BalanceSheet;
  Batch: Batch;
  Bill: Bill;
  BillPayment: BillPayment;
  Budget: Budget;
  CashFlow: CashFlow;
  ChangeDataCapture: ChangeDataCapture;
  Class: Class;
  CompanyCurrency: CompanyCurrency;
  CompanyInfo: CompanyInfo;
  CreditCardPayment: CreditCardPayment;
  CreditMemo: CreditMemo;
  Customer: Customer;
  CustomerBalance: CustomerBalance;
  CustomerBalanceDetail: CustomerBalanceDetail;
  CustomerIncome: CustomerIncome;
  CustomerType: CustomerType;
  Department: Department;
  Deposit: Deposit;
  Employee: Employee;
  Entitlements: Entitlements;
  Estimate: Estimate;
  Exchangerate: Exchangerate;
  FECReport: Fecreport;
  GeneralLedger: GeneralLedger;
  GeneralLedgerFR: GeneralLedgerFr;
  InventoryAdjustment: InventoryAdjustment;
  InventoryValuationDetail: InventoryValuationDetail;
  InventoryValuationSummary: InventoryValuationSummary;
  Invoice: Invoice;
  Item: Item;
  JournalCode: JournalCode;
  JournalEntry: JournalEntry;
  JournalReport: JournalReport;
  JournalReportFR: JournalReportFr;
  Payment: Payment;
  PaymentMethod: PaymentMethod;
  Preferences: Preferences;
  ProfitAndLoss: ProfitAndLoss;
  ProfitAndLossDetail: ProfitAndLossDetail;
  Purchase: Purchase;
  PurchaseOrder: PurchaseOrder;
  RecurringTransaction: RecurringTransaction;
  RefundReceipt: RefundReceipt;
  ReimburseCharge: ReimburseCharge;
  SalesByClassSummary: SalesByClassSummary;
  SalesByCustomer: SalesByCustomer;
  SalesByDepartment: SalesByDepartment;
  SalesByProduct: SalesByProduct;
  SalesReceipt: SalesReceipt;
  TaxAgency: TaxAgency;
  TaxClassification: TaxClassification;
  TaxCode: TaxCode;
  TaxPayment: TaxPayment;
  TaxRate: TaxRate;
  TaxService: TaxService;
  TaxSummary: TaxSummary;
  Term: Term;
  TimeActivity: TimeActivity;
  TransactionList: TransactionList;
  TransactionListByCustomer: TransactionListByCustomer;
  TransactionListByVendor: TransactionListByVendor;
  TransactionListWithSplits: TransactionListWithSplits;
  Transfer: Transfer;
  TrialBalance: TrialBalance;
  Vendor: Vendor;
  VendorBalance: VendorBalance;
  VendorBalanceDetail: VendorBalanceDetail;
  VendorCredit: VendorCredit;
  VendorExpenses: VendorExpenses;
}

export interface ApagingDetail {
  code: string;
  description: string;
  model: Model;
  "model-description": string;
  "model-header": string;
  operations: Operations;
  title: string;
}

export interface Model {
  $ref: string;
}

export interface Operations {
  QUERY: Query[];
}

export interface Query {
  definition: Definition;
  name: string;
  sections: Section[];
}

export interface Definition {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section {
  description: string;
  model?: Model2;
  name: string;
  code?: string;
}

export interface Model2 {
  $ref: string;
}

export interface ApagingSummary {
  code: string;
  description: string;
  model: Model3;
  "model-description": string;
  "model-header": string;
  operations: Operations2;
  title: string;
}

export interface Model3 {
  $ref: string;
}

export interface Operations2 {
  QUERY: Query2[];
}

export interface Query2 {
  definition: Definition2;
  name: string;
  sections: Section2[];
}

export interface Definition2 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section2 {
  description: string;
  model?: Model4;
  name: string;
  code?: string;
}

export interface Model4 {
  $ref: string;
}

export interface AragingDetail {
  code: string;
  description: string;
  model: Model5;
  "model-description": string;
  "model-header": string;
  operations: Operations3;
  title: string;
}

export interface Model5 {
  $ref: string;
}

export interface Operations3 {
  QUERY: Query3[];
}

export interface Query3 {
  definition: Definition3;
  name: string;
  sections: Section3[];
}

export interface Definition3 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section3 {
  description: string;
  model?: Model6;
  name: string;
  code?: string;
}

export interface Model6 {
  $ref: string;
}

export interface AragingSummary {
  code: string;
  description: string;
  model: Model7;
  "model-description": string;
  "model-header": string;
  operations: Operations4;
  title: string;
}

export interface Model7 {
  $ref: string;
}

export interface Operations4 {
  QUERY: Query4[];
}

export interface Query4 {
  definition: Definition4;
  name: string;
  sections: Section4[];
}

export interface Definition4 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section4 {
  description: string;
  model?: Model8;
  name: string;
  code?: string;
}

export interface Model8 {
  $ref: string;
}

export interface Account {
  code: string;
  description: string;
  model: Model9;
  "model-header": string;
  operations: Operations5;
  table: Table;
  title: string;
}

export interface Model9 {
  $ref: string;
}

export interface Operations5 {
  CREATE: Create[];
  QUERY: Query5[];
  READ: Read[];
  UPDATE: Update[];
}

export interface Create {
  definition: Definition5;
  description: string;
  name: string;
  sections: Section5[];
}

export interface Definition5 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section5 {
  code: string;
  description: string;
  model?: Model10;
  name: string;
}

export interface Model10 {
  $ref: string;
}

export interface Query5 {
  definition: Definition6;
  name: string;
  sections: Section6[];
}

export interface Definition6 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section6 {
  code: string;
  name: string;
  description?: string;
}

export interface Read {
  definition: Definition7;
  description: string;
  name: string;
  sections: Section7[];
}

export interface Definition7 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section7 {
  code: string;
  description: string;
  name: string;
}

export interface Update {
  definition: Definition8;
  description: string;
  name: string;
  sections: Section8[];
}

export interface Definition8 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section8 {
  code: string;
  model?: Model11;
  name: string;
  description?: string;
}

export interface Model11 {
  $ref: string;
}

export interface Table {
  frenchpcgaccountlist: string[];
}

export interface AccountListDetail {
  code: string;
  description: string;
  model: Model12;
  "model-description": string;
  "model-header": string;
  operations: Operations6;
  title: string;
}

export interface Model12 {
  $ref: string;
}

export interface Operations6 {
  QUERY: Query6[];
}

export interface Query6 {
  definition: Definition9;
  name: string;
  sections: Section9[];
}

export interface Definition9 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section9 {
  description: string;
  model?: Model13;
  name: string;
  code?: string;
}

export interface Model13 {
  $ref: string;
}

export interface Attachable {
  code: string;
  description: string;
  model: Model14;
  "model-header": string;
  operations: Operations7;
  "optional-description": OptionalDescription;
  table: Table2;
  title: string;
}

export interface Model14 {
  $ref: string;
}

export interface Operations7 {
  CREATE: Create2[];
  DELETE: Delete[];
  DOWNLOAD: Download[];
  QUERY: Query7[];
  READ: Read2[];
  UPDATE: Update2[];
  UPLOAD: Upload[];
}

export interface Create2 {
  definition: Definition10;
  description: string;
  name: string;
  sections: Section10[];
}

export interface Definition10 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section10 {
  code: string;
  description: string;
  model?: Model15;
  name: string;
}

export interface Model15 {
  $ref: string;
}

export interface Delete {
  definition: Definition11;
  description: string;
  name: string;
  sections: Section11[];
}

export interface Definition11 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section11 {
  code: string;
  model?: Model16;
  name: string;
  description?: string;
}

export interface Model16 {
  $ref: string;
}

export interface Download {
  definition: Definition12;
  description: string;
  name: string;
  sections: Section12[];
}

export interface Definition12 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section12 {
  code: string;
  name: string;
}

export interface Query7 {
  definition: Definition13;
  description: string;
  name: string;
  sections: Section13[];
}

export interface Definition13 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section13 {
  code: string;
  description?: string;
  name: string;
}

export interface Read2 {
  definition: Definition14;
  description: string;
  name: string;
  sections: Section14[];
}

export interface Definition14 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section14 {
  code: string;
  description: string;
  name: string;
}

export interface Update2 {
  definition: Definition15;
  description: string;
  name: string;
  sections: Section15[];
}

export interface Definition15 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section15 {
  code: string;
  model?: Model17;
  name: string;
  description?: string;
}

export interface Model17 {
  $ref: string;
}

export interface Upload {
  definition: Definition16;
  name: string;
  sections: Section16[];
}

export interface Definition16 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section16 {
  code: string;
  description: string;
  model?: Model18;
  name: string;
}

export interface Model18 {
  $ref: string;
}

export interface OptionalDescription {
  description: string;
  heading: string;
}

export interface Table2 {
  attachable_content_types: string[];
}

export interface BalanceSheet {
  code: string;
  description: string;
  model: Model19;
  "model-description": string;
  "model-header": string;
  operations: Operations8;
  title: string;
}

export interface Model19 {
  $ref: string;
}

export interface Operations8 {
  QUERY: Query8[];
}

export interface Query8 {
  definition: Definition17;
  name: string;
  sections: Section17[];
}

export interface Definition17 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section17 {
  description: string;
  model?: Model20;
  name: string;
  code?: string;
}

export interface Model20 {
  $ref: string;
}

export interface Batch {
  description: string;
  operations: Operations9;
  "optional-description": OptionalDescription2;
  title: string;
}

export interface Operations9 {
  DEFAULT: Default[];
}

export interface Default {
  definition: Definition18;
  name: string;
  sections: Section18[];
}

export interface Definition18 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section18 {
  code: string;
  description: string;
  model: Model21;
  name: string;
}

export interface Model21 {
  $ref: string;
}

export interface OptionalDescription2 {
  description: string;
  heading: string;
}

export interface Bill {
  code: string;
  description: string;
  model: Model22;
  "model-header": string;
  operations: Operations10;
  title: string;
}

export interface Model22 {
  $ref: string;
}

export interface Operations10 {
  CREATE: Create3[];
  DELETE: Delete2[];
  QUERY: Query9[];
  READ: Read3[];
  UPDATE: Update3[];
}

export interface Create3 {
  definition: Definition19;
  name: string;
  sections: Section19[];
}

export interface Definition19 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section19 {
  code: string;
  description: string;
  model?: Model23;
  name: string;
}

export interface Model23 {
  $ref: string;
}

export interface Delete2 {
  definition: Definition20;
  description: string;
  name: string;
  sections: Section20[];
}

export interface Definition20 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section20 {
  code: string;
  model?: Model24;
  name: string;
  description?: string;
}

export interface Model24 {
  $ref: string;
}

export interface Query9 {
  definition: Definition21;
  name: string;
  sections: Section21[];
}

export interface Definition21 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section21 {
  code: string;
  name: string;
  description?: string;
}

export interface Read3 {
  definition: Definition22;
  description: string;
  name: string;
  sections: Section22[];
}

export interface Definition22 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section22 {
  code: string;
  description: string;
  name: string;
}

export interface Update3 {
  definition: Definition23;
  description: string;
  name: string;
  sections: Section23[];
}

export interface Definition23 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section23 {
  code: string;
  model?: Model25;
  name: string;
  description?: string;
}

export interface Model25 {
  $ref: string;
}

export interface BillPayment {
  code: string;
  description: string;
  model: Model26;
  "model-header": string;
  operations: Operations11;
  title: string;
}

export interface Model26 {
  $ref: string;
}

export interface Operations11 {
  CREATE: Create4[];
  DELETE: Delete3[];
  QUERY: Query10[];
  READ: Read4[];
  UPDATE: Update4[];
}

export interface Create4 {
  definition: Definition24;
  name: string;
  sections: Section24[];
}

export interface Definition24 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section24 {
  code: string;
  description: string;
  model?: Model27;
  name: string;
}

export interface Model27 {
  $ref: string;
}

export interface Delete3 {
  definition: Definition25;
  description: string;
  name: string;
  sections: Section25[];
}

export interface Definition25 {
  "Content type"?: string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section25 {
  code: string;
  model?: Model28;
  name: string;
  description?: string;
}

export interface Model28 {
  $ref: string;
}

export interface Query10 {
  definition: Definition26;
  name: string;
  sections: Section26[];
}

export interface Definition26 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section26 {
  code: string;
  name: string;
  description?: string;
}

export interface Read4 {
  definition: Definition27;
  description: string;
  name: string;
  sections: Section27[];
}

export interface Definition27 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section27 {
  code: string;
  description: string;
  name: string;
}

export interface Update4 {
  definition: Definition28;
  description: string;
  name: string;
  sections: Section28[];
}

export interface Definition28 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section28 {
  code: string;
  model?: Model29;
  name: string;
  description?: string;
}

export interface Model29 {
  $ref: string;
}

export interface Budget {
  code: string;
  description: string;
  model: Model30;
  "model-header": string;
  operations: Operations12;
  title: string;
}

export interface Model30 {
  $ref: string;
}

export interface Operations12 {
  CREATE: Create5[];
  DELETE: Delete4[];
  QUERY: Query11[];
  READ: Read5[];
  UPDATE: Update5[];
}

export interface Create5 {
  definition: Definition29;
  name: string;
  sections: Section29[];
}

export interface Definition29 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section29 {
  code: string;
  description: string;
  model?: Model31;
  name: string;
}

export interface Model31 {
  $ref: string;
}

export interface Delete4 {
  definition: Definition30;
  description: string;
  name: string;
  sections: Section30[];
}

export interface Definition30 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section30 {
  code: string;
  model?: Model32;
  name: string;
  description?: string;
}

export interface Model32 {
  $ref: string;
}

export interface Query11 {
  definition: Definition31;
  name: string;
  sections: Section31[];
}

export interface Definition31 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section31 {
  code: string;
  name: string;
  description?: string;
}

export interface Read5 {
  definition: Definition32;
  description: string;
  name: string;
  sections: Section32[];
}

export interface Definition32 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section32 {
  code: string;
  description: string;
  name: string;
}

export interface Update5 {
  definition: Definition33;
  description: string;
  name: string;
  sections: Section33[];
}

export interface Definition33 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section33 {
  code: string;
  model?: Model33;
  name: string;
  description?: string;
}

export interface Model33 {
  $ref: string;
}

export interface CashFlow {
  code: string;
  description: string;
  model: Model34;
  "model-description": string;
  "model-header": string;
  operations: Operations13;
  title: string;
}

export interface Model34 {
  $ref: string;
}

export interface Operations13 {
  QUERY: Query12[];
}

export interface Query12 {
  definition: Definition34;
  name: string;
  sections: Section34[];
}

export interface Definition34 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section34 {
  description: string;
  model?: Model35;
  name: string;
  code?: string;
}

export interface Model35 {
  $ref: string;
}

export interface ChangeDataCapture {
  code: string;
  description: string;
  "model-header": string;
  operations: Operations14;
  "optional-description": OptionalDescription3;
  title: string;
}

export interface Operations14 {
  DEFAULT: Default2[];
}

export interface Default2 {
  definition: Definition35;
  description: string;
  name: string;
  sections: Section35[];
}

export interface Definition35 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section35 {
  code: string;
  description?: string;
  name: string;
}

export interface OptionalDescription3 {
  description: string;
  heading: string;
}

export interface Class {
  code: string;
  description: string;
  model: Model36;
  "model-header": string;
  operations: Operations15;
  title: string;
}

export interface Model36 {
  $ref: string;
}

export interface Operations15 {
  CREATE: Create6[];
  QUERY: Query13[];
  READ: Read6[];
  UPDATE: Update6[];
}

export interface Create6 {
  definition: Definition36;
  name: string;
  sections: Section36[];
}

export interface Definition36 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section36 {
  code: string;
  description: string;
  model?: Model37;
  name: string;
}

export interface Model37 {
  $ref: string;
}

export interface Query13 {
  definition: Definition37;
  name: string;
  sections: Section37[];
}

export interface Definition37 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section37 {
  code: string;
  name: string;
  description?: string;
}

export interface Read6 {
  definition: Definition38;
  description: string;
  name: string;
  sections: Section38[];
}

export interface Definition38 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section38 {
  code: string;
  description: string;
  name: string;
}

export interface Update6 {
  definition: Definition39;
  description: string;
  name: string;
  sections: Section39[];
}

export interface Definition39 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section39 {
  code: string;
  model?: Model38;
  name: string;
  description?: string;
}

export interface Model38 {
  $ref: string;
}

export interface CompanyCurrency {
  code: string;
  description: string;
  model: Model39;
  "model-header": string;
  operations: Operations16;
  "optional-description": OptionalDescription4;
  title: string;
}

export interface Model39 {
  $ref: string;
}

export interface Operations16 {
  CREATE: Create7[];
  QUERY: Query14[];
  READ: Read7[];
  UPDATE: Update7[];
}

export interface Create7 {
  definition: Definition40;
  name: string;
  sections: Section40[];
}

export interface Definition40 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section40 {
  code: string;
  description: string;
  model?: Model40;
  name: string;
}

export interface Model40 {
  $ref: string;
}

export interface Query14 {
  definition: Definition41;
  name: string;
  sections: Section41[];
}

export interface Definition41 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section41 {
  code: string;
  name: string;
  description?: string;
}

export interface Read7 {
  definition: Definition42;
  description: string;
  name: string;
  sections: Section42[];
}

export interface Definition42 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section42 {
  code: string;
  description: string;
  name: string;
}

export interface Update7 {
  definition: Definition43;
  description: string;
  name: string;
  sections: Section43[];
}

export interface Definition43 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section43 {
  code: string;
  model?: Model41;
  name: string;
  description?: string;
}

export interface Model41 {
  $ref: string;
}

export interface OptionalDescription4 {
  description: string;
  heading: string;
}

export interface CompanyInfo {
  code: string;
  description: string;
  model: Model42;
  "model-header": string;
  operations: Operations17;
  title: string;
}

export interface Model42 {
  $ref: string;
}

export interface Operations17 {
  QUERY: Query15[];
  READ: Read8[];
  UPDATE: Update8[];
}

export interface Query15 {
  definition: Definition44;
  name: string;
  sections: Section44[];
}

export interface Definition44 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section44 {
  code: string;
  name: string;
  description?: string;
}

export interface Read8 {
  definition: Definition45;
  description: string;
  name: string;
  sections: Section45[];
}

export interface Definition45 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section45 {
  code: string;
  description: string;
  name: string;
}

export interface Update8 {
  definition: Definition46;
  description: string;
  name: string;
  sections: Section46[];
}

export interface Definition46 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section46 {
  code: string;
  model?: Model43;
  name: string;
  description?: string;
}

export interface Model43 {
  $ref: string;
}

export interface CreditCardPayment {
  code: string;
  description: string;
  model: Model44;
  "model-header": string;
  operations: Operations18;
  "optional-description": OptionalDescription5;
  title: string;
}

export interface Model44 {
  $ref: string;
}

export interface Operations18 {
  CREATE: Create8[];
  DELETE: Delete5[];
  QUERY: Query16[];
  READ: Read9[];
  UPDATE: Update9[];
}

export interface Create8 {
  definition: Definition47;
  name: string;
  sections: Section47[];
}

export interface Definition47 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section47 {
  code: string;
  description: string;
  model?: Model45;
  name: string;
}

export interface Model45 {
  $ref: string;
}

export interface Delete5 {
  definition: Definition48;
  description: string;
  name: string;
  sections: Section48[];
}

export interface Definition48 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section48 {
  code: string;
  model?: Model46;
  name: string;
  description?: string;
}

export interface Model46 {
  $ref: string;
}

export interface Query16 {
  definition: Definition49;
  name: string;
  sections: Section49[];
}

export interface Definition49 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section49 {
  code: string;
  name: string;
  description?: string;
}

export interface Read9 {
  definition: Definition50;
  description: string;
  name: string;
  sections: Section50[];
}

export interface Definition50 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section50 {
  code: string;
  description: string;
  name: string;
}

export interface Update9 {
  definition: Definition51;
  description: string;
  name: string;
  sections: Section51[];
}

export interface Definition51 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section51 {
  code: string;
  model?: Model47;
  name: string;
  description?: string;
}

export interface Model47 {
  $ref: string;
}

export interface OptionalDescription5 {
  description: string;
  heading: string;
}

export interface CreditMemo {
  code: string;
  description: string;
  model: Model48;
  "model-header": string;
  operations: Operations19;
  title: string;
}

export interface Model48 {
  $ref: string;
}

export interface Operations19 {
  CREATE: Create9[];
  DELETE: Delete6[];
  PDF: Pdf[];
  QUERY: Query17[];
  READ: Read10[];
  SEND: Send[];
  UPDATE: Update10[];
}

export interface Create9 {
  definition: Definition52;
  name: string;
  sections: Section52[];
}

export interface Definition52 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section52 {
  code: string;
  description: string;
  model?: Model49;
  name: string;
}

export interface Model49 {
  $ref: string;
}

export interface Delete6 {
  definition: Definition53;
  description: string;
  name: string;
  sections: Section53[];
}

export interface Definition53 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section53 {
  code: string;
  model?: Model50;
  name: string;
  description?: string;
}

export interface Model50 {
  $ref: string;
}

export interface Pdf {
  definition: Definition54;
  name: string;
  sections: Section54[];
}

export interface Definition54 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section54 {
  code: string;
  description: string;
  name: string;
}

export interface Query17 {
  definition: Definition55;
  name: string;
  sections: Section55[];
}

export interface Definition55 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section55 {
  code: string;
  name: string;
  description?: string;
}

export interface Read10 {
  definition: Definition56;
  description: string;
  name: string;
  sections: Section56[];
}

export interface Definition56 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section56 {
  code: string;
  description: string;
  name: string;
}

export interface Send {
  definition: Definition57;
  description: string;
  name: string;
  sections: Section57[];
}

export interface Definition57 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section57 {
  code: string;
  description: string;
  name: string;
}

export interface Update10 {
  definition: Definition58;
  description: string;
  name: string;
  sections: Section58[];
}

export interface Definition58 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section58 {
  code: string;
  model?: Model51;
  name: string;
  description?: string;
}

export interface Model51 {
  $ref: string;
}

export interface Customer {
  code: string;
  description: string;
  model: Model52;
  "model-header": string;
  operations: Operations20;
  "optional-description": OptionalDescription6;
  title: string;
}

export interface Model52 {
  $ref: string;
}

export interface Operations20 {
  CREATE: Create10[];
  QUERY: Query18[];
  READ: Read11[];
  UPDATE: Update11[];
}

export interface Create10 {
  definition: Definition59;
  description: string;
  name: string;
  sections: Section59[];
}

export interface Definition59 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section59 {
  code: string;
  description: string;
  model?: Model53;
  name: string;
}

export interface Model53 {
  $ref: string;
}

export interface Query18 {
  definition: Definition60;
  name: string;
  sections: Section60[];
}

export interface Definition60 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section60 {
  code: string;
  name: string;
  description?: string;
}

export interface Read11 {
  definition: Definition61;
  description: string;
  name: string;
  sections: Section61[];
}

export interface Definition61 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section61 {
  code: string;
  description: string;
  name: string;
}

export interface Update11 {
  definition: Definition62;
  description: string;
  name: string;
  sections: Section62[];
}

export interface Definition62 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section62 {
  code: string;
  model?: Model54;
  name: string;
  description?: string;
}

export interface Model54 {
  $ref: string;
}

export interface OptionalDescription6 {
  description: string;
  heading: string;
}

export interface CustomerBalance {
  code: string;
  description: string;
  model: Model55;
  "model-description": string;
  "model-header": string;
  operations: Operations21;
  title: string;
}

export interface Model55 {
  $ref: string;
}

export interface Operations21 {
  QUERY: Query19[];
}

export interface Query19 {
  definition: Definition63;
  name: string;
  sections: Section63[];
}

export interface Definition63 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section63 {
  description: string;
  model?: Model56;
  name: string;
  code?: string;
}

export interface Model56 {
  $ref: string;
}

export interface CustomerBalanceDetail {
  code: string;
  description: string;
  model: Model57;
  "model-description": string;
  "model-header": string;
  operations: Operations22;
  title: string;
}

export interface Model57 {
  $ref: string;
}

export interface Operations22 {
  QUERY: Query20[];
}

export interface Query20 {
  definition: Definition64;
  name: string;
  sections: Section64[];
}

export interface Definition64 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section64 {
  description: string;
  model?: Model58;
  name: string;
  code?: string;
}

export interface Model58 {
  $ref: string;
}

export interface CustomerIncome {
  code: string;
  description: string;
  model: Model59;
  "model-description": string;
  "model-header": string;
  operations: Operations23;
  title: string;
}

export interface Model59 {
  $ref: string;
}

export interface Operations23 {
  QUERY: Query21[];
}

export interface Query21 {
  definition: Definition65;
  name: string;
  sections: Section65[];
}

export interface Definition65 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section65 {
  description: string;
  model?: Model60;
  name: string;
  code?: string;
}

export interface Model60 {
  $ref: string;
}

export interface CustomerType {
  code: string;
  description: string;
  model: Model61;
  "model-header": string;
  operations: Operations24;
  title: string;
}

export interface Model61 {
  $ref: string;
}

export interface Operations24 {
  QUERY: Query22[];
  READ: Read12[];
}

export interface Query22 {
  definition: Definition66;
  name: string;
  sections: Section66[];
}

export interface Definition66 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section66 {
  code: string;
  name: string;
  description?: string;
}

export interface Read12 {
  definition: Definition67;
  description: string;
  name: string;
  sections: Section67[];
}

export interface Definition67 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section67 {
  code: string;
  description: string;
  name: string;
}

export interface Department {
  code: string;
  description: string;
  model: Model62;
  "model-header": string;
  operations: Operations25;
  title: string;
}

export interface Model62 {
  $ref: string;
}

export interface Operations25 {
  CREATE: Create11[];
  QUERY: Query23[];
  READ: Read13[];
  UPDATE: Update12[];
}

export interface Create11 {
  definition: Definition68;
  name: string;
  sections: Section68[];
}

export interface Definition68 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section68 {
  code: string;
  description: string;
  model?: Model63;
  name: string;
}

export interface Model63 {
  $ref: string;
}

export interface Query23 {
  definition: Definition69;
  name: string;
  sections: Section69[];
}

export interface Definition69 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section69 {
  code: string;
  name: string;
  description?: string;
}

export interface Read13 {
  definition: Definition70;
  description: string;
  name: string;
  sections: Section70[];
}

export interface Definition70 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section70 {
  code: string;
  description: string;
  name: string;
}

export interface Update12 {
  definition: Definition71;
  description: string;
  name: string;
  sections: Section71[];
}

export interface Definition71 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section71 {
  code: string;
  model?: Model64;
  name: string;
  description?: string;
}

export interface Model64 {
  $ref: string;
}

export interface Deposit {
  code: string;
  description: string;
  model: Model65;
  "model-header": string;
  operations: Operations26;
  "optional-description": OptionalDescription7;
  title: string;
}

export interface Model65 {
  $ref: string;
}

export interface Operations26 {
  CREATE: Create12[];
  DELETE: Delete7[];
  QUERY: Query24[];
  READ: Read14[];
  UPDATE: Update13[];
}

export interface Create12 {
  definition: Definition72;
  description: string;
  name: string;
  sections: Section72[];
}

export interface Definition72 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section72 {
  code: string;
  description: string;
  model?: Model66;
  name: string;
}

export interface Model66 {
  $ref: string;
}

export interface Delete7 {
  definition: Definition73;
  description: string;
  name: string;
  sections: Section73[];
}

export interface Definition73 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section73 {
  code: string;
  model?: Model67;
  name: string;
  description?: string;
}

export interface Model67 {
  $ref: string;
}

export interface Query24 {
  definition: Definition74;
  name: string;
  sections: Section74[];
}

export interface Definition74 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section74 {
  code: string;
  name: string;
  description?: string;
}

export interface Read14 {
  definition: Definition75;
  description: string;
  name: string;
  sections: Section75[];
}

export interface Definition75 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section75 {
  code: string;
  description: string;
  name: string;
}

export interface Update13 {
  definition: Definition76;
  description: string;
  name: string;
  sections: Section76[];
}

export interface Definition76 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section76 {
  code: string;
  model?: Model68;
  name: string;
  description?: string;
}

export interface Model68 {
  $ref: string;
}

export interface OptionalDescription7 {
  description: string;
  heading: string;
}

export interface Employee {
  code: string;
  description: string;
  model: Model69;
  "model-header": string;
  operations: Operations27;
  "optional-description": OptionalDescription8;
  title: string;
}

export interface Model69 {
  $ref: string;
}

export interface Operations27 {
  CREATE: Create13[];
  QUERY: Query25[];
  READ: Read15[];
  UPDATE: Update14[];
}

export interface Create13 {
  definition: Definition77;
  name: string;
  sections: Section77[];
}

export interface Definition77 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section77 {
  code: string;
  description: string;
  model?: Model70;
  name: string;
}

export interface Model70 {
  $ref: string;
}

export interface Query25 {
  definition: Definition78;
  name: string;
  sections: Section78[];
}

export interface Definition78 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section78 {
  code: string;
  name: string;
  description?: string;
}

export interface Read15 {
  definition: Definition79;
  description: string;
  name: string;
  sections: Section79[];
}

export interface Definition79 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section79 {
  code: string;
  description: string;
  name: string;
}

export interface Update14 {
  definition: Definition80;
  description: string;
  name: string;
  sections: Section80[];
}

export interface Definition80 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section80 {
  code: string;
  model?: Model71;
  name: string;
  description?: string;
}

export interface Model71 {
  $ref: string;
}

export interface OptionalDescription8 {
  description: string;
  heading: string;
}

export interface Entitlements {
  code: string;
  description: string;
  model: Model72;
  "model-header": string;
  operations: Operations28;
  title: string;
}

export interface Model72 {
  $ref: string;
}

export interface Operations28 {
  READ: Read16[];
}

export interface Read16 {
  definition: Definition81;
  description: string;
  name: string;
  sections: Section81[];
}

export interface Definition81 {
  Operation: string;
  "Production Base URL (OAUTH1)": string;
  "Production Base URL (OAUTH2)": string;
  "Sandbox Base URL (OAUTH1)": string;
  "Sandbox Base URL (OAUTH2)": string;
}

export interface Section81 {
  code: string;
  name: string;
}

export interface Estimate {
  code: string;
  description: string;
  model: Model73;
  "model-header": string;
  operations: Operations29;
  title: string;
}

export interface Model73 {
  $ref: string;
}

export interface Operations29 {
  CREATE: Create14[];
  DELETE: Delete8[];
  PDF: Pdf2[];
  QUERY: Query26[];
  READ: Read17[];
  SEND: Send2[];
  UPDATE: Update15[];
}

export interface Create14 {
  definition: Definition82;
  description: string;
  name: string;
  sections: Section82[];
}

export interface Definition82 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section82 {
  code: string;
  description: string;
  model?: Model74;
  name: string;
}

export interface Model74 {
  $ref: string;
}

export interface Delete8 {
  definition: Definition83;
  description: string;
  name: string;
  sections: Section83[];
}

export interface Definition83 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section83 {
  code: string;
  model?: Model75;
  name: string;
  description?: string;
}

export interface Model75 {
  $ref: string;
}

export interface Pdf2 {
  definition: Definition84;
  name: string;
  sections: Section84[];
}

export interface Definition84 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section84 {
  code: string;
  description: string;
  name: string;
}

export interface Query26 {
  definition: Definition85;
  name: string;
  sections: Section85[];
}

export interface Definition85 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section85 {
  code: string;
  name: string;
  description?: string;
}

export interface Read17 {
  definition: Definition86;
  description: string;
  name: string;
  sections: Section86[];
}

export interface Definition86 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section86 {
  code: string;
  description: string;
  name: string;
}

export interface Send2 {
  definition: Definition87;
  description: string;
  name: string;
  sections: Section87[];
}

export interface Definition87 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section87 {
  code: string;
  description: string;
  name: string;
}

export interface Update15 {
  definition: Definition88;
  description: string;
  name: string;
  sections: Section88[];
}

export interface Definition88 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section88 {
  code: string;
  model?: Model76;
  name: string;
  description?: string;
}

export interface Model76 {
  $ref: string;
}

export interface Exchangerate {
  code: string;
  description: string;
  model: Model77;
  "model-header": string;
  operations: Operations30;
  title: string;
}

export interface Model77 {
  $ref: string;
}

export interface Operations30 {
  QUERY: Query27[];
  UPDATE: Update16[];
}

export interface Query27 {
  definition: Definition89;
  description?: string;
  name: string;
  sections: Section89[];
}

export interface Definition89 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
  "Content type"?: string;
}

export interface Section89 {
  code: string;
  name: string;
  description?: string;
}

export interface Update16 {
  definition: Definition90;
  description: string;
  name: string;
  sections: Section90[];
}

export interface Definition90 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section90 {
  code: string;
  model?: Model78;
  name: string;
  description?: string;
}

export interface Model78 {
  $ref: string;
}

export interface Fecreport {
  code: string;
  description: string;
  model: Model79;
  "model-description": string;
  "model-header": string;
  operations: Operations31;
  title: string;
}

export interface Model79 {
  $ref: string;
}

export interface Operations31 {
  QUERY: Query28[];
}

export interface Query28 {
  definition: Definition91;
  name: string;
  sections: Section91[];
}

export interface Definition91 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section91 {
  description: string;
  model?: Model80;
  name: string;
  code?: string;
}

export interface Model80 {
  $ref: string;
}

export interface GeneralLedger {
  code: string;
  description: string;
  model: Model81;
  "model-description": string;
  "model-header": string;
  operations: Operations32;
  title: string;
}

export interface Model81 {
  $ref: string;
}

export interface Operations32 {
  QUERY: Query29[];
}

export interface Query29 {
  definition: Definition92;
  name: string;
  sections: Section92[];
}

export interface Definition92 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section92 {
  description: string;
  model?: Model82;
  name: string;
  code?: string;
}

export interface Model82 {
  $ref: string;
}

export interface GeneralLedgerFr {
  code: string;
  description: string;
  model: Model83;
  "model-description": string;
  "model-header": string;
  operations: Operations33;
  title: string;
}

export interface Model83 {
  $ref: string;
}

export interface Operations33 {
  QUERY: Query30[];
}

export interface Query30 {
  definition: Definition93;
  name: string;
  sections: Section93[];
}

export interface Definition93 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section93 {
  description: string;
  model?: Model84;
  name: string;
  code?: string;
}

export interface Model84 {
  $ref: string;
}

export interface InventoryAdjustment {
  code: string;
  description: string;
  model: Model85;
  "model-header": string;
  operations: Operations34;
  title: string;
}

export interface Model85 {
  $ref: string;
}

export interface Operations34 {
  CREATE: Create15[];
  DELETE: Delete9[];
  READ: Read18[];
  UPDATE: Update17[];
}

export interface Create15 {
  definition: Definition94;
  description: string;
  name: string;
  sections: Section94[];
}

export interface Definition94 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section94 {
  code: string;
  description: string;
  model?: Model86;
  name: string;
}

export interface Model86 {
  $ref: string;
}

export interface Delete9 {
  definition: Definition95;
  description: string;
  name: string;
  sections: Section95[];
}

export interface Definition95 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section95 {
  code: string;
  model?: Model87;
  name: string;
  description?: string;
}

export interface Model87 {
  $ref: string;
}

export interface Read18 {
  definition: Definition96;
  description: string;
  name: string;
  sections: Section96[];
}

export interface Definition96 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section96 {
  code: string;
  description: string;
  name: string;
}

export interface Update17 {
  definition: Definition97;
  description: string;
  name: string;
  sections: Section97[];
}

export interface Definition97 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section97 {
  code: string;
  model?: Model88;
  name: string;
  description?: string;
}

export interface Model88 {
  $ref: string;
}

export interface InventoryValuationDetail {
  code: string;
  description: string;
  model: Model89;
  "model-description": string;
  "model-header": string;
  operations: Operations35;
  title: string;
}

export interface Model89 {
  $ref: string;
}

export interface Operations35 {
  QUERY: Query31[];
}

export interface Query31 {
  definition: Definition98;
  name: string;
  sections: Section98[];
}

export interface Definition98 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section98 {
  description: string;
  model?: Model90;
  name: string;
  code?: string;
}

export interface Model90 {
  $ref: string;
}

export interface InventoryValuationSummary {
  code: string;
  description: string;
  model: Model91;
  "model-description": string;
  "model-header": string;
  operations: Operations36;
  title: string;
}

export interface Model91 {
  $ref: string;
}

export interface Operations36 {
  QUERY: Query32[];
}

export interface Query32 {
  definition: Definition99;
  name: string;
  sections: Section99[];
}

export interface Definition99 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section99 {
  description: string;
  model?: Model92;
  name: string;
  code?: string;
}

export interface Model92 {
  $ref: string;
}

export interface Invoice {
  code: string;
  description: string;
  model: Model93;
  "model-header": string;
  operations: Operations37;
  "optional-description": OptionalDescription9;
  title: string;
}

export interface Model93 {
  $ref: string;
}

export interface Operations37 {
  CREATE: Create16[];
  DELETE: Delete10[];
  PDF: Pdf3[];
  QUERY: Query33[];
  READ: Read19[];
  SEND: Send3[];
  UPDATE: Update18[];
}

export interface Create16 {
  definition: Definition100;
  description: string;
  name: string;
  sections: Section100[];
}

export interface Definition100 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section100 {
  code: string;
  description: string;
  model?: Model94;
  name: string;
}

export interface Model94 {
  $ref: string;
}

export interface Delete10 {
  definition: Definition101;
  description: string;
  name: string;
  sections: Section101[];
}

export interface Definition101 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section101 {
  code: string;
  model?: Model95;
  name: string;
  description?: string;
}

export interface Model95 {
  $ref: string;
}

export interface Pdf3 {
  definition: Definition102;
  name: string;
  sections: Section102[];
}

export interface Definition102 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section102 {
  code: string;
  description: string;
  name: string;
}

export interface Query33 {
  definition: Definition103;
  name: string;
  sections: Section103[];
}

export interface Definition103 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section103 {
  code: string;
  name: string;
  description?: string;
}

export interface Read19 {
  definition: Definition104;
  description: string;
  name: string;
  sections: Section104[];
}

export interface Definition104 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section104 {
  code: string;
  description: string;
  name: string;
}

export interface Send3 {
  definition: Definition105;
  description: string;
  name: string;
  sections: Section105[];
}

export interface Definition105 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section105 {
  code: string;
  description: string;
  name: string;
}

export interface Update18 {
  definition: Definition106;
  description: string;
  name: string;
  sections: Section106[];
}

export interface Definition106 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section106 {
  code: string;
  model?: Model96;
  name: string;
  description?: string;
}

export interface Model96 {
  $ref: string;
}

export interface OptionalDescription9 {
  description: string;
  heading: string;
}

export interface Item {
  code: string;
  description: string;
  model: Model97;
  "model-header": string;
  operations: Operations38;
  "optional-description": OptionalDescription10;
  title: string;
}

export interface Model97 {
  $ref: string;
}

export interface Operations38 {
  CREATE: Create17[];
  QUERY: Query34[];
  READ: Read20[];
  UPDATE: Update19[];
}

export interface Create17 {
  definition: Definition107;
  name: string;
  sections: Section107[];
}

export interface Definition107 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section107 {
  code: string;
  description: string;
  model?: Model98;
  name: string;
}

export interface Model98 {
  $ref: string;
}

export interface Query34 {
  definition: Definition108;
  name: string;
  sections: Section108[];
}

export interface Definition108 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section108 {
  code: string;
  name: string;
  description?: string;
}

export interface Read20 {
  definition: Definition109;
  description: string;
  name: string;
  sections: Section109[];
}

export interface Definition109 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section109 {
  code: string;
  description: string;
  name: string;
}

export interface Update19 {
  definition: Definition110;
  description: string;
  name: string;
  sections: Section110[];
}

export interface Definition110 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section110 {
  code: string;
  model?: Model99;
  name: string;
  description?: string;
}

export interface Model99 {
  $ref: string;
}

export interface OptionalDescription10 {
  description: string;
  heading: string;
}

export interface JournalCode {
  code: string;
  description: string;
  model: Model100;
  "model-header": string;
  operations: Operations39;
  title: string;
}

export interface Model100 {
  $ref: string;
}

export interface Operations39 {
  CREATE: Create18[];
  QUERY: Query35[];
  READ: Read21[];
  UPDATE: Update20[];
}

export interface Create18 {
  definition: Definition111;
  name: string;
  sections: Section111[];
}

export interface Definition111 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section111 {
  code: string;
  description: string;
  model?: Model101;
  name: string;
}

export interface Model101 {
  $ref: string;
}

export interface Query35 {
  definition: Definition112;
  name: string;
  sections: Section112[];
}

export interface Definition112 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section112 {
  code: string;
  name: string;
  description?: string;
}

export interface Read21 {
  definition: Definition113;
  description: string;
  name: string;
  sections: Section113[];
}

export interface Definition113 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section113 {
  code: string;
  description: string;
  name: string;
}

export interface Update20 {
  definition: Definition114;
  description: string;
  name: string;
  sections: Section114[];
}

export interface Definition114 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section114 {
  code: string;
  model?: Model102;
  name: string;
  description?: string;
}

export interface Model102 {
  $ref: string;
}

export interface JournalEntry {
  code: string;
  description: string;
  model: Model103;
  "model-header": string;
  operations: Operations40;
  "optional-description": OptionalDescription11;
  title: string;
}

export interface Model103 {
  $ref: string;
}

export interface Operations40 {
  CREATE: Create19[];
  DELETE: Delete11[];
  QUERY: Query36[];
  READ: Read22[];
  UPDATE: Update21[];
}

export interface Create19 {
  definition: Definition115;
  name: string;
  sections: Section115[];
}

export interface Definition115 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section115 {
  code: string;
  description: string;
  model?: Model104;
  name: string;
}

export interface Model104 {
  $ref: string;
}

export interface Delete11 {
  definition: Definition116;
  description: string;
  name: string;
  sections: Section116[];
}

export interface Definition116 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section116 {
  code: string;
  model?: Model105;
  name: string;
  description?: string;
}

export interface Model105 {
  $ref: string;
}

export interface Query36 {
  definition: Definition117;
  name: string;
  sections: Section117[];
}

export interface Definition117 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section117 {
  code: string;
  name: string;
  description?: string;
}

export interface Read22 {
  definition: Definition118;
  description: string;
  name: string;
  sections: Section118[];
}

export interface Definition118 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section118 {
  code: string;
  description: string;
  name: string;
}

export interface Update21 {
  definition: Definition119;
  description: string;
  name: string;
  sections: Section119[];
}

export interface Definition119 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section119 {
  code: string;
  model?: Model106;
  name: string;
  description?: string;
}

export interface Model106 {
  $ref: string;
}

export interface OptionalDescription11 {
  description: string;
  heading: string;
}

export interface JournalReport {
  code: string;
  description: string;
  model: Model107;
  "model-description": string;
  "model-header": string;
  operations: Operations41;
  title: string;
}

export interface Model107 {
  $ref: string;
}

export interface Operations41 {
  QUERY: Query37[];
}

export interface Query37 {
  definition: Definition120;
  name: string;
  sections: Section120[];
}

export interface Definition120 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section120 {
  description: string;
  model?: Model108;
  name: string;
  code?: string;
}

export interface Model108 {
  $ref: string;
}

export interface JournalReportFr {
  code: string;
  description: string;
  model: Model109;
  "model-description": string;
  "model-header": string;
  operations: Operations42;
  title: string;
}

export interface Model109 {
  $ref: string;
}

export interface Operations42 {
  QUERY: Query38[];
}

export interface Query38 {
  definition: Definition121;
  name: string;
  sections: Section121[];
}

export interface Definition121 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section121 {
  description: string;
  model?: Model110;
  name: string;
  code?: string;
}

export interface Model110 {
  $ref: string;
}

export interface Payment {
  code: string;
  description: string;
  model: Model111;
  "model-header": string;
  operations: Operations43;
  title: string;
}

export interface Model111 {
  $ref: string;
}

export interface Operations43 {
  CREATE: Create20[];
  DELETE: Delete12[];
  PDF: Pdf4[];
  QUERY: Query39[];
  READ: Read23[];
  SEND: Send4[];
  UPDATE: Update22[];
}

export interface Create20 {
  definition: Definition122;
  name: string;
  sections: Section122[];
}

export interface Definition122 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section122 {
  code: string;
  description: string;
  model?: Model112;
  name: string;
}

export interface Model112 {
  $ref: string;
}

export interface Delete12 {
  definition: Definition123;
  description: string;
  name: string;
  sections: Section123[];
}

export interface Definition123 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section123 {
  code: string;
  model?: Model113;
  name: string;
  description?: string;
}

export interface Model113 {
  $ref: string;
}

export interface Pdf4 {
  definition: Definition124;
  name: string;
  sections: Section124[];
}

export interface Definition124 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section124 {
  code: string;
  description: string;
  name: string;
}

export interface Query39 {
  definition: Definition125;
  name: string;
  sections: Section125[];
}

export interface Definition125 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section125 {
  code: string;
  name: string;
  description?: string;
}

export interface Read23 {
  definition: Definition126;
  description: string;
  name: string;
  sections: Section126[];
}

export interface Definition126 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section126 {
  code: string;
  description: string;
  name: string;
}

export interface Send4 {
  definition: Definition127;
  description: string;
  name: string;
  sections: Section127[];
}

export interface Definition127 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section127 {
  code: string;
  description: string;
  name: string;
}

export interface Update22 {
  definition: Definition128;
  description: string;
  name: string;
  sections: Section128[];
}

export interface Definition128 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section128 {
  code: string;
  model?: Model114;
  name: string;
  description?: string;
}

export interface Model114 {
  $ref: string;
}

export interface PaymentMethod {
  code: string;
  description: string;
  model: Model115;
  "model-header": string;
  operations: Operations44;
  title: string;
}

export interface Model115 {
  $ref: string;
}

export interface Operations44 {
  CREATE: Create21[];
  QUERY: Query40[];
  READ: Read24[];
  UPDATE: Update23[];
}

export interface Create21 {
  definition: Definition129;
  name: string;
  sections: Section129[];
}

export interface Definition129 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section129 {
  code: string;
  description: string;
  model?: Model116;
  name: string;
}

export interface Model116 {
  $ref: string;
}

export interface Query40 {
  definition: Definition130;
  name: string;
  sections: Section130[];
}

export interface Definition130 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section130 {
  code: string;
  name: string;
  description?: string;
}

export interface Read24 {
  definition: Definition131;
  description: string;
  name: string;
  sections: Section131[];
}

export interface Definition131 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section131 {
  code: string;
  description: string;
  name: string;
}

export interface Update23 {
  definition: Definition132;
  description: string;
  name: string;
  sections: Section132[];
}

export interface Definition132 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section132 {
  code: string;
  model?: Model117;
  name: string;
  description?: string;
}

export interface Model117 {
  $ref: string;
}

export interface Preferences {
  code: string;
  description: string;
  model: Model118;
  "model-header": string;
  operations: Operations45;
  "optional-description": OptionalDescription12;
  title: string;
}

export interface Model118 {
  $ref: string;
}

export interface Operations45 {
  QUERY: Query41[];
  READ: Read25[];
  UPDATE: Update24[];
}

export interface Query41 {
  definition: Definition133;
  name: string;
  sections: Section133[];
}

export interface Definition133 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section133 {
  code: string;
  name: string;
  description?: string;
}

export interface Read25 {
  definition: Definition134;
  description: string;
  name: string;
  sections: Section134[];
}

export interface Definition134 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section134 {
  code: string;
  description: string;
  name: string;
}

export interface Update24 {
  definition: Definition135;
  description: string;
  name: string;
  sections: Section135[];
}

export interface Definition135 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section135 {
  code: string;
  model?: Model119;
  name: string;
  description?: string;
}

export interface Model119 {
  $ref: string;
}

export interface OptionalDescription12 {
  description: string;
  heading: string;
}

export interface ProfitAndLoss {
  code: string;
  description: string;
  model: Model120;
  "model-description": string;
  "model-header": string;
  operations: Operations46;
  title: string;
}

export interface Model120 {
  $ref: string;
}

export interface Operations46 {
  QUERY: Query42[];
}

export interface Query42 {
  definition: Definition136;
  name: string;
  sections: Section136[];
}

export interface Definition136 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section136 {
  description: string;
  model?: Model121;
  name: string;
  code?: string;
}

export interface Model121 {
  $ref: string;
}

export interface ProfitAndLossDetail {
  code: string;
  description: string;
  model: Model122;
  "model-description": string;
  "model-header": string;
  operations: Operations47;
  title: string;
}

export interface Model122 {
  $ref: string;
}

export interface Operations47 {
  QUERY: Query43[];
}

export interface Query43 {
  definition: Definition137;
  name: string;
  sections: Section137[];
}

export interface Definition137 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section137 {
  description: string;
  model?: Model123;
  name: string;
  code?: string;
}

export interface Model123 {
  $ref: string;
}

export interface Purchase {
  code: string;
  description: string;
  model: Model124;
  "model-header": string;
  operations: Operations48;
  title: string;
}

export interface Model124 {
  $ref: string;
}

export interface Operations48 {
  CREATE: Create22[];
  DELETE: Delete13[];
  QUERY: Query44[];
  READ: Read26[];
  UPDATE: Update25[];
}

export interface Create22 {
  definition: Definition138;
  description: string;
  name: string;
  sections: Section138[];
}

export interface Definition138 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section138 {
  code: string;
  description: string;
  model?: Model125;
  name: string;
}

export interface Model125 {
  $ref: string;
}

export interface Delete13 {
  definition: Definition139;
  description: string;
  name: string;
  sections: Section139[];
}

export interface Definition139 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section139 {
  code: string;
  model?: Model126;
  name: string;
  description?: string;
}

export interface Model126 {
  $ref: string;
}

export interface Query44 {
  definition: Definition140;
  name: string;
  sections: Section140[];
}

export interface Definition140 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section140 {
  code: string;
  name: string;
  description?: string;
}

export interface Read26 {
  definition: Definition141;
  description: string;
  name: string;
  sections: Section141[];
}

export interface Definition141 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section141 {
  code: string;
  description: string;
  name: string;
}

export interface Update25 {
  definition: Definition142;
  description: string;
  name: string;
  sections: Section142[];
}

export interface Definition142 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section142 {
  code: string;
  model?: Model127;
  name: string;
  description?: string;
}

export interface Model127 {
  $ref: string;
}

export interface PurchaseOrder {
  code: string;
  description: string;
  model: Model128;
  "model-header": string;
  operations: Operations49;
  title: string;
}

export interface Model128 {
  $ref: string;
}

export interface Operations49 {
  CREATE: Create23[];
  DELETE: Delete14[];
  PDF: Pdf5[];
  QUERY: Query45[];
  READ: Read27[];
  SEND: Send5[];
  UPDATE: Update26[];
}

export interface Create23 {
  definition: Definition143;
  name: string;
  sections: Section143[];
}

export interface Definition143 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section143 {
  code: string;
  description?: string;
  model?: Model129;
  name: string;
}

export interface Model129 {
  $ref: string;
}

export interface Delete14 {
  definition: Definition144;
  description: string;
  name: string;
  sections: Section144[];
}

export interface Definition144 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section144 {
  code: string;
  model?: Model130;
  name: string;
  description?: string;
}

export interface Model130 {
  $ref: string;
}

export interface Pdf5 {
  definition: Definition145;
  name: string;
  sections: Section145[];
}

export interface Definition145 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section145 {
  code: string;
  description: string;
  name: string;
}

export interface Query45 {
  definition: Definition146;
  name: string;
  sections: Section146[];
}

export interface Definition146 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section146 {
  code: string;
  name: string;
  description?: string;
}

export interface Read27 {
  definition: Definition147;
  description: string;
  name: string;
  sections: Section147[];
}

export interface Definition147 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section147 {
  code: string;
  description: string;
  name: string;
}

export interface Send5 {
  definition: Definition148;
  description: string;
  name: string;
  sections: Section148[];
}

export interface Definition148 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section148 {
  code: string;
  description: string;
  name: string;
}

export interface Update26 {
  definition: Definition149;
  description: string;
  name: string;
  sections: Section149[];
}

export interface Definition149 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section149 {
  code: string;
  model?: Model131;
  name: string;
  description?: string;
}

export interface Model131 {
  $ref: string;
}

export interface RecurringTransaction {
  code: string;
  description: string;
  model: Model132;
  "model-header": string;
  operations: Operations50;
  title: string;
}

export interface Model132 {
  $ref: string;
}

export interface Operations50 {
  CREATE: Create24[];
  DELETE: Delete15[];
  QUERY: Query46[];
  READ: Read28[];
}

export interface Create24 {
  definition: Definition150;
  description: string;
  name: string;
  sections: Section150[];
}

export interface Definition150 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section150 {
  code: string;
  description: string;
  model?: Model133;
  name: string;
}

export interface Model133 {
  $ref: string;
}

export interface Delete15 {
  definition: Definition151;
  description: string;
  name: string;
  sections: Section151[];
}

export interface Definition151 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section151 {
  code: string;
  model?: Model134;
  name: string;
  description?: string;
}

export interface Model134 {
  $ref: string;
}

export interface Query46 {
  definition: Definition152;
  name: string;
  sections: Section152[];
}

export interface Definition152 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section152 {
  code: string;
  name: string;
  description?: string;
}

export interface Read28 {
  definition: Definition153;
  description: string;
  name: string;
  sections: Section153[];
}

export interface Definition153 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section153 {
  code: string;
  description: string;
  name: string;
}

export interface RefundReceipt {
  code: string;
  description: string;
  model: Model135;
  "model-header": string;
  operations: Operations51;
  title: string;
}

export interface Model135 {
  $ref: string;
}

export interface Operations51 {
  CREATE: Create25[];
  DELETE: Delete16[];
  PDF: Pdf6[];
  QUERY: Query47[];
  READ: Read29[];
  SEND: Send6[];
  UPDATE: Update27[];
}

export interface Create25 {
  definition: Definition154;
  description: string;
  name: string;
  sections: Section154[];
}

export interface Definition154 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section154 {
  code: string;
  description: string;
  model?: Model136;
  name: string;
}

export interface Model136 {
  $ref: string;
}

export interface Delete16 {
  definition: Definition155;
  description: string;
  name: string;
  sections: Section155[];
}

export interface Definition155 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section155 {
  code: string;
  model?: Model137;
  name: string;
  description?: string;
}

export interface Model137 {
  $ref: string;
}

export interface Pdf6 {
  definition: Definition156;
  name: string;
  sections: Section156[];
}

export interface Definition156 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section156 {
  code: string;
  description: string;
  name: string;
}

export interface Query47 {
  definition: Definition157;
  name: string;
  sections: Section157[];
}

export interface Definition157 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section157 {
  code: string;
  name: string;
  description?: string;
}

export interface Read29 {
  definition: Definition158;
  description: string;
  name: string;
  sections: Section158[];
}

export interface Definition158 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section158 {
  code: string;
  description: string;
  name: string;
}

export interface Send6 {
  definition: Definition159;
  description: string;
  name: string;
  sections: Section159[];
}

export interface Definition159 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section159 {
  code: string;
  description: string;
  name: string;
}

export interface Update27 {
  definition: Definition160;
  description: string;
  name: string;
  sections: Section160[];
}

export interface Definition160 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section160 {
  code: string;
  model?: Model138;
  name: string;
  description?: string;
}

export interface Model138 {
  $ref: string;
}

export interface ReimburseCharge {
  code: string;
  description: string;
  model: Model139;
  "model-header": string;
  operations: Operations52;
  title: string;
}

export interface Model139 {
  $ref: string;
}

export interface Operations52 {
  QUERY: Query48[];
  READ: Read30[];
}

export interface Query48 {
  definition: Definition161;
  name: string;
  sections: Section161[];
}

export interface Definition161 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section161 {
  code: string;
  name: string;
  description?: string;
}

export interface Read30 {
  definition: Definition162;
  description: string;
  name: string;
  sections: Section162[];
}

export interface Definition162 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section162 {
  code: string;
  description: string;
  name: string;
}

export interface SalesByClassSummary {
  code: string;
  description: string;
  model: Model140;
  "model-description": string;
  "model-header": string;
  operations: Operations53;
  title: string;
}

export interface Model140 {
  $ref: string;
}

export interface Operations53 {
  QUERY: Query49[];
}

export interface Query49 {
  definition: Definition163;
  name: string;
  sections: Section163[];
}

export interface Definition163 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section163 {
  description: string;
  model?: Model141;
  name: string;
  code?: string;
}

export interface Model141 {
  $ref: string;
}

export interface SalesByCustomer {
  code: string;
  description: string;
  model: Model142;
  "model-description": string;
  "model-header": string;
  operations: Operations54;
  title: string;
}

export interface Model142 {
  $ref: string;
}

export interface Operations54 {
  QUERY: Query50[];
}

export interface Query50 {
  definition: Definition164;
  name: string;
  sections: Section164[];
}

export interface Definition164 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section164 {
  description: string;
  model?: Model143;
  name: string;
  code?: string;
}

export interface Model143 {
  $ref: string;
}

export interface SalesByDepartment {
  code: string;
  description: string;
  model: Model144;
  "model-description": string;
  "model-header": string;
  operations: Operations55;
  title: string;
}

export interface Model144 {
  $ref: string;
}

export interface Operations55 {
  QUERY: Query51[];
}

export interface Query51 {
  definition: Definition165;
  name: string;
  sections: Section165[];
}

export interface Definition165 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section165 {
  description: string;
  model?: Model145;
  name: string;
  code?: string;
}

export interface Model145 {
  $ref: string;
}

export interface SalesByProduct {
  code: string;
  description: string;
  model: Model146;
  "model-description": string;
  "model-header": string;
  operations: Operations56;
  title: string;
}

export interface Model146 {
  $ref: string;
}

export interface Operations56 {
  QUERY: Query52[];
}

export interface Query52 {
  definition: Definition166;
  name: string;
  sections: Section166[];
}

export interface Definition166 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section166 {
  description: string;
  model?: Model147;
  name: string;
  code?: string;
}

export interface Model147 {
  $ref: string;
}

export interface SalesReceipt {
  code: string;
  description: string;
  model: Model148;
  "model-header": string;
  operations: Operations57;
  title: string;
}

export interface Model148 {
  $ref: string;
}

export interface Operations57 {
  CREATE: Create26[];
  DELETE: Delete17[];
  PDF: Pdf7[];
  QUERY: Query53[];
  READ: Read31[];
  SEND: Send7[];
  UPDATE: Update28[];
}

export interface Create26 {
  definition: Definition167;
  description: string;
  name: string;
  sections: Section167[];
}

export interface Definition167 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section167 {
  code: string;
  description: string;
  model?: Model149;
  name: string;
}

export interface Model149 {
  $ref: string;
}

export interface Delete17 {
  definition: Definition168;
  description: string;
  name: string;
  sections: Section168[];
}

export interface Definition168 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section168 {
  code: string;
  model?: Model150;
  name: string;
  description?: string;
}

export interface Model150 {
  $ref: string;
}

export interface Pdf7 {
  definition: Definition169;
  name: string;
  sections: Section169[];
}

export interface Definition169 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section169 {
  code: string;
  description: string;
  name: string;
}

export interface Query53 {
  definition: Definition170;
  name: string;
  sections: Section170[];
}

export interface Definition170 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section170 {
  code: string;
  name: string;
  description?: string;
}

export interface Read31 {
  definition: Definition171;
  description: string;
  name: string;
  sections: Section171[];
}

export interface Definition171 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section171 {
  code: string;
  description: string;
  name: string;
}

export interface Send7 {
  definition: Definition172;
  description: string;
  name: string;
  sections: Section172[];
}

export interface Definition172 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section172 {
  code: string;
  description: string;
  name: string;
}

export interface Update28 {
  definition: Definition173;
  description: string;
  name: string;
  sections: Section173[];
}

export interface Definition173 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section173 {
  code: string;
  model?: Model151;
  name: string;
  description?: string;
}

export interface Model151 {
  $ref: string;
}

export interface TaxAgency {
  code: string;
  description: string;
  model: Model152;
  "model-header": string;
  operations: Operations58;
  title: string;
}

export interface Model152 {
  $ref: string;
}

export interface Operations58 {
  CREATE: Create27[];
  QUERY: Query54[];
  READ: Read32[];
}

export interface Create27 {
  definition: Definition174;
  description: string;
  name: string;
  sections: Section174[];
}

export interface Definition174 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section174 {
  code: string;
  description: string;
  model?: Model153;
  name: string;
}

export interface Model153 {
  $ref: string;
}

export interface Query54 {
  definition: Definition175;
  name: string;
  sections: Section175[];
}

export interface Definition175 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section175 {
  code: string;
  name: string;
  description?: string;
}

export interface Read32 {
  definition: Definition176;
  description: string;
  name: string;
  sections: Section176[];
}

export interface Definition176 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section176 {
  code: string;
  description: string;
  name: string;
}

export interface TaxClassification {
  code: string;
  description: string;
  model: Model154;
  "model-header": string;
  operations: Operations59;
  title: string;
}

export interface Model154 {
  $ref: string;
}

export interface Operations59 {
  READ: Read33[];
}

export interface Read33 {
  definition: Definition177;
  description: string;
  name: string;
  sections: Section177[];
}

export interface Definition177 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section177 {
  code: string;
  description: string;
  name: string;
}

export interface TaxCode {
  code: string;
  description: string;
  model: Model155;
  "model-header": string;
  operations: Operations60;
  "optional-description": OptionalDescription13;
  title: string;
}

export interface Model155 {
  $ref: string;
}

export interface Operations60 {
  QUERY: Query55[];
  READ: Read34[];
}

export interface Query55 {
  definition: Definition178;
  name: string;
  sections: Section178[];
}

export interface Definition178 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section178 {
  code: string;
  name: string;
  description?: string;
}

export interface Read34 {
  definition: Definition179;
  description: string;
  name: string;
  sections: Section179[];
}

export interface Definition179 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section179 {
  code: string;
  description: string;
  name: string;
}

export interface OptionalDescription13 {
  description: string;
  heading: string;
}

export interface TaxPayment {
  code: string;
  description: string;
  model: Model156;
  "model-header": string;
  operations: Operations61;
  "optional-description": OptionalDescription14;
  title: string;
}

export interface Model156 {
  $ref: string;
}

export interface Operations61 {
  QUERY: Query56[];
  READ: Read35[];
}

export interface Query56 {
  definition: Definition180;
  name: string;
  sections: Section180[];
}

export interface Definition180 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section180 {
  code: string;
  name: string;
  description?: string;
}

export interface Read35 {
  definition: Definition181;
  description: string;
  name: string;
  sections: Section181[];
}

export interface Definition181 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section181 {
  code: string;
  description: string;
  name: string;
}

export interface OptionalDescription14 {
  heading: string;
}

export interface TaxRate {
  code: string;
  description: string;
  model: Model157;
  "model-header": string;
  operations: Operations62;
  "optional-description": OptionalDescription15;
  title: string;
}

export interface Model157 {
  $ref: string;
}

export interface Operations62 {
  QUERY: Query57[];
  READ: Read36[];
}

export interface Query57 {
  definition: Definition182;
  name: string;
  sections: Section182[];
}

export interface Definition182 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section182 {
  code: string;
  name: string;
  description?: string;
}

export interface Read36 {
  definition: Definition183;
  description: string;
  name: string;
  sections: Section183[];
}

export interface Definition183 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section183 {
  code: string;
  description: string;
  name: string;
}

export interface OptionalDescription15 {
  description: string;
  heading: string;
}

export interface TaxService {
  code: string;
  description: string;
  model: Model158;
  "model-header": string;
  operations: Operations63;
  "optional-description": OptionalDescription16;
  title: string;
}

export interface Model158 {
  $ref: string;
}

export interface Operations63 {
  CREATE: Create28[];
}

export interface Create28 {
  definition: Definition184;
  name: string;
  sections: Section184[];
}

export interface Definition184 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section184 {
  code: string;
  description: string;
  model?: Model159;
  name: string;
}

export interface Model159 {
  $ref: string;
}

export interface OptionalDescription16 {
  description: string;
  heading: string;
}

export interface TaxSummary {
  code: string;
  description: string;
  model: Model160;
  "model-description": string;
  "model-header": string;
  operations: Operations64;
  title: string;
}

export interface Model160 {
  $ref: string;
}

export interface Operations64 {
  QUERY: Query58[];
}

export interface Query58 {
  definition: Definition185;
  name: string;
  sections: Section185[];
}

export interface Definition185 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section185 {
  description: string;
  model?: Model161;
  name: string;
  code?: string;
}

export interface Model161 {
  $ref: string;
}

export interface Term {
  code: string;
  description: string;
  model: Model162;
  "model-header": string;
  operations: Operations65;
  title: string;
}

export interface Model162 {
  $ref: string;
}

export interface Operations65 {
  CREATE: Create29[];
  QUERY: Query59[];
  READ: Read37[];
  UPDATE: Update29[];
}

export interface Create29 {
  definition: Definition186;
  name: string;
  sections: Section186[];
}

export interface Definition186 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section186 {
  code: string;
  description: string;
  model?: Model163;
  name: string;
}

export interface Model163 {
  $ref: string;
}

export interface Query59 {
  definition: Definition187;
  name: string;
  sections: Section187[];
}

export interface Definition187 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section187 {
  code: string;
  name: string;
  description?: string;
}

export interface Read37 {
  definition: Definition188;
  description: string;
  name: string;
  sections: Section188[];
}

export interface Definition188 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section188 {
  code: string;
  description: string;
  name: string;
}

export interface Update29 {
  definition: Definition189;
  description: string;
  name: string;
  sections: Section189[];
}

export interface Definition189 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section189 {
  code: string;
  model?: Model164;
  name: string;
  description?: string;
}

export interface Model164 {
  $ref: string;
}

export interface TimeActivity {
  code: string;
  description: string;
  model: Model165;
  "model-header": string;
  operations: Operations66;
  title: string;
}

export interface Model165 {
  $ref: string;
}

export interface Operations66 {
  CREATE: Create30[];
  DELETE: Delete18[];
  QUERY: Query60[];
  READ: Read38[];
  UPDATE: Update30[];
}

export interface Create30 {
  definition: Definition190;
  name: string;
  sections: Section190[];
}

export interface Definition190 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section190 {
  code: string;
  description: string;
  model?: Model166;
  name: string;
}

export interface Model166 {
  $ref: string;
}

export interface Delete18 {
  definition: Definition191;
  description: string;
  name: string;
  sections: Section191[];
}

export interface Definition191 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section191 {
  code: string;
  model?: Model167;
  name: string;
  description?: string;
}

export interface Model167 {
  $ref: string;
}

export interface Query60 {
  definition: Definition192;
  name: string;
  sections: Section192[];
}

export interface Definition192 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section192 {
  code: string;
  name: string;
  description?: string;
}

export interface Read38 {
  definition: Definition193;
  description: string;
  name: string;
  sections: Section193[];
}

export interface Definition193 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section193 {
  code: string;
  description: string;
  name: string;
}

export interface Update30 {
  definition: Definition194;
  description: string;
  name: string;
  sections: Section194[];
}

export interface Definition194 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section194 {
  code: string;
  model?: Model168;
  name: string;
  description?: string;
}

export interface Model168 {
  $ref: string;
}

export interface TransactionList {
  code: string;
  description: string;
  model: Model169;
  "model-description": string;
  "model-header": string;
  operations: Operations67;
  title: string;
}

export interface Model169 {
  $ref: string;
}

export interface Operations67 {
  QUERY: Query61[];
}

export interface Query61 {
  definition: Definition195;
  name: string;
  sections: Section195[];
}

export interface Definition195 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section195 {
  description: string;
  model?: Model170;
  name: string;
  code?: string;
}

export interface Model170 {
  $ref: string;
}

export interface TransactionListByCustomer {
  code: string;
  description: string;
  model: Model171;
  "model-description": string;
  "model-header": string;
  operations: Operations68;
  title: string;
}

export interface Model171 {
  $ref: string;
}

export interface Operations68 {
  QUERY: Query62[];
}

export interface Query62 {
  definition: Definition196;
  name: string;
  sections: Section196[];
}

export interface Definition196 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section196 {
  description: string;
  model?: Model172;
  name: string;
  code?: string;
}

export interface Model172 {
  $ref: string;
}

export interface TransactionListByVendor {
  code: string;
  description: string;
  model: Model173;
  "model-description": string;
  "model-header": string;
  operations: Operations69;
  title: string;
}

export interface Model173 {
  $ref: string;
}

export interface Operations69 {
  QUERY: Query63[];
}

export interface Query63 {
  definition: Definition197;
  name: string;
  sections: Section197[];
}

export interface Definition197 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section197 {
  description: string;
  model?: Model174;
  name: string;
  code?: string;
}

export interface Model174 {
  $ref: string;
}

export interface TransactionListWithSplits {
  code: string;
  description: string;
  model: Model175;
  "model-description": string;
  "model-header": string;
  operations: Operations70;
  title: string;
}

export interface Model175 {
  $ref: string;
}

export interface Operations70 {
  QUERY: Query64[];
}

export interface Query64 {
  definition: Definition198;
  name: string;
  sections: Section198[];
}

export interface Definition198 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section198 {
  description: string;
  model?: Model176;
  name: string;
  code?: string;
}

export interface Model176 {
  $ref: string;
}

export interface Transfer {
  code: string;
  description: string;
  model: Model177;
  "model-header": string;
  operations: Operations71;
  "optional-description": OptionalDescription17;
  title: string;
}

export interface Model177 {
  $ref: string;
}

export interface Operations71 {
  CREATE: Create31[];
  DELETE: Delete19[];
  QUERY: Query65[];
  READ: Read39[];
  UPDATE: Update31[];
}

export interface Create31 {
  definition: Definition199;
  name: string;
  sections: Section199[];
}

export interface Definition199 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section199 {
  code: string;
  description: string;
  model?: Model178;
  name: string;
}

export interface Model178 {
  $ref: string;
}

export interface Delete19 {
  definition: Definition200;
  description: string;
  name: string;
  sections: Section200[];
}

export interface Definition200 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section200 {
  code: string;
  model?: Model179;
  name: string;
  description?: string;
}

export interface Model179 {
  $ref: string;
}

export interface Query65 {
  definition: Definition201;
  name: string;
  sections: Section201[];
}

export interface Definition201 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section201 {
  code: string;
  name: string;
  description?: string;
}

export interface Read39 {
  definition: Definition202;
  description: string;
  name: string;
  sections: Section202[];
}

export interface Definition202 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section202 {
  code: string;
  description: string;
  name: string;
}

export interface Update31 {
  definition: Definition203;
  description: string;
  name: string;
  sections: Section203[];
}

export interface Definition203 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section203 {
  code: string;
  model?: Model180;
  name: string;
  description?: string;
}

export interface Model180 {
  $ref: string;
}

export interface OptionalDescription17 {
  description: string;
  heading: string;
}

export interface TrialBalance {
  code: string;
  description: string;
  model: Model181;
  "model-description": string;
  "model-header": string;
  operations: Operations72;
  title: string;
}

export interface Model181 {
  $ref: string;
}

export interface Operations72 {
  QUERY: Query66[];
}

export interface Query66 {
  definition: Definition204;
  name: string;
  sections: Section204[];
}

export interface Definition204 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section204 {
  description: string;
  model?: Model182;
  name: string;
  code?: string;
}

export interface Model182 {
  $ref: string;
}

export interface Vendor {
  code: string;
  description: string;
  model: Model183;
  "model-header": string;
  operations: Operations73;
  "optional-description": OptionalDescription18;
  title: string;
}

export interface Model183 {
  $ref: string;
}

export interface Operations73 {
  CREATE: Create32[];
  QUERY: Query67[];
  READ: Read40[];
  UPDATE: Update32[];
}

export interface Create32 {
  definition: Definition205;
  description: string;
  name: string;
  sections: Section205[];
}

export interface Definition205 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section205 {
  code: string;
  description: string;
  model?: Model184;
  name: string;
}

export interface Model184 {
  $ref: string;
}

export interface Query67 {
  definition: Definition206;
  name: string;
  sections: Section206[];
}

export interface Definition206 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section206 {
  code: string;
  name: string;
  description?: string;
}

export interface Read40 {
  definition: Definition207;
  description: string;
  name: string;
  sections: Section207[];
}

export interface Definition207 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section207 {
  code: string;
  description: string;
  name: string;
}

export interface Update32 {
  definition: Definition208;
  description: string;
  name: string;
  sections: Section208[];
}

export interface Definition208 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section208 {
  code: string;
  model?: Model185;
  name: string;
  description?: string;
}

export interface Model185 {
  $ref: string;
}

export interface OptionalDescription18 {
  description: string;
  heading: string;
}

export interface VendorBalance {
  code: string;
  description: string;
  model: Model186;
  "model-description": string;
  "model-header": string;
  operations: Operations74;
  title: string;
}

export interface Model186 {
  $ref: string;
}

export interface Operations74 {
  QUERY: Query68[];
}

export interface Query68 {
  definition: Definition209;
  name: string;
  sections: Section209[];
}

export interface Definition209 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section209 {
  description: string;
  model?: Model187;
  name: string;
  code?: string;
}

export interface Model187 {
  $ref: string;
}

export interface VendorBalanceDetail {
  code: string;
  description: string;
  model: Model188;
  "model-description": string;
  "model-header": string;
  operations: Operations75;
  title: string;
}

export interface Model188 {
  $ref: string;
}

export interface Operations75 {
  QUERY: Query69[];
}

export interface Query69 {
  definition: Definition210;
  name: string;
  sections: Section210[];
}

export interface Definition210 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section210 {
  description: string;
  model?: Model189;
  name: string;
  code?: string;
}

export interface Model189 {
  $ref: string;
}

export interface VendorCredit {
  code: string;
  description: string;
  model: Model190;
  "model-header": string;
  operations: Operations76;
  title: string;
}

export interface Model190 {
  $ref: string;
}

export interface Operations76 {
  CREATE: Create33[];
  DELETE: Delete20[];
  QUERY: Query70[];
  READ: Read41[];
  UPDATE: Update33[];
}

export interface Create33 {
  definition: Definition211;
  description: string;
  name: string;
  sections: Section211[];
}

export interface Definition211 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section211 {
  code: string;
  description: string;
  model?: Model191;
  name: string;
}

export interface Model191 {
  $ref: string;
}

export interface Delete20 {
  definition: Definition212;
  description: string;
  name: string;
  sections: Section212[];
}

export interface Definition212 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section212 {
  code: string;
  model?: Model192;
  name: string;
  description?: string;
}

export interface Model192 {
  $ref: string;
}

export interface Query70 {
  definition: Definition213;
  name: string;
  sections: Section213[];
}

export interface Definition213 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section213 {
  code: string;
  name: string;
  description?: string;
}

export interface Read41 {
  definition: Definition214;
  description: string;
  name: string;
  sections: Section214[];
}

export interface Definition214 {
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section214 {
  code: string;
  description: string;
  name: string;
}

export interface Update33 {
  definition: Definition215;
  description: string;
  name: string;
  sections: Section215[];
}

export interface Definition215 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section215 {
  code: string;
  model?: Model193;
  name: string;
  description?: string;
}

export interface Model193 {
  $ref: string;
}

export interface VendorExpenses {
  code: string;
  description: string;
  model: Model194;
  "model-description": string;
  "model-header": string;
  operations: Operations77;
  title: string;
}

export interface Model194 {
  $ref: string;
}

export interface Operations77 {
  QUERY: Query71[];
}

export interface Query71 {
  definition: Definition216;
  name: string;
  sections: Section216[];
}

export interface Definition216 {
  "Accept type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section216 {
  description: string;
  model?: Model195;
  name: string;
  code?: string;
}

export interface Model195 {
  $ref: string;
}

export interface Qbpayments {
  BankAccounts: BankAccounts;
  Cards: Cards;
  Charges: Charges;
  EChecks: Echecks;
  PaymentReceipt: PaymentReceipt;
  Tokens: Tokens;
}

export interface BankAccounts {
  code: string;
  description: string;
  locales: string[];
  model: Model196;
  "model-description": string;
  "model-header": string;
  operations: Operations78;
  title: string;
}

export interface Model196 {
  $ref: string;
}

export interface Operations78 {
  CREATE: Create34[];
  DELETE: Delete21[];
  READ: Read42[];
}

export interface Create34 {
  definition: Definition217;
  description: string;
  name: string;
  sections: Section217[];
}

export interface Definition217 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section217 {
  description?: string;
  model?: Model197;
  name: string;
  code?: string;
}

export interface Model197 {
  $ref: string;
}

export interface Delete21 {
  definition: Definition218;
  description: string;
  name: string;
  sections: Section218[];
}

export interface Definition218 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section218 {
  description?: string;
  model?: Model198;
  name: string;
  code?: string;
}

export interface Model198 {
  $ref: string;
}

export interface Read42 {
  definition: Definition219;
  description: string;
  name: string;
  sections: Section219[];
}

export interface Definition219 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section219 {
  description?: string;
  model?: Model199;
  name: string;
  code?: string;
}

export interface Model199 {
  $ref: string;
}

export interface Cards {
  code: string;
  description: string;
  locales: string[];
  model: Model200;
  "model-description": string;
  "model-header": string;
  operations: Operations79;
  title: string;
}

export interface Model200 {
  $ref: string;
}

export interface Operations79 {
  CREATE: Create35[];
  DELETE: Delete22[];
  READ: Read43[];
}

export interface Create35 {
  definition: Definition220;
  description: string;
  name: string;
  sections: Section220[];
}

export interface Definition220 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section220 {
  description?: string;
  model?: Model201;
  name: string;
  code?: string;
}

export interface Model201 {
  $ref: string;
}

export interface Delete22 {
  definition: Definition221;
  description: string;
  name: string;
  sections: Section221[];
}

export interface Definition221 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section221 {
  description?: string;
  model?: Model202;
  name: string;
  code?: string;
}

export interface Model202 {
  $ref: string;
}

export interface Read43 {
  definition: Definition222;
  description: string;
  name: string;
  sections: Section222[];
}

export interface Definition222 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section222 {
  description?: string;
  model?: Model203;
  name: string;
  code?: string;
}

export interface Model203 {
  $ref: string;
}

export interface Charges {
  code: string;
  description: string;
  locales: string[];
  model: Model204;
  "model-description": string;
  "model-header": string;
  operations: Operations80;
  title: string;
}

export interface Model204 {
  $ref: string;
}

export interface Operations80 {
  CREATE: Create36[];
  READ: Read44[];
  UPDATE: Update34[];
  VOID: Void[];
}

export interface Create36 {
  definition: Definition223;
  description: string;
  name: string;
  sections: Section223[];
}

export interface Definition223 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section223 {
  description: string;
  model?: Model205;
  name: string;
  code?: string;
}

export interface Model205 {
  $ref: string;
}

export interface Read44 {
  definition: Definition224;
  description: string;
  name: string;
  sections: Section224[];
}

export interface Definition224 {
  "Content type"?: string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section224 {
  description?: string;
  model?: Model206;
  name: string;
  code?: string;
}

export interface Model206 {
  $ref: string;
}

export interface Update34 {
  definition: Definition225;
  description: string;
  name: string;
  sections: Section225[];
}

export interface Definition225 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section225 {
  description?: string;
  model?: Model207;
  name: string;
  code?: string;
}

export interface Model207 {
  $ref: string;
}

export interface Void {
  definition: Definition226;
  description: string;
  name: string;
  sections: Section226[];
}

export interface Definition226 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section226 {
  description?: string;
  model: Model208;
  name: string;
  code?: string;
}

export interface Model208 {
  $ref: string;
}

export interface Echecks {
  code: string;
  description: string;
  locales: string[];
  model: Model209;
  "model-description": string;
  "model-header": string;
  operations: Operations81;
  title: string;
}

export interface Model209 {
  $ref: string;
}

export interface Operations81 {
  CREATE: Create37[];
  READ: Read45[];
  VOID: Void2[];
}

export interface Create37 {
  definition: Definition227;
  description: string;
  name: string;
  sections: Section227[];
}

export interface Definition227 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section227 {
  description: string;
  model?: Model210;
  name: string;
  code?: string;
}

export interface Model210 {
  $ref: string;
}

export interface Read45 {
  definition: Definition228;
  description: string;
  name: string;
  sections: Section228[];
}

export interface Definition228 {
  "Content type"?: string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section228 {
  description?: string;
  model?: Model211;
  name: string;
  code?: string;
}

export interface Model211 {
  $ref: string;
}

export interface Void2 {
  definition: Definition229;
  description: string;
  name: string;
  sections: Section229[];
}

export interface Definition229 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section229 {
  description?: string;
  model?: Model212;
  name: string;
  code?: string;
}

export interface Model212 {
  $ref: string;
}

export interface PaymentReceipt {
  code: string;
  description: string;
  locales: string[];
  model: Model213;
  "model-description": string;
  "model-header": string;
  operations: Operations82;
  "optional-description": OptionalDescription19;
  title: string;
}

export interface Model213 {
  $ref: string;
}

export interface Operations82 {
  READ: Read46[];
}

export interface Read46 {
  definition: Definition230;
  name: string;
  sections: Section230[];
}

export interface Definition230 {
  Accept: string;
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section230 {
  description?: string;
  model?: Model214;
  name: string;
}

export interface Model214 {
  $ref: string;
}

export interface OptionalDescription19 {
  description: string;
  heading: string;
}

export interface Tokens {
  code: string;
  description: string;
  locales: string[];
  model: Model215;
  "model-description": string;
  "model-header": string;
  operations: Operations83;
  "optional-description": OptionalDescription20;
  title: string;
}

export interface Model215 {
  $ref: string;
}

export interface Operations83 {
  CREATE: Create38[];
}

export interface Create38 {
  definition: Definition231;
  description: string;
  name: string;
  sections: Section231[];
}

export interface Definition231 {
  "Content type": string;
  Operation: string;
  "Production Base URL": string;
  "Sandbox Base URL": string;
}

export interface Section231 {
  description: string;
  model?: Model216;
  name: string;
  code?: string;
}

export interface Model216 {
  $ref: string;
}

export interface OptionalDescription20 {
  description: string;
  heading: string;
}
