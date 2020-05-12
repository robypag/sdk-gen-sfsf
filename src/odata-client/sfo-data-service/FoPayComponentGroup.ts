/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoPayComponentGroupRequestBuilder } from './FoPayComponentGroupRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOPayComponentGroup" of service "SFOData".
 */
export class FoPayComponentGroup extends Entity implements FoPayComponentGroupType {
  /**
   * Technical entity name for FoPayComponentGroup.
   */
  static _entityName = 'FOPayComponentGroup';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoPayComponentGroup.
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
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Pay Component Group ID.
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
   * Pay Component ID.
   * @nullable
   */
  payComponentFlx?: string;
  /**
   * Display on Comp UI.
   * @nullable
   */
  showOnCompUi?: boolean;
  /**
   * sortOrder.
   * @nullable
   */
  sortOrder?: number;
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
   * Use for Comparatio Calculation.
   * @nullable
   */
  useForComparatioCalc?: boolean;
  /**
   * Use for Range Penetration.
   * @nullable
   */
  useForRangePenetration?: boolean;
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  descriptionTranslationNav!: FoTranslation;
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  nameTranslationNav!: FoTranslation;
  /**
   * One-to-many navigation property to the [[FoPayComponent]] entity.
   */
  payComponentFlxNav!: FoPayComponent[];

