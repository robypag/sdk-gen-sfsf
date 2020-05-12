import { OfferLetterRequestBuilder } from './OfferLetterRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BinaryField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "OfferLetter" of service "SFOData".
 */
export declare class OfferLetter extends Entity implements OfferLetterType {
    /**
     * Technical entity name for OfferLetter.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OfferLetter.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Application Id.
     */
    applicationId: BigNumber;
    /**
     * body.
     * @nullable
     */
    body?: string;
    /**
     * bodyLocale.
     * @nullable
     */
    bodyLocale?: string;
    /**
     * bodyTemplateId.
     * @nullable
     */
    bodyTemplateId?: BigNumber;
    /**
     * Bonus Payout Frequency.
     * @nullable
     */
    bonusPayoutFreq?: string;
    /**
     * Candidate Response Comments.
     * @nullable
     */
    candResponseComments?: string;
    /**
     * Candidate Response Date.
     * @nullable
     */
    candResponseDate?: Moment;
    /**
     * Comments.
     * @nullable
     */
    comments?: string;
    /**
     * countryCode.
     * @nullable
     */
    countryCode?: string;
    /**
     * countryName.
     * @nullable
     */
    countryName?: string;
    /**
     * Create Date.
     * @nullable
     */
    createDate?: Moment;
    /**
     * Created By.
     * @nullable
     */
    createdBy?: string;
    /**
     * Currency Code.
     * @nullable
     */
    currencyCode?: string;
    /**
     * Job Start Date.
     * @nullable
     */
    jobStartDate?: Moment;
    /**
     * Job Title.
     * @nullable
     */
    jobTitle?: string;
    /**
     * Last Modified By.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date.
     * @nullable
     */
    lastModifiedDate?: Moment;
    /**
     * locale.
     * @nullable
     */
    locale?: string;
    /**
     * localeCode.
     * @nullable
     */
    localeCode?: string;
    /**
     * mailboxes.
     * @nullable
     */
    mailboxes?: string;
    /**
     * Offer Expiration Date.
     * @nullable
     */
    offerExpirationDate?: Moment;
    /**
     * Offer Letter.
     * @nullable
     */
    offerLetter?: string;
    /**
     * Offer Letter Id.
     */
    offerLetterId: BigNumber;
    /**
     * Offer Sent Date.
     * @nullable
     */
    offerSentDate?: Moment;
    /**
     * Overtime Rate.
     * @nullable
     */
    overtimeRate?: BigNumber;
    /**
     * Salary Rate.
     * @nullable
     */
    salaryRate?: BigNumber;
    /**
     * Salary Rate Type.
     * @nullable
     */
    salaryRateType?: string;
    /**
     * Send Mode.
     * @nullable
     */
    sendMode?: string;
    /**
     * Status.
     * @nullable
     */
    status?: string;
    /**
     * Stock Grant.
     * @nullable
     */
    stockGrant?: BigNumber;
    /**
     * Stock Option.
     * @nullable
     */
    stockOption?: BigNumber;
    /**
     * subject.
     * @nullable
     */
    subject?: string;
    /**
     * Target Bonus Amount.
     * @nullable
     */
    targetBonusAmount?: BigNumber;
    /**
     * Target Bonus Percent.
     * @nullable
     */
    targetBonusPercent?: BigNumber;
    /**
     * templateId.
     * @nullable
     */
    templateId?: BigNumber;
    /**
     * templateName.
     * @nullable
     */
    templateName?: string;
    /**
     * tokens.
     * @nullable
     */
    tokens?: string;
    /**
     * One-to-many navigation property to the [[Attachment]] entity.
     */
    attachments: Attachment[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[JobApplication]] entity.
     */
    jobApplication: JobApplication;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[Attachment]] entity.
     */
    offerLetterPdFmail: Attachment;
    /**
     * Returns an entity builder to construct instances `OfferLetter`.
     * @returns A builder that constructs instances of entity type `OfferLetter`.
     */
    static builder(): EntityBuilderType<OfferLetter, OfferLetterTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `OfferLetter` entity type.
     * @returns A `OfferLetter` request builder.
     */
    static requestBuilder(): OfferLetterRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OfferLetter`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OfferLetter`.
     */
    static customField(fieldName: string): CustomField<OfferLetter>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Attachment, AttachmentType } from './Attachment';
