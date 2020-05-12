/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormJobRole } from './FormJobRole';

/**
 * Request builder class for operations supported on the [[FormJobRole]] entity.
 */
export class FormJobRoleRequestBuilder extends RequestBuilder<FormJobRole> {
  /**
   * Returns a request builder for retrieving one `FormJobRole` entity based on its keys.
   * @param formContentId Key property. See [[FormJobRole.formContentId]].
   * @param formDataId Key property. See [[FormJobRole.formDataId]].
   * @param roleId Key property. See [[FormJobRole.roleId]].
   * @returns A request builder for creating requests to retrieve one `FormJobRole` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber, roleId: BigNumber): GetByKeyRequestBuilder<FormJobRole> {
    return new GetByKeyRequestBuilder(FormJobRole, {
      formContentId: formContentId,
      formDataId: formDataId,
      roleId: roleId
    });
  }

  /**
   * Returns a request builder for querying all `FormJobRole` entities.
   * @returns A request builder for creating requests to retrieve all `FormJobRole` entities.
   */
  getAll(): GetAllRequestBuilder<FormJobRole> {
    return new GetAllRequestBuilder(FormJobRole);
  }
}
