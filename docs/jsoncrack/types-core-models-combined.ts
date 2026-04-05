export type Root = {
  models: {
    qbpayments: {
      echeckrefundidretrieve: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          echeck_id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          refund_id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      lodging: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          LengthOfStay: {
            type: string;
            description: string;
          };
          CheckInDate: {
            type: string;
            description: string;
          };
          RoomRate: {
            type: string;
            description: string;
          };
          SpecialProgram: {
            type: string;
            description: string;
          };
          ChargeType: {
            type: string;
            description: string;
          };
          FolioID: {
            maxLen: string;
            type: string;
            description: string;
          };
          ExtraCharges: {
            type: string;
            description: string;
          };
          CheckOutDate: {
            type: string;
            description: string;
          };
          TotalAuthAmount: {
            type: string;
            description: string;
          };
        };
      };
      bankaccountretrieve: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      chargerequestid: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          charge_request_id: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      bankaccountid: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          bankaccount_id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      echeckrefundresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          Status: {
            readOnly: boolean;
            systemDefined: boolean;
            type: string;
            description: string;
            extra: Array<string>;
          };
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Created: {
            readOnly: boolean;
            systemDefined: boolean;
            type: string;
            description: string;
            extra: Array<string>;
          };
          Amount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Context: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Type: {
            description: string;
            type: string;
            requiredFlag: string;
            extra: Array<string>;
          };
          Id: {
            description: string;
            type: string;
            requiredFlag: string;
            extra: Array<string>;
          };
        };
      };
      cardid: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          card_id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      refundresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Status: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Description: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Created: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Amount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Context: {
            $ref: Array<{
              paymentcontext: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Type: {
            systemDefined: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
        };
      };
      capturerequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Amount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Description: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Context: {
            $ref: Array<{
              paymentcontext: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      txnrequestresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Status: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Created: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Amount: {
            type: string;
            description: string;
          };
          Context: {
            type: string;
            description: string;
            $ref: Array<{
              txnrequestcontext: string;
            }>;
          };
          Type: {
            type: string;
            description: string;
            extra: Array<string>;
          };
          Id: {
            type: string;
            description: string;
            systemDefined: boolean;
          };
        };
      };
      checkquery: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      bankaccount: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          Updated: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          entityType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Name: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          AccountNumber: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Default: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Country: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Created: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          InputType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Phone: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          AccountType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          BankCode: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          entityId: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          RoutingNumber: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
        };
      };
      txnrequestcontext: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Mobile: {
            default: boolean;
            type: string;
            description: string;
          };
          Recurring: {
            default: boolean;
            type: string;
            description: string;
          };
        };
      };
      cardrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Name: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Default: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Number: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          CommercialCardCode: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ExpMonth: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Address: {
            $ref: Array<{
              address: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ExpYear: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          IsBusiness: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Cvc: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      cvvVerification: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          Date: {
            description: string;
            type: string;
            requiredFlag: string;
            extra: Array<string>;
          };
          Result: {
            description: string;
            type: string;
            requiredFlag: string;
            extra: Array<string>;
          };
        };
      };
      bankaccountquery: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      echeckrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          BankAccount: {
            type: string;
            description: string;
          };
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          CheckNumber: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          PaymentMode: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Token: {
            type: string;
            description: string;
          };
          BankAccountOnFile: {
            type: string;
            description: string;
          };
          Amount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Context: {
            $ref: Array<{
              checkcontext: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      chargequery: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      paymentreceipt: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          clientTransID: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      captureresponse: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Amount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Description: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Context: {
            $ref: Array<{
              paymentcontext: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Created: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
        };
      };
      restaurant: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          BeverageAmount: {
            type: string;
            description: string;
          };
          ServerID: {
            maxLen: string;
            type: string;
            description: string;
          };
          TaxAmount: {
            type: string;
            description: string;
          };
          FoodAmount: {
            type: string;
            description: string;
          };
          TipAmount: {
            type: string;
            description: string;
          };
        };
      };
      paymentcontext: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Restaurant: {
            type: string;
            description: string;
            $ref: Array<{
              restaurant: string;
            }>;
          };
          Mobile: {
            default: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Tax: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          IsEcommerce: {
            default: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DeviceInfo: {
            $ref: Array<{
              deviceinfo: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Lodging: {
            type: string;
            description: string;
            $ref: Array<{
              lodging: string;
            }>;
          };
          Recurring: {
            default: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      cardquery: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      cardpresent: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Track1: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          PinBlock: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Track2: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Ksn: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      checkcontext: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          DeviceInfo: {
            $ref: Array<{
              deviceinfo: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      echeckrefundrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Amount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Description: {
            maxLen: string;
            description: string;
            type: string;
            requiredFlag: string;
            extra: Array<string>;
          };
          Context: {
            requiredFlag: string;
            $ref: Array<{
              checkcontext: string;
            }>;
            type: string;
            description: string;
            extra: Array<string>;
          };
        };
      };
      cardidretrieve: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          card_id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      bankaccountrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Name: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          AccountNumber: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Default: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Country: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Phone: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          AccountType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          BankCode: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          RoutingNumber: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          InputType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      refundquery: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          refund_id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      requestid: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          "Request-Id": {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      address: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          PostalCode: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          City: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          StreetAddress: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Region: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Country: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      tokenrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          BankAccount: {
            $ref: Array<{
              bankaccount: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Card: {
            $ref: Array<{
              card: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      card: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          Updated: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          Name: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          IsLevel3Eligible: {
            systemDefined: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Created: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Default: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          entityType: {
            type: string;
            description: string;
          };
          CommercialCardCode: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Number: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ExpMonth: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          CardType: {
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          Address: {
            $ref: Array<{
              address: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ExpYear: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          entityId: {
            type: string;
            description: string;
          };
          IsBusiness: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          Cvc: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          zeroDollarVerification: {
            available: string;
            description: string;
            requiredFlag: string;
            systemDefined: boolean;
            type: string;
            $ref: Array<{
              zerodollarverification: string;
            }>;
          };
        };
      };
      echeckresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          Status: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          BankAccount: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Description: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Created: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          CheckNumber: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          AuthCode: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          PaymentMode: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Token: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          BankAccountOnFile: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Context: {
            $ref: Array<{
              deviceinfo: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
        };
      };
      bankaccountidretrieve: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          bankaccount_id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      chargeresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          Status: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Capture: {
            default: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Created: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          AuthCode: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          CaptureDetail: {
            readOnly: boolean;
            $ref: Array<{
              captureresponse: string;
            }>;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          RefundDetail: {
            $ref: Array<{
              refundresponse: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          AvsZip: {
            systemDefined: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Currency: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Amount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Token: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Context: {
            $ref: Array<{
              paymentcontext: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CardSecurityCodeMatch: {
            systemDefined: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          AvsStreet: {
            systemDefined: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            systemDefined: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Card: {
            $ref: Array<{
              card: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      errortype: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          Errors: {
            requiredFlag: string;
            $ref: Array<{
              error: string;
            }>;
            type: string;
            description: string;
            extra: Array<string>;
          };
        };
      };
      deviceinfo: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          MacAddress: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Encrypted: {
            description: string;
            type: string;
            requiredFlag: string;
            extra: Array<string>;
          };
          IpAddress: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Longitude: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          PhoneNumber: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Latitude: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Type: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
        };
      };
      cardqueryretrieve: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      token: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Value: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      bankaccountiddelete: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          bankaccount_id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      error: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Type: {
            type: string;
            description: string;
          };
          Detail: {
            type: string;
            description: string;
          };
          Error: {
            type: string;
            description: string;
          };
          Message: {
            type: string;
            description: string;
          };
          MoreInfo: {
            type: string;
            description: string;
          };
          InfoLink: {
            type: string;
            description: string;
          };
        };
      };
      refundrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Amount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Description: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Context: {
            $ref: Array<{
              paymentcontext: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      chargerequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Capture: {
            default: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Token: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Currency: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Amount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Context: {
            $ref: Array<{
              paymentcontext: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CardOnFile: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Card: {
            $ref: Array<{
              card: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      zerodollarverification: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Status: {
            type: string;
            description: string;
          };
          TransactionId: {
            readOnly: boolean;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Type: {
            readOnly: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
    };
    qbo: {
      balancesheetreporttoplevel: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Header: {
            description: string;
            $ref: Array<{
              reportheader: string;
            }>;
          };
          Rows: {
            description: string;
            $ref: Array<{
              balancesheetreportrows: string;
            }>;
          };
          Columns: {
            description: string;
            $ref: Array<{
              reportcolumns: string;
            }>;
          };
        };
      };
      classresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          Name: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          FullyQualifiedName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          SubClass: {
            systemDefined: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ParentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Active: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              modificationmetadata: string;
            }>;
          };
        };
      };
      cashflowquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          vendor: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          class: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          item: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          summarize_column_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      transactionlistwithsplitsquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          docnum: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          name: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          end_date: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          payment_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          source_account_type: {
            default: string;
            table: {
              account_types: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
          transaction_type: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          group_by: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          columns: {
            default: string;
            table: {
              columns_tax: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      cashbackinfo: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          AccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Memo: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      itemadjustmentlinedetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          QtyDiff: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ItemRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      attachablerequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          Note: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          AttachableRef: {
            $ref: Array<{
              attachableref: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          FileName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
        };
      };
      preferencesresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          EmailMessagesPrefs: {
            $ref: Array<{
              emailmessagesprefs: string;
            }>;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          ProductAndServicesPrefs: {
            $ref: Array<{
              productandservicesprefs: string;
            }>;
          };
          ReportPrefs: {
            $ref: Array<{
              reportprefs: string;
            }>;
          };
          AccountingInfoPrefs: {
            description: string;
            $ref: Array<{
              accountinginfoprefs: string;
            }>;
          };
          SalesFormsPrefs: {
            $ref: Array<{
              salesformspref: string;
            }>;
          };
          VendorAndPurchasesPrefs: {
            $ref: Array<{
              vendorandpurchaseprefs: string;
            }>;
          };
          TaxPrefs: {
            $ref: Array<{
              taxprefs: string;
            }>;
          };
          OtherPrefs: {
            table: {
              otherprefs: Array<string>;
            };
            description: string;
          };
          TimeTrackingPrefs: {
            $ref: Array<{
              timetrackingprefs: string;
            }>;
          };
          CurrencyPrefs: {
            $ref: Array<{
              currencyprefs: string;
            }>;
          };
          Id: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      reimburselinedetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxCodeRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          MarkupInfo: {
            $ref: Array<{
              markupinfo: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ItemAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ItemRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      discountlinedetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxCodeRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DiscountAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PercentBased: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          DiscountPercent: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      datetime: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          dateTime: {
            type: string;
            description: string;
          };
        };
      };
      profitandlossreporttoplevel: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Header: {
            description: string;
            $ref: Array<{
              reportheader: string;
            }>;
          };
          Rows: {
            description: string;
            $ref: Array<{
              profitandlossreportrows: string;
            }>;
          };
          Columns: {
            description: string;
            $ref: Array<{
              reportcolumns: string;
            }>;
          };
        };
      };
      purchaserequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          PaymentType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          AccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              accountbasedexpenseline: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      billrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          VendorRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              accountbasedexpenseline: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      threshold: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          currentCount: {
            type: string;
            description: string;
          };
          aboveThreshold: {
            type: string;
            description: string;
          };
          enforced: {
            type: string;
            description: string;
          };
          limit: {
            type: string;
            description: string;
          };
          name: {
            type: string;
            description: string;
          };
        };
      };
      inventoryadjustmentrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          DocNumber: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          AdjustAccountRef: {
            description: string;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          PrivateNote: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              itemadjustmentline: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          TxnDate: {
            $ref: Array<{
              datetime: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      checkpayment: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          CheckNum: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Status: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          NameOnAcct: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          AcctNum: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          BankName: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      itembasedexpenselinebill: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          "LinkedTxn [0..n]": {
            readOnly: boolean;
            $ref: Array<{
              linkedtxnbill: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ItemBasedExpenseLineDetail: {
            type: string;
            requiredFlag: string;
            $ref: Array<{
              itembasedexpenselinedetail: string;
            }>;
          };
          LineNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DetailType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
        };
      };
      deliveryinfo: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          DeliveryType: {
            readOnly: boolean;
            type: string;
            description: string;
          };
          DeliveryTime: {
            readOnly: boolean;
            type: string;
            description: string;
            $ref: Array<{
              datetime: string;
            }>;
          };
        };
      };
      discountoverride: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          DiscountAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DiscountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PercentBased: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          DiscountPercent: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      creditmemoresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          "CustomField ": {
            $ref: Array<{
              customfield: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          HomeBalance: {
            readOnly: boolean;
            type: string;
            description: string;
          };
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PrintStatus: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SalesTermRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          GlobalTaxCalculation: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          TotalAmt: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          RemainingCredit: {
            readOnly: boolean;
            type: string;
            description: string;
          };
          InvoiceRef: {
            description: string;
            default: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          TransactionLocationType: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          ApplyTaxAfterDiscount: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          DocNumber: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          RecurDataRef: {
            readOnly: boolean;
            type: string;
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          "Line [0..n]": {
            $ref: Array<{
              salesitemline?: string;
              groupline?: string;
              descriptiononlyline?: string;
              discountline?: string;
              subtotalline?: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CustomerMemo: {
            $ref: Array<{
              memoref: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ProjectRef: {
            filterable: boolean;
            requiredFlag: string;
            type: string;
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          TaxExemptionRef: {
            readOnly: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Balance: {
            filterable: boolean;
            type: string;
            readOnly: boolean;
            sortable: boolean;
            description: string;
          };
          CustomerRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TxnTaxDetail: {
            $ref: Array<{
              txntaxdetail: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          PaymentMethodRef: {
            readOnly: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ExchangeRate: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ShipAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          HomeTotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          DepartmentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          EmailStatus: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          BillAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          BillEmail: {
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
        };
      };
      trialbalancequery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          accounting_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          summarize_column_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      inventoryadjustmentcreaterequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          DocNumber: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          AdjustAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          PrivateNote: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              itemadjustmentline: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          TxnDate: {
            $ref: Array<{
              datetime: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      modificationmetadata: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          CreateTime: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
            $ref: Array<{
              datetime: string;
            }>;
          };
          LastUpdatedTime: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
            $ref: Array<{
              datetime: string;
            }>;
          };
        };
      };
      billpaymentcreditcard: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          CCAccountRef: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
        };
      };
      journalentrylinedetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          TaxAmount: {
            maxLen: string;
            type: string;
            description: string;
            locales: Array<string>;
          };
          JournalCodeRef: {
            minorVersion: number;
            description: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          TaxInclusiveAmt: {
            minorVersion: number;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DepartmentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxCodeRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            locales: Array<string>;
            description: string;
          };
          BillableStatus: {
            readOnly: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          TaxApplicableOn: {
            type: string;
            requiredFlag: string;
            locales: Array<string>;
            description: string;
          };
          PostingType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          AccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Entity: {
            $ref: Array<{
              entity: string;
            }>;
            requiredFlag: string;
            description: string;
          };
        };
      };
      creditchargeinfo: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          CcExpiryMonth: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ProcessPayment: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          PostalCode: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Amount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          NameOnAcct: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          CcExpiryYear: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Type: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          BillAddrStreet: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      taxpaymentresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Refund: {
            type: string;
            minorVersion: number;
            description: string;
          };
          TxnDate: {
            default: string;
            readOnly: boolean;
            type: string;
            minorVersion: number;
            description: string;
          };
          PaymentAccountRef: {
            minorVersion: number;
            description: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          Description: {
            readOnly: boolean;
            systemDefined: boolean;
            type: string;
            minorVersion: number;
            description: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          PaymentAmount: {
            readOnly: boolean;
            type: string;
            minorVersion: number;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              modificationmetadata: string;
            }>;
          };
        };
      };
      frenchpcgaccountlist: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {};
      };
      websiteaddress: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          URI: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      jobinfo: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Status: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          StartDate: {
            $ref: Array<{
              date: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          EndDate: {
            $ref: Array<{
              date: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          JobTypeRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ProjectedEndDate: {
            $ref: Array<{
              date: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      contactinfo: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Type: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Telephone: {
            type: string;
            requiredFlag: string;
          };
        };
      };
      journalentryresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          DocNumber: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          RecurDataRef: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
            $ref: Array<{
              date: string;
            }>;
          };
          TotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          ExchangeRate: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          TaxRateRef: {
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            minorVersion: number;
          };
          HomeTotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          TransactionLocationType: {
            minorVersion: number;
            default: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          TxnTaxDetail: {
            $ref: Array<{
              txntaxdetail: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          GlobalTaxCalculation: {
            minorVersion: number;
            default: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          Adjustment: {
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              journalentryline?: string;
              descriptiononlyline?: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      departmentresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          Name: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          FullyQualifiedName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          SubDepartment: {
            sortable: boolean;
            description: string;
            default: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          ParentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Active: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              modificationmetadata: string;
            }>;
          };
        };
      };
      customerbalancedetailquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          shipvia: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          term: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_duedate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_duedate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          custom1: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          arpaid: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          report_date: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          aging_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          columns: {
            default: string;
            table: {
              columns_araging: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      customfieldstringpo: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          StringValue: {
            type: string;
            description: string;
          };
          Type: {
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Name: {
            readOnly: boolean;
            type: string;
            description: string;
          };
        };
      };
      taxlinedetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          NetAmountTaxable: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          PercentBased: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          TaxInclusiveAmount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          OverrideDeltaAmount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          TaxRateRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxPercent: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      transactionlistreporttoplevel: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Header: {
            description: string;
            $ref: Array<{
              reportheader: string;
            }>;
          };
          Rows: {
            description: string;
            $ref: Array<{
              reportrows: string;
            }>;
          };
          Columns: {
            description: string;
            $ref: Array<{
              reportcolumns: string;
            }>;
          };
        };
      };
      trialbalancereportrows: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          "Row [0..n]": {
            table: {
              group_trialbalancedetails: Array<string>;
            };
            description: string;
            $ref: Array<{
              reportrow: string;
            }>;
          };
        };
      };
      categoryresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          Name: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Level: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          FullyQualifiedName: {
            filterable: boolean;
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          SubItem: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ParentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Active: {
            filterable: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Type: {
            filterable: boolean;
            type: string;
            sortable: boolean;
            description: string;
            requiredFlag: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      trialbalancereporttoplevel: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Header: {
            description: string;
            $ref: Array<{
              reportheader: string;
            }>;
          };
          Rows: {
            description: string;
            $ref: Array<{
              profitandlossreportrows: string;
            }>;
          };
          Columns: {
            description: string;
            $ref: Array<{
              reportcolumns: string;
            }>;
          };
        };
      };
      reportprefs: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          ReportBasis: {
            type: string;
            description: string;
          };
          CalcAgingReportFromTxnDate: {
            default: boolean;
            readOnly: boolean;
            type: string;
            description: string;
          };
        };
      };
      reportoption: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          name: {
            type: string;
            description: string;
          };
          value: {
            type: string;
            description: string;
          };
        };
      };
      refundreceiptresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          "CustomField ": {
            $ref: Array<{
              customfield: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          HomeBalance: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
          };
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PrintStatus: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PaymentRefNum: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CheckPayment: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
            $ref: Array<{
              checkpayment: string;
            }>;
          };
          TxnSource: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          RecurDataRef: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          GlobalTaxCalculation: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          TotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          TransactionLocationType: {
            minorVersion: number;
            default: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DocNumber: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DepositToAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              salesitemline?: string;
              groupline?: string;
              descriptiononlyline?: string;
              discountline?: string;
              subtotalline?: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CustomerMemo: {
            $ref: Array<{
              memoref: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ProjectRef: {
            description: string;
            filterable: boolean;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            minorVersion: number;
          };
          TaxExemptionRef: {
            minorVersion: number;
            description: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          CreditCardPayment: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
            $ref: Array<{
              creditcardpayment: string;
            }>;
          };
          Balance: {
            filterable: boolean;
            type: string;
            readOnly: boolean;
            sortable: boolean;
            description: string;
          };
          CustomerRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TxnTaxDetail: {
            $ref: Array<{
              txntaxdetail: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          PaymentMethodRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ExchangeRate: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ShipAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          DepartmentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PaymentType: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          BillAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ApplyTaxAfterDiscount: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          BillEmail: {
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          HomeTotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
        };
      };
      entity: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Type: {
            type: string;
            description: string;
          };
          EntityRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      reportheader: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Customer: {
            type: string;
            description: string;
          };
          ReportName: {
            type: string;
            description: string;
          };
          Vendor: {
            type: string;
            description: string;
          };
          Option: {
            description: string;
            $ref: Array<{
              reportoption: string;
            }>;
          };
          Item: {
            type: string;
            description: string;
          };
          Employee: {
            type: string;
            description: string;
          };
          ReportBasis: {
            type: string;
            description: string;
          };
          StartPeriod: {
            type: string;
            description: string;
          };
          Class: {
            type: string;
            description: string;
          };
          Currency: {
            type: string;
            description: string;
          };
          EndPeriod: {
            type: string;
            description: string;
          };
          Time: {
            type: string;
            description: string;
          };
          Department: {
            type: string;
            description: string;
          };
          SummarizeColumnsBy: {
            type: string;
            description: string;
          };
        };
      };
      transactionlistreportheader: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Customer: {
            type: string;
            description: string;
          };
          ReportName: {
            type: string;
            description: string;
          };
          Vendor: {
            type: string;
            description: string;
          };
          Option: {
            description: string;
            $ref: Array<{
              reportoption: string;
            }>;
          };
          Item: {
            type: string;
            description: string;
          };
          Employee: {
            type: string;
            description: string;
          };
          ReportBasis: {
            type: string;
            description: string;
          };
          StartPeriod: {
            type: string;
            description: string;
          };
          Currency: {
            type: string;
            description: string;
          };
          EndPeriod: {
            type: string;
            description: string;
          };
          Time: {
            type: string;
            description: string;
          };
          Department: {
            type: string;
            description: string;
          };
          SummarizeColumnsBy: {
            type: string;
            description: string;
          };
        };
      };
      accountbasedexpenselinedetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          TaxAmount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          TaxInclusiveAmt: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxCodeRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          MarkupInfo: {
            $ref: Array<{
              markupinfo: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          BillableStatus: {
            readOnly: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          AccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CustomerRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      paymentmethodrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Name: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      dataservicesextensions: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {};
      };
      customfield: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          DefinitionId: {
            requiredFlag: string;
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          StringValue: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Type: {
            readOnly: boolean;
            type: string;
            description: string;
          };
          Name: {
            readOnly: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      vendorresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          PrimaryEmailAddr: {
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DisplayName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          OtherContactInfo: {
            $ref: Array<{
              contactinfo: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Title: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          APAccountRef: {
            minorVersion: number;
            description: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          TermRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Source: {
            requiredFlag: string;
            type: string;
            minorVersion: number;
            description: string;
          };
          GSTIN: {
            minorVersion: number;
            requiredFlag: string;
            maxLen: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          GivenName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          T4AEligible: {
            minorVersion: number;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          Fax: {
            $ref: Array<{
              telephonenumber30: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          BusinessNumber: {
            minorVersion: number;
            requiredFlag: string;
            maxLen: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          CurrencyRef: {
            readOnly: boolean;
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          HasTPAR: {
            requiredFlag: string;
            type: string;
            minorVersion: number;
            locales: Array<string>;
            description: string;
          };
          TaxReportingBasis: {
            minorVersion: number;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          Mobile: {
            $ref: Array<{
              telephonenumber30: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PrimaryPhone: {
            $ref: Array<{
              telephonenumber30: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Active: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          AlternatePhone: {
            $ref: Array<{
              telephonenumber30: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Vendor1099: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          CostRate: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          MiddleName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          BillRate: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          WebAddr: {
            $ref: Array<{
              websiteaddress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          T5018Eligible: {
            minorVersion: number;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          Balance: {
            filterable: boolean;
            type: string;
            readOnly: boolean;
            sortable: boolean;
            description: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          Suffix: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          CompanyName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          FamilyName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          VendorPaymentBankDetail: {
            description: string;
            requiredFlag: string;
            minorVersion: number;
            type: string;
            locales: Array<string>;
            $ref: Array<{
              vendorpaymentbankdetail: string;
            }>;
          };
          TaxIdentifier: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          AcctNum: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          GSTRegistrationType: {
            minorVersion: number;
            requiredFlag: string;
            maxLen: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          PrintOnCheckName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          BillAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
        };
      };
      accountrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          AcctNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxCodeRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          Name: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          AccountType: {
            filterable: boolean;
            table: {
              accounttypes: Array<string>;
            };
            type: string;
            requiredFlag: string;
            description: string;
          };
          AccountSubType: {
            filterable: boolean;
            table: {
              accounttypes: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      accountbasedexpenseline: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DetailType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          LineNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          AccountBasedExpenseLineDetail: {
            $ref: Array<{
              accountbasedexpenselinedetail: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      servicetypeenum: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {};
      };
      taxratedetails: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          RateValue: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxRateId: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxApplicableOn: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          TaxAgencyId: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxRateName: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      reportcolumns: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          "Column [0..n]": {
            description: string;
            $ref: Array<{
              reportcolumn: string;
            }>;
          };
        };
      };
      itembasedexpenselinedetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          TaxInclusiveAmt: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ItemRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CustomerRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PriceLevelRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxCodeRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          MarkupInfo: {
            $ref: Array<{
              markupinfo: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          BillableStatus: {
            readOnly: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Qty: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          UnitPrice: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      batchitemrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          optionsData: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          bId: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Query: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          operation: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          resourceName: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      taxrateresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          RateValue: {
            readOnly: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          SyncToken: {
            requiredFlag: string;
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Name: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            readOnly: boolean;
            type: string;
          };
          AgencyRef: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            readOnly: boolean;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          SpecialTaxType: {
            readOnly: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          EffectiveTaxRate: {
            readOnly: boolean;
            $ref: Array<{
              effectivetaxratedata: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DisplayType: {
            readOnly: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          TaxReturnLineRef: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            readOnly: boolean;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          Active: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          OriginalTaxRate: {
            minorVersion: number;
            requiredFlag: string;
            readOnly: boolean;
            type: string;
            locales: Array<string>;
            description: string;
          };
          Description: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            readOnly: boolean;
            type: string;
          };
        };
      };
      txntaxdetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          TxnTaxCodeRef: {
            requiredFlag: string;
            type: string;
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          TotalTax: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          "TaxLine [0..n]": {
            type: string;
            requiredFlag: string;
            $ref: Array<{
              taxline: string;
            }>;
          };
        };
      };
      memoref: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          value: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      telephonenumber: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          FreeFormNumber: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      invoicevoidresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          ShipFromAddr: {
            minorVersion: number;
            description: string;
            requiredFlag: string;
            table: {
              physical_address: Array<string>;
            };
            type: string;
            $ref: Array<{
              physicaladdress: string;
            }>;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          HomeBalance: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
          };
          ShipDate: {
            $ref: Array<{
              date: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TrackingNum: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PrintStatus: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SalesTermRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DeliveryInfo: {
            readOnly: boolean;
            type: string;
            description: string;
            $ref: Array<{
              deliveryinfo: string;
            }>;
          };
          TxnSource: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          "LinkedTxn [0..n]": {
            $ref: Array<{
              linkedtxn: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          GlobalTaxCalculation: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          TotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          InvoiceLink: {
            readOnly: boolean;
            description: string;
            type: string;
            minorVersion: number;
            systemDefined: boolean;
          };
          AllowOnlineACHPayment: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          TransactionLocationType: {
            minorVersion: number;
            default: string;
            requiredFlag: string;
            table: {
              locationtype: Array<string>;
            };
            type: string;
            locales: Array<string>;
            description: string;
          };
          DueDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              date: string;
            }>;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DocNumber: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DepositToAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              salesitemline?: string;
              groupline?: string;
              descriptiononlyline?: string;
              discountline?: string;
              subtotalline?: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          BillEmailCc: {
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            description: string;
            minorVersion: number;
            requiredFlag: string;
          };
          CustomerMemo: {
            $ref: Array<{
              memoref: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          EmailStatus: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ProjectRef: {
            requiredFlag: string;
            type: string;
            description: string;
            minorVersion: number;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          ExchangeRate: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxExemptionRef: {
            minorVersion: number;
            description: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          Deposit: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Balance: {
            filterable: boolean;
            type: string;
            readOnly: boolean;
            sortable: boolean;
            description: string;
          };
          CustomerRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TxnTaxDetail: {
            $ref: Array<{
              txntaxdetail: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          AllowOnlineCreditCardPayment: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          CustomField: {
            $ref: Array<{
              customfield: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ShipAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          HomeTotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          DepartmentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          BillEmailBcc: {
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            description: string;
            minorVersion: number;
            requiredFlag: string;
          };
          ShipMethodRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          BillAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          FreeFormAddress: {
            type: string;
            description: string;
            systemDefined: boolean;
          };
          ApplyTaxAfterDiscount: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          BillEmail: {
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          AllowOnlinePayment: {
            deprecated: boolean;
            type: string;
            description: string;
          };
          AllowIPNPayment: {
            deprecated: boolean;
            type: string;
            description: string;
          };
        };
      };
      creditcardpaymentrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          TxnDate: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Amount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          BankAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CreditCardAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      pcesalesitemlinedetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          ItemAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ItemRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxCodeRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          MarkupInfo: {
            $ref: Array<{
              markupinfo: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          UnitCostPrice: {
            type: string;
            minorVersion: number;
            description: string;
          };
          ServiceDate: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Qty: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          UnitPrice: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      salesformspref: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          SalesEmailBcc: {
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            description: string;
            minorVersion: number;
            requiredFlag: string;
          };
          AllowServiceDate: {
            default: boolean;
            type: string;
            description: string;
          };
          EstimateMessage: {
            readOnly: boolean;
            type: string;
            description: string;
          };
          EmailCopyToCompany: {
            default: boolean;
            type: string;
            description: string;
          };
          DefaultCustomerMessage: {
            type: string;
            description: string;
          };
          AllowShipping: {
            default: boolean;
            type: string;
            description: string;
          };
          SalesEmailCc: {
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            description: string;
            minorVersion: number;
            requiredFlag: string;
          };
          DefaultDiscountAccount: {
            type: string;
            description: string;
          };
          IPNSupportEnabled: {
            default: boolean;
            readOnly: boolean;
            type: string;
            description: string;
          };
          ETransactionPaymentEnabled: {
            default: boolean;
            type: string;
            description: string;
          };
          DefaultTerms: {
            type: string;
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          UsingProgressInvoicing: {
            description: string;
            default: string;
            requiredFlag: string;
            readOnly: boolean;
            type: string;
            minorVersion: number;
          };
          AllowDeposit: {
            default: boolean;
            type: string;
            description: string;
          };
          UsingPriceLevels: {
            readOnly: boolean;
            type: string;
            description: string;
          };
          DefaultShippingAccount: {
            default: boolean;
            type: string;
            description: string;
          };
          ETransactionAttachPDF: {
            default: boolean;
            type: string;
            description: string;
          };
          CustomTxnNumbers: {
            default: boolean;
            type: string;
            description: string;
          };
          ETransactionEnabledStatus: {
            default: boolean;
            readOnly: boolean;
            type: string;
            description: string;
          };
          AllowEstimates: {
            default: boolean;
            type: string;
            description: string;
          };
          AllowDiscount: {
            default: boolean;
            type: string;
            description: string;
          };
          CustomField: {
            readOnly: boolean;
            $ref: Array<{
              customfieldboolsales?: string;
              customfieldstringsales?: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          AutoApplyCredit: {
            default: boolean;
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
          };
        };
      };
      journalcoderequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Name: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      vendorcreditresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          DocNumber: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          "LinkedTxn [0..n]": {
            description: string;
            requiredFlag: string;
            readOnly: boolean;
            minorVersion: number;
            type: string;
            $ref: Array<{
              linkedtxn: string;
            }>;
          };
          VendorRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          RecurDataRef: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          GlobalTaxCalculation: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          TotalAmt: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          ExchangeRate: {
            default: number;
            type: string;
            requiredFlag: string;
            description: string;
          };
          APAccountRef: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          DepartmentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          IncludeInAnnualTPAR: {
            minorVersion: number;
            default: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              itembasedexpenseline?: string;
              accountbasedexpenseline?: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TransactionLocationType: {
            minorVersion: number;
            default: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          Balance: {
            sortable: boolean;
            minorVersion: number;
            filterable: boolean;
            requiredFlag: string;
            readOnly: boolean;
            type: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      budgetrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          "BudgetDetail [0..n]": {
            $ref: Array<{
              budgetdetail: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          BudgetEntryType: {
            readOnly: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          EndDate: {
            $ref: Array<{
              datetime: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Name: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            readOnly: boolean;
            type: string;
          };
          StartDate: {
            $ref: Array<{
              datetime: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          BudgetType: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            readOnly: boolean;
            type: string;
          };
        };
      };
      recurringinfo: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Active: {
            type: string;
            description: string;
          };
          RecurType: {
            filterable: boolean;
            type: string;
            sortable: boolean;
            description: string;
            requiredFlag: string;
          };
          ScheduleInfo: {
            $ref: Array<{
              recurringscheduleinfo: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Name: {
            filterable: boolean;
            type: string;
            sortable: boolean;
            description: string;
            requiredFlag: string;
          };
        };
      };
      departmentrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          Name: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ParentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      billpaymentresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          DocNumber: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          VendorRef: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          "Line [0..n]": {
            $ref: Array<{
              linelinkedtxn: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          TotalAmt: {
            filterable: boolean;
            type: string;
            sortable: boolean;
            description: string;
            requiredFlag: string;
          };
          ExchangeRate: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          APAccountRef: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          PayType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          DepartmentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CheckPayment: {
            filterable: boolean;
            type: string;
            sortable: boolean;
            description: string;
            $ref: Array<{
              billpaymentcheck: string;
            }>;
          };
          CreditCardPayment: {
            filterable: boolean;
            type: string;
            sortable: boolean;
            description: string;
            $ref: Array<{
              billpaymentcreditcard: string;
            }>;
          };
          TransactionLocationType: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          ProcessBillPayment: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      taxcoderesponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          SyncToken: {
            requiredFlag: string;
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          TaxGroup: {
            default: string;
            readOnly: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          PurchaseTaxRateList: {
            description: string;
            type: string;
            requiredFlag: string;
            $ref: Array<{
              taxratelist: string;
            }>;
          };
          TaxCodeConfigType: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
          };
          Taxable: {
            readOnly: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Name: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Active: {
            filterable: boolean;
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Description: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Hidden: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
            requiredFlag: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          SalesTaxRateList: {
            description: string;
            type: string;
            requiredFlag: string;
            $ref: Array<{
              taxratelist: string;
            }>;
          };
        };
      };
      transactionlistquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          payment_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          duedate_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          arpaid: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          bothamount: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          transaction_type: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          docnum: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_moddate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          source_account_type: {
            default: string;
            table: {
              account_types: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
          group_by: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_duedate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          columns: {
            default: string;
            table: {
              columns_tax: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_duedate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          vendor: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          memo: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          appaid: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          moddate_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          printed: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          createdate_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          cleared: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          qzurl: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          term: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_createdate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          name: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          sort_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_createdate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_moddate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      vendorbalancequery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          qzurl: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          accounting_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          appaid: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          report_date: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          summarize_column_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          vendor: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      purchaseorderrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          APAccountRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          VendorRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              itembasedexpenseline: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      profitandlossdetailstoplevel: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Header: {
            description: string;
            $ref: Array<{
              reportheader: string;
            }>;
          };
          Rows: {
            description: string;
            $ref: Array<{
              reportrows: string;
            }>;
          };
          Columns: {
            description: string;
            $ref: Array<{
              reportcolumns: string;
            }>;
          };
        };
      };
      companycurrencyrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Code: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      subtotalline: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          SubTotalLineDetail: {
            $ref: Array<{
              subtotallinedetail: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DetailType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          LineNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
        };
      };
      customfieldstringsales: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          StringValue: {
            type: string;
            description: string;
          };
          Type: {
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Name: {
            readOnly: boolean;
            type: string;
            description: string;
          };
        };
      };
      vendorandpurchaseprefs: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          DefaultMarkupAccount: {
            type: string;
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          TrackingByCustomer: {
            default: boolean;
            type: string;
            description: string;
          };
          POCustomField: {
            readOnly: boolean;
            $ref: Array<{
              customfieldboolpo?: string;
              customfieldstringpo?: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DefaultTerms: {
            type: string;
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          BillableExpenseTracking: {
            default: boolean;
            type: string;
            description: string;
          };
          DefaultMarkup: {
            type: string;
            description: string;
          };
          TPAREnabled: {
            minorVersion: number;
            default: boolean;
            readOnly: boolean;
            type: string;
            locales: Array<string>;
            description: string;
          };
        };
      };
      attachableref: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          IncludeOnSend: {
            filterable: boolean;
            type: string;
            requiredFlag: string;
            description: string;
          };
          LineInfo: {
            filterable: boolean;
            type: string;
            requiredFlag: string;
            description: string;
          };
          NoRefOnly: {
            filterable: boolean;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "CustomField[0..n]": {
            $ref: Array<{
              customfield: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Inactive: {
            default: string;
            filterable: boolean;
            type: string;
            requiredFlag: string;
            description: string;
          };
          EntityRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      effectivetaxratedata: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          RateValue: {
            type: string;
            description: string;
          };
          EndDate: {
            type: string;
            description: string;
          };
          EffectiveDate: {
            type: string;
            description: string;
          };
        };
      };
      inventoryvaluationdetailquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          end_date: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_svcdate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          svcdate_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_svcdate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          group_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          columns: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      markupinfo: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          PriceLevelRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Percent: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          MarkUpIncomeAccountRef: {
            description: string;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
        };
      };
      linelinkedtxn: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Amount: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          "LinkedTxn [0..n]": {
            $ref: Array<{
              linkedtxn: string;
            }>;
            requiredFlag: string;
            description: string;
          };
        };
      };
      departmentsalesquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          accounting_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          class: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          item: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          summarize_column_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      billpaymentcheck: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          PrintStatus: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          BankAccountRef: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
        };
      };
      creditchargeresponse: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Status: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          AuthCode: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          TxnAuthorizationTime: {
            $ref: Array<{
              datetime: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CCTransId: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      projectestimateresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          ShipFromAddr: {
            minorVersion: number;
            description: string;
            requiredFlag: string;
            table: {
              physical_address: Array<string>;
            };
            type: string;
            $ref: Array<{
              physicaladdress: string;
            }>;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ShipDate: {
            $ref: Array<{
              date: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PrintStatus: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          HomeTotalCostAmount: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
            systemDefined: boolean;
          };
          CustomField: {
            $ref: Array<{
              customfield: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SalesTermRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TxnStatus: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          "LinkedTxn [0..n]": {
            $ref: Array<{
              linkedtxn: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          AcceptedDate: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ExpirationDate: {
            $ref: Array<{
              date: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DueDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              date: string;
            }>;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DocNumber: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          RecurDataRef: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          "Line [0..n]": {
            $ref: Array<{
              pcesalesitemline: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CustomerMemo: {
            $ref: Array<{
              memoref: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          EmailStatus: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ProjectRef: {
            description: string;
            filterable: boolean;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            minorVersion: number;
          };
          TaxExemptionRef: {
            minorVersion: number;
            description: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          CustomerRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TxnTaxDetail: {
            $ref: Array<{
              txntaxdetail: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          AcceptedBy: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ExchangeRate: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TotalCostAmount: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
            systemDefined: boolean;
          };
          ShipAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          HomeTotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          DepartmentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ShipMethodRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          BillAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          FreeFormAddress: {
            type: string;
            description: string;
            systemDefined: boolean;
          };
          ApplyTaxAfterDiscount: {
            default: boolean;
            type: string;
            requiredFlag: string;
            locales: Array<string>;
            description: string;
          };
          BillEmail: {
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
        };
      };
      taxagencyrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          DisplayName: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            sortable: boolean;
            description: string;
          };
        };
      };
      companycurrencyresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          Code: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Name: {
            systemDefined: boolean;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "CustomField ": {
            $ref: Array<{
              customfield: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Active: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              modificationmetadata: string;
            }>;
          };
        };
      };
      reportsqueryall: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          date_macro: {
            default: string;
            type: string;
            description: string;
          };
          payment_method: {
            type: string;
            description: string;
          };
          duedate_macro: {
            default: string;
            type: string;
            description: string;
          };
          arpaid: {
            default: string;
            type: string;
            description: string;
          };
          report_date: {
            default: string;
            type: string;
            description: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
          };
          summarize_column_by: {
            default: string;
            type: string;
            description: string;
          };
          account_status: {
            default: string;
            type: string;
            description: string;
          };
          vendor: {
            default: string;
            type: string;
            description: string;
          };
          accounting_method: {
            default: string;
            type: string;
            description: string;
          };
          "item<": {
            default: string;
            type: string;
            description: string;
          };
          employee: {
            default: string;
            type: string;
            description: string;
          };
          columns: {
            type: string;
            description: string;
          };
          account_type: {
            default: string;
            type: string;
            description: string;
          };
          shipvia: {
            default: string;
            type: string;
            description: string;
          };
          "start_createdate end_createdate": {
            type: string;
            description: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
          };
          num_periods: {
            default: string;
            type: string;
            description: string;
          };
          createdate_macro: {
            default: string;
            type: string;
            description: string;
          };
          past_due: {
            type: string;
            description: string;
          };
          class: {
            default: string;
            type: string;
            description: string;
          };
          customer: {
            default: string;
            type: string;
            description: string;
          };
          qzurl: {
            default: string;
            type: string;
            description: string;
          };
          term: {
            default: string;
            type: string;
            description: string;
          };
          sort_by: {
            default: string;
            type: string;
            description: string;
          };
          appaid: {
            default: string;
            type: string;
            description: string;
          };
          aging_method: {
            default: string;
            type: string;
            description: string;
          };
          moddate_macro: {
            default: string;
            type: string;
            description: string;
          };
          aging_period: {
            default: string;
            type: string;
            description: string;
          };
        };
      };
      vendorexpensesquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          vendor: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          class: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          summarize_column_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          accounting_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      itemreceiptline: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          LineNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DetailType: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
        };
      };
      customfieldboolpo: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          BooleanValue: {
            type: string;
            description: string;
          };
          Type: {
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Name: {
            readOnly: boolean;
            type: string;
            description: string;
          };
        };
      };
      agedpayablesquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          qzurl: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          vendor: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          report_date: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          aging_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      creditcardpayment: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          CreditChargeResponse: {
            $ref: Array<{
              creditchargeresponse: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CreditChargeInfo: {
            $ref: Array<{
              creditchargeinfo: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      cashflowreportrows: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          "Row [0..n]": {
            table: {
              group_cashflowsheet: Array<string>;
            };
            description: string;
            $ref: Array<{
              reportrow: string;
            }>;
          };
        };
      };
      agedpayablestoplevel: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Header: {
            description: string;
            $ref: Array<{
              reportheader: string;
            }>;
          };
          Rows: {
            description: string;
            $ref: Array<{
              agedpayablesreportrows: string;
            }>;
          };
          Columns: {
            description: string;
            $ref: Array<{
              reportcolumns: string;
            }>;
          };
        };
      };
      purchaseorderitemline: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DetailType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          LineNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          CustomField: {
            $ref: Array<{
              customfield: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PurchaseOrderItemLineDetail: {
            type: string;
            requiredFlag: string;
            $ref: Array<{
              purchaseorderitemlinedetail: string;
            }>;
          };
          Id: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
        };
      };
      descriptiononly: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          TaxCodeRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ServiceDate: {
            $ref: Array<{
              date: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      agedreceivablesquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          qzurl: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          aging_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          report_date: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      termrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          DayOfMonthDue: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DueDays: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Name: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      depositline: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DetailType: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          ProjectRef: {
            requiredFlag: string;
            type: string;
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          LineNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CustomField: {
            $ref: Array<{
              customfield: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          DepositLineDetail: {
            type: string;
            requiredFlag: string;
            $ref: Array<{
              depositlinedetail: string;
            }>;
          };
        };
      };
      timeactivityrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
            $ref: Array<{
              date: string;
            }>;
          };
          EmployeeRef: {
            description: string;
            type: string;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          ProjectRef: {
            requiredFlag: string;
            type: string;
            description: string;
            minorVersion: number;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          Hours: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          StartTime: {
            description: string;
            type: string;
            requiredFlag: string;
            $ref: Array<{
              datetime: string;
            }>;
          };
          HourlyRate: {
            default: string;
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          VendorRef: {
            description: string;
            type: string;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          EndTime: {
            description: string;
            type: string;
            requiredFlag: string;
            $ref: Array<{
              datetime: string;
            }>;
          };
          CustomerRef: {
            type: string;
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          NameOf: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      creditcardpaymentresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          VendorRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CreditCardAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
            $ref: Array<{
              date: string;
            }>;
          };
          Memo: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          PrintStatus: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CheckNum: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Amount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          BankAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      termresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          DayOfMonthDue: {
            maxLen: string;
            type: string;
            description: string;
          };
          Name: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          DiscountDayOfMonth: {
            maxLen: string;
            type: string;
            description: string;
          };
          DiscountPercent: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DiscountDays: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DueNextMonthDays: {
            maxLen: string;
            type: string;
            description: string;
          };
          DueDays: {
            maxLen: string;
            type: string;
            description: string;
          };
          Active: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          Type: {
            systemDefined: boolean;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      inventoryvaluationquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          qzurl: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          item: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          report_date: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          summarize_column_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      paymentline: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DetailType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          LineNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          PaymentLineDetail: {
            $ref: Array<{
              paymentlinedetail: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
        };
      };
      customerrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          DisplayName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Suffix: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Title: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          MiddleName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          FamilyName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          GivenName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
        };
      };
      taxagencyresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          TaxAgencyConfig: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
          };
          DisplayName: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            sortable: boolean;
            description: string;
          };
          TaxTrackedOnSales: {
            default: string;
            readOnly: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          TaxTrackedOnPurchases: {
            default: string;
            readOnly: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          LastFileDate: {
            minorVersion: number;
            requiredFlag: string;
            readOnly: boolean;
            type: string;
            locales: Array<string>;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          TaxRegistrationNumber: {
            readOnly: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      batchrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          BatchItemRequest: {
            $ref: Array<{
              batchitemrequest: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      customertyperesponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Active: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          MetaData: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              modificationmetadata: string;
            }>;
          };
          Name: {
            systemDefined: boolean;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
        };
      };
      itemreftype: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          type: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          name: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          value: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      generalledgerquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          account: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          accounting_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          source_account: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          account_type: {
            default: string;
            table: {
              account_types: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          summarize_column_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          vendor: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          class: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          columns: {
            default: string;
            table: {
              columns_generalLedger: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      balancesheetquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          qzurl: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          accounting_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          adjusted_gain_loss: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          class: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          item: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          summarize_column_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          vendor: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      profitandlossreportrows: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          "Row [0..n]": {
            table: {
              group_profitandlosssheet: Array<string>;
            };
            description: string;
            $ref: Array<{
              reportrow: string;
            }>;
          };
        };
      };
      agedreceivabledetailquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          shipvia: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          term: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_duedate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_duedate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          custom1: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          custom2: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          custom3: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          report_date: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          num_periods: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          aging_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          past_due: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          aging_period: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          columns: {
            default: string;
            table: {
              columns_araging: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      salesitemlinedetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          TaxInclusiveAmt: {
            minorVersion: number;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          DiscountAmt: {
            minorVersion: number;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          ItemRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxCodeRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          MarkupInfo: {
            $ref: Array<{
              markupinfo: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ItemAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ServiceDate: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          DiscountRate: {
            minorVersion: number;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          Qty: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          UnitPrice: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          TaxClassificationRef: {
            minorVersion: number;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
          };
        };
      };
      reimbursechargeline: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          "LinkedTxn [0..n]": {
            $ref: Array<{
              linkedtxn: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          LineNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          ReimburseLineDetail: {
            $ref: Array<{
              discountlinedetail: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          LineId: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          DetailType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      emailmessagetype: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Message: {
            type: string;
            description: string;
          };
          Subject: {
            type: string;
            description: string;
          };
        };
      };
      projectestimaterequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          ProjectRef: {
            description: string;
            filterable: boolean;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            minorVersion: number;
          };
          Line: {
            $ref: Array<{
              pcesalesitemline: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CustomerRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      agedreceivablestoplevel: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Header: {
            description: string;
            $ref: Array<{
              reportheader: string;
            }>;
          };
          Rows: {
            description: string;
            $ref: Array<{
              agedreceivablesreportrows: string;
            }>;
          };
          Columns: {
            description: string;
            $ref: Array<{
              reportcolumns: string;
            }>;
          };
        };
      };
      taxserviceresponse: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          TaxCodeId: {
            readOnly: boolean;
            systemDefined: boolean;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxCode: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          "TaxRateDetails [0..n]": {
            $ref: Array<{
              taxratedetails: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      taxservicerequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          TaxCode: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          "TaxRateDetails [0..n]": {
            $ref: Array<{
              taxratedetails: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      taxratelist: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          "TaxRateDetail [0..n]": {
            $ref: Array<{
              taxratedetail: string;
            }>;
            requiredFlag: string;
            description: string;
          };
        };
      };
      discountline: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          DiscountLineDetail: {
            $ref: Array<{
              discountlinedetail: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DetailType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          LineNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
        };
      };
      agedreceivablesreportrows: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          "Row [0..n]": {
            table: {
              group_agedreceivablessheet: Array<string>;
            };
            description: string;
            $ref: Array<{
              reportrow: string;
            }>;
          };
        };
      };
      categoryrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          SubItem: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Type: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Name: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ParentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      groupline: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          LineNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          GroupLineDetail: {
            type: string;
            requiredFlag: string;
            $ref: Array<{
              grouplinedetail: string;
            }>;
          };
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DetailType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
        };
      };
      transferrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Amount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ToAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          FromAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      accountinginfoprefs: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          FirstMonthOfFiscalYear: {
            default: string;
            readOnly: boolean;
            type: string;
            description: string;
          };
          UseAccountNumbers: {
            default: string;
            readOnly: boolean;
            type: string;
            description: string;
          };
          TaxYearMonth: {
            default: string;
            readOnly: boolean;
            type: string;
            description: string;
          };
          ClassTrackingPerTxn: {
            type: string;
            description: string;
          };
          TrackDepartments: {
            type: string;
            description: string;
          };
          TaxForm: {
            readOnly: boolean;
            type: string;
            description: string;
          };
          CustomerTerminology: {
            type: string;
            description: string;
          };
          BookCloseDate: {
            readOnly: boolean;
            type: string;
            description: string;
          };
          DepartmentTerminology: {
            type: string;
            description: string;
          };
          ClassTrackingPerTxnLine: {
            type: string;
            description: string;
          };
        };
      };
      customerresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          PrimaryEmailAddr: {
            filterable: boolean;
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DisplayName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Title: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ResaleNum: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          SecondaryTaxIdentifier: {
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          ARAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          DefaultTaxCodeRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PreferredDeliveryMethod: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          GSTIN: {
            maxLen: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          GivenName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          SalesTermRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CustomerTypeRef: {
            $ref: Array<{
              customertyperef: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          FullyQualifiedName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          Fax: {
            maxLen: string;
            $ref: Array<{
              telephonenumber30: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          BusinessNumber: {
            maxLen: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          BillWithParent: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          CurrencyRef: {
            description: string;
            requiredFlag: string;
            maxLen: string;
            readOnly: boolean;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          Mobile: {
            maxLen: string;
            $ref: Array<{
              telephonenumber30: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Job: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          BalanceWithJobs: {
            type: string;
            sortable: boolean;
            requiredFlag: string;
            description: string;
          };
          PrimaryPhone: {
            maxLen: string;
            $ref: Array<{
              telephonenumber30: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          OpenBalanceDate: {
            $ref: Array<{
              date: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Taxable: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          AlternatePhone: {
            maxLen: string;
            $ref: Array<{
              telephonenumber30: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ParentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Level: {
            default: string;
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          MiddleName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Notes: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          TaxExemptionReasonId: {
            type: string;
            description: string;
          };
          WebAddr: {
            maxLen: string;
            $ref: Array<{
              websiteaddress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Active: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          CompanyName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Balance: {
            filterable: boolean;
            type: string;
            sortable: boolean;
            requiredFlag: string;
            description: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          ShipAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PaymentMethodRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Suffix: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          IsProject: {
            default: string;
            readOnly: boolean;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Source: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          FamilyName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          PrimaryTaxIdentifier: {
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          GSTRegistrationType: {
            maxLen: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          PrintOnCheckName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          BillAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
        };
      };
      recurringscheduleinfo: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          DayOfWeek: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          StartDate: {
            $ref: Array<{
              datetime: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          MaxOccurrences: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          RemindDays: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          IntervalType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          WeekOfMonth: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          MonthOfYear: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          DaysBefore: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          NextDate: {
            readOnly: boolean;
            $ref: Array<{
              datetime: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          NumInterval: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          EndDate: {
            $ref: Array<{
              datetime: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PreviousDate: {
            readOnly: boolean;
            $ref: Array<{
              datetime: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DayOfMonth: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      batchresponse: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          BatchItemResponse: {
            $ref: Array<{
              batchitemresponse: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      customfieldboolsales: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          BooleanValue: {
            type: string;
            description: string;
          };
          Type: {
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Name: {
            readOnly: boolean;
            type: string;
            description: string;
          };
        };
      };
      taxprefs: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          PartnerTaxEnabled: {
            readOnly: boolean;
            type: string;
            description: string;
          };
          TaxGroupCodeRef: {
            readOnly: boolean;
            type: string;
            description: string;
          };
          UsingSalesTax: {
            readOnly: boolean;
            type: string;
            description: string;
          };
        };
      };
      creditmemorequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          ProjectRef: {
            filterable: boolean;
            requiredFlag: string;
            type: string;
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          Line: {
            $ref: Array<{
              salesitemline?: string;
              groupline?: string;
            }>;
            requiredFlag: string;
            description: string;
          };
          CustomerRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      inventoryadjustmentdeleterequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          SyncToken: {
            requiredFlag: string;
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
        };
      };
      currencyprefs: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          HomeCurrency: {
            readOnly: boolean;
            type: string;
            description: string;
          };
          MultiCurrencyEnabled: {
            readOnly: boolean;
            type: string;
            description: string;
          };
        };
      };
      salesitemline: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DetailType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          SalesItemLineDetail: {
            type: string;
            requiredFlag: string;
            $ref: Array<{
              salesitemlinedetail: string;
            }>;
          };
          LineNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
        };
      };
      transactionlistbyvendorquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          payment_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          duedate_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          arpaid: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          bothamount: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          transaction_type: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          docnum: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_moddate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          source_account_type: {
            default: string;
            table: {
              account_types: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
          group_by: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_duedate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          columns: {
            default: string;
            table: {
              columns_tax: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_duedate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          vendor: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          memo: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          appaid: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          moddate_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          printed: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          createdate_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          cleared: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          qzurl: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          term: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_createdate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          name: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          sort_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_createdate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_moddate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      deleterequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          SyncToken: {
            requiredFlag: string;
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
        };
      };
      voidrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          SyncToken: {
            requiredFlag: string;
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          sparse: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      transferresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          RecurDataRef: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
            $ref: Array<{
              date: string;
            }>;
          };
          ToAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          TransactionLocationType: {
            minorVersion: number;
            default: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          FromAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      refundreceiptrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ProjectRef: {
            description: string;
            filterable: boolean;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            minorVersion: number;
          };
          DepositToAccountRef: {
            $ref: Array<{
              referencetype?: string;
              currencyref?: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              salesitemline?: string;
              groupline?: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      creditmemo: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
            $ref: Array<{
              date: string;
            }>;
          };
          CurrencyRef: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          HomeBalance: {
            readOnly: boolean;
            type: string;
            description: string;
          };
          ShipDate: {
            $ref: Array<{
              date: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TrackingNum: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          PrintStatus: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CustomField: {
            $ref: Array<{
              customfield: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SalesTermRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          GlobalTaxCalculation: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          TotalAmt: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          DueDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              date: string;
            }>;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DocNumber: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DepositToAccountRef: {
            readOnly: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              salesitemline: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CustomerMemo: {
            $ref: Array<{
              memoref: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          EmailStatus: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ProjectRef: {
            filterable: boolean;
            requiredFlag: string;
            type: string;
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          TaxExemptionRef: {
            readOnly: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Deposit: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Balance: {
            filterable: boolean;
            type: string;
            readOnly: boolean;
            sortable: boolean;
            description: string;
          };
          CustomerRef: {
            filterable: boolean;
            requiredFlag: string;
            type: string;
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          TxnTaxDetail: {
            $ref: Array<{
              txntaxdetail: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SyncToken: {
            requiredFlag: string;
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          ExchangeRate: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ShipAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          HomeTotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          DepartmentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ShipMethodRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          BillAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ApplyTaxAfterDiscount: {
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          BillEmail: {
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
        };
      };
      customerbalancequery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          accounting_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          arpaid: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          report_date: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          summarize_column_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      generalledgerqueryFR: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          account: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          accounting_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          source_account: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          account_type: {
            default: string;
            table: {
              account_types: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          summarize_column_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          vendor: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          class: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      paymentrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          TotalAmt: {
            filterable: boolean;
            sortable: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ProjectRef: {
            description: string;
            filterable: boolean;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            minorVersion: number;
          };
          CustomerRef: {
            filterable: boolean;
            requiredFlag: string;
            type: string;
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      itemgroupdetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          "ItemGroupLine [0..n]": {
            $ref: Array<{
              itemgroupline: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      companyinforesponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          SyncToken: {
            requiredFlag: string;
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          LegalAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SupportedLanguages: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          CompanyName: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Country: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          CompanyAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Email: {
            maxLen: string;
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          WebAddr: {
            maxLen: string;
            $ref: Array<{
              websiteaddress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "NameValue [0..n]": {
            table: {
              dataservicesextensions: Array<string>;
            };
            type: string;
            requiredFlag: string;
            description: string;
          };
          FiscalYearStartMonth: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          CustomerCommunicationAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PrimaryPhone: {
            $ref: Array<{
              telephonenumber: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          LegalName: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          CompanyStartDate: {
            readOnly: boolean;
            $ref: Array<{
              datetime: string;
            }>;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          EmployerId: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      emailaddress: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Address: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      billpaymentrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          VendorRef: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          TotalAmt: {
            filterable: boolean;
            type: string;
            sortable: boolean;
            description: string;
            requiredFlag: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              linelinkedtxn: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PayType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          CreditCardPayment: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              billpaymentcreditcard: string;
            }>;
          };
          CheckPayment: {
            $ref: Array<{
              billpaymentcheck: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      timeactivityresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
            $ref: Array<{
              date: string;
            }>;
          };
          NameOf: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "BreakHours BreakMinutes": {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          EndTime: {
            $ref: Array<{
              datetime: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Hours: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Taxable: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          TransactionLocationType: {
            minorVersion: number;
            default: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          VendorRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CostRate: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ItemRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ProjectRef: {
            description: string;
            filterable: boolean;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            minorVersion: number;
          };
          PayrollItemRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          BillableStatus: {
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            readOnly: boolean;
            type: string;
          };
          HourlyRate: {
            default: string;
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CustomerRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          EmployeeRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DepartmentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          StartTime: {
            $ref: Array<{
              datetime: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
        };
      };
      itemrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          QtyOnHand: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Name: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          IncomeAccountRef: {
            description: string;
            type: string;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          AssetAccountRef: {
            description: string;
            type: string;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          InvStartDate: {
            description: string;
            type: string;
            requiredFlag: string;
            $ref: Array<{
              date: string;
            }>;
          };
          Type: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            minorVersion: string;
          };
          ExpenseAccountRef: {
            description: string;
            type: string;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
        };
      };
      batchitemresponse: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          ResourceName: {
            type: string;
            description: string;
          };
          bId: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          QueryResponse: {
            type: string;
            description: string;
          };
        };
      };
      physicaladdress: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          City: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Country: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Line5: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Line4: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Line3: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Line2: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Line1: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          PostalCode: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          CountrySubDivisionCode: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            readOnly: boolean;
            systemDefined: boolean;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      accountlistquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          account_type: {
            default: string;
            table: {
              account_types: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          start_moddate: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          sort_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          moddate_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_moddate: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          account_status: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          createdate_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          columns: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      budgetresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          BudgetEntryType: {
            readOnly: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          EndDate: {
            $ref: Array<{
              datetime: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Name: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            readOnly: boolean;
            type: string;
          };
          "BudgetDetail [0..n]": {
            $ref: Array<{
              budgetdetail: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          StartDate: {
            $ref: Array<{
              datetime: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          BudgetType: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            readOnly: boolean;
            type: string;
          };
          Active: {
            filterable: boolean;
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      reportrow: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          ColData: {
            description: string;
          };
          Summary: {
            description: string;
          };
          Rows: {
            description: string;
          };
          Header: {
            description: string;
          };
        };
      };
      depositrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          ExchangeRate: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DepositToAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              depositline: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      profitandlossquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          qzurl: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          accounting_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          adjusted_gain_loss: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          class: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          item: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          summarize_column_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          vendor: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      employeerequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          GivenName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          PrimaryAddr: {
            description: string;
            requiredFlag: string;
            maxLen: string;
            table: {
              physical_address: Array<string>;
            };
            type: string;
            $ref: Array<{
              physicaladdress: string;
            }>;
          };
          FamilyName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
        };
      };
      itemgroupline: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Qty: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ItemRef: {
            type: string;
            requiredFlag: string;
            $ref: Array<{
              itemreftype: string;
            }>;
          };
        };
      };
      line: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          Received: {
            readOnly: boolean;
            type: string;
            minorVersion: number;
            description: string;
          };
          "LinkedTxn [0..n]": {
            $ref: Array<{
              linkedtxn: string;
            }>;
            requiredFlag: string;
            description: string;
          };
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ProjectRef: {
            requiredFlag: string;
            type: string;
            description: string;
            minorVersion: number;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          LineNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
        };
      };
      inventoryadjustmentresponse: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          DocNumber: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          TxnDate: {
            $ref: Array<{
              datetime: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          SyncToken: {
            requiredFlag: string;
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          "Line [0..n]": {
            $ref: Array<{
              itemadjustmentline: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          AdjustAccountRef: {
            description: string;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      changedatacaptureresponse: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          startPosition: {
            type: string;
            description: string;
          };
          maxResults: {
            type: string;
            description: string;
          };
          totalCount: {
            type: string;
            description: string;
          };
          CDCResponse: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          "NameOfResource [0..n]": {
            type: string;
            description: string;
          };
          "QueryResponse [0..n]": {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      classrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          Name: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ParentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      profitandlossdetailquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          account: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          accounting_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          adjusted_gain_loss: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          class: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          payment_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          employee: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          vendor: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          account_type: {
            default: string;
            table: {
              account_types: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          columns: {
            default: string;
            table: {
              columns_generalLedger: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      estimateresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          ShipFromAddr: {
            minorVersion: number;
            description: string;
            requiredFlag: string;
            table: {
              physical_address: Array<string>;
            };
            type: string;
            $ref: Array<{
              physicaladdress: string;
            }>;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ShipDate: {
            $ref: Array<{
              date: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PrintStatus: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CustomField: {
            $ref: Array<{
              customfield: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SalesTermRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TxnStatus: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          "LinkedTxn [0..n]": {
            $ref: Array<{
              linkedtxn: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          GlobalTaxCalculation: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          TotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          AcceptedDate: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ExpirationDate: {
            $ref: Array<{
              date: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TransactionLocationType: {
            minorVersion: number;
            default: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          DueDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              date: string;
            }>;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DocNumber: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          RecurDataRef: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          "Line [0..n]": {
            $ref: Array<{
              salesitemline?: string;
              groupline?: string;
              descriptiononlyline?: string;
              discountline?: string;
              subtotalline?: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CustomerMemo: {
            $ref: Array<{
              memoref: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          EmailStatus: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ProjectRef: {
            description: string;
            filterable: boolean;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            minorVersion: number;
          };
          TaxExemptionRef: {
            minorVersion: number;
            description: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          CustomerRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TxnTaxDetail: {
            $ref: Array<{
              txntaxdetail: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          AcceptedBy: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ExchangeRate: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ShipAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          HomeTotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          DepartmentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ShipMethodRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          BillAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          FreeFormAddress: {
            type: string;
            description: string;
            systemDefined: boolean;
          };
          ApplyTaxAfterDiscount: {
            default: boolean;
            type: string;
            requiredFlag: string;
            locales: Array<string>;
            description: string;
          };
          BillEmail: {
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
        };
      };
      grouplinedetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Quantity: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              salesitemline: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          GroupItemRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      purchaseresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          PrintStatus: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          RemitToAddr: {
            description: string;
            requiredFlag: string;
            readOnly: boolean;
            table: {
              physical_address: Array<string>;
            };
            type: string;
            $ref: Array<{
              physicaladdress: string;
            }>;
          };
          TxnSource: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          "LinkedTxn [0..n]": {
            description: string;
            requiredFlag: string;
            readOnly: boolean;
            minorVersion: number;
            type: string;
            $ref: Array<{
              linkedtxn: string;
            }>;
          };
          GlobalTaxCalculation: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          TotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          TransactionLocationType: {
            minorVersion: number;
            default: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DocNumber: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          RecurDataRef: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          "Line [0..n]": {
            $ref: Array<{
              itembasedexpenseline?: string;
              accountbasedexpenseline?: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Credit: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          TxnTaxDetail: {
            $ref: Array<{
              txntaxdetail: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          PaymentMethodRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PurchaseEx: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ExchangeRate: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DepartmentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PaymentType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          EntityRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          IncludeInAnnualTPAR: {
            minorVersion: number;
            default: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          AccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
        };
      };
      agedpayabledetailquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          shipvia: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          term: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_duedate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          accounting_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_duedate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          custom1: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          custom2: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          custom3: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          report_date: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          num_periods: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          vendor: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          past_due: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          aging_period: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          columns: {
            default: string;
            table: {
              columns_apaging: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      subtotallinedetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          ItemRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      vendorpaymentbankdetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          BankAccountName: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          BankBranchIdentifier: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          BankAccountNumber: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          StatementText: {
            maxLen: string;
            type: string;
            description: string;
          };
        };
      };
      itemsalesquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_duedate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          accounting_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_duedate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          class: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          item: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          summarize_column_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      journalcoderesponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          Description: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          "CustomField ": {
            $ref: Array<{
              customfield: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Name: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Type: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              modificationmetadata: string;
            }>;
          };
        };
      };
      bundleresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Sku: {
            filterable: boolean;
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          SyncToken: {
            requiredFlag: string;
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Name: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          FullyQualifiedName: {
            filterable: boolean;
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Type: {
            filterable: boolean;
            type: string;
            sortable: boolean;
            description: string;
            requiredFlag: string;
          };
          PurchaseCost: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Active: {
            filterable: boolean;
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ItemGroupDetail: {
            $ref: Array<{
              itemgroupdetail: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Taxable: {
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          PrintGroupedItems: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          UnitPrice: {
            sortable: boolean;
            description: string;
            default: string;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      paymentresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          PaymentMethodRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          UnappliedAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DepositToAccountRef: {
            default: string;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          TotalAmt: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ExchangeRate: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              linelinkedtxn: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ProjectRef: {
            description: string;
            filterable: boolean;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            minorVersion: number;
          };
          TxnSource: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          PaymentRefNum: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
          };
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          CreditCardPayment: {
            $ref: Array<{
              creditcardpayment: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxExemptionRef: {
            minorVersion: number;
            description: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          TransactionLocationType: {
            minorVersion: number;
            default: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          CustomerRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      reimbursechargeresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          SyncToken: {
            requiredFlag: string;
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          "LinkedTxn [0..n]": {
            $ref: Array<{
              linkedtxn: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          HasBeenInvoiced: {
            filterable: boolean;
            default: string;
            type: string;
            description: string;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ExchangeRate: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "Line [0..n]": {
            type: string;
            requiredFlag: string;
            $ref: Array<{
              reimbursechargeline: string;
            }>;
          };
          HomeTotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Amount: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          CustomerRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      timetrackingprefs: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          WorkWeekStartDate: {
            readOnly: boolean;
            type: string;
            description: string;
          };
          MarkTimeEntriesBillable: {
            readOnly: boolean;
            type: string;
            description: string;
          };
          ShowBillRateToAll: {
            default: boolean;
            type: string;
            description: string;
          };
          UsingSalesTax: {
            default: boolean;
            type: string;
            description: string;
          };
          BillCustomers: {
            type: string;
            description: string;
          };
        };
      };
      attachableresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          Category: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          FileAccessUri: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          ContentType: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          PlaceName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Size: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          AttachableRef: {
            $ref: Array<{
              attachableref: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Long: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          FileName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Note: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Tag: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Lat: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          ThumbnailFileAccessUri: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          TempDownloadUri: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          ThumbnailTempDownloadUri: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      accountresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          SubAccount: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          Classification: {
            description: string;
            filterable: boolean;
            systemDefined: boolean;
            default: string;
            readOnly: boolean;
            type: string;
          };
          FullyQualifiedName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          TxnLocationType: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
          };
          AccountType: {
            filterable: boolean;
            table: {
              accounttypes: Array<string>;
            };
            type: string;
            description: string;
          };
          CurrencyRef: {
            readOnly: boolean;
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CurrentBalanceWithSubAccounts: {
            filterable: boolean;
            type: string;
            readOnly: boolean;
            sortable: boolean;
            description: string;
          };
          AccountAlias: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
          };
          AcctNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxCodeRef: {
            type: string;
            description: string;
            locales: Array<string>;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          ParentRef: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          AccountSubType: {
            filterable: boolean;
            table: {
              accounttypes: Array<string>;
            };
            type: string;
            description: string;
          };
          CurrentBalance: {
            filterable: boolean;
            type: string;
            readOnly: boolean;
            sortable: boolean;
            description: string;
          };
          Description: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Active: {
            filterable: boolean;
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          Name: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
        };
      };
      budgetdetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          ClassRef: {
            readOnly: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DepartmentRef: {
            readOnly: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            readOnly: boolean;
            type: string;
            description: string;
            requiredFlag: string;
          };
          BudgetDate: {
            readOnly: boolean;
            $ref: Array<{
              datetime: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          AccountRef: {
            readOnly: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CustomerRef: {
            readOnly: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      depositlinedetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          PaymentMethodRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CheckNum: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          TaxCodeRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          TaxApplicableOn: {
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          TxnType: {
            table: {
              txntypeenum: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
          AccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Entity: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      employeeresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          PrimaryEmailAddr: {
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DisplayName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Title: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          BillableTime: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          GivenName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          V4IDPseudonym: {
            "system generated": boolean;
            readOnly: boolean;
            type: string;
            minorVersion: number;
            description: string;
          };
          BirthDate: {
            $ref: Array<{
              date: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          MiddleName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          SSN: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          PrimaryAddr: {
            description: string;
            requiredFlag: string;
            maxLen: string;
            table: {
              physical_address: Array<string>;
            };
            type: string;
            $ref: Array<{
              physicaladdress: string;
            }>;
          };
          PrimaryPhone: {
            maxLen: string;
            $ref: Array<{
              telephonenumber: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Active: {
            filterable: boolean;
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ReleasedDate: {
            $ref: Array<{
              date: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          MetaData: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          CostRate: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Mobile: {
            maxLen: string;
            $ref: Array<{
              telephonenumber: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Gender: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          HiredDate: {
            $ref: Array<{
              date: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          BillRate: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Organization: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          Suffix: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          FamilyName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          PrintOnCheckName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          EmployeeNumber: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
        };
      };
      customerincomequery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          term: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          accounting_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          class: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          summarize_column_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          vendor: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      itemadjustmentline: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          DetailType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ItemAdjustmentLineDetail: {
            $ref: Array<{
              itemadjustmentlinedetail: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      recurringtransactionresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          SyncToken: {
            requiredFlag: string;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          RecurringInfo: {
            $ref: Array<{
              recurringinfo: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          RecurDataRef: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          Type: {
            filterable: boolean;
            type: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            type: string;
          };
          MetaData: {
            filterable: boolean;
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      reportrows: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          "Row [0..n]": {
            description: string;
            $ref: Array<{
              reportrow: string;
            }>;
          };
        };
      };
      linkedtxnBill: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          TxnLineId: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          TxnId: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          TxnType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      journalentryrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          JournalCodeRef: {
            minorVersion: number;
            description: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              journalentryline: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      currencyref: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          name: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          value: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      itemresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          Sku: {
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
            minorVersion: number;
          };
          SalesTaxIncluded: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          TrackQtyOnHand: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ItemCategoryType: {
            minorVersion: number;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          SalesTaxCodeRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ClassRef: {
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            minorVersion: number;
          };
          Source: {
            requiredFlag: string;
            type: string;
            minorVersion: number;
            description: string;
          };
          InvStartDate: {
            description: string;
            type: string;
            requiredFlag: string;
            $ref: Array<{
              date: string;
            }>;
          };
          Type: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            minorVersion: string;
          };
          PurchaseTaxIncluded: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          FullyQualifiedName: {
            filterable: boolean;
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          AbatementRate: {
            minorVersion: number;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          ExpenseAccountRef: {
            type: string;
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          SubItem: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Taxable: {
            type: string;
            requiredFlag: string;
            locales: Array<string>;
            description: string;
          };
          UQCDisplayText: {
            minorVersion: number;
            requiredFlag: string;
            maxLen: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          ReorderPoint: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          PurchaseDesc: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PrefVendorRef: {
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            minorVersion: number;
          };
          Name: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Level: {
            default: string;
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          IncomeAccountRef: {
            description: string;
            type: string;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          Active: {
            filterable: boolean;
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          UQCId: {
            description: string;
            requiredFlag: string;
            table: {
              uqid: Array<string>;
            };
            type: string;
            locales: Array<string>;
            minorVersion: number;
          };
          ReverseChargeRate: {
            minorVersion: number;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          TaxClassificationRef: {
            type: string;
            description: string;
            minorVersion: number;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          PurchaseTaxCodeRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          ServiceType: {
            minorVersion: number;
            requiredFlag: string;
            table: {
              service_type: Array<string>;
            };
            type: string;
            locales: Array<string>;
            description: string;
          };
          PurchaseCost: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          QtyOnHand: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          AssetAccountRef: {
            description: string;
            type: string;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          ParentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          UnitPrice: {
            sortable: boolean;
            description: string;
            default: string;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
        };
      };
      journalentryline: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          JournalEntryLineDetail: {
            type: string;
            requiredFlag: string;
            $ref: Array<{
              journalentrylinedetail: string;
            }>;
          };
          DetailType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ProjectRef: {
            requiredFlag: string;
            type: string;
            description: string;
            minorVersion: number;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          LineNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
        };
      };
      purchaseorderitemlinedetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          OpenQty: {
            readOnly: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ItemRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ManuallyClosed: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          PriceLevelRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxCodeRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          MarkupInfo: {
            $ref: Array<{
              markupinfo: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ServiceDate: {
            $ref: Array<{
              date: string;
            }>;
            requiredFlag: string;
            description: string;
          };
          Qty: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          UnitPrice: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      billresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          APAccountRef: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          HomeBalance: {
            readOnly: boolean;
            type: string;
            description: string;
          };
          SalesTermRef: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          "LinkedTxn [0..n]": {
            readOnly: boolean;
            $ref: Array<{
              linkedtxn: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          GlobalTaxCalculation: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          TotalAmt: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            readOnly: boolean;
            type: string;
          };
          TransactionLocationType: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          DueDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              date: string;
            }>;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DocNumber: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          VendorRef: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          RecurDataRef: {
            readOnly: boolean;
            type: string;
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          "Line [0..n]": {
            $ref: Array<{
              itembasedexpenselinebill?: string;
              accountbasedexpenselinebill?: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Balance: {
            filterable: boolean;
            readOnly: boolean;
            type: string;
            description: string;
          };
          TxnTaxDetail: {
            $ref: Array<{
              txntaxdetail: string;
            }>;
            type: string;
            requiredFlag: string;
            locales: Array<string>;
            description: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          ExchangeRate: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DepartmentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          IncludeInAnnualTPAR: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
        };
      };
      categoryupdaterequest: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          Name: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Level: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          FullyQualifiedName: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          SubItem: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          ParentRef: {
            type: string;
            description: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          Active: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Type: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            description: string;
            systemDefined: boolean;
            type: string;
            requiredFlag: string;
            $ref: Array<{
              modificationmetadata: string;
            }>;
          };
        };
      };
      vendorrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          DisplayName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Suffix: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          Title: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          MiddleName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          FamilyName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          GivenName: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
        };
      };
      journalreportquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          journal_code: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          columns: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      salesreceiptrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ProjectRef: {
            description: string;
            filterable: boolean;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            minorVersion: number;
          };
          "Line [0..n]": {
            $ref: Array<{
              salesitemline?: string;
              groupline?: string;
            }>;
            requiredFlag: string;
            description: string;
          };
        };
      };
      fecreportquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          attachmentType: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          withQboIdentifier: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          start_date: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          end_date: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          add_due_date: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      invoiceresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          ShipFromAddr: {
            minorVersion: number;
            description: string;
            requiredFlag: string;
            table: {
              physical_address: Array<string>;
            };
            type: string;
            $ref: Array<{
              physicaladdress: string;
            }>;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          HomeBalance: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
          };
          ShipDate: {
            $ref: Array<{
              date: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TrackingNum: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PrintStatus: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SalesTermRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DeliveryInfo: {
            readOnly: boolean;
            type: string;
            description: string;
            $ref: Array<{
              deliveryinfo: string;
            }>;
          };
          TxnSource: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          "LinkedTxn [0..n]": {
            $ref: Array<{
              linkedtxn: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DepositToAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          GlobalTaxCalculation: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          TotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          InvoiceLink: {
            readOnly: boolean;
            description: string;
            type: string;
            minorVersion: number;
            systemDefined: boolean;
          };
          AllowOnlineACHPayment: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          TransactionLocationType: {
            minorVersion: number;
            default: string;
            requiredFlag: string;
            table: {
              locationtype: Array<string>;
            };
            type: string;
            locales: Array<string>;
            description: string;
          };
          DueDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              date: string;
            }>;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DocNumber: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          RecurDataRef: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          "Line [0..n]": {
            $ref: Array<{
              salesitemline?: string;
              groupline?: string;
              descriptiononlyline?: string;
              discountline?: string;
              subtotalline?: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          BillEmailCc: {
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            description: string;
            minorVersion: number;
            requiredFlag: string;
          };
          CustomerMemo: {
            $ref: Array<{
              memoref: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          EmailStatus: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ProjectRef: {
            description: string;
            filterable: boolean;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            minorVersion: number;
          };
          ExchangeRate: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxExemptionRef: {
            minorVersion: number;
            description: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          Deposit: {
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          Balance: {
            filterable: boolean;
            type: string;
            readOnly: boolean;
            sortable: boolean;
            description: string;
          };
          CustomerRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TxnTaxDetail: {
            $ref: Array<{
              txntaxdetail: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          AllowOnlineCreditCardPayment: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          CustomField: {
            $ref: Array<{
              customfield: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ShipAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          HomeTotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          DepartmentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          BillEmailBcc: {
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            description: string;
            minorVersion: number;
            requiredFlag: string;
          };
          ShipMethodRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          BillAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          FreeFormAddress: {
            type: string;
            description: string;
            systemDefined: boolean;
          };
          ApplyTaxAfterDiscount: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          BillEmail: {
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          AllowOnlinePayment: {
            deprecated: boolean;
            type: string;
            description: string;
          };
          AllowIPNPayment: {
            deprecated: boolean;
            type: string;
            description: string;
          };
        };
      };
      depositresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          RecurDataRef: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          DepositToAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          GlobalTaxCalculation: {
            minorVersion: number;
            default: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          TotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          ExchangeRate: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          HomeTotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          DepartmentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TxnSource: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              linelinkedtxn?: string;
              depositline?: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CashBack: {
            type: string;
            requiredFlag: string;
            $ref: Array<{
              cashbackinfo: string;
            }>;
          };
          TransactionLocationType: {
            minorVersion: number;
            default: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          TxnTaxDetail: {
            minorVersion: number;
            description: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            $ref: Array<{
              txntaxdetail: string;
            }>;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      referencetype: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          name: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          value: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      exchangerateresponse: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          AsOfDate: {
            filterable: boolean;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "CustomField ": {
            $ref: Array<{
              customfield: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SourceCurrencyCode: {
            filterable: boolean;
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Rate: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          TargetCurrencyCode: {
            default: string;
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          MetaData: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              modificationmetadata: string;
            }>;
          };
        };
      };
      pcesalesitemline: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DetailType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          SalesItemLineDetail: {
            type: string;
            requiredFlag: string;
            $ref: Array<{
              pcesalesitemlinedetail: string;
            }>;
          };
          LineNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          CostAmount: {
            maxLen: string;
            requiredFlag: string;
            type: string;
            minorVersion: number;
            description: string;
          };
          HomeCostAmount: {
            maxLen: string;
            requiredFlag: string;
            type: string;
            minorVersion: number;
            description: string;
          };
          Id: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
        };
      };
      purchaseorderresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          "CustomField ": {
            $ref: Array<{
              customfield: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          APAccountRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          POEmail: {
            $ref: Array<{
              emailaddress: string;
            }>;
            type: string;
            description: string;
            minorVersion: number;
            requiredFlag: string;
          };
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SalesTermRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "LinkedTxn [0..n]": {
            readOnly: boolean;
            $ref: Array<{
              linkedtxn: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          GlobalTaxCalculation: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          TotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          Memo: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          POStatus: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          TransactionLocationType: {
            minorVersion: number;
            default: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          DueDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            type: string;
            $ref: Array<{
              date: string;
            }>;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          DocNumber: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          VendorRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ShipMethodRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          RecurDataRef: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          "Line [0..n]": {
            $ref: Array<{
              itembasedexpenseline?: string;
              accountbasedexpenseline?: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TxnTaxDetail: {
            $ref: Array<{
              txntaxdetail: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          ShipTo: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ExchangeRate: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ShipAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          VendorAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          EmailStatus: {
            default: string;
            type: string;
            description: string;
            minorVersion: number;
            requiredFlag: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
        };
      };
      itembasedexpenseline: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          "LinkedTxn [0..n]": {
            description: string;
            requiredFlag: string;
            readOnly: boolean;
            minorVersion: number;
            type: string;
            $ref: Array<{
              linkedtxn: string;
            }>;
          };
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          ItemBasedExpenseLineDetail: {
            type: string;
            requiredFlag: string;
            $ref: Array<{
              itembasedexpenselinedetail: string;
            }>;
          };
          LineNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DetailType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
        };
      };
      vendorbalancedetailquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          term: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_duedate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          accounting_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_duedate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          duedate_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          report_date: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          appaid: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          vendor: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          columns: {
            default: string;
            table: {
              columns_apaging: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      vendorcreditrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          VendorRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              itembasedexpenseline?: string;
              accountbasedexpenseline?: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      transactionlistbycustomerquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          payment_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          duedate_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          arpaid: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          bothamount: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          transaction_type: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          docnum: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_moddate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          source_account_type: {
            default: string;
            table: {
              account_types: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
          group_by: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_duedate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          columns: {
            default: string;
            table: {
              columns_tax: Array<string>;
            };
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_duedate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          memo: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          appaid: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          moddate_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          printed: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          createdate_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          cleared: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          qzurl: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          term: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_createdate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          name: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          sort_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_createdate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_moddate: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      balancesheetreportrows: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          "Row [0..n]": {
            table: {
              group_balancesheet: Array<string>;
            };
            description: string;
            $ref: Array<{
              reportrow: string;
            }>;
          };
        };
      };
      classsalesquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          accounting_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          class: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          item: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          summarize_column_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      paymentmethodresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          Name: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Active: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          Type: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      paymentlinedetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Discount: {
            $ref: Array<{
              discountoverride: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Balance: {
            readOnly: boolean;
            type: string;
            description: string;
          };
          ItemRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      invoicerequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          ProjectRef: {
            description: string;
            filterable: boolean;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            minorVersion: number;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          CustomerRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              salesitemline?: string;
              groupline?: string;
              descriptiononlyline?: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      telephonenumber30: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          FreeFormNumber: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      cashflowtoplevel: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Header: {
            description: string;
            $ref: Array<{
              reportheader: string;
            }>;
          };
          Rows: {
            description: string;
            $ref: Array<{
              cashflowreportrows: string;
            }>;
          };
          Columns: {
            description: string;
            $ref: Array<{
              reportcolumns: string;
            }>;
          };
        };
      };
      customertyperef: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          value: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      productandservicesprefs: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          RevenueRecognitionEnabled: {
            default: string;
            type: string;
            minorVersion: number;
            description: string;
          };
          RecognitionFrequencyType: {
            type: string;
            minorVersion: number;
            description: string;
          };
          ForSales: {
            default: string;
            type: string;
            description: string;
          };
          QuantityOnHand: {
            default: string;
            type: string;
            description: string;
          };
          QuantityWithPriceAndRate: {
            default: string;
            type: string;
            description: string;
          };
          ForPurchase: {
            default: string;
            type: string;
            description: string;
          };
        };
      };
      recurringtransactionrequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          RecurringInfo: {
            $ref: Array<{
              recurringinfo: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      taxsummaryquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          accounting_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          agency_id: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      taxclassification: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          ApplicableTo: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Code: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Name: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Level: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          ParentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Description: {
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      taxline: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          DetailType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          Amount: {
            maxLen: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TaxLineDetail: {
            $ref: Array<{
              taxlinedetail: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      agedpayablesreportrows: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          "Row [0..n]": {
            table: {
              group_agedpayablessheet: Array<string>;
            };
            description: string;
            $ref: Array<{
              reportrow: string;
            }>;
          };
        };
      };
      date: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          date: {
            type: string;
            description: string;
          };
        };
      };
      descriptiononlyline: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DetailType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          LineNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            readOnly: boolean;
            type: string;
            minorVersion: number;
            description: string;
          };
          DescriptionLineDetail: {
            type: string;
            requiredFlag: string;
            $ref: Array<{
              descriptiononly: string;
            }>;
          };
          Id: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
        };
      };
      journalreportqueryUS: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          end_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          columns: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      salesreceiptresponse: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<string>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<string>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          TxnDate: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            default: string;
            type: string;
          };
          ShipFromAddr: {
            minorVersion: number;
            description: string;
            requiredFlag: string;
            table: {
              physical_address: Array<string>;
            };
            type: string;
            $ref: Array<{
              physicaladdress: string;
            }>;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          "CustomField ": {
            $ref: Array<{
              customfield: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          HomeBalance: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
          };
          ShipDate: {
            $ref: Array<{
              date: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TrackingNum: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ClassRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PrintStatus: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          PaymentRefNum: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DeliveryInfo: {
            readOnly: boolean;
            type: string;
            description: string;
            $ref: Array<{
              deliveryinfo: string;
            }>;
          };
          TxnSource: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          "LinkedTxn [0..n]": {
            $ref: Array<{
              linkedtxn: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          RecurDataRef: {
            readOnly: boolean;
            type: string;
            description: string;
            minorVersion: number;
            $ref: Array<{
              referencetype: string;
            }>;
          };
          GlobalTaxCalculation: {
            default: string;
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          TotalAmt: {
            filterable: boolean;
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          TransactionLocationType: {
            minorVersion: number;
            default: string;
            requiredFlag: string;
            type: string;
            locales: Array<string>;
            description: string;
          };
          ApplyTaxAfterDiscount: {
            type: string;
            description: string;
            locales: Array<string>;
            requiredFlag: string;
          };
          DocNumber: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            maxLen: string;
            type: string;
          };
          PrivateNote: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DepositToAccountRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          "Line [0..n]": {
            $ref: Array<{
              salesitemline?: string;
              groupline?: string;
              descriptiononlyline?: string;
              discountline?: string;
              subtotalline?: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
          CustomerMemo: {
            $ref: Array<{
              memoref: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          EmailStatus: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          ProjectRef: {
            description: string;
            filterable: boolean;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            minorVersion: number;
          };
          CreditCardPayment: {
            $ref: Array<{
              creditcardpayment: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Balance: {
            filterable: boolean;
            type: string;
            readOnly: boolean;
            sortable: boolean;
            description: string;
          };
          CustomerRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          TxnTaxDetail: {
            $ref: Array<{
              txntaxdetail: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          SyncToken: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          PaymentMethodRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ExchangeRate: {
            default: string;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ShipAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          HomeTotalAmt: {
            readOnly: boolean;
            type: string;
            description: string;
            systemDefined: boolean;
          };
          DepartmentRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          ShipMethodRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          BillAddr: {
            table: {
              physical_address: Array<string>;
            };
            $ref: Array<{
              physicaladdress: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          FreeFormAddress: {
            type: string;
            description: string;
            systemDefined: boolean;
          };
          MetaData: {
            $ref: Array<{
              modificationmetadata: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          BillEmail: {
            description: string;
            type: string;
            requiredFlag: string;
            $ref: Array<{
              emailaddress: string;
            }>;
          };
          Id: {
            sortable: boolean;
            description: string;
            filterable: boolean;
            requiredFlag: string;
            systemDefined: boolean;
            readOnly: boolean;
            type: string;
          };
        };
      };
      customersalesquery: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          customer: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          qzurl: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          accounting_method: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          end_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          date_macro: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          class: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          item: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          sort_order: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          summarize_column_by: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          department: {
            default: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          start_date: {
            type: string;
            requiredFlag: string;
            description: string;
          };
        };
      };
      emailmessagesprefs: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          InvoiceMessage: {
            type: string;
            description: string;
            $ref: Array<{
              emailmessagetype: string;
            }>;
          };
          EstimateMessage: {
            type: string;
            description: string;
            $ref: Array<{
              emailmessagetype: string;
            }>;
          };
          SalesReceiptMessage: {
            type: string;
            description: string;
            $ref: Array<{
              emailmessagetype: string;
            }>;
          };
          StatementMessage: {
            type: string;
            description: string;
            $ref: Array<{
              emailmessagetype: string;
            }>;
          };
        };
      };
      linkedtxn: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          TxnLineId: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          TxnId: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          TxnType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      estimaterequest: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<any>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<string>;
        type: string;
        properties: {
          ProjectRef: {
            description: string;
            filterable: boolean;
            requiredFlag: string;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            minorVersion: number;
          };
          Line: {
            $ref: Array<{
              salesitemline?: string;
              groupline?: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CustomerRef: {
            filterable: boolean;
            $ref: Array<{
              referencetype: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          CurrencyRef: {
            $ref: Array<{
              currencyref: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      reporttoplevel: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          Header: {
            description: string;
            $ref: Array<{
              reportheader: string;
            }>;
          };
          Rows: {
            description: string;
            $ref: Array<{
              reportrows: string;
            }>;
          };
          Columns: {
            description: string;
            $ref: Array<{
              reportcolumns: string;
            }>;
          };
        };
      };
      accountbasedexpenselinebill: {
        name: string;
        ShowFirst: Array<string>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          "LinkedTxn [0..n]": {
            readOnly: boolean;
            $ref: Array<{
              linkedtxnbill: string;
            }>;
            type: string;
            requiredFlag: string;
            description: string;
          };
          Description: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          DetailType: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          LineNum: {
            type: string;
            requiredFlag: string;
            description: string;
          };
          Amount: {
            maxLen: string;
            type: string;
            description: string;
            requiredFlag: string;
          };
          Id: {
            readOnly: boolean;
            description: string;
            type: string;
            requiredFlag: string;
            systemDefined: boolean;
          };
          AccountBasedExpenseLineDetail: {
            $ref: Array<{
              accountbasedexpenselinedetail: string;
            }>;
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      entitlementsresponse: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          PlanName: {
            type: string;
            description: string;
          };
          "Entitlement [0..n]": {
            description: string;
          };
          SupportedLanguages: {
            type: string;
            description: string;
          };
          Entitlement: {
            maxLen: string;
            type: string;
            description: string;
            $ref: Array<{
              telephonenumber: string;
            }>;
          };
          CompanyStartDate: {
            type: string;
            description: string;
            $ref: Array<{
              datetime: string;
            }>;
          };
          EmployerId: {
            type: string;
            description: string;
          };
          QboCompany: {
            type: string;
            description: string;
          };
          Email: {
            maxLen: string;
            type: string;
            description: string;
            $ref: Array<{
              emailaddress: string;
            }>;
          };
          WebAddr: {
            type: string;
            description: string;
            $ref: Array<{
              websiteaddress: string;
            }>;
          };
          FiscalYearStartMonth: {
            type: string;
            description: string;
          };
          "Thresholds [0..n]": {
            $ref: Array<{
              threshold: string;
            }>;
            type: string;
            description: string;
            minorVersion: number;
          };
          DaysRemainingTrial: {
            type: string;
            description: string;
          };
          MaxUsers: {
            type: string;
            description: string;
          };
          CurrentUsers: {
            type: string;
            description: string;
          };
        };
      };
      taxratedetail: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<any>;
        Optional: Array<string>;
        Required: Array<string>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          TaxTypeApplicable: {
            type: string;
            description: string;
            requiredFlag: string;
          };
          TaxRateRef: {
            $ref: Array<{
              referencetype: string;
            }>;
            requiredFlag: string;
            description: string;
          };
          TaxOrder: {
            type: string;
            description: string;
            requiredFlag: string;
          };
        };
      };
      reportcolumn: {
        name: string;
        ShowFirst: Array<any>;
        Default: Array<string>;
        Optional: Array<any>;
        Required: Array<any>;
        RequiredForUpdate: Array<any>;
        ConditionallyRequired: Array<any>;
        type: string;
        properties: {
          ColType: {
            type: string;
            description: string;
          };
          ColTitle: {
            type: string;
            description: string;
          };
        };
      };
    };
  };
  codes: {
    qbpayments: {
      Charges: {
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
      };
      Paymentreceipt: {
        "Get0-response": string;
      };
      Tokens: {
        "Create0-response": string;
        "Create1-response": string;
        "Create0-request": string;
        "Create1-request": string;
      };
      Echecks: {
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
      };
      Cards: {
        "Delete0-request": string;
        "Delete0-response": string;
        "createCardFromToken0-request": string;
        "Get0-request": string;
        "List0-response": string;
        "createCard0-response": string;
        "createCard0-request": string;
        "createCardFromToken0-response": string;
        "Get0-response": string;
      };
      Bankaccounts: {
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
      };
    };
    qbo: {
      Aragingdetail: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Invoice: {
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
      };
      Purchase: {
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
      };
      Exchangerate: {
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
      };
      Recurringtransaction: {
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
      };
      Creditmemo: {
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
      };
      Taxrate: {
        "Query0-request": string;
        "Read0-response-xml": string;
        "Read0-response": string;
        "Query0-response": string;
        "Query0-request-xml": string;
        "Query0-response-xml": string;
      };
      Entitlements: {
        "Read0-response-xml": string;
        "Read0-response": string;
      };
      Employee: {
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
      };
      Transactionlistbyvendor: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Customerincome: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Department: {
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
      };
      Customerbalance: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Salesbycustomer: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Preferences: {
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
      };
      Balancesheet: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Reimbursecharge: {
        "Query0-request": string;
        "Read0-response-xml": string;
        "Read0-response": string;
        "Query0-response": string;
        "Query0-request-xml": string;
        "Query0-response-xml": string;
      };
      Vendor: {
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
      };
      Billpayment: {
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
      };
      Journalcode: {
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
      };
      Vendorbalancedetail: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Taxagency: {
        "Create0-request-xml": string;
        "Query0-request": string;
        "Read0-response": string;
        "Create0-response": string;
        "Create0-request": string;
        "Query0-response": string;
      };
      Transactionlistwithsplits: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Generalledger: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Purchaseorder: {
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
      };
      Accountlistdetail: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Transfer: {
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
      };
      Term: {
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
      };
      Profitandloss: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Customerbalancedetail: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Paymentmethod: {
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
      };
      Class: {
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
      };
      Transactionlist: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Customer: {
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
      };
      Apagingsummary: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Account: {
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
      };
      Taxcode: {
        "Query0-request": string;
        "Read0-response-xml": string;
        "Read0-response": string;
        "Query0-response": string;
        "Query0-request-xml": string;
        "Query0-response-xml": string;
      };
      Cashflow: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Changedatacapture: {
        "Query0-request": string;
        "Query0-response-xml": string;
        "Query0-request-xml": string;
        "Query0-response": string;
      };
      Taxpayment: {
        "Query0-request": string;
        "Read0-response-xml": string;
        "Read0-response": string;
        "Query0-response": string;
        "Query0-request-xml": string;
        "Query0-response-xml": string;
      };
      Vendorexpenses: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Bill: {
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
      };
      Batch: {
        "BatchRequest0-request": string;
        "BatchRequest0-response": string;
        "BatchRequest0-response-xml": string;
        "BatchRequest0-request-xml": string;
      };
      Budget: {
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
      };
      Generalledgerfr: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Item: {
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
      };
      Refundreceipt: {
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
      };
      Timeactivity: {
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
      };
      Deposit: {
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
      };
      Journalentry: {
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
      };
      Creditcardpayment: {
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
      };
      Salesbyproduct: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Companycurrency: {
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
      };
      Profitandlossdetail: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Companyinfo: {
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
      };
      Inventoryvaluationsummary: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Vendorcredit: {
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
      };
      Salesbyclasssummary: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Taxclassification: {
        "Read2-request": string;
        "Read2-response": string;
        "Read1-response": string;
        "Read0-response": string;
        "Read3-response": string;
      };
      Estimate: {
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
      };
      Vendorbalance: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Inventoryvaluationdetail: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Trialbalance: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Journalreportfr: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Apagingdetail: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Salesbydepartment: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Taxservice: {
        "Create0-response": string;
        "Create0-response-xml": string;
        "Create0-request": string;
        "Create0-request-xml": string;
      };
      Payment: {
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
      };
      Taxsummary: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Fecreport: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Transactionlistbycustomer: {
        "Query0-request": string;
        "Query0-response": string;
      };
      zztemplate: {
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
      };
      Inventoryadjustment: {
        "Delete0-request": string;
        "Delete0-response": string;
        "Read0-response": string;
        "Create0-response": string;
        "Update0-request": string;
        "Create0-request": string;
        "Update0-response": string;
      };
      Salesreceipt: {
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
      };
      Customertype: {
        "Query0-request": string;
        "Read0-response-xml": string;
        "Read0-response": string;
        "Query0-response": string;
        "Query0-request-xml": string;
        "Query0-response-xml": string;
      };
      Attachable: {
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
      };
      Journalreport: {
        "Query0-request": string;
        "Query0-response": string;
      };
      Aragingsummary: {
        "Query0-request": string;
        "Query0-response": string;
      };
    };
  };
};