import { User, UserType } from './User';
import { JobApplication, JobApplicationType } from './JobApplication';
export interface OfferLetterType {
    applicationId: BigNumber;
    body?: string;
    bodyLocale?: string;
    bodyTemplateId?: BigNumber;
    bonusPayoutFreq?: string;
    candResponseComments?: string;
    candResponseDate?: Moment;
    comments?: string;
    countryCode?: string;
    countryName?: string;
    createDate?: Moment;
    createdBy?: string;
    currencyCode?: string;
    jobStartDate?: Moment;
    jobTitle?: string;
    lastModifiedBy?: string;
    lastModifiedDate?: Moment;
    locale?: string;
    localeCode?: string;
    mailboxes?: string;
    offerExpirationDate?: Moment;
    offerLetter?: string;
    offerLetterId: BigNumber;
    offerSentDate?: Moment;
    overtimeRate?: BigNumber;
    salaryRate?: BigNumber;
    salaryRateType?: string;
    sendMode?: string;
    status?: string;
    stockGrant?: BigNumber;
    stockOption?: BigNumber;
    subject?: string;
    targetBonusAmount?: BigNumber;
    targetBonusPercent?: BigNumber;
    templateId?: BigNumber;
    templateName?: string;
    tokens?: string;
    attachments: AttachmentType[];
    createdByNav: UserType;
    jobApplication: JobApplicationType;
    lastModifiedByNav: UserType;
    offerLetterPdFmail: AttachmentType;
}
export interface OfferLetterTypeForceMandatory {
    applicationId: BigNumber;
    body: string;
    bodyLocale: string;
    bodyTemplateId: BigNumber;
    bonusPayoutFreq: string;
    candResponseComments: string;
    candResponseDate: Moment;
    comments: string;
    countryCode: string;
    countryName: string;
    createDate: Moment;
    createdBy: string;
    currencyCode: string;
    jobStartDate: Moment;
    jobTitle: string;
    lastModifiedBy: string;
    lastModifiedDate: Moment;
    locale: string;
    localeCode: string;
    mailboxes: string;
    offerExpirationDate: Moment;
    offerLetter: string;
    offerLetterId: BigNumber;
    offerSentDate: Moment;
    overtimeRate: BigNumber;
    salaryRate: BigNumber;
    salaryRateType: string;
    sendMode: string;
    status: string;
    stockGrant: BigNumber;
    stockOption: BigNumber;
    subject: string;
    targetBonusAmount: BigNumber;
    targetBonusPercent: BigNumber;
    templateId: BigNumber;
    templateName: string;
    tokens: string;
    attachments: AttachmentType[];
    createdByNav: UserType;
    jobApplication: JobApplicationType;
    lastModifiedByNav: UserType;
    offerLetterPdFmail: AttachmentType;
}
export declare namespace OfferLetter {
    /**
     * Static representation of the [[applicationId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICATION_ID: BigNumberField<OfferLetter>;
    /**
     * Static representation of the [[body]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BODY: StringField<OfferLetter>;
    /**
     * Static representation of the [[bodyLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BODY_LOCALE: StringField<OfferLetter>;
    /**
     * Static representation of the [[bodyTemplateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BODY_TEMPLATE_ID: BigNumberField<OfferLetter>;
    /**
     * Static representation of the [[bonusPayoutFreq]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BONUS_PAYOUT_FREQ: StringField<OfferLetter>;
    /**
     * Static representation of the [[candResponseComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAND_RESPONSE_COMMENTS: StringField<OfferLetter>;
    /**
     * Static representation of the [[candResponseDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CAND_RESPONSE_DATE: DateField<OfferLetter>;
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENTS: StringField<OfferLetter>;
    /**
     * Static representation of the [[countryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_CODE: StringField<OfferLetter>;
    /**
     * Static representation of the [[countryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAME: StringField<OfferLetter>;
    /**
     * Static representation of the [[createDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATE_DATE: DateField<OfferLetter>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<OfferLetter>;
    /**
     * Static representation of the [[currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_CODE: StringField<OfferLetter>;
    /**
     * Static representation of the [[jobStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_START_DATE: DateField<OfferLetter>;
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_TITLE: StringField<OfferLetter>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<OfferLetter>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<OfferLetter>;
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALE: StringField<OfferLetter>;
    /**
     * Static representation of the [[localeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCALE_CODE: StringField<OfferLetter>;
    /**
     * Static representation of the [[mailboxes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAILBOXES: StringField<OfferLetter>;
    /**
     * Static representation of the [[offerExpirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFER_EXPIRATION_DATE: DateField<OfferLetter>;
    /**
     * Static representation of the [[offerLetter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFER_LETTER: BinaryField<OfferLetter>;
    /**
     * Static representation of the [[offerLetterId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFER_LETTER_ID: BigNumberField<OfferLetter>;
    /**
     * Static representation of the [[offerSentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFER_SENT_DATE: DateField<OfferLetter>;
    /**
     * Static representation of the [[overtimeRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERTIME_RATE: BigNumberField<OfferLetter>;
    /**
     * Static representation of the [[salaryRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALARY_RATE: BigNumberField<OfferLetter>;
    /**
     * Static representation of the [[salaryRateType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALARY_RATE_TYPE: StringField<OfferLetter>;
    /**
     * Static representation of the [[sendMode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEND_MODE: StringField<OfferLetter>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<OfferLetter>;
    /**
     * Static representation of the [[stockGrant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_GRANT: BigNumberField<OfferLetter>;
    /**
     * Static representation of the [[stockOption]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STOCK_OPTION: BigNumberField<OfferLetter>;
    /**
     * Static representation of the [[subject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT: StringField<OfferLetter>;
    /**
     * Static representation of the [[targetBonusAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGET_BONUS_AMOUNT: BigNumberField<OfferLetter>;
    /**
     * Static representation of the [[targetBonusPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGET_BONUS_PERCENT: BigNumberField<OfferLetter>;
    /**
     * Static representation of the [[templateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_ID: BigNumberField<OfferLetter>;
    /**
     * Static representation of the [[templateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_NAME: StringField<OfferLetter>;
    /**
     * Static representation of the [[tokens]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOKENS: StringField<OfferLetter>;
    /**
     * Static representation of the one-to-many navigation property [[attachments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENTS: Link<OfferLetter, Attachment>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<OfferLetter, User>;
    /**
     * Static representation of the one-to-one navigation property [[jobApplication]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_APPLICATION: OneToOneLink<OfferLetter, JobApplication>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<OfferLetter, User>;
    /**
     * Static representation of the one-to-one navigation property [[offerLetterPdFmail]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OFFER_LETTER_PD_FMAIL: OneToOneLink<OfferLetter, Attachment>;
    /**
     * All fields of the OfferLetter entity.
     */
    const _allFields: Array<BigNumberField<OfferLetter> | StringField<OfferLetter> | DateField<OfferLetter> | BinaryField<OfferLetter> | Link<OfferLetter, Attachment> | OneToOneLink<OfferLetter, User> | OneToOneLink<OfferLetter, JobApplication> | OneToOneLink<OfferLetter, Attachment>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<OfferLetter>;
    /**
     * All key fields of the OfferLetter entity.
     */
    const _keyFields: Array<Selectable<OfferLetter>>;
    /**
     * Mapping of all key field names to the respective static field property OfferLetter.
     */
    const _keys: {
        [keys: string]: Selectable<OfferLetter>;
    };
}
//# sourceMappingURL=OfferLetter.d.ts.map