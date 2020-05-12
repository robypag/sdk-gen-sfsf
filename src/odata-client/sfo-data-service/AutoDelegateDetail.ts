/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AutoDelegateDetailRequestBuilder } from './AutoDelegateDetailRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AutoDelegateDetail" of service "SFOData".
 */
export class AutoDelegateDetail extends Entity implements AutoDelegateDetailType {
  /**
   * Technical entity name for AutoDelegateDetail.
   */
  static _entityName = 'AutoDelegateDetail';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AutoDelegateDetail.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Auto Delegate Config_delegator.
   * Maximum length: 100.
   */
  autoDelegateConfigDelegator!: string;
  /**
   * alwaysOn.
   * @nullable
   */
  alwaysOn?: boolean;
  /**
   * createdBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * delegatee.
   * Maximum length: 100.
   * @nullable
   */
  delegatee?: string;
  /**
   * externalCode.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
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
   * status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  delegateeNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `AutoDelegateDetail`.
   * @returns A builder that constructs instances of entity type `AutoDelegateDetail`.
   */
  static builder(): EntityBuilderType<AutoDelegateDetail, AutoDelegateDetailTypeForceMandatory> {
    return Entity.entityBuilder(AutoDelegateDetail);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AutoDelegateDetail` entity type.
   * @returns A `AutoDelegateDetail` request builder.
   */
  static requestBuilder(): AutoDelegateDetailRequestBuilder {
    return new AutoDelegateDetailRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AutoDelegateDetail`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AutoDelegateDetail`.
   */
  static customField(fieldName: string): CustomField<AutoDelegateDetail> {
    return Entity.customFieldSelector(fieldName, AutoDelegateDetail);
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

export interface AutoDelegateDetailType {
  autoDelegateConfigDelegator: string;
  alwaysOn?: boolean;
  createdBy?: string;
  createdDateTime?: Moment;
  delegatee?: string;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  status?: string;
  createdByNav: UserType;
  delegateeNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export interface AutoDelegateDetailTypeForceMandatory {
  autoDelegateConfigDelegator: string;
  alwaysOn: boolean;
  createdBy: string;
  createdDateTime: Moment;
  delegatee: string;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  status: string;
  createdByNav: UserType;
  delegateeNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export namespace AutoDelegateDetail {
  /**
   * Static representation of the [[autoDelegateConfigDelegator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTO_DELEGATE_CONFIG_DELEGATOR: StringField<AutoDelegateDetail> = new StringField('AutoDelegateConfig_delegator', AutoDelegateDetail, 'Edm.String');
  /**
   * Static representation of the [[alwaysOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALWAYS_ON: BooleanField<AutoDelegateDetail> = new BooleanField('alwaysOn', AutoDelegateDetail, 'Edm.Boolean');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<AutoDelegateDetail> = new StringField('createdBy', AutoDelegateDetail, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<AutoDelegateDetail> = new DateField('createdDateTime', AutoDelegateDetail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[delegatee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELEGATEE: StringField<AutoDelegateDetail> = new StringField('delegatee', AutoDelegateDetail, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<AutoDelegateDetail> = new StringField('externalCode', AutoDelegateDetail, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<AutoDelegateDetail> = new StringField('lastModifiedBy', AutoDelegateDetail, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<AutoDelegateDetail> = new DateField('lastModifiedDateTime', AutoDelegateDetail, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<AutoDelegateDetail> = new StringField('mdfSystemRecordStatus', AutoDelegateDetail, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<AutoDelegateDetail> = new StringField('status', AutoDelegateDetail, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<AutoDelegateDetail, User> = new OneToOneLink('createdByNav', AutoDelegateDetail, User);
  /**
   * Static representation of the one-to-one navigation property [[delegateeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELEGATEE_NAV: OneToOneLink<AutoDelegateDetail, User> = new OneToOneLink('delegateeNav', AutoDelegateDetail, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<AutoDelegateDetail, User> = new OneToOneLink('lastModifiedByNav', AutoDelegateDetail, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<AutoDelegateDetail, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', AutoDelegateDetail, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<AutoDelegateDetail, MdfEnumValue> = new OneToOneLink('statusNav', AutoDelegateDetail, MdfEnumValue);
  /**
   * All fields of the AutoDelegateDetail entity.
   */
  export const _allFields: Array<StringField<AutoDelegateDetail> | BooleanField<AutoDelegateDetail> | DateField<AutoDelegateDetail> | OneToOneLink<AutoDelegateDetail, User> | OneToOneLink<AutoDelegateDetail, MdfEnumValue>> = [
    AutoDelegateDetail.AUTO_DELEGATE_CONFIG_DELEGATOR,
    AutoDelegateDetail.ALWAYS_ON,
    AutoDelegateDetail.CREATED_BY,
    AutoDelegateDetail.CREATED_DATE_TIME,
    AutoDelegateDetail.DELEGATEE,
    AutoDelegateDetail.EXTERNAL_CODE,
    AutoDelegateDetail.LAST_MODIFIED_BY,
    AutoDelegateDetail.LAST_MODIFIED_DATE_TIME,
    AutoDelegateDetail.MDF_SYSTEM_RECORD_STATUS,
    AutoDelegateDetail.STATUS,
    AutoDelegateDetail.CREATED_BY_NAV,
    AutoDelegateDetail.DELEGATEE_NAV,
    AutoDelegateDetail.LAST_MODIFIED_BY_NAV,
    AutoDelegateDetail.MDF_SYSTEM_RECORD_STATUS_NAV,
    AutoDelegateDetail.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AutoDelegateDetail> = new AllFields('*', AutoDelegateDetail);
  /**
   * All key fields of the AutoDelegateDetail entity.
   */
  export const _keyFields: Array<Selectable<AutoDelegateDetail>> = [AutoDelegateDetail.AUTO_DELEGATE_CONFIG_DELEGATOR, AutoDelegateDetail.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property AutoDelegateDetail.
   */
  export const _keys: { [keys: string]: Selectable<AutoDelegateDetail> } = AutoDelegateDetail._keyFields.reduce((acc: { [keys: string]: Selectable<AutoDelegateDetail> }, field: Selectable<AutoDelegateDetail>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
