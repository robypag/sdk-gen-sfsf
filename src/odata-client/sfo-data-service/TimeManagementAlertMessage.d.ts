import { TimeManagementAlertMessageRequestBuilder } from './TimeManagementAlertMessageRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TimeManagementAlertMessage" of service "SFOData".
 */
export declare class TimeManagementAlertMessage extends Entity implements TimeManagementAlertMessageType {
    /**
     * Technical entity name for TimeManagementAlertMessage.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeManagementAlertMessage.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Time Management Alert_External Code.
     * Maximum length: 128.
     */
    timeManagementAlertExternalCode: string;
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
     * Date.
     * @nullable
     */
    date?: Moment;
    /**
     * Default Message Text.
     * Maximum length: 255.
     * @nullable
     */
    defaultMessageText?: string;
    /**
     * Employee Time.
     * Maximum length: 128.
     * @nullable
     */
    employeeTime?: string;
    /**
     * Employee Time Sheet.
     * Maximum length: 128.
     * @nullable
     */
    employeeTimeSheet?: string;
    /**
     * External Code.
     * Maximum length: 128.
     */
    externalCode: string;
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
     * Message Key.
     * Maximum length: 255.
     * @nullable
     */
    messageKey?: string;
    /**
     * Message Parameter 1.
     * Maximum length: 255.
     * @nullable
     */
    messageParameter1?: string;
    /**
     * Message Parameter 2.
     * Maximum length: 255.
     * @nullable
     */
    messageParameter2?: string;
    /**
     * Message Parameter 3.
     * Maximum length: 255.
     * @nullable
     */
    messageParameter3?: string;
    /**
     * Message Parameter 4.
     * Maximum length: 255.
     * @nullable
     */
    messageParameter4?: string;
    /**
     * Time Account.
     * Maximum length: 128.
     * @nullable
     */
    timeAccount?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[EmployeeTime]] entity.
     */
    employeeTimeNav: EmployeeTime;
    /**
     * One-to-one navigation property to the [[EmployeeTimeSheet]] entity.
     */
    employeeTimeSheetNav: EmployeeTimeSheet;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[TimeAccount]] entity.
     */
    timeAccountNav: TimeAccount;
    /**
     * Returns an entity builder to construct instances `TimeManagementAlertMessage`.
     * @returns A builder that constructs instances of entity type `TimeManagementAlertMessage`.
     */
    static builder(): EntityBuilderType<TimeManagementAlertMessage, TimeManagementAlertMessageTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TimeManagementAlertMessage` entity type.
     * @returns A `TimeManagementAlertMessage` request builder.
     */
    static requestBuilder(): TimeManagementAlertMessageRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeManagementAlertMessage`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeManagementAlertMessage`.
     */
    static customField(fieldName: string): CustomField<TimeManagementAlertMessage>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { EmployeeTime, EmployeeTimeType } from './EmployeeTime';
import { EmployeeTimeSheet, EmployeeTimeSheetType } from './EmployeeTimeSheet';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { TimeAccount, TimeAccountType } from './TimeAccount';
export interface TimeManagementAlertMessageType {
    timeManagementAlertExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    date?: Moment;
    defaultMessageText?: string;
    employeeTime?: string;
    employeeTimeSheet?: string;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    messageKey?: string;
    messageParameter1?: string;
    messageParameter2?: string;
    messageParameter3?: string;
    messageParameter4?: string;
    timeAccount?: string;
    createdByNav: UserType;
    employeeTimeNav: EmployeeTimeType;
    employeeTimeSheetNav: EmployeeTimeSheetType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    timeAccountNav: TimeAccountType;
}
export interface TimeManagementAlertMessageTypeForceMandatory {
    timeManagementAlertExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    date: Moment;
    defaultMessageText: string;
    employeeTime: string;
    employeeTimeSheet: string;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    messageKey: string;
    messageParameter1: string;
    messageParameter2: string;
    messageParameter3: string;
    messageParameter4: string;
    timeAccount: string;
    createdByNav: UserType;
    employeeTimeNav: EmployeeTimeType;
    employeeTimeSheetNav: EmployeeTimeSheetType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    timeAccountNav: TimeAccountType;
}
export declare namespace TimeManagementAlertMessage {
    /**
     * Static representation of the [[timeManagementAlertExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_MANAGEMENT_ALERT_EXTERNAL_CODE: StringField<TimeManagementAlertMessage>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<TimeManagementAlertMessage>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<TimeManagementAlertMessage>;
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE: DateField<TimeManagementAlertMessage>;
    /**
     * Static representation of the [[defaultMessageText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_MESSAGE_TEXT: StringField<TimeManagementAlertMessage>;
    /**
     * Static representation of the [[employeeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME: StringField<TimeManagementAlertMessage>;
    /**
     * Static representation of the [[employeeTimeSheet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_SHEET: StringField<TimeManagementAlertMessage>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<TimeManagementAlertMessage>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<TimeManagementAlertMessage>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TimeManagementAlertMessage>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<TimeManagementAlertMessage>;
    /**
     * Static representation of the [[messageKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MESSAGE_KEY: StringField<TimeManagementAlertMessage>;
    /**
     * Static representation of the [[messageParameter1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MESSAGE_PARAMETER_1: StringField<TimeManagementAlertMessage>;
    /**
     * Static representation of the [[messageParameter2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MESSAGE_PARAMETER_2: StringField<TimeManagementAlertMessage>;
    /**
     * Static representation of the [[messageParameter3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MESSAGE_PARAMETER_3: StringField<TimeManagementAlertMessage>;
    /**
     * Static representation of the [[messageParameter4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MESSAGE_PARAMETER_4: StringField<TimeManagementAlertMessage>;
    /**
     * Static representation of the [[timeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ACCOUNT: StringField<TimeManagementAlertMessage>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<TimeManagementAlertMessage, User>;
    /**
     * Static representation of the one-to-one navigation property [[employeeTimeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_NAV: OneToOneLink<TimeManagementAlertMessage, EmployeeTime>;
    /**
     * Static representation of the one-to-one navigation property [[employeeTimeSheetNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_SHEET_NAV: OneToOneLink<TimeManagementAlertMessage, EmployeeTimeSheet>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<TimeManagementAlertMessage, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<TimeManagementAlertMessage, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[timeAccountNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ACCOUNT_NAV: OneToOneLink<TimeManagementAlertMessage, TimeAccount>;
    /**
     * All fields of the TimeManagementAlertMessage entity.
     */
    const _allFields: Array<StringField<TimeManagementAlertMessage> | DateField<TimeManagementAlertMessage> | OneToOneLink<TimeManagementAlertMessage, User> | OneToOneLink<TimeManagementAlertMessage, EmployeeTime> | OneToOneLink<TimeManagementAlertMessage, EmployeeTimeSheet> | OneToOneLink<TimeManagementAlertMessage, MdfEnumValue> | OneToOneLink<TimeManagementAlertMessage, TimeAccount>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TimeManagementAlertMessage>;
    /**
     * All key fields of the TimeManagementAlertMessage entity.
     */
    const _keyFields: Array<Selectable<TimeManagementAlertMessage>>;
    /**
     * Mapping of all key field names to the respective static field property TimeManagementAlertMessage.
     */
    const _keys: {
        [keys: string]: Selectable<TimeManagementAlertMessage>;
    };
}
//# sourceMappingURL=TimeManagementAlertMessage.d.ts.map