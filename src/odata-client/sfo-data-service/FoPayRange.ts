/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoPayRangeRequestBuilder } from './FoPayRangeRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOPayRange" of service "SFOData".
 */
export class FoPayRange extends Entity implements FoPayRangeType {
  /**
   * Technical entity name for FoPayRange.
   */
  static _entityName = 'FOPayRange';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoPayRange.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * companyFlx.
   * Maximum length: 32.
   * @nullable
   */
  companyFlx?: string;
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
   * Currency.
   * Maximum length: 45.
   * @nullable
   */
  currency?: string;
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
   * Pay Range ID.
   * Maximum length: 32.
   */
  externalCode!: string;
  /**
   * Frequency.
   * @nullable
   */
  frequencyCode?: string;
  /**
   * geozoneFlx.
   * Maximum length: 32.
   * @nullable
   */
  geozoneFlx?: string;
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
   * Maximum Pay.
   * @nullable
   */
  maximumPay?: BigNumber;
  /**
   * Mid Point.
   * @nullable
   */
  midPoint?: BigNumber;
  /**
   * Minimum Pay.
   * @nullable
   */
  minimumPay?: BigNumber;
  /**
   * Name.
   * Maximum length: 32.
   * @nullable
   */
  name?: string;
  /**
   * payGradeFlx.
   * Maximum length: 32.
   * @nullable
   */
  payGradeFlx?: string;
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
   * One-to-one navigation property to the [[FoCompany]] entity.
   */
  companyFlxNav!: FoCompany;
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  descriptionTranslationNav!: FoTranslation;
  /**
   * One-to-one navigation property to the [[FoFrequency]] entity.
   */
  frequencyCodeNav!: FoFrequency;
  /**
   * One-to-one navigation property to the [[FoGeozone]] entity.
   */
  geozoneFlxNav!: FoGeozone;
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  nameTranslationNav!: FoTranslation;
  /**
   * One-to-one navigation property to the [[FoPayGrade]] entity.
   */
  payGradeFlxNav!: FoPayGrade;

