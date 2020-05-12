/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerPersonalRequestBuilder } from './PerPersonalRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerPersonal" of service "SFOData".
 */
export class PerPersonal extends Entity implements PerPersonalType {
  /**
   * Technical entity name for PerPersonal.
   */
  static _entityName = 'PerPersonal';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerPersonal.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Birth Name.
   * Maximum length: 128.
   * @nullable
   */
  birthName?: string;
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
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * First Name.
   * Maximum length: 128.
   * @nullable
   */
  firstName?: string;
  /**
   * Formal Name.
   * Maximum length: 128.
   * @nullable
   */
  formalName?: string;
  /**
   * Gender.
   * Maximum length: 2.
   * @nullable
   */
  gender?: string;
  /**
   * Include All Records.
   * @nullable
   */
  includeAllRecords?: boolean;
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
   * Last Name.
   * Maximum length: 128.
   * @nullable
   */
  lastName?: string;
  /**
   * Marital Status.
   * Maximum length: 50.
   * @nullable
   */
  maritalStatus?: string;
  /**
   * Middle Name.
   * Maximum length: 128.
   * @nullable
   */
  middleName?: string;
  /**
   * Nationality.
   * Maximum length: 128.
   * @nullable
   */
  nationality?: string;
  /**
   * Native Preferred Language.
   * Maximum length: 256.
   * @nullable
   */
  nativePreferredLang?: string;
  /**
   * operation.
   * @nullable
   */
  operation?: string;
  /**
   * Person ID External.
   * Maximum length: 100.
   */
  personIdExternal!: string;
  /**
   * Salutation.
   * Maximum length: 128.
   * @nullable
   */
  salutation?: string;
  /**
   * Second Last Name.
   * Maximum length: 128.
   * @nullable
   */
  secondLastName?: string;
  /**
   * Second Nationality.
   * Maximum length: 128.
   * @nullable
   */
  secondNationality?: string;
  /**
   * Start Date.
   */
  startDate!: Moment;
  /**
   * Suffix.
   * Maximum length: 128.
   * @nullable
   */
  suffix?: string;
  /**
   * Third Nationality.
   * Maximum length: 128.
   * @nullable
   */
  thirdNationality?: string;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoAre]] entity.
   */
  localNavAre!: PerGlobalInfoAre;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoAus]] entity.
   */
  localNavAus!: PerGlobalInfoAus;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoBra]] entity.
   */
  localNavBra!: PerGlobalInfoBra;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoCan]] entity.
   */
  localNavCan!: PerGlobalInfoCan;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoChe]] entity.
   */
  localNavChe!: PerGlobalInfoChe;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoChn]] entity.
   */
  localNavChn!: PerGlobalInfoChn;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoCol]] entity.
   */
  localNavCol!: PerGlobalInfoCol;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoDeu]] entity.
   */
  localNavDeu!: PerGlobalInfoDeu;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoEsp]] entity.
   */
  localNavEsp!: PerGlobalInfoEsp;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoFra]] entity.
   */
  localNavFra!: PerGlobalInfoFra;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoGbr]] entity.
   */
  localNavGbr!: PerGlobalInfoGbr;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoInd]] entity.
   */
  localNavInd!: PerGlobalInfoInd;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoIta]] entity.
   */
  localNavIta!: PerGlobalInfoIta;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoMex]] entity.
   */
  localNavMex!: PerGlobalInfoMex;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoNld]] entity.
   */
  localNavNld!: PerGlobalInfoNld;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoNzl]] entity.
   */
  localNavNzl!: PerGlobalInfoNzl;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoSau]] entity.
   */
  localNavSau!: PerGlobalInfoSau;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoSgp]] entity.
   */
  localNavSgp!: PerGlobalInfoSgp;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoUsa]] entity.
   */
  localNavUsa!: PerGlobalInfoUsa;
  /**
   * One-to-one navigation property to the [[PerGlobalInfoZaf]] entity.
   */
  localNavZaf!: PerGlobalInfoZaf;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  maritalStatusNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  nativePreferredLangNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  salutationNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  suffixNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest;

  /**
   * Returns an entity builder to construct instances `PerPersonal`.
   * @returns A builder that constructs instances of entity type `PerPersonal`.
   */
  static builder(): EntityBuilderType<PerPersonal, PerPersonalTypeForceMandatory> {
    return Entity.entityBuilder(PerPersonal);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerPersonal` entity type.
   * @returns A `PerPersonal` request builder.
   */
  static requestBuilder(): PerPersonalRequestBuilder {
    return new PerPersonalRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerPersonal`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerPersonal`.
   */
  static customField(fieldName: string): CustomField<PerPersonal> {
    return Entity.customFieldSelector(fieldName, PerPersonal);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { PerGlobalInfoAre, PerGlobalInfoAreType } from './PerGlobalInfoAre';
import { PerGlobalInfoAus, PerGlobalInfoAusType } from './PerGlobalInfoAus';
import { PerGlobalInfoBra, PerGlobalInfoBraType } from './PerGlobalInfoBra';
import { PerGlobalInfoCan, PerGlobalInfoCanType } from './PerGlobalInfoCan';
import { PerGlobalInfoChe, PerGlobalInfoCheType } from './PerGlobalInfoChe';
import { PerGlobalInfoChn, PerGlobalInfoChnType } from './PerGlobalInfoChn';
import { PerGlobalInfoCol, PerGlobalInfoColType } from './PerGlobalInfoCol';
import { PerGlobalInfoDeu, PerGlobalInfoDeuType } from './PerGlobalInfoDeu';
import { PerGlobalInfoEsp, PerGlobalInfoEspType } from './PerGlobalInfoEsp';
import { PerGlobalInfoFra, PerGlobalInfoFraType } from './PerGlobalInfoFra';
import { PerGlobalInfoGbr, PerGlobalInfoGbrType } from './PerGlobalInfoGbr';
import { PerGlobalInfoInd, PerGlobalInfoIndType } from './PerGlobalInfoInd';
import { PerGlobalInfoIta, PerGlobalInfoItaType } from './PerGlobalInfoIta';
import { PerGlobalInfoMex, PerGlobalInfoMexType } from './PerGlobalInfoMex';
import { PerGlobalInfoNld, PerGlobalInfoNldType } from './PerGlobalInfoNld';
import { PerGlobalInfoNzl, PerGlobalInfoNzlType } from './PerGlobalInfoNzl';
import { PerGlobalInfoSau, PerGlobalInfoSauType } from './PerGlobalInfoSau';
import { PerGlobalInfoSgp, PerGlobalInfoSgpType } from './PerGlobalInfoSgp';
import { PerGlobalInfoUsa, PerGlobalInfoUsaType } from './PerGlobalInfoUsa';
import { PerGlobalInfoZaf, PerGlobalInfoZafType } from './PerGlobalInfoZaf';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { PerPerson, PerPersonType } from './PerPerson';
import { WfRequest, WfRequestType } from './WfRequest';

export interface PerPersonalType {
  birthName?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  endDate?: Moment;
  firstName?: string;
  formalName?: string;
  gender?: string;
  includeAllRecords?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  lastName?: string;
  maritalStatus?: string;
  middleName?: string;
  nationality?: string;
  nativePreferredLang?: string;
  operation?: string;
  personIdExternal: string;
  salutation?: string;
  secondLastName?: string;
  secondNationality?: string;
  startDate: Moment;
  suffix?: string;
  thirdNationality?: string;
  localNavAre: PerGlobalInfoAreType;
  localNavAus: PerGlobalInfoAusType;
  localNavBra: PerGlobalInfoBraType;
  localNavCan: PerGlobalInfoCanType;
  localNavChe: PerGlobalInfoCheType;
  localNavChn: PerGlobalInfoChnType;
  localNavCol: PerGlobalInfoColType;
  localNavDeu: PerGlobalInfoDeuType;
  localNavEsp: PerGlobalInfoEspType;
  localNavFra: PerGlobalInfoFraType;
  localNavGbr: PerGlobalInfoGbrType;
  localNavInd: PerGlobalInfoIndType;
  localNavIta: PerGlobalInfoItaType;
  localNavMex: PerGlobalInfoMexType;
  localNavNld: PerGlobalInfoNldType;
  localNavNzl: PerGlobalInfoNzlType;
  localNavSau: PerGlobalInfoSauType;
  localNavSgp: PerGlobalInfoSgpType;
  localNavUsa: PerGlobalInfoUsaType;
  localNavZaf: PerGlobalInfoZafType;
  maritalStatusNav: PicklistOptionType;
  nativePreferredLangNav: PicklistOptionType;
  personNav: PerPersonType;
  salutationNav: PicklistOptionType;
  suffixNav: PicklistOptionType;
  wfRequestNav: WfRequestType;
}

export interface PerPersonalTypeForceMandatory {
  birthName: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  endDate: Moment;
  firstName: string;
  formalName: string;
  gender: string;
  includeAllRecords: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  lastName: string;
  maritalStatus: string;
  middleName: string;
  nationality: string;
  nativePreferredLang: string;
  operation: string;
  personIdExternal: string;
  salutation: string;
  secondLastName: string;
  secondNationality: string;
  startDate: Moment;
  suffix: string;
  thirdNationality: string;
  localNavAre: PerGlobalInfoAreType;
  localNavAus: PerGlobalInfoAusType;
  localNavBra: PerGlobalInfoBraType;
  localNavCan: PerGlobalInfoCanType;
  localNavChe: PerGlobalInfoCheType;
  localNavChn: PerGlobalInfoChnType;
  localNavCol: PerGlobalInfoColType;
  localNavDeu: PerGlobalInfoDeuType;
  localNavEsp: PerGlobalInfoEspType;
  localNavFra: PerGlobalInfoFraType;
  localNavGbr: PerGlobalInfoGbrType;
  localNavInd: PerGlobalInfoIndType;
  localNavIta: PerGlobalInfoItaType;
  localNavMex: PerGlobalInfoMexType;
  localNavNld: PerGlobalInfoNldType;
  localNavNzl: PerGlobalInfoNzlType;
  localNavSau: PerGlobalInfoSauType;
  localNavSgp: PerGlobalInfoSgpType;
  localNavUsa: PerGlobalInfoUsaType;
  localNavZaf: PerGlobalInfoZafType;
  maritalStatusNav: PicklistOptionType;
  nativePreferredLangNav: PicklistOptionType;
  personNav: PerPersonType;
  salutationNav: PicklistOptionType;
  suffixNav: PicklistOptionType;
  wfRequestNav: WfRequestType;
}

export namespace PerPersonal {
  /**
   * Static representation of the [[birthName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BIRTH_NAME: StringField<PerPersonal> = new StringField('birthName', PerPersonal, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerPersonal> = new StringField('createdBy', PerPersonal, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerPersonal> = new DateField('createdDateTime', PerPersonal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerPersonal> = new DateField('createdOn', PerPersonal, 'Edm.DateTime');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<PerPersonal> = new DateField('endDate', PerPersonal, 'Edm.DateTime');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<PerPersonal> = new StringField('firstName', PerPersonal, 'Edm.String');
  /**
   * Static representation of the [[formalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORMAL_NAME: StringField<PerPersonal> = new StringField('formalName', PerPersonal, 'Edm.String');
  /**
   * Static representation of the [[gender]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENDER: StringField<PerPersonal> = new StringField('gender', PerPersonal, 'Edm.String');
  /**
   * Static representation of the [[includeAllRecords]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_ALL_RECORDS: BooleanField<PerPersonal> = new BooleanField('includeAllRecords', PerPersonal, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerPersonal> = new StringField('lastModifiedBy', PerPersonal, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerPersonal> = new DateField('lastModifiedDateTime', PerPersonal, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerPersonal> = new DateField('lastModifiedOn', PerPersonal, 'Edm.DateTime');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<PerPersonal> = new StringField('lastName', PerPersonal, 'Edm.String');
  /**
   * Static representation of the [[maritalStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MARITAL_STATUS: StringField<PerPersonal> = new StringField('maritalStatus', PerPersonal, 'Edm.String');
  /**
   * Static representation of the [[middleName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MIDDLE_NAME: StringField<PerPersonal> = new StringField('middleName', PerPersonal, 'Edm.String');
  /**
   * Static representation of the [[nationality]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NATIONALITY: StringField<PerPersonal> = new StringField('nationality', PerPersonal, 'Edm.String');
  /**
   * Static representation of the [[nativePreferredLang]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NATIVE_PREFERRED_LANG: StringField<PerPersonal> = new StringField('nativePreferredLang', PerPersonal, 'Edm.String');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerPersonal> = new StringField('operation', PerPersonal, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerPersonal> = new StringField('personIdExternal', PerPersonal, 'Edm.String');
  /**
   * Static representation of the [[salutation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALUTATION: StringField<PerPersonal> = new StringField('salutation', PerPersonal, 'Edm.String');
  /**
   * Static representation of the [[secondLastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_LAST_NAME: StringField<PerPersonal> = new StringField('secondLastName', PerPersonal, 'Edm.String');
  /**
   * Static representation of the [[secondNationality]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_NATIONALITY: StringField<PerPersonal> = new StringField('secondNationality', PerPersonal, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<PerPersonal> = new DateField('startDate', PerPersonal, 'Edm.DateTime');
  /**
   * Static representation of the [[suffix]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUFFIX: StringField<PerPersonal> = new StringField('suffix', PerPersonal, 'Edm.String');
  /**
   * Static representation of the [[thirdNationality]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const THIRD_NATIONALITY: StringField<PerPersonal> = new StringField('thirdNationality', PerPersonal, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[localNavAre]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_ARE: OneToOneLink<PerPersonal, PerGlobalInfoAre> = new OneToOneLink('localNavARE', PerPersonal, PerGlobalInfoAre);
  /**
   * Static representation of the one-to-one navigation property [[localNavAus]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_AUS: OneToOneLink<PerPersonal, PerGlobalInfoAus> = new OneToOneLink('localNavAUS', PerPersonal, PerGlobalInfoAus);
  /**
   * Static representation of the one-to-one navigation property [[localNavBra]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_BRA: OneToOneLink<PerPersonal, PerGlobalInfoBra> = new OneToOneLink('localNavBRA', PerPersonal, PerGlobalInfoBra);
  /**
   * Static representation of the one-to-one navigation property [[localNavCan]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_CAN: OneToOneLink<PerPersonal, PerGlobalInfoCan> = new OneToOneLink('localNavCAN', PerPersonal, PerGlobalInfoCan);
  /**
   * Static representation of the one-to-one navigation property [[localNavChe]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_CHE: OneToOneLink<PerPersonal, PerGlobalInfoChe> = new OneToOneLink('localNavCHE', PerPersonal, PerGlobalInfoChe);
  /**
   * Static representation of the one-to-one navigation property [[localNavChn]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_CHN: OneToOneLink<PerPersonal, PerGlobalInfoChn> = new OneToOneLink('localNavCHN', PerPersonal, PerGlobalInfoChn);
  /**
   * Static representation of the one-to-one navigation property [[localNavCol]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_COL: OneToOneLink<PerPersonal, PerGlobalInfoCol> = new OneToOneLink('localNavCOL', PerPersonal, PerGlobalInfoCol);
  /**
   * Static representation of the one-to-one navigation property [[localNavDeu]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_DEU: OneToOneLink<PerPersonal, PerGlobalInfoDeu> = new OneToOneLink('localNavDEU', PerPersonal, PerGlobalInfoDeu);
  /**
   * Static representation of the one-to-one navigation property [[localNavEsp]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_ESP: OneToOneLink<PerPersonal, PerGlobalInfoEsp> = new OneToOneLink('localNavESP', PerPersonal, PerGlobalInfoEsp);
  /**
   * Static representation of the one-to-one navigation property [[localNavFra]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_FRA: OneToOneLink<PerPersonal, PerGlobalInfoFra> = new OneToOneLink('localNavFRA', PerPersonal, PerGlobalInfoFra);
  /**
   * Static representation of the one-to-one navigation property [[localNavGbr]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_GBR: OneToOneLink<PerPersonal, PerGlobalInfoGbr> = new OneToOneLink('localNavGBR', PerPersonal, PerGlobalInfoGbr);
  /**
   * Static representation of the one-to-one navigation property [[localNavInd]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_IND: OneToOneLink<PerPersonal, PerGlobalInfoInd> = new OneToOneLink('localNavIND', PerPersonal, PerGlobalInfoInd);
  /**
   * Static representation of the one-to-one navigation property [[localNavIta]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_ITA: OneToOneLink<PerPersonal, PerGlobalInfoIta> = new OneToOneLink('localNavITA', PerPersonal, PerGlobalInfoIta);
  /**
   * Static representation of the one-to-one navigation property [[localNavMex]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_MEX: OneToOneLink<PerPersonal, PerGlobalInfoMex> = new OneToOneLink('localNavMEX', PerPersonal, PerGlobalInfoMex);
  /**
   * Static representation of the one-to-one navigation property [[localNavNld]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_NLD: OneToOneLink<PerPersonal, PerGlobalInfoNld> = new OneToOneLink('localNavNLD', PerPersonal, PerGlobalInfoNld);
  /**
   * Static representation of the one-to-one navigation property [[localNavNzl]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_NZL: OneToOneLink<PerPersonal, PerGlobalInfoNzl> = new OneToOneLink('localNavNZL', PerPersonal, PerGlobalInfoNzl);
  /**
   * Static representation of the one-to-one navigation property [[localNavSau]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_SAU: OneToOneLink<PerPersonal, PerGlobalInfoSau> = new OneToOneLink('localNavSAU', PerPersonal, PerGlobalInfoSau);
  /**
   * Static representation of the one-to-one navigation property [[localNavSgp]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_SGP: OneToOneLink<PerPersonal, PerGlobalInfoSgp> = new OneToOneLink('localNavSGP', PerPersonal, PerGlobalInfoSgp);
  /**
   * Static representation of the one-to-one navigation property [[localNavUsa]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_USA: OneToOneLink<PerPersonal, PerGlobalInfoUsa> = new OneToOneLink('localNavUSA', PerPersonal, PerGlobalInfoUsa);
  /**
   * Static representation of the one-to-one navigation property [[localNavZaf]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_NAV_ZAF: OneToOneLink<PerPersonal, PerGlobalInfoZaf> = new OneToOneLink('localNavZAF', PerPersonal, PerGlobalInfoZaf);
  /**
   * Static representation of the one-to-one navigation property [[maritalStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MARITAL_STATUS_NAV: OneToOneLink<PerPersonal, PicklistOption> = new OneToOneLink('maritalStatusNav', PerPersonal, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[nativePreferredLangNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NATIVE_PREFERRED_LANG_NAV: OneToOneLink<PerPersonal, PicklistOption> = new OneToOneLink('nativePreferredLangNav', PerPersonal, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerPersonal, PerPerson> = new OneToOneLink('personNav', PerPersonal, PerPerson);
  /**
   * Static representation of the one-to-one navigation property [[salutationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SALUTATION_NAV: OneToOneLink<PerPersonal, PicklistOption> = new OneToOneLink('salutationNav', PerPersonal, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[suffixNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUFFIX_NAV: OneToOneLink<PerPersonal, PicklistOption> = new OneToOneLink('suffixNav', PerPersonal, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: OneToOneLink<PerPersonal, WfRequest> = new OneToOneLink('wfRequestNav', PerPersonal, WfRequest);
  /**
   * All fields of the PerPersonal entity.
   */
  export const _allFields: Array<StringField<PerPersonal> | DateField<PerPersonal> | BooleanField<PerPersonal> | OneToOneLink<PerPersonal, PerGlobalInfoAre> | OneToOneLink<PerPersonal, PerGlobalInfoAus> | OneToOneLink<PerPersonal, PerGlobalInfoBra> | OneToOneLink<PerPersonal, PerGlobalInfoCan> | OneToOneLink<PerPersonal, PerGlobalInfoChe> | OneToOneLink<PerPersonal, PerGlobalInfoChn> | OneToOneLink<PerPersonal, PerGlobalInfoCol> | OneToOneLink<PerPersonal, PerGlobalInfoDeu> | OneToOneLink<PerPersonal, PerGlobalInfoEsp> | OneToOneLink<PerPersonal, PerGlobalInfoFra> | OneToOneLink<PerPersonal, PerGlobalInfoGbr> | OneToOneLink<PerPersonal, PerGlobalInfoInd> | OneToOneLink<PerPersonal, PerGlobalInfoIta> | OneToOneLink<PerPersonal, PerGlobalInfoMex> | OneToOneLink<PerPersonal, PerGlobalInfoNld> | OneToOneLink<PerPersonal, PerGlobalInfoNzl> | OneToOneLink<PerPersonal, PerGlobalInfoSau> | OneToOneLink<PerPersonal, PerGlobalInfoSgp> | OneToOneLink<PerPersonal, PerGlobalInfoUsa> | OneToOneLink<PerPersonal, PerGlobalInfoZaf> | OneToOneLink<PerPersonal, PicklistOption> | OneToOneLink<PerPersonal, PerPerson> | OneToOneLink<PerPersonal, WfRequest>> = [
    PerPersonal.BIRTH_NAME,
    PerPersonal.CREATED_BY,
    PerPersonal.CREATED_DATE_TIME,
    PerPersonal.CREATED_ON,
    PerPersonal.END_DATE,
    PerPersonal.FIRST_NAME,
    PerPersonal.FORMAL_NAME,
    PerPersonal.GENDER,
    PerPersonal.INCLUDE_ALL_RECORDS,
    PerPersonal.LAST_MODIFIED_BY,
    PerPersonal.LAST_MODIFIED_DATE_TIME,
    PerPersonal.LAST_MODIFIED_ON,
    PerPersonal.LAST_NAME,
    PerPersonal.MARITAL_STATUS,
    PerPersonal.MIDDLE_NAME,
    PerPersonal.NATIONALITY,
    PerPersonal.NATIVE_PREFERRED_LANG,
    PerPersonal.OPERATION,
    PerPersonal.PERSON_ID_EXTERNAL,
    PerPersonal.SALUTATION,
    PerPersonal.SECOND_LAST_NAME,
    PerPersonal.SECOND_NATIONALITY,
    PerPersonal.START_DATE,
    PerPersonal.SUFFIX,
    PerPersonal.THIRD_NATIONALITY,
    PerPersonal.LOCAL_NAV_ARE,
    PerPersonal.LOCAL_NAV_AUS,
    PerPersonal.LOCAL_NAV_BRA,
    PerPersonal.LOCAL_NAV_CAN,
    PerPersonal.LOCAL_NAV_CHE,
    PerPersonal.LOCAL_NAV_CHN,
    PerPersonal.LOCAL_NAV_COL,
    PerPersonal.LOCAL_NAV_DEU,
    PerPersonal.LOCAL_NAV_ESP,
    PerPersonal.LOCAL_NAV_FRA,
    PerPersonal.LOCAL_NAV_GBR,
    PerPersonal.LOCAL_NAV_IND,
    PerPersonal.LOCAL_NAV_ITA,
    PerPersonal.LOCAL_NAV_MEX,
    PerPersonal.LOCAL_NAV_NLD,
    PerPersonal.LOCAL_NAV_NZL,
    PerPersonal.LOCAL_NAV_SAU,
    PerPersonal.LOCAL_NAV_SGP,
    PerPersonal.LOCAL_NAV_USA,
    PerPersonal.LOCAL_NAV_ZAF,
    PerPersonal.MARITAL_STATUS_NAV,
    PerPersonal.NATIVE_PREFERRED_LANG_NAV,
    PerPersonal.PERSON_NAV,
    PerPersonal.SALUTATION_NAV,
    PerPersonal.SUFFIX_NAV,
    PerPersonal.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerPersonal> = new AllFields('*', PerPersonal);
  /**
   * All key fields of the PerPersonal entity.
   */
  export const _keyFields: Array<Selectable<PerPersonal>> = [PerPersonal.PERSON_ID_EXTERNAL, PerPersonal.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property PerPersonal.
   */
  export const _keys: { [keys: string]: Selectable<PerPersonal> } = PerPersonal._keyFields.reduce((acc: { [keys: string]: Selectable<PerPersonal> }, field: Selectable<PerPersonal>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
