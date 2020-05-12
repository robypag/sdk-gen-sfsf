import { FoJobClassLocalGbrRequestBuilder } from './FoJobClassLocalGbrRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOJobClassLocalGBR" of service "SFOData".
 */
export declare class FoJobClassLocalGbr extends Entity implements FoJobClassLocalGbrType {
    /**
     * Technical entity name for FoJobClassLocalGbr.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoJobClassLocalGbr.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Job Classification Country/Region_Country/Region.
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
     * standardOccupationalClassificationCode.
     * Maximum length: 128.
     * @nullable
     */
    custStandardOccupationalClassificationCode?: string;
    /**
     * effectiveEndDate.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Job Classification _Job Code.
     * Maximum length: 32.
     */
    externalCode: string;
    /**
     * Occupational Code.
     * @nullable
     */
    genericNumber1?: BigNumber;
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
     * Job Classification _Effective as of.
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
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    custStandardOccupationalClassificationCodeNav: PickListValueV2[];
    /**
     * Returns an entity builder to construct instances `FoJobClassLocalGbr`.
     * @returns A builder that constructs instances of entity type `FoJobClassLocalGbr`.
     */
    static builder(): EntityBuilderType<FoJobClassLocalGbr, FoJobClassLocalGbrTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoJobClassLocalGbr` entity type.
     * @returns A `FoJobClassLocalGbr` request builder.
     */
    static requestBuilder(): FoJobClassLocalGbrRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobClassLocalGbr`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoJobClassLocalGbr`.
     */
    static customField(fieldName: string): CustomField<FoJobClassLocalGbr>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Territory, TerritoryType } from './Territory';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
export interface FoJobClassLocalGbrType {
    country: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    custStandardOccupationalClassificationCode?: string;
    endDate?: Moment;
    externalCode: string;
    genericNumber1?: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    startDate: Moment;
    status?: string;
    countryNav: TerritoryType;
    custStandardOccupationalClassificationCodeNav: PickListValueV2Type[];
}
export interface FoJobClassLocalGbrTypeForceMandatory {
    country: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    custStandardOccupationalClassificationCode: string;
    endDate: Moment;
    externalCode: string;
    genericNumber1: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    startDate: Moment;
    status: string;
    countryNav: TerritoryType;
    custStandardOccupationalClassificationCodeNav: PickListValueV2Type[];
}
export declare namespace FoJobClassLocalGbr {
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<FoJobClassLocalGbr>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoJobClassLocalGbr>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoJobClassLocalGbr>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoJobClassLocalGbr>;
    /**
     * Static representation of the [[custStandardOccupationalClassificationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_STANDARD_OCCUPATIONAL_CLASSIFICATION_CODE: StringField<FoJobClassLocalGbr>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoJobClassLocalGbr>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoJobClassLocalGbr>;
    /**
     * Static representation of the [[genericNumber1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENERIC_NUMBER_1: BigNumberField<FoJobClassLocalGbr>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoJobClassLocalGbr>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoJobClassLocalGbr>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoJobClassLocalGbr>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoJobClassLocalGbr>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoJobClassLocalGbr>;
    /**
     * Static representation of the one-to-one navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: OneToOneLink<FoJobClassLocalGbr, Territory>;
    /**
     * Static representation of the one-to-many navigation property [[custStandardOccupationalClassificationCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_STANDARD_OCCUPATIONAL_CLASSIFICATION_CODE_NAV: Link<FoJobClassLocalGbr, PickListValueV2>;
    /**
     * All fields of the FoJobClassLocalGbr entity.
     */
    const _allFields: Array<StringField<FoJobClassLocalGbr> | DateField<FoJobClassLocalGbr> | BigNumberField<FoJobClassLocalGbr> | OneToOneLink<FoJobClassLocalGbr, Territory> | Link<FoJobClassLocalGbr, PickListValueV2>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoJobClassLocalGbr>;
    /**
     * All key fields of the FoJobClassLocalGbr entity.
     */
    const _keyFields: Array<Selectable<FoJobClassLocalGbr>>;
    /**
     * Mapping of all key field names to the respective static field property FoJobClassLocalGbr.
     */
    const _keys: {
        [keys: string]: Selectable<FoJobClassLocalGbr>;
    };
}
//# sourceMappingURL=FoJobClassLocalGbr.d.ts.map