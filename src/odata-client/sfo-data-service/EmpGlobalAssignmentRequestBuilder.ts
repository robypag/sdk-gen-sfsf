/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmpGlobalAssignment } from './EmpGlobalAssignment';

/**
 * Request builder class for operations supported on the [[EmpGlobalAssignment]] entity.
 */
export class EmpGlobalAssignmentRequestBuilder extends RequestBuilder<EmpGlobalAssignment> {
  /**
   * Returns a request builder for retrieving one `EmpGlobalAssignment` entity based on its keys.
   * @param userId Key property. See [[EmpGlobalAssignment.userId]].
   * @returns A request builder for creating requests to retrieve one `EmpGlobalAssignment` entity based on its keys.
   */
  getByKey(userId: string): GetByKeyRequestBuilder<EmpGlobalAssignment> {
    return new GetByKeyRequestBuilder(EmpGlobalAssignment, { userId: userId });
  }

  /**
   * Returns a request builder for querying all `EmpGlobalAssignment` entities.
   * @returns A request builder for creating requests to retrieve all `EmpGlobalAssignment` entities.
   */
  getAll(): GetAllRequestBuilder<EmpGlobalAssignment> {
    return new GetAllRequestBuilder(EmpGlobalAssignment);
  }
}
