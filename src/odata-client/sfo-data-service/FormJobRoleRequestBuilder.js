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
var FormJobRole_1 = require("./FormJobRole");
/**
 * Request builder class for operations supported on the [[FormJobRole]] entity.
 */
var FormJobRoleRequestBuilder = /** @class */ (function (_super) {
    __extends(FormJobRoleRequestBuilder, _super);
    function FormJobRoleRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormJobRole` entity based on its keys.
     * @param formContentId Key property. See [[FormJobRole.formContentId]].
     * @param formDataId Key property. See [[FormJobRole.formDataId]].
     * @param roleId Key property. See [[FormJobRole.roleId]].
     * @returns A request builder for creating requests to retrieve one `FormJobRole` entity based on its keys.
     */
    FormJobRoleRequestBuilder.prototype.getByKey = function (formContentId, formDataId, roleId) {
        return new core_1.GetByKeyRequestBuilder(FormJobRole_1.FormJobRole, {
            formContentId: formContentId,
            formDataId: formDataId,
            roleId: roleId
        });
    };
    /**
     * Returns a request builder for querying all `FormJobRole` entities.
     * @returns A request builder for creating requests to retrieve all `FormJobRole` entities.
     */
    FormJobRoleRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormJobRole_1.FormJobRole);
    };
    return FormJobRoleRequestBuilder;
}(core_1.RequestBuilder));
exports.FormJobRoleRequestBuilder = FormJobRoleRequestBuilder;
//# sourceMappingURL=FormJobRoleRequestBuilder.js.map