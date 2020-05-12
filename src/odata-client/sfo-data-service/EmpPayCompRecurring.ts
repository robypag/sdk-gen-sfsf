/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpPayCompRecurringRequestBuilder } from './EmpPayCompRecurringRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmpPayCompRecurring" of service "SFOData".
 */
export class EmpPayCompRecurring extends Entity implements EmpPayCompRecurringType {
  /**
   * Technical entity name for EmpPayCompRecurring.
   */
  static _entityName = 'EmpPayCompRecurring';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmpPayCompRecurring.
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
   * Maximum length: 32.
   * @nullable
   */
  currencyCode?: string;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Frequency.
   * Maximum length: 30.
   * @nullable
   */
  frequency?: string;
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
   * notes.
   * Maximum length: 4000.
   * @nullable
   */
  notes?: string;
  /**
   * operation.
   * @nullable
   */
  operation?: string;
  /**
   * Pay Component.
   */
  payComponent!: string;
  /**
   * Amount.
   * @nullable
   */
  paycompvalue?: number;
  /**
   * Sequence Number.
   */
  seqNumber!: BigNumber;
  /**
   * Start Date.
   */
  startDate!: Moment;
  /**
   * User ID.
   * Maximum length: 100.
   */
  userId!: string;
  /**
   * One-to-one navigation property to the [[EmpCompensation]] entity.
   */
  compensationNav!: EmpCompensation;
  /**
   * One-to-one navigation property to the [[EmpEmployment]] entity.
   */
  employmentNav!: EmpEmployment;
  /**
   * One-to-one navigation property to the [[FoFrequency]] entity.
   */
  frequencyNav!: FoFrequency;
  /**
   * One-to-one navigation property to the [[FoPayComponent]] entity.
   */
  payComponentNav!: FoPayComponent;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userNav!: User;

