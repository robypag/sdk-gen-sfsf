/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AvailableTimeTypeRequestBuilder } from './AvailableTimeTypeRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AvailableTimeType" of service "SFOData".
 */
export class AvailableTimeType extends Entity implements AvailableTimeTypeType {
  /**
   * Technical entity name for AvailableTimeType.
   */
  static _entityName = 'AvailableTimeType';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AvailableTimeType.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Time Profile_External Code.
   * Maximum length: 128.
   */
  timeTypeProfileExternalCode!: string;
  /**
   * Created By.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Enabled in employee self-service scenario.
   * @nullable
   */
  enabledInEssScenario?: boolean;
  /**
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Favorite Time Type.
   * @nullable
   */
  favoriteTimeType?: boolean;
  /**
   * Hide Account Balance.
   * @nullable
   */
  hideAccountBalance?: boolean;
  /**
   * Last Modified By.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified On.
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
   * Time Type.
   * Maximum length: 128.
   * @nullable
   */
  timeType?: string;
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
   * One-to-one navigation property to the [[TimeType]] entity.
   */
  timeTypeNav!: TimeType;

  /**
   * Returns an entity builder to construct instances `AvailableTimeType`.
   * @returns A builder that constructs instances of entity type `AvailableTimeType`.
   */
  static builder(): EntityBuilderType<AvailableTimeType, AvailableTimeTypeTypeForceMandatory> {
    return Entity.entityBuilder(AvailableTimeType);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AvailableTimeType` entity type.
   * @returns A `AvailableTimeType` request builder.
   */
  static requestBuilder(): AvailableTimeTypeRequestBuilder {
    return new AvailableTimeTypeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AvailableTimeType`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AvailableTimeType`.
   */
  static customField(fieldName: string): CustomField<AvailableTimeType> {
    return Entity.customFieldSelector(fieldName, AvailableTimeType);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { TimeType, TimeTypeType } from './TimeType';

export interface AvailableTimeTypeType {
  timeTypeProfileExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  enabledInEssScenario?: boolean;
  externalCode: string;
  favoriteTimeType?: boolean;
  hideAccountBalance?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  timeType?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  timeTypeNav: TimeTypeType;
}

export interface AvailableTimeTypeTypeForceMandatory {
  timeTypeProfileExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  enabledInEssScenario: boolean;
  externalCode: string;
  favoriteTimeType: boolean;
  hideAccountBalance: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  timeType: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  timeTypeNav: TimeTypeType;
}

export namespace AvailableTimeType {
  /**
   * Static representation of the [[timeTypeProfileExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE_PROFILE_EXTERNAL_CODE: StringField<AvailableTimeType> = new StringField('TimeTypeProfile_externalCode', AvailableTimeType, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<AvailableTimeType> = new StringField('createdBy', AvailableTimeType, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<AvailableTimeType> = new DateField('createdDateTime', AvailableTimeType, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[enabledInEssScenario]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENABLED_IN_ESS_SCENARIO: BooleanField<AvailableTimeType> = new BooleanField('enabledInEssScenario', AvailableTimeType, 'Edm.Boolean');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<AvailableTimeType> = new StringField('externalCode', AvailableTimeType, 'Edm.String');
  /**
   * Static representation of the [[favoriteTimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAVORITE_TIME_TYPE: BooleanField<AvailableTimeType> = new BooleanField('favoriteTimeType', AvailableTimeType, 'Edm.Boolean');
  /**
   * Static representation of the [[hideAccountBalance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIDE_ACCOUNT_BALANCE: BooleanField<AvailableTimeType> = new BooleanField('hideAccountBalance', AvailableTimeType, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<AvailableTimeType> = new StringField('lastModifiedBy', AvailableTimeType, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<AvailableTimeType> = new DateField('lastModifiedDateTime', AvailableTimeType, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<AvailableTimeType> = new StringField('mdfSystemRecordStatus', AvailableTimeType, 'Edm.String');
  /**
   * Static representation of the [[timeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE: StringField<AvailableTimeType> = new StringField('timeType', AvailableTimeType, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<AvailableTimeType, User> = new OneToOneLink('createdByNav', AvailableTimeType, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<AvailableTimeType, User> = new OneToOneLink('lastModifiedByNav', AvailableTimeType, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<AvailableTimeType, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', AvailableTimeType, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[timeTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE_NAV: OneToOneLink<AvailableTimeType, TimeType> = new OneToOneLink('timeTypeNav', AvailableTimeType, TimeType);
  /**
   * All fields of the AvailableTimeType entity.
   */
  export const _allFields: Array<StringField<AvailableTimeType> | DateField<AvailableTimeType> | BooleanField<AvailableTimeType> | OneToOneLink<AvailableTimeType, User> | OneToOneLink<AvailableTimeType, MdfEnumValue> | OneToOneLink<AvailableTimeType, TimeType>> = [
    AvailableTimeType.TIME_TYPE_PROFILE_EXTERNAL_CODE,
    AvailableTimeType.CREATED_BY,
    AvailableTimeType.CREATED_DATE_TIME,
    AvailableTimeType.ENABLED_IN_ESS_SCENARIO,
    AvailableTimeType.EXTERNAL_CODE,
    AvailableTimeType.FAVORITE_TIME_TYPE,
    AvailableTimeType.HIDE_ACCOUNT_BALANCE,
    AvailableTimeType.LAST_MODIFIED_BY,
    AvailableTimeType.LAST_MODIFIED_DATE_TIME,
    AvailableTimeType.MDF_SYSTEM_RECORD_STATUS,
    AvailableTimeType.TIME_TYPE,
    AvailableTimeType.CREATED_BY_NAV,
    AvailableTimeType.LAST_MODIFIED_BY_NAV,
    AvailableTimeType.MDF_SYSTEM_RECORD_STATUS_NAV,
    AvailableTimeType.TIME_TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AvailableTimeType> = new AllFields('*', AvailableTimeType);
  /**
   * All key fields of the AvailableTimeType entity.
   */
  export const _keyFields: Array<Selectable<AvailableTimeType>> = [AvailableTimeType.TIME_TYPE_PROFILE_EXTERNAL_CODE, AvailableTimeType.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property AvailableTimeType.
   */
  export const _keys: { [keys: string]: Selectable<AvailableTimeType> } = AvailableTimeType._keyFields.reduce((acc: { [keys: string]: Selectable<AvailableTimeType> }, field: Selectable<AvailableTimeType>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
