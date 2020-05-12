/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoGeozoneRequestBuilder } from './FoGeozoneRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOGeozone" of service "SFOData".
 */
export class FoGeozone extends Entity implements FoGeozoneType {
  /**
   * Technical entity name for FoGeozone.
   */
  static _entityName = 'FOGeozone';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoGeozone.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Adjustment Percentage.
   * @nullable
   */
  adjustmentPercentage?: BigNumber;
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
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Code.
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
   * Start Date.
   */
  startDate!: Moment;
  /**
   * Status.
   * @nullable
   */
  status?: string;
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  descriptionTranslationNav!: FoTranslation;
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  nameTranslationNav!: FoTranslation;

  /**
   * Returns an entity builder to construct instances `FoGeozone`.
   * @returns A builder that constructs instances of entity type `FoGeozone`.
   */
  static builder(): EntityBuilderType<FoGeozone, FoGeozoneTypeForceMandatory> {
    return Entity.entityBuilder(FoGeozone);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoGeozone` entity type.
   * @returns A `FoGeozone` request builder.
   */
  static requestBuilder(): FoGeozoneRequestBuilder {
    return new FoGeozoneRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoGeozone`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoGeozone`.
   */
  static customField(fieldName: string): CustomField<FoGeozone> {
    return Entity.customFieldSelector(fieldName, FoGeozone);
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

export interface FoGeozoneType {
  adjustmentPercentage?: BigNumber;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  description?: string;
  endDate?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  name?: string;
  startDate: Moment;
  status?: string;
  descriptionTranslationNav: FoTranslationType;
  nameTranslationNav: FoTranslationType;
}

export interface FoGeozoneTypeForceMandatory {
  adjustmentPercentage: BigNumber;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  description: string;
  endDate: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  name: string;
  startDate: Moment;
  status: string;
  descriptionTranslationNav: FoTranslationType;
  nameTranslationNav: FoTranslationType;
}

export namespace FoGeozone {
  /**
   * Static representation of the [[adjustmentPercentage]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADJUSTMENT_PERCENTAGE: BigNumberField<FoGeozone> = new BigNumberField('adjustmentPercentage', FoGeozone, 'Edm.Decimal');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoGeozone> = new StringField('createdBy', FoGeozone, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoGeozone> = new DateField('createdDateTime', FoGeozone, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoGeozone> = new DateField('createdOn', FoGeozone, 'Edm.DateTime');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FoGeozone> = new StringField('description', FoGeozone, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoGeozone> = new DateField('endDate', FoGeozone, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoGeozone> = new StringField('externalCode', FoGeozone, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoGeozone> = new StringField('lastModifiedBy', FoGeozone, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoGeozone> = new DateField('lastModifiedDateTime', FoGeozone, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoGeozone> = new DateField('lastModifiedOn', FoGeozone, 'Edm.DateTime');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FoGeozone> = new StringField('name', FoGeozone, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoGeozone> = new DateField('startDate', FoGeozone, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoGeozone> = new StringField('status', FoGeozone, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoGeozone, FoTranslation> = new OneToOneLink('descriptionTranslationNav', FoGeozone, FoTranslation);
  /**
   * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_NAV: OneToOneLink<FoGeozone, FoTranslation> = new OneToOneLink('nameTranslationNav', FoGeozone, FoTranslation);
  /**
   * All fields of the FoGeozone entity.
   */
  export const _allFields: Array<BigNumberField<FoGeozone> | StringField<FoGeozone> | DateField<FoGeozone> | OneToOneLink<FoGeozone, FoTranslation>> = [
    FoGeozone.ADJUSTMENT_PERCENTAGE,
    FoGeozone.CREATED_BY,
    FoGeozone.CREATED_DATE_TIME,
    FoGeozone.CREATED_ON,
    FoGeozone.DESCRIPTION,
    FoGeozone.END_DATE,
    FoGeozone.EXTERNAL_CODE,
    FoGeozone.LAST_MODIFIED_BY,
    FoGeozone.LAST_MODIFIED_DATE_TIME,
    FoGeozone.LAST_MODIFIED_ON,
    FoGeozone.NAME,
    FoGeozone.START_DATE,
    FoGeozone.STATUS,
    FoGeozone.DESCRIPTION_TRANSLATION_NAV,
    FoGeozone.NAME_TRANSLATION_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoGeozone> = new AllFields('*', FoGeozone);
  /**
   * All key fields of the FoGeozone entity.
   */
  export const _keyFields: Array<Selectable<FoGeozone>> = [FoGeozone.EXTERNAL_CODE, FoGeozone.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoGeozone.
   */
  export const _keys: { [keys: string]: Selectable<FoGeozone> } = FoGeozone._keyFields.reduce((acc: { [keys: string]: Selectable<FoGeozone> }, field: Selectable<FoGeozone>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
