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
var RbpRole_1 = require("./RbpRole");
/**
 * Request builder class for operations supported on the [[RbpRole]] entity.
 */
var RbpRoleRequestBuilder = /** @class */ (function (_super) {
    __extends(RbpRoleRequestBuilder, _super);
    function RbpRoleRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `RbpRole` entity based on its keys.
     * @param roleId Key property. See [[RbpRole.roleId]].
     * @returns A request builder for creating requests to retrieve one `RbpRole` entity based on its keys.
     */
    RbpRoleRequestBuilder.prototype.getByKey = function (roleId) {
        return new core_1.GetByKeyRequestBuilder(RbpRole_1.RbpRole, { roleId: roleId });
    };
    /**
     * Returns a request builder for querying all `RbpRole` entities.
     * @returns A request builder for creating requests to retrieve all `RbpRole` entities.
     */
    RbpRoleRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(RbpRole_1.RbpRole);
    };
    RbpRoleRequestBuilder.prototype.delete = function (roleIdOrEntity) {
        return new core_1.DeleteRequestBuilder(RbpRole_1.RbpRole, roleIdOrEntity instanceof RbpRole_1.RbpRole ? roleIdOrEntity : { roleId: roleIdOrEntity });
    };
    return RbpRoleRequestBuilder;
}(core_1.RequestBuilder));
exports.RbpRoleRequestBuilder = RbpRoleRequestBuilder;
//# sourceMappingURL=RbpRoleRequestBuilder.js.map