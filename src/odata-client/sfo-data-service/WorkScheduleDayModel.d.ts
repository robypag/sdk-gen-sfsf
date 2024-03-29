import { WorkScheduleDayModelRequestBuilder } from './WorkScheduleDayModelRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "WorkScheduleDayModel" of service "SFOData".
 */
export declare class WorkScheduleDayModel extends Entity implements WorkScheduleDayModelType {
    /**
     * Technical entity name for WorkScheduleDayModel.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WorkScheduleDayModel.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Country/Region.
     * Maximum length: 128.
     * @nullable
     */
    country?: string;
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
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * External Code.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDeDe?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDefaultValue?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnDebug?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnGb?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnUs?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsEs?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsMx?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrCa?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrFr?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameItIt?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameLocalized?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameNlNl?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNamePtBr?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameZhCn?: string;
    /**
     * Planned Hours And Minutes (hh:mm).
     * Maximum length: 255.
     * @nullable
     */
    hoursAndMinutes?: string;
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
     * Shift Classification.
     * Maximum length: 128.
     * @nullable
     */
    shiftClassification?: string;
    /**
     * Time Recording Variant.
     * Maximum length: 255.
     * @nullable
     */
    timeRecordingVariant?: string;
    /**
     * Planned Hours (Decimal).
     * @nullable
     */
    workingHours?: BigNumber;
    /**
     * One-to-many navigation property to the [[Country]] entity.
     */
    countryNav: Country[];
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
     * One-to-many navigation property to the [[WorkScheduleDayModelSegment]] entity.
     */
    segments: WorkScheduleDayModelSegment[];
    /**
     * One-to-one navigation property to the [[ShiftClassification]] entity.
     */
    shiftClassificationNav: ShiftClassification;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    timeRecordingVariantNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `WorkScheduleDayModel`.
     * @returns A builder that constructs instances of entity type `WorkScheduleDayModel`.
     */
    static builder(): EntityBuilderType<WorkScheduleDayModel, WorkScheduleDayModelTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WorkScheduleDayModel` entity type.
     * @returns A `WorkScheduleDayModel` request builder.
     */
    static requestBuilder(): WorkScheduleDayModelRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkScheduleDayModel`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WorkScheduleDayModel`.
     */
    static customField(fieldName: string): CustomField<WorkScheduleDayModel>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Country, CountryType } from './Country';
import { User, UserType } from './User';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WorkScheduleDayModelSegment, WorkScheduleDayModelSegmentType } from './WorkScheduleDayModelSegment';
import { ShiftClassification, ShiftClassificationType } from './ShiftClassification';
import { WfRequest, WfRequestType } from './WfRequest';
export interface WorkScheduleDayModelType {
    country?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    description?: string;
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
    hoursAndMinutes?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    shiftClassification?: string;
    timeRecordingVariant?: string;
    workingHours?: BigNumber;
    countryNav: CountryType[];
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    segments: WorkScheduleDayModelSegmentType[];
    shiftClassificationNav: ShiftClassificationType;
    timeRecordingVariantNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface WorkScheduleDayModelTypeForceMandatory {
    country: string;
    createdBy: string;
    createdDateTime: Moment;
    description: string;
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
    hoursAndMinutes: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    shiftClassification: string;
    timeRecordingVariant: string;
    workingHours: BigNumber;
    countryNav: CountryType[];
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    segments: WorkScheduleDayModelSegmentType[];
    shiftClassificationNav: ShiftClassificationType;
    timeRecordingVariantNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace WorkScheduleDayModel {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_DEBUG: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_MX: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_CA: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_IT_IT: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[hoursAndMinutes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOURS_AND_MINUTES: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[shiftClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIFT_CLASSIFICATION: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[timeRecordingVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_RECORDING_VARIANT: StringField<WorkScheduleDayModel>;
    /**
     * Static representation of the [[workingHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORKING_HOURS: BigNumberField<WorkScheduleDayModel>;
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: Link<WorkScheduleDayModel, Country>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<WorkScheduleDayModel, User>;
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<WorkScheduleDayModel, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<WorkScheduleDayModel, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<WorkScheduleDayModel, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[segments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEGMENTS: Link<WorkScheduleDayModel, WorkScheduleDayModelSegment>;
    /**
     * Static representation of the one-to-one navigation property [[shiftClassificationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIFT_CLASSIFICATION_NAV: OneToOneLink<WorkScheduleDayModel, ShiftClassification>;
    /**
     * Static representation of the one-to-one navigation property [[timeRecordingVariantNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_RECORDING_VARIANT_NAV: OneToOneLink<WorkScheduleDayModel, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<WorkScheduleDayModel, WfRequest>;
    /**
     * All fields of the WorkScheduleDayModel entity.
     */
    const _allFields: Array<StringField<WorkScheduleDayModel> | DateField<WorkScheduleDayModel> | BigNumberField<WorkScheduleDayModel> | Link<WorkScheduleDayModel, Country> | OneToOneLink<WorkScheduleDayModel, User> | Link<WorkScheduleDayModel, MdfLocalizedValue> | OneToOneLink<WorkScheduleDayModel, MdfEnumValue> | Link<WorkScheduleDayModel, WorkScheduleDayModelSegment> | OneToOneLink<WorkScheduleDayModel, ShiftClassification> | Link<WorkScheduleDayModel, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WorkScheduleDayModel>;
    /**
     * All key fields of the WorkScheduleDayModel entity.
     */
    const _keyFields: Array<Selectable<WorkScheduleDayModel>>;
    /**
     * Mapping of all key field names to the respective static field property WorkScheduleDayModel.
     */
    const _keys: {
        [keys: string]: Selectable<WorkScheduleDayModel>;
    };
}
//# sourceMappingURL=WorkScheduleDayModel.d.ts.map