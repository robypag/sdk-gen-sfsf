import { EmployeeTimeValuationResultRequestBuilder } from './EmployeeTimeValuationResultRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeTimeValuationResult" of service "SFOData".
 */
export declare class EmployeeTimeValuationResult extends Entity implements EmployeeTimeValuationResultType {
    /**
     * Technical entity name for EmployeeTimeValuationResult.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeValuationResult.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Employee Time Sheet_External Code.
     * Maximum length: 128.
     */
    employeeTimeSheetExternalCode: string;
    /**
     * Allowance Type.
     * Maximum length: 128.
     * @nullable
     */
    allowanceType?: string;
    /**
     * Approval Status.
     * Maximum length: 255.
     * @nullable
     */
    approvalStatus?: string;
    /**
     * Booking Date.
     * @nullable
     */
    bookingDate?: Moment;
    /**
     * Cost Center.
     * Maximum length: 128.
     * @nullable
     */
    costCenter?: string;
    /**
     * createdBy.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * External Code.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * Hours.
     * @nullable
     */
    hours?: BigNumber;
    /**
     * Hours and Minutes.
     * Maximum length: 255.
     * @nullable
     */
    hoursAndMinutes?: string;
    /**
     * lastModifiedBy.
     * Maximum length: 255.
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
     * Pay Type Name.
     * Maximum length: 255.
     * @nullable
     */
    payTypeExternalName?: string;
    /**
     * Pay Type Code.
     * Maximum length: 255.
     * @nullable
     */
    payTypeName?: string;
    /**
     * Posting Target.
     * Maximum length: 255.
     * @nullable
     */
    postingTarget?: string;
    /**
     * Time Pay Type.
     * Maximum length: 128.
     * @nullable
     */
    timeTypeGroup?: string;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    approvalStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[FoCostCenter]] entity.
     */
    costCenterNav: FoCostCenter[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
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
    postingTargetNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `EmployeeTimeValuationResult`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeValuationResult`.
     */
    static builder(): EntityBuilderType<EmployeeTimeValuationResult, EmployeeTimeValuationResultTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeValuationResult` entity type.
     * @returns A `EmployeeTimeValuationResult` request builder.
     */
    static requestBuilder(): EmployeeTimeValuationResultRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeValuationResult`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeValuationResult`.
     */
    static customField(fieldName: string): CustomField<EmployeeTimeValuationResult>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { User, UserType } from './User';
export interface EmployeeTimeValuationResultType {
    employeeTimeSheetExternalCode: string;
    allowanceType?: string;
    approvalStatus?: string;
    bookingDate?: Moment;
    costCenter?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    hours?: BigNumber;
    hoursAndMinutes?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    payTypeExternalName?: string;
    payTypeName?: string;
    postingTarget?: string;
    timeTypeGroup?: string;
    approvalStatusNav: MdfEnumValueType;
    costCenterNav: FoCostCenterType[];
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    postingTargetNav: MdfEnumValueType;
}
export interface EmployeeTimeValuationResultTypeForceMandatory {
    employeeTimeSheetExternalCode: string;
    allowanceType: string;
    approvalStatus: string;
    bookingDate: Moment;
    costCenter: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    hours: BigNumber;
    hoursAndMinutes: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    payTypeExternalName: string;
    payTypeName: string;
    postingTarget: string;
    timeTypeGroup: string;
    approvalStatusNav: MdfEnumValueType;
    costCenterNav: FoCostCenterType[];
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    postingTargetNav: MdfEnumValueType;
}
export declare namespace EmployeeTimeValuationResult {
    /**
     * Static representation of the [[employeeTimeSheetExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_SHEET_EXTERNAL_CODE: StringField<EmployeeTimeValuationResult>;
    /**
     * Static representation of the [[allowanceType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALLOWANCE_TYPE: StringField<EmployeeTimeValuationResult>;
    /**
     * Static representation of the [[approvalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_STATUS: StringField<EmployeeTimeValuationResult>;
    /**
     * Static representation of the [[bookingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BOOKING_DATE: DateField<EmployeeTimeValuationResult>;
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER: StringField<EmployeeTimeValuationResult>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeTimeValuationResult>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeTimeValuationResult>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<EmployeeTimeValuationResult>;
    /**
     * Static representation of the [[hours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOURS: BigNumberField<EmployeeTimeValuationResult>;
    /**
     * Static representation of the [[hoursAndMinutes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOURS_AND_MINUTES: StringField<EmployeeTimeValuationResult>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeTimeValuationResult>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeValuationResult>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeValuationResult>;
    /**
     * Static representation of the [[payTypeExternalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TYPE_EXTERNAL_NAME: StringField<EmployeeTimeValuationResult>;
    /**
     * Static representation of the [[payTypeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_TYPE_NAME: StringField<EmployeeTimeValuationResult>;
    /**
     * Static representation of the [[postingTarget]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_TARGET: StringField<EmployeeTimeValuationResult>;
    /**
     * Static representation of the [[timeTypeGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_TYPE_GROUP: StringField<EmployeeTimeValuationResult>;
    /**
     * Static representation of the one-to-one navigation property [[approvalStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVAL_STATUS_NAV: OneToOneLink<EmployeeTimeValuationResult, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[costCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER_NAV: Link<EmployeeTimeValuationResult, FoCostCenter>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeeTimeValuationResult, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeTimeValuationResult, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeTimeValuationResult, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[postingTargetNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSTING_TARGET_NAV: OneToOneLink<EmployeeTimeValuationResult, MdfEnumValue>;
    /**
     * All fields of the EmployeeTimeValuationResult entity.
     */
    const _allFields: Array<StringField<EmployeeTimeValuationResult> | DateField<EmployeeTimeValuationResult> | BigNumberField<EmployeeTimeValuationResult> | OneToOneLink<EmployeeTimeValuationResult, MdfEnumValue> | Link<EmployeeTimeValuationResult, FoCostCenter> | OneToOneLink<EmployeeTimeValuationResult, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeTimeValuationResult>;
    /**
     * All key fields of the EmployeeTimeValuationResult entity.
     */
    const _keyFields: Array<Selectable<EmployeeTimeValuationResult>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeValuationResult.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeTimeValuationResult>;
    };
}
//# sourceMappingURL=EmployeeTimeValuationResult.d.ts.map