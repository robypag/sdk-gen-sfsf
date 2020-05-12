import { EmployeePayrollRunResultsItemsRequestBuilder } from './EmployeePayrollRunResultsItemsRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeePayrollRunResultsItems" of service "SFOData".
 */
export declare class EmployeePayrollRunResultsItems extends Entity implements EmployeePayrollRunResultsItemsType {
    /**
     * Technical entity name for EmployeePayrollRunResultsItems.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeePayrollRunResultsItems.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Employee Payroll Run Results_externalCode.
     * Maximum length: 128.
     */
    employeePayrollRunResultsExternalCode: string;
    /**
     * Employee Payroll Run Results_Effective Start Date.
     */
    employeePayrollRunResultsMdfSystemEffectiveStartDate: Moment;
    /**
     * Amount.
     * @nullable
     */
    amount?: BigNumber;
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
     * End of Payroll Period.
     * @nullable
     */
    endDateWhenEarned?: Moment;
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
     * Grouping Reason.
     * Maximum length: 128.
     * @nullable
     */
    groupingReason?: string;
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
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Source: Grouping Reason.
     * Maximum length: 255.
     * @nullable
     */
    payrollProviderGroupingReason?: string;
    /**
     * Grouping Value.
     * Maximum length: 255.
     * @nullable
     */
    payrollProviderGroupingValue?: string;
    /**
     * Source: Unit of Measurement.
     * Maximum length: 255.
     * @nullable
     */
    payrollProviderUnitOfMeasurement?: string;
    /**
     * Source: Wage Type.
     * Maximum length: 255.
     * @nullable
     */
    payrollProviderWageType?: string;
    /**
     * Quantity.
     * @nullable
     */
    quantity?: BigNumber;
    /**
     * Start of Payroll Period.
     * @nullable
     */
    startDateWhenEarned?: Moment;
    /**
     * Unit of Measurement.
     * Maximum length: 128.
     * @nullable
     */
    unitOfMeasurement?: string;
    /**
     * Wage Type.
     * Maximum length: 128.
     * @nullable
     */
    wageType?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    groupingReasonNav: PickListValueV2[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    wageTypeNav: PickListValueV2[];
    /**
     * Returns an entity builder to construct instances `EmployeePayrollRunResultsItems`.
     * @returns A builder that constructs instances of entity type `EmployeePayrollRunResultsItems`.
     */
    static builder(): EntityBuilderType<EmployeePayrollRunResultsItems, EmployeePayrollRunResultsItemsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeePayrollRunResultsItems` entity type.
     * @returns A `EmployeePayrollRunResultsItems` request builder.
     */
    static requestBuilder(): EmployeePayrollRunResultsItemsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeePayrollRunResultsItems`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeePayrollRunResultsItems`.
     */
    static customField(fieldName: string): CustomField<EmployeePayrollRunResultsItems>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface EmployeePayrollRunResultsItemsType {
    employeePayrollRunResultsExternalCode: string;
    employeePayrollRunResultsMdfSystemEffectiveStartDate: Moment;
    amount?: BigNumber;
    createdBy?: string;
    createdDateTime?: Moment;
    endDateWhenEarned?: Moment;
    externalCode: string;
    externalName?: string;
    groupingReason?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    payrollProviderGroupingReason?: string;
    payrollProviderGroupingValue?: string;
    payrollProviderUnitOfMeasurement?: string;
    payrollProviderWageType?: string;
    quantity?: BigNumber;
    startDateWhenEarned?: Moment;
    unitOfMeasurement?: string;
    wageType?: string;
    createdByNav: UserType;
    groupingReasonNav: PickListValueV2Type[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wageTypeNav: PickListValueV2Type[];
}
export interface EmployeePayrollRunResultsItemsTypeForceMandatory {
    employeePayrollRunResultsExternalCode: string;
    employeePayrollRunResultsMdfSystemEffectiveStartDate: Moment;
    amount: BigNumber;
    createdBy: string;
    createdDateTime: Moment;
    endDateWhenEarned: Moment;
    externalCode: string;
    externalName: string;
    groupingReason: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    payrollProviderGroupingReason: string;
    payrollProviderGroupingValue: string;
    payrollProviderUnitOfMeasurement: string;
    payrollProviderWageType: string;
    quantity: BigNumber;
    startDateWhenEarned: Moment;
    unitOfMeasurement: string;
    wageType: string;
    createdByNav: UserType;
    groupingReasonNav: PickListValueV2Type[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wageTypeNav: PickListValueV2Type[];
}
export declare namespace EmployeePayrollRunResultsItems {
    /**
     * Static representation of the [[employeePayrollRunResultsExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PAYROLL_RUN_RESULTS_EXTERNAL_CODE: StringField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[employeePayrollRunResultsMdfSystemEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_PAYROLL_RUN_RESULTS_MDF_SYSTEM_EFFECTIVE_START_DATE: DateField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[amount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AMOUNT: BigNumberField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[endDateWhenEarned]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE_WHEN_EARNED: DateField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME: StringField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[groupingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUPING_REASON: StringField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[payrollProviderGroupingReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_PROVIDER_GROUPING_REASON: StringField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[payrollProviderGroupingValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_PROVIDER_GROUPING_VALUE: StringField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[payrollProviderUnitOfMeasurement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_PROVIDER_UNIT_OF_MEASUREMENT: StringField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[payrollProviderWageType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_PROVIDER_WAGE_TYPE: StringField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[quantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY: BigNumberField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[startDateWhenEarned]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE_WHEN_EARNED: DateField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[unitOfMeasurement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const UNIT_OF_MEASUREMENT: StringField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the [[wageType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAGE_TYPE: StringField<EmployeePayrollRunResultsItems>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeePayrollRunResultsItems, User>;
    /**
     * Static representation of the one-to-many navigation property [[groupingReasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUPING_REASON_NAV: Link<EmployeePayrollRunResultsItems, PickListValueV2>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeePayrollRunResultsItems, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeePayrollRunResultsItems, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wageTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WAGE_TYPE_NAV: Link<EmployeePayrollRunResultsItems, PickListValueV2>;
    /**
     * All fields of the EmployeePayrollRunResultsItems entity.
     */
    const _allFields: Array<StringField<EmployeePayrollRunResultsItems> | DateField<EmployeePayrollRunResultsItems> | BigNumberField<EmployeePayrollRunResultsItems> | OneToOneLink<EmployeePayrollRunResultsItems, User> | Link<EmployeePayrollRunResultsItems, PickListValueV2> | OneToOneLink<EmployeePayrollRunResultsItems, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeePayrollRunResultsItems>;
    /**
     * All key fields of the EmployeePayrollRunResultsItems entity.
     */
    const _keyFields: Array<Selectable<EmployeePayrollRunResultsItems>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeePayrollRunResultsItems.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeePayrollRunResultsItems>;
    };
}
//# sourceMappingURL=EmployeePayrollRunResultsItems.d.ts.map