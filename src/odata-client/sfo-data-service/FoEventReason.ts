/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoEventReasonRequestBuilder } from './FoEventReasonRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOEventReason" of service "SFOData".
 */
export class FoEventReason extends Entity implements FoEventReasonType {
  /**
   * Technical entity name for FoEventReason.
   */
  static _entityName = 'FOEventReason';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoEventReason.
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
   * Employee Status.
   * Maximum length: 45.
   * @nullable
   */
  emplStatus?: string;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Event.
   * Maximum length: 45.
   * @nullable
   */
  event?: string;
  /**
   * Event ID.
   * Maximum length: 32.
   */
  externalCode!: string;
  /**
   * Follow-Up Activity in Position.
   * @nullable
   */
  implicitPositionAction?: BigNumber;
  /**
   * Display in Internal Job History Portlet.
   * @nullable
   */
  includeInWorkExperience?: boolean;
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
   * Event Name.
   * Maximum length: 32.
   * @nullable
   */
  name?: string;
  /**
   * Payroll Event.
   * Maximum length: 4.
   * @nullable
   */
  payrollEvent?: string;
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
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  emplStatusNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  eventNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  implicitPositionActionNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  nameTranslationNav!: FoTranslation;

  /**
   * Returns an entity builder to construct instances `FoEventReason`.
   * @returns A builder that constructs instances of entity type `FoEventReason`.
   */
  static builder(): EntityBuilderType<FoEventReason, FoEventReasonTypeForceMandatory> {
    return Entity.entityBuilder(FoEventReason);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoEventReason` entity type.
   * @returns A `FoEventReason` request builder.
   */
  static requestBuilder(): FoEventReasonRequestBuilder {
    return new FoEventReasonRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoEventReason`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoEventReason`.
   */
  static customField(fieldName: string): CustomField<FoEventReason> {
    return Entity.customFieldSelector(fieldName, FoEventReason);
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
import { PicklistOption, PicklistOptionType } from './PicklistOption';

export interface FoEventReasonType {
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  description?: string;
  emplStatus?: string;
  endDate?: Moment;
  event?: string;
  externalCode: string;
  implicitPositionAction?: BigNumber;
  includeInWorkExperience?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  name?: string;
  payrollEvent?: string;
  startDate: Moment;
  status?: string;
  descriptionTranslationNav: FoTranslationType;
  emplStatusNav: PicklistOptionType;
  eventNav: PicklistOptionType;
  implicitPositionActionNav: PicklistOptionType;
  nameTranslationNav: FoTranslationType;
}

export interface FoEventReasonTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  description: string;
  emplStatus: string;
  endDate: Moment;
  event: string;
  externalCode: string;
  implicitPositionAction: BigNumber;
  includeInWorkExperience: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  name: string;
  payrollEvent: string;
  startDate: Moment;
  status: string;
  descriptionTranslationNav: FoTranslationType;
  emplStatusNav: PicklistOptionType;
  eventNav: PicklistOptionType;
  implicitPositionActionNav: PicklistOptionType;
  nameTranslationNav: FoTranslationType;
}

export namespace FoEventReason {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoEventReason> = new StringField('createdBy', FoEventReason, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoEventReason> = new DateField('createdDateTime', FoEventReason, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoEventReason> = new DateField('createdOn', FoEventReason, 'Edm.DateTime');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FoEventReason> = new StringField('description', FoEventReason, 'Edm.String');
  /**
   * Static representation of the [[emplStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPL_STATUS: StringField<FoEventReason> = new StringField('emplStatus', FoEventReason, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoEventReason> = new DateField('endDate', FoEventReason, 'Edm.DateTime');
  /**
   * Static representation of the [[event]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EVENT: StringField<FoEventReason> = new StringField('event', FoEventReason, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoEventReason> = new StringField('externalCode', FoEventReason, 'Edm.String');
  /**
   * Static representation of the [[implicitPositionAction]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMPLICIT_POSITION_ACTION: BigNumberField<FoEventReason> = new BigNumberField('implicitPositionAction', FoEventReason, 'Edm.Int64');
  /**
   * Static representation of the [[includeInWorkExperience]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_IN_WORK_EXPERIENCE: BooleanField<FoEventReason> = new BooleanField('includeInWorkExperience', FoEventReason, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoEventReason> = new StringField('lastModifiedBy', FoEventReason, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoEventReason> = new DateField('lastModifiedDateTime', FoEventReason, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoEventReason> = new DateField('lastModifiedOn', FoEventReason, 'Edm.DateTime');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FoEventReason> = new StringField('name', FoEventReason, 'Edm.String');
  /**
   * Static representation of the [[payrollEvent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_EVENT: StringField<FoEventReason> = new StringField('payrollEvent', FoEventReason, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoEventReason> = new DateField('startDate', FoEventReason, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoEventReason> = new StringField('status', FoEventReason, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoEventReason, FoTranslation> = new OneToOneLink('descriptionTranslationNav', FoEventReason, FoTranslation);
  /**
   * Static representation of the one-to-one navigation property [[emplStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPL_STATUS_NAV: OneToOneLink<FoEventReason, PicklistOption> = new OneToOneLink('emplStatusNav', FoEventReason, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[eventNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EVENT_NAV: OneToOneLink<FoEventReason, PicklistOption> = new OneToOneLink('eventNav', FoEventReason, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[implicitPositionActionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMPLICIT_POSITION_ACTION_NAV: OneToOneLink<FoEventReason, PicklistOption> = new OneToOneLink('implicitPositionActionNav', FoEventReason, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_NAV: OneToOneLink<FoEventReason, FoTranslation> = new OneToOneLink('nameTranslationNav', FoEventReason, FoTranslation);
  /**
   * All fields of the FoEventReason entity.
   */
  export const _allFields: Array<StringField<FoEventReason> | DateField<FoEventReason> | BigNumberField<FoEventReason> | BooleanField<FoEventReason> | OneToOneLink<FoEventReason, FoTranslation> | OneToOneLink<FoEventReason, PicklistOption>> = [
    FoEventReason.CREATED_BY,
    FoEventReason.CREATED_DATE_TIME,
    FoEventReason.CREATED_ON,
    FoEventReason.DESCRIPTION,
    FoEventReason.EMPL_STATUS,
    FoEventReason.END_DATE,
    FoEventReason.EVENT,
    FoEventReason.EXTERNAL_CODE,
    FoEventReason.IMPLICIT_POSITION_ACTION,
    FoEventReason.INCLUDE_IN_WORK_EXPERIENCE,
    FoEventReason.LAST_MODIFIED_BY,
    FoEventReason.LAST_MODIFIED_DATE_TIME,
    FoEventReason.LAST_MODIFIED_ON,
    FoEventReason.NAME,
    FoEventReason.PAYROLL_EVENT,
    FoEventReason.START_DATE,
    FoEventReason.STATUS,
    FoEventReason.DESCRIPTION_TRANSLATION_NAV,
    FoEventReason.EMPL_STATUS_NAV,
    FoEventReason.EVENT_NAV,
    FoEventReason.IMPLICIT_POSITION_ACTION_NAV,
    FoEventReason.NAME_TRANSLATION_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoEventReason> = new AllFields('*', FoEventReason);
  /**
   * All key fields of the FoEventReason entity.
   */
  export const _keyFields: Array<Selectable<FoEventReason>> = [FoEventReason.EXTERNAL_CODE, FoEventReason.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoEventReason.
   */
  export const _keys: { [keys: string]: Selectable<FoEventReason> } = FoEventReason._keyFields.reduce((acc: { [keys: string]: Selectable<FoEventReason> }, field: Selectable<FoEventReason>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
