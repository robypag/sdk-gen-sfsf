import { LegalEntityArgRequestBuilder } from './LegalEntityArgRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "LegalEntityARG" of service "SFOData".
 */
export declare class LegalEntityArg extends Entity implements LegalEntityArgType {
    /**
     * Technical entity name for LegalEntityArg.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LegalEntityArg.
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
     * CUIT Code.
     * Maximum length: 11.
     * @nullable
     */
    cuit?: string;
    /**
     * CUIT Code.
     * @nullable
     */
    cuitCode?: BigNumber;
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
     * Returns an entity builder to construct instances `LegalEntityArg`.
     * @returns A builder that constructs instances of entity type `LegalEntityArg`.
     */
    static builder(): EntityBuilderType<LegalEntityArg, LegalEntityArgTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `LegalEntityArg` entity type.
     * @returns A `LegalEntityArg` request builder.
     */
    static requestBuilder(): LegalEntityArgRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalEntityArg`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LegalEntityArg`.
     */
    static customField(fieldName: string): CustomField<LegalEntityArg>;
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
export interface LegalEntityArgType {
    legalEntityEffectiveStartDate: Moment;
    legalEntityExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    cuit?: string;
    cuitCode?: BigNumber;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface LegalEntityArgTypeForceMandatory {
    legalEntityEffectiveStartDate: Moment;
    legalEntityExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    cuit: string;
    cuitCode: BigNumber;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace LegalEntityArg {
    /**
     * Static representation of the [[legalEntityEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_EFFECTIVE_START_DATE: DateField<LegalEntityArg>;
    /**
     * Static representation of the [[legalEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_EXTERNAL_CODE: StringField<LegalEntityArg>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<LegalEntityArg>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<LegalEntityArg>;
    /**
     * Static representation of the [[cuit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUIT: StringField<LegalEntityArg>;
    /**
     * Static representation of the [[cuitCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUIT_CODE: BigNumberField<LegalEntityArg>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<LegalEntityArg>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<LegalEntityArg>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<LegalEntityArg>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<LegalEntityArg>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<LegalEntityArg, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<LegalEntityArg, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<LegalEntityArg, MdfEnumValue>;
    /**
     * All fields of the LegalEntityArg entity.
     */
    const _allFields: Array<DateField<LegalEntityArg> | StringField<LegalEntityArg> | BigNumberField<LegalEntityArg> | OneToOneLink<LegalEntityArg, User> | OneToOneLink<LegalEntityArg, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<LegalEntityArg>;
    /**
     * All key fields of the LegalEntityArg entity.
     */
    const _keyFields: Array<Selectable<LegalEntityArg>>;
    /**
     * Mapping of all key field names to the respective static field property LegalEntityArg.
     */
    const _keys: {
        [keys: string]: Selectable<LegalEntityArg>;
    };
}
//# sourceMappingURL=LegalEntityArg.d.ts.map