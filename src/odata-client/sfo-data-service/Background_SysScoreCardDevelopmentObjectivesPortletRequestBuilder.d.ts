import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_SysScoreCardDevelopmentObjectivesPortlet } from './Background_SysScoreCardDevelopmentObjectivesPortlet';
/**
 * Request builder class for operations supported on the [[Background_SysScoreCardDevelopmentObjectivesPortlet]] entity.
 */
export declare class Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder extends RequestBuilder<Background_SysScoreCardDevelopmentObjectivesPortlet> {
    /**
     * Returns a request builder for retrieving one `Background_SysScoreCardDevelopmentObjectivesPortlet` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_SysScoreCardDevelopmentObjectivesPortlet.backgroundElementId]].
     * @param userId Key property. See [[Background_SysScoreCardDevelopmentObjectivesPortlet.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_SysScoreCardDevelopmentObjectivesPortlet` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_SysScoreCardDevelopmentObjectivesPortlet>;
    /**
     * Returns a request builder for querying all `Background_SysScoreCardDevelopmentObjectivesPortlet` entities.
     * @returns A request builder for creating requests to retrieve all `Background_SysScoreCardDevelopmentObjectivesPortlet` entities.
     */
    getAll(): GetAllRequestBuilder<Background_SysScoreCardDevelopmentObjectivesPortlet>;
    /**
     * Returns a request builder for creating a `Background_SysScoreCardDevelopmentObjectivesPortlet` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_SysScoreCardDevelopmentObjectivesPortlet`.
     */
    create(entity: Background_SysScoreCardDevelopmentObjectivesPortlet): CreateRequestBuilder<Background_SysScoreCardDevelopmentObjectivesPortlet>;
    /**
     * Returns a request builder for updating an entity of type `Background_SysScoreCardDevelopmentObjectivesPortlet`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_SysScoreCardDevelopmentObjectivesPortlet`.
     */
    update(entity: Background_SysScoreCardDevelopmentObjectivesPortlet): UpdateRequestBuilder<Background_SysScoreCardDevelopmentObjectivesPortlet>;
    /**
     * Returns a request builder for deleting an entity of type `Background_SysScoreCardDevelopmentObjectivesPortlet`.
     * @param backgroundElementId Key property. See [[Background_SysScoreCardDevelopmentObjectivesPortlet.backgroundElementId]].
     * @param userId Key property. See [[Background_SysScoreCardDevelopmentObjectivesPortlet.userId]].
     * @returns A request builder for creating requests that delete an entity of type `Background_SysScoreCardDevelopmentObjectivesPortlet`.
     */
    delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_SysScoreCardDevelopmentObjectivesPortlet>;
    /**
     * Returns a request builder for deleting an entity of type `Background_SysScoreCardDevelopmentObjectivesPortlet`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Background_SysScoreCardDevelopmentObjectivesPortlet` by taking the entity as a parameter.
     */
    delete(entity: Background_SysScoreCardDevelopmentObjectivesPortlet): DeleteRequestBuilder<Background_SysScoreCardDevelopmentObjectivesPortlet>;
}
//# sourceMappingURL=Background_SysScoreCardDevelopmentObjectivesPortletRequestBuilder.d.ts.map