/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TimeAccountPostingRuleRequestBuilder } from './TimeAccountPostingRuleRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TimeAccountPostingRule" of service "SFOData".
 */
export class TimeAccountPostingRule extends Entity implements TimeAccountPostingRuleType {
  /**
   * Technical entity name for TimeAccountPostingRule.
   */
  static _entityName = 'TimeAccountPostingRule';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TimeAccountPostingRule.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Time Type_External Code.
   * Maximum length: 128.
   */
  timeTypeExternalCode!: string;
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
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
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
   * Time Account Type.
   * Maximum length: 128.
   * @nullable
   */
  timeAccountType?: string;
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
   * One-to-one navigation property to the [[TimeAccountType]] entity.
   */
  timeAccountTypeNav!: TimeAccountType;

  /**
   * Returns an entity builder to construct instances `TimeAccountPostingRule`.
   * @returns A builder that constructs instances of entity type `TimeAccountPostingRule`.
   */
  static builder(): EntityBuilderType<TimeAccountPostingRule, TimeAccountPostingRuleTypeForceMandatory> {
    return Entity.entityBuilder(TimeAccountPostingRule);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TimeAccountPostingRule` entity type.
   * @returns A `TimeAccountPostingRule` request builder.
   */
  static requestBuilder(): TimeAccountPostingRuleRequestBuilder {
    return new TimeAccountPostingRuleRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountPostingRule`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TimeAccountPostingRule`.
   */
  static customField(fieldName: string): CustomField<TimeAccountPostingRule> {
    return Entity.customFieldSelector(fieldName, TimeAccountPostingRule);
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
import { TimeAccountType, TimeAccountTypeType } from './TimeAccountType';

export interface TimeAccountPostingRuleType {
  timeTypeExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  timeAccountType?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  timeAccountTypeNav: TimeAccountTypeType;
}

export interface TimeAccountPostingRuleTypeForceMandatory {
  timeTypeExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  timeAccountType: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  timeAccountTypeNav: TimeAccountTypeType;
}

export namespace TimeAccountPostingRule {
  /**
   * Static representation of the [[timeTypeExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE_EXTERNAL_CODE: StringField<TimeAccountPostingRule> = new StringField('TimeType_externalCode', TimeAccountPostingRule, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TimeAccountPostingRule> = new StringField('createdBy', TimeAccountPostingRule, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TimeAccountPostingRule> = new DateField('createdDateTime', TimeAccountPostingRule, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<TimeAccountPostingRule> = new StringField('externalCode', TimeAccountPostingRule, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TimeAccountPostingRule> = new StringField('lastModifiedBy', TimeAccountPostingRule, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountPostingRule> = new DateField('lastModifiedDateTime', TimeAccountPostingRule, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountPostingRule> = new StringField('mdfSystemRecordStatus', TimeAccountPostingRule, 'Edm.String');
  /**
   * Static representation of the [[timeAccountType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_TYPE: StringField<TimeAccountPostingRule> = new StringField('timeAccountType', TimeAccountPostingRule, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<TimeAccountPostingRule, User> = new OneToOneLink('createdByNav', TimeAccountPostingRule, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<TimeAccountPostingRule, User> = new OneToOneLink('lastModifiedByNav', TimeAccountPostingRule, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<TimeAccountPostingRule, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', TimeAccountPostingRule, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[timeAccountTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ACCOUNT_TYPE_NAV: OneToOneLink<TimeAccountPostingRule, TimeAccountType> = new OneToOneLink('timeAccountTypeNav', TimeAccountPostingRule, TimeAccountType);
  /**
   * All fields of the TimeAccountPostingRule entity.
   */
  export const _allFields: Array<StringField<TimeAccountPostingRule> | DateField<TimeAccountPostingRule> | OneToOneLink<TimeAccountPostingRule, User> | OneToOneLink<TimeAccountPostingRule, MdfEnumValue> | OneToOneLink<TimeAccountPostingRule, TimeAccountType>> = [
    TimeAccountPostingRule.TIME_TYPE_EXTERNAL_CODE,
    TimeAccountPostingRule.CREATED_BY,
    TimeAccountPostingRule.CREATED_DATE_TIME,
    TimeAccountPostingRule.EXTERNAL_CODE,
    TimeAccountPostingRule.LAST_MODIFIED_BY,
    TimeAccountPostingRule.LAST_MODIFIED_DATE_TIME,
    TimeAccountPostingRule.MDF_SYSTEM_RECORD_STATUS,
    TimeAccountPostingRule.TIME_ACCOUNT_TYPE,
    TimeAccountPostingRule.CREATED_BY_NAV,
    TimeAccountPostingRule.LAST_MODIFIED_BY_NAV,
    TimeAccountPostingRule.MDF_SYSTEM_RECORD_STATUS_NAV,
    TimeAccountPostingRule.TIME_ACCOUNT_TYPE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TimeAccountPostingRule> = new AllFields('*', TimeAccountPostingRule);
  /**
   * All key fields of the TimeAccountPostingRule entity.
   */
  export const _keyFields: Array<Selectable<TimeAccountPostingRule>> = [TimeAccountPostingRule.TIME_TYPE_EXTERNAL_CODE, TimeAccountPostingRule.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property TimeAccountPostingRule.
   */
  export const _keys: { [keys: string]: Selectable<TimeAccountPostingRule> } = TimeAccountPostingRule._keyFields.reduce((acc: { [keys: string]: Selectable<TimeAccountPostingRule> }, field: Selectable<TimeAccountPostingRule>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
