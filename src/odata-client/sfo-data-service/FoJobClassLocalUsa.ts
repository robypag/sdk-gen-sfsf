/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoJobClassLocalUsaRequestBuilder } from './FoJobClassLocalUsaRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOJobClassLocalUSA" of service "SFOData".
 */
export class FoJobClassLocalUsa extends Entity implements FoJobClassLocalUsaType {
  /**
   * Technical entity name for FoJobClassLocalUsa.
   */
  static _entityName = 'FOJobClassLocalUSA';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoJobClassLocalUsa.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Job Classification Country/Region_Country/Region.
   * Maximum length: 128.
   */
  country!: string;
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
   * createdDate.
   * @nullable
   */
  createdOn?: Moment;
  /**
   * Workers'Comp Code.
   * Maximum length: 32.
   * @nullable
   */
  custWorkersCompCode?: string;
  /**
   * EEO1 Job Category.
   * Maximum length: 128.
   * @nullable
   */
  eeo1JobCategory?: string;
  /**
   * EEO Job Group.
   * Maximum length: 128.
   * @nullable
   */
  eeoJobGroup?: string;
  /**
   * effectiveEndDate.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Job Classification _Job Code.
   * Maximum length: 32.
   */
  externalCode!: string;
  /**
   * FLSA Status.
   * Maximum length: 128.
   * @nullable
   */
  flsaStatusUsa?: string;
  /**
   * EEO1 Job Category.
   * @nullable
   */
  genericNumber1?: BigNumber;
  /**
   * EEO Job Group.
   * @nullable
   */
  genericNumber5?: BigNumber;
  /**
   * FLSA Status.
   * @nullable
   */
  genericNumber6?: BigNumber;
  /**
   * Local Job Title.
   * Maximum length: 32.
   * @nullable
   */
  genericString1?: string;
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
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedOn?: Moment;
  /**
   * Job Classification _Effective as of.
   */
  startDate!: Moment;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * One-to-one navigation property to the [[Territory]] entity.
   */
  countryNav!: Territory;
  /**
   * One-to-many navigation property to the [[PickListValueV2]] entity.
   */
  eeo1JobCategoryNav!: PickListValueV2[];
  /**
   * One-to-many navigation property to the [[PickListValueV2]] entity.
   */
  eeoJobGroupNav!: PickListValueV2[];
  /**
   * One-to-many navigation property to the [[PickListValueV2]] entity.
   */
  flsaStatusUsaNav!: PickListValueV2[];
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber1Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber5Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  genericNumber6Nav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `FoJobClassLocalUsa`.
   * @returns A builder that constructs instances of entity type `FoJobClassLocalUsa`.
   */
  static builder(): EntityBuilderType<FoJobClassLocalUsa, FoJobClassLocalUsaTypeForceMandatory> {
    return Entity.entityBuilder(FoJobClassLocalUsa);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoJobClassLocalUsa` entity type.
   * @returns A `FoJobClassLocalUsa` request builder.
   */
  static requestBuilder(): FoJobClassLocalUsaRequestBuilder {
    return new FoJobClassLocalUsaRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalUsa`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoJobClassLocalUsa`.
   */
  static customField(fieldName: string): CustomField<FoJobClassLocalUsa> {
    return Entity.customFieldSelector(fieldName, FoJobClassLocalUsa);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Territory, TerritoryType } from './Territory';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { PicklistOption, PicklistOptionType } from './PicklistOption';

export interface FoJobClassLocalUsaType {
  country: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  custWorkersCompCode?: string;
  eeo1JobCategory?: string;
  eeoJobGroup?: string;
  endDate?: Moment;
  externalCode: string;
  flsaStatusUsa?: string;
  genericNumber1?: BigNumber;
  genericNumber5?: BigNumber;
  genericNumber6?: BigNumber;
  genericString1?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  startDate: Moment;
  status?: string;
  countryNav: TerritoryType;
  eeo1JobCategoryNav: PickListValueV2Type[];
  eeoJobGroupNav: PickListValueV2Type[];
  flsaStatusUsaNav: PickListValueV2Type[];
  genericNumber1Nav: PicklistOptionType;
  genericNumber5Nav: PicklistOptionType;
  genericNumber6Nav: PicklistOptionType;
}

export interface FoJobClassLocalUsaTypeForceMandatory {
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  custWorkersCompCode: string;
  eeo1JobCategory: string;
  eeoJobGroup: string;
  endDate: Moment;
  externalCode: string;
  flsaStatusUsa: string;
  genericNumber1: BigNumber;
  genericNumber5: BigNumber;
  genericNumber6: BigNumber;
  genericString1: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  startDate: Moment;
  status: string;
  countryNav: TerritoryType;
  eeo1JobCategoryNav: PickListValueV2Type[];
  eeoJobGroupNav: PickListValueV2Type[];
  flsaStatusUsaNav: PickListValueV2Type[];
  genericNumber1Nav: PicklistOptionType;
  genericNumber5Nav: PicklistOptionType;
  genericNumber6Nav: PicklistOptionType;
}

export namespace FoJobClassLocalUsa {
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<FoJobClassLocalUsa> = new StringField('country', FoJobClassLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoJobClassLocalUsa> = new StringField('createdBy', FoJobClassLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoJobClassLocalUsa> = new DateField('createdDateTime', FoJobClassLocalUsa, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoJobClassLocalUsa> = new DateField('createdOn', FoJobClassLocalUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[custWorkersCompCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_WORKERS_COMP_CODE: StringField<FoJobClassLocalUsa> = new StringField('cust_WorkersCompCode', FoJobClassLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[eeo1JobCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_1_JOB_CATEGORY: StringField<FoJobClassLocalUsa> = new StringField('eeo1JobCategory', FoJobClassLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[eeoJobGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_JOB_GROUP: StringField<FoJobClassLocalUsa> = new StringField('eeoJobGroup', FoJobClassLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoJobClassLocalUsa> = new DateField('endDate', FoJobClassLocalUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoJobClassLocalUsa> = new StringField('externalCode', FoJobClassLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[flsaStatusUsa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLSA_STATUS_USA: StringField<FoJobClassLocalUsa> = new StringField('flsaStatusUSA', FoJobClassLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[genericNumber1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1: BigNumberField<FoJobClassLocalUsa> = new BigNumberField('genericNumber1', FoJobClassLocalUsa, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5: BigNumberField<FoJobClassLocalUsa> = new BigNumberField('genericNumber5', FoJobClassLocalUsa, 'Edm.Int64');
  /**
   * Static representation of the [[genericNumber6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6: BigNumberField<FoJobClassLocalUsa> = new BigNumberField('genericNumber6', FoJobClassLocalUsa, 'Edm.Int64');
  /**
   * Static representation of the [[genericString1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_STRING_1: StringField<FoJobClassLocalUsa> = new StringField('genericString1', FoJobClassLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoJobClassLocalUsa> = new StringField('lastModifiedBy', FoJobClassLocalUsa, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoJobClassLocalUsa> = new DateField('lastModifiedDateTime', FoJobClassLocalUsa, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoJobClassLocalUsa> = new DateField('lastModifiedOn', FoJobClassLocalUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoJobClassLocalUsa> = new DateField('startDate', FoJobClassLocalUsa, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoJobClassLocalUsa> = new StringField('status', FoJobClassLocalUsa, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: OneToOneLink<FoJobClassLocalUsa, Territory> = new OneToOneLink('countryNav', FoJobClassLocalUsa, Territory);
  /**
   * Static representation of the one-to-many navigation property [[eeo1JobCategoryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_1_JOB_CATEGORY_NAV: Link<FoJobClassLocalUsa, PickListValueV2> = new Link('eeo1JobCategoryNav', FoJobClassLocalUsa, PickListValueV2);
  /**
   * Static representation of the one-to-many navigation property [[eeoJobGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_JOB_GROUP_NAV: Link<FoJobClassLocalUsa, PickListValueV2> = new Link('eeoJobGroupNav', FoJobClassLocalUsa, PickListValueV2);
  /**
   * Static representation of the one-to-many navigation property [[flsaStatusUsaNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLSA_STATUS_USA_NAV: Link<FoJobClassLocalUsa, PickListValueV2> = new Link('flsaStatusUSANav', FoJobClassLocalUsa, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber1Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_1_NAV: OneToOneLink<FoJobClassLocalUsa, PicklistOption> = new OneToOneLink('genericNumber1Nav', FoJobClassLocalUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber5Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_5_NAV: OneToOneLink<FoJobClassLocalUsa, PicklistOption> = new OneToOneLink('genericNumber5Nav', FoJobClassLocalUsa, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[genericNumber6Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENERIC_NUMBER_6_NAV: OneToOneLink<FoJobClassLocalUsa, PicklistOption> = new OneToOneLink('genericNumber6Nav', FoJobClassLocalUsa, PicklistOption);
  /**
   * All fields of the FoJobClassLocalUsa entity.
   */
  export const _allFields: Array<StringField<FoJobClassLocalUsa> | DateField<FoJobClassLocalUsa> | BigNumberField<FoJobClassLocalUsa> | OneToOneLink<FoJobClassLocalUsa, Territory> | Link<FoJobClassLocalUsa, PickListValueV2> | OneToOneLink<FoJobClassLocalUsa, PicklistOption>> = [
    FoJobClassLocalUsa.COUNTRY,
    FoJobClassLocalUsa.CREATED_BY,
    FoJobClassLocalUsa.CREATED_DATE_TIME,
    FoJobClassLocalUsa.CREATED_ON,
    FoJobClassLocalUsa.CUST_WORKERS_COMP_CODE,
    FoJobClassLocalUsa.EEO_1_JOB_CATEGORY,
    FoJobClassLocalUsa.EEO_JOB_GROUP,
    FoJobClassLocalUsa.END_DATE,
    FoJobClassLocalUsa.EXTERNAL_CODE,
    FoJobClassLocalUsa.FLSA_STATUS_USA,
    FoJobClassLocalUsa.GENERIC_NUMBER_1,
    FoJobClassLocalUsa.GENERIC_NUMBER_5,
    FoJobClassLocalUsa.GENERIC_NUMBER_6,
    FoJobClassLocalUsa.GENERIC_STRING_1,
    FoJobClassLocalUsa.LAST_MODIFIED_BY,
    FoJobClassLocalUsa.LAST_MODIFIED_DATE_TIME,
    FoJobClassLocalUsa.LAST_MODIFIED_ON,
    FoJobClassLocalUsa.START_DATE,
    FoJobClassLocalUsa.STATUS,
    FoJobClassLocalUsa.COUNTRY_NAV,
    FoJobClassLocalUsa.EEO_1_JOB_CATEGORY_NAV,
    FoJobClassLocalUsa.EEO_JOB_GROUP_NAV,
    FoJobClassLocalUsa.FLSA_STATUS_USA_NAV,
    FoJobClassLocalUsa.GENERIC_NUMBER_1_NAV,
    FoJobClassLocalUsa.GENERIC_NUMBER_5_NAV,
    FoJobClassLocalUsa.GENERIC_NUMBER_6_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoJobClassLocalUsa> = new AllFields('*', FoJobClassLocalUsa);
  /**
   * All key fields of the FoJobClassLocalUsa entity.
   */
  export const _keyFields: Array<Selectable<FoJobClassLocalUsa>> = [FoJobClassLocalUsa.COUNTRY, FoJobClassLocalUsa.EXTERNAL_CODE, FoJobClassLocalUsa.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoJobClassLocalUsa.
   */
  export const _keys: { [keys: string]: Selectable<FoJobClassLocalUsa> } = FoJobClassLocalUsa._keyFields.reduce((acc: { [keys: string]: Selectable<FoJobClassLocalUsa> }, field: Selectable<FoJobClassLocalUsa>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
