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
var FoDynamicRole_1 = require("./FoDynamicRole");
/**
 * Request builder class for operations supported on the [[FoDynamicRole]] entity.
 */
var FoDynamicRoleRequestBuilder = /** @class */ (function (_super) {
    __extends(FoDynamicRoleRequestBuilder, _super);
    function FoDynamicRoleRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoDynamicRole` entity based on its keys.
     * @param dynamicRoleAssignmentId Key property. See [[FoDynamicRole.dynamicRoleAssignmentId]].
     * @returns A request builder for creating requests to retrieve one `FoDynamicRole` entity based on its keys.
     */
    FoDynamicRoleRequestBuilder.prototype.getByKey = function (dynamicRoleAssignmentId) {
        return new core_1.GetByKeyRequestBuilder(FoDynamicRole_1.FoDynamicRole, { dynamicRoleAssignmentId: dynamicRoleAssignmentId });
    };
    /**
     * Returns a request builder for querying all `FoDynamicRole` entities.
     * @returns A request builder for creating requests to retrieve all `FoDynamicRole` entities.
     */
    FoDynamicRoleRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoDynamicRole_1.FoDynamicRole);
    };
    return FoDynamicRoleRequestBuilder;
}(core_1.RequestBuilder));
exports.FoDynamicRoleRequestBuilder = FoDynamicRoleRequestBuilder;
//# sourceMappingURL=FoDynamicRoleRequestBuilder.js.map