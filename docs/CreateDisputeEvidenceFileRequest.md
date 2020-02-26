# SquareConnect.CreateDisputeEvidenceFileRequest

### Description
**Note: This model is in beta.**

Defines parameters for a CreateDisputeEvidenceFile request.

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**idempotency_key** | **String** | Unique ID. For more information, see [Idempotency](https://developer.squareup.com/docs/docs/working-with-apis/idempotency). | 
**evidence_type** | **String** | The type of evidence you are uploading. See [DisputeEvidenceType](#type-disputeevidencetype) for possible values | [optional] 
**content_type** | **String** | The MIME type of the uploaded file. One of image/heic, image/heif, image/jpeg, application/pdf,  image/png, image/tiff. | [optional] 


