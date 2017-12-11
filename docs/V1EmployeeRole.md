# SquareConnect.V1EmployeeRole

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The role&#39;s unique ID, Can only be set by Square. | [optional] 
**name** | **String** | The role&#39;s merchant-defined name. | 
**permissions** | **[String]** | The role&#39;s permissions. | 
**isOwner** | **Boolean** | If true, employees with this role have all permissions, regardless of the values indicated in permissions. | [optional] 
**createdAt** | **String** | The time when the employee entity was created, in ISO 8601 format. Is set by Square when the Role is created. | [optional] 
**updatedAt** | **String** | The time when the employee entity was most recently updated, in ISO 8601 format. Is set by Square when the Role updated. | [optional] 


<a name="[PermissionsEnum]"></a>
## Enum: [PermissionsEnum]


* `ACCESS_SALES_HISTORY` (value: `"REGISTER_ACCESS_SALES_HISTORY"`)

* `APPLY_RESTRICTED_DISCOUNTS` (value: `"REGISTER_APPLY_RESTRICTED_DISCOUNTS"`)

* `CHANGE_SETTINGS` (value: `"REGISTER_CHANGE_SETTINGS"`)

* `EDIT_ITEM` (value: `"REGISTER_EDIT_ITEM"`)

* `ISSUE_REFUNDS` (value: `"REGISTER_ISSUE_REFUNDS"`)

* `OPEN_CASH_DRAWER_OUTSIDE_SALE` (value: `"REGISTER_OPEN_CASH_DRAWER_OUTSIDE_SALE"`)

* `VIEW_SUMMARY_REPORTS` (value: `"REGISTER_VIEW_SUMMARY_REPORTS"`)




