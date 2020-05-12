import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JdTemplateFamilyMapping } from './JdTemplateFamilyMapping';
/**
 * Request builder class for operations supported on the [[JdTemplateFamilyMapping]] entity.
 */
export declare class JdTemplateFamilyMappingRequestBuilder extends RequestBuilder<JdTemplateFamilyMapping> {
    /**
     * Returns a request builder for retrieving one `JdTemplateFamilyMapping` entity based on its keys.
     * @param jobDescTemplateExternalCode Key property. See [[JdTemplateFamilyMapping.jobDescTemplateExternalCode]].
     * @param externalCode Key property. See [[JdTemplateFamilyMapping.externalCode]].
     * @returns A request builder for creating requests to retrieve one `JdTemplateFamilyMapping` entity based on its keys.
     */
    getByKey(jobDescTemplateExternalCode: string, externalCode: string): GetByKeyRequestBuilder<JdTemplateFamilyMapping>;
    /**
     * Returns a request builder for querying all `JdTemplateFamilyMapping` entities.
     * @returns A request builder for creating requests to retrieve all `JdTemplateFamilyMapping` entities.
     */
    getAll(): GetAllRequestBuilder<JdTemplateFamilyMapping>;
    /**
     * Returns a request builder for creating a `JdTemplateFamilyMapping` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JdTemplateFamilyMapping`.
     */
    create(entity: JdTemplateFamilyMapping): CreateRequestBuilder<JdTemplateFamilyMapping>;
    /**
     * Returns a request builder for updating an entity of type `JdTemplateFamilyMapping`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JdTemplateFamilyMapping`.
     */
    update(entity: JdTemplateFamilyMapping): UpdateRequestBuilder<JdTemplateFamilyMapping>;
    /**
     * Returns a request builder for deleting an entity of type `JdTemplateFamilyMapping`.
     * @param jobDescTemplateExternalCode Key property. See [[JdTemplateFamilyMapping.jobDescTemplateExternalCode]].
     * @param externalCode Key property. See [[JdTemplateFamilyMapping.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `JdTemplateFamilyMapping`.
     */
    delete(jobDescTemplateExternalCode: string, externalCode: string): DeleteRequestBuilder<JdTemplateFamilyMapping>;
    /**
     * Returns a request builder for deleting an entity of type `JdTemplateFamilyMapping`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `JdTemplateFamilyMapping` by taking the entity as a parameter.
     */
    delete(entity: JdTemplateFamilyMapping): DeleteRequestBuilder<JdTemplateFamilyMapping>;
}
//# sourceMappingURL=JdTemplateFamilyMappingRequestBuilder.d.ts.map