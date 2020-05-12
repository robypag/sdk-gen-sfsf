import { NameFormatGoRequestBuilder } from './NameFormatGoRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "NameFormatGO" of service "SFOData".
 */
export declare class NameFormatGo extends Entity implements NameFormatGoType {
    /**
     * Technical entity name for NameFormatGo.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for NameFormatGo.
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
     * Name Format Code.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * Name Format Description.
     * Maximum length: 128.
     * @nullable
     */
    externalNameDeDe?: string;
    /**
     * Name Format Description.
     * Maximum length: 128.
     * @nullable
     */
    externalNameDefaultValue?: string;
    /**
     * Name Format Description.
     * Maximum length: 128.
     * @nullable
     */
    externalNameEnDebug?: string;
    /**
     * Name Format Description.
     * Maximum length: 128.
     * @nullable
     */
    externalNameEnGb?: string;
    /**
     * Name Format Description.
     * Maximum length: 128.
     * @nullable
     */
    externalNameEnUs?: string;
    /**
     * Name Format Description.
     * Maximum length: 128.
     * @nullable
     */
    externalNameEsEs?: string;
    /**
     * Name Format Description.
     * Maximum length: 128.
     * @nullable
     */
    externalNameEsMx?: string;
    /**
     * Name Format Description.
     * Maximum length: 128.
     * @nullable
     */
    externalNameFrCa?: string;
    /**
     * Name Format Description.
     * Maximum length: 128.
     * @nullable
     */
    externalNameFrFr?: string;
    /**
     * Name Format Description.
     * Maximum length: 128.
     * @nullable
     */
    externalNameItIt?: string;
    /**
     * Name Format Description.
     * Maximum length: 128.
     * @nullable
     */
    externalNameLocalized?: string;
    /**
     * Name Format Description.
     * Maximum length: 128.
     * @nullable
     */
    externalNameNlNl?: string;
    /**
     * Name Format Description.
     * Maximum length: 128.
     * @nullable
     */
    externalNamePtBr?: string;
    /**
     * Name Format Description.
     * Maximum length: 128.
     * @nullable
     */
    externalNameZhCn?: string;
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
     * Preview.
     * Maximum length: 255.
     * @nullable
     */
    sample?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    externalNameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[NameElementGo]] entity.
     */
    nameElements: NameElementGo[];
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `NameFormatGo`.
     * @returns A builder that constructs instances of entity type `NameFormatGo`.
     */
    static builder(): EntityBuilderType<NameFormatGo, NameFormatGoTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `NameFormatGo` entity type.
     * @returns A `NameFormatGo` request builder.
     */
    static requestBuilder(): NameFormatGoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `NameFormatGo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `NameFormatGo`.
     */
    static customField(fieldName: string): CustomField<NameFormatGo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { NameElementGo, NameElementGoType } from './NameElementGo';
import { WfRequest, WfRequestType } from './WfRequest';
export interface NameFormatGoType {
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    externalNameDeDe?: string;
    externalNameDefaultValue?: string;
    externalNameEnDebug?: string;
    externalNameEnGb?: string;
    externalNameEnUs?: string;
    externalNameEsEs?: string;
    externalNameEsMx?: string;
    externalNameFrCa?: string;
    externalNameFrFr?: string;
    externalNameItIt?: string;
    externalNameLocalized?: string;
    externalNameNlNl?: string;
    externalNamePtBr?: string;
    externalNameZhCn?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    sample?: string;
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameElements: NameElementGoType[];
    wfRequestNav: WfRequestType[];
}
export interface NameFormatGoTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    externalNameDeDe: string;
    externalNameDefaultValue: string;
    externalNameEnDebug: string;
    externalNameEnGb: string;
    externalNameEnUs: string;
    externalNameEsEs: string;
    externalNameEsMx: string;
    externalNameFrCa: string;
    externalNameFrFr: string;
    externalNameItIt: string;
    externalNameLocalized: string;
    externalNameNlNl: string;
    externalNamePtBr: string;
    externalNameZhCn: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    sample: string;
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameElements: NameElementGoType[];
    wfRequestNav: WfRequestType[];
}
export declare namespace NameFormatGo {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<NameFormatGo>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<NameFormatGo>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<NameFormatGo>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<NameFormatGo>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<NameFormatGo>;
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_DEBUG: StringField<NameFormatGo>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<NameFormatGo>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<NameFormatGo>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<NameFormatGo>;
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_MX: StringField<NameFormatGo>;
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_CA: StringField<NameFormatGo>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<NameFormatGo>;
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_IT_IT: StringField<NameFormatGo>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<NameFormatGo>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<NameFormatGo>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<NameFormatGo>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<NameFormatGo>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<NameFormatGo>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<NameFormatGo>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<NameFormatGo>;
    /**
     * Static representation of the [[sample]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SAMPLE: StringField<NameFormatGo>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<NameFormatGo, User>;
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<NameFormatGo, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<NameFormatGo, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<NameFormatGo, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[nameElements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ELEMENTS: Link<NameFormatGo, NameElementGo>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<NameFormatGo, WfRequest>;
    /**
     * All fields of the NameFormatGo entity.
     */
    const _allFields: Array<StringField<NameFormatGo> | DateField<NameFormatGo> | OneToOneLink<NameFormatGo, User> | Link<NameFormatGo, MdfLocalizedValue> | OneToOneLink<NameFormatGo, MdfEnumValue> | Link<NameFormatGo, NameElementGo> | Link<NameFormatGo, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<NameFormatGo>;
    /**
     * All key fields of the NameFormatGo entity.
     */
    const _keyFields: Array<Selectable<NameFormatGo>>;
    /**
     * Mapping of all key field names to the respective static field property NameFormatGo.
     */
    const _keys: {
        [keys: string]: Selectable<NameFormatGo>;
    };
}
//# sourceMappingURL=NameFormatGo.d.ts.map