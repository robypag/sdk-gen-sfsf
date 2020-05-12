import { EmployeeTimeSheetEntryRequestBuilder } from './EmployeeTimeSheetEntryRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeTimeSheetEntry" of service "SFOData".
 */
export declare class EmployeeTimeSheetEntry extends Entity implements EmployeeTimeSheetEntryType {
    /**
     * Technical entity name for EmployeeTimeSheetEntry.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeSheetEntry.
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
     * Employee Time.
     * Maximum length: 128.
     * @nullable
     */
    employeeTime?: string;
    /**
     * End Time.
     * @nullable
     */
    endTime?: Time;
    /**
     * External Code.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * externalTimeCode.
     * Maximum length: 255.
     * @nullable
     */
    externalTimeCode?: string;
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
     * Number Of Hours.
     * @nullable
     */
    quantityInHours?: BigNumber;
    /**
     * Hours and Minutes.
     * Maximum length: 255.
     * @nullable
     */
    quantityInHoursAndMinutes?: string;
    /**
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * Start Time.
     * @nullable
     */
    startTime?: Time;
    /**
     * Time Type.
     * Maximum length: 255.
     * @nullable
     */
    timeTypeName?: string;
    /**
     * One-to-many navigation property to the [[FoCostCenter]] entity.
     */
    costCenterNav: FoCostCenter[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[EmployeeTime]] entity.
     */
    employeeTimeNav: EmployeeTime;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `EmployeeTimeSheetEntry`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeSheetEntry`.
     */
    static builder(): EntityBuilderType<EmployeeTimeSheetEntry, EmployeeTimeSheetEntryTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeSheetEntry` entity type.
     * @returns A `EmployeeTimeSheetEntry` request builder.
     */
    static requestBuilder(): EmployeeTimeSheetEntryRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeSheetEntry`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeSheetEntry`.
     */
    static customField(fieldName: string): CustomField<EmployeeTimeSheetEntry>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { User, UserType } from './User';
import { EmployeeTime, EmployeeTimeType } from './EmployeeTime';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface EmployeeTimeSheetEntryType {
    employeeTimeSheetExternalCode: string;
    costCenter?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    employeeTime?: string;
    endTime?: Time;
    externalCode: string;
    externalTimeCode?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    quantityInHours?: BigNumber;
    quantityInHoursAndMinutes?: string;
    startDate?: Moment;
    startTime?: Time;
    timeTypeName?: string;
    costCenterNav: FoCostCenterType[];
    createdByNav: UserType;
    employeeTimeNav: EmployeeTimeType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface EmployeeTimeSheetEntryTypeForceMandatory {
    employeeTimeSheetExternalCode: string;
    costCenter: string;
    createdBy: string;
    createdDateTime: Moment;
    employeeTime: string;
    endTime: Time;
    externalCode: string;
    externalTimeCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    quantityInHours: BigNumber;
    quantityInHoursAndMinutes: string;
    startDate: Moment;
    startTime: Time;
    timeTypeName: string;
    costCenterNav: FoCostCenterType[];
    createdByNav: UserType;
    employeeTimeNav: EmployeeTimeType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace EmployeeTimeSheetEntry {
    /**
     * Static representation of the [[employeeTimeSheetExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_SHEET_EXTERNAL_CODE: StringField<EmployeeTimeSheetEntry>;
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER: StringField<EmployeeTimeSheetEntry>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeTimeSheetEntry>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeTimeSheetEntry>;
    /**
     * Static representation of the [[employeeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME: StringField<EmployeeTimeSheetEntry>;
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_TIME: TimeField<EmployeeTimeSheetEntry>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<EmployeeTimeSheetEntry>;
    /**
     * Static representation of the [[externalTimeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_TIME_CODE: StringField<EmployeeTimeSheetEntry>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeTimeSheetEntry>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeSheetEntry>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeSheetEntry>;
    /**
     * Static representation of the [[quantityInHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_IN_HOURS: BigNumberField<EmployeeTimeSheetEntry>;
    /**
     * Static representation of the [[quantityInHoursAndMinutes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_IN_HOURS_AND_MINUTES: StringField<EmployeeTimeSheetEntry>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<EmployeeTimeSheetEntry>;
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_TIME: TimeField<EmployeeTimeSheetEntry>;
    /**
     * Static representation of the [[timeTypeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_TYPE_NAME: StringField<EmployeeTimeSheetEntry>;
    /**
     * Static representation of the one-to-many navigation property [[costCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER_NAV: Link<EmployeeTimeSheetEntry, FoCostCenter>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeeTimeSheetEntry, User>;
    /**
     * Static representation of the one-to-one navigation property [[employeeTimeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_NAV: OneToOneLink<EmployeeTimeSheetEntry, EmployeeTime>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeTimeSheetEntry, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeTimeSheetEntry, MdfEnumValue>;
    /**
     * All fields of the EmployeeTimeSheetEntry entity.
     */
    const _allFields: Array<StringField<EmployeeTimeSheetEntry> | DateField<EmployeeTimeSheetEntry> | TimeField<EmployeeTimeSheetEntry> | BigNumberField<EmployeeTimeSheetEntry> | Link<EmployeeTimeSheetEntry, FoCostCenter> | OneToOneLink<EmployeeTimeSheetEntry, User> | OneToOneLink<EmployeeTimeSheetEntry, EmployeeTime> | OneToOneLink<EmployeeTimeSheetEntry, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeTimeSheetEntry>;
    /**
     * All key fields of the EmployeeTimeSheetEntry entity.
     */
    const _keyFields: Array<Selectable<EmployeeTimeSheetEntry>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeSheetEntry.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeTimeSheetEntry>;
    };
}
//# sourceMappingURL=EmployeeTimeSheetEntry.d.ts.map