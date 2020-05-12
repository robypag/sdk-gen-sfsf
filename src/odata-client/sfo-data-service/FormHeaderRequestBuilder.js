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
var FormHeader_1 = require("./FormHeader");
/**
 * Request builder class for operations supported on the [[FormHeader]] entity.
 */
var FormHeaderRequestBuilder = /** @class */ (function (_super) {
    __extends(FormHeaderRequestBuilder, _super);
    function FormHeaderRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormHeader` entity based on its keys.
     * @param formDataId Key property. See [[FormHeader.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormHeader` entity based on its keys.
     */
    FormHeaderRequestBuilder.prototype.getByKey = function (formDataId) {
        return new core_1.GetByKeyRequestBuilder(FormHeader_1.FormHeader, { formDataId: formDataId });
    };
    /**
     * Returns a request builder for querying all `FormHeader` entities.
     * @returns A request builder for creating requests to retrieve all `FormHeader` entities.
     */
    FormHeaderRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormHeader_1.FormHeader);
    };
    return FormHeaderRequestBuilder;
}(core_1.RequestBuilder));
exports.FormHeaderRequestBuilder = FormHeaderRequestBuilder;
//# sourceMappingURL=FormHeaderRequestBuilder.js.map