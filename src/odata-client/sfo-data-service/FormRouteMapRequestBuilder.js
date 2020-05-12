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
var FormRouteMap_1 = require("./FormRouteMap");
/**
 * Request builder class for operations supported on the [[FormRouteMap]] entity.
 */
var FormRouteMapRequestBuilder = /** @class */ (function (_super) {
    __extends(FormRouteMapRequestBuilder, _super);
    function FormRouteMapRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormRouteMap` entity based on its keys.
     * @param formDataId Key property. See [[FormRouteMap.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormRouteMap` entity based on its keys.
     */
    FormRouteMapRequestBuilder.prototype.getByKey = function (formDataId) {
        return new core_1.GetByKeyRequestBuilder(FormRouteMap_1.FormRouteMap, { formDataId: formDataId });
    };
    /**
     * Returns a request builder for querying all `FormRouteMap` entities.
     * @returns A request builder for creating requests to retrieve all `FormRouteMap` entities.
     */
    FormRouteMapRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormRouteMap_1.FormRouteMap);
    };
    return FormRouteMapRequestBuilder;
}(core_1.RequestBuilder));
exports.FormRouteMapRequestBuilder = FormRouteMapRequestBuilder;
//# sourceMappingURL=FormRouteMapRequestBuilder.js.map