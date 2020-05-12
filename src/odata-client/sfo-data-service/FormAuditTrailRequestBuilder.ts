/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormAuditTrail } from './FormAuditTrail';

/**
 * Request builder class for operations supported on the [[FormAuditTrail]] entity.
 */
export class FormAuditTrailRequestBuilder extends RequestBuilder<FormAuditTrail> {
  /**
   * Returns a request builder for retrieving one `FormAuditTrail` entity based on its keys.
   * @param auditTrailId Key property. See [[FormAuditTrail.auditTrailId]].
   * @returns A request builder for creating requests to retrieve one `FormAuditTrail` entity based on its keys.
   */
  getByKey(auditTrailId: BigNumber): GetByKeyRequestBuilder<FormAuditTrail> {
    return new GetByKeyRequestBuilder(FormAuditTrail, { auditTrailId: auditTrailId });
  }

  /**
   * Returns a request builder for querying all `FormAuditTrail` entities.
   * @returns A request builder for creating requests to retrieve all `FormAuditTrail` entities.
   */
  getAll(): GetAllRequestBuilder<FormAuditTrail> {
    return new GetAllRequestBuilder(FormAuditTrail);
  }
}
