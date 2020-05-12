import { NameElementGoRequestBuilder } from './NameElementGoRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "NameElementGO" of service "SFOData".
 */
export declare class NameElementGo extends Entity implements NameElementGoType {
    /**
     * Technical entity name for NameElementGo.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for NameElementGo.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Name Format_Name Format Code.
     * Maximum length: 128.
     */
    nameFormatGoExternalCode: string;
    /**
     * Alternative Name Element.
     * Maximum length: 128.
     * @nullable
     */
    alternativeNameArtifactEnum?: string;
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
     * Name Element.
     * Maximum length: 255.
     * @nullable
     */
    nameArtifactEnum?: string;
    /**
     * Value.
     * Maximum length: 255.
     * @nullable
     */
    sampleData?: string;
    /**
     * Separator.
     * Maximum length: 255.
     * @nullable
     */
    separator?: string;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    alternativeNameArtifactEnumNav: MdfEnumValue;
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
    nameArtifactEnumNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `NameElementGo`.
     * @returns A builder that constructs instances of entity type `NameElementGo`.
     */
    static builder(): EntityBuilderType<NameElementGo, NameElementGoTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `NameElementGo` entity type.
     * @returns A `NameElementGo` request builder.
     */
    static requestBuilder(): NameElementGoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `NameElementGo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `NameElementGo`.
     */
    static customField(fieldName: string): CustomField<NameElementGo>;
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
export interface NameElementGoType {
    nameFormatGoExternalCode: string;
    alternativeNameArtifactEnum?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    nameArtifactEnum?: string;
    sampleData?: string;
    separator?: string;
    alternativeNameArtifactEnumNav: MdfEnumValueType;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameArtifactEnumNav: MdfEnumValueType;
}
export interface NameElementGoTypeForceMandatory {
    nameFormatGoExternalCode: string;
    alternativeNameArtifactEnum: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    nameArtifactEnum: string;
    sampleData: string;
    separator: string;
    alternativeNameArtifactEnumNav: MdfEnumValueType;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameArtifactEnumNav: MdfEnumValueType;
}
export declare namespace NameElementGo {
    /**
     * Static representation of the [[nameFormatGoExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FORMAT_GO_EXTERNAL_CODE: StringField<NameElementGo>;
    /**
     * Static representation of the [[alternativeNameArtifactEnum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALTERNATIVE_NAME_ARTIFACT_ENUM: StringField<NameElementGo>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<NameElementGo>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<NameElementGo>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<NameElementGo>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<NameElementGo>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<NameElementGo>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<NameElementGo>;
    /**
     * Static representation of the [[nameArtifactEnum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ARTIFACT_ENUM: StringField<NameElementGo>;
    /**
     * Static representation of the [[sampleData]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SAMPLE_DATA: StringField<NameElementGo>;
    /**
     * Static representation of the [[separator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEPARATOR: StringField<NameElementGo>;
    /**
     * Static representation of the one-to-one navigation property [[alternativeNameArtifactEnumNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALTERNATIVE_NAME_ARTIFACT_ENUM_NAV: OneToOneLink<NameElementGo, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<NameElementGo, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<NameElementGo, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<NameElementGo, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[nameArtifactEnumNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ARTIFACT_ENUM_NAV: OneToOneLink<NameElementGo, MdfEnumValue>;
    /**
     * All fields of the NameElementGo entity.
     */
    const _allFields: Array<StringField<NameElementGo> | DateField<NameElementGo> | OneToOneLink<NameElementGo, MdfEnumValue> | OneToOneLink<NameElementGo, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<NameElementGo>;
    /**
     * All key fields of the NameElementGo entity.
     */
    const _keyFields: Array<Selectable<NameElementGo>>;
    /**
     * Mapping of all key field names to the respective static field property NameElementGo.
     */
    const _keys: {
        [keys: string]: Selectable<NameElementGo>;
    };
}
//# sourceMappingURL=NameElementGo.d.ts.map