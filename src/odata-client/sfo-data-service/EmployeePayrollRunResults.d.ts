import { EmployeePayrollRunResultsRequestBuilder } from './EmployeePayrollRunResultsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeePayrollRunResults" of service "SFOData".
 */
export declare class EmployeePayrollRunResults extends Entity implements EmployeePayrollRunResultsType {
    /**
     * Technical entity name for EmployeePayrollRunResults.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeePayrollRunResults.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    externalCode: string;
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
    mdfSystemEffectiveStartDate: Moment;
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
    companyIdNav: FoCompany;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[Currency]] entity.
     */
    currencyNav: Currency;
    /**
     * One-to-many navigation property to the [[EmployeePayrollRunResultsItems]] entity.
     */
    employeePayrollRunResultsItems: EmployeePayrollRunResultsItems[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    payStatementAvailabilityNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[PickListValueV2]] entity.
     */
    payrollRunTypeNav: PickListValueV2;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `EmployeePayrollRunResults`.
     * @returns A builder that constructs instances of entity type `EmployeePayrollRunResults`.
     */
    static builder(): EntityBuilderType<EmployeePayrollRunResults, EmployeePayrollRunResultsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeePayrollRunResults` entity type.
     * @returns A `EmployeePayrollRunResults` request builder.
     */
    static requestBuilder(): EmployeePayrollRunResultsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeePayrollRunResults`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeePayrollRunResults`.
     */
    static customField(fieldName: string): CustomField<EmployeePayrollRunResults>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace EmployeePayrollRunResults {
    /**
     * Static representation of the [[clientId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CLIENT_ID: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[companyId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_ID: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[employmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYMENT_ID: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[endDateWhenPaid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE_WHEN_PAID: DateField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[isVoid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_VOID: BooleanField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[mdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[payDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_DATE: DateField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[payStatementAvailability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_STATEMENT_AVAILABILITY: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[payrollId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_ID: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[payrollProviderId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_PROVIDER_ID: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[payrollProviderPayrollRunType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_PROVIDER_PAYROLL_RUN_TYPE: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[payrollRunType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_RUN_TYPE: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[personId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[sequenceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQUENCE_NUMBER: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[startDateWhenPaid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE_WHEN_PAID: DateField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[systemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SYSTEM_ID: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EmployeePayrollRunResults>;
    /**
     * Static representation of the one-to-one navigation property [[companyIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_ID_NAV: OneToOneLink<EmployeePayrollRunResults, FoCompany>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeePayrollRunResults, User>;
    /**
     * Static representation of the one-to-one navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_NAV: OneToOneLink<EmployeePayrollRunResults, Currency>;
    /**
     * Static representation of the one-to-many navigation property [[employeePayrollRunResultsItems]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PAYROLL_RUN_RESULTS_ITEMS: Link<EmployeePayrollRunResults, EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeePayrollRunResults, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeePayrollRunResults, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[payStatementAvailabilityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_STATEMENT_AVAILABILITY_NAV: OneToOneLink<EmployeePayrollRunResults, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[payrollRunTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_RUN_TYPE_NAV: OneToOneLink<EmployeePayrollRunResults, PickListValueV2>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<EmployeePayrollRunResults, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<EmployeePayrollRunResults, WfRequest>;
    /**
     * All fields of the EmployeePayrollRunResults entity.
     */
    const _allFields: Array<StringField<EmployeePayrollRunResults> | DateField<EmployeePayrollRunResults> | BooleanField<EmployeePayrollRunResults> | OneToOneLink<EmployeePayrollRunResults, FoCompany> | OneToOneLink<EmployeePayrollRunResults, User> | OneToOneLink<EmployeePayrollRunResults, Currency> | Link<EmployeePayrollRunResults, EmployeePayrollRunResultsItems> | OneToOneLink<EmployeePayrollRunResults, MdfEnumValue> | OneToOneLink<EmployeePayrollRunResults, PickListValueV2> | Link<EmployeePayrollRunResults, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeePayrollRunResults>;
    /**
     * All key fields of the EmployeePayrollRunResults entity.
     */
    const _keyFields: Array<Selectable<EmployeePayrollRunResults>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeePayrollRunResults.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeePayrollRunResults>;
    };
}
//# sourceMappingURL=EmployeePayrollRunResults.d.ts.map