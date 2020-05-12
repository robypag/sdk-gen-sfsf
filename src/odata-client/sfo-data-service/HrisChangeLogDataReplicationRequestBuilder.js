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
var HrisChangeLogDataReplication_1 = require("./HrisChangeLogDataReplication");
/**
 * Request builder class for operations supported on the [[HrisChangeLogDataReplication]] entity.
 */
var HrisChangeLogDataReplicationRequestBuilder = /** @class */ (function (_super) {
    __extends(HrisChangeLogDataReplicationRequestBuilder, _super);
    function HrisChangeLogDataReplicationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `HrisChangeLogDataReplication` entity based on its keys.
     * @param externalCode Key property. See [[HrisChangeLogDataReplication.externalCode]].
     * @returns A request builder for creating requests to retrieve one `HrisChangeLogDataReplication` entity based on its keys.
     */
    HrisChangeLogDataReplicationRequestBuilder.prototype.getByKey = function (externalCode) {
        return new core_1.GetByKeyRequestBuilder(HrisChangeLogDataReplication_1.HrisChangeLogDataReplication, { externalCode: externalCode });
    };
    /**
     * Returns a request builder for querying all `HrisChangeLogDataReplication` entities.
     * @returns A request builder for creating requests to retrieve all `HrisChangeLogDataReplication` entities.
     */
    HrisChangeLogDataReplicationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(HrisChangeLogDataReplication_1.HrisChangeLogDataReplication);
    };
    return HrisChangeLogDataReplicationRequestBuilder;
}(core_1.RequestBuilder));
exports.HrisChangeLogDataReplicationRequestBuilder = HrisChangeLogDataReplicationRequestBuilder;
//# sourceMappingURL=HrisChangeLogDataReplicationRequestBuilder.js.map