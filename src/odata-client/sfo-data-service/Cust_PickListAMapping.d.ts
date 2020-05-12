import { Cust_PickListAMappingRequestBuilder } from './Cust_PickListAMappingRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "cust_PickListAMapping" of service "SFOData".
 */
export declare class Cust_PickListAMapping extends Entity implements Cust_PickListAMappingType {
    /**
     * Technical entity name for Cust_PickListAMapping.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Cust_PickListAMapping.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * optionId.
     * Maximum length: 255.
     * @nullable
     */
    custOptionId?: string;
    /**
     * externalCode.
     * Maximum length: 128.
     */
    externalCode: string;
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
     * Returns an entity builder to construct instances `Cust_PickListAMapping`.
     * @returns A builder that constructs instances of entity type `Cust_PickListAMapping`.
     */
    static builder(): EntityBuilderType<Cust_PickListAMapping, Cust_PickListAMappingTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Cust_PickListAMapping` entity type.
     * @returns A `Cust_PickListAMapping` request builder.
     */
    static requestBuilder(): Cust_PickListAMappingRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Cust_PickListAMapping`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Cust_PickListAMapping`.
     */
    static customField(fieldName: string): CustomField<Cust_PickListAMapping>;
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
export interface Cust_PickListAMappingType {
    createdBy?: string;
    createdDateTime?: Moment;
    custOptionId?: string;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface Cust_PickListAMappingTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    custOptionId: string;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace Cust_PickListAMapping {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<Cust_PickListAMapping>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<Cust_PickListAMapping>;
    /**
     * Static representation of the [[custOptionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_OPTION_ID: StringField<Cust_PickListAMapping>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<Cust_PickListAMapping>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<Cust_PickListAMapping>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<Cust_PickListAMapping>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<Cust_PickListAMapping>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<Cust_PickListAMapping, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<Cust_PickListAMapping, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<Cust_PickListAMapping, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<Cust_PickListAMapping, WfRequest>;
    /**
     * All fields of the Cust_PickListAMapping entity.
     */
    const _allFields: Array<StringField<Cust_PickListAMapping> | DateField<Cust_PickListAMapping> | OneToOneLink<Cust_PickListAMapping, User> | OneToOneLink<Cust_PickListAMapping, MdfEnumValue> | Link<Cust_PickListAMapping, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Cust_PickListAMapping>;
    /**
     * All key fields of the Cust_PickListAMapping entity.
     */
    const _keyFields: Array<Selectable<Cust_PickListAMapping>>;
    /**
     * Mapping of all key field names to the respective static field property Cust_PickListAMapping.
     */
    const _keys: {
        [keys: string]: Selectable<Cust_PickListAMapping>;
    };
}
//# sourceMappingURL=Cust_PickListAMapping.d.ts.map