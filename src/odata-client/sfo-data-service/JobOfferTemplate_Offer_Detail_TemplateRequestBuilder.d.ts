import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobOfferTemplate_Offer_Detail_Template } from './JobOfferTemplate_Offer_Detail_Template';
/**
 * Request builder class for operations supported on the [[JobOfferTemplate_Offer_Detail_Template]] entity.
 */
export declare class JobOfferTemplate_Offer_Detail_TemplateRequestBuilder extends RequestBuilder<JobOfferTemplate_Offer_Detail_Template> {
    /**
     * Returns a request builder for retrieving one `JobOfferTemplate_Offer_Detail_Template` entity based on its keys.
     * @param templateId Key property. See [[JobOfferTemplate_Offer_Detail_Template.templateId]].
     * @returns A request builder for creating requests to retrieve one `JobOfferTemplate_Offer_Detail_Template` entity based on its keys.
     */
    getByKey(templateId: BigNumber): GetByKeyRequestBuilder<JobOfferTemplate_Offer_Detail_Template>;
    /**
     * Returns a request builder for querying all `JobOfferTemplate_Offer_Detail_Template` entities.
     * @returns A request builder for creating requests to retrieve all `JobOfferTemplate_Offer_Detail_Template` entities.
     */
    getAll(): GetAllRequestBuilder<JobOfferTemplate_Offer_Detail_Template>;
}
//# sourceMappingURL=JobOfferTemplate_Offer_Detail_TemplateRequestBuilder.d.ts.map