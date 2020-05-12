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
var FormRouteSubStep_1 = require("./FormRouteSubStep");
/**
 * Request builder class for operations supported on the [[FormRouteSubStep]] entity.
 */
var FormRouteSubStepRequestBuilder = /** @class */ (function (_super) {
    __extends(FormRouteSubStepRequestBuilder, _super);
    function FormRouteSubStepRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormRouteSubStep` entity based on its keys.
     * @param formDataId Key property. See [[FormRouteSubStep.formDataId]].
     * @param stepOrder Key property. See [[FormRouteSubStep.stepOrder]].
     * @param subStepOrder Key property. See [[FormRouteSubStep.subStepOrder]].
     * @returns A request builder for creating requests to retrieve one `FormRouteSubStep` entity based on its keys.
     */
    FormRouteSubStepRequestBuilder.prototype.getByKey = function (formDataId, stepOrder, subStepOrder) {
        return new core_1.GetByKeyRequestBuilder(FormRouteSubStep_1.FormRouteSubStep, {
            formDataId: formDataId,
            stepOrder: stepOrder,
            subStepOrder: subStepOrder
        });
    };
    /**
     * Returns a request builder for querying all `FormRouteSubStep` entities.
     * @returns A request builder for creating requests to retrieve all `FormRouteSubStep` entities.
     */
    FormRouteSubStepRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormRouteSubStep_1.FormRouteSubStep);
    };
    return FormRouteSubStepRequestBuilder;
}(core_1.RequestBuilder));
exports.FormRouteSubStepRequestBuilder = FormRouteSubStepRequestBuilder;
//# sourceMappingURL=FormRouteSubStepRequestBuilder.js.map