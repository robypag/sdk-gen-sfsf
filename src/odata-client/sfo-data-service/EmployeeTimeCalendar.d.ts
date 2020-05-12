import { EmployeeTimeCalendarRequestBuilder } from './EmployeeTimeCalendarRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeTimeCalendar" of service "SFOData".
 */
export declare class EmployeeTimeCalendar extends Entity implements EmployeeTimeCalendarType {
    /**
     * Technical entity name for EmployeeTimeCalendar.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeCalendar.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Employee Time_External Code.
     * Maximum length: 128.
     */
    employeeTimeExternalCode: string;
    /**
     * Created By.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created On.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Date.
     * @nullable
     */
    date?: Moment;
    /**
     * Deduction Quantity.
     * @nullable
     */
    deductionQuantity?: BigNumber;
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
     * Last Modified By.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified On.
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
     * Number Of Days.
     * @nullable
     */
    quantityInDays?: BigNumber;
    /**
     * Number Of Hours.
     * @nullable
     */
    quantityInHours?: BigNumber;
    /**
     * Start Time.
     * @nullable
     */
    startTime?: Time;
    /**
     * Internal ID Of The Work Schedule.
     * @nullable
     */
    workScheduleInternalId?: BigNumber;
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
     * One-to-many navigation property to the [[TimeAccountDetail]] entity.
     */
    timeAccountDetail: TimeAccountDetail[];
    /**
     * Returns an entity builder to construct instances `EmployeeTimeCalendar`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeCalendar`.
     */
    static builder(): EntityBuilderType<EmployeeTimeCalendar, EmployeeTimeCalendarTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeCalendar` entity type.
     * @returns A `EmployeeTimeCalendar` request builder.
     */
    static requestBuilder(): EmployeeTimeCalendarRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeCalendar`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeCalendar`.
     */
    static customField(fieldName: string): CustomField<EmployeeTimeCalendar>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { TimeAccountDetail, TimeAccountDetailType } from './TimeAccountDetail';
export interface EmployeeTimeCalendarType {
    employeeTimeExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    date?: Moment;
    deductionQuantity?: BigNumber;
    endTime?: Time;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    quantityInDays?: BigNumber;
    quantityInHours?: BigNumber;
    startTime?: Time;
    workScheduleInternalId?: BigNumber;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    timeAccountDetail: TimeAccountDetailType[];
}
export interface EmployeeTimeCalendarTypeForceMandatory {
    employeeTimeExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    date: Moment;
    deductionQuantity: BigNumber;
    endTime: Time;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    quantityInDays: BigNumber;
    quantityInHours: BigNumber;
    startTime: Time;
    workScheduleInternalId: BigNumber;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    timeAccountDetail: TimeAccountDetailType[];
}
export declare namespace EmployeeTimeCalendar {
    /**
     * Static representation of the [[employeeTimeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_EXTERNAL_CODE: StringField<EmployeeTimeCalendar>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeTimeCalendar>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeTimeCalendar>;
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE: DateField<EmployeeTimeCalendar>;
    /**
     * Static representation of the [[deductionQuantity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEDUCTION_QUANTITY: BigNumberField<EmployeeTimeCalendar>;
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_TIME: TimeField<EmployeeTimeCalendar>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<EmployeeTimeCalendar>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeTimeCalendar>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeCalendar>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeCalendar>;
    /**
     * Static representation of the [[quantityInDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_IN_DAYS: BigNumberField<EmployeeTimeCalendar>;
    /**
     * Static representation of the [[quantityInHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const QUANTITY_IN_HOURS: BigNumberField<EmployeeTimeCalendar>;
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_TIME: TimeField<EmployeeTimeCalendar>;
    /**
     * Static representation of the [[workScheduleInternalId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_SCHEDULE_INTERNAL_ID: BigNumberField<EmployeeTimeCalendar>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeeTimeCalendar, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeTimeCalendar, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeTimeCalendar, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[timeAccountDetail]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ACCOUNT_DETAIL: Link<EmployeeTimeCalendar, TimeAccountDetail>;
    /**
     * All fields of the EmployeeTimeCalendar entity.
     */
    const _allFields: Array<StringField<EmployeeTimeCalendar> | DateField<EmployeeTimeCalendar> | BigNumberField<EmployeeTimeCalendar> | TimeField<EmployeeTimeCalendar> | OneToOneLink<EmployeeTimeCalendar, User> | OneToOneLink<EmployeeTimeCalendar, MdfEnumValue> | Link<EmployeeTimeCalendar, TimeAccountDetail>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeTimeCalendar>;
    /**
     * All key fields of the EmployeeTimeCalendar entity.
     */
    const _keyFields: Array<Selectable<EmployeeTimeCalendar>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeCalendar.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeTimeCalendar>;
    };
}
//# sourceMappingURL=EmployeeTimeCalendar.d.ts.map