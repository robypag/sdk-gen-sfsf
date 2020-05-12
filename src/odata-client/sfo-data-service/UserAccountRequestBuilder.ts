/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { UserAccount } from './UserAccount';

/**
 * Request builder class for operations supported on the [[UserAccount]] entity.
 */
export class UserAccountRequestBuilder extends RequestBuilder<UserAccount> {
  /**
   * Returns a request builder for retrieving one `UserAccount` entity based on its keys.
   * @param username Key property. See [[UserAccount.username]].
   * @returns A request builder for creating requests to retrieve one `UserAccount` entity based on its keys.
   */
  getByKey(username: string): GetByKeyRequestBuilder<UserAccount> {
    return new GetByKeyRequestBuilder(UserAccount, { username: username });
  }

  /**
   * Returns a request builder for querying all `UserAccount` entities.
   * @returns A request builder for creating requests to retrieve all `UserAccount` entities.
   */
  getAll(): GetAllRequestBuilder<UserAccount> {
    return new GetAllRequestBuilder(UserAccount);
  }
}
