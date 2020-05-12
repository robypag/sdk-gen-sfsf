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
var WfRequestUiData_1 = require("./WfRequestUiData");
/**
 * Request builder class for operations supported on the [[WfRequestUiData]] entity.
 */
var WfRequestUiDataRequestBuilder = /** @class */ (function (_super) {
    __extends(WfRequestUiDataRequestBuilder, _super);
    function WfRequestUiDataRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WfRequestUiData` entity based on its keys.
     * @param wfRequestId Key property. See [[WfRequestUiData.wfRequestId]].
     * @returns A request builder for creating requests to retrieve one `WfRequestUiData` entity based on its keys.
     */
    WfRequestUiDataRequestBuilder.prototype.getByKey = function (wfRequestId) {
        return new core_1.GetByKeyRequestBuilder(WfRequestUiData_1.WfRequestUiData, { wfRequestId: wfRequestId });
    };
    /**
     * Returns a request builder for querying all `WfRequestUiData` entities.
     * @returns A request builder for creating requests to retrieve all `WfRequestUiData` entities.
     */
    WfRequestUiDataRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(WfRequestUiData_1.WfRequestUiData);
    };
    return WfRequestUiDataRequestBuilder;
}(core_1.RequestBuilder));
exports.WfRequestUiDataRequestBuilder = WfRequestUiDataRequestBuilder;
//# sourceMappingURL=WfRequestUiDataRequestBuilder.js.map