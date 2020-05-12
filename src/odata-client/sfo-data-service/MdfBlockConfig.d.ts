import { MdfBlockConfigRequestBuilder } from './MdfBlockConfigRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "MDFBlockConfig" of service "SFOData".
 */
export declare class MdfBlockConfig extends Entity implements MdfBlockConfigType {
    /**
     * Technical entity name for MdfBlockConfig.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for MdfBlockConfig.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * code.
     * Maximum length: 128.
     */
    code: string;
    /**
     * Created By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created On.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Last Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date.
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
     * objectType.
     * Maximum length: 255.
     * @nullable
     */
    objectType?: string;
    /**
     * screenId.
     * Maximum length: 255.
     * @nullable
     */
    screenId?: string;
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
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `MdfBlockConfig`.
     * @returns A builder that constructs instances of entity type `MdfBlockConfig`.
     */
    static builder(): EntityBuilderType<MdfBlockConfig, MdfBlockConfigTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `MdfBlockConfig` entity type.
     * @returns A `MdfBlockConfig` request builder.
     */
    static requestBuilder(): MdfBlockConfigRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MdfBlockConfig`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MdfBlockConfig`.
     */
    static customField(fieldName: string): CustomField<MdfBlockConfig>;
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
import { WfRequest, WfRequestType } from './WfRequest';
export interface MdfBlockConfigType {
    code: string;
    createdBy?: string;
    createdDateTime?: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    objectType?: string;
    screenId?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface MdfBlockConfigTypeForceMandatory {
    code: string;
    createdBy: string;
    createdDateTime: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    objectType: string;
    screenId: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace MdfBlockConfig {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<MdfBlockConfig>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<MdfBlockConfig>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<MdfBlockConfig>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<MdfBlockConfig>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<MdfBlockConfig>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<MdfBlockConfig>;
    /**
     * Static representation of the [[objectType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECT_TYPE: StringField<MdfBlockConfig>;
    /**
     * Static representation of the [[screenId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCREEN_ID: StringField<MdfBlockConfig>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<MdfBlockConfig, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<MdfBlockConfig, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<MdfBlockConfig, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<MdfBlockConfig, WfRequest>;
    /**
     * All fields of the MdfBlockConfig entity.
     */
    const _allFields: Array<StringField<MdfBlockConfig> | DateField<MdfBlockConfig> | OneToOneLink<MdfBlockConfig, User> | OneToOneLink<MdfBlockConfig, MdfEnumValue> | Link<MdfBlockConfig, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<MdfBlockConfig>;
    /**
     * All key fields of the MdfBlockConfig entity.
     */
    const _keyFields: Array<Selectable<MdfBlockConfig>>;
    /**
     * Mapping of all key field names to the respective static field property MdfBlockConfig.
     */
    const _keys: {
        [keys: string]: Selectable<MdfBlockConfig>;
    };
}
//# sourceMappingURL=MdfBlockConfig.d.ts.map