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
var FormAuditTrail_1 = require("./FormAuditTrail");
/**
 * Request builder class for operations supported on the [[FormAuditTrail]] entity.
 */
var FormAuditTrailRequestBuilder = /** @class */ (function (_super) {
    __extends(FormAuditTrailRequestBuilder, _super);
    function FormAuditTrailRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormAuditTrail` entity based on its keys.
     * @param auditTrailId Key property. See [[FormAuditTrail.auditTrailId]].
     * @returns A request builder for creating requests to retrieve one `FormAuditTrail` entity based on its keys.
     */
    FormAuditTrailRequestBuilder.prototype.getByKey = function (auditTrailId) {
        return new core_1.GetByKeyRequestBuilder(FormAuditTrail_1.FormAuditTrail, { auditTrailId: auditTrailId });
    };
    /**
     * Returns a request builder for querying all `FormAuditTrail` entities.
     * @returns A request builder for creating requests to retrieve all `FormAuditTrail` entities.
     */
    FormAuditTrailRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormAuditTrail_1.FormAuditTrail);
    };
    return FormAuditTrailRequestBuilder;
}(core_1.RequestBuilder));
exports.FormAuditTrailRequestBuilder = FormAuditTrailRequestBuilder;
//# sourceMappingURL=FormAuditTrailRequestBuilder.js.map