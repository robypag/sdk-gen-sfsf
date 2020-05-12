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
var WfRequest_1 = require("./WfRequest");
/**
 * Request builder class for operations supported on the [[WfRequest]] entity.
 */
var WfRequestRequestBuilder = /** @class */ (function (_super) {
    __extends(WfRequestRequestBuilder, _super);
    function WfRequestRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WfRequest` entity based on its keys.
     * @param wfRequestId Key property. See [[WfRequest.wfRequestId]].
     * @returns A request builder for creating requests to retrieve one `WfRequest` entity based on its keys.
     */
    WfRequestRequestBuilder.prototype.getByKey = function (wfRequestId) {
        return new core_1.GetByKeyRequestBuilder(WfRequest_1.WfRequest, { wfRequestId: wfRequestId });
    };
    /**
     * Returns a request builder for querying all `WfRequest` entities.
     * @returns A request builder for creating requests to retrieve all `WfRequest` entities.
     */
    WfRequestRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(WfRequest_1.WfRequest);
    };
    return WfRequestRequestBuilder;
}(core_1.RequestBuilder));
exports.WfRequestRequestBuilder = WfRequestRequestBuilder;
//# sourceMappingURL=WfRequestRequestBuilder.js.map