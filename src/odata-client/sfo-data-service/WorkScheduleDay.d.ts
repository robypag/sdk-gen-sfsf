import { WorkScheduleDayRequestBuilder } from './WorkScheduleDayRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "WorkScheduleDay" of service "SFOData".
 */
export declare class WorkScheduleDay extends Entity implements WorkScheduleDayType {
    /**
     * Technical entity name for WorkScheduleDay.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WorkScheduleDay.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Work Schedule_External Code.
     * Maximum length: 128.
     */
    workScheduleExternalCode: string;
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
     * Day.
     */
    day: BigNumber;
    /**
     * Planned Hours And Minutes (hh:mm).
     * Maximum length: 255.
     * @nullable
     */
    hoursAndMinutes?: string;
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
     * Planned Hours (Decimal).
     * @nullable
     */
    workingHours?: BigNumber;
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
     * Returns an entity builder to construct instances `WorkScheduleDay`.
     * @returns A builder that constructs instances of entity type `WorkScheduleDay`.
     */
    static builder(): EntityBuilderType<WorkScheduleDay, WorkScheduleDayTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WorkScheduleDay` entity type.
     * @returns A `WorkScheduleDay` request builder.
     */
    static requestBuilder(): WorkScheduleDayRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkScheduleDay`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WorkScheduleDay`.
     */
    static customField(fieldName: string): CustomField<WorkScheduleDay>;
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
export interface WorkScheduleDayType {
    workScheduleExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    day: BigNumber;
    hoursAndMinutes?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    workingHours?: BigNumber;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface WorkScheduleDayTypeForceMandatory {
    workScheduleExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    day: BigNumber;
    hoursAndMinutes: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    workingHours: BigNumber;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace WorkScheduleDay {
    /**
     * Static representation of the [[workScheduleExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_SCHEDULE_EXTERNAL_CODE: StringField<WorkScheduleDay>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<WorkScheduleDay>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<WorkScheduleDay>;
    /**
     * Static representation of the [[day]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DAY: BigNumberField<WorkScheduleDay>;
    /**
     * Static representation of the [[hoursAndMinutes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOURS_AND_MINUTES: StringField<WorkScheduleDay>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<WorkScheduleDay>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<WorkScheduleDay>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<WorkScheduleDay>;
    /**
     * Static representation of the [[workingHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORKING_HOURS: BigNumberField<WorkScheduleDay>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<WorkScheduleDay, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<WorkScheduleDay, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<WorkScheduleDay, MdfEnumValue>;
    /**
     * All fields of the WorkScheduleDay entity.
     */
    const _allFields: Array<StringField<WorkScheduleDay> | DateField<WorkScheduleDay> | BigNumberField<WorkScheduleDay> | OneToOneLink<WorkScheduleDay, User> | OneToOneLink<WorkScheduleDay, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WorkScheduleDay>;
    /**
     * All key fields of the WorkScheduleDay entity.
     */
    const _keyFields: Array<Selectable<WorkScheduleDay>>;
    /**
     * Mapping of all key field names to the respective static field property WorkScheduleDay.
     */
    const _keys: {
        [keys: string]: Selectable<WorkScheduleDay>;
    };
}
//# sourceMappingURL=WorkScheduleDay.d.ts.map