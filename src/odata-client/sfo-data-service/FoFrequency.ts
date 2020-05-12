/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoFrequencyRequestBuilder } from './FoFrequencyRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOFrequency" of service "SFOData".
 */
export class FoFrequency extends Entity implements FoFrequencyType {
  /**
   * Technical entity name for FoFrequency.
   */
  static _entityName = 'FOFrequency';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoFrequency.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Annualization Factor.
   * @nullable
   */
  annualizationFactor?: number;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created Date Time.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Created On.
   * @nullable
   */
  createdOn?: Moment;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  description?: string;
  /**
   * Frequency ID.
   * Maximum length: 32.
   */
  externalCode!: string;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date Time.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedOn?: Moment;
  /**
   * Name.
   * Maximum length: 32.
   * @nullable
   */
  name?: string;
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  descriptionTranslationNav!: FoTranslation;
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  nameTranslationNav!: FoTranslation;

  /**
   * Returns an entity builder to construct instances `FoFrequency`.
   * @returns A builder that constructs instances of entity type `FoFrequency`.
   */
  static builder(): EntityBuilderType<FoFrequency, FoFrequencyTypeForceMandatory> {
    return Entity.entityBuilder(FoFrequency);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoFrequency` entity type.
   * @returns A `FoFrequency` request builder.
   */
  static requestBuilder(): FoFrequencyRequestBuilder {
    return new FoFrequencyRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoFrequency`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoFrequency`.
   */
  static customField(fieldName: string): CustomField<FoFrequency> {
    return Entity.customFieldSelector(fieldName, FoFrequency);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoTranslation, FoTranslationType } from './FoTranslation';

export interface FoFrequencyType {
  annualizationFactor?: number;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  description?: string;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  name?: string;
  descriptionTranslationNav: FoTranslationType;
  nameTranslationNav: FoTranslationType;
}

export interface FoFrequencyTypeForceMandatory {
  annualizationFactor: number;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  description: string;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  name: string;
  descriptionTranslationNav: FoTranslationType;
  nameTranslationNav: FoTranslationType;
}

export namespace FoFrequency {
  /**
   * Static representation of the [[annualizationFactor]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ANNUALIZATION_FACTOR: NumberField<FoFrequency> = new NumberField('annualizationFactor', FoFrequency, 'Edm.Double');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoFrequency> = new StringField('createdBy', FoFrequency, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoFrequency> = new DateField('createdDateTime', FoFrequency, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoFrequency> = new DateField('createdOn', FoFrequency, 'Edm.DateTime');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FoFrequency> = new StringField('description', FoFrequency, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoFrequency> = new StringField('externalCode', FoFrequency, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoFrequency> = new StringField('lastModifiedBy', FoFrequency, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoFrequency> = new DateField('lastModifiedDateTime', FoFrequency, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoFrequency> = new DateField('lastModifiedOn', FoFrequency, 'Edm.DateTime');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FoFrequency> = new StringField('name', FoFrequency, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoFrequency, FoTranslation> = new OneToOneLink('descriptionTranslationNav', FoFrequency, FoTranslation);
  /**
   * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_NAV: OneToOneLink<FoFrequency, FoTranslation> = new OneToOneLink('nameTranslationNav', FoFrequency, FoTranslation);
  /**
   * All fields of the FoFrequency entity.
   */
  export const _allFields: Array<NumberField<FoFrequency> | StringField<FoFrequency> | DateField<FoFrequency> | OneToOneLink<FoFrequency, FoTranslation>> = [
    FoFrequency.ANNUALIZATION_FACTOR,
    FoFrequency.CREATED_BY,
    FoFrequency.CREATED_DATE_TIME,
    FoFrequency.CREATED_ON,
    FoFrequency.DESCRIPTION,
    FoFrequency.EXTERNAL_CODE,
    FoFrequency.LAST_MODIFIED_BY,
    FoFrequency.LAST_MODIFIED_DATE_TIME,
    FoFrequency.LAST_MODIFIED_ON,
    FoFrequency.NAME,
    FoFrequency.DESCRIPTION_TRANSLATION_NAV,
    FoFrequency.NAME_TRANSLATION_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoFrequency> = new AllFields('*', FoFrequency);
  /**
   * All key fields of the FoFrequency entity.
   */
  export const _keyFields: Array<Selectable<FoFrequency>> = [FoFrequency.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property FoFrequency.
   */
  export const _keys: { [keys: string]: Selectable<FoFrequency> } = FoFrequency._keyFields.reduce((acc: { [keys: string]: Selectable<FoFrequency> }, field: Selectable<FoFrequency>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
