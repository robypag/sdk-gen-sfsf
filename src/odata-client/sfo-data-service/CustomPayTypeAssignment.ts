/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CustomPayTypeAssignmentRequestBuilder } from './CustomPayTypeAssignmentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CustomPayTypeAssignment" of service "SFOData".
 */
export class CustomPayTypeAssignment extends Entity implements CustomPayTypeAssignmentType {
  /**
   * Technical entity name for CustomPayTypeAssignment.
   */
  static _entityName = 'CustomPayTypeAssignment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CustomPayTypeAssignment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Customized Pay Type_External Code.
   * Maximum length: 128.
   */
  customPayTypeExternalCode!: string;
  /**
   * Country/Region.
   * Maximum length: 128.
   * @nullable
   */
  country?: string;
  /**
   * createdBy.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * externalCode.
   */
  externalCode!: BigNumber;
  /**
   * lastModifiedBy.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * One-to-many navigation property to the [[Country]] entity.
   */
  countryNav!: Country[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `CustomPayTypeAssignment`.
   * @returns A builder that constructs instances of entity type `CustomPayTypeAssignment`.
   */
  static builder(): EntityBuilderType<CustomPayTypeAssignment, CustomPayTypeAssignmentTypeForceMandatory> {
    return Entity.entityBuilder(CustomPayTypeAssignment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CustomPayTypeAssignment` entity type.
   * @returns A `CustomPayTypeAssignment` request builder.
   */
  static requestBuilder(): CustomPayTypeAssignmentRequestBuilder {
    return new CustomPayTypeAssignmentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CustomPayTypeAssignment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CustomPayTypeAssignment`.
   */
  static customField(fieldName: string): CustomField<CustomPayTypeAssignment> {
    return Entity.customFieldSelector(fieldName, CustomPayTypeAssignment);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Country, CountryType } from './Country';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface CustomPayTypeAssignmentType {
  customPayTypeExternalCode: string;
  country?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface CustomPayTypeAssignmentTypeForceMandatory {
  customPayTypeExternalCode: string;
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace CustomPayTypeAssignment {
  /**
   * Static representation of the [[customPayTypeExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_PAY_TYPE_EXTERNAL_CODE: StringField<CustomPayTypeAssignment> = new StringField('CustomPayType_externalCode', CustomPayTypeAssignment, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<CustomPayTypeAssignment> = new StringField('country', CustomPayTypeAssignment, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<CustomPayTypeAssignment> = new StringField('createdBy', CustomPayTypeAssignment, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<CustomPayTypeAssignment> = new DateField('createdDateTime', CustomPayTypeAssignment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<CustomPayTypeAssignment> = new BigNumberField('externalCode', CustomPayTypeAssignment, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<CustomPayTypeAssignment> = new StringField('lastModifiedBy', CustomPayTypeAssignment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CustomPayTypeAssignment> = new DateField('lastModifiedDateTime', CustomPayTypeAssignment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<CustomPayTypeAssignment> = new StringField('mdfSystemRecordStatus', CustomPayTypeAssignment, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: Link<CustomPayTypeAssignment, Country> = new Link('countryNav', CustomPayTypeAssignment, Country);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<CustomPayTypeAssignment, User> = new OneToOneLink('createdByNav', CustomPayTypeAssignment, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<CustomPayTypeAssignment, User> = new OneToOneLink('lastModifiedByNav', CustomPayTypeAssignment, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<CustomPayTypeAssignment, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', CustomPayTypeAssignment, MdfEnumValue);
  /**
   * All fields of the CustomPayTypeAssignment entity.
   */
  export const _allFields: Array<StringField<CustomPayTypeAssignment> | DateField<CustomPayTypeAssignment> | BigNumberField<CustomPayTypeAssignment> | Link<CustomPayTypeAssignment, Country> | OneToOneLink<CustomPayTypeAssignment, User> | OneToOneLink<CustomPayTypeAssignment, MdfEnumValue>> = [
    CustomPayTypeAssignment.CUSTOM_PAY_TYPE_EXTERNAL_CODE,
    CustomPayTypeAssignment.COUNTRY,
    CustomPayTypeAssignment.CREATED_BY,
    CustomPayTypeAssignment.CREATED_DATE_TIME,
    CustomPayTypeAssignment.EXTERNAL_CODE,
    CustomPayTypeAssignment.LAST_MODIFIED_BY,
    CustomPayTypeAssignment.LAST_MODIFIED_DATE_TIME,
    CustomPayTypeAssignment.MDF_SYSTEM_RECORD_STATUS,
    CustomPayTypeAssignment.COUNTRY_NAV,
    CustomPayTypeAssignment.CREATED_BY_NAV,
    CustomPayTypeAssignment.LAST_MODIFIED_BY_NAV,
    CustomPayTypeAssignment.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CustomPayTypeAssignment> = new AllFields('*', CustomPayTypeAssignment);
  /**
   * All key fields of the CustomPayTypeAssignment entity.
   */
  export const _keyFields: Array<Selectable<CustomPayTypeAssignment>> = [CustomPayTypeAssignment.CUSTOM_PAY_TYPE_EXTERNAL_CODE, CustomPayTypeAssignment.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property CustomPayTypeAssignment.
   */
  export const _keys: { [keys: string]: Selectable<CustomPayTypeAssignment> } = CustomPayTypeAssignment._keyFields.reduce((acc: { [keys: string]: Selectable<CustomPayTypeAssignment> }, field: Selectable<CustomPayTypeAssignment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
