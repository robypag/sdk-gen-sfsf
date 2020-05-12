import { HireDateChangeRequestBuilder } from './HireDateChangeRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "HireDateChange" of service "SFOData".
 */
export declare class HireDateChange extends Entity implements HireDateChangeType {
    /**
     * Technical entity name for HireDateChange.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for HireDateChange.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Correction Name.
     * Maximum length: 128.
     */
    code: string;
    /**
     * Created By.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created Date.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Last Modified By.
     * Maximum length: 255.
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
     * New hire date.
     * @nullable
     */
    newHireDate?: Moment;
    /**
     * Current hire date.
     * @nullable
     */
    originalHireDate?: Moment;
    /**
     * Status.
     * Maximum length: 128.
     * @nullable
     */
    processingStatus?: string;
    /**
     * Employee.
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
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    processingStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    usersSysIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `HireDateChange`.
     * @returns A builder that constructs instances of entity type `HireDateChange`.
     */
    static builder(): EntityBuilderType<HireDateChange, HireDateChangeTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `HireDateChange` entity type.
     * @returns A `HireDateChange` request builder.
     */
    static requestBuilder(): HireDateChangeRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `HireDateChange`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `HireDateChange`.
     */
    static customField(fieldName: string): CustomField<HireDateChange>;
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
export interface HireDateChangeType {
    code: string;
    createdBy?: string;
    createdDateTime?: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    newHireDate?: Moment;
    originalHireDate?: Moment;
    processingStatus?: string;
    usersSysId?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    processingStatusNav: MdfEnumValueType;
    usersSysIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface HireDateChangeTypeForceMandatory {
    code: string;
    createdBy: string;
    createdDateTime: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    newHireDate: Moment;
    originalHireDate: Moment;
    processingStatus: string;
    usersSysId: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    processingStatusNav: MdfEnumValueType;
    usersSysIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace HireDateChange {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<HireDateChange>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<HireDateChange>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<HireDateChange>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<HireDateChange>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<HireDateChange>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<HireDateChange>;
    /**
     * Static representation of the [[newHireDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEW_HIRE_DATE: DateField<HireDateChange>;
    /**
     * Static representation of the [[originalHireDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGINAL_HIRE_DATE: DateField<HireDateChange>;
    /**
     * Static representation of the [[processingStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESSING_STATUS: StringField<HireDateChange>;
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID: StringField<HireDateChange>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<HireDateChange, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<HireDateChange, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<HireDateChange, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[processingStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESSING_STATUS_NAV: OneToOneLink<HireDateChange, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[usersSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID_NAV: OneToOneLink<HireDateChange, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<HireDateChange, WfRequest>;
    /**
     * All fields of the HireDateChange entity.
     */
    const _allFields: Array<StringField<HireDateChange> | DateField<HireDateChange> | OneToOneLink<HireDateChange, User> | OneToOneLink<HireDateChange, MdfEnumValue> | Link<HireDateChange, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<HireDateChange>;
    /**
     * All key fields of the HireDateChange entity.
     */
    const _keyFields: Array<Selectable<HireDateChange>>;
    /**
     * Mapping of all key field names to the respective static field property HireDateChange.
     */
    const _keys: {
        [keys: string]: Selectable<HireDateChange>;
    };
}
//# sourceMappingURL=HireDateChange.d.ts.map