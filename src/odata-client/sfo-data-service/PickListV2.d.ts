import { PickListV2RequestBuilder } from './PickListV2RequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PickListV2" of service "SFOData".
 */
export declare class PickListV2 extends Entity implements PickListV2Type {
    /**
     * Technical entity name for PickListV2.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PickListV2.
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
     * Display Order.
     * Maximum length: 255.
     * @nullable
     */
    displayOrder?: string;
    /**
     * Effective End Date.
     * @nullable
     */
    effectiveEndDate?: Moment;
    /**
     * Effective Start Date.
     */
    effectiveStartDate: Moment;
    /**
     * Code.
     * Maximum length: 128.
     */
    id: string;
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
     * Legacy Picklist ID.
     * Maximum length: 255.
     * @nullable
     */
    legacyPickListId?: string;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Name.
     * Maximum length: 128.
     * @nullable
     */
    name?: string;
    /**
     * Parent Picklist.
     * Maximum length: 128.
     * @nullable
     */
    parentPickList?: string;
    /**
     * Picklist Creation Source.
     * Maximum length: 255.
     * @nullable
     */
    picklistCreationSource?: string;
    /**
     * Status.
     * Maximum length: 255.
     * @nullable
     */
    status?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    displayOrderNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[PickListV2]] entity.
     */
    parentPickListNav: PickListV2;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    picklistCreationSourceNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    values: PickListValueV2[];
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `PickListV2`.
     * @returns A builder that constructs instances of entity type `PickListV2`.
     */
    static builder(): EntityBuilderType<PickListV2, PickListV2TypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PickListV2` entity type.
     * @returns A `PickListV2` request builder.
     */
    static requestBuilder(): PickListV2RequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PickListV2`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PickListV2`.
     */
    static customField(fieldName: string): CustomField<PickListV2>;
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
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { WfRequest, WfRequestType } from './WfRequest';
export interface PickListV2Type {
    createdBy?: string;
    createdDateTime?: Moment;
    displayOrder?: string;
    effectiveEndDate?: Moment;
    effectiveStartDate: Moment;
    id: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    legacyPickListId?: string;
    mdfSystemRecordStatus?: string;
    name?: string;
    parentPickList?: string;
    picklistCreationSource?: string;
    status?: string;
    createdByNav: UserType;
    displayOrderNav: MdfEnumValueType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    parentPickListNav: PickListV2Type;
    picklistCreationSourceNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
    values: PickListValueV2Type[];
    wfRequestNav: WfRequestType[];
}
export interface PickListV2TypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    displayOrder: string;
    effectiveEndDate: Moment;
    effectiveStartDate: Moment;
    id: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    legacyPickListId: string;
    mdfSystemRecordStatus: string;
    name: string;
    parentPickList: string;
    picklistCreationSource: string;
    status: string;
    createdByNav: UserType;
    displayOrderNav: MdfEnumValueType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    parentPickListNav: PickListV2Type;
    picklistCreationSourceNav: MdfEnumValueType;
    statusNav: MdfEnumValueType;
    values: PickListValueV2Type[];
    wfRequestNav: WfRequestType[];
}
export declare namespace PickListV2 {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PickListV2>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PickListV2>;
    /**
     * Static representation of the [[displayOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISPLAY_ORDER: StringField<PickListV2>;
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_END_DATE: DateField<PickListV2>;
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_START_DATE: DateField<PickListV2>;
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ID: StringField<PickListV2>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PickListV2>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PickListV2>;
    /**
     * Static representation of the [[legacyPickListId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGACY_PICK_LIST_ID: StringField<PickListV2>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<PickListV2>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<PickListV2>;
    /**
     * Static representation of the [[parentPickList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_PICK_LIST: StringField<PickListV2>;
    /**
     * Static representation of the [[picklistCreationSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICKLIST_CREATION_SOURCE: StringField<PickListV2>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<PickListV2>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<PickListV2, User>;
    /**
     * Static representation of the one-to-one navigation property [[displayOrderNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISPLAY_ORDER_NAV: OneToOneLink<PickListV2, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<PickListV2, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PickListV2, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[parentPickListNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_PICK_LIST_NAV: OneToOneLink<PickListV2, PickListV2>;
    /**
     * Static representation of the one-to-one navigation property [[picklistCreationSourceNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PICKLIST_CREATION_SOURCE_NAV: OneToOneLink<PickListV2, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<PickListV2, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[values]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUES: Link<PickListV2, PickListValueV2>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<PickListV2, WfRequest>;
    /**
     * All fields of the PickListV2 entity.
     */
    const _allFields: Array<StringField<PickListV2> | DateField<PickListV2> | OneToOneLink<PickListV2, User> | OneToOneLink<PickListV2, MdfEnumValue> | OneToOneLink<PickListV2, PickListV2> | Link<PickListV2, PickListValueV2> | Link<PickListV2, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PickListV2>;
    /**
     * All key fields of the PickListV2 entity.
     */
    const _keyFields: Array<Selectable<PickListV2>>;
    /**
     * Mapping of all key field names to the respective static field property PickListV2.
     */
    const _keys: {
        [keys: string]: Selectable<PickListV2>;
    };
}
//# sourceMappingURL=PickListV2.d.ts.map