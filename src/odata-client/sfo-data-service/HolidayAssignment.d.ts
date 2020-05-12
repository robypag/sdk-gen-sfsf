import { HolidayAssignmentRequestBuilder } from './HolidayAssignmentRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "HolidayAssignment" of service "SFOData".
 */
export declare class HolidayAssignment extends Entity implements HolidayAssignmentType {
    /**
     * Technical entity name for HolidayAssignment.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for HolidayAssignment.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Holiday Calendar_External Code.
     * Maximum length: 128.
     */
    holidayCalendarExternalCode: string;
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
     * Date of Holiday.
     */
    date: Moment;
    /**
     * Holiday.
     * Maximum length: 128.
     * @nullable
     */
    holiday?: string;
    /**
     * Holiday Class.
     * Maximum length: 255.
     * @nullable
     */
    holidayClass?: string;
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
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    holidayClassNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[Holiday]] entity.
     */
    holidayNav: Holiday;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `HolidayAssignment`.
     * @returns A builder that constructs instances of entity type `HolidayAssignment`.
     */
    static builder(): EntityBuilderType<HolidayAssignment, HolidayAssignmentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `HolidayAssignment` entity type.
     * @returns A `HolidayAssignment` request builder.
     */
    static requestBuilder(): HolidayAssignmentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `HolidayAssignment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `HolidayAssignment`.
     */
    static customField(fieldName: string): CustomField<HolidayAssignment>;
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
import { Holiday, HolidayType } from './Holiday';
export interface HolidayAssignmentType {
    holidayCalendarExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    date: Moment;
    holiday?: string;
    holidayClass?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    createdByNav: UserType;
    holidayClassNav: MdfEnumValueType;
    holidayNav: HolidayType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface HolidayAssignmentTypeForceMandatory {
    holidayCalendarExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    date: Moment;
    holiday: string;
    holidayClass: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    createdByNav: UserType;
    holidayClassNav: MdfEnumValueType;
    holidayNav: HolidayType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace HolidayAssignment {
    /**
     * Static representation of the [[holidayCalendarExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOLIDAY_CALENDAR_EXTERNAL_CODE: StringField<HolidayAssignment>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<HolidayAssignment>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<HolidayAssignment>;
    /**
     * Static representation of the [[date]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE: DateField<HolidayAssignment>;
    /**
     * Static representation of the [[holiday]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOLIDAY: StringField<HolidayAssignment>;
    /**
     * Static representation of the [[holidayClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOLIDAY_CLASS: StringField<HolidayAssignment>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<HolidayAssignment>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<HolidayAssignment>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<HolidayAssignment>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<HolidayAssignment, User>;
    /**
     * Static representation of the one-to-one navigation property [[holidayClassNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOLIDAY_CLASS_NAV: OneToOneLink<HolidayAssignment, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[holidayNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOLIDAY_NAV: OneToOneLink<HolidayAssignment, Holiday>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<HolidayAssignment, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<HolidayAssignment, MdfEnumValue>;
    /**
     * All fields of the HolidayAssignment entity.
     */
    const _allFields: Array<StringField<HolidayAssignment> | DateField<HolidayAssignment> | OneToOneLink<HolidayAssignment, User> | OneToOneLink<HolidayAssignment, MdfEnumValue> | OneToOneLink<HolidayAssignment, Holiday>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<HolidayAssignment>;
    /**
     * All key fields of the HolidayAssignment entity.
     */
    const _keyFields: Array<Selectable<HolidayAssignment>>;
    /**
     * Mapping of all key field names to the respective static field property HolidayAssignment.
     */
    const _keys: {
        [keys: string]: Selectable<HolidayAssignment>;
    };
}
//# sourceMappingURL=HolidayAssignment.d.ts.map