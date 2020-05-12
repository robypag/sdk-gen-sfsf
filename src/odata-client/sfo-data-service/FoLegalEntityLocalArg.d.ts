import { FoLegalEntityLocalArgRequestBuilder } from './FoLegalEntityLocalArgRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOLegalEntityLocalARG" of service "SFOData".
 */
export declare class FoLegalEntityLocalArg extends Entity implements FoLegalEntityLocalArgType {
    /**
     * Technical entity name for FoLegalEntityLocalArg.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoLegalEntityLocalArg.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * countryOfRegistration.
     * Maximum length: 128.
     */
    country: string;
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
     * createdDate.
     * @nullable
     */
    createdOn?: Moment;
    /**
     * CUIT Code.
     * @nullable
     */
    cuitCode?: BigNumber;
    /**
     * effectiveEndDate.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Legal Entity_Code.
     * Maximum length: 32.
     */
    externalCode: string;
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
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedOn?: Moment;
    /**
     * Legal Entity_Effective as of.
     */
    startDate: Moment;
    /**
     * Status.
     * Maximum length: 255.
     * @nullable
     */
    status?: string;
    /**
     * One-to-one navigation property to the [[Territory]] entity.
     */
    countryNav: Territory;
    /**
     * Returns an entity builder to construct instances `FoLegalEntityLocalArg`.
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalArg`.
     */
    static builder(): EntityBuilderType<FoLegalEntityLocalArg, FoLegalEntityLocalArgTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoLegalEntityLocalArg` entity type.
     * @returns A `FoLegalEntityLocalArg` request builder.
     */
    static requestBuilder(): FoLegalEntityLocalArgRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLegalEntityLocalArg`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalArg`.
     */
    static customField(fieldName: string): CustomField<FoLegalEntityLocalArg>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Territory, TerritoryType } from './Territory';
export interface FoLegalEntityLocalArgType {
    country: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    cuitCode?: BigNumber;
    endDate?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    startDate: Moment;
    status?: string;
    countryNav: TerritoryType;
}
export interface FoLegalEntityLocalArgTypeForceMandatory {
    country: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    cuitCode: BigNumber;
    endDate: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    startDate: Moment;
    status: string;
    countryNav: TerritoryType;
}
export declare namespace FoLegalEntityLocalArg {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<FoLegalEntityLocalArg>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoLegalEntityLocalArg>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoLegalEntityLocalArg>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoLegalEntityLocalArg>;
    /**
     * Static representation of the [[cuitCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUIT_CODE: BigNumberField<FoLegalEntityLocalArg>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoLegalEntityLocalArg>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoLegalEntityLocalArg>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoLegalEntityLocalArg>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoLegalEntityLocalArg>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoLegalEntityLocalArg>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoLegalEntityLocalArg>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoLegalEntityLocalArg>;
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: OneToOneLink<FoLegalEntityLocalArg, Territory>;
    /**
     * All fields of the FoLegalEntityLocalArg entity.
     */
    const _allFields: Array<StringField<FoLegalEntityLocalArg> | DateField<FoLegalEntityLocalArg> | BigNumberField<FoLegalEntityLocalArg> | OneToOneLink<FoLegalEntityLocalArg, Territory>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoLegalEntityLocalArg>;
    /**
     * All key fields of the FoLegalEntityLocalArg entity.
     */
    const _keyFields: Array<Selectable<FoLegalEntityLocalArg>>;
    /**
     * Mapping of all key field names to the respective static field property FoLegalEntityLocalArg.
     */
    const _keys: {
        [keys: string]: Selectable<FoLegalEntityLocalArg>;
    };
}
//# sourceMappingURL=FoLegalEntityLocalArg.d.ts.map