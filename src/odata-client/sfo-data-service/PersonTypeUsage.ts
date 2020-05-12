/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PersonTypeUsageRequestBuilder } from './PersonTypeUsageRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PersonTypeUsage" of service "SFOData".
 */
export class PersonTypeUsage extends Entity implements PersonTypeUsageType {
  /**
   * Technical entity name for PersonTypeUsage.
   */
  static _entityName = 'PersonTypeUsage';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PersonTypeUsage.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * createdBy.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * endDate.
   * @nullable
   */
  endDate?: Moment;
  /**
   * externalCode.
   */
  externalCode!: BigNumber;
  /**
   * lastModifiedBy.
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
   * person.
   * Maximum length: 128.
   * @nullable
   */
  person?: string;
  /**
   * personType.
   * Maximum length: 128.
   * @nullable
   */
  personType?: string;
  /**
   * startDate.
   * @nullable
   */
  startDate?: Moment;
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
   * One-to-one navigation property to the [[PersonType]] entity.
   */
  personTypeNav!: PersonType;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `PersonTypeUsage`.
   * @returns A builder that constructs instances of entity type `PersonTypeUsage`.
   */
  static builder(): EntityBuilderType<PersonTypeUsage, PersonTypeUsageTypeForceMandatory> {
    return Entity.entityBuilder(PersonTypeUsage);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PersonTypeUsage` entity type.
   * @returns A `PersonTypeUsage` request builder.
   */
  static requestBuilder(): PersonTypeUsageRequestBuilder {
    return new PersonTypeUsageRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PersonTypeUsage`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PersonTypeUsage`.
   */
  static customField(fieldName: string): CustomField<PersonTypeUsage> {
    return Entity.customFieldSelector(fieldName, PersonTypeUsage);
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
import { PersonType, PersonTypeType } from './PersonType';
import { WfRequest, WfRequestType } from './WfRequest';

export interface PersonTypeUsageType {
  createdBy?: string;
  createdDateTime?: Moment;
  endDate?: Moment;
  externalCode: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  person?: string;
  personType?: string;
  startDate?: Moment;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  personTypeNav: PersonTypeType;
  wfRequestNav: WfRequestType[];
}

export interface PersonTypeUsageTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  endDate: Moment;
  externalCode: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  person: string;
  personType: string;
  startDate: Moment;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  personTypeNav: PersonTypeType;
  wfRequestNav: WfRequestType[];
}

export namespace PersonTypeUsage {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PersonTypeUsage> = new StringField('createdBy', PersonTypeUsage, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PersonTypeUsage> = new DateField('createdDateTime', PersonTypeUsage, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PersonTypeUsage> = new DateField('endDate', PersonTypeUsage, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: BigNumberField<PersonTypeUsage> = new BigNumberField('externalCode', PersonTypeUsage, 'Edm.Int64');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PersonTypeUsage> = new StringField('lastModifiedBy', PersonTypeUsage, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PersonTypeUsage> = new DateField('lastModifiedDateTime', PersonTypeUsage, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PersonTypeUsage> = new StringField('mdfSystemRecordStatus', PersonTypeUsage, 'Edm.String');
  /**
   * Static representation of the [[person]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON: StringField<PersonTypeUsage> = new StringField('person', PersonTypeUsage, 'Edm.String');
  /**
   * Static representation of the [[personType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_TYPE: StringField<PersonTypeUsage> = new StringField('personType', PersonTypeUsage, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PersonTypeUsage> = new DateField('startDate', PersonTypeUsage, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PersonTypeUsage, User> = new OneToOneLink('createdByNav', PersonTypeUsage, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PersonTypeUsage, User> = new OneToOneLink('lastModifiedByNav', PersonTypeUsage, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PersonTypeUsage, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PersonTypeUsage, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[personTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_TYPE_NAV: OneToOneLink<PersonTypeUsage, PersonType> = new OneToOneLink('personTypeNav', PersonTypeUsage, PersonType);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<PersonTypeUsage, WfRequest> = new Link('wfRequestNav', PersonTypeUsage, WfRequest);
  /**
   * All fields of the PersonTypeUsage entity.
   */
  export const _allFields: Array<StringField<PersonTypeUsage> | DateField<PersonTypeUsage> | BigNumberField<PersonTypeUsage> | OneToOneLink<PersonTypeUsage, User> | OneToOneLink<PersonTypeUsage, MdfEnumValue> | OneToOneLink<PersonTypeUsage, PersonType> | Link<PersonTypeUsage, WfRequest>> = [
    PersonTypeUsage.CREATED_BY,
    PersonTypeUsage.CREATED_DATE_TIME,
    PersonTypeUsage.END_DATE,
    PersonTypeUsage.EXTERNAL_CODE,
    PersonTypeUsage.LAST_MODIFIED_BY,
    PersonTypeUsage.LAST_MODIFIED_DATE_TIME,
    PersonTypeUsage.MDF_SYSTEM_RECORD_STATUS,
    PersonTypeUsage.PERSON,
    PersonTypeUsage.PERSON_TYPE,
    PersonTypeUsage.START_DATE,
    PersonTypeUsage.CREATED_BY_NAV,
    PersonTypeUsage.LAST_MODIFIED_BY_NAV,
    PersonTypeUsage.MDF_SYSTEM_RECORD_STATUS_NAV,
    PersonTypeUsage.PERSON_TYPE_NAV,
    PersonTypeUsage.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PersonTypeUsage> = new AllFields('*', PersonTypeUsage);
  /**
   * All key fields of the PersonTypeUsage entity.
   */
  export const _keyFields: Array<Selectable<PersonTypeUsage>> = [PersonTypeUsage.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property PersonTypeUsage.
   */
  export const _keys: { [keys: string]: Selectable<PersonTypeUsage> } = PersonTypeUsage._keyFields.reduce((acc: { [keys: string]: Selectable<PersonTypeUsage> }, field: Selectable<PersonTypeUsage>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
