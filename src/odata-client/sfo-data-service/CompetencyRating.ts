/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompetencyRatingRequestBuilder } from './CompetencyRatingRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "CompetencyRating" of service "SFOData".
 */
export class CompetencyRating extends Entity implements CompetencyRatingType {
  /**
   * Technical entity name for CompetencyRating.
   */
  static _entityName = 'CompetencyRating';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for CompetencyRating.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * formContentId.
   * @nullable
   */
  formContentId?: BigNumber;
  /**
   * formDataId.
   * @nullable
   */
  formDataId?: BigNumber;
  /**
   * guid.
   * Maximum length: 128.
   */
  guid!: string;
  /**
   * id.
   */
  id!: BigNumber;
  /**
   * lastModified.
   * @nullable
   */
  lastModified?: Moment;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * lastModifiedWithTZ.
   * @nullable
   */
  lastModifiedWithTz?: Moment;
  /**
   * module.
   */
  module!: number;
  /**
   * rater.
   * Maximum length: 100.
   * @nullable
   */
  rater?: string;
  /**
   * raterCategory.
   * Maximum length: 256.
   * @nullable
   */
  raterCategory?: string;
  /**
   * rating.
   * @nullable
   */
  rating?: number;
  /**
   * scaleMax.
   * @nullable
   */
  scaleMax?: BigNumber;
  /**
   * scaleMin.
   * @nullable
   */
  scaleMin?: BigNumber;
  /**
   * source.
   */
  source!: number;
  /**
   * status.
   * @nullable
   */
  status?: BigNumber;
  /**
   * type.
   */
  type!: number;
  /**
   * userId.
   * Maximum length: 100.
   */
  userId!: string;
  /**
   * validFrom.
   * @nullable
   */
  validFrom?: Moment;
  /**
   * validTo.
   * @nullable
   */
  validTo?: Moment;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userNav!: User;

  /**
   * Returns an entity builder to construct instances `CompetencyRating`.
   * @returns A builder that constructs instances of entity type `CompetencyRating`.
   */
  static builder(): EntityBuilderType<CompetencyRating, CompetencyRatingTypeForceMandatory> {
    return Entity.entityBuilder(CompetencyRating);
  }

