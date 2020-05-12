/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HrisChangeLogDataReplicationRequestBuilder } from './HrisChangeLogDataReplicationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "HRISChangeLogDataReplication" of service "SFOData".
 */
export class HrisChangeLogDataReplication extends Entity implements HrisChangeLogDataReplicationType {
  /**
   * Technical entity name for HrisChangeLogDataReplication.
   */
  static _entityName = 'HRISChangeLogDataReplication';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for HrisChangeLogDataReplication.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * changedEffectiveStartDate.
   * @nullable
   */
  changedEffectiveStartDate?: Moment;
  /**
   * changedExternalCode.
   * Maximum length: 255.
   * @nullable
   */
  changedExternalCode?: string;
  /**
   * changedInternalId.
   * @nullable
   */
  changedInternalId?: BigNumber;
  /**
   * changedObjectType.
   * Maximum length: 255.
   * @nullable
   */
  changedObjectType?: string;
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
   * externalCode.
   */
  externalCode!: BigNumber;
  /**
   * field2.
   * Maximum length: 255.
   * @nullable
   */
  field2?: string;
  /**
   * field3.
   * Maximum length: 255.
   * @nullable
   */
  field3?: string;
  /**
   * field4.
   * Maximum length: 255.
   * @nullable
   */
  field4?: string;
  /**
   * Last Modified By.
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
   * performanceChangedExternalCode.
   * Maximum length: 255.
   * @nullable
   */
  performanceChangedExternalCode?: string;
  /**
   * userId.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
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
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `HrisChangeLogDataReplication`.
   * @returns A builder that constructs instances of entity type `HrisChangeLogDataReplication`.
   */
  static builder(): EntityBuilderType<HrisChangeLogDataReplication, HrisChangeLogDataReplicationTypeForceMandatory> {
    return Entity.entityBuilder(HrisChangeLogDataReplication);
  }

