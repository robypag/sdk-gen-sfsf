import { FoEventReasonRequestBuilder } from './FoEventReasonRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOEventReason" of service "SFOData".
 */
export declare class FoEventReason extends Entity implements FoEventReasonType {
    /**
     * Technical entity name for FoEventReason.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoEventReason.
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
     * Created Date Time.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Created On.
     * @nullable
     */
    createdOn?: Moment;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    description?: string;
    /**
     * Employee Status.
     * Maximum length: 45.
     * @nullable
     */
    emplStatus?: string;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Event.
     * Maximum length: 45.
     * @nullable
     */
    event?: string;
    /**
     * Event ID.
     * Maximum length: 32.
     */
    externalCode: string;
    /**
     * Follow-Up Activity in Position.
     * @nullable
     */
    implicitPositionAction?: BigNumber;
    /**
     * Display in Internal Job History Portlet.
     * @nullable
     */
    includeInWorkExperience?: boolean;
    /**
     * Last Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date Time.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Last Modified On.
     * @nullable
     */
    lastModifiedOn?: Moment;
    /**
     * Event Name.
     * Maximum length: 32.
     * @nullable
     */
    name?: string;
    /**
     * Payroll Event.
     * Maximum length: 4.
     * @nullable
     */
    payrollEvent?: string;
    /**
     * Start Date.
     */
    startDate: Moment;
    /**
     * Status.
     * @nullable
     */
    status?: string;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    descriptionTranslationNav: FoTranslation;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    emplStatusNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    eventNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    implicitPositionActionNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    nameTranslationNav: FoTranslation;
    /**
     * Returns an entity builder to construct instances `FoEventReason`.
     * @returns A builder that constructs instances of entity type `FoEventReason`.
     */
    static builder(): EntityBuilderType<FoEventReason, FoEventReasonTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoEventReason` entity type.
     * @returns A `FoEventReason` request builder.
     */
    static requestBuilder(): FoEventReasonRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoEventReason`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoEventReason`.
     */
    static customField(fieldName: string): CustomField<FoEventReason>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
export interface FoEventReasonType {
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    description?: string;
    emplStatus?: string;
    endDate?: Moment;
    event?: string;
    externalCode: string;
    implicitPositionAction?: BigNumber;
    includeInWorkExperience?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    name?: string;
    payrollEvent?: string;
    startDate: Moment;
    status?: string;
    descriptionTranslationNav: FoTranslationType;
    emplStatusNav: PicklistOptionType;
    eventNav: PicklistOptionType;
    implicitPositionActionNav: PicklistOptionType;
    nameTranslationNav: FoTranslationType;
}
export interface FoEventReasonTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    description: string;
    emplStatus: string;
    endDate: Moment;
    event: string;
    externalCode: string;
    implicitPositionAction: BigNumber;
    includeInWorkExperience: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    name: string;
    payrollEvent: string;
    startDate: Moment;
    status: string;
    descriptionTranslationNav: FoTranslationType;
    emplStatusNav: PicklistOptionType;
    eventNav: PicklistOptionType;
    implicitPositionActionNav: PicklistOptionType;
    nameTranslationNav: FoTranslationType;
}
export declare namespace FoEventReason {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoEventReason>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoEventReason>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoEventReason>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FoEventReason>;
    /**
     * Static representation of the [[emplStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPL_STATUS: StringField<FoEventReason>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoEventReason>;
    /**
     * Static representation of the [[event]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT: StringField<FoEventReason>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoEventReason>;
    /**
     * Static representation of the [[implicitPositionAction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IMPLICIT_POSITION_ACTION: BigNumberField<FoEventReason>;
    /**
     * Static representation of the [[includeInWorkExperience]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCLUDE_IN_WORK_EXPERIENCE: BooleanField<FoEventReason>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoEventReason>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoEventReason>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoEventReason>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FoEventReason>;
    /**
     * Static representation of the [[payrollEvent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_EVENT: StringField<FoEventReason>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoEventReason>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoEventReason>;
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoEventReason, FoTranslation>;
    /**
     * Static representation of the one-to-one navigation property [[emplStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPL_STATUS_NAV: OneToOneLink<FoEventReason, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[eventNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_NAV: OneToOneLink<FoEventReason, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[implicitPositionActionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IMPLICIT_POSITION_ACTION_NAV: OneToOneLink<FoEventReason, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_NAV: OneToOneLink<FoEventReason, FoTranslation>;
    /**
     * All fields of the FoEventReason entity.
     */
    const _allFields: Array<StringField<FoEventReason> | DateField<FoEventReason> | BigNumberField<FoEventReason> | BooleanField<FoEventReason> | OneToOneLink<FoEventReason, FoTranslation> | OneToOneLink<FoEventReason, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoEventReason>;
    /**
     * All key fields of the FoEventReason entity.
     */
    const _keyFields: Array<Selectable<FoEventReason>>;
    /**
     * Mapping of all key field names to the respective static field property FoEventReason.
     */
    const _keys: {
        [keys: string]: Selectable<FoEventReason>;
    };
}
//# sourceMappingURL=FoEventReason.d.ts.map