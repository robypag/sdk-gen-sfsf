/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SpotAwardEligibilityRuleRequestBuilder } from './SpotAwardEligibilityRuleRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SpotAwardEligibilityRule" of service "SFOData".
 */
export class SpotAwardEligibilityRule extends Entity implements SpotAwardEligibilityRuleType {
  /**
   * Technical entity name for SpotAwardEligibilityRule.
   */
  static _entityName = 'SpotAwardEligibilityRule';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SpotAwardEligibilityRule.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Spot Award Program_Code.
   * Maximum length: 38.
   */
  spotAwardProgramExternalCode!: string;
  /**
   * Created By.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created Date.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Code.
   * Maximum length: 38.
   */
  externalCode!: string;
  /**
   * Group ID.
   * @nullable
   */
  groupId?: BigNumber;
  /**
   * Last Modified By.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date.
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
   * Eligibility Rule.
   * Maximum length: 128.
   * @nullable
   */
  rule?: string;
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
   * Returns an entity builder to construct instances `SpotAwardEligibilityRule`.
   * @returns A builder that constructs instances of entity type `SpotAwardEligibilityRule`.
   */
  static builder(): EntityBuilderType<SpotAwardEligibilityRule, SpotAwardEligibilityRuleTypeForceMandatory> {
    return Entity.entityBuilder(SpotAwardEligibilityRule);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SpotAwardEligibilityRule` entity type.
   * @returns A `SpotAwardEligibilityRule` request builder.
   */
  static requestBuilder(): SpotAwardEligibilityRuleRequestBuilder {
    return new SpotAwardEligibilityRuleRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardEligibilityRule`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SpotAwardEligibilityRule`.
   */
  static customField(fieldName: string): CustomField<SpotAwardEligibilityRule> {
    return Entity.customFieldSelector(fieldName, SpotAwardEligibilityRule);
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

export interface SpotAwardEligibilityRuleType {
  spotAwardProgramExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  groupId?: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  rule?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface SpotAwardEligibilityRuleTypeForceMandatory {
  spotAwardProgramExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  groupId: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  rule: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace SpotAwardEligibilityRule {
  /**
   * Static representation of the [[spotAwardProgramExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPOT_AWARD_PROGRAM_EXTERNAL_CODE: StringField<SpotAwardEligibilityRule> = new StringField('SpotAwardProgram_externalCode', SpotAwardEligibilityRule, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SpotAwardEligibilityRule> = new StringField('createdBy', SpotAwardEligibilityRule, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SpotAwardEligibilityRule> = new DateField('createdDateTime', SpotAwardEligibilityRule, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<SpotAwardEligibilityRule> = new StringField('externalCode', SpotAwardEligibilityRule, 'Edm.String');
  /**
   * Static representation of the [[groupId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GROUP_ID: BigNumberField<SpotAwardEligibilityRule> = new BigNumberField('groupId', SpotAwardEligibilityRule, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SpotAwardEligibilityRule> = new StringField('lastModifiedBy', SpotAwardEligibilityRule, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardEligibilityRule> = new DateField('lastModifiedDateTime', SpotAwardEligibilityRule, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardEligibilityRule> = new StringField('mdfSystemRecordStatus', SpotAwardEligibilityRule, 'Edm.String');
  /**
   * Static representation of the [[rule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RULE: StringField<SpotAwardEligibilityRule> = new StringField('rule', SpotAwardEligibilityRule, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SpotAwardEligibilityRule, User> = new OneToOneLink('createdByNav', SpotAwardEligibilityRule, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardEligibilityRule, User> = new OneToOneLink('lastModifiedByNav', SpotAwardEligibilityRule, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardEligibilityRule, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SpotAwardEligibilityRule, MdfEnumValue);
  /**
   * All fields of the SpotAwardEligibilityRule entity.
   */
  export const _allFields: Array<StringField<SpotAwardEligibilityRule> | DateField<SpotAwardEligibilityRule> | BigNumberField<SpotAwardEligibilityRule> | OneToOneLink<SpotAwardEligibilityRule, User> | OneToOneLink<SpotAwardEligibilityRule, MdfEnumValue>> = [
    SpotAwardEligibilityRule.SPOT_AWARD_PROGRAM_EXTERNAL_CODE,
    SpotAwardEligibilityRule.CREATED_BY,
    SpotAwardEligibilityRule.CREATED_DATE_TIME,
    SpotAwardEligibilityRule.EXTERNAL_CODE,
    SpotAwardEligibilityRule.GROUP_ID,
    SpotAwardEligibilityRule.LAST_MODIFIED_BY,
    SpotAwardEligibilityRule.LAST_MODIFIED_DATE_TIME,
    SpotAwardEligibilityRule.MDF_SYSTEM_RECORD_STATUS,
    SpotAwardEligibilityRule.RULE,
    SpotAwardEligibilityRule.CREATED_BY_NAV,
    SpotAwardEligibilityRule.LAST_MODIFIED_BY_NAV,
    SpotAwardEligibilityRule.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SpotAwardEligibilityRule> = new AllFields('*', SpotAwardEligibilityRule);
  /**
   * All key fields of the SpotAwardEligibilityRule entity.
   */
  export const _keyFields: Array<Selectable<SpotAwardEligibilityRule>> = [SpotAwardEligibilityRule.SPOT_AWARD_PROGRAM_EXTERNAL_CODE, SpotAwardEligibilityRule.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SpotAwardEligibilityRule.
   */
  export const _keys: { [keys: string]: Selectable<SpotAwardEligibilityRule> } = SpotAwardEligibilityRule._keyFields.reduce((acc: { [keys: string]: Selectable<SpotAwardEligibilityRule> }, field: Selectable<SpotAwardEligibilityRule>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