  /**
   * Returns a request builder to construct requests for operations on the `HrisChangeLogDataReplication` entity type.
   * @returns A `HrisChangeLogDataReplication` request builder.
   */
  static requestBuilder(): HrisChangeLogDataReplicationRequestBuilder {
    return new HrisChangeLogDataReplicationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `HrisChangeLogDataReplication`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `HrisChangeLogDataReplication`.
   */
  static customField(fieldName: string): CustomField<HrisChangeLogDataReplication> {
    return Entity.customFieldSelector(fieldName, HrisChangeLogDataReplication);
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
import { WfRequest, WfRequestType } from './WfRequest';

export interface HrisChangeLogDataReplicationType {
  changedEffectiveStartDate?: Moment;
  changedExternalCode?: string;
  changedInternalId?: BigNumber;
  changedObjectType?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: BigNumber;
  field2?: string;
  field3?: string;
  field4?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  performanceChangedExternalCode?: string;
  userId?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface HrisChangeLogDataReplicationTypeForceMandatory {
  changedEffectiveStartDate: Moment;
  changedExternalCode: string;
  changedInternalId: BigNumber;
  changedObjectType: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: BigNumber;
  field2: string;
  field3: string;
  field4: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  performanceChangedExternalCode: string;
  userId: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace HrisChangeLogDataReplication {
  /**
   * Static representation of the [[changedEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHANGED_EFFECTIVE_START_DATE: DateField<HrisChangeLogDataReplication> = new DateField('changedEffectiveStartDate', HrisChangeLogDataReplication, 'Edm.DateTime');
  /**
   * Static representation of the [[changedExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHANGED_EXTERNAL_CODE: StringField<HrisChangeLogDataReplication> = new StringField('changedExternalCode', HrisChangeLogDataReplication, 'Edm.String');
  /**
   * Static representation of the [[changedInternalId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHANGED_INTERNAL_ID: BigNumberField<HrisChangeLogDataReplication> = new BigNumberField('changedInternalId', HrisChangeLogDataReplication, 'Edm.Int64');
  /**
   * Static representation of the [[changedObjectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHANGED_OBJECT_TYPE: StringField<HrisChangeLogDataReplication> = new StringField('changedObjectType', HrisChangeLogDataReplication, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<HrisChangeLogDataReplication> = new StringField('createdBy', HrisChangeLogDataReplication, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<HrisChangeLogDataReplication> = new DateField('createdDateTime', HrisChangeLogDataReplication, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<HrisChangeLogDataReplication> = new BigNumberField('externalCode', HrisChangeLogDataReplication, 'Edm.Int64');
  /**
   * Static representation of the [[field2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_2: StringField<HrisChangeLogDataReplication> = new StringField('field2', HrisChangeLogDataReplication, 'Edm.String');
  /**
   * Static representation of the [[field3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_3: StringField<HrisChangeLogDataReplication> = new StringField('field3', HrisChangeLogDataReplication, 'Edm.String');
  /**
   * Static representation of the [[field4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIELD_4: StringField<HrisChangeLogDataReplication> = new StringField('field4', HrisChangeLogDataReplication, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<HrisChangeLogDataReplication> = new StringField('lastModifiedBy', HrisChangeLogDataReplication, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<HrisChangeLogDataReplication> = new DateField('lastModifiedDateTime', HrisChangeLogDataReplication, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<HrisChangeLogDataReplication> = new StringField('mdfSystemRecordStatus', HrisChangeLogDataReplication, 'Edm.String');
  /**
   * Static representation of the [[performanceChangedExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERFORMANCE_CHANGED_EXTERNAL_CODE: StringField<HrisChangeLogDataReplication> = new StringField('performanceChangedExternalCode', HrisChangeLogDataReplication, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<HrisChangeLogDataReplication> = new StringField('userId', HrisChangeLogDataReplication, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<HrisChangeLogDataReplication, User> = new OneToOneLink('createdByNav', HrisChangeLogDataReplication, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<HrisChangeLogDataReplication, User> = new OneToOneLink('lastModifiedByNav', HrisChangeLogDataReplication, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<HrisChangeLogDataReplication, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', HrisChangeLogDataReplication, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<HrisChangeLogDataReplication, User> = new OneToOneLink('userIdNav', HrisChangeLogDataReplication, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<HrisChangeLogDataReplication, WfRequest> = new Link('wfRequestNav', HrisChangeLogDataReplication, WfRequest);
  /**
   * All fields of the HrisChangeLogDataReplication entity.
   */
  export const _allFields: Array<DateField<HrisChangeLogDataReplication> | StringField<HrisChangeLogDataReplication> | BigNumberField<HrisChangeLogDataReplication> | OneToOneLink<HrisChangeLogDataReplication, User> | OneToOneLink<HrisChangeLogDataReplication, MdfEnumValue> | Link<HrisChangeLogDataReplication, WfRequest>> = [
    HrisChangeLogDataReplication.CHANGED_EFFECTIVE_START_DATE,
    HrisChangeLogDataReplication.CHANGED_EXTERNAL_CODE,
    HrisChangeLogDataReplication.CHANGED_INTERNAL_ID,
    HrisChangeLogDataReplication.CHANGED_OBJECT_TYPE,
    HrisChangeLogDataReplication.CREATED_BY,
    HrisChangeLogDataReplication.CREATED_DATE_TIME,
    HrisChangeLogDataReplication.EXTERNAL_CODE,
    HrisChangeLogDataReplication.FIELD_2,
    HrisChangeLogDataReplication.FIELD_3,
    HrisChangeLogDataReplication.FIELD_4,
    HrisChangeLogDataReplication.LAST_MODIFIED_BY,
    HrisChangeLogDataReplication.LAST_MODIFIED_DATE_TIME,
    HrisChangeLogDataReplication.MDF_SYSTEM_RECORD_STATUS,
    HrisChangeLogDataReplication.PERFORMANCE_CHANGED_EXTERNAL_CODE,
    HrisChangeLogDataReplication.USER_ID,
    HrisChangeLogDataReplication.CREATED_BY_NAV,
    HrisChangeLogDataReplication.LAST_MODIFIED_BY_NAV,
    HrisChangeLogDataReplication.MDF_SYSTEM_RECORD_STATUS_NAV,
    HrisChangeLogDataReplication.USER_ID_NAV,
    HrisChangeLogDataReplication.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<HrisChangeLogDataReplication> = new AllFields('*', HrisChangeLogDataReplication);
  /**
   * All key fields of the HrisChangeLogDataReplication entity.
   */
  export const _keyFields: Array<Selectable<HrisChangeLogDataReplication>> = [HrisChangeLogDataReplication.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property HrisChangeLogDataReplication.
   */
  export const _keys: { [keys: string]: Selectable<HrisChangeLogDataReplication> } = HrisChangeLogDataReplication._keyFields.reduce((acc: { [keys: string]: Selectable<HrisChangeLogDataReplication> }, field: Selectable<HrisChangeLogDataReplication>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
