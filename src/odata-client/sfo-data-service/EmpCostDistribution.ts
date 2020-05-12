/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpCostDistributionRequestBuilder } from './EmpCostDistributionRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmpCostDistribution" of service "SFOData".
 */
export class EmpCostDistribution extends Entity implements EmpCostDistributionType {
  /**
   * Technical entity name for EmpCostDistribution.
   */
  static _entityName = 'EmpCostDistribution';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmpCostDistribution.
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
   * Effective End Date.
   * @nullable
   */
  effectiveEndDate?: Moment;
  /**
   * Effective Start Date.
   */
  effectiveStartDate!: Moment;
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
   * User.
   * Maximum length: 100.
   */
  usersSysId!: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[EmpCostDistributionItem]] entity.
   */
  items!: EmpCostDistributionItem[];
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
  usersSysIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `EmpCostDistribution`.
   * @returns A builder that constructs instances of entity type `EmpCostDistribution`.
   */
  static builder(): EntityBuilderType<EmpCostDistribution, EmpCostDistributionTypeForceMandatory> {
    return Entity.entityBuilder(EmpCostDistribution);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmpCostDistribution` entity type.
   * @returns A `EmpCostDistribution` request builder.
   */
  static requestBuilder(): EmpCostDistributionRequestBuilder {
    return new EmpCostDistributionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpCostDistribution`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmpCostDistribution`.
   */
  static customField(fieldName: string): CustomField<EmpCostDistribution> {
    return Entity.customFieldSelector(fieldName, EmpCostDistribution);
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
import { EmpCostDistributionItem, EmpCostDistributionItemType } from './EmpCostDistributionItem';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface EmpCostDistributionType {
  createdBy?: string;
  createdDateTime?: Moment;
  effectiveEndDate?: Moment;
  effectiveStartDate: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  usersSysId: string;
  createdByNav: UserType;
  items: EmpCostDistributionItemType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  usersSysIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface EmpCostDistributionTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  effectiveEndDate: Moment;
  effectiveStartDate: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  usersSysId: string;
  createdByNav: UserType;
  items: EmpCostDistributionItemType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  usersSysIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace EmpCostDistribution {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmpCostDistribution> = new StringField('createdBy', EmpCostDistribution, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmpCostDistribution> = new DateField('createdDateTime', EmpCostDistribution, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[effectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_END_DATE: DateField<EmpCostDistribution> = new DateField('effectiveEndDate', EmpCostDistribution, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_START_DATE: DateField<EmpCostDistribution> = new DateField('effectiveStartDate', EmpCostDistribution, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmpCostDistribution> = new StringField('lastModifiedBy', EmpCostDistribution, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmpCostDistribution> = new DateField('lastModifiedDateTime', EmpCostDistribution, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmpCostDistribution> = new StringField('mdfSystemRecordStatus', EmpCostDistribution, 'Edm.String');
  /**
   * Static representation of the [[usersSysId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID: StringField<EmpCostDistribution> = new StringField('usersSysId', EmpCostDistribution, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EmpCostDistribution, User> = new OneToOneLink('createdByNav', EmpCostDistribution, User);
  /**
   * Static representation of the one-to-many navigation property [[items]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ITEMS: Link<EmpCostDistribution, EmpCostDistributionItem> = new Link('items', EmpCostDistribution, EmpCostDistributionItem);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EmpCostDistribution, User> = new OneToOneLink('lastModifiedByNav', EmpCostDistribution, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmpCostDistribution, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EmpCostDistribution, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[usersSysIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID_NAV: OneToOneLink<EmpCostDistribution, User> = new OneToOneLink('usersSysIdNav', EmpCostDistribution, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<EmpCostDistribution, WfRequest> = new Link('wfRequestNav', EmpCostDistribution, WfRequest);
  /**
   * All fields of the EmpCostDistribution entity.
   */
  export const _allFields: Array<StringField<EmpCostDistribution> | DateField<EmpCostDistribution> | OneToOneLink<EmpCostDistribution, User> | Link<EmpCostDistribution, EmpCostDistributionItem> | OneToOneLink<EmpCostDistribution, MdfEnumValue> | Link<EmpCostDistribution, WfRequest>> = [
    EmpCostDistribution.CREATED_BY,
    EmpCostDistribution.CREATED_DATE_TIME,
    EmpCostDistribution.EFFECTIVE_END_DATE,
    EmpCostDistribution.EFFECTIVE_START_DATE,
    EmpCostDistribution.LAST_MODIFIED_BY,
    EmpCostDistribution.LAST_MODIFIED_DATE_TIME,
    EmpCostDistribution.MDF_SYSTEM_RECORD_STATUS,
    EmpCostDistribution.USERS_SYS_ID,
    EmpCostDistribution.CREATED_BY_NAV,
    EmpCostDistribution.ITEMS,
    EmpCostDistribution.LAST_MODIFIED_BY_NAV,
    EmpCostDistribution.MDF_SYSTEM_RECORD_STATUS_NAV,
    EmpCostDistribution.USERS_SYS_ID_NAV,
    EmpCostDistribution.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmpCostDistribution> = new AllFields('*', EmpCostDistribution);
  /**
   * All key fields of the EmpCostDistribution entity.
   */
  export const _keyFields: Array<Selectable<EmpCostDistribution>> = [EmpCostDistribution.EFFECTIVE_START_DATE, EmpCostDistribution.USERS_SYS_ID];
  /**
   * Mapping of all key field names to the respective static field property EmpCostDistribution.
   */
  export const _keys: { [keys: string]: Selectable<EmpCostDistribution> } = EmpCostDistribution._keyFields.reduce((acc: { [keys: string]: Selectable<EmpCostDistribution> }, field: Selectable<EmpCostDistribution>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
