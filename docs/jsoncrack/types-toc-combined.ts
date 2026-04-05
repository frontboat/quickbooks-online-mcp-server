// https://static.developer.intuit.com/JSONObjects/TocJsonObject_v1.json

export type Root = {
  qbpayments: {
    name: string;
    childAttributes: {
      resources: {
        name: string;
        childAttributes: {
          "all-entities": {
            entityList: Array<string>;
            name: string;
            childAttributes: {
              bankaccounts: string;
              cards: string;
              charges: string;
              echecks: string;
              tokens: string;
              paymentreceipt: string;
            };
          };
        };
      };
    };
  };
  qbo: {
    name: string;
    childAttributes: {
      accounting: {
        name: string;
        childAttributes: {
          "all-entities": {
            entityList: Array<string>;
            name: string;
            childAttributes: {
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
            };
          };
          "most-commonly-used": {
            entityList: Array<string>;
            name: string;
            childAttributes: {
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
            };
          };
          ecommerce: {
            entityList: Array<string>;
            name: string;
            childAttributes: {
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
            };
          };
          "report-entities": {
            entityList: Array<string>;
            name: string;
            childAttributes: {
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
            };
          };
        };
      };
    };
  };
};
