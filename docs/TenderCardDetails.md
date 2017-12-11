# SquareConnect.TenderCardDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | The credit card payment&#39;s current state (such as &#x60;AUTHORIZED&#x60; or &#x60;CAPTURED&#x60;). See [TenderCardDetailsStatus](#type-tendercarddetailsstatus) for possible values. | [optional] 
**card** | [**Card**](Card.md) | The credit card&#39;s non-confidential details. | [optional] 
**entryMethod** | **String** | The method used to enter the card&#39;s details for the transaction. | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `AUTHORIZED` (value: `"AUTHORIZED"`)

* `CAPTURED` (value: `"CAPTURED"`)

* `VOIDED` (value: `"VOIDED"`)

* `FAILED` (value: `"FAILED"`)




<a name="EntryMethodEnum"></a>
## Enum: EntryMethodEnum


* `SWIPED` (value: `"SWIPED"`)

* `KEYED` (value: `"KEYED"`)

* `EMV` (value: `"EMV"`)

* `ON_FILE` (value: `"ON_FILE"`)

* `CONTACTLESS` (value: `"CONTACTLESS"`)




