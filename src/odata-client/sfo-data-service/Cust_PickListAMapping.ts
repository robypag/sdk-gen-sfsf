/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Cust_PickListAMappingRequestBuilder } from './Cust_PickListAMappingRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "cust_PickListAMapping" of service "SFOData".
 */
export class Cust_PickListAMapping extends Entity implements Cust_PickListAMappingType {
  /**
   * Technical entity name for Cust_PickListAMapping.
   */
  static _entityName = 'cust_PickListAMapping';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Cust_PickListAMapping.
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
   * optionId.
   * Maximum length: 255.
   * @nullable
   */
  custOptionId?: string;
  /**
   * externalCode.
   * Maximum length: 128.
   */
  externalCode!: string;
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
   * Returns an entity builder to construct instances `Cust_PickListAMapping`.
   * @returns A builder that constructs instances of entity type `Cust_PickListAMapping`.
   */
  static builder(): EntityBuilderType<Cust_PickListAMapping, Cust_PickListAMappingTypeForceMandatory> {
    return Entity.entityBuilder(Cust_PickListAMapping);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Cust_PickListAMapping` entity type.
   * @returns A `Cust_PickListAMapping` request builder.
   */
  static requestBuilder(): Cust_PickListAMappingRequestBuilder {
    return new Cust_PickListAMappingRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Cust_PickListAMapping`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Cust_PickListAMapping`.
   */
  static customField(fieldName: string): CustomField<Cust_PickListAMapping> {
    return Entity.customFieldSelector(fieldName, Cust_PickListAMapping);
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

export interface Cust_PickListAMappingType {
  createdBy?: string;
  createdDateTime?: Moment;
  custOptionId?: string;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface Cust_PickListAMappingTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  custOptionId: string;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace Cust_PickListAMapping {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<Cust_PickListAMapping> = new StringField('createdBy', Cust_PickListAMapping, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<Cust_PickListAMapping> = new DateField('createdDateTime', Cust_PickListAMapping, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[custOptionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_OPTION_ID: StringField<Cust_PickListAMapping> = new StringField('cust_optionId', Cust_PickListAMapping, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<Cust_PickListAMapping> = new StringField('externalCode', Cust_PickListAMapping, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<Cust_PickListAMapping> = new StringField('lastModifiedBy', Cust_PickListAMapping, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<Cust_PickListAMapping> = new DateField('lastModifiedDateTime', Cust_PickListAMapping, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<Cust_PickListAMapping> = new StringField('mdfSystemRecordStatus', Cust_PickListAMapping, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<Cust_PickListAMapping, User> = new OneToOneLink('createdByNav', Cust_PickListAMapping, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<Cust_PickListAMapping, User> = new OneToOneLink('lastModifiedByNav', Cust_PickListAMapping, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<Cust_PickListAMapping, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', Cust_PickListAMapping, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<Cust_PickListAMapping, WfRequest> = new Link('wfRequestNav', Cust_PickListAMapping, WfRequest);
  /**
   * All fields of the Cust_PickListAMapping entity.
   */
  export const _allFields: Array<StringField<Cust_PickListAMapping> | DateField<Cust_PickListAMapping> | OneToOneLink<Cust_PickListAMapping, User> | OneToOneLink<Cust_PickListAMapping, MdfEnumValue> | Link<Cust_PickListAMapping, WfRequest>> = [
    Cust_PickListAMapping.CREATED_BY,
    Cust_PickListAMapping.CREATED_DATE_TIME,
    Cust_PickListAMapping.CUST_OPTION_ID,
    Cust_PickListAMapping.EXTERNAL_CODE,
    Cust_PickListAMapping.LAST_MODIFIED_BY,
    Cust_PickListAMapping.LAST_MODIFIED_DATE_TIME,
    Cust_PickListAMapping.MDF_SYSTEM_RECORD_STATUS,
    Cust_PickListAMapping.CREATED_BY_NAV,
    Cust_PickListAMapping.LAST_MODIFIED_BY_NAV,
    Cust_PickListAMapping.MDF_SYSTEM_RECORD_STATUS_NAV,
    Cust_PickListAMapping.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Cust_PickListAMapping> = new AllFields('*', Cust_PickListAMapping);
  /**
   * All key fields of the Cust_PickListAMapping entity.
   */
  export const _keyFields: Array<Selectable<Cust_PickListAMapping>> = [Cust_PickListAMapping.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property Cust_PickListAMapping.
   */
  export const _keys: { [keys: string]: Selectable<Cust_PickListAMapping> } = Cust_PickListAMapping._keyFields.reduce((acc: { [keys: string]: Selectable<Cust_PickListAMapping> }, field: Selectable<Cust_PickListAMapping>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
