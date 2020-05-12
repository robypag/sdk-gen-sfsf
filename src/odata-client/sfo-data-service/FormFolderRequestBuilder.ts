/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormFolder } from './FormFolder';

/**
 * Request builder class for operations supported on the [[FormFolder]] entity.
 */
export class FormFolderRequestBuilder extends RequestBuilder<FormFolder> {
  /**
   * Returns a request builder for retrieving one `FormFolder` entity based on its keys.
   * @param folderId Key property. See [[FormFolder.folderId]].
   * @returns A request builder for creating requests to retrieve one `FormFolder` entity based on its keys.
   */
  getByKey(folderId: BigNumber): GetByKeyRequestBuilder<FormFolder> {
    return new GetByKeyRequestBuilder(FormFolder, { folderId: folderId });
  }

  /**
   * Returns a request builder for querying all `FormFolder` entities.
   * @returns A request builder for creating requests to retrieve all `FormFolder` entities.
   */
  getAll(): GetAllRequestBuilder<FormFolder> {
    return new GetAllRequestBuilder(FormFolder);
  }
}
