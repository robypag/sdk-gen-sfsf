import { SkillProfileRequestBuilder } from './SkillProfileRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SkillProfile" of service "SFOData".
 */
export declare class SkillProfile extends Entity implements SkillProfileType {
    /**
     * Technical entity name for SkillProfile.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SkillProfile.
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
     * Added.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * User Id.
     * Maximum length: 100.
     */
    externalCode: string;
    /**
     * lastModifiedBy.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified.
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
     * One-to-one navigation property to the [[User]] entity.
     */
    externalCodeNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[RatedSkillMapping]] entity.
     */
    ratedSkills: RatedSkillMapping[];
    /**
     * One-to-many navigation property to the [[SelfReportSkillMapping]] entity.
     */
    selfReportSkills: SelfReportSkillMapping[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `SkillProfile`.
     * @returns A builder that constructs instances of entity type `SkillProfile`.
     */
    static builder(): EntityBuilderType<SkillProfile, SkillProfileTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SkillProfile` entity type.
     * @returns A `SkillProfile` request builder.
     */
    static requestBuilder(): SkillProfileRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SkillProfile`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SkillProfile`.
     */
    static customField(fieldName: string): CustomField<SkillProfile>;
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
import { RatedSkillMapping, RatedSkillMappingType } from './RatedSkillMapping';
import { SelfReportSkillMapping, SelfReportSkillMappingType } from './SelfReportSkillMapping';
import { WfRequest, WfRequestType } from './WfRequest';
export interface SkillProfileType {
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    status?: string;
    createdByNav: UserType;
    externalCodeNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    ratedSkills: RatedSkillMappingType[];
    selfReportSkills: SelfReportSkillMappingType[];
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface SkillProfileTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    status: string;
    createdByNav: UserType;
    externalCodeNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    ratedSkills: RatedSkillMappingType[];
    selfReportSkills: SelfReportSkillMappingType[];
    statusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace SkillProfile {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<SkillProfile>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<SkillProfile>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<SkillProfile>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<SkillProfile>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<SkillProfile>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<SkillProfile>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<SkillProfile>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<SkillProfile, User>;
    /**
     * Static representation of the one-to-one navigation property [[externalCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE_NAV: OneToOneLink<SkillProfile, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<SkillProfile, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SkillProfile, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[ratedSkills]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RATED_SKILLS: Link<SkillProfile, RatedSkillMapping>;
    /**
     * Static representation of the one-to-many navigation property [[selfReportSkills]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SELF_REPORT_SKILLS: Link<SkillProfile, SelfReportSkillMapping>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<SkillProfile, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<SkillProfile, WfRequest>;
    /**
     * All fields of the SkillProfile entity.
     */
    const _allFields: Array<StringField<SkillProfile> | DateField<SkillProfile> | OneToOneLink<SkillProfile, User> | OneToOneLink<SkillProfile, MdfEnumValue> | Link<SkillProfile, RatedSkillMapping> | Link<SkillProfile, SelfReportSkillMapping> | Link<SkillProfile, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SkillProfile>;
    /**
     * All key fields of the SkillProfile entity.
     */
    const _keyFields: Array<Selectable<SkillProfile>>;
    /**
     * Mapping of all key field names to the respective static field property SkillProfile.
     */
    const _keys: {
        [keys: string]: Selectable<SkillProfile>;
    };
}
//# sourceMappingURL=SkillProfile.d.ts.map