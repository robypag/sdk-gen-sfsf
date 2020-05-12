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
var FormRouteStep_1 = require("./FormRouteStep");
/**
 * Request builder class for operations supported on the [[FormRouteStep]] entity.
 */
var FormRouteStepRequestBuilder = /** @class */ (function (_super) {
    __extends(FormRouteStepRequestBuilder, _super);
    function FormRouteStepRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormRouteStep` entity based on its keys.
     * @param formDataId Key property. See [[FormRouteStep.formDataId]].
     * @param stepOrder Key property. See [[FormRouteStep.stepOrder]].
     * @returns A request builder for creating requests to retrieve one `FormRouteStep` entity based on its keys.
     */
    FormRouteStepRequestBuilder.prototype.getByKey = function (formDataId, stepOrder) {
        return new core_1.GetByKeyRequestBuilder(FormRouteStep_1.FormRouteStep, {
            formDataId: formDataId,
            stepOrder: stepOrder
        });
    };
    /**
     * Returns a request builder for querying all `FormRouteStep` entities.
     * @returns A request builder for creating requests to retrieve all `FormRouteStep` entities.
     */
    FormRouteStepRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormRouteStep_1.FormRouteStep);
    };
    return FormRouteStepRequestBuilder;
}(core_1.RequestBuilder));
exports.FormRouteStepRequestBuilder = FormRouteStepRequestBuilder;
//# sourceMappingURL=FormRouteStepRequestBuilder.js.map