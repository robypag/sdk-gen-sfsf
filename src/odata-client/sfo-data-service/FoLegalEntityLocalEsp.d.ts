import { FoLegalEntityLocalEspRequestBuilder } from './FoLegalEntityLocalEspRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOLegalEntityLocalESP" of service "SFOData".
 */
export declare class FoLegalEntityLocalEsp extends Entity implements FoLegalEntityLocalEspType {
    /**
     * Technical entity name for FoLegalEntityLocalEsp.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoLegalEntityLocalEsp.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Certificado de Identificación Fiscal.
     * Maximum length: 45.
     * @nullable
     */
    certificadoDeIdentificacionFiscal?: string;
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
     * Returns an entity builder to construct instances `FoLegalEntityLocalEsp`.
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalEsp`.
     */
    static builder(): EntityBuilderType<FoLegalEntityLocalEsp, FoLegalEntityLocalEspTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoLegalEntityLocalEsp` entity type.
     * @returns A `FoLegalEntityLocalEsp` request builder.
     */
    static requestBuilder(): FoLegalEntityLocalEspRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoLegalEntityLocalEsp`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoLegalEntityLocalEsp`.
     */
    static customField(fieldName: string): CustomField<FoLegalEntityLocalEsp>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Territory, TerritoryType } from './Territory';
export interface FoLegalEntityLocalEspType {
    certificadoDeIdentificacionFiscal?: string;
    country: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    endDate?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    startDate: Moment;
    status?: string;
    countryNav: TerritoryType;
}
export interface FoLegalEntityLocalEspTypeForceMandatory {
    certificadoDeIdentificacionFiscal: string;
    country: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    endDate: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    startDate: Moment;
    status: string;
    countryNav: TerritoryType;
}
export declare namespace FoLegalEntityLocalEsp {
    /**
     * Static representation of the [[certificadoDeIdentificacionFiscal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CERTIFICADO_DE_IDENTIFICACION_FISCAL: StringField<FoLegalEntityLocalEsp>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<FoLegalEntityLocalEsp>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoLegalEntityLocalEsp>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoLegalEntityLocalEsp>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoLegalEntityLocalEsp>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoLegalEntityLocalEsp>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoLegalEntityLocalEsp>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoLegalEntityLocalEsp>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoLegalEntityLocalEsp>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoLegalEntityLocalEsp>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoLegalEntityLocalEsp>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoLegalEntityLocalEsp>;
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: OneToOneLink<FoLegalEntityLocalEsp, Territory>;
    /**
     * All fields of the FoLegalEntityLocalEsp entity.
     */
    const _allFields: Array<StringField<FoLegalEntityLocalEsp> | DateField<FoLegalEntityLocalEsp> | OneToOneLink<FoLegalEntityLocalEsp, Territory>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoLegalEntityLocalEsp>;
    /**
     * All key fields of the FoLegalEntityLocalEsp entity.
     */
    const _keyFields: Array<Selectable<FoLegalEntityLocalEsp>>;
    /**
     * Mapping of all key field names to the respective static field property FoLegalEntityLocalEsp.
     */
    const _keys: {
        [keys: string]: Selectable<FoLegalEntityLocalEsp>;
    };
}
//# sourceMappingURL=FoLegalEntityLocalEsp.d.ts.map