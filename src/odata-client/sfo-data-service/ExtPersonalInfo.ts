/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExtPersonalInfoRequestBuilder } from './ExtPersonalInfoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ExtPersonalInfo" of service "SFOData".
 */
export class ExtPersonalInfo extends Entity implements ExtPersonalInfoType {
  /**
   * Technical entity name for ExtPersonalInfo.
   */
  static _entityName = 'ExtPersonalInfo';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ExtPersonalInfo.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * First Name.
   * Maximum length: 128.
   * @nullable
   */
  firstName?: string;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Last Name.
   * Maximum length: 128.
   * @nullable
   */
  lastName?: string;
  /**
   * Middle Name.
   * Maximum length: 128.
   * @nullable
   */
  middleName?: string;
  /**
   * personalInfoId.
   */
  personalInfoId!: BigNumber;

  /**
   * Returns an entity builder to construct instances `ExtPersonalInfo`.
   * @returns A builder that constructs instances of entity type `ExtPersonalInfo`.
   */
  static builder(): EntityBuilderType<ExtPersonalInfo, ExtPersonalInfoTypeForceMandatory> {
    return Entity.entityBuilder(ExtPersonalInfo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ExtPersonalInfo` entity type.
   * @returns A `ExtPersonalInfo` request builder.
   */
  static requestBuilder(): ExtPersonalInfoRequestBuilder {
    return new ExtPersonalInfoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExtPersonalInfo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ExtPersonalInfo`.
   */
  static customField(fieldName: string): CustomField<ExtPersonalInfo> {
    return Entity.customFieldSelector(fieldName, ExtPersonalInfo);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface ExtPersonalInfoType {
  firstName?: string;
  lastModifiedDateTime?: Moment;
  lastName?: string;
  middleName?: string;
  personalInfoId: BigNumber;
}

export interface ExtPersonalInfoTypeForceMandatory {
  firstName: string;
  lastModifiedDateTime: Moment;
  lastName: string;
  middleName: string;
  personalInfoId: BigNumber;
}

export namespace ExtPersonalInfo {
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<ExtPersonalInfo> = new StringField('firstName', ExtPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<ExtPersonalInfo> = new DateField('lastModifiedDateTime', ExtPersonalInfo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<ExtPersonalInfo> = new StringField('lastName', ExtPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[middleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIDDLE_NAME: StringField<ExtPersonalInfo> = new StringField('middleName', ExtPersonalInfo, 'Edm.String');
  /**
   * Static representation of the [[personalInfoId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSONAL_INFO_ID: BigNumberField<ExtPersonalInfo> = new BigNumberField('personalInfoId', ExtPersonalInfo, 'Edm.Int64');
  /**
   * All fields of the ExtPersonalInfo entity.
   */
  export const _allFields: Array<StringField<ExtPersonalInfo> | DateField<ExtPersonalInfo> | BigNumberField<ExtPersonalInfo>> = [
    ExtPersonalInfo.FIRST_NAME,
    ExtPersonalInfo.LAST_MODIFIED_DATE_TIME,
    ExtPersonalInfo.LAST_NAME,
    ExtPersonalInfo.MIDDLE_NAME,
    ExtPersonalInfo.PERSONAL_INFO_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ExtPersonalInfo> = new AllFields('*', ExtPersonalInfo);
  /**
   * All key fields of the ExtPersonalInfo entity.
   */
  export const _keyFields: Array<Selectable<ExtPersonalInfo>> = [ExtPersonalInfo.PERSONAL_INFO_ID];
  /**
   * Mapping of all key field names to the respective static field property ExtPersonalInfo.
   */
  export const _keys: { [keys: string]: Selectable<ExtPersonalInfo> } = ExtPersonalInfo._keyFields.reduce((acc: { [keys: string]: Selectable<ExtPersonalInfo> }, field: Selectable<ExtPersonalInfo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
