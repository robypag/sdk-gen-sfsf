/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { SpotAwardBudgetRequestBuilder } from './SpotAwardBudgetRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "SpotAwardBudget" of service "SFOData".
 */
export class SpotAwardBudget extends Entity implements SpotAwardBudgetType {
  /**
   * Technical entity name for SpotAwardBudget.
   */
  static _entityName = 'SpotAwardBudget';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for SpotAwardBudget.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Budget Amount.
   * @nullable
   */
  budgetAmount?: BigNumber;
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
   * effectiveEndDate.
   * @nullable
   */
  effectiveEndDate?: Moment;
  /**
   * Start Date.
   */
  effectiveStartDate!: Moment;
  /**
   * Status.
   * Maximum length: 128.
   * @nullable
   */
  effectiveStatus?: string;
  /**
   * Code.
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
   * Spot Award Program.
   * Maximum length: 128.
   * @nullable
   */
  spotAwardProgram?: string;
  /**
   * Used Amount.
   * @nullable
   */
  usedAmount?: BigNumber;
  /**
   * Budget Holder Name.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  effectiveStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[SpotAwardProgram]] entity.
   */
  spotAwardProgramNav!: SpotAwardProgram;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `SpotAwardBudget`.
   * @returns A builder that constructs instances of entity type `SpotAwardBudget`.
   */
  static builder(): EntityBuilderType<SpotAwardBudget, SpotAwardBudgetTypeForceMandatory> {
    return Entity.entityBuilder(SpotAwardBudget);
  }

