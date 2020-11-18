# SquareConnect.TipSettings

### Description



## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_tipping** | **Boolean** | Indicates whether tipping is enabled for this checkout. Defaults to false. | [optional] 
**separate_tip_screen** | **Boolean** | Indicates whether tip options should be presented on their own screen before presenting the signature screen during card payment. Defaults to false. | [optional] 
**custom_tip_field** | **Boolean** | Indicates whether custom tip amounts are allowed during the checkout flow. Defaults to false. | [optional] 
**tip_percentages** | **[Number]** | A list of tip percentages that should be presented during the checkout flow. Specified as up to 3 non-negative integers from 0 to 100 (inclusive). Defaults to [15, 20, 25] | [optional] 
**smart_tipping** | **Boolean** | Enables the \&quot;Smart Tip Amounts\&quot; behavior described in https://squareup.com/help/us/en/article/5069-accept-tips-with-the-square-app. Exact tipping options depend on the region the Square seller is active in.  In the United States and Canada, tipping options will be presented in whole dollar amounts for payments under 10 USD/CAD respectively.  If set to true, the tip_percentages settings is ignored. Defaults to false. | [optional] 


