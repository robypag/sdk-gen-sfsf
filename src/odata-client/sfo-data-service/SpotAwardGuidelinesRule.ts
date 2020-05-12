/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SpotAwardGuidelinesRuleRequestBuilder } from './SpotAwardGuidelinesRuleRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SpotAwardGuidelinesRule" of service "SFOData".
 */
export class SpotAwardGuidelinesRule extends Entity implements SpotAwardGuidelinesRuleType {
  /**
   * Technical entity name for SpotAwardGuidelinesRule.
   */
  static _entityName = 'SpotAwardGuidelinesRule';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SpotAwardGuidelinesRule.
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
   * Category.
   * Maximum length: 128.
   * @nullable
   */
  category?: string;
  /**
   * Country/Region.
   * Maximum length: 255.
   * @nullable
   */
  country?: string;
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
   * Currency.
   * Maximum length: 255.
   * @nullable
   */
  currency?: string;
  /**
   * Code.
   * Maximum length: 38.
   */
  externalCode!: string;
  /**
   * Order.
   * @nullable
   */
  guideLineRuleOrder?: BigNumber;
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
   * Level.
   * Maximum length: 128.
   * @nullable
   */
  level?: string;
  /**
   * Maximum Amount.
   * @nullable
   */
  maxRuleAmount?: BigNumber;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Minimum Amount.
   * @nullable
   */
  minRuleAmount?: BigNumber;
  /**
   * Amount.
   * @nullable
   */
  ruleAmount?: BigNumber;
  /**
   * Incremented By.
   * @nullable
   */
  ruleAmountIncrement?: BigNumber;
  /**
   * One-to-one navigation property to the [[SpotAwardCategory]] entity.
   */
  categoryNav!: SpotAwardCategory;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[SpotAwardLevel]] entity.
   */
  levelNav!: SpotAwardLevel;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `SpotAwardGuidelinesRule`.
   * @returns A builder that constructs instances of entity type `SpotAwardGuidelinesRule`.
   */
  static builder(): EntityBuilderType<SpotAwardGuidelinesRule, SpotAwardGuidelinesRuleTypeForceMandatory> {
    return Entity.entityBuilder(SpotAwardGuidelinesRule);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SpotAwardGuidelinesRule` entity type.
   * @returns A `SpotAwardGuidelinesRule` request builder.
   */
  static requestBuilder(): SpotAwardGuidelinesRuleRequestBuilder {
    return new SpotAwardGuidelinesRuleRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardGuidelinesRule`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SpotAwardGuidelinesRule`.
   */
  static customField(fieldName: string): CustomField<SpotAwardGuidelinesRule> {
    return Entity.customFieldSelector(fieldName, SpotAwardGuidelinesRule);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { SpotAwardCategory, SpotAwardCategoryType } from './SpotAwardCategory';
import { User, UserType } from './User';
import { SpotAwardLevel, SpotAwardLevelType } from './SpotAwardLevel';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface SpotAwardGuidelinesRuleType {
  spotAwardProgramExternalCode: string;
  category?: string;
  country?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  currency?: string;
  externalCode: string;
  guideLineRuleOrder?: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  level?: string;
  maxRuleAmount?: BigNumber;
  mdfSystemRecordStatus?: string;
  minRuleAmount?: BigNumber;
  ruleAmount?: BigNumber;
  ruleAmountIncrement?: BigNumber;
  categoryNav: SpotAwardCategoryType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  levelNav: SpotAwardLevelType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface SpotAwardGuidelinesRuleTypeForceMandatory {
  spotAwardProgramExternalCode: string;
  category: string;
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  currency: string;
  externalCode: string;
  guideLineRuleOrder: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  level: string;
  maxRuleAmount: BigNumber;
  mdfSystemRecordStatus: string;
  minRuleAmount: BigNumber;
  ruleAmount: BigNumber;
  ruleAmountIncrement: BigNumber;
  categoryNav: SpotAwardCategoryType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  levelNav: SpotAwardLevelType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace SpotAwardGuidelinesRule {
  /**
   * Static representation of the [[spotAwardProgramExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPOT_AWARD_PROGRAM_EXTERNAL_CODE: StringField<SpotAwardGuidelinesRule> = new StringField('SpotAwardProgram_externalCode', SpotAwardGuidelinesRule, 'Edm.String');
  /**
   * Static representation of the [[category]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY: StringField<SpotAwardGuidelinesRule> = new StringField('category', SpotAwardGuidelinesRule, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<SpotAwardGuidelinesRule> = new StringField('country', SpotAwardGuidelinesRule, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SpotAwardGuidelinesRule> = new StringField('createdBy', SpotAwardGuidelinesRule, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SpotAwardGuidelinesRule> = new DateField('createdDateTime', SpotAwardGuidelinesRule, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<SpotAwardGuidelinesRule> = new StringField('currency', SpotAwardGuidelinesRule, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<SpotAwardGuidelinesRule> = new StringField('externalCode', SpotAwardGuidelinesRule, 'Edm.String');
  /**
   * Static representation of the [[guideLineRuleOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GUIDE_LINE_RULE_ORDER: BigNumberField<SpotAwardGuidelinesRule> = new BigNumberField('guideLineRuleOrder', SpotAwardGuidelinesRule, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SpotAwardGuidelinesRule> = new StringField('lastModifiedBy', SpotAwardGuidelinesRule, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardGuidelinesRule> = new DateField('lastModifiedDateTime', SpotAwardGuidelinesRule, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[level]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEVEL: StringField<SpotAwardGuidelinesRule> = new StringField('level', SpotAwardGuidelinesRule, 'Edm.String');
  /**
   * Static representation of the [[maxRuleAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_RULE_AMOUNT: BigNumberField<SpotAwardGuidelinesRule> = new BigNumberField('maxRuleAmount', SpotAwardGuidelinesRule, 'Edm.Decimal');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardGuidelinesRule> = new StringField('mdfSystemRecordStatus', SpotAwardGuidelinesRule, 'Edm.String');
  /**
   * Static representation of the [[minRuleAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIN_RULE_AMOUNT: BigNumberField<SpotAwardGuidelinesRule> = new BigNumberField('minRuleAmount', SpotAwardGuidelinesRule, 'Edm.Decimal');
  /**
   * Static representation of the [[ruleAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RULE_AMOUNT: BigNumberField<SpotAwardGuidelinesRule> = new BigNumberField('ruleAmount', SpotAwardGuidelinesRule, 'Edm.Decimal');
  /**
   * Static representation of the [[ruleAmountIncrement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RULE_AMOUNT_INCREMENT: BigNumberField<SpotAwardGuidelinesRule> = new BigNumberField('ruleAmountIncrement', SpotAwardGuidelinesRule, 'Edm.Decimal');
  /**
   * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CATEGORY_NAV: OneToOneLink<SpotAwardGuidelinesRule, SpotAwardCategory> = new OneToOneLink('categoryNav', SpotAwardGuidelinesRule, SpotAwardCategory);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SpotAwardGuidelinesRule, User> = new OneToOneLink('createdByNav', SpotAwardGuidelinesRule, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardGuidelinesRule, User> = new OneToOneLink('lastModifiedByNav', SpotAwardGuidelinesRule, User);
  /**
   * Static representation of the one-to-one navigation property [[levelNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEVEL_NAV: OneToOneLink<SpotAwardGuidelinesRule, SpotAwardLevel> = new OneToOneLink('levelNav', SpotAwardGuidelinesRule, SpotAwardLevel);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardGuidelinesRule, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SpotAwardGuidelinesRule, MdfEnumValue);
  /**
   * All fields of the SpotAwardGuidelinesRule entity.
   */
  export const _allFields: Array<StringField<SpotAwardGuidelinesRule> | DateField<SpotAwardGuidelinesRule> | BigNumberField<SpotAwardGuidelinesRule> | OneToOneLink<SpotAwardGuidelinesRule, SpotAwardCategory> | OneToOneLink<SpotAwardGuidelinesRule, User> | OneToOneLink<SpotAwardGuidelinesRule, SpotAwardLevel> | OneToOneLink<SpotAwardGuidelinesRule, MdfEnumValue>> = [
    SpotAwardGuidelinesRule.SPOT_AWARD_PROGRAM_EXTERNAL_CODE,
    SpotAwardGuidelinesRule.CATEGORY,
    SpotAwardGuidelinesRule.COUNTRY,
    SpotAwardGuidelinesRule.CREATED_BY,
    SpotAwardGuidelinesRule.CREATED_DATE_TIME,
    SpotAwardGuidelinesRule.CURRENCY,
    SpotAwardGuidelinesRule.EXTERNAL_CODE,
    SpotAwardGuidelinesRule.GUIDE_LINE_RULE_ORDER,
    SpotAwardGuidelinesRule.LAST_MODIFIED_BY,
    SpotAwardGuidelinesRule.LAST_MODIFIED_DATE_TIME,
    SpotAwardGuidelinesRule.LEVEL,
    SpotAwardGuidelinesRule.MAX_RULE_AMOUNT,
    SpotAwardGuidelinesRule.MDF_SYSTEM_RECORD_STATUS,
    SpotAwardGuidelinesRule.MIN_RULE_AMOUNT,
    SpotAwardGuidelinesRule.RULE_AMOUNT,
    SpotAwardGuidelinesRule.RULE_AMOUNT_INCREMENT,
    SpotAwardGuidelinesRule.CATEGORY_NAV,
    SpotAwardGuidelinesRule.CREATED_BY_NAV,
    SpotAwardGuidelinesRule.LAST_MODIFIED_BY_NAV,
    SpotAwardGuidelinesRule.LEVEL_NAV,
    SpotAwardGuidelinesRule.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SpotAwardGuidelinesRule> = new AllFields('*', SpotAwardGuidelinesRule);
  /**
   * All key fields of the SpotAwardGuidelinesRule entity.
   */
  export const _keyFields: Array<Selectable<SpotAwardGuidelinesRule>> = [SpotAwardGuidelinesRule.SPOT_AWARD_PROGRAM_EXTERNAL_CODE, SpotAwardGuidelinesRule.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SpotAwardGuidelinesRule.
   */
  export const _keys: { [keys: string]: Selectable<SpotAwardGuidelinesRule> } = SpotAwardGuidelinesRule._keyFields.reduce((acc: { [keys: string]: Selectable<SpotAwardGuidelinesRule> }, field: Selectable<SpotAwardGuidelinesRule>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
