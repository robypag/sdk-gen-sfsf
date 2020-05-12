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
var RbpBasicPermission_1 = require("./RbpBasicPermission");
/**
 * Request builder class for operations supported on the [[RbpBasicPermission]] entity.
 */
var RbpBasicPermissionRequestBuilder = /** @class */ (function (_super) {
    __extends(RbpBasicPermissionRequestBuilder, _super);
    function RbpBasicPermissionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RbpBasicPermission` entity based on its keys.
     * @param permissionId Key property. See [[RbpBasicPermission.permissionId]].
     * @returns A request builder for creating requests to retrieve one `RbpBasicPermission` entity based on its keys.
     */
    RbpBasicPermissionRequestBuilder.prototype.getByKey = function (permissionId) {
        return new core_1.GetByKeyRequestBuilder(RbpBasicPermission_1.RbpBasicPermission, { permissionId: permissionId });
    };
    /**
     * Returns a request builder for querying all `RbpBasicPermission` entities.
     * @returns A request builder for creating requests to retrieve all `RbpBasicPermission` entities.
     */
    RbpBasicPermissionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(RbpBasicPermission_1.RbpBasicPermission);
    };
    return RbpBasicPermissionRequestBuilder;
}(core_1.RequestBuilder));
exports.RbpBasicPermissionRequestBuilder = RbpBasicPermissionRequestBuilder;
//# sourceMappingURL=RbpBasicPermissionRequestBuilder.js.map