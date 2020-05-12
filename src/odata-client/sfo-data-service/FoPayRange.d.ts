import { FoPayRangeRequestBuilder } from './FoPayRangeRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOPayRange" of service "SFOData".
 */
export declare class FoPayRange extends Entity implements FoPayRangeType {
    /**
     * Technical entity name for FoPayRange.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoPayRange.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * companyFlx.
     * Maximum length: 32.
     * @nullable
     */
    companyFlx?: string;
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
     * Currency.
     * Maximum length: 45.
     * @nullable
     */
    currency?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    description?: string;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Pay Range ID.
     * Maximum length: 32.
     */
    externalCode: string;
    /**
     * Frequency.
     * @nullable
     */
    frequencyCode?: string;
    /**
     * geozoneFlx.
     * Maximum length: 32.
     * @nullable
     */
    geozoneFlx?: string;
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
     * Maximum Pay.
     * @nullable
     */
    maximumPay?: BigNumber;
    /**
     * Mid Point.
     * @nullable
     */
    midPoint?: BigNumber;
    /**
     * Minimum Pay.
     * @nullable
     */
    minimumPay?: BigNumber;
    /**
     * Name.
     * Maximum length: 32.
     * @nullable
     */
    name?: string;
    /**
     * payGradeFlx.
     * Maximum length: 32.
     * @nullable
     */
    payGradeFlx?: string;
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
     * One-to-one navigation property to the [[FoCompany]] entity.
     */
    companyFlxNav: FoCompany;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    descriptionTranslationNav: FoTranslation;
    /**
     * One-to-one navigation property to the [[FoFrequency]] entity.
     */
    frequencyCodeNav: FoFrequency;
    /**
     * One-to-one navigation property to the [[FoGeozone]] entity.
     */
    geozoneFlxNav: FoGeozone;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    nameTranslationNav: FoTranslation;
    /**
     * One-to-one navigation property to the [[FoPayGrade]] entity.
     */
    payGradeFlxNav: FoPayGrade;
    /**
     * Returns an entity builder to construct instances `FoPayRange`.
     * @returns A builder that constructs instances of entity type `FoPayRange`.
     */
    static builder(): EntityBuilderType<FoPayRange, FoPayRangeTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoPayRange` entity type.
     * @returns A `FoPayRange` request builder.
     */
    static requestBuilder(): FoPayRangeRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoPayRange`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoPayRange`.
     */
    static customField(fieldName: string): CustomField<FoPayRange>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoCompany, FoCompanyType } from './FoCompany';
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { FoFrequency, FoFrequencyType } from './FoFrequency';
import { FoGeozone, FoGeozoneType } from './FoGeozone';
import { FoPayGrade, FoPayGradeType } from './FoPayGrade';
export interface FoPayRangeType {
    companyFlx?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    currency?: string;
    description?: string;
    endDate?: Moment;
    externalCode: string;
    frequencyCode?: string;
    geozoneFlx?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    maximumPay?: BigNumber;
    midPoint?: BigNumber;
    minimumPay?: BigNumber;
    name?: string;
    payGradeFlx?: string;
    startDate: Moment;
    status?: string;
    companyFlxNav: FoCompanyType;
    descriptionTranslationNav: FoTranslationType;
    frequencyCodeNav: FoFrequencyType;
    geozoneFlxNav: FoGeozoneType;
    nameTranslationNav: FoTranslationType;
    payGradeFlxNav: FoPayGradeType;
}
export interface FoPayRangeTypeForceMandatory {
    companyFlx: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    currency: string;
    description: string;
    endDate: Moment;
    externalCode: string;
    frequencyCode: string;
    geozoneFlx: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    maximumPay: BigNumber;
    midPoint: BigNumber;
    minimumPay: BigNumber;
    name: string;
    payGradeFlx: string;
    startDate: Moment;
    status: string;
    companyFlxNav: FoCompanyType;
    descriptionTranslationNav: FoTranslationType;
    frequencyCodeNav: FoFrequencyType;
    geozoneFlxNav: FoGeozoneType;
    nameTranslationNav: FoTranslationType;
    payGradeFlxNav: FoPayGradeType;
}
export declare namespace FoPayRange {
    /**
     * Static representation of the [[companyFlx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_FLX: StringField<FoPayRange>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoPayRange>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoPayRange>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoPayRange>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<FoPayRange>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FoPayRange>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoPayRange>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoPayRange>;
    /**
     * Static representation of the [[frequencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREQUENCY_CODE: StringField<FoPayRange>;
    /**
     * Static representation of the [[geozoneFlx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GEOZONE_FLX: StringField<FoPayRange>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoPayRange>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoPayRange>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoPayRange>;
    /**
     * Static representation of the [[maximumPay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAXIMUM_PAY: BigNumberField<FoPayRange>;
    /**
     * Static representation of the [[midPoint]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MID_POINT: BigNumberField<FoPayRange>;
    /**
     * Static representation of the [[minimumPay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINIMUM_PAY: BigNumberField<FoPayRange>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FoPayRange>;
    /**
     * Static representation of the [[payGradeFlx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_GRADE_FLX: StringField<FoPayRange>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoPayRange>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoPayRange>;
    /**
     * Static representation of the one-to-one navigation property [[companyFlxNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_FLX_NAV: OneToOneLink<FoPayRange, FoCompany>;
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoPayRange, FoTranslation>;
    /**
     * Static representation of the one-to-one navigation property [[frequencyCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREQUENCY_CODE_NAV: OneToOneLink<FoPayRange, FoFrequency>;
    /**
     * Static representation of the one-to-one navigation property [[geozoneFlxNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GEOZONE_FLX_NAV: OneToOneLink<FoPayRange, FoGeozone>;
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_NAV: OneToOneLink<FoPayRange, FoTranslation>;
    /**
     * Static representation of the one-to-one navigation property [[payGradeFlxNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_GRADE_FLX_NAV: OneToOneLink<FoPayRange, FoPayGrade>;
    /**
     * All fields of the FoPayRange entity.
     */
    const _allFields: Array<StringField<FoPayRange> | DateField<FoPayRange> | BigNumberField<FoPayRange> | OneToOneLink<FoPayRange, FoCompany> | OneToOneLink<FoPayRange, FoTranslation> | OneToOneLink<FoPayRange, FoFrequency> | OneToOneLink<FoPayRange, FoGeozone> | OneToOneLink<FoPayRange, FoPayGrade>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoPayRange>;
    /**
     * All key fields of the FoPayRange entity.
     */
    const _keyFields: Array<Selectable<FoPayRange>>;
    /**
     * Mapping of all key field names to the respective static field property FoPayRange.
     */
    const _keys: {
        [keys: string]: Selectable<FoPayRange>;
    };
}
//# sourceMappingURL=FoPayRange.d.ts.map