# SquareConnect.V1Payment

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The payment&#39;s unique identifier. | [optional] 
**merchantId** | **String** | The unique identifier of the merchant that took the payment. | [optional] 
**createdAt** | **String** | The time when the payment was created, in ISO 8601 format. | [optional] 
**creatorId** | **String** | The unique identifier of the Square account that took the payment. | [optional] 
**device** | [**Device**](Device.md) | The device that took the payment. | [optional] 
**paymentUrl** | **String** | The URL of the payment&#39;s detail page in the merchant dashboard. The merchant must be signed in to the merchant dashboard to view this page. | [optional] 
**receiptUrl** | **String** | The URL of the receipt for the payment. Note that for split tender payments, this URL corresponds to the receipt for the first tender listed in the payment&#39;s tender field. Each Tender object has its own receipt_url field you can use to get the other receipts associated with a split tender payment. | [optional] 
**inclusiveTaxMoney** | [**V1Money**](V1Money.md) | The sum of all inclusive taxes associated with the payment. | [optional] 
**additiveTaxMoney** | [**V1Money**](V1Money.md) | The sum of all additive taxes associated with the payment. | [optional] 
**taxMoney** | [**V1Money**](V1Money.md) | The total of all taxes applied to the payment. This is always the sum of inclusive_tax_money and additive_tax_money. | [optional] 
**tipMoney** | [**V1Money**](V1Money.md) | The total of all tips applied to the payment. | [optional] 
**discountMoney** | [**V1Money**](V1Money.md) | The total of all discounts applied to the payment. | [optional] 
**totalCollectedMoney** | [**V1Money**](V1Money.md) | The total of all discounts applied to the payment. | [optional] 
**processingFeeMoney** | [**V1Money**](V1Money.md) | The total of all processing fees collected by Square for the payment. | [optional] 
**netTotalMoney** | [**V1Money**](V1Money.md) | The amount to be deposited into the merchant&#39;s bank account for the payment. | [optional] 
**refundedMoney** | [**V1Money**](V1Money.md) | The total of all refunds applied to the payment. | [optional] 
**swedishRoundingMoney** | [**V1Money**](V1Money.md) | The total of all sales, including any applicable taxes, rounded to the smallest legal unit of currency (e.g., the nearest penny in USD, the nearest nickel in CAD) | [optional] 
**grossSalesMoney** | [**V1Money**](V1Money.md) | The total of all sales, including any applicable taxes. | [optional] 
**netSalesMoney** | [**V1Money**](V1Money.md) | The total of all sales, minus any applicable taxes. | [optional] 
**inclusiveTax** | [**[V1PaymentTax]**](V1PaymentTax.md) | All of the inclusive taxes associated with the payment. | [optional] 
**additiveTax** | [**[V1PaymentTax]**](V1PaymentTax.md) | All of the additive taxes associated with the payment. | [optional] 
**tender** | [**[V1Tender]**](V1Tender.md) | All of the additive taxes associated with the payment. | [optional] 
**refunds** | [**[V1Refund]**](V1Refund.md) | All of the refunds applied to the payment. Note that the value of all refunds on a payment can exceed the value of all tenders if a merchant chooses to refund money to a tender after previously accepting returned goods as part of an exchange. | [optional] 
**itemizations** | [**[V1PaymentItemization]**](V1PaymentItemization.md) | The items purchased in the payment. | [optional] 
**surchargeMoney** | [**V1Money**](V1Money.md) | The total of all surcharges applied to the payment. | [optional] 
**surcharges** | [**[V1PaymentSurcharge]**](V1PaymentSurcharge.md) | A list of all surcharges associated with the payment. | [optional]


