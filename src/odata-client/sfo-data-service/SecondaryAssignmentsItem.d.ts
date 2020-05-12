import { SecondaryAssignmentsItemRequestBuilder } from './SecondaryAssignmentsItemRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SecondaryAssignmentsItem" of service "SFOData".
 */
export declare class SecondaryAssignmentsItem extends Entity implements SecondaryAssignmentsItemType {
    /**
     * Technical entity name for SecondaryAssignmentsItem.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SecondaryAssignmentsItem.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Secondary Assignments_Effective Start Date.
     */
    secondaryAssignmentsEffectiveStartDate: Moment;
    /**
     * Secondary Assignments_Person ID External.
     * Maximum length: 128.
     */
    secondaryAssignmentsExternalCode: string;
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
     * Employment / User ID.
     * Maximum length: 100.
     * @nullable
     */
    usersSysId?: string;
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
     * One-to-one navigation property to the [[User]] entity.
     */
    usersSysIdNav: User;
    /**
     * Returns an entity builder to construct instances `SecondaryAssignmentsItem`.
     * @returns A builder that constructs instances of entity type `SecondaryAssignmentsItem`.
     */
    static builder(): EntityBuilderType<SecondaryAssignmentsItem, SecondaryAssignmentsItemTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SecondaryAssignmentsItem` entity type.
     * @returns A `SecondaryAssignmentsItem` request builder.
     */
    static requestBuilder(): SecondaryAssignmentsItemRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SecondaryAssignmentsItem`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SecondaryAssignmentsItem`.
     */
    static customField(fieldName: string): CustomField<SecondaryAssignmentsItem>;
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
export interface SecondaryAssignmentsItemType {
    secondaryAssignmentsEffectiveStartDate: Moment;
    secondaryAssignmentsExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    usersSysId?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    usersSysIdNav: UserType;
}
export interface SecondaryAssignmentsItemTypeForceMandatory {
    secondaryAssignmentsEffectiveStartDate: Moment;
    secondaryAssignmentsExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    usersSysId: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    usersSysIdNav: UserType;
}
export declare namespace SecondaryAssignmentsItem {
    /**
     * Static representation of the [[secondaryAssignmentsEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECONDARY_ASSIGNMENTS_EFFECTIVE_START_DATE: DateField<SecondaryAssignmentsItem>;
    /**
     * Static representation of the [[secondaryAssignmentsExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECONDARY_ASSIGNMENTS_EXTERNAL_CODE: StringField<SecondaryAssignmentsItem>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<SecondaryAssignmentsItem>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<SecondaryAssignmentsItem>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<SecondaryAssignmentsItem>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<SecondaryAssignmentsItem>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<SecondaryAssignmentsItem>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<SecondaryAssignmentsItem>;
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID: StringField<SecondaryAssignmentsItem>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<SecondaryAssignmentsItem, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<SecondaryAssignmentsItem, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SecondaryAssignmentsItem, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[usersSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID_NAV: OneToOneLink<SecondaryAssignmentsItem, User>;
    /**
     * All fields of the SecondaryAssignmentsItem entity.
     */
    const _allFields: Array<DateField<SecondaryAssignmentsItem> | StringField<SecondaryAssignmentsItem> | OneToOneLink<SecondaryAssignmentsItem, User> | OneToOneLink<SecondaryAssignmentsItem, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SecondaryAssignmentsItem>;
    /**
     * All key fields of the SecondaryAssignmentsItem entity.
     */
    const _keyFields: Array<Selectable<SecondaryAssignmentsItem>>;
    /**
     * Mapping of all key field names to the respective static field property SecondaryAssignmentsItem.
     */
    const _keys: {
        [keys: string]: Selectable<SecondaryAssignmentsItem>;
    };
}
//# sourceMappingURL=SecondaryAssignmentsItem.d.ts.map