  /**
   * Returns a request builder to construct requests for operations on the `SpotAwardBudget` entity type.
   * @returns A `SpotAwardBudget` request builder.
   */
  static requestBuilder(): SpotAwardBudgetRequestBuilder {
    return new SpotAwardBudgetRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardBudget`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `SpotAwardBudget`.
   */
  static customField(fieldName: string): CustomField<SpotAwardBudget> {
    return Entity.customFieldSelector(fieldName, SpotAwardBudget);
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
import { SpotAwardProgram, SpotAwardProgramType } from './SpotAwardProgram';
import { WfRequest, WfRequestType } from './WfRequest';

export interface SpotAwardBudgetType {
  budgetAmount?: BigNumber;
  createdBy?: string;
  createdDateTime?: Moment;
  currency?: string;
  effectiveEndDate?: Moment;
  effectiveStartDate: Moment;
  effectiveStatus?: string;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  spotAwardProgram?: string;
  usedAmount?: BigNumber;
  userId?: string;
  createdByNav: UserType;
  effectiveStatusNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  spotAwardProgramNav: SpotAwardProgramType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface SpotAwardBudgetTypeForceMandatory {
  budgetAmount: BigNumber;
  createdBy: string;
  createdDateTime: Moment;
  currency: string;
  effectiveEndDate: Moment;
  effectiveStartDate: Moment;
  effectiveStatus: string;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  spotAwardProgram: string;
  usedAmount: BigNumber;
  userId: string;
  createdByNav: UserType;
  effectiveStatusNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  spotAwardProgramNav: SpotAwardProgramType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace SpotAwardBudget {
  /**
   * Static representation of the [[budgetAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUDGET_AMOUNT: BigNumberField<SpotAwardBudget> = new BigNumberField('budgetAmount', SpotAwardBudget, 'Edm.Decimal');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<SpotAwardBudget> = new StringField('createdBy', SpotAwardBudget, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<SpotAwardBudget> = new DateField('createdDateTime', SpotAwardBudget, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<SpotAwardBudget> = new StringField('currency', SpotAwardBudget, 'Edm.String');
  /**
   * Static representation of the [[effectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_END_DATE: DateField<SpotAwardBudget> = new DateField('effectiveEndDate', SpotAwardBudget, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_START_DATE: DateField<SpotAwardBudget> = new DateField('effectiveStartDate', SpotAwardBudget, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS: StringField<SpotAwardBudget> = new StringField('effectiveStatus', SpotAwardBudget, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<SpotAwardBudget> = new StringField('externalCode', SpotAwardBudget, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<SpotAwardBudget> = new StringField('lastModifiedBy', SpotAwardBudget, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardBudget> = new DateField('lastModifiedDateTime', SpotAwardBudget, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardBudget> = new StringField('mdfSystemRecordStatus', SpotAwardBudget, 'Edm.String');
  /**
   * Static representation of the [[spotAwardProgram]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPOT_AWARD_PROGRAM: StringField<SpotAwardBudget> = new StringField('spotAwardProgram', SpotAwardBudget, 'Edm.String');
  /**
   * Static representation of the [[usedAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USED_AMOUNT: BigNumberField<SpotAwardBudget> = new BigNumberField('usedAmount', SpotAwardBudget, 'Edm.Decimal');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<SpotAwardBudget> = new StringField('userId', SpotAwardBudget, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<SpotAwardBudget, User> = new OneToOneLink('createdByNav', SpotAwardBudget, User);
  /**
   * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS_NAV: OneToOneLink<SpotAwardBudget, MdfEnumValue> = new OneToOneLink('effectiveStatusNav', SpotAwardBudget, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardBudget, User> = new OneToOneLink('lastModifiedByNav', SpotAwardBudget, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardBudget, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', SpotAwardBudget, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[spotAwardProgramNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SPOT_AWARD_PROGRAM_NAV: OneToOneLink<SpotAwardBudget, SpotAwardProgram> = new OneToOneLink('spotAwardProgramNav', SpotAwardBudget, SpotAwardProgram);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<SpotAwardBudget, User> = new OneToOneLink('userIdNav', SpotAwardBudget, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<SpotAwardBudget, WfRequest> = new Link('wfRequestNav', SpotAwardBudget, WfRequest);
  /**
   * All fields of the SpotAwardBudget entity.
   */
  export const _allFields: Array<BigNumberField<SpotAwardBudget> | StringField<SpotAwardBudget> | DateField<SpotAwardBudget> | OneToOneLink<SpotAwardBudget, User> | OneToOneLink<SpotAwardBudget, MdfEnumValue> | OneToOneLink<SpotAwardBudget, SpotAwardProgram> | Link<SpotAwardBudget, WfRequest>> = [
    SpotAwardBudget.BUDGET_AMOUNT,
    SpotAwardBudget.CREATED_BY,
    SpotAwardBudget.CREATED_DATE_TIME,
    SpotAwardBudget.CURRENCY,
    SpotAwardBudget.EFFECTIVE_END_DATE,
    SpotAwardBudget.EFFECTIVE_START_DATE,
    SpotAwardBudget.EFFECTIVE_STATUS,
    SpotAwardBudget.EXTERNAL_CODE,
    SpotAwardBudget.LAST_MODIFIED_BY,
    SpotAwardBudget.LAST_MODIFIED_DATE_TIME,
    SpotAwardBudget.MDF_SYSTEM_RECORD_STATUS,
    SpotAwardBudget.SPOT_AWARD_PROGRAM,
    SpotAwardBudget.USED_AMOUNT,
    SpotAwardBudget.USER_ID,
    SpotAwardBudget.CREATED_BY_NAV,
    SpotAwardBudget.EFFECTIVE_STATUS_NAV,
    SpotAwardBudget.LAST_MODIFIED_BY_NAV,
    SpotAwardBudget.MDF_SYSTEM_RECORD_STATUS_NAV,
    SpotAwardBudget.SPOT_AWARD_PROGRAM_NAV,
    SpotAwardBudget.USER_ID_NAV,
    SpotAwardBudget.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<SpotAwardBudget> = new AllFields('*', SpotAwardBudget);
  /**
   * All key fields of the SpotAwardBudget entity.
   */
  export const _keyFields: Array<Selectable<SpotAwardBudget>> = [SpotAwardBudget.EFFECTIVE_START_DATE, SpotAwardBudget.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property SpotAwardBudget.
   */
  export const _keys: { [keys: string]: Selectable<SpotAwardBudget> } = SpotAwardBudget._keyFields.reduce((acc: { [keys: string]: Selectable<SpotAwardBudget> }, field: Selectable<SpotAwardBudget>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
