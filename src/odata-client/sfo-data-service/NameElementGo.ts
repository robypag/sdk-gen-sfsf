/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NameElementGoRequestBuilder } from './NameElementGoRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "NameElementGO" of service "SFOData".
 */
export class NameElementGo extends Entity implements NameElementGoType {
  /**
   * Technical entity name for NameElementGo.
   */
  static _entityName = 'NameElementGO';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for NameElementGo.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Name Format_Name Format Code.
   * Maximum length: 128.
   */
  nameFormatGoExternalCode!: string;
  /**
   * Alternative Name Element.
   * Maximum length: 128.
   * @nullable
   */
  alternativeNameArtifactEnum?: string;
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
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Name Element.
   * Maximum length: 255.
   * @nullable
   */
  nameArtifactEnum?: string;
  /**
   * Value.
   * Maximum length: 255.
   * @nullable
   */
  sampleData?: string;
  /**
   * Separator.
   * Maximum length: 255.
   * @nullable
   */
  separator?: string;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  alternativeNameArtifactEnumNav!: MdfEnumValue;
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
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  nameArtifactEnumNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `NameElementGo`.
   * @returns A builder that constructs instances of entity type `NameElementGo`.
   */
  static builder(): EntityBuilderType<NameElementGo, NameElementGoTypeForceMandatory> {
    return Entity.entityBuilder(NameElementGo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `NameElementGo` entity type.
   * @returns A `NameElementGo` request builder.
   */
  static requestBuilder(): NameElementGoRequestBuilder {
    return new NameElementGoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `NameElementGo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `NameElementGo`.
   */
  static customField(fieldName: string): CustomField<NameElementGo> {
    return Entity.customFieldSelector(fieldName, NameElementGo);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { User, UserType } from './User';

export interface NameElementGoType {
  nameFormatGoExternalCode: string;
  alternativeNameArtifactEnum?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  nameArtifactEnum?: string;
  sampleData?: string;
  separator?: string;
  alternativeNameArtifactEnumNav: MdfEnumValueType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameArtifactEnumNav: MdfEnumValueType;
}

export interface NameElementGoTypeForceMandatory {
  nameFormatGoExternalCode: string;
  alternativeNameArtifactEnum: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  nameArtifactEnum: string;
  sampleData: string;
  separator: string;
  alternativeNameArtifactEnumNav: MdfEnumValueType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameArtifactEnumNav: MdfEnumValueType;
}

export namespace NameElementGo {
  /**
   * Static representation of the [[nameFormatGoExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FORMAT_GO_EXTERNAL_CODE: StringField<NameElementGo> = new StringField('NameFormatGO_externalCode', NameElementGo, 'Edm.String');
  /**
   * Static representation of the [[alternativeNameArtifactEnum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALTERNATIVE_NAME_ARTIFACT_ENUM: StringField<NameElementGo> = new StringField('alternativeNameArtifactEnum', NameElementGo, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<NameElementGo> = new StringField('createdBy', NameElementGo, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<NameElementGo> = new DateField('createdDateTime', NameElementGo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<NameElementGo> = new StringField('externalCode', NameElementGo, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<NameElementGo> = new StringField('lastModifiedBy', NameElementGo, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<NameElementGo> = new DateField('lastModifiedDateTime', NameElementGo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<NameElementGo> = new StringField('mdfSystemRecordStatus', NameElementGo, 'Edm.String');
  /**
   * Static representation of the [[nameArtifactEnum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ARTIFACT_ENUM: StringField<NameElementGo> = new StringField('nameArtifactEnum', NameElementGo, 'Edm.String');
  /**
   * Static representation of the [[sampleData]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SAMPLE_DATA: StringField<NameElementGo> = new StringField('sampleData', NameElementGo, 'Edm.String');
  /**
   * Static representation of the [[separator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEPARATOR: StringField<NameElementGo> = new StringField('separator', NameElementGo, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[alternativeNameArtifactEnumNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ALTERNATIVE_NAME_ARTIFACT_ENUM_NAV: OneToOneLink<NameElementGo, MdfEnumValue> = new OneToOneLink('alternativeNameArtifactEnumNav', NameElementGo, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<NameElementGo, User> = new OneToOneLink('createdByNav', NameElementGo, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<NameElementGo, User> = new OneToOneLink('lastModifiedByNav', NameElementGo, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<NameElementGo, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', NameElementGo, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[nameArtifactEnumNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ARTIFACT_ENUM_NAV: OneToOneLink<NameElementGo, MdfEnumValue> = new OneToOneLink('nameArtifactEnumNav', NameElementGo, MdfEnumValue);
  /**
   * All fields of the NameElementGo entity.
   */
  export const _allFields: Array<StringField<NameElementGo> | DateField<NameElementGo> | OneToOneLink<NameElementGo, MdfEnumValue> | OneToOneLink<NameElementGo, User>> = [
    NameElementGo.NAME_FORMAT_GO_EXTERNAL_CODE,
    NameElementGo.ALTERNATIVE_NAME_ARTIFACT_ENUM,
    NameElementGo.CREATED_BY,
    NameElementGo.CREATED_DATE_TIME,
    NameElementGo.EXTERNAL_CODE,
    NameElementGo.LAST_MODIFIED_BY,
    NameElementGo.LAST_MODIFIED_DATE_TIME,
    NameElementGo.MDF_SYSTEM_RECORD_STATUS,
    NameElementGo.NAME_ARTIFACT_ENUM,
    NameElementGo.SAMPLE_DATA,
    NameElementGo.SEPARATOR,
    NameElementGo.ALTERNATIVE_NAME_ARTIFACT_ENUM_NAV,
    NameElementGo.CREATED_BY_NAV,
    NameElementGo.LAST_MODIFIED_BY_NAV,
    NameElementGo.MDF_SYSTEM_RECORD_STATUS_NAV,
    NameElementGo.NAME_ARTIFACT_ENUM_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<NameElementGo> = new AllFields('*', NameElementGo);
  /**
   * All key fields of the NameElementGo entity.
   */
  export const _keyFields: Array<Selectable<NameElementGo>> = [NameElementGo.NAME_FORMAT_GO_EXTERNAL_CODE, NameElementGo.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property NameElementGo.
   */
  export const _keys: { [keys: string]: Selectable<NameElementGo> } = NameElementGo._keyFields.reduce((acc: { [keys: string]: Selectable<NameElementGo> }, field: Selectable<NameElementGo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
