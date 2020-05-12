"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@sap-cloud-sdk/core");
var FormCompetencySection_1 = require("./FormCompetencySection");
/**
 * Request builder class for operations supported on the [[FormCompetencySection]] entity.
 */
var FormCompetencySectionRequestBuilder = /** @class */ (function (_super) {
    __extends(FormCompetencySectionRequestBuilder, _super);
    function FormCompetencySectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormCompetencySection` entity based on its keys.
     * @param formContentId Key property. See [[FormCompetencySection.formContentId]].
     * @param formDataId Key property. See [[FormCompetencySection.formDataId]].
     * @param sectionIndex Key property. See [[FormCompetencySection.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormCompetencySection` entity based on its keys.
     */
    FormCompetencySectionRequestBuilder.prototype.getByKey = function (formContentId, formDataId, sectionIndex) {
        return new core_1.GetByKeyRequestBuilder(FormCompetencySection_1.FormCompetencySection, {
            formContentId: formContentId,
            formDataId: formDataId,
            sectionIndex: sectionIndex
        });
    };
    /**
     * Returns a request builder for querying all `FormCompetencySection` entities.
     * @returns A request builder for creating requests to retrieve all `FormCompetencySection` entities.
     */
    FormCompetencySectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormCompetencySection_1.FormCompetencySection);
    };
    /**
     * Returns a request builder for creating a `FormCompetencySection` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FormCompetencySection`.
     */
    FormCompetencySectionRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(FormCompetencySection_1.FormCompetencySection, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FormCompetencySection`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FormCompetencySection`.
     */
    FormCompetencySectionRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilder(FormCompetencySection_1.FormCompetencySection, entity);
    };
    return FormCompetencySectionRequestBuilder;
}(core_1.RequestBuilder));
exports.FormCompetencySectionRequestBuilder = FormCompetencySectionRequestBuilder;
//# sourceMappingURL=FormCompetencySectionRequestBuilder.js.map