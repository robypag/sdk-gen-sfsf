/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeTimeGroupRequestBuilder } from './EmployeeTimeGroupRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeTimeGroup" of service "SFOData".
 */
export class EmployeeTimeGroup extends Entity implements EmployeeTimeGroupType {
  /**
   * Technical entity name for EmployeeTimeGroup.
   */
  static _entityName = 'EmployeeTimeGroup';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeTimeGroup.
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
   * externalCode.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Items Category.
   * Maximum length: 255.
   * @nullable
   */
  itemsCategory?: string;
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
   * User Id.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[EmployeeTimeGroupItem]] entity.
   */
  items!: EmployeeTimeGroupItem[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  itemsCategoryNav!: MdfEnumValue;
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
   * Returns an entity builder to construct instances `EmployeeTimeGroup`.
   * @returns A builder that constructs instances of entity type `EmployeeTimeGroup`.
   */
  static builder(): EntityBuilderType<EmployeeTimeGroup, EmployeeTimeGroupTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeTimeGroup);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeTimeGroup` entity type.
   * @returns A `EmployeeTimeGroup` request builder.
   */
  static requestBuilder(): EmployeeTimeGroupRequestBuilder {
    return new EmployeeTimeGroupRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeGroup`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeTimeGroup`.
   */
  static customField(fieldName: string): CustomField<EmployeeTimeGroup> {
    return Entity.customFieldSelector(fieldName, EmployeeTimeGroup);
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
import { EmployeeTimeGroupItem, EmployeeTimeGroupItemType } from './EmployeeTimeGroupItem';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface EmployeeTimeGroupType {
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  itemsCategory?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  userId?: string;
  createdByNav: UserType;
  items: EmployeeTimeGroupItemType[];
  itemsCategoryNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface EmployeeTimeGroupTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  itemsCategory: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  userId: string;
  createdByNav: UserType;
  items: EmployeeTimeGroupItemType[];
  itemsCategoryNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace EmployeeTimeGroup {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeTimeGroup> = new StringField('createdBy', EmployeeTimeGroup, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeTimeGroup> = new DateField('createdDateTime', EmployeeTimeGroup, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<EmployeeTimeGroup> = new StringField('externalCode', EmployeeTimeGroup, 'Edm.String');
  /**
   * Static representation of the [[itemsCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS_CATEGORY: StringField<EmployeeTimeGroup> = new StringField('itemsCategory', EmployeeTimeGroup, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeTimeGroup> = new StringField('lastModifiedBy', EmployeeTimeGroup, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeGroup> = new DateField('lastModifiedDateTime', EmployeeTimeGroup, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeGroup> = new StringField('mdfSystemRecordStatus', EmployeeTimeGroup, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmployeeTimeGroup> = new StringField('userId', EmployeeTimeGroup, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EmployeeTimeGroup, User> = new OneToOneLink('createdByNav', EmployeeTimeGroup, User);
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: Link<EmployeeTimeGroup, EmployeeTimeGroupItem> = new Link('items', EmployeeTimeGroup, EmployeeTimeGroupItem);
  /**
   * Static representation of the one-to-one navigation property [[itemsCategoryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS_CATEGORY_NAV: OneToOneLink<EmployeeTimeGroup, MdfEnumValue> = new OneToOneLink('itemsCategoryNav', EmployeeTimeGroup, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeTimeGroup, User> = new OneToOneLink('lastModifiedByNav', EmployeeTimeGroup, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeTimeGroup, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EmployeeTimeGroup, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<EmployeeTimeGroup, User> = new OneToOneLink('userIdNav', EmployeeTimeGroup, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<EmployeeTimeGroup, WfRequest> = new Link('wfRequestNav', EmployeeTimeGroup, WfRequest);
  /**
   * All fields of the EmployeeTimeGroup entity.
   */
  export const _allFields: Array<StringField<EmployeeTimeGroup> | DateField<EmployeeTimeGroup> | OneToOneLink<EmployeeTimeGroup, User> | Link<EmployeeTimeGroup, EmployeeTimeGroupItem> | OneToOneLink<EmployeeTimeGroup, MdfEnumValue> | Link<EmployeeTimeGroup, WfRequest>> = [
    EmployeeTimeGroup.CREATED_BY,
    EmployeeTimeGroup.CREATED_DATE_TIME,
    EmployeeTimeGroup.EXTERNAL_CODE,
    EmployeeTimeGroup.ITEMS_CATEGORY,
    EmployeeTimeGroup.LAST_MODIFIED_BY,
    EmployeeTimeGroup.LAST_MODIFIED_DATE_TIME,
    EmployeeTimeGroup.MDF_SYSTEM_RECORD_STATUS,
    EmployeeTimeGroup.USER_ID,
    EmployeeTimeGroup.CREATED_BY_NAV,
    EmployeeTimeGroup.ITEMS,
    EmployeeTimeGroup.ITEMS_CATEGORY_NAV,
    EmployeeTimeGroup.LAST_MODIFIED_BY_NAV,
    EmployeeTimeGroup.MDF_SYSTEM_RECORD_STATUS_NAV,
    EmployeeTimeGroup.USER_ID_NAV,
    EmployeeTimeGroup.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeTimeGroup> = new AllFields('*', EmployeeTimeGroup);
  /**
   * All key fields of the EmployeeTimeGroup entity.
   */
  export const _keyFields: Array<Selectable<EmployeeTimeGroup>> = [EmployeeTimeGroup.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeTimeGroup.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeTimeGroup> } = EmployeeTimeGroup._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeTimeGroup> }, field: Selectable<EmployeeTimeGroup>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
