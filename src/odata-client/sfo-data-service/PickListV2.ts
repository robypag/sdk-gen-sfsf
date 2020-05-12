/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PickListV2RequestBuilder } from './PickListV2RequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PickListV2" of service "SFOData".
 */
export class PickListV2 extends Entity implements PickListV2Type {
  /**
   * Technical entity name for PickListV2.
   */
  static _entityName = 'PickListV2';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PickListV2.
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
   * Display Order.
   * Maximum length: 255.
   * @nullable
   */
  displayOrder?: string;
  /**
   * Effective End Date.
   * @nullable
   */
  effectiveEndDate?: Moment;
  /**
   * Effective Start Date.
   */
  effectiveStartDate!: Moment;
  /**
   * Code.
   * Maximum length: 128.
   */
  id!: string;
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
   * Legacy Picklist ID.
   * Maximum length: 255.
   * @nullable
   */
  legacyPickListId?: string;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Name.
   * Maximum length: 128.
   * @nullable
   */
  name?: string;
  /**
   * Parent Picklist.
   * Maximum length: 128.
   * @nullable
   */
  parentPickList?: string;
  /**
   * Picklist Creation Source.
   * Maximum length: 255.
   * @nullable
   */
  picklistCreationSource?: string;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  displayOrderNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[PickListV2]] entity.
   */
  parentPickListNav!: PickListV2;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  picklistCreationSourceNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[PickListValueV2]] entity.
   */
  values!: PickListValueV2[];
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `PickListV2`.
   * @returns A builder that constructs instances of entity type `PickListV2`.
   */
  static builder(): EntityBuilderType<PickListV2, PickListV2TypeForceMandatory> {
    return Entity.entityBuilder(PickListV2);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PickListV2` entity type.
   * @returns A `PickListV2` request builder.
   */
  static requestBuilder(): PickListV2RequestBuilder {
    return new PickListV2RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PickListV2`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PickListV2`.
   */
  static customField(fieldName: string): CustomField<PickListV2> {
    return Entity.customFieldSelector(fieldName, PickListV2);
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
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { WfRequest, WfRequestType } from './WfRequest';

export interface PickListV2Type {
  createdBy?: string;
  createdDateTime?: Moment;
  displayOrder?: string;
  effectiveEndDate?: Moment;
  effectiveStartDate: Moment;
  id: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  legacyPickListId?: string;
  mdfSystemRecordStatus?: string;
  name?: string;
  parentPickList?: string;
  picklistCreationSource?: string;
  status?: string;
  createdByNav: UserType;
  displayOrderNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  parentPickListNav: PickListV2Type;
  picklistCreationSourceNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  values: PickListValueV2Type[];
  wfRequestNav: WfRequestType[];
}

export interface PickListV2TypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  displayOrder: string;
  effectiveEndDate: Moment;
  effectiveStartDate: Moment;
  id: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  legacyPickListId: string;
  mdfSystemRecordStatus: string;
  name: string;
  parentPickList: string;
  picklistCreationSource: string;
  status: string;
  createdByNav: UserType;
  displayOrderNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  parentPickListNav: PickListV2Type;
  picklistCreationSourceNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
  values: PickListValueV2Type[];
  wfRequestNav: WfRequestType[];
}

export namespace PickListV2 {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PickListV2> = new StringField('createdBy', PickListV2, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PickListV2> = new DateField('createdDateTime', PickListV2, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[displayOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISPLAY_ORDER: StringField<PickListV2> = new StringField('displayOrder', PickListV2, 'Edm.String');
  /**
   * Static representation of the [[effectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_END_DATE: DateField<PickListV2> = new DateField('effectiveEndDate', PickListV2, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_START_DATE: DateField<PickListV2> = new DateField('effectiveStartDate', PickListV2, 'Edm.DateTime');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<PickListV2> = new StringField('id', PickListV2, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PickListV2> = new StringField('lastModifiedBy', PickListV2, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PickListV2> = new DateField('lastModifiedDateTime', PickListV2, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[legacyPickListId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGACY_PICK_LIST_ID: StringField<PickListV2> = new StringField('legacyPickListId', PickListV2, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PickListV2> = new StringField('mdfSystemRecordStatus', PickListV2, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<PickListV2> = new StringField('name', PickListV2, 'Edm.String');
  /**
   * Static representation of the [[parentPickList]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_PICK_LIST: StringField<PickListV2> = new StringField('parentPickList', PickListV2, 'Edm.String');
  /**
   * Static representation of the [[picklistCreationSource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICKLIST_CREATION_SOURCE: StringField<PickListV2> = new StringField('picklistCreationSource', PickListV2, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<PickListV2> = new StringField('status', PickListV2, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PickListV2, User> = new OneToOneLink('createdByNav', PickListV2, User);
  /**
   * Static representation of the one-to-one navigation property [[displayOrderNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISPLAY_ORDER_NAV: OneToOneLink<PickListV2, MdfEnumValue> = new OneToOneLink('displayOrderNav', PickListV2, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PickListV2, User> = new OneToOneLink('lastModifiedByNav', PickListV2, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PickListV2, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PickListV2, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[parentPickListNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_PICK_LIST_NAV: OneToOneLink<PickListV2, PickListV2> = new OneToOneLink('parentPickListNav', PickListV2, PickListV2);
  /**
   * Static representation of the one-to-one navigation property [[picklistCreationSourceNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICKLIST_CREATION_SOURCE_NAV: OneToOneLink<PickListV2, MdfEnumValue> = new OneToOneLink('picklistCreationSourceNav', PickListV2, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<PickListV2, MdfEnumValue> = new OneToOneLink('statusNav', PickListV2, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[values]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUES: Link<PickListV2, PickListValueV2> = new Link('values', PickListV2, PickListValueV2);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<PickListV2, WfRequest> = new Link('wfRequestNav', PickListV2, WfRequest);
  /**
   * All fields of the PickListV2 entity.
   */
  export const _allFields: Array<StringField<PickListV2> | DateField<PickListV2> | OneToOneLink<PickListV2, User> | OneToOneLink<PickListV2, MdfEnumValue> | OneToOneLink<PickListV2, PickListV2> | Link<PickListV2, PickListValueV2> | Link<PickListV2, WfRequest>> = [
    PickListV2.CREATED_BY,
    PickListV2.CREATED_DATE_TIME,
    PickListV2.DISPLAY_ORDER,
    PickListV2.EFFECTIVE_END_DATE,
    PickListV2.EFFECTIVE_START_DATE,
    PickListV2.ID,
    PickListV2.LAST_MODIFIED_BY,
    PickListV2.LAST_MODIFIED_DATE_TIME,
    PickListV2.LEGACY_PICK_LIST_ID,
    PickListV2.MDF_SYSTEM_RECORD_STATUS,
    PickListV2.NAME,
    PickListV2.PARENT_PICK_LIST,
    PickListV2.PICKLIST_CREATION_SOURCE,
    PickListV2.STATUS,
    PickListV2.CREATED_BY_NAV,
    PickListV2.DISPLAY_ORDER_NAV,
    PickListV2.LAST_MODIFIED_BY_NAV,
    PickListV2.MDF_SYSTEM_RECORD_STATUS_NAV,
    PickListV2.PARENT_PICK_LIST_NAV,
    PickListV2.PICKLIST_CREATION_SOURCE_NAV,
    PickListV2.STATUS_NAV,
    PickListV2.VALUES,
    PickListV2.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PickListV2> = new AllFields('*', PickListV2);
  /**
   * All key fields of the PickListV2 entity.
   */
  export const _keyFields: Array<Selectable<PickListV2>> = [PickListV2.EFFECTIVE_START_DATE, PickListV2.ID];
  /**
   * Mapping of all key field names to the respective static field property PickListV2.
   */
  export const _keys: { [keys: string]: Selectable<PickListV2> } = PickListV2._keyFields.reduce((acc: { [keys: string]: Selectable<PickListV2> }, field: Selectable<PickListV2>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
