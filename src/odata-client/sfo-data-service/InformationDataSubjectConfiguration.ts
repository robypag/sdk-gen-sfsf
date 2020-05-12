/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { InformationDataSubjectConfigurationRequestBuilder } from './InformationDataSubjectConfigurationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "InformationDataSubjectConfiguration" of service "SFOData".
 */
export class InformationDataSubjectConfiguration extends Entity implements InformationDataSubjectConfigurationType {
  /**
   * Technical entity name for InformationDataSubjectConfiguration.
   */
  static _entityName = 'InformationDataSubjectConfiguration';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for InformationDataSubjectConfiguration.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * configData.
   * @nullable
   */
  configData?: string;
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
   * locale.
   * Maximum length: 255.
   * @nullable
   */
  locale?: string;
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
   * Returns an entity builder to construct instances `InformationDataSubjectConfiguration`.
   * @returns A builder that constructs instances of entity type `InformationDataSubjectConfiguration`.
   */
  static builder(): EntityBuilderType<InformationDataSubjectConfiguration, InformationDataSubjectConfigurationTypeForceMandatory> {
    return Entity.entityBuilder(InformationDataSubjectConfiguration);
  }

  /**
   * Returns a request builder to construct requests for operations on the `InformationDataSubjectConfiguration` entity type.
   * @returns A `InformationDataSubjectConfiguration` request builder.
   */
  static requestBuilder(): InformationDataSubjectConfigurationRequestBuilder {
    return new InformationDataSubjectConfigurationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `InformationDataSubjectConfiguration`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `InformationDataSubjectConfiguration`.
   */
  static customField(fieldName: string): CustomField<InformationDataSubjectConfiguration> {
    return Entity.customFieldSelector(fieldName, InformationDataSubjectConfiguration);
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

export interface InformationDataSubjectConfigurationType {
  configData?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  locale?: string;
  mdfSystemRecordStatus?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface InformationDataSubjectConfigurationTypeForceMandatory {
  configData: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  locale: string;
  mdfSystemRecordStatus: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace InformationDataSubjectConfiguration {
  /**
   * Static representation of the [[configData]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONFIG_DATA: StringField<InformationDataSubjectConfiguration> = new StringField('configData', InformationDataSubjectConfiguration, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<InformationDataSubjectConfiguration> = new StringField('createdBy', InformationDataSubjectConfiguration, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<InformationDataSubjectConfiguration> = new DateField('createdDateTime', InformationDataSubjectConfiguration, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<InformationDataSubjectConfiguration> = new StringField('externalCode', InformationDataSubjectConfiguration, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<InformationDataSubjectConfiguration> = new StringField('lastModifiedBy', InformationDataSubjectConfiguration, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<InformationDataSubjectConfiguration> = new DateField('lastModifiedDateTime', InformationDataSubjectConfiguration, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[locale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCALE: StringField<InformationDataSubjectConfiguration> = new StringField('locale', InformationDataSubjectConfiguration, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<InformationDataSubjectConfiguration> = new StringField('mdfSystemRecordStatus', InformationDataSubjectConfiguration, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<InformationDataSubjectConfiguration, User> = new OneToOneLink('createdByNav', InformationDataSubjectConfiguration, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<InformationDataSubjectConfiguration, User> = new OneToOneLink('lastModifiedByNav', InformationDataSubjectConfiguration, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<InformationDataSubjectConfiguration, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', InformationDataSubjectConfiguration, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<InformationDataSubjectConfiguration, WfRequest> = new Link('wfRequestNav', InformationDataSubjectConfiguration, WfRequest);
  /**
   * All fields of the InformationDataSubjectConfiguration entity.
   */
  export const _allFields: Array<StringField<InformationDataSubjectConfiguration> | DateField<InformationDataSubjectConfiguration> | OneToOneLink<InformationDataSubjectConfiguration, User> | OneToOneLink<InformationDataSubjectConfiguration, MdfEnumValue> | Link<InformationDataSubjectConfiguration, WfRequest>> = [
    InformationDataSubjectConfiguration.CONFIG_DATA,
    InformationDataSubjectConfiguration.CREATED_BY,
    InformationDataSubjectConfiguration.CREATED_DATE_TIME,
    InformationDataSubjectConfiguration.EXTERNAL_CODE,
    InformationDataSubjectConfiguration.LAST_MODIFIED_BY,
    InformationDataSubjectConfiguration.LAST_MODIFIED_DATE_TIME,
    InformationDataSubjectConfiguration.LOCALE,
    InformationDataSubjectConfiguration.MDF_SYSTEM_RECORD_STATUS,
    InformationDataSubjectConfiguration.CREATED_BY_NAV,
    InformationDataSubjectConfiguration.LAST_MODIFIED_BY_NAV,
    InformationDataSubjectConfiguration.MDF_SYSTEM_RECORD_STATUS_NAV,
    InformationDataSubjectConfiguration.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<InformationDataSubjectConfiguration> = new AllFields('*', InformationDataSubjectConfiguration);
  /**
   * All key fields of the InformationDataSubjectConfiguration entity.
   */
  export const _keyFields: Array<Selectable<InformationDataSubjectConfiguration>> = [InformationDataSubjectConfiguration.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property InformationDataSubjectConfiguration.
   */
  export const _keys: { [keys: string]: Selectable<InformationDataSubjectConfiguration> } = InformationDataSubjectConfiguration._keyFields.reduce((acc: { [keys: string]: Selectable<InformationDataSubjectConfiguration> }, field: Selectable<InformationDataSubjectConfiguration>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
