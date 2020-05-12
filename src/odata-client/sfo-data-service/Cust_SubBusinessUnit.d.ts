import { Cust_SubBusinessUnitRequestBuilder } from './Cust_SubBusinessUnitRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "cust_SubBusinessUnit" of service "SFOData".
 */
export declare class Cust_SubBusinessUnit extends Entity implements Cust_SubBusinessUnitType {
    /**
     * Technical entity name for Cust_SubBusinessUnit.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Cust_SubBusinessUnit.
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
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    custDescription?: string;
    /**
     * End Date.
     * @nullable
     */
    custEffectiveEndDate?: Moment;
    /**
     * Start Date.
     */
    effectiveStartDate: Moment;
    /**
     * ID.
     * Maximum length: 32.
     */
    externalCode: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    externalName?: string;
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
     * Effective End Date.
     * @nullable
     */
    mdfSystemEffectiveEndDate?: Moment;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemStatus?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[FoCompany]] entity.
     */
    custLegalEntity: FoCompany[];
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
    mdfSystemStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `Cust_SubBusinessUnit`.
     * @returns A builder that constructs instances of entity type `Cust_SubBusinessUnit`.
     */
    static builder(): EntityBuilderType<Cust_SubBusinessUnit, Cust_SubBusinessUnitTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Cust_SubBusinessUnit` entity type.
     * @returns A `Cust_SubBusinessUnit` request builder.
     */
    static requestBuilder(): Cust_SubBusinessUnitRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Cust_SubBusinessUnit`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Cust_SubBusinessUnit`.
     */
    static customField(fieldName: string): CustomField<Cust_SubBusinessUnit>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { FoCompany, FoCompanyType } from './FoCompany';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface Cust_SubBusinessUnitType {
    createdBy?: string;
    createdDateTime?: Moment;
    custDescription?: string;
    custEffectiveEndDate?: Moment;
    effectiveStartDate: Moment;
    externalCode: string;
    externalName?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemEffectiveEndDate?: Moment;
    mdfSystemRecordStatus?: string;
    mdfSystemStatus?: string;
    createdByNav: UserType;
    custLegalEntity: FoCompanyType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    mdfSystemStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface Cust_SubBusinessUnitTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    custDescription: string;
    custEffectiveEndDate: Moment;
    effectiveStartDate: Moment;
    externalCode: string;
    externalName: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemEffectiveEndDate: Moment;
    mdfSystemRecordStatus: string;
    mdfSystemStatus: string;
    createdByNav: UserType;
    custLegalEntity: FoCompanyType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    mdfSystemStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace Cust_SubBusinessUnit {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<Cust_SubBusinessUnit>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<Cust_SubBusinessUnit>;
    /**
     * Static representation of the [[custDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_DESCRIPTION: StringField<Cust_SubBusinessUnit>;
    /**
     * Static representation of the [[custEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_EFFECTIVE_END_DATE: DateField<Cust_SubBusinessUnit>;
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_START_DATE: DateField<Cust_SubBusinessUnit>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<Cust_SubBusinessUnit>;
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME: StringField<Cust_SubBusinessUnit>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<Cust_SubBusinessUnit>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<Cust_SubBusinessUnit>;
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<Cust_SubBusinessUnit>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<Cust_SubBusinessUnit>;
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_STATUS: StringField<Cust_SubBusinessUnit>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<Cust_SubBusinessUnit, User>;
    /**
     * Static representation of the one-to-many navigation property [[custLegalEntity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_LEGAL_ENTITY: Link<Cust_SubBusinessUnit, FoCompany>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<Cust_SubBusinessUnit, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<Cust_SubBusinessUnit, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_STATUS_NAV: OneToOneLink<Cust_SubBusinessUnit, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<Cust_SubBusinessUnit, WfRequest>;
    /**
     * All fields of the Cust_SubBusinessUnit entity.
     */
    const _allFields: Array<StringField<Cust_SubBusinessUnit> | DateField<Cust_SubBusinessUnit> | OneToOneLink<Cust_SubBusinessUnit, User> | Link<Cust_SubBusinessUnit, FoCompany> | OneToOneLink<Cust_SubBusinessUnit, MdfEnumValue> | Link<Cust_SubBusinessUnit, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Cust_SubBusinessUnit>;
    /**
     * All key fields of the Cust_SubBusinessUnit entity.
     */
    const _keyFields: Array<Selectable<Cust_SubBusinessUnit>>;
    /**
     * Mapping of all key field names to the respective static field property Cust_SubBusinessUnit.
     */
    const _keys: {
        [keys: string]: Selectable<Cust_SubBusinessUnit>;
    };
}
//# sourceMappingURL=Cust_SubBusinessUnit.d.ts.map