/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ExternalTimeSegmentRequestBuilder } from './ExternalTimeSegmentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "ExternalTimeSegment" of service "SFOData".
 */
export class ExternalTimeSegment extends Entity implements ExternalTimeSegmentType {
  /**
   * Technical entity name for ExternalTimeSegment.
   */
  static _entityName = 'ExternalTimeSegment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for ExternalTimeSegment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * External Time Record_External Code.
   * Maximum length: 128.
   */
  externalTimeRecordExternalCode!: string;
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
   * External Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Number of Hours.
   * @nullable
   */
  hours?: BigNumber;
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
   * Returns an entity builder to construct instances `ExternalTimeSegment`.
   * @returns A builder that constructs instances of entity type `ExternalTimeSegment`.
   */
  static builder(): EntityBuilderType<ExternalTimeSegment, ExternalTimeSegmentTypeForceMandatory> {
    return Entity.entityBuilder(ExternalTimeSegment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `ExternalTimeSegment` entity type.
   * @returns A `ExternalTimeSegment` request builder.
   */
  static requestBuilder(): ExternalTimeSegmentRequestBuilder {
    return new ExternalTimeSegmentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalTimeSegment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `ExternalTimeSegment`.
   */
  static customField(fieldName: string): CustomField<ExternalTimeSegment> {
    return Entity.customFieldSelector(fieldName, ExternalTimeSegment);
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

export interface ExternalTimeSegmentType {
  externalTimeRecordExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  hours?: BigNumber;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export interface ExternalTimeSegmentTypeForceMandatory {
  externalTimeRecordExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  hours: BigNumber;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
}

export namespace ExternalTimeSegment {
  /**
   * Static representation of the [[externalTimeRecordExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_TIME_RECORD_EXTERNAL_CODE: StringField<ExternalTimeSegment> = new StringField('ExternalTimeRecord_externalCode', ExternalTimeSegment, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<ExternalTimeSegment> = new StringField('createdBy', ExternalTimeSegment, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<ExternalTimeSegment> = new DateField('createdDateTime', ExternalTimeSegment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<ExternalTimeSegment> = new StringField('externalCode', ExternalTimeSegment, 'Edm.String');
  /**
   * Static representation of the [[hours]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOURS: BigNumberField<ExternalTimeSegment> = new BigNumberField('hours', ExternalTimeSegment, 'Edm.Decimal');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<ExternalTimeSegment> = new StringField('lastModifiedBy', ExternalTimeSegment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<ExternalTimeSegment> = new DateField('lastModifiedDateTime', ExternalTimeSegment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<ExternalTimeSegment> = new StringField('mdfSystemRecordStatus', ExternalTimeSegment, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<ExternalTimeSegment, User> = new OneToOneLink('createdByNav', ExternalTimeSegment, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<ExternalTimeSegment, User> = new OneToOneLink('lastModifiedByNav', ExternalTimeSegment, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<ExternalTimeSegment, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', ExternalTimeSegment, MdfEnumValue);
  /**
   * All fields of the ExternalTimeSegment entity.
   */
  export const _allFields: Array<StringField<ExternalTimeSegment> | DateField<ExternalTimeSegment> | BigNumberField<ExternalTimeSegment> | OneToOneLink<ExternalTimeSegment, User> | OneToOneLink<ExternalTimeSegment, MdfEnumValue>> = [
    ExternalTimeSegment.EXTERNAL_TIME_RECORD_EXTERNAL_CODE,
    ExternalTimeSegment.CREATED_BY,
    ExternalTimeSegment.CREATED_DATE_TIME,
    ExternalTimeSegment.EXTERNAL_CODE,
    ExternalTimeSegment.HOURS,
    ExternalTimeSegment.LAST_MODIFIED_BY,
    ExternalTimeSegment.LAST_MODIFIED_DATE_TIME,
    ExternalTimeSegment.MDF_SYSTEM_RECORD_STATUS,
    ExternalTimeSegment.CREATED_BY_NAV,
    ExternalTimeSegment.LAST_MODIFIED_BY_NAV,
    ExternalTimeSegment.MDF_SYSTEM_RECORD_STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<ExternalTimeSegment> = new AllFields('*', ExternalTimeSegment);
  /**
   * All key fields of the ExternalTimeSegment entity.
   */
  export const _keyFields: Array<Selectable<ExternalTimeSegment>> = [ExternalTimeSegment.EXTERNAL_TIME_RECORD_EXTERNAL_CODE, ExternalTimeSegment.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property ExternalTimeSegment.
   */
  export const _keys: { [keys: string]: Selectable<ExternalTimeSegment> } = ExternalTimeSegment._keyFields.reduce((acc: { [keys: string]: Selectable<ExternalTimeSegment> }, field: Selectable<ExternalTimeSegment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
