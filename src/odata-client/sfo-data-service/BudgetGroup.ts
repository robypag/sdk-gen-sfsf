/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BudgetGroupRequestBuilder } from './BudgetGroupRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "BudgetGroup" of service "SFOData".
 */
export class BudgetGroup extends Entity implements BudgetGroupType {
  /**
   * Technical entity name for BudgetGroup.
   */
  static _entityName = 'BudgetGroup';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BudgetGroup.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * description.
   * Maximum length: 255.
   * @nullable
   */
  description?: string;
  /**
   * effectiveEndDate.
   * @nullable
   */
  effectiveEndDate?: Moment;
  /**
   * effectiveStartDate.
   */
  effectiveStartDate!: Moment;
  /**
   * effectiveStatus.
   * Maximum length: 255.
   * @nullable
   */
  effectiveStatus?: string;
  /**
   * externalCode.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * externalName.
   * Maximum length: 128.
   * @nullable
   */
  externalName?: string;
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
   * One-to-one navigation property to the [[BudgetGroup]] entity.
   */
  parentBudgetGroup!: BudgetGroup;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `BudgetGroup`.
   * @returns A builder that constructs instances of entity type `BudgetGroup`.
   */
  static builder(): EntityBuilderType<BudgetGroup, BudgetGroupTypeForceMandatory> {
    return Entity.entityBuilder(BudgetGroup);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BudgetGroup` entity type.
   * @returns A `BudgetGroup` request builder.
   */
  static requestBuilder(): BudgetGroupRequestBuilder {
    return new BudgetGroupRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BudgetGroup`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BudgetGroup`.
   */
  static customField(fieldName: string): CustomField<BudgetGroup> {
    return Entity.customFieldSelector(fieldName, BudgetGroup);
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

export interface BudgetGroupType {
  createdBy?: string;
  createdDateTime?: Moment;
  description?: string;
  effectiveEndDate?: Moment;
  effectiveStartDate: Moment;
  effectiveStatus?: string;
  externalCode: string;
  externalName?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  userId?: string;
  createdByNav: UserType;
  effectiveStatusNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  parentBudgetGroup: BudgetGroupType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface BudgetGroupTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  description: string;
  effectiveEndDate: Moment;
  effectiveStartDate: Moment;
  effectiveStatus: string;
  externalCode: string;
  externalName: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  userId: string;
  createdByNav: UserType;
  effectiveStatusNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  parentBudgetGroup: BudgetGroupType;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace BudgetGroup {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<BudgetGroup> = new StringField('createdBy', BudgetGroup, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<BudgetGroup> = new DateField('createdDateTime', BudgetGroup, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<BudgetGroup> = new StringField('description', BudgetGroup, 'Edm.String');
  /**
   * Static representation of the [[effectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_END_DATE: DateField<BudgetGroup> = new DateField('effectiveEndDate', BudgetGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_START_DATE: DateField<BudgetGroup> = new DateField('effectiveStartDate', BudgetGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS: StringField<BudgetGroup> = new StringField('effectiveStatus', BudgetGroup, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<BudgetGroup> = new StringField('externalCode', BudgetGroup, 'Edm.String');
  /**
   * Static representation of the [[externalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME: StringField<BudgetGroup> = new StringField('externalName', BudgetGroup, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<BudgetGroup> = new StringField('lastModifiedBy', BudgetGroup, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<BudgetGroup> = new DateField('lastModifiedDateTime', BudgetGroup, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<BudgetGroup> = new StringField('mdfSystemRecordStatus', BudgetGroup, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<BudgetGroup> = new StringField('userId', BudgetGroup, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<BudgetGroup, User> = new OneToOneLink('createdByNav', BudgetGroup, User);
  /**
   * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS_NAV: OneToOneLink<BudgetGroup, MdfEnumValue> = new OneToOneLink('effectiveStatusNav', BudgetGroup, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<BudgetGroup, User> = new OneToOneLink('lastModifiedByNav', BudgetGroup, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<BudgetGroup, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', BudgetGroup, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[parentBudgetGroup]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_BUDGET_GROUP: OneToOneLink<BudgetGroup, BudgetGroup> = new OneToOneLink('parentBudgetGroup', BudgetGroup, BudgetGroup);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<BudgetGroup, User> = new OneToOneLink('userIdNav', BudgetGroup, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<BudgetGroup, WfRequest> = new Link('wfRequestNav', BudgetGroup, WfRequest);
  /**
   * All fields of the BudgetGroup entity.
   */
  export const _allFields: Array<StringField<BudgetGroup> | DateField<BudgetGroup> | OneToOneLink<BudgetGroup, User> | OneToOneLink<BudgetGroup, MdfEnumValue> | OneToOneLink<BudgetGroup, BudgetGroup> | Link<BudgetGroup, WfRequest>> = [
    BudgetGroup.CREATED_BY,
    BudgetGroup.CREATED_DATE_TIME,
    BudgetGroup.DESCRIPTION,
    BudgetGroup.EFFECTIVE_END_DATE,
    BudgetGroup.EFFECTIVE_START_DATE,
    BudgetGroup.EFFECTIVE_STATUS,
    BudgetGroup.EXTERNAL_CODE,
    BudgetGroup.EXTERNAL_NAME,
    BudgetGroup.LAST_MODIFIED_BY,
    BudgetGroup.LAST_MODIFIED_DATE_TIME,
    BudgetGroup.MDF_SYSTEM_RECORD_STATUS,
    BudgetGroup.USER_ID,
    BudgetGroup.CREATED_BY_NAV,
    BudgetGroup.EFFECTIVE_STATUS_NAV,
    BudgetGroup.LAST_MODIFIED_BY_NAV,
    BudgetGroup.MDF_SYSTEM_RECORD_STATUS_NAV,
    BudgetGroup.PARENT_BUDGET_GROUP,
    BudgetGroup.USER_ID_NAV,
    BudgetGroup.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BudgetGroup> = new AllFields('*', BudgetGroup);
  /**
   * All key fields of the BudgetGroup entity.
   */
  export const _keyFields: Array<Selectable<BudgetGroup>> = [BudgetGroup.EFFECTIVE_START_DATE, BudgetGroup.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property BudgetGroup.
   */
  export const _keys: { [keys: string]: Selectable<BudgetGroup> } = BudgetGroup._keyFields.reduce((acc: { [keys: string]: Selectable<BudgetGroup> }, field: Selectable<BudgetGroup>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
