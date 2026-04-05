// src/reports/report-metadata.ts

/**
 * Metadata for a single QuickBooks report.
 * Maps a stable report ID to its node-quickbooks method, query schema, and human-readable info.
 */
export interface ReportMetadata {
  /** Stable identifier used as the report_id in tool calls (e.g. "profit_and_loss"). */
  id: string;
  /** Human-readable title (e.g. "Profit and Loss"). */
  title: string;
  /** One-line description of what the report shows. */
  description: string;
  /** The node-quickbooks method to invoke on the QB client. */
  qbMethod: string;
  /** Key into report-schemas.json for this report's parameter schema. */
  schemaKey: string;
}

/**
 * Complete registry of supported QuickBooks reports.
 * Covers every report method exposed by node-quickbooks (29 reports).
 */
export const REPORTS: ReportMetadata[] = [
  {
    id: "profit_and_loss",
    title: "Profit and Loss",
    description: "Income Statement. Shows revenue, COGS, expenses, and net income for a date range.",
    qbMethod: "reportProfitAndLoss",
    schemaKey: "profitandlossquery",
  },
  {
    id: "profit_and_loss_detail",
    title: "Profit and Loss Detail",
    description: "Line-item detail for every transaction contributing to P&L totals.",
    qbMethod: "reportProfitAndLossDetail",
    schemaKey: "profitandlossdetailquery",
  },
  {
    id: "balance_sheet",
    title: "Balance Sheet",
    description: "Assets, liabilities, and equity as of a specific date.",
    qbMethod: "reportBalanceSheet",
    schemaKey: "balancesheetquery",
  },
  {
    id: "cash_flow",
    title: "Cash Flow",
    description: "Statement of cash flows — operating, investing, and financing activities.",
    qbMethod: "reportCashFlow",
    schemaKey: "cashflowquery",
  },
  {
    id: "trial_balance",
    title: "Trial Balance",
    description: "Debit and credit balances for all accounts.",
    qbMethod: "reportTrialBalance",
    schemaKey: "trialbalancequery",
  },
  {
    id: "trial_balance_fr",
    title: "Trial Balance (France)",
    description: "French-localized trial balance report.",
    qbMethod: "reportTrialBalanceFR",
    schemaKey: "trialbalancequery",
  },
  {
    id: "general_ledger",
    title: "General Ledger Detail",
    description: "All transactions posted to each account with running balances.",
    qbMethod: "reportGeneralLedgerDetail",
    schemaKey: "generalledgerquery",
  },
  {
    id: "journal",
    title: "Journal Report",
    description: "All journal entries with debits and credits for a date range.",
    qbMethod: "reportJournalReport",
    schemaKey: "journalreportquery",
  },
  {
    id: "account_list",
    title: "Account List Detail",
    description: "All accounts with types, detail types, descriptions, and balances.",
    qbMethod: "reportAccountListDetail",
    schemaKey: "accountlistquery",
  },
  {
    id: "customer_sales",
    title: "Customer Sales",
    description: "Total sales broken down by customer.",
    qbMethod: "reportCustomerSales",
    schemaKey: "customersalesquery",
  },
  {
    id: "customer_income",
    title: "Customer Income",
    description: "Income received from each customer.",
    qbMethod: "reportCustomerIncome",
    schemaKey: "customerincomequery",
  },
  {
    id: "customer_balance",
    title: "Customer Balance Summary",
    description: "Outstanding balances owed by each customer.",
    qbMethod: "reportCustomerBalance",
    schemaKey: "customerbalancequery",
  },
  {
    id: "customer_balance_detail",
    title: "Customer Balance Detail",
    description: "Individual open transactions per customer.",
    qbMethod: "reportCustomerBalanceDetail",
    schemaKey: "customerbalancedetailquery",
  },
  {
    id: "aged_receivables",
    title: "Aged Receivables Summary",
    description: "Money owed to you grouped by aging period (Current, 1-30, 31-60, 61-90, 91+ days).",
    qbMethod: "reportAgedReceivables",
    schemaKey: "agedreceivablesquery",
  },
  {
    id: "aged_receivables_detail",
    title: "Aged Receivables Detail",
    description: "Individual overdue invoices grouped by aging period.",
    qbMethod: "reportAgedReceivableDetail",
    schemaKey: "agedreceivabledetailquery",
  },
  {
    id: "vendor_balance",
    title: "Vendor Balance Summary",
    description: "Outstanding balances owed to each vendor.",
    qbMethod: "reportVendorBalance",
    schemaKey: "vendorbalancequery",
  },
  {
    id: "vendor_balance_detail",
    title: "Vendor Balance Detail",
    description: "Individual open bills per vendor.",
    qbMethod: "reportVendorBalanceDetail",
    schemaKey: "vendorbalancedetailquery",
  },
  {
    id: "aged_payables",
    title: "Aged Payables Summary",
    description: "Money you owe grouped by aging period (Current, 1-30, 31-60, 61-90, 91+ days).",
    qbMethod: "reportAgedPayables",
    schemaKey: "agedpayablesquery",
  },
  {
    id: "aged_payables_detail",
    title: "Aged Payables Detail",
    description: "Individual overdue bills grouped by aging period.",
    qbMethod: "reportAgedPayableDetail",
    schemaKey: "agedpayabledetailquery",
  },
  {
    id: "vendor_expenses",
    title: "Vendor Expenses",
    description: "Total expenses broken down by vendor.",
    qbMethod: "reportVendorExpenses",
    schemaKey: "vendorexpensesquery",
  },
  {
    id: "item_sales",
    title: "Item Sales",
    description: "Sales broken down by product/service item.",
    qbMethod: "reportItemSales",
    schemaKey: "itemsalesquery",
  },
  {
    id: "inventory_valuation",
    title: "Inventory Valuation Summary",
    description: "Quantity on hand, average cost, and total value per inventory item.",
    qbMethod: "reportInventoryValuationSummary",
    schemaKey: "inventoryvaluationquery",
  },
  {
    id: "transaction_list",
    title: "Transaction List",
    description: "All transactions for a date range — highly customizable with 32 filter parameters.",
    qbMethod: "reportTransactionList",
    schemaKey: "transactionlistquery",
  },
  {
    id: "transaction_list_with_splits",
    title: "Transaction List with Splits",
    description: "All transactions with their line-item splits.",
    qbMethod: "reportTransactionListWithSplits",
    schemaKey: "transactionlistwithsplitsquery",
  },
  {
    id: "transaction_list_by_customer",
    title: "Transaction List by Customer",
    description: "All transactions grouped by customer.",
    qbMethod: "reportTransactionListByCustomer",
    schemaKey: "transactionlistbycustomerquery",
  },
  {
    id: "transaction_list_by_vendor",
    title: "Transaction List by Vendor",
    description: "All transactions grouped by vendor.",
    qbMethod: "reportTransactionListByVendor",
    schemaKey: "transactionlistbyvendorquery",
  },
  {
    id: "tax_summary",
    title: "Tax Summary",
    description: "Taxable and non-taxable sales and purchases with tax amounts.",
    qbMethod: "reportTaxSummary",
    schemaKey: "taxsummaryquery",
  },
  {
    id: "department_sales",
    title: "Department Sales",
    description: "Sales broken down by department/location.",
    qbMethod: "reportDepartmentSales",
    schemaKey: "departmentsalesquery",
  },
  {
    id: "class_sales",
    title: "Class Sales",
    description: "Sales broken down by class.",
    qbMethod: "reportClassSales",
    schemaKey: "classsalesquery",
  },
];

/** Lookup map by report ID for O(1) access. */
export const REPORTS_BY_ID: Record<string, ReportMetadata> = Object.fromEntries(
  REPORTS.map((r) => [r.id, r]),
);
