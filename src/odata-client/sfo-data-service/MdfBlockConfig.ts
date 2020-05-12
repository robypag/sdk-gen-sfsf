/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MdfBlockConfigRequestBuilder } from './MdfBlockConfigRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "MDFBlockConfig" of service "SFOData".
 */
export class MdfBlockConfig extends Entity implements MdfBlockConfigType {
  /**
   * Technical entity name for MdfBlockConfig.
   */
  static _entityName = 'MDFBlockConfig';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for MdfBlockConfig.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * code.
   * Maximum length: 128.
   */
  code!: string;
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
   * objectType.
   * Maximum length: 255.
   * @nullable
   */
  objectType?: string;
  /**
   * screenId.
   * Maximum length: 255.
   * @nullable
   */
  screenId?: string;
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
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `MdfBlockConfig`.
   * @returns A builder that constructs instances of entity type `MdfBlockConfig`.
   */
  static builder(): EntityBuilderType<MdfBlockConfig, MdfBlockConfigTypeForceMandatory> {
    return Entity.entityBuilder(MdfBlockConfig);
  }

  /**
   * Returns a request builder to construct requests for operations on the `MdfBlockConfig` entity type.
   * @returns A `MdfBlockConfig` request builder.
   */
  static requestBuilder(): MdfBlockConfigRequestBuilder {
    return new MdfBlockConfigRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `MdfBlockConfig`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `MdfBlockConfig`.
   */
  static customField(fieldName: string): CustomField<MdfBlockConfig> {
    return Entity.customFieldSelector(fieldName, MdfBlockConfig);
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

export interface MdfBlockConfigType {
  code: string;
  createdBy?: string;
  createdDateTime?: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  objectType?: string;
  screenId?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface MdfBlockConfigTypeForceMandatory {
  code: string;
  createdBy: string;
  createdDateTime: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  objectType: string;
  screenId: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace MdfBlockConfig {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<MdfBlockConfig> = new StringField('code', MdfBlockConfig, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<MdfBlockConfig> = new StringField('createdBy', MdfBlockConfig, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<MdfBlockConfig> = new DateField('createdDateTime', MdfBlockConfig, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<MdfBlockConfig> = new StringField('lastModifiedBy', MdfBlockConfig, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<MdfBlockConfig> = new DateField('lastModifiedDateTime', MdfBlockConfig, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<MdfBlockConfig> = new StringField('mdfSystemRecordStatus', MdfBlockConfig, 'Edm.String');
  /**
   * Static representation of the [[objectType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECT_TYPE: StringField<MdfBlockConfig> = new StringField('objectType', MdfBlockConfig, 'Edm.String');
  /**
   * Static representation of the [[screenId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCREEN_ID: StringField<MdfBlockConfig> = new StringField('screenId', MdfBlockConfig, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<MdfBlockConfig, User> = new OneToOneLink('createdByNav', MdfBlockConfig, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<MdfBlockConfig, User> = new OneToOneLink('lastModifiedByNav', MdfBlockConfig, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<MdfBlockConfig, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', MdfBlockConfig, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<MdfBlockConfig, WfRequest> = new Link('wfRequestNav', MdfBlockConfig, WfRequest);
  /**
   * All fields of the MdfBlockConfig entity.
   */
  export const _allFields: Array<StringField<MdfBlockConfig> | DateField<MdfBlockConfig> | OneToOneLink<MdfBlockConfig, User> | OneToOneLink<MdfBlockConfig, MdfEnumValue> | Link<MdfBlockConfig, WfRequest>> = [
    MdfBlockConfig.CODE,
    MdfBlockConfig.CREATED_BY,
    MdfBlockConfig.CREATED_DATE_TIME,
    MdfBlockConfig.LAST_MODIFIED_BY,
    MdfBlockConfig.LAST_MODIFIED_DATE_TIME,
    MdfBlockConfig.MDF_SYSTEM_RECORD_STATUS,
    MdfBlockConfig.OBJECT_TYPE,
    MdfBlockConfig.SCREEN_ID,
    MdfBlockConfig.CREATED_BY_NAV,
    MdfBlockConfig.LAST_MODIFIED_BY_NAV,
    MdfBlockConfig.MDF_SYSTEM_RECORD_STATUS_NAV,
    MdfBlockConfig.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<MdfBlockConfig> = new AllFields('*', MdfBlockConfig);
  /**
   * All key fields of the MdfBlockConfig entity.
   */
  export const _keyFields: Array<Selectable<MdfBlockConfig>> = [MdfBlockConfig.CODE];
  /**
   * Mapping of all key field names to the respective static field property MdfBlockConfig.
   */
  export const _keys: { [keys: string]: Selectable<MdfBlockConfig> } = MdfBlockConfig._keyFields.reduce((acc: { [keys: string]: Selectable<MdfBlockConfig> }, field: Selectable<MdfBlockConfig>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
