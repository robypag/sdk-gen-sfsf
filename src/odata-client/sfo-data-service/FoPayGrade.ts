/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoPayGradeRequestBuilder } from './FoPayGradeRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOPayGrade" of service "SFOData".
 */
export class FoPayGrade extends Entity implements FoPayGradeType {
  /**
   * Technical entity name for FoPayGrade.
   */
  static _entityName = 'FOPayGrade';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoPayGrade.
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
   * Pay Grade ID.
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
   * Pay Grade Level.
   * @nullable
   */
  paygradeLevel?: BigNumber;
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
   * Returns an entity builder to construct instances `FoPayGrade`.
   * @returns A builder that constructs instances of entity type `FoPayGrade`.
   */
  static builder(): EntityBuilderType<FoPayGrade, FoPayGradeTypeForceMandatory> {
    return Entity.entityBuilder(FoPayGrade);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoPayGrade` entity type.
   * @returns A `FoPayGrade` request builder.
   */
  static requestBuilder(): FoPayGradeRequestBuilder {
    return new FoPayGradeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoPayGrade`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoPayGrade`.
   */
  static customField(fieldName: string): CustomField<FoPayGrade> {
    return Entity.customFieldSelector(fieldName, FoPayGrade);
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

export interface FoPayGradeType {
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
  paygradeLevel?: BigNumber;
  startDate: Moment;
  status?: string;
  descriptionTranslationNav: FoTranslationType;
  nameTranslationNav: FoTranslationType;
}

export interface FoPayGradeTypeForceMandatory {
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
  paygradeLevel: BigNumber;
  startDate: Moment;
  status: string;
  descriptionTranslationNav: FoTranslationType;
  nameTranslationNav: FoTranslationType;
}

export namespace FoPayGrade {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoPayGrade> = new StringField('createdBy', FoPayGrade, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoPayGrade> = new DateField('createdDateTime', FoPayGrade, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoPayGrade> = new DateField('createdOn', FoPayGrade, 'Edm.DateTime');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FoPayGrade> = new StringField('description', FoPayGrade, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoPayGrade> = new DateField('endDate', FoPayGrade, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoPayGrade> = new StringField('externalCode', FoPayGrade, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoPayGrade> = new StringField('lastModifiedBy', FoPayGrade, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoPayGrade> = new DateField('lastModifiedDateTime', FoPayGrade, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoPayGrade> = new DateField('lastModifiedOn', FoPayGrade, 'Edm.DateTime');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FoPayGrade> = new StringField('name', FoPayGrade, 'Edm.String');
  /**
   * Static representation of the [[paygradeLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYGRADE_LEVEL: BigNumberField<FoPayGrade> = new BigNumberField('paygradeLevel', FoPayGrade, 'Edm.Int64');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoPayGrade> = new DateField('startDate', FoPayGrade, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoPayGrade> = new StringField('status', FoPayGrade, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoPayGrade, FoTranslation> = new OneToOneLink('descriptionTranslationNav', FoPayGrade, FoTranslation);
  /**
   * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_NAV: OneToOneLink<FoPayGrade, FoTranslation> = new OneToOneLink('nameTranslationNav', FoPayGrade, FoTranslation);
  /**
   * All fields of the FoPayGrade entity.
   */
  export const _allFields: Array<StringField<FoPayGrade> | DateField<FoPayGrade> | BigNumberField<FoPayGrade> | OneToOneLink<FoPayGrade, FoTranslation>> = [
    FoPayGrade.CREATED_BY,
    FoPayGrade.CREATED_DATE_TIME,
    FoPayGrade.CREATED_ON,
    FoPayGrade.DESCRIPTION,
    FoPayGrade.END_DATE,
    FoPayGrade.EXTERNAL_CODE,
    FoPayGrade.LAST_MODIFIED_BY,
    FoPayGrade.LAST_MODIFIED_DATE_TIME,
    FoPayGrade.LAST_MODIFIED_ON,
    FoPayGrade.NAME,
    FoPayGrade.PAYGRADE_LEVEL,
    FoPayGrade.START_DATE,
    FoPayGrade.STATUS,
    FoPayGrade.DESCRIPTION_TRANSLATION_NAV,
    FoPayGrade.NAME_TRANSLATION_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoPayGrade> = new AllFields('*', FoPayGrade);
  /**
   * All key fields of the FoPayGrade entity.
   */
  export const _keyFields: Array<Selectable<FoPayGrade>> = [FoPayGrade.EXTERNAL_CODE, FoPayGrade.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoPayGrade.
   */
  export const _keys: { [keys: string]: Selectable<FoPayGrade> } = FoPayGrade._keyFields.reduce((acc: { [keys: string]: Selectable<FoPayGrade> }, field: Selectable<FoPayGrade>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