  /**
   * Returns an entity builder to construct instances `FoPayComponentGroup`.
   * @returns A builder that constructs instances of entity type `FoPayComponentGroup`.
   */
  static builder(): EntityBuilderType<FoPayComponentGroup, FoPayComponentGroupTypeForceMandatory> {
    return Entity.entityBuilder(FoPayComponentGroup);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoPayComponentGroup` entity type.
   * @returns A `FoPayComponentGroup` request builder.
   */
  static requestBuilder(): FoPayComponentGroupRequestBuilder {
    return new FoPayComponentGroupRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoPayComponentGroup`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoPayComponentGroup`.
   */
  static customField(fieldName: string): CustomField<FoPayComponentGroup> {
    return Entity.customFieldSelector(fieldName, FoPayComponentGroup);
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
import { FoPayComponent, FoPayComponentType } from './FoPayComponent';

export interface FoPayComponentGroupType {
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  currency?: string;
  description?: string;
  endDate?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  name?: string;
  payComponentFlx?: string;
  showOnCompUi?: boolean;
  sortOrder?: number;
  startDate: Moment;
  status?: string;
  useForComparatioCalc?: boolean;
  useForRangePenetration?: boolean;
  descriptionTranslationNav: FoTranslationType;
  nameTranslationNav: FoTranslationType;
  payComponentFlxNav: FoPayComponentType[];
}

export interface FoPayComponentGroupTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  currency: string;
  description: string;
  endDate: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  name: string;
  payComponentFlx: string;
  showOnCompUi: boolean;
  sortOrder: number;
  startDate: Moment;
  status: string;
  useForComparatioCalc: boolean;
  useForRangePenetration: boolean;
  descriptionTranslationNav: FoTranslationType;
  nameTranslationNav: FoTranslationType;
  payComponentFlxNav: FoPayComponentType[];
}

export namespace FoPayComponentGroup {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoPayComponentGroup> = new StringField('createdBy', FoPayComponentGroup, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoPayComponentGroup> = new DateField('createdDateTime', FoPayComponentGroup, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoPayComponentGroup> = new DateField('createdOn', FoPayComponentGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<FoPayComponentGroup> = new StringField('currency', FoPayComponentGroup, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FoPayComponentGroup> = new StringField('description', FoPayComponentGroup, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoPayComponentGroup> = new DateField('endDate', FoPayComponentGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoPayComponentGroup> = new StringField('externalCode', FoPayComponentGroup, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoPayComponentGroup> = new StringField('lastModifiedBy', FoPayComponentGroup, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoPayComponentGroup> = new DateField('lastModifiedDateTime', FoPayComponentGroup, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoPayComponentGroup> = new DateField('lastModifiedOn', FoPayComponentGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FoPayComponentGroup> = new StringField('name', FoPayComponentGroup, 'Edm.String');
  /**
   * Static representation of the [[payComponentFlx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_FLX: StringField<FoPayComponentGroup> = new StringField('payComponentFlx', FoPayComponentGroup, 'Edm.String');
  /**
   * Static representation of the [[showOnCompUi]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SHOW_ON_COMP_UI: BooleanField<FoPayComponentGroup> = new BooleanField('showOnCompUI', FoPayComponentGroup, 'Edm.Boolean');
  /**
   * Static representation of the [[sortOrder]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SORT_ORDER: NumberField<FoPayComponentGroup> = new NumberField('sortOrder', FoPayComponentGroup, 'Edm.Double');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoPayComponentGroup> = new DateField('startDate', FoPayComponentGroup, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoPayComponentGroup> = new StringField('status', FoPayComponentGroup, 'Edm.String');
  /**
   * Static representation of the [[useForComparatioCalc]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_FOR_COMPARATIO_CALC: BooleanField<FoPayComponentGroup> = new BooleanField('useForComparatioCalc', FoPayComponentGroup, 'Edm.Boolean');
  /**
   * Static representation of the [[useForRangePenetration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USE_FOR_RANGE_PENETRATION: BooleanField<FoPayComponentGroup> = new BooleanField('useForRangePenetration', FoPayComponentGroup, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoPayComponentGroup, FoTranslation> = new OneToOneLink('descriptionTranslationNav', FoPayComponentGroup, FoTranslation);
  /**
   * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_NAV: OneToOneLink<FoPayComponentGroup, FoTranslation> = new OneToOneLink('nameTranslationNav', FoPayComponentGroup, FoTranslation);
  /**
   * Static representation of the one-to-many navigation property [[payComponentFlxNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_FLX_NAV: Link<FoPayComponentGroup, FoPayComponent> = new Link('payComponentFlxNav', FoPayComponentGroup, FoPayComponent);
  /**
   * All fields of the FoPayComponentGroup entity.
   */
  export const _allFields: Array<StringField<FoPayComponentGroup> | DateField<FoPayComponentGroup> | BooleanField<FoPayComponentGroup> | NumberField<FoPayComponentGroup> | OneToOneLink<FoPayComponentGroup, FoTranslation> | Link<FoPayComponentGroup, FoPayComponent>> = [
    FoPayComponentGroup.CREATED_BY,
    FoPayComponentGroup.CREATED_DATE_TIME,
    FoPayComponentGroup.CREATED_ON,
    FoPayComponentGroup.CURRENCY,
    FoPayComponentGroup.DESCRIPTION,
    FoPayComponentGroup.END_DATE,
    FoPayComponentGroup.EXTERNAL_CODE,
    FoPayComponentGroup.LAST_MODIFIED_BY,
    FoPayComponentGroup.LAST_MODIFIED_DATE_TIME,
    FoPayComponentGroup.LAST_MODIFIED_ON,
    FoPayComponentGroup.NAME,
    FoPayComponentGroup.PAY_COMPONENT_FLX,
    FoPayComponentGroup.SHOW_ON_COMP_UI,
    FoPayComponentGroup.SORT_ORDER,
    FoPayComponentGroup.START_DATE,
    FoPayComponentGroup.STATUS,
    FoPayComponentGroup.USE_FOR_COMPARATIO_CALC,
    FoPayComponentGroup.USE_FOR_RANGE_PENETRATION,
    FoPayComponentGroup.DESCRIPTION_TRANSLATION_NAV,
    FoPayComponentGroup.NAME_TRANSLATION_NAV,
    FoPayComponentGroup.PAY_COMPONENT_FLX_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoPayComponentGroup> = new AllFields('*', FoPayComponentGroup);
  /**
   * All key fields of the FoPayComponentGroup entity.
   */
  export const _keyFields: Array<Selectable<FoPayComponentGroup>> = [FoPayComponentGroup.EXTERNAL_CODE, FoPayComponentGroup.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoPayComponentGroup.
   */
  export const _keys: { [keys: string]: Selectable<FoPayComponentGroup> } = FoPayComponentGroup._keyFields.reduce((acc: { [keys: string]: Selectable<FoPayComponentGroup> }, field: Selectable<FoPayComponentGroup>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
