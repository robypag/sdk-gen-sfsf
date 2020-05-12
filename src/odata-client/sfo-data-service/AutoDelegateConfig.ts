/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AutoDelegateConfigRequestBuilder } from './AutoDelegateConfigRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "AutoDelegateConfig" of service "SFOData".
 */
export class AutoDelegateConfig extends Entity implements AutoDelegateConfigType {
  /**
   * Technical entity name for AutoDelegateConfig.
   */
  static _entityName = 'AutoDelegateConfig';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for AutoDelegateConfig.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * delegationStatus.
   * Maximum length: 128.
   * @nullable
   */
  delegationStatus?: string;
  /**
   * delegator.
   * Maximum length: 100.
   */
  delegator!: string;
  /**
   * endTime.
   * @nullable
   */
  endTime?: Moment;
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
   * mdfSystemOptimisticLockUUID.
   * Maximum length: 255.
   * @nullable
   */
  optimisticLockUuid?: string;
  /**
   * startTime.
   * @nullable
   */
  startTime?: Moment;
  /**
   * One-to-many navigation property to the [[AutoDelegateDetail]] entity.
   */
  autoDelegateDetails!: AutoDelegateDetail[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  delegationStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  delegatorNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `AutoDelegateConfig`.
   * @returns A builder that constructs instances of entity type `AutoDelegateConfig`.
   */
  static builder(): EntityBuilderType<AutoDelegateConfig, AutoDelegateConfigTypeForceMandatory> {
    return Entity.entityBuilder(AutoDelegateConfig);
  }

  /**
   * Returns a request builder to construct requests for operations on the `AutoDelegateConfig` entity type.
   * @returns A `AutoDelegateConfig` request builder.
   */
  static requestBuilder(): AutoDelegateConfigRequestBuilder {
    return new AutoDelegateConfigRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `AutoDelegateConfig`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `AutoDelegateConfig`.
   */
  static customField(fieldName: string): CustomField<AutoDelegateConfig> {
    return Entity.customFieldSelector(fieldName, AutoDelegateConfig);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { AutoDelegateDetail, AutoDelegateDetailType } from './AutoDelegateDetail';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface AutoDelegateConfigType {
  createdBy?: string;
  createdDateTime?: Moment;
  delegationStatus?: string;
  delegator: string;
  endTime?: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  optimisticLockUuid?: string;
  startTime?: Moment;
  autoDelegateDetails: AutoDelegateDetailType[];
  createdByNav: UserType;
  delegationStatusNav: MdfEnumValueType;
  delegatorNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface AutoDelegateConfigTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  delegationStatus: string;
  delegator: string;
  endTime: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  optimisticLockUuid: string;
  startTime: Moment;
  autoDelegateDetails: AutoDelegateDetailType[];
  createdByNav: UserType;
  delegationStatusNav: MdfEnumValueType;
  delegatorNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace AutoDelegateConfig {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<AutoDelegateConfig> = new StringField('createdBy', AutoDelegateConfig, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<AutoDelegateConfig> = new DateField('createdDateTime', AutoDelegateConfig, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[delegationStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELEGATION_STATUS: StringField<AutoDelegateConfig> = new StringField('delegationStatus', AutoDelegateConfig, 'Edm.String');
  /**
   * Static representation of the [[delegator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELEGATOR: StringField<AutoDelegateConfig> = new StringField('delegator', AutoDelegateConfig, 'Edm.String');
  /**
   * Static representation of the [[endTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_TIME: DateField<AutoDelegateConfig> = new DateField('endTime', AutoDelegateConfig, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<AutoDelegateConfig> = new StringField('lastModifiedBy', AutoDelegateConfig, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<AutoDelegateConfig> = new DateField('lastModifiedDateTime', AutoDelegateConfig, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<AutoDelegateConfig> = new StringField('mdfSystemRecordStatus', AutoDelegateConfig, 'Edm.String');
  /**
   * Static representation of the [[optimisticLockUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTIMISTIC_LOCK_UUID: StringField<AutoDelegateConfig> = new StringField('optimisticLockUUID', AutoDelegateConfig, 'Edm.String');
  /**
   * Static representation of the [[startTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_TIME: DateField<AutoDelegateConfig> = new DateField('startTime', AutoDelegateConfig, 'Edm.DateTimeOffset');
  /**
   * Static representation of the one-to-many navigation property [[autoDelegateDetails]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUTO_DELEGATE_DETAILS: Link<AutoDelegateConfig, AutoDelegateDetail> = new Link('autoDelegateDetails', AutoDelegateConfig, AutoDelegateDetail);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<AutoDelegateConfig, User> = new OneToOneLink('createdByNav', AutoDelegateConfig, User);
  /**
   * Static representation of the one-to-one navigation property [[delegationStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELEGATION_STATUS_NAV: OneToOneLink<AutoDelegateConfig, MdfEnumValue> = new OneToOneLink('delegationStatusNav', AutoDelegateConfig, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[delegatorNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELEGATOR_NAV: OneToOneLink<AutoDelegateConfig, User> = new OneToOneLink('delegatorNav', AutoDelegateConfig, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<AutoDelegateConfig, User> = new OneToOneLink('lastModifiedByNav', AutoDelegateConfig, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<AutoDelegateConfig, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', AutoDelegateConfig, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<AutoDelegateConfig, WfRequest> = new Link('wfRequestNav', AutoDelegateConfig, WfRequest);
  /**
   * All fields of the AutoDelegateConfig entity.
   */
  export const _allFields: Array<StringField<AutoDelegateConfig> | DateField<AutoDelegateConfig> | Link<AutoDelegateConfig, AutoDelegateDetail> | OneToOneLink<AutoDelegateConfig, User> | OneToOneLink<AutoDelegateConfig, MdfEnumValue> | Link<AutoDelegateConfig, WfRequest>> = [
    AutoDelegateConfig.CREATED_BY,
    AutoDelegateConfig.CREATED_DATE_TIME,
    AutoDelegateConfig.DELEGATION_STATUS,
    AutoDelegateConfig.DELEGATOR,
    AutoDelegateConfig.END_TIME,
    AutoDelegateConfig.LAST_MODIFIED_BY,
    AutoDelegateConfig.LAST_MODIFIED_DATE_TIME,
    AutoDelegateConfig.MDF_SYSTEM_RECORD_STATUS,
    AutoDelegateConfig.OPTIMISTIC_LOCK_UUID,
    AutoDelegateConfig.START_TIME,
    AutoDelegateConfig.AUTO_DELEGATE_DETAILS,
    AutoDelegateConfig.CREATED_BY_NAV,
    AutoDelegateConfig.DELEGATION_STATUS_NAV,
    AutoDelegateConfig.DELEGATOR_NAV,
    AutoDelegateConfig.LAST_MODIFIED_BY_NAV,
    AutoDelegateConfig.MDF_SYSTEM_RECORD_STATUS_NAV,
    AutoDelegateConfig.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<AutoDelegateConfig> = new AllFields('*', AutoDelegateConfig);
  /**
   * All key fields of the AutoDelegateConfig entity.
   */
  export const _keyFields: Array<Selectable<AutoDelegateConfig>> = [AutoDelegateConfig.DELEGATOR];
  /**
   * Mapping of all key field names to the respective static field property AutoDelegateConfig.
   */
  export const _keys: { [keys: string]: Selectable<AutoDelegateConfig> } = AutoDelegateConfig._keyFields.reduce((acc: { [keys: string]: Selectable<AutoDelegateConfig> }, field: Selectable<AutoDelegateConfig>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
