/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeePayrollRunResultsRequestBuilder } from './EmployeePayrollRunResultsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeePayrollRunResults" of service "SFOData".
 */
export class EmployeePayrollRunResults extends Entity implements EmployeePayrollRunResultsType {
  /**
   * Technical entity name for EmployeePayrollRunResults.
   */
  static _entityName = 'EmployeePayrollRunResults';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeePayrollRunResults.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Client ID.
   * Maximum length: 255.
   * @nullable
   */
  clientId?: string;
  /**
   * Company ID.
   * Maximum length: 128.
   * @nullable
   */
  companyId?: string;
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
   * Currency.
   * Maximum length: 128.
   * @nullable
   */
  currency?: string;
  /**
   * Employment ID.
   * Maximum length: 255.
   * @nullable
   */
  employmentId?: string;
  /**
   * End of Effective Payment Period.
   * @nullable
   */
  endDateWhenPaid?: Moment;
  /**
   * externalCode.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * externalName.
   * Maximum length: 128.
   * @nullable
   */
  externalName?: string;
  /**
   * Void.
   * @nullable
   */
  isVoid?: boolean;
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
   * Effective End Date.
   * @nullable
   */
  mdfSystemEffectiveEndDate?: Moment;
  /**
   * Effective Start Date.
   */
  mdfSystemEffectiveStartDate!: Moment;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Payout.
   * @nullable
   */
  payDate?: Moment;
  /**
   * Pay Statement Available.
   * Maximum length: 128.
   * @nullable
   */
  payStatementAvailability?: string;
  /**
   * Payroll ID.
   * Maximum length: 255.
   * @nullable
   */
  payrollId?: string;
  /**
   * Payroll Provider ID.
   * Maximum length: 255.
   * @nullable
   */
  payrollProviderId?: string;
  /**
   * Source: Payroll Run Type.
   * Maximum length: 255.
   * @nullable
   */
  payrollProviderPayrollRunType?: string;
  /**
   * Payroll Run Type.
   * Maximum length: 128.
   * @nullable
   */
  payrollRunType?: string;
  /**
   * Person ID.
   * Maximum length: 255.
   * @nullable
   */
  personId?: string;
  /**
   * Sequence Number.
   * Maximum length: 255.
   * @nullable
   */
  sequenceNumber?: string;
  /**
   * Start of Effective Payment Period.
   * @nullable
   */
  startDateWhenPaid?: Moment;
  /**
   * System ID.
   * Maximum length: 255.
   * @nullable
   */
  systemId?: string;
  /**
   * User.
   * Maximum length: 100.
   * @nullable
   */
  userId?: string;
  /**
   * One-to-one navigation property to the [[FoCompany]] entity.
   */
  companyIdNav!: FoCompany;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[Currency]] entity.
   */
  currencyNav!: Currency;
  /**
   * One-to-many navigation property to the [[EmployeePayrollRunResultsItems]] entity.
   */
  employeePayrollRunResultsItems!: EmployeePayrollRunResultsItems[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  payStatementAvailabilityNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  payrollRunTypeNav!: PickListValueV2;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userIdNav!: User;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `EmployeePayrollRunResults`.
   * @returns A builder that constructs instances of entity type `EmployeePayrollRunResults`.
   */
  static builder(): EntityBuilderType<EmployeePayrollRunResults, EmployeePayrollRunResultsTypeForceMandatory> {
    return Entity.entityBuilder(EmployeePayrollRunResults);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeePayrollRunResults` entity type.
   * @returns A `EmployeePayrollRunResults` request builder.
   */
  static requestBuilder(): EmployeePayrollRunResultsRequestBuilder {
    return new EmployeePayrollRunResultsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeePayrollRunResults`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeePayrollRunResults`.
   */
  static customField(fieldName: string): CustomField<EmployeePayrollRunResults> {
    return Entity.customFieldSelector(fieldName, EmployeePayrollRunResults);
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
import { User, UserType } from './User';
import { Currency, CurrencyType } from './Currency';
import { EmployeePayrollRunResultsItems, EmployeePayrollRunResultsItemsType } from './EmployeePayrollRunResultsItems';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { WfRequest, WfRequestType } from './WfRequest';

export interface EmployeePayrollRunResultsType {
  clientId?: string;
  companyId?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  currency?: string;
  employmentId?: string;
  endDateWhenPaid?: Moment;
  externalCode: string;
  externalName?: string;
  isVoid?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemEffectiveEndDate?: Moment;
  mdfSystemEffectiveStartDate: Moment;
  mdfSystemRecordStatus?: string;
  payDate?: Moment;
  payStatementAvailability?: string;
  payrollId?: string;
  payrollProviderId?: string;
  payrollProviderPayrollRunType?: string;
  payrollRunType?: string;
  personId?: string;
  sequenceNumber?: string;
  startDateWhenPaid?: Moment;
  systemId?: string;
  userId?: string;
  companyIdNav: FoCompanyType;
  createdByNav: UserType;
  currencyNav: CurrencyType;
  employeePayrollRunResultsItems: EmployeePayrollRunResultsItemsType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  payStatementAvailabilityNav: MdfEnumValueType;
  payrollRunTypeNav: PickListValueV2Type;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export interface EmployeePayrollRunResultsTypeForceMandatory {
  clientId: string;
  companyId: string;
  createdBy: string;
  createdDateTime: Moment;
  currency: string;
  employmentId: string;
  endDateWhenPaid: Moment;
  externalCode: string;
  externalName: string;
  isVoid: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemEffectiveEndDate: Moment;
  mdfSystemEffectiveStartDate: Moment;
  mdfSystemRecordStatus: string;
  payDate: Moment;
  payStatementAvailability: string;
  payrollId: string;
  payrollProviderId: string;
  payrollProviderPayrollRunType: string;
  payrollRunType: string;
  personId: string;
  sequenceNumber: string;
  startDateWhenPaid: Moment;
  systemId: string;
  userId: string;
  companyIdNav: FoCompanyType;
  createdByNav: UserType;
  currencyNav: CurrencyType;
  employeePayrollRunResultsItems: EmployeePayrollRunResultsItemsType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  payStatementAvailabilityNav: MdfEnumValueType;
  payrollRunTypeNav: PickListValueV2Type;
  userIdNav: UserType;
  wfRequestNav: WfRequestType[];
}

export namespace EmployeePayrollRunResults {
  /**
   * Static representation of the [[clientId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CLIENT_ID: StringField<EmployeePayrollRunResults> = new StringField('clientId', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the [[companyId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_ID: StringField<EmployeePayrollRunResults> = new StringField('companyId', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeePayrollRunResults> = new StringField('createdBy', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeePayrollRunResults> = new DateField('createdDateTime', EmployeePayrollRunResults, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<EmployeePayrollRunResults> = new StringField('currency', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the [[employmentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYMENT_ID: StringField<EmployeePayrollRunResults> = new StringField('employmentId', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the [[endDateWhenPaid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE_WHEN_PAID: DateField<EmployeePayrollRunResults> = new DateField('endDateWhenPaid', EmployeePayrollRunResults, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<EmployeePayrollRunResults> = new StringField('externalCode', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the [[externalName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME: StringField<EmployeePayrollRunResults> = new StringField('externalName', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the [[isVoid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_VOID: BooleanField<EmployeePayrollRunResults> = new BooleanField('isVoid', EmployeePayrollRunResults, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeePayrollRunResults> = new StringField('lastModifiedBy', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeePayrollRunResults> = new DateField('lastModifiedDateTime', EmployeePayrollRunResults, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<EmployeePayrollRunResults> = new DateField('mdfSystemEffectiveEndDate', EmployeePayrollRunResults, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<EmployeePayrollRunResults> = new DateField('mdfSystemEffectiveStartDate', EmployeePayrollRunResults, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeePayrollRunResults> = new StringField('mdfSystemRecordStatus', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the [[payDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_DATE: DateField<EmployeePayrollRunResults> = new DateField('payDate', EmployeePayrollRunResults, 'Edm.DateTime');
  /**
   * Static representation of the [[payStatementAvailability]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_STATEMENT_AVAILABILITY: StringField<EmployeePayrollRunResults> = new StringField('payStatementAvailability', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the [[payrollId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_ID: StringField<EmployeePayrollRunResults> = new StringField('payrollId', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the [[payrollProviderId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_PROVIDER_ID: StringField<EmployeePayrollRunResults> = new StringField('payrollProviderId', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the [[payrollProviderPayrollRunType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_PROVIDER_PAYROLL_RUN_TYPE: StringField<EmployeePayrollRunResults> = new StringField('payrollProviderPayrollRunType', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the [[payrollRunType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_RUN_TYPE: StringField<EmployeePayrollRunResults> = new StringField('payrollRunType', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the [[personId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID: StringField<EmployeePayrollRunResults> = new StringField('personId', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the [[sequenceNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQUENCE_NUMBER: StringField<EmployeePayrollRunResults> = new StringField('sequenceNumber', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the [[startDateWhenPaid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE_WHEN_PAID: DateField<EmployeePayrollRunResults> = new DateField('startDateWhenPaid', EmployeePayrollRunResults, 'Edm.DateTime');
  /**
   * Static representation of the [[systemId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SYSTEM_ID: StringField<EmployeePayrollRunResults> = new StringField('systemId', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmployeePayrollRunResults> = new StringField('userId', EmployeePayrollRunResults, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[companyIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_ID_NAV: OneToOneLink<EmployeePayrollRunResults, FoCompany> = new OneToOneLink('companyIdNav', EmployeePayrollRunResults, FoCompany);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EmployeePayrollRunResults, User> = new OneToOneLink('createdByNav', EmployeePayrollRunResults, User);
  /**
   * Static representation of the one-to-one navigation property [[currencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY_NAV: OneToOneLink<EmployeePayrollRunResults, Currency> = new OneToOneLink('currencyNav', EmployeePayrollRunResults, Currency);
  /**
   * Static representation of the one-to-many navigation property [[employeePayrollRunResultsItems]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_PAYROLL_RUN_RESULTS_ITEMS: Link<EmployeePayrollRunResults, EmployeePayrollRunResultsItems> = new Link('employeePayrollRunResultsItems', EmployeePayrollRunResults, EmployeePayrollRunResultsItems);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeePayrollRunResults, User> = new OneToOneLink('lastModifiedByNav', EmployeePayrollRunResults, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeePayrollRunResults, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EmployeePayrollRunResults, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[payStatementAvailabilityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_STATEMENT_AVAILABILITY_NAV: OneToOneLink<EmployeePayrollRunResults, MdfEnumValue> = new OneToOneLink('payStatementAvailabilityNav', EmployeePayrollRunResults, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[payrollRunTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAYROLL_RUN_TYPE_NAV: OneToOneLink<EmployeePayrollRunResults, PickListValueV2> = new OneToOneLink('payrollRunTypeNav', EmployeePayrollRunResults, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_NAV: OneToOneLink<EmployeePayrollRunResults, User> = new OneToOneLink('userIdNav', EmployeePayrollRunResults, User);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<EmployeePayrollRunResults, WfRequest> = new Link('wfRequestNav', EmployeePayrollRunResults, WfRequest);
  /**
   * All fields of the EmployeePayrollRunResults entity.
   */
  export const _allFields: Array<StringField<EmployeePayrollRunResults> | DateField<EmployeePayrollRunResults> | BooleanField<EmployeePayrollRunResults> | OneToOneLink<EmployeePayrollRunResults, FoCompany> | OneToOneLink<EmployeePayrollRunResults, User> | OneToOneLink<EmployeePayrollRunResults, Currency> | Link<EmployeePayrollRunResults, EmployeePayrollRunResultsItems> | OneToOneLink<EmployeePayrollRunResults, MdfEnumValue> | OneToOneLink<EmployeePayrollRunResults, PickListValueV2> | Link<EmployeePayrollRunResults, WfRequest>> = [
    EmployeePayrollRunResults.CLIENT_ID,
    EmployeePayrollRunResults.COMPANY_ID,
    EmployeePayrollRunResults.CREATED_BY,
    EmployeePayrollRunResults.CREATED_DATE_TIME,
    EmployeePayrollRunResults.CURRENCY,
    EmployeePayrollRunResults.EMPLOYMENT_ID,
    EmployeePayrollRunResults.END_DATE_WHEN_PAID,
    EmployeePayrollRunResults.EXTERNAL_CODE,
    EmployeePayrollRunResults.EXTERNAL_NAME,
    EmployeePayrollRunResults.IS_VOID,
    EmployeePayrollRunResults.LAST_MODIFIED_BY,
    EmployeePayrollRunResults.LAST_MODIFIED_DATE_TIME,
    EmployeePayrollRunResults.MDF_SYSTEM_EFFECTIVE_END_DATE,
    EmployeePayrollRunResults.MDF_SYSTEM_EFFECTIVE_START_DATE,
    EmployeePayrollRunResults.MDF_SYSTEM_RECORD_STATUS,
    EmployeePayrollRunResults.PAY_DATE,
    EmployeePayrollRunResults.PAY_STATEMENT_AVAILABILITY,
    EmployeePayrollRunResults.PAYROLL_ID,
    EmployeePayrollRunResults.PAYROLL_PROVIDER_ID,
    EmployeePayrollRunResults.PAYROLL_PROVIDER_PAYROLL_RUN_TYPE,
    EmployeePayrollRunResults.PAYROLL_RUN_TYPE,
    EmployeePayrollRunResults.PERSON_ID,
    EmployeePayrollRunResults.SEQUENCE_NUMBER,
    EmployeePayrollRunResults.START_DATE_WHEN_PAID,
    EmployeePayrollRunResults.SYSTEM_ID,
    EmployeePayrollRunResults.USER_ID,
    EmployeePayrollRunResults.COMPANY_ID_NAV,
    EmployeePayrollRunResults.CREATED_BY_NAV,
    EmployeePayrollRunResults.CURRENCY_NAV,
    EmployeePayrollRunResults.EMPLOYEE_PAYROLL_RUN_RESULTS_ITEMS,
    EmployeePayrollRunResults.LAST_MODIFIED_BY_NAV,
    EmployeePayrollRunResults.MDF_SYSTEM_RECORD_STATUS_NAV,
    EmployeePayrollRunResults.PAY_STATEMENT_AVAILABILITY_NAV,
    EmployeePayrollRunResults.PAYROLL_RUN_TYPE_NAV,
    EmployeePayrollRunResults.USER_ID_NAV,
    EmployeePayrollRunResults.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeePayrollRunResults> = new AllFields('*', EmployeePayrollRunResults);
  /**
   * All key fields of the EmployeePayrollRunResults entity.
   */
  export const _keyFields: Array<Selectable<EmployeePayrollRunResults>> = [EmployeePayrollRunResults.EXTERNAL_CODE, EmployeePayrollRunResults.MDF_SYSTEM_EFFECTIVE_START_DATE];
  /**
   * Mapping of all key field names to the respective static field property EmployeePayrollRunResults.
   */
  export const _keys: { [keys: string]: Selectable<EmployeePayrollRunResults> } = EmployeePayrollRunResults._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeePayrollRunResults> }, field: Selectable<EmployeePayrollRunResults>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}
