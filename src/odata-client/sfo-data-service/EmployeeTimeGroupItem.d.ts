import { EmployeeTimeGroupItemRequestBuilder } from './EmployeeTimeGroupItemRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeTimeGroupItem" of service "SFOData".
 */
export declare class EmployeeTimeGroupItem extends Entity implements EmployeeTimeGroupItemType {
    /**
     * Technical entity name for EmployeeTimeGroupItem.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeGroupItem.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Employee Time Group_externalCode.
     * Maximum length: 128.
     */
    employeeTimeGroupExternalCode: string;
    /**
     * Comment.
     * Maximum length: 255.
     * @nullable
     */
    comment?: string;
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
     * mdfSystemExternalCode.
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
     * Returns an entity builder to construct instances `EmployeeTimeGroupItem`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeGroupItem`.
     */
    static builder(): EntityBuilderType<EmployeeTimeGroupItem, EmployeeTimeGroupItemTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeGroupItem` entity type.
     * @returns A `EmployeeTimeGroupItem` request builder.
     */
    static requestBuilder(): EmployeeTimeGroupItemRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeGroupItem`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeGroupItem`.
     */
    static customField(fieldName: string): CustomField<EmployeeTimeGroupItem>;
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
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface EmployeeTimeGroupItemType {
    employeeTimeGroupExternalCode: string;
    comment?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    employeeTime?: string;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    createdByNav: UserType;
    employeeTimeNav: EmployeeTimeType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface EmployeeTimeGroupItemTypeForceMandatory {
    employeeTimeGroupExternalCode: string;
    comment: string;
    createdBy: string;
    createdDateTime: Moment;
    employeeTime: string;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    createdByNav: UserType;
    employeeTimeNav: EmployeeTimeType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace EmployeeTimeGroupItem {
    /**
     * Static representation of the [[employeeTimeGroupExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_GROUP_EXTERNAL_CODE: StringField<EmployeeTimeGroupItem>;
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT: StringField<EmployeeTimeGroupItem>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeTimeGroupItem>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeTimeGroupItem>;
    /**
     * Static representation of the [[employeeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME: StringField<EmployeeTimeGroupItem>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<EmployeeTimeGroupItem>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeTimeGroupItem>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeGroupItem>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeGroupItem>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeeTimeGroupItem, User>;
    /**
     * Static representation of the one-to-one navigation property [[employeeTimeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_NAV: OneToOneLink<EmployeeTimeGroupItem, EmployeeTime>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeTimeGroupItem, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeTimeGroupItem, MdfEnumValue>;
    /**
     * All fields of the EmployeeTimeGroupItem entity.
     */
    const _allFields: Array<StringField<EmployeeTimeGroupItem> | DateField<EmployeeTimeGroupItem> | OneToOneLink<EmployeeTimeGroupItem, User> | OneToOneLink<EmployeeTimeGroupItem, EmployeeTime> | OneToOneLink<EmployeeTimeGroupItem, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeTimeGroupItem>;
    /**
     * All key fields of the EmployeeTimeGroupItem entity.
     */
    const _keyFields: Array<Selectable<EmployeeTimeGroupItem>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeGroupItem.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeTimeGroupItem>;
    };
}
//# sourceMappingURL=EmployeeTimeGroupItem.d.ts.map