/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpCostDistributionItemRequestBuilder } from './EmpCostDistributionItemRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmpCostDistributionItem" of service "SFOData".
 */
export class EmpCostDistributionItem extends Entity implements EmpCostDistributionItemType {
  /**
   * Technical entity name for EmpCostDistributionItem.
   */
  static _entityName = 'EmpCostDistributionItem';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmpCostDistributionItem.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Alternative Cost Distribution_Effective Start Date.
   */
  empCostDistributionEffectiveStartDate!: Moment;
  /**
   * Alternative Cost Distribution_User.
   * Maximum length: 100.
   */
  empCostDistributionUsersSysId!: string;
  /**
   * Cost Center.
   * Maximum length: 128.
   * @nullable
   */
  costCenter?: string;
  /**
   * Created By.
   * Maximum length: 100.
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
   */
  externalCode!: BigNumber;
  /**
   * Last Modified By.
   * Maximum length: 100.
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
   * Percentage.
   * @nullable
   */
  percentage?: BigNumber;
  /**
   * One-to-many navigation property to the [[FoCostCenter]] entity.
   */
  costCenterNav!: FoCostCenter[];
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
   * Returns an entity builder to construct instances `EmpCostDistributionItem`.
   * @returns A builder that constructs instances of entity type `EmpCostDistributionItem`.
   */
  static builder(): EntityBuilderType<EmpCostDistributionItem, EmpCostDistributionItemTypeForceMandatory> {
    return Entity.entityBuilder(EmpCostDistributionItem);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmpCostDistributionItem` entity type.
   * @returns A `EmpCostDistributionItem` request builder.
   */
  static requestBuilder(): EmpCostDistributionItemRequestBuilder {
    return new EmpCostDistributionItemRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpCostDistributionItem`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmpCostDistributionItem`.
   */
  static customField(fieldName: string): CustomField<EmpCostDistributionItem> {
    return Entity.customFieldSelector(fieldName, EmpCostDistributionItem);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface EmpCostDistributionItemType {
  empCostDistributionEffectiveStartDate: Moment;
  empCostDistributionUsersSysId: string;
  costCenter?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  percentage?: BigNumber;
  costCenterNav: FoCostCenterType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface EmpCostDistributionItemTypeForceMandatory {
  empCostDistributionEffectiveStartDate: Moment;
  empCostDistributionUsersSysId: string;
  costCenter: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  percentage: BigNumber;
  costCenterNav: FoCostCenterType[];
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace EmpCostDistributionItem {
  /**
   * Static representation of the [[empCostDistributionEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMP_COST_DISTRIBUTION_EFFECTIVE_START_DATE: DateField<EmpCostDistributionItem> = new DateField('EmpCostDistribution_effectiveStartDate', EmpCostDistributionItem, 'Edm.DateTime');
  /**
   * Static representation of the [[empCostDistributionUsersSysId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMP_COST_DISTRIBUTION_USERS_SYS_ID: StringField<EmpCostDistributionItem> = new StringField('EmpCostDistribution_usersSysId', EmpCostDistributionItem, 'Edm.String');
  /**
   * Static representation of the [[costCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER: StringField<EmpCostDistributionItem> = new StringField('costCenter', EmpCostDistributionItem, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmpCostDistributionItem> = new StringField('createdBy', EmpCostDistributionItem, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmpCostDistributionItem> = new DateField('createdDateTime', EmpCostDistributionItem, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<EmpCostDistributionItem> = new BigNumberField('externalCode', EmpCostDistributionItem, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmpCostDistributionItem> = new StringField('lastModifiedBy', EmpCostDistributionItem, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmpCostDistributionItem> = new DateField('lastModifiedDateTime', EmpCostDistributionItem, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmpCostDistributionItem> = new StringField('mdfSystemRecordStatus', EmpCostDistributionItem, 'Edm.String');
  /**
   * Static representation of the [[percentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERCENTAGE: BigNumberField<EmpCostDistributionItem> = new BigNumberField('percentage', EmpCostDistributionItem, 'Edm.Decimal');
  /**
   * Static representation of the one-to-many navigation property [[costCenterNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_NAV: Link<EmpCostDistributionItem, FoCostCenter> = new Link('costCenterNav', EmpCostDistributionItem, FoCostCenter);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EmpCostDistributionItem, User> = new OneToOneLink('createdByNav', EmpCostDistributionItem, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EmpCostDistributionItem, User> = new OneToOneLink('lastModifiedByNav', EmpCostDistributionItem, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmpCostDistributionItem, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EmpCostDistributionItem, MdfEnumValue);
  /**
   * All fields of the EmpCostDistributionItem entity.
   */
  export const _allFields: Array<DateField<EmpCostDistributionItem> | StringField<EmpCostDistributionItem> | BigNumberField<EmpCostDistributionItem> | Link<EmpCostDistributionItem, FoCostCenter> | OneToOneLink<EmpCostDistributionItem, User> | OneToOneLink<EmpCostDistributionItem, MdfEnumValue>> = [
    EmpCostDistributionItem.EMP_COST_DISTRIBUTION_EFFECTIVE_START_DATE,
    EmpCostDistributionItem.EMP_COST_DISTRIBUTION_USERS_SYS_ID,
    EmpCostDistributionItem.COST_CENTER,
    EmpCostDistributionItem.CREATED_BY,
    EmpCostDistributionItem.CREATED_DATE_TIME,
    EmpCostDistributionItem.EXTERNAL_CODE,
    EmpCostDistributionItem.LAST_MODIFIED_BY,
    EmpCostDistributionItem.LAST_MODIFIED_DATE_TIME,
    EmpCostDistributionItem.MDF_SYSTEM_RECORD_STATUS,
    EmpCostDistributionItem.PERCENTAGE,
    EmpCostDistributionItem.COST_CENTER_NAV,
    EmpCostDistributionItem.CREATED_BY_NAV,
    EmpCostDistributionItem.LAST_MODIFIED_BY_NAV,
    EmpCostDistributionItem.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmpCostDistributionItem> = new AllFields('*', EmpCostDistributionItem);
  /**
   * All key fields of the EmpCostDistributionItem entity.
   */
  export const _keyFields: Array<Selectable<EmpCostDistributionItem>> = [EmpCostDistributionItem.EMP_COST_DISTRIBUTION_EFFECTIVE_START_DATE, EmpCostDistributionItem.EMP_COST_DISTRIBUTION_USERS_SYS_ID, EmpCostDistributionItem.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmpCostDistributionItem.
   */
  export const _keys: { [keys: string]: Selectable<EmpCostDistributionItem> } = EmpCostDistributionItem._keyFields.reduce((acc: { [keys: string]: Selectable<EmpCostDistributionItem> }, field: Selectable<EmpCostDistributionItem>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
