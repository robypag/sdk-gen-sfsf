import { LegalEntityUsaRequestBuilder } from './LegalEntityUsaRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "LegalEntityUSA" of service "SFOData".
 */
export declare class LegalEntityUsa extends Entity implements LegalEntityUsaType {
    /**
     * Technical entity name for LegalEntityUsa.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LegalEntityUsa.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Legal Entity_Effective as of.
     */
    legalEntityEffectiveStartDate: Moment;
    /**
     * Legal Entity_Code.
     * Maximum length: 32.
     */
    legalEntityExternalCode: string;
    /**
     * createdBy.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * EEO Company Code.
     * Maximum length: 45.
     * @nullable
     */
    eeoCompanyCode?: string;
    /**
     * Employer ID.
     * Maximum length: 45.
     * @nullable
     */
    employerId?: string;
    /**
     * externalCode.
     */
    externalCode: BigNumber;
    /**
     * Fed Reserve Bank District.
     * Maximum length: 45.
     * @nullable
     */
    fedReserveBankDistrict?: string;
    /**
     * Federal Reserve Bank ID.
     * Maximum length: 45.
     * @nullable
     */
    federalReserveBankId?: string;
    /**
     * lastModifiedBy.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Legal Entity Type.
     * Maximum length: 128.
     * @nullable
     */
    legalEntityType?: string;
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
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    legalEntityTypeNav: PickListValueV2[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `LegalEntityUsa`.
     * @returns A builder that constructs instances of entity type `LegalEntityUsa`.
     */
    static builder(): EntityBuilderType<LegalEntityUsa, LegalEntityUsaTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `LegalEntityUsa` entity type.
     * @returns A `LegalEntityUsa` request builder.
     */
    static requestBuilder(): LegalEntityUsaRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalEntityUsa`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LegalEntityUsa`.
     */
    static customField(fieldName: string): CustomField<LegalEntityUsa>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface LegalEntityUsaType {
    legalEntityEffectiveStartDate: Moment;
    legalEntityExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    eeoCompanyCode?: string;
    employerId?: string;
    externalCode: BigNumber;
    fedReserveBankDistrict?: string;
    federalReserveBankId?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    legalEntityType?: string;
    mdfSystemRecordStatus?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    legalEntityTypeNav: PickListValueV2Type[];
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface LegalEntityUsaTypeForceMandatory {
    legalEntityEffectiveStartDate: Moment;
    legalEntityExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    eeoCompanyCode: string;
    employerId: string;
    externalCode: BigNumber;
    fedReserveBankDistrict: string;
    federalReserveBankId: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    legalEntityType: string;
    mdfSystemRecordStatus: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    legalEntityTypeNav: PickListValueV2Type[];
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace LegalEntityUsa {
    /**
     * Static representation of the [[legalEntityEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_EFFECTIVE_START_DATE: DateField<LegalEntityUsa>;
    /**
     * Static representation of the [[legalEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_EXTERNAL_CODE: StringField<LegalEntityUsa>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<LegalEntityUsa>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<LegalEntityUsa>;
    /**
     * Static representation of the [[eeoCompanyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EEO_COMPANY_CODE: StringField<LegalEntityUsa>;
    /**
     * Static representation of the [[employerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYER_ID: StringField<LegalEntityUsa>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<LegalEntityUsa>;
    /**
     * Static representation of the [[fedReserveBankDistrict]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FED_RESERVE_BANK_DISTRICT: StringField<LegalEntityUsa>;
    /**
     * Static representation of the [[federalReserveBankId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEDERAL_RESERVE_BANK_ID: StringField<LegalEntityUsa>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<LegalEntityUsa>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<LegalEntityUsa>;
    /**
     * Static representation of the [[legalEntityType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_TYPE: StringField<LegalEntityUsa>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<LegalEntityUsa>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<LegalEntityUsa, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<LegalEntityUsa, User>;
    /**
     * Static representation of the one-to-many navigation property [[legalEntityTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_TYPE_NAV: Link<LegalEntityUsa, PickListValueV2>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<LegalEntityUsa, MdfEnumValue>;
    /**
     * All fields of the LegalEntityUsa entity.
     */
    const _allFields: Array<DateField<LegalEntityUsa> | StringField<LegalEntityUsa> | BigNumberField<LegalEntityUsa> | OneToOneLink<LegalEntityUsa, User> | Link<LegalEntityUsa, PickListValueV2> | OneToOneLink<LegalEntityUsa, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<LegalEntityUsa>;
    /**
     * All key fields of the LegalEntityUsa entity.
     */
    const _keyFields: Array<Selectable<LegalEntityUsa>>;
    /**
     * Mapping of all key field names to the respective static field property LegalEntityUsa.
     */
    const _keys: {
        [keys: string]: Selectable<LegalEntityUsa>;
    };
}
//# sourceMappingURL=LegalEntityUsa.d.ts.map