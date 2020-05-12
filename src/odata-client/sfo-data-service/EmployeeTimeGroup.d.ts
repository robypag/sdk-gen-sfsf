import { EmployeeTimeGroupRequestBuilder } from './EmployeeTimeGroupRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeTimeGroup" of service "SFOData".
 */
export declare class EmployeeTimeGroup extends Entity implements EmployeeTimeGroupType {
    /**
     * Technical entity name for EmployeeTimeGroup.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeGroup.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * externalCode.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * Items Category.
     * Maximum length: 255.
     * @nullable
     */
    itemsCategory?: string;
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
     * User Id.
     * Maximum length: 100.
     * @nullable
     */
    userId?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[EmployeeTimeGroupItem]] entity.
     */
    items: EmployeeTimeGroupItem[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    itemsCategoryNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `EmployeeTimeGroup`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeGroup`.
     */
    static builder(): EntityBuilderType<EmployeeTimeGroup, EmployeeTimeGroupTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeGroup` entity type.
     * @returns A `EmployeeTimeGroup` request builder.
     */
    static requestBuilder(): EmployeeTimeGroupRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeGroup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeGroup`.
     */
    static customField(fieldName: string): CustomField<EmployeeTimeGroup>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { EmployeeTimeGroupItem, EmployeeTimeGroupItemType } from './EmployeeTimeGroupItem';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface EmployeeTimeGroupType {
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    itemsCategory?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    userId?: string;
    createdByNav: UserType;
    items: EmployeeTimeGroupItemType[];
    itemsCategoryNav: MdfEnumValueType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface EmployeeTimeGroupTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    itemsCategory: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    userId: string;
    createdByNav: UserType;
    items: EmployeeTimeGroupItemType[];
    itemsCategoryNav: MdfEnumValueType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace EmployeeTimeGroup {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeTimeGroup>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeTimeGroup>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<EmployeeTimeGroup>;
    /**
     * Static representation of the [[itemsCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS_CATEGORY: StringField<EmployeeTimeGroup>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeTimeGroup>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeGroup>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeGroup>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EmployeeTimeGroup>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeeTimeGroup, User>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: Link<EmployeeTimeGroup, EmployeeTimeGroupItem>;
    /**
     * Static representation of the one-to-one navigation property [[itemsCategoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS_CATEGORY_NAV: OneToOneLink<EmployeeTimeGroup, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeTimeGroup, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeTimeGroup, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<EmployeeTimeGroup, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<EmployeeTimeGroup, WfRequest>;
    /**
     * All fields of the EmployeeTimeGroup entity.
     */
    const _allFields: Array<StringField<EmployeeTimeGroup> | DateField<EmployeeTimeGroup> | OneToOneLink<EmployeeTimeGroup, User> | Link<EmployeeTimeGroup, EmployeeTimeGroupItem> | OneToOneLink<EmployeeTimeGroup, MdfEnumValue> | Link<EmployeeTimeGroup, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeTimeGroup>;
    /**
     * All key fields of the EmployeeTimeGroup entity.
     */
    const _keyFields: Array<Selectable<EmployeeTimeGroup>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeGroup.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeTimeGroup>;
    };
}
//# sourceMappingURL=EmployeeTimeGroup.d.ts.map