  /**
   * Returns an entity builder to construct instances `FoPayRange`.
   * @returns A builder that constructs instances of entity type `FoPayRange`.
   */
  static builder(): EntityBuilderType<FoPayRange, FoPayRangeTypeForceMandatory> {
    return Entity.entityBuilder(FoPayRange);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoPayRange` entity type.
   * @returns A `FoPayRange` request builder.
   */
  static requestBuilder(): FoPayRangeRequestBuilder {
    return new FoPayRangeRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoPayRange`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoPayRange`.
   */
  static customField(fieldName: string): CustomField<FoPayRange> {
    return Entity.customFieldSelector(fieldName, FoPayRange);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoCompany, FoCompanyType } from './FoCompany';
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { FoFrequency, FoFrequencyType } from './FoFrequency';
import { FoGeozone, FoGeozoneType } from './FoGeozone';
import { FoPayGrade, FoPayGradeType } from './FoPayGrade';

export interface FoPayRangeType {
  companyFlx?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  currency?: string;
  description?: string;
  endDate?: Moment;
  externalCode: string;
  frequencyCode?: string;
  geozoneFlx?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  maximumPay?: BigNumber;
  midPoint?: BigNumber;
  minimumPay?: BigNumber;
  name?: string;
  payGradeFlx?: string;
  startDate: Moment;
  status?: string;
  companyFlxNav: FoCompanyType;
  descriptionTranslationNav: FoTranslationType;
  frequencyCodeNav: FoFrequencyType;
  geozoneFlxNav: FoGeozoneType;
  nameTranslationNav: FoTranslationType;
  payGradeFlxNav: FoPayGradeType;
}

export interface FoPayRangeTypeForceMandatory {
  companyFlx: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  currency: string;
  description: string;
  endDate: Moment;
  externalCode: string;
  frequencyCode: string;
  geozoneFlx: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  maximumPay: BigNumber;
  midPoint: BigNumber;
  minimumPay: BigNumber;
  name: string;
  payGradeFlx: string;
  startDate: Moment;
  status: string;
  companyFlxNav: FoCompanyType;
  descriptionTranslationNav: FoTranslationType;
  frequencyCodeNav: FoFrequencyType;
  geozoneFlxNav: FoGeozoneType;
  nameTranslationNav: FoTranslationType;
  payGradeFlxNav: FoPayGradeType;
}

export namespace FoPayRange {
  /**
   * Static representation of the [[companyFlx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_FLX: StringField<FoPayRange> = new StringField('companyFlx', FoPayRange, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoPayRange> = new StringField('createdBy', FoPayRange, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoPayRange> = new DateField('createdDateTime', FoPayRange, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoPayRange> = new DateField('createdOn', FoPayRange, 'Edm.DateTime');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<FoPayRange> = new StringField('currency', FoPayRange, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FoPayRange> = new StringField('description', FoPayRange, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoPayRange> = new DateField('endDate', FoPayRange, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoPayRange> = new StringField('externalCode', FoPayRange, 'Edm.String');
  /**
   * Static representation of the [[frequencyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREQUENCY_CODE: StringField<FoPayRange> = new StringField('frequencyCode', FoPayRange, 'Edm.String');
  /**
   * Static representation of the [[geozoneFlx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GEOZONE_FLX: StringField<FoPayRange> = new StringField('geozoneFlx', FoPayRange, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoPayRange> = new StringField('lastModifiedBy', FoPayRange, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoPayRange> = new DateField('lastModifiedDateTime', FoPayRange, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoPayRange> = new DateField('lastModifiedOn', FoPayRange, 'Edm.DateTime');
  /**
   * Static representation of the [[maximumPay]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAXIMUM_PAY: BigNumberField<FoPayRange> = new BigNumberField('maximumPay', FoPayRange, 'Edm.Decimal');
  /**
   * Static representation of the [[midPoint]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MID_POINT: BigNumberField<FoPayRange> = new BigNumberField('midPoint', FoPayRange, 'Edm.Decimal');
  /**
   * Static representation of the [[minimumPay]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINIMUM_PAY: BigNumberField<FoPayRange> = new BigNumberField('minimumPay', FoPayRange, 'Edm.Decimal');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FoPayRange> = new StringField('name', FoPayRange, 'Edm.String');
  /**
   * Static representation of the [[payGradeFlx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_GRADE_FLX: StringField<FoPayRange> = new StringField('payGradeFlx', FoPayRange, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoPayRange> = new DateField('startDate', FoPayRange, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoPayRange> = new StringField('status', FoPayRange, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[companyFlxNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_FLX_NAV: OneToOneLink<FoPayRange, FoCompany> = new OneToOneLink('companyFlxNav', FoPayRange, FoCompany);
  /**
   * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoPayRange, FoTranslation> = new OneToOneLink('descriptionTranslationNav', FoPayRange, FoTranslation);
  /**
   * Static representation of the one-to-one navigation property [[frequencyCodeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREQUENCY_CODE_NAV: OneToOneLink<FoPayRange, FoFrequency> = new OneToOneLink('frequencyCodeNav', FoPayRange, FoFrequency);
  /**
   * Static representation of the one-to-one navigation property [[geozoneFlxNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GEOZONE_FLX_NAV: OneToOneLink<FoPayRange, FoGeozone> = new OneToOneLink('geozoneFlxNav', FoPayRange, FoGeozone);
  /**
   * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_NAV: OneToOneLink<FoPayRange, FoTranslation> = new OneToOneLink('nameTranslationNav', FoPayRange, FoTranslation);
  /**
   * Static representation of the one-to-one navigation property [[payGradeFlxNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_GRADE_FLX_NAV: OneToOneLink<FoPayRange, FoPayGrade> = new OneToOneLink('payGradeFlxNav', FoPayRange, FoPayGrade);
  /**
   * All fields of the FoPayRange entity.
   */
  export const _allFields: Array<StringField<FoPayRange> | DateField<FoPayRange> | BigNumberField<FoPayRange> | OneToOneLink<FoPayRange, FoCompany> | OneToOneLink<FoPayRange, FoTranslation> | OneToOneLink<FoPayRange, FoFrequency> | OneToOneLink<FoPayRange, FoGeozone> | OneToOneLink<FoPayRange, FoPayGrade>> = [
    FoPayRange.COMPANY_FLX,
    FoPayRange.CREATED_BY,
    FoPayRange.CREATED_DATE_TIME,
    FoPayRange.CREATED_ON,
    FoPayRange.CURRENCY,
    FoPayRange.DESCRIPTION,
    FoPayRange.END_DATE,
    FoPayRange.EXTERNAL_CODE,
    FoPayRange.FREQUENCY_CODE,
    FoPayRange.GEOZONE_FLX,
    FoPayRange.LAST_MODIFIED_BY,
    FoPayRange.LAST_MODIFIED_DATE_TIME,
    FoPayRange.LAST_MODIFIED_ON,
    FoPayRange.MAXIMUM_PAY,
    FoPayRange.MID_POINT,
    FoPayRange.MINIMUM_PAY,
    FoPayRange.NAME,
    FoPayRange.PAY_GRADE_FLX,
    FoPayRange.START_DATE,
    FoPayRange.STATUS,
    FoPayRange.COMPANY_FLX_NAV,
    FoPayRange.DESCRIPTION_TRANSLATION_NAV,
    FoPayRange.FREQUENCY_CODE_NAV,
    FoPayRange.GEOZONE_FLX_NAV,
    FoPayRange.NAME_TRANSLATION_NAV,
    FoPayRange.PAY_GRADE_FLX_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoPayRange> = new AllFields('*', FoPayRange);
  /**
   * All key fields of the FoPayRange entity.
   */
  export const _keyFields: Array<Selectable<FoPayRange>> = [FoPayRange.EXTERNAL_CODE, FoPayRange.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoPayRange.
   */
  export const _keys: { [keys: string]: Selectable<FoPayRange> } = FoPayRange._keyFields.reduce((acc: { [keys: string]: Selectable<FoPayRange> }, field: Selectable<FoPayRange>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
