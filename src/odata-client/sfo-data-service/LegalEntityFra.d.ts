import { LegalEntityFraRequestBuilder } from './LegalEntityFraRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "LegalEntityFRA" of service "SFOData".
 */
export declare class LegalEntityFra extends Entity implements LegalEntityFraType {
    /**
     * Technical entity name for LegalEntityFra.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LegalEntityFra.
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
     * externalCode.
     */
    externalCode: BigNumber;
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
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * NAF Code Pre-2008.
     * @nullable
     */
    nafCode?: BigNumber;
    /**
     * NAF Code Post-2008.
     * Maximum length: 45.
     * @nullable
     */
    nafCodePost2008?: string;
    /**
     * Siren Code.
     * @nullable
     */
    sirenCode?: BigNumber;
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
     * Returns an entity builder to construct instances `LegalEntityFra`.
     * @returns A builder that constructs instances of entity type `LegalEntityFra`.
     */
    static builder(): EntityBuilderType<LegalEntityFra, LegalEntityFraTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `LegalEntityFra` entity type.
     * @returns A `LegalEntityFra` request builder.
     */
    static requestBuilder(): LegalEntityFraRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalEntityFra`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LegalEntityFra`.
     */
    static customField(fieldName: string): CustomField<LegalEntityFra>;
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
export interface LegalEntityFraType {
    legalEntityEffectiveStartDate: Moment;
    legalEntityExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    nafCode?: BigNumber;
    nafCodePost2008?: string;
    sirenCode?: BigNumber;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface LegalEntityFraTypeForceMandatory {
    legalEntityEffectiveStartDate: Moment;
    legalEntityExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    nafCode: BigNumber;
    nafCodePost2008: string;
    sirenCode: BigNumber;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace LegalEntityFra {
    /**
     * Static representation of the [[legalEntityEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_EFFECTIVE_START_DATE: DateField<LegalEntityFra>;
    /**
     * Static representation of the [[legalEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_EXTERNAL_CODE: StringField<LegalEntityFra>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<LegalEntityFra>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<LegalEntityFra>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<LegalEntityFra>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<LegalEntityFra>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<LegalEntityFra>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<LegalEntityFra>;
    /**
     * Static representation of the [[nafCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAF_CODE: BigNumberField<LegalEntityFra>;
    /**
     * Static representation of the [[nafCodePost2008]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAF_CODE_POST_2008: StringField<LegalEntityFra>;
    /**
     * Static representation of the [[sirenCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SIREN_CODE: BigNumberField<LegalEntityFra>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<LegalEntityFra, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<LegalEntityFra, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<LegalEntityFra, MdfEnumValue>;
    /**
     * All fields of the LegalEntityFra entity.
     */
    const _allFields: Array<DateField<LegalEntityFra> | StringField<LegalEntityFra> | BigNumberField<LegalEntityFra> | OneToOneLink<LegalEntityFra, User> | OneToOneLink<LegalEntityFra, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<LegalEntityFra>;
    /**
     * All key fields of the LegalEntityFra entity.
     */
    const _keyFields: Array<Selectable<LegalEntityFra>>;
    /**
     * Mapping of all key field names to the respective static field property LegalEntityFra.
     */
    const _keys: {
        [keys: string]: Selectable<LegalEntityFra>;
    };
}
//# sourceMappingURL=LegalEntityFra.d.ts.map