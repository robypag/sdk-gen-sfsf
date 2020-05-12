/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserRewardInfoRequestBuilder } from './UserRewardInfoRequestBuilder';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "UserRewardInfo" of service "SFOData".
 */
export class UserRewardInfo extends Entity implements UserRewardInfoType {
  /**
   * Technical entity name for UserRewardInfo.
   */
  static _entityName = 'UserRewardInfo';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for UserRewardInfo.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * availableAmount.
   * @nullable
   */
  availableAmount?: BigNumber;
  /**
   * currency.
   * @nullable
   */
  currency?: string;
  /**
   * userId.
   */
  userId!: string;

  /**
   * Returns an entity builder to construct instances `UserRewardInfo`.
   * @returns A builder that constructs instances of entity type `UserRewardInfo`.
   */
  static builder(): EntityBuilderType<UserRewardInfo, UserRewardInfoTypeForceMandatory> {
    return Entity.entityBuilder(UserRewardInfo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `UserRewardInfo` entity type.
   * @returns A `UserRewardInfo` request builder.
   */
  static requestBuilder(): UserRewardInfoRequestBuilder {
    return new UserRewardInfoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserRewardInfo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `UserRewardInfo`.
   */
  static customField(fieldName: string): CustomField<UserRewardInfo> {
    return Entity.customFieldSelector(fieldName, UserRewardInfo);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface UserRewardInfoType {
  availableAmount?: BigNumber;
  currency?: string;
  userId: string;
}

export interface UserRewardInfoTypeForceMandatory {
  availableAmount: BigNumber;
  currency: string;
  userId: string;
}

export namespace UserRewardInfo {
  /**
   * Static representation of the [[availableAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AVAILABLE_AMOUNT: BigNumberField<UserRewardInfo> = new BigNumberField('availableAmount', UserRewardInfo, 'Edm.Decimal');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<UserRewardInfo> = new StringField('currency', UserRewardInfo, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<UserRewardInfo> = new StringField('userId', UserRewardInfo, 'Edm.String');
  /**
   * All fields of the UserRewardInfo entity.
   */
  export const _allFields: Array<BigNumberField<UserRewardInfo> | StringField<UserRewardInfo>> = [
    UserRewardInfo.AVAILABLE_AMOUNT,
    UserRewardInfo.CURRENCY,
    UserRewardInfo.USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<UserRewardInfo> = new AllFields('*', UserRewardInfo);
  /**
   * All key fields of the UserRewardInfo entity.
   */
  export const _keyFields: Array<Selectable<UserRewardInfo>> = [UserRewardInfo.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property UserRewardInfo.
   */
  export const _keys: { [keys: string]: Selectable<UserRewardInfo> } = UserRewardInfo._keyFields.reduce((acc: { [keys: string]: Selectable<UserRewardInfo> }, field: Selectable<UserRewardInfo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
