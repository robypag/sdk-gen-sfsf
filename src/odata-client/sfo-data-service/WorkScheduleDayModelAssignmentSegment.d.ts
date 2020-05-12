import { WorkScheduleDayModelAssignmentSegmentRequestBuilder } from './WorkScheduleDayModelAssignmentSegmentRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField, Time, TimeField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "WorkScheduleDayModelAssignmentSegment" of service "SFOData".
 */
export declare class WorkScheduleDayModelAssignmentSegment extends Entity implements WorkScheduleDayModelAssignmentSegmentType {
    /**
     * Technical entity name for WorkScheduleDayModelAssignmentSegment.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WorkScheduleDayModelAssignmentSegment.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Work Schedule Day Model Assignment_Day.
     */
    workScheduleDayModelAssignmentDay: BigNumber;
    /**
     * Work Schedule_External Code.
     * Maximum length: 128.
     */
    workScheduleExternalCode: string;
    /**
     * Category.
     * Maximum length: 255.
     * @nullable
     */
    category?: string;
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
     * Duration.
     * @nullable
     */
    duration?: BigNumber;
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
     * Start Time.
     * @nullable
     */
    startTime?: Time;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    categoryNav: MdfEnumValue;
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
     * Returns an entity builder to construct instances `WorkScheduleDayModelAssignmentSegment`.
     * @returns A builder that constructs instances of entity type `WorkScheduleDayModelAssignmentSegment`.
     */
    static builder(): EntityBuilderType<WorkScheduleDayModelAssignmentSegment, WorkScheduleDayModelAssignmentSegmentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WorkScheduleDayModelAssignmentSegment` entity type.
     * @returns A `WorkScheduleDayModelAssignmentSegment` request builder.
     */
    static requestBuilder(): WorkScheduleDayModelAssignmentSegmentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkScheduleDayModelAssignmentSegment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WorkScheduleDayModelAssignmentSegment`.
     */
    static customField(fieldName: string): CustomField<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { User, UserType } from './User';
export interface WorkScheduleDayModelAssignmentSegmentType {
    workScheduleDayModelAssignmentDay: BigNumber;
    workScheduleExternalCode: string;
    category?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    duration?: BigNumber;
    endTime?: Time;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    startTime?: Time;
    categoryNav: MdfEnumValueType;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface WorkScheduleDayModelAssignmentSegmentTypeForceMandatory {
    workScheduleDayModelAssignmentDay: BigNumber;
    workScheduleExternalCode: string;
    category: string;
    createdBy: string;
    createdDateTime: Moment;
    duration: BigNumber;
    endTime: Time;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    startTime: Time;
    categoryNav: MdfEnumValueType;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace WorkScheduleDayModelAssignmentSegment {
    /**
     * Static representation of the [[workScheduleDayModelAssignmentDay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_SCHEDULE_DAY_MODEL_ASSIGNMENT_DAY: BigNumberField<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Static representation of the [[workScheduleExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_SCHEDULE_EXTERNAL_CODE: StringField<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: StringField<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Static representation of the [[duration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DURATION: BigNumberField<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Static representation of the [[endTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_TIME: TimeField<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Static representation of the [[startTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_TIME: TimeField<WorkScheduleDayModelAssignmentSegment>;
    /**
     * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_NAV: OneToOneLink<WorkScheduleDayModelAssignmentSegment, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<WorkScheduleDayModelAssignmentSegment, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<WorkScheduleDayModelAssignmentSegment, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<WorkScheduleDayModelAssignmentSegment, MdfEnumValue>;
    /**
     * All fields of the WorkScheduleDayModelAssignmentSegment entity.
     */
    const _allFields: Array<BigNumberField<WorkScheduleDayModelAssignmentSegment> | StringField<WorkScheduleDayModelAssignmentSegment> | DateField<WorkScheduleDayModelAssignmentSegment> | TimeField<WorkScheduleDayModelAssignmentSegment> | OneToOneLink<WorkScheduleDayModelAssignmentSegment, MdfEnumValue> | OneToOneLink<WorkScheduleDayModelAssignmentSegment, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WorkScheduleDayModelAssignmentSegment>;
    /**
     * All key fields of the WorkScheduleDayModelAssignmentSegment entity.
     */
    const _keyFields: Array<Selectable<WorkScheduleDayModelAssignmentSegment>>;
    /**
     * Mapping of all key field names to the respective static field property WorkScheduleDayModelAssignmentSegment.
     */
    const _keys: {
        [keys: string]: Selectable<WorkScheduleDayModelAssignmentSegment>;
    };
}
//# sourceMappingURL=WorkScheduleDayModelAssignmentSegment.d.ts.map