  /**
   * Returns an entity builder to construct instances `EmpPayCompRecurring`.
   * @returns A builder that constructs instances of entity type `EmpPayCompRecurring`.
   */
  static builder(): EntityBuilderType<EmpPayCompRecurring, EmpPayCompRecurringTypeForceMandatory> {
    return Entity.entityBuilder(EmpPayCompRecurring);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmpPayCompRecurring` entity type.
   * @returns A `EmpPayCompRecurring` request builder.
   */
  static requestBuilder(): EmpPayCompRecurringRequestBuilder {
    return new EmpPayCompRecurringRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpPayCompRecurring`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmpPayCompRecurring`.
   */
  static customField(fieldName: string): CustomField<EmpPayCompRecurring> {
    return Entity.customFieldSelector(fieldName, EmpPayCompRecurring);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { EmpCompensation, EmpCompensationType } from './EmpCompensation';
import { EmpEmployment, EmpEmploymentType } from './EmpEmployment';
import { FoFrequency, FoFrequencyType } from './FoFrequency';
import { FoPayComponent, FoPayComponentType } from './FoPayComponent';
import { User, UserType } from './User';

export interface EmpPayCompRecurringType {
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  currencyCode?: string;
  endDate?: Moment;
  frequency?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  notes?: string;
  operation?: string;
  payComponent: string;
  paycompvalue?: number;
  seqNumber: BigNumber;
  startDate: Moment;
  userId: string;
  compensationNav: EmpCompensationType;
  employmentNav: EmpEmploymentType;
  frequencyNav: FoFrequencyType;
  payComponentNav: FoPayComponentType;
  userNav: UserType;
}

export interface EmpPayCompRecurringTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  currencyCode: string;
  endDate: Moment;
  frequency: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  notes: string;
  operation: string;
  payComponent: string;
  paycompvalue: number;
  seqNumber: BigNumber;
  startDate: Moment;
  userId: string;
  compensationNav: EmpCompensationType;
  employmentNav: EmpEmploymentType;
  frequencyNav: FoFrequencyType;
  payComponentNav: FoPayComponentType;
  userNav: UserType;
}

export namespace EmpPayCompRecurring {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmpPayCompRecurring> = new StringField('createdBy', EmpPayCompRecurring, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmpPayCompRecurring> = new DateField('createdDateTime', EmpPayCompRecurring, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<EmpPayCompRecurring> = new DateField('createdOn', EmpPayCompRecurring, 'Edm.DateTime');
  /**
   * Static representation of the [[currencyCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_CODE: StringField<EmpPayCompRecurring> = new StringField('currencyCode', EmpPayCompRecurring, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<EmpPayCompRecurring> = new DateField('endDate', EmpPayCompRecurring, 'Edm.DateTime');
  /**
   * Static representation of the [[frequency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREQUENCY: StringField<EmpPayCompRecurring> = new StringField('frequency', EmpPayCompRecurring, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmpPayCompRecurring> = new StringField('lastModifiedBy', EmpPayCompRecurring, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmpPayCompRecurring> = new DateField('lastModifiedDateTime', EmpPayCompRecurring, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<EmpPayCompRecurring> = new DateField('lastModifiedOn', EmpPayCompRecurring, 'Edm.DateTime');
  /**
   * Static representation of the [[notes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTES: StringField<EmpPayCompRecurring> = new StringField('notes', EmpPayCompRecurring, 'Edm.String');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<EmpPayCompRecurring> = new StringField('operation', EmpPayCompRecurring, 'Edm.String');
  /**
   * Static representation of the [[payComponent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT: StringField<EmpPayCompRecurring> = new StringField('payComponent', EmpPayCompRecurring, 'Edm.String');
  /**
   * Static representation of the [[paycompvalue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYCOMPVALUE: NumberField<EmpPayCompRecurring> = new NumberField('paycompvalue', EmpPayCompRecurring, 'Edm.Double');
  /**
   * Static representation of the [[seqNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQ_NUMBER: BigNumberField<EmpPayCompRecurring> = new BigNumberField('seqNumber', EmpPayCompRecurring, 'Edm.Int64');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<EmpPayCompRecurring> = new DateField('startDate', EmpPayCompRecurring, 'Edm.DateTime');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmpPayCompRecurring> = new StringField('userId', EmpPayCompRecurring, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[compensationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPENSATION_NAV: OneToOneLink<EmpPayCompRecurring, EmpCompensation> = new OneToOneLink('compensationNav', EmpPayCompRecurring, EmpCompensation);
  /**
   * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYMENT_NAV: OneToOneLink<EmpPayCompRecurring, EmpEmployment> = new OneToOneLink('employmentNav', EmpPayCompRecurring, EmpEmployment);
  /**
   * Static representation of the one-to-one navigation property [[frequencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FREQUENCY_NAV: OneToOneLink<EmpPayCompRecurring, FoFrequency> = new OneToOneLink('frequencyNav', EmpPayCompRecurring, FoFrequency);
  /**
   * Static representation of the one-to-one navigation property [[payComponentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_COMPONENT_NAV: OneToOneLink<EmpPayCompRecurring, FoPayComponent> = new OneToOneLink('payComponentNav', EmpPayCompRecurring, FoPayComponent);
  /**
   * Static representation of the one-to-one navigation property [[userNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAV: OneToOneLink<EmpPayCompRecurring, User> = new OneToOneLink('userNav', EmpPayCompRecurring, User);
  /**
   * All fields of the EmpPayCompRecurring entity.
   */
  export const _allFields: Array<StringField<EmpPayCompRecurring> | DateField<EmpPayCompRecurring> | NumberField<EmpPayCompRecurring> | BigNumberField<EmpPayCompRecurring> | OneToOneLink<EmpPayCompRecurring, EmpCompensation> | OneToOneLink<EmpPayCompRecurring, EmpEmployment> | OneToOneLink<EmpPayCompRecurring, FoFrequency> | OneToOneLink<EmpPayCompRecurring, FoPayComponent> | OneToOneLink<EmpPayCompRecurring, User>> = [
    EmpPayCompRecurring.CREATED_BY,
    EmpPayCompRecurring.CREATED_DATE_TIME,
    EmpPayCompRecurring.CREATED_ON,
    EmpPayCompRecurring.CURRENCY_CODE,
    EmpPayCompRecurring.END_DATE,
    EmpPayCompRecurring.FREQUENCY,
    EmpPayCompRecurring.LAST_MODIFIED_BY,
    EmpPayCompRecurring.LAST_MODIFIED_DATE_TIME,
    EmpPayCompRecurring.LAST_MODIFIED_ON,
    EmpPayCompRecurring.NOTES,
    EmpPayCompRecurring.OPERATION,
    EmpPayCompRecurring.PAY_COMPONENT,
    EmpPayCompRecurring.PAYCOMPVALUE,
    EmpPayCompRecurring.SEQ_NUMBER,
    EmpPayCompRecurring.START_DATE,
    EmpPayCompRecurring.USER_ID,
    EmpPayCompRecurring.COMPENSATION_NAV,
    EmpPayCompRecurring.EMPLOYMENT_NAV,
    EmpPayCompRecurring.FREQUENCY_NAV,
    EmpPayCompRecurring.PAY_COMPONENT_NAV,
    EmpPayCompRecurring.USER_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmpPayCompRecurring> = new AllFields('*', EmpPayCompRecurring);
  /**
   * All key fields of the EmpPayCompRecurring entity.
   */
  export const _keyFields: Array<Selectable<EmpPayCompRecurring>> = [EmpPayCompRecurring.PAY_COMPONENT, EmpPayCompRecurring.SEQ_NUMBER, EmpPayCompRecurring.START_DATE, EmpPayCompRecurring.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property EmpPayCompRecurring.
   */
  export const _keys: { [keys: string]: Selectable<EmpPayCompRecurring> } = EmpPayCompRecurring._keyFields.reduce((acc: { [keys: string]: Selectable<EmpPayCompRecurring> }, field: Selectable<EmpPayCompRecurring>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