  /**
   * Returns a request builder to construct requests for operations on the `CompetencyRating` entity type.
   * @returns A `CompetencyRating` request builder.
   */
  static requestBuilder(): CompetencyRatingRequestBuilder {
    return new CompetencyRatingRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `CompetencyRating`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `CompetencyRating`.
   */
  static customField(fieldName: string): CustomField<CompetencyRating> {
    return Entity.customFieldSelector(fieldName, CompetencyRating);
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

export interface CompetencyRatingType {
  formContentId?: BigNumber;
  formDataId?: BigNumber;
  guid: string;
  id: BigNumber;
  lastModified?: Moment;
  lastModifiedDateTime?: Moment;
  lastModifiedWithTz?: Moment;
  module: number;
  rater?: string;
  raterCategory?: string;
  rating?: number;
  scaleMax?: BigNumber;
  scaleMin?: BigNumber;
  source: number;
  status?: BigNumber;
  type: number;
  userId: string;
  validFrom?: Moment;
  validTo?: Moment;
  userNav: UserType;
}

export interface CompetencyRatingTypeForceMandatory {
  formContentId: BigNumber;
  formDataId: BigNumber;
  guid: string;
  id: BigNumber;
  lastModified: Moment;
  lastModifiedDateTime: Moment;
  lastModifiedWithTz: Moment;
  module: number;
  rater: string;
  raterCategory: string;
  rating: number;
  scaleMax: BigNumber;
  scaleMin: BigNumber;
  source: number;
  status: BigNumber;
  type: number;
  userId: string;
  validFrom: Moment;
  validTo: Moment;
  userNav: UserType;
}

export namespace CompetencyRating {
  /**
   * Static representation of the [[formContentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_CONTENT_ID: BigNumberField<CompetencyRating> = new BigNumberField('formContentId', CompetencyRating, 'Edm.Int64');
  /**
   * Static representation of the [[formDataId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FORM_DATA_ID: BigNumberField<CompetencyRating> = new BigNumberField('formDataId', CompetencyRating, 'Edm.Int64');
  /**
   * Static representation of the [[guid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GUID: StringField<CompetencyRating> = new StringField('guid', CompetencyRating, 'Edm.String');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: BigNumberField<CompetencyRating> = new BigNumberField('id', CompetencyRating, 'Edm.Int64');
  /**
   * Static representation of the [[lastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED: DateField<CompetencyRating> = new DateField('lastModified', CompetencyRating, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<CompetencyRating> = new DateField('lastModifiedDateTime', CompetencyRating, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_WITH_TZ: DateField<CompetencyRating> = new DateField('lastModifiedWithTZ', CompetencyRating, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[module]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MODULE: NumberField<CompetencyRating> = new NumberField('module', CompetencyRating, 'Edm.Int32');
  /**
   * Static representation of the [[rater]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATER: StringField<CompetencyRating> = new StringField('rater', CompetencyRating, 'Edm.String');
  /**
   * Static representation of the [[raterCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATER_CATEGORY: StringField<CompetencyRating> = new StringField('raterCategory', CompetencyRating, 'Edm.String');
  /**
   * Static representation of the [[rating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RATING: NumberField<CompetencyRating> = new NumberField('rating', CompetencyRating, 'Edm.Double');
  /**
   * Static representation of the [[scaleMax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCALE_MAX: BigNumberField<CompetencyRating> = new BigNumberField('scaleMax', CompetencyRating, 'Edm.Int64');
  /**
   * Static representation of the [[scaleMin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCALE_MIN: BigNumberField<CompetencyRating> = new BigNumberField('scaleMin', CompetencyRating, 'Edm.Int64');
  /**
   * Static representation of the [[source]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SOURCE: NumberField<CompetencyRating> = new NumberField('source', CompetencyRating, 'Edm.Int32');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: BigNumberField<CompetencyRating> = new BigNumberField('status', CompetencyRating, 'Edm.Int64');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: NumberField<CompetencyRating> = new NumberField('type', CompetencyRating, 'Edm.Int32');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<CompetencyRating> = new StringField('userId', CompetencyRating, 'Edm.String');
  /**
   * Static representation of the [[validFrom]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_FROM: DateField<CompetencyRating> = new DateField('validFrom', CompetencyRating, 'Edm.DateTime');
  /**
   * Static representation of the [[validTo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALID_TO: DateField<CompetencyRating> = new DateField('validTo', CompetencyRating, 'Edm.DateTime');
  /**
   * Static representation of the one-to-one navigation property [[userNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAV: OneToOneLink<CompetencyRating, User> = new OneToOneLink('userNav', CompetencyRating, User);
  /**
   * All fields of the CompetencyRating entity.
   */
  export const _allFields: Array<BigNumberField<CompetencyRating> | StringField<CompetencyRating> | DateField<CompetencyRating> | NumberField<CompetencyRating> | OneToOneLink<CompetencyRating, User>> = [
    CompetencyRating.FORM_CONTENT_ID,
    CompetencyRating.FORM_DATA_ID,
    CompetencyRating.GUID,
    CompetencyRating.ID,
    CompetencyRating.LAST_MODIFIED,
    CompetencyRating.LAST_MODIFIED_DATE_TIME,
    CompetencyRating.LAST_MODIFIED_WITH_TZ,
    CompetencyRating.MODULE,
    CompetencyRating.RATER,
    CompetencyRating.RATER_CATEGORY,
    CompetencyRating.RATING,
    CompetencyRating.SCALE_MAX,
    CompetencyRating.SCALE_MIN,
    CompetencyRating.SOURCE,
    CompetencyRating.STATUS,
    CompetencyRating.TYPE,
    CompetencyRating.USER_ID,
    CompetencyRating.VALID_FROM,
    CompetencyRating.VALID_TO,
    CompetencyRating.USER_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<CompetencyRating> = new AllFields('*', CompetencyRating);
  /**
   * All key fields of the CompetencyRating entity.
   */
  export const _keyFields: Array<Selectable<CompetencyRating>> = [CompetencyRating.ID];
  /**
   * Mapping of all key field names to the respective static field property CompetencyRating.
   */
  export const _keys: { [keys: string]: Selectable<CompetencyRating> } = CompetencyRating._keyFields.reduce((acc: { [keys: string]: Selectable<CompetencyRating> }, field: Selectable<CompetencyRating>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
