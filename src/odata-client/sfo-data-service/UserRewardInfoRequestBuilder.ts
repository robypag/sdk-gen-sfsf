/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { UserRewardInfo } from './UserRewardInfo';

/**
 * Request builder class for operations supported on the [[UserRewardInfo]] entity.
 */
export class UserRewardInfoRequestBuilder extends RequestBuilder<UserRewardInfo> {
  /**
   * Returns a request builder for retrieving one `UserRewardInfo` entity based on its keys.
   * @param userId Key property. See [[UserRewardInfo.userId]].
   * @returns A request builder for creating requests to retrieve one `UserRewardInfo` entity based on its keys.
   */
  getByKey(userId: string): GetByKeyRequestBuilder<UserRewardInfo> {
    return new GetByKeyRequestBuilder(UserRewardInfo, { userId: userId });
  }

  /**
   * Returns a request builder for querying all `UserRewardInfo` entities.
   * @returns A request builder for creating requests to retrieve all `UserRewardInfo` entities.
   */
  getAll(): GetAllRequestBuilder<UserRewardInfo> {
    return new GetAllRequestBuilder(UserRewardInfo);
  }
}
