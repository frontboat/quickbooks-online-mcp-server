// https://static.developer.intuit.com/JSONObjects/EntityJsonObject_v1.json

export type Root = {
  entities: {
    qbo: {
      APAgingDetail: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      APAgingSummary: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      ARAgingDetail: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      ARAgingSummary: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      Account: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        table: {
          frenchpcgaccountlist: Array<string>;
        };
        title: string;
      };
      AccountListDetail: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      Attachable: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          DOWNLOAD: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description?: string;
              name: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          UPLOAD: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        table: {
          attachable_content_types: Array<string>;
        };
        title: string;
      };
      BalanceSheet: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      Batch: {
        description: string;
        operations: {
          DEFAULT: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
      Bill: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      BillPayment: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              "Content type"?: string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      Budget: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      CashFlow: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      ChangeDataCapture: {
        code: string;
        description: string;
        "model-header": string;
        operations: {
          DEFAULT: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description?: string;
              name: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
      Class: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      CompanyCurrency: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
      CompanyInfo: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      CreditCardPayment: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
      CreditMemo: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          PDF: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          SEND: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      Customer: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
      CustomerBalance: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      CustomerBalanceDetail: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      CustomerIncome: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      CustomerType: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
        };
        title: string;
      };
      Department: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      Deposit: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
      Employee: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
      Entitlements: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL (OAUTH1)": string;
              "Production Base URL (OAUTH2)": string;
              "Sandbox Base URL (OAUTH1)": string;
              "Sandbox Base URL (OAUTH2)": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              name: string;
            }>;
          }>;
        };
        title: string;
      };
      Estimate: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          PDF: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          SEND: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      Exchangerate: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
              "Content type"?: string;
            };
            description?: string;
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      FECReport: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      GeneralLedger: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      GeneralLedgerFR: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      InventoryAdjustment: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      InventoryValuationDetail: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      InventoryValuationSummary: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      Invoice: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          PDF: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          SEND: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
      Item: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
      JournalCode: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      JournalEntry: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
      JournalReport: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      JournalReportFR: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      Payment: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          PDF: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          SEND: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      PaymentMethod: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      Preferences: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
      ProfitAndLoss: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      ProfitAndLossDetail: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      Purchase: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      PurchaseOrder: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description?: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          PDF: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          SEND: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      RecurringTransaction: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
        };
        title: string;
      };
      RefundReceipt: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          PDF: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          SEND: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      ReimburseCharge: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
        };
        title: string;
      };
      SalesByClassSummary: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      SalesByCustomer: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      SalesByDepartment: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      SalesByProduct: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      SalesReceipt: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          PDF: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          SEND: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      TaxAgency: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
        };
        title: string;
      };
      TaxClassification: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
        };
        title: string;
      };
      TaxCode: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
      TaxPayment: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
        };
        "optional-description": {
          heading: string;
        };
        title: string;
      };
      TaxRate: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
      TaxService: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
      TaxSummary: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      Term: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      TimeActivity: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      TransactionList: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      TransactionListByCustomer: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      TransactionListByVendor: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      TransactionListWithSplits: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      Transfer: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
      TrialBalance: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      Vendor: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
      VendorBalance: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      VendorBalanceDetail: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      VendorCredit: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
          QUERY: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              code: string;
              name: string;
              description?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              description: string;
              name: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              code: string;
              model?: {
                $ref: string;
              };
              name: string;
              description?: string;
            }>;
          }>;
        };
        title: string;
      };
      VendorExpenses: {
        code: string;
        description: string;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          QUERY: Array<{
            definition: {
              "Accept type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
    };
    qbpayments: {
      BankAccounts: {
        code: string;
        description: string;
        locales: Array<string>;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              description?: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              description?: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              description?: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      Cards: {
        code: string;
        description: string;
        locales: Array<string>;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              description?: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
          DELETE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              description?: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              description?: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      Charges: {
        code: string;
        description: string;
        locales: Array<string>;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              "Content type"?: string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              description?: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
          UPDATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              description?: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
          VOID: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              description?: string;
              model: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      EChecks: {
        code: string;
        description: string;
        locales: Array<string>;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
          READ: Array<{
            definition: {
              "Content type"?: string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              description?: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
          VOID: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              description?: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        title: string;
      };
      PaymentReceipt: {
        code: string;
        description: string;
        locales: Array<string>;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          READ: Array<{
            definition: {
              Accept: string;
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            name: string;
            sections: Array<{
              description?: string;
              model?: {
                $ref: string;
              };
              name: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
      Tokens: {
        code: string;
        description: string;
        locales: Array<string>;
        model: {
          $ref: string;
        };
        "model-description": string;
        "model-header": string;
        operations: {
          CREATE: Array<{
            definition: {
              "Content type": string;
              Operation: string;
              "Production Base URL": string;
              "Sandbox Base URL": string;
            };
            description: string;
            name: string;
            sections: Array<{
              description: string;
              model?: {
                $ref: string;
              };
              name: string;
              code?: string;
            }>;
          }>;
        };
        "optional-description": {
          description: string;
          heading: string;
        };
        title: string;
      };
    };
  };
};
