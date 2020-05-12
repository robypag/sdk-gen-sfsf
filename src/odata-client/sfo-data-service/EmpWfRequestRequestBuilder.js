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
var EmpWfRequest_1 = require("./EmpWfRequest");
/**
 * Request builder class for operations supported on the [[EmpWfRequest]] entity.
 */
var EmpWfRequestRequestBuilder = /** @class */ (function (_super) {
    __extends(EmpWfRequestRequestBuilder, _super);
    function EmpWfRequestRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmpWfRequest` entity based on its keys.
     * @param empWfRequestId Key property. See [[EmpWfRequest.empWfRequestId]].
     * @returns A request builder for creating requests to retrieve one `EmpWfRequest` entity based on its keys.
     */
    EmpWfRequestRequestBuilder.prototype.getByKey = function (empWfRequestId) {
        return new core_1.GetByKeyRequestBuilder(EmpWfRequest_1.EmpWfRequest, { empWfRequestId: empWfRequestId });
    };
    /**
     * Returns a request builder for querying all `EmpWfRequest` entities.
     * @returns A request builder for creating requests to retrieve all `EmpWfRequest` entities.
     */
    EmpWfRequestRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmpWfRequest_1.EmpWfRequest);
    };
    return EmpWfRequestRequestBuilder;
}(core_1.RequestBuilder));
exports.EmpWfRequestRequestBuilder = EmpWfRequestRequestBuilder;
//# sourceMappingURL=EmpWfRequestRequestBuilder.js.map