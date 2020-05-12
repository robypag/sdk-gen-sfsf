/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoPayComponentRequestBuilder } from './FoPayComponentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOPayComponent" of service "SFOData".
 */
export class FoPayComponent extends Entity implements FoPayComponentType {
  /**
   * Technical entity name for FoPayComponent.
   */
  static _entityName = 'FOPayComponent';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoPayComponent.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Base Pay Component Group.
   * @nullable
   */
  basePayComponentGroup?: string;
  /**
   * Can Override.
   * @nullable
   */
  canOverride?: boolean;
  /**
   * companyFlx.
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
   * Display on Self Service.
   * @nullable
   */
  displayOnSelfService?: boolean;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Pay Component ID.
   * Maximum length: 32.
   */
  externalCode!: string;
  /**
   * Frequency.
   * @nullable
   */
  frequencyCode?: string;
  /**
   * Is Earning.
   * @nullable
   */
  isEarning?: boolean;
  /**
   * isEndDatedPayment.
   * @nullable
   */
  isEndDatedPayment?: boolean;
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
   * Maximum Decimal Places.
   * @nullable
   */
  maxFractionDigits?: BigNumber;
  /**
   * Name.
   * Maximum length: 32.
   * @nullable
   */
  name?: string;
  /**
   * Pay Component Type.
   * Maximum length: 32.
   * @nullable
   */
  payComponentType?: string;
  /**
   * Pay Component Value.
   * @nullable
   */
  payComponentValue?: number;
  /**
   * Recurring.
   * @nullable
   */
  recurring?: boolean;
  /**
   * Self Service Description.
   * Maximum length: 32.
   * @nullable
   */
  selfServiceDescription?: string;
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
   * Target.
   * @nullable
   */
  target?: boolean;
  /**
   * Tax Treatment.
   * Maximum length: 32.
   * @nullable
   */
  taxTreatment?: string;
  /**
   * Used for Comp Planning.
   * Maximum length: 32.
   * @nullable
   */
  usedForCompPlanning?: string;
  /**
   * One-to-one navigation property to the [[FoPayComponentGroup]] entity.
   */
  basePayComponentGroupNav!: FoPayComponentGroup;
  /**
   * One-to-many navigation property to the [[FoCompany]] entity.
   */
  companyFlxNav!: FoCompany[];
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  descriptionTranslationNav!: FoTranslation;
  /**
   * One-to-one navigation property to the [[FoFrequency]] entity.
   */
  frequencyCodeNav!: FoFrequency;
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  nameTranslationNav!: FoTranslation;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  taxTreatmentNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `FoPayComponent`.
   * @returns A builder that constructs instances of entity type `FoPayComponent`.
   */
  static builder(): EntityBuilderType<FoPayComponent, FoPayComponentTypeForceMandatory> {
    return Entity.entityBuilder(FoPayComponent);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoPayComponent` entity type.
   * @returns A `FoPayComponent` request builder.
   */
  static requestBuilder(): FoPayComponentRequestBuilder {
    return new FoPayComponentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoPayComponent`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoPayComponent`.
   */
  static customField(fieldName: string): CustomField<FoPayComponent> {
    return Entity.customFieldSelector(fieldName, FoPayComponent);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoPayComponentGroup, FoPayComponentGroupType } from './FoPayComponentGroup';
import { FoCompany, FoCompanyType } from './FoCompany';
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { FoFrequency, FoFrequencyType } from './FoFrequency';
import { PicklistOption, PicklistOptionType } from './PicklistOption';

export interface FoPayComponentType {
  basePayComponentGroup?: string;
  canOverride?: boolean;
  companyFlx?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  currency?: string;
  description?: string;
  displayOnSelfService?: boolean;
  endDate?: Moment;
  externalCode: string;
  frequencyCode?: string;
  isEarning?: boolean;
  isEndDatedPayment?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  maxFractionDigits?: BigNumber;
  name?: string;
  payComponentType?: string;
  payComponentValue?: number;
  recurring?: boolean;
  selfServiceDescription?: string;
  startDate: Moment;
  status?: string;
  target?: boolean;
  taxTreatment?: string;
  usedForCompPlanning?: string;
  basePayComponentGroupNav: FoPayComponentGroupType;
  companyFlxNav: FoCompanyType[];
  descriptionTranslationNav: FoTranslationType;
  frequencyCodeNav: FoFrequencyType;
  nameTranslationNav: FoTranslationType;
  taxTreatmentNav: PicklistOptionType;
}

export interface FoPayComponentTypeForceMandatory {
  basePayComponentGroup: string;
  canOverride: boolean;
  companyFlx: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  currency: string;
  description: string;
  displayOnSelfService: boolean;
  endDate: Moment;
  externalCode: string;
  frequencyCode: string;
  isEarning: boolean;
  isEndDatedPayment: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  maxFractionDigits: BigNumber;
  name: string;
  payComponentType: string;
  payComponentValue: number;
  recurring: boolean;
  selfServiceDescription: string;
  startDate: Moment;
  status: string;
  target: boolean;
  taxTreatment: string;
  usedForCompPlanning: string;
  basePayComponentGroupNav: FoPayComponentGroupType;
  companyFlxNav: FoCompanyType[];
  descriptionTranslationNav: FoTranslationType;
  frequencyCodeNav: FoFrequencyType;
  nameTranslationNav: FoTranslationType;
  taxTreatmentNav: PicklistOptionType;
}

export namespace FoPayComponent {
  /**
   * Static representation of the [[basePayComponentGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_PAY_COMPONENT_GROUP: StringField<FoPayComponent> = new StringField('basePayComponentGroup', FoPayComponent, 'Edm.String');
  /**
   * Static representation of the [[canOverride]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CAN_OVERRIDE: BooleanField<FoPayComponent> = new BooleanField('canOverride', FoPayComponent, 'Edm.Boolean');
  /**
   * Static representation of the [[companyFlx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_FLX: StringField<FoPayComponent> = new StringField('companyFlx', FoPayComponent, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoPayComponent> = new StringField('createdBy', FoPayComponent, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoPayComponent> = new DateField('createdDateTime', FoPayComponent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoPayComponent> = new DateField('createdOn', FoPayComponent, 'Edm.DateTime');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<FoPayComponent> = new StringField('currency', FoPayComponent, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FoPayComponent> = new StringField('description', FoPayComponent, 'Edm.String');
  /**
   * Static representation of the [[displayOnSelfService]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DISPLAY_ON_SELF_SERVICE: BooleanField<FoPayComponent> = new BooleanField('displayOnSelfService', FoPayComponent, 'Edm.Boolean');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoPayComponent> = new DateField('endDate', FoPayComponent, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoPayComponent> = new StringField('externalCode', FoPayComponent, 'Edm.String');
  /**
   * Static representation of the [[frequencyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREQUENCY_CODE: StringField<FoPayComponent> = new StringField('frequencyCode', FoPayComponent, 'Edm.String');
  /**
   * Static representation of the [[isEarning]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_EARNING: BooleanField<FoPayComponent> = new BooleanField('isEarning', FoPayComponent, 'Edm.Boolean');
  /**
   * Static representation of the [[isEndDatedPayment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_END_DATED_PAYMENT: BooleanField<FoPayComponent> = new BooleanField('isEndDatedPayment', FoPayComponent, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoPayComponent> = new StringField('lastModifiedBy', FoPayComponent, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoPayComponent> = new DateField('lastModifiedDateTime', FoPayComponent, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoPayComponent> = new DateField('lastModifiedOn', FoPayComponent, 'Edm.DateTime');
  /**
   * Static representation of the [[maxFractionDigits]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MAX_FRACTION_DIGITS: BigNumberField<FoPayComponent> = new BigNumberField('maxFractionDigits', FoPayComponent, 'Edm.Int64');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FoPayComponent> = new StringField('name', FoPayComponent, 'Edm.String');
  /**
   * Static representation of the [[payComponentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_TYPE: StringField<FoPayComponent> = new StringField('payComponentType', FoPayComponent, 'Edm.String');
  /**
   * Static representation of the [[payComponentValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_VALUE: NumberField<FoPayComponent> = new NumberField('payComponentValue', FoPayComponent, 'Edm.Double');
  /**
   * Static representation of the [[recurring]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RECURRING: BooleanField<FoPayComponent> = new BooleanField('recurring', FoPayComponent, 'Edm.Boolean');
  /**
   * Static representation of the [[selfServiceDescription]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SELF_SERVICE_DESCRIPTION: StringField<FoPayComponent> = new StringField('selfServiceDescription', FoPayComponent, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoPayComponent> = new DateField('startDate', FoPayComponent, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoPayComponent> = new StringField('status', FoPayComponent, 'Edm.String');
  /**
   * Static representation of the [[target]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET: BooleanField<FoPayComponent> = new BooleanField('target', FoPayComponent, 'Edm.Boolean');
  /**
   * Static representation of the [[taxTreatment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_TREATMENT: StringField<FoPayComponent> = new StringField('taxTreatment', FoPayComponent, 'Edm.String');
  /**
   * Static representation of the [[usedForCompPlanning]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USED_FOR_COMP_PLANNING: StringField<FoPayComponent> = new StringField('usedForCompPlanning', FoPayComponent, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[basePayComponentGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BASE_PAY_COMPONENT_GROUP_NAV: OneToOneLink<FoPayComponent, FoPayComponentGroup> = new OneToOneLink('basePayComponentGroupNav', FoPayComponent, FoPayComponentGroup);
  /**
   * Static representation of the one-to-many navigation property [[companyFlxNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_FLX_NAV: Link<FoPayComponent, FoCompany> = new Link('companyFlxNav', FoPayComponent, FoCompany);
  /**
   * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoPayComponent, FoTranslation> = new OneToOneLink('descriptionTranslationNav', FoPayComponent, FoTranslation);
  /**
   * Static representation of the one-to-one navigation property [[frequencyCodeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREQUENCY_CODE_NAV: OneToOneLink<FoPayComponent, FoFrequency> = new OneToOneLink('frequencyCodeNav', FoPayComponent, FoFrequency);
  /**
   * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_NAV: OneToOneLink<FoPayComponent, FoTranslation> = new OneToOneLink('nameTranslationNav', FoPayComponent, FoTranslation);
  /**
   * Static representation of the one-to-one navigation property [[taxTreatmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TAX_TREATMENT_NAV: OneToOneLink<FoPayComponent, PicklistOption> = new OneToOneLink('taxTreatmentNav', FoPayComponent, PicklistOption);
  /**
   * All fields of the FoPayComponent entity.
   */
  export const _allFields: Array<StringField<FoPayComponent> | BooleanField<FoPayComponent> | DateField<FoPayComponent> | BigNumberField<FoPayComponent> | NumberField<FoPayComponent> | OneToOneLink<FoPayComponent, FoPayComponentGroup> | Link<FoPayComponent, FoCompany> | OneToOneLink<FoPayComponent, FoTranslation> | OneToOneLink<FoPayComponent, FoFrequency> | OneToOneLink<FoPayComponent, PicklistOption>> = [
    FoPayComponent.BASE_PAY_COMPONENT_GROUP,
    FoPayComponent.CAN_OVERRIDE,
    FoPayComponent.COMPANY_FLX,
    FoPayComponent.CREATED_BY,
    FoPayComponent.CREATED_DATE_TIME,
    FoPayComponent.CREATED_ON,
    FoPayComponent.CURRENCY,
    FoPayComponent.DESCRIPTION,
    FoPayComponent.DISPLAY_ON_SELF_SERVICE,
    FoPayComponent.END_DATE,
    FoPayComponent.EXTERNAL_CODE,
    FoPayComponent.FREQUENCY_CODE,
    FoPayComponent.IS_EARNING,
    FoPayComponent.IS_END_DATED_PAYMENT,
    FoPayComponent.LAST_MODIFIED_BY,
    FoPayComponent.LAST_MODIFIED_DATE_TIME,
    FoPayComponent.LAST_MODIFIED_ON,
    FoPayComponent.MAX_FRACTION_DIGITS,
    FoPayComponent.NAME,
    FoPayComponent.PAY_COMPONENT_TYPE,
    FoPayComponent.PAY_COMPONENT_VALUE,
    FoPayComponent.RECURRING,
    FoPayComponent.SELF_SERVICE_DESCRIPTION,
    FoPayComponent.START_DATE,
    FoPayComponent.STATUS,
    FoPayComponent.TARGET,
    FoPayComponent.TAX_TREATMENT,
    FoPayComponent.USED_FOR_COMP_PLANNING,
    FoPayComponent.BASE_PAY_COMPONENT_GROUP_NAV,
    FoPayComponent.COMPANY_FLX_NAV,
    FoPayComponent.DESCRIPTION_TRANSLATION_NAV,
    FoPayComponent.FREQUENCY_CODE_NAV,
    FoPayComponent.NAME_TRANSLATION_NAV,
    FoPayComponent.TAX_TREATMENT_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoPayComponent> = new AllFields('*', FoPayComponent);
  /**
   * All key fields of the FoPayComponent entity.
   */
  export const _keyFields: Array<Selectable<FoPayComponent>> = [FoPayComponent.EXTERNAL_CODE, FoPayComponent.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoPayComponent.
   */
  export const _keys: { [keys: string]: Selectable<FoPayComponent> } = FoPayComponent._keyFields.reduce((acc: { [keys: string]: Selectable<FoPayComponent> }, field: Selectable<FoPayComponent>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
