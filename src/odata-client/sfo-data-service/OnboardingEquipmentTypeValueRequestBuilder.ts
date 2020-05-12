/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { OnboardingEquipmentTypeValue } from './OnboardingEquipmentTypeValue';

/**
 * Request builder class for operations supported on the [[OnboardingEquipmentTypeValue]] entity.
 */
export class OnboardingEquipmentTypeValueRequestBuilder extends RequestBuilder<OnboardingEquipmentTypeValue> {
  /**
   * Returns a request builder for retrieving one `OnboardingEquipmentTypeValue` entity based on its keys.
   * @param code Key property. See [[OnboardingEquipmentTypeValue.code]].
   * @returns A request builder for creating requests to retrieve one `OnboardingEquipmentTypeValue` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<OnboardingEquipmentTypeValue> {
    return new GetByKeyRequestBuilder(OnboardingEquipmentTypeValue, { code: code });
  }

  /**
   * Returns a request builder for querying all `OnboardingEquipmentTypeValue` entities.
   * @returns A request builder for creating requests to retrieve all `OnboardingEquipmentTypeValue` entities.
   */
  getAll(): GetAllRequestBuilder<OnboardingEquipmentTypeValue> {
    return new GetAllRequestBuilder(OnboardingEquipmentTypeValue);
  }
}
