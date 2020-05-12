/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Background_CompensationRequestBuilder } from './Background_CompensationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Background_Compensation" of service "SFOData".
 */
export class Background_Compensation extends Entity implements Background_CompensationType {
  /**
   * Technical entity name for Background_Compensation.
   */
  static _entityName = 'Background_Compensation';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Background_Compensation.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * backgroundElementId.
   */
  backgroundElementId!: BigNumber;
  /**
   * bgOrderPos.
   */
  bgOrderPos!: BigNumber;
  /**
   * Bonus.
   * @nullable
   */
  bonusTotal?: number;
  /**
   * Compa-ratio.
   * @nullable
   */
  compaRatio?: number;
  /**
   * Salary before review.
   * @nullable
   */
  curSalary?: string;
  /**
   * Salary after review.
   * @nullable
   */
  finSalary?: string;
  /**
   * Job Title.
   * @nullable
   */
  jobTitle?: string;
  /**
   * Last Modified Date.
   */
  lastModifiedDate!: Moment;
  /**
   * Lump Sum.
   * @nullable
   */
  lumpSum?: number;
  /**
   * Merit.
   * @nullable
   */
  merit?: string;
  /**
   * Option.
   * @nullable
   */
  options?: number;
  /**
   * PM Rating.
   * @nullable
   */
  pmRating?: string;
  /**
   * Stock.
   * @nullable
   */
  stock?: number;
  /**
   * Grant Date.
   * @nullable
   */
  stockGrantDate?: Moment;
  /**
   * Review Name.
   * @nullable
   */
  sysCompTemplateName?: string;
  /**
   * Review End.
   * @nullable
   */
  sysReviewEndDate?: Moment;
  /**
   * Review Start.
   * @nullable
   */
  sysReviewStartDate?: Moment;
  /**
   * Total Pay.
   * @nullable
   */
  totalComp?: number;
  /**
   * userId.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;

  /**
   * Returns an entity builder to construct instances `Background_Compensation`.
   * @returns A builder that constructs instances of entity type `Background_Compensation`.
   */
  static builder(): EntityBuilderType<Background_Compensation, Background_CompensationTypeForceMandatory> {
    return Entity.entityBuilder(Background_Compensation);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Background_Compensation` entity type.
   * @returns A `Background_Compensation` request builder.
   */
  static requestBuilder(): Background_CompensationRequestBuilder {
    return new Background_CompensationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Compensation`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Background_Compensation`.
   */
  static customField(fieldName: string): CustomField<Background_Compensation> {
    return Entity.customFieldSelector(fieldName, Background_Compensation);
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

export interface Background_CompensationType {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  bonusTotal?: number;
  compaRatio?: number;
  curSalary?: string;
  finSalary?: string;
  jobTitle?: string;
  lastModifiedDate: Moment;
  lumpSum?: number;
  merit?: string;
  options?: number;
  pmRating?: string;
  stock?: number;
  stockGrantDate?: Moment;
  sysCompTemplateName?: string;
  sysReviewEndDate?: Moment;
  sysReviewStartDate?: Moment;
  totalComp?: number;
  userId: string;
  userIdNav: UserType;
}

export interface Background_CompensationTypeForceMandatory {
  backgroundElementId: BigNumber;
  bgOrderPos: BigNumber;
  bonusTotal: number;
  compaRatio: number;
  curSalary: string;
  finSalary: string;
  jobTitle: string;
  lastModifiedDate: Moment;
  lumpSum: number;
  merit: string;
  options: number;
  pmRating: string;
  stock: number;
  stockGrantDate: Moment;
  sysCompTemplateName: string;
  sysReviewEndDate: Moment;
  sysReviewStartDate: Moment;
  totalComp: number;
  userId: string;
  userIdNav: UserType;
}

export namespace Background_Compensation {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Compensation> = new BigNumberField('backgroundElementId', Background_Compensation, 'Edm.Int64');
  /**
   * Static representation of the [[bgOrderPos]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BG_ORDER_POS: BigNumberField<Background_Compensation> = new BigNumberField('bgOrderPos', Background_Compensation, 'Edm.Int64');
  /**
   * Static representation of the [[bonusTotal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BONUS_TOTAL: NumberField<Background_Compensation> = new NumberField('bonusTotal', Background_Compensation, 'Edm.Double');
  /**
   * Static representation of the [[compaRatio]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPA_RATIO: NumberField<Background_Compensation> = new NumberField('compaRatio', Background_Compensation, 'Edm.Double');
  /**
   * Static representation of the [[curSalary]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUR_SALARY: StringField<Background_Compensation> = new StringField('curSalary', Background_Compensation, 'Edm.String');
  /**
   * Static representation of the [[finSalary]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIN_SALARY: StringField<Background_Compensation> = new StringField('finSalary', Background_Compensation, 'Edm.String');
  /**
   * Static representation of the [[jobTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_TITLE: StringField<Background_Compensation> = new StringField('jobTitle', Background_Compensation, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE: DateField<Background_Compensation> = new DateField('lastModifiedDate', Background_Compensation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lumpSum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LUMP_SUM: NumberField<Background_Compensation> = new NumberField('lumpSum', Background_Compensation, 'Edm.Double');
  /**
   * Static representation of the [[merit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MERIT: StringField<Background_Compensation> = new StringField('merit', Background_Compensation, 'Edm.String');
  /**
   * Static representation of the [[options]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPTIONS: NumberField<Background_Compensation> = new NumberField('options', Background_Compensation, 'Edm.Int32');
  /**
   * Static representation of the [[pmRating]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PM_RATING: StringField<Background_Compensation> = new StringField('pmRating', Background_Compensation, 'Edm.String');
  /**
   * Static representation of the [[stock]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK: NumberField<Background_Compensation> = new NumberField('stock', Background_Compensation, 'Edm.Int32');
  /**
   * Static representation of the [[stockGrantDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STOCK_GRANT_DATE: DateField<Background_Compensation> = new DateField('stockGrantDate', Background_Compensation, 'Edm.DateTime');
  /**
   * Static representation of the [[sysCompTemplateName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SYS_COMP_TEMPLATE_NAME: StringField<Background_Compensation> = new StringField('sysCompTemplateName', Background_Compensation, 'Edm.String');
  /**
   * Static representation of the [[sysReviewEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SYS_REVIEW_END_DATE: DateField<Background_Compensation> = new DateField('sysReviewEndDate', Background_Compensation, 'Edm.DateTime');
  /**
   * Static representation of the [[sysReviewStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SYS_REVIEW_START_DATE: DateField<Background_Compensation> = new DateField('sysReviewStartDate', Background_Compensation, 'Edm.DateTime');
  /**
   * Static representation of the [[totalComp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_COMP: NumberField<Background_Compensation> = new NumberField('totalComp', Background_Compensation, 'Edm.Double');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<Background_Compensation> = new StringField('userId', Background_Compensation, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<Background_Compensation, User> = new OneToOneLink('userIdNav', Background_Compensation, User);
  /**
   * All fields of the Background_Compensation entity.
   */
  export const _allFields: Array<BigNumberField<Background_Compensation> | NumberField<Background_Compensation> | StringField<Background_Compensation> | DateField<Background_Compensation> | OneToOneLink<Background_Compensation, User>> = [
    Background_Compensation.BACKGROUND_ELEMENT_ID,
    Background_Compensation.BG_ORDER_POS,
    Background_Compensation.BONUS_TOTAL,
    Background_Compensation.COMPA_RATIO,
    Background_Compensation.CUR_SALARY,
    Background_Compensation.FIN_SALARY,
    Background_Compensation.JOB_TITLE,
    Background_Compensation.LAST_MODIFIED_DATE,
    Background_Compensation.LUMP_SUM,
    Background_Compensation.MERIT,
    Background_Compensation.OPTIONS,
    Background_Compensation.PM_RATING,
    Background_Compensation.STOCK,
    Background_Compensation.STOCK_GRANT_DATE,
    Background_Compensation.SYS_COMP_TEMPLATE_NAME,
    Background_Compensation.SYS_REVIEW_END_DATE,
    Background_Compensation.SYS_REVIEW_START_DATE,
    Background_Compensation.TOTAL_COMP,
    Background_Compensation.USER_ID,
    Background_Compensation.USER_ID_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Background_Compensation> = new AllFields('*', Background_Compensation);
  /**
   * All key fields of the Background_Compensation entity.
   */
  export const _keyFields: Array<Selectable<Background_Compensation>> = [Background_Compensation.BACKGROUND_ELEMENT_ID, Background_Compensation.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property Background_Compensation.
   */
  export const _keys: { [keys: string]: Selectable<Background_Compensation> } = Background_Compensation._keyFields.reduce((acc: { [keys: string]: Selectable<Background_Compensation> }, field: Selectable<Background_Compensation>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
