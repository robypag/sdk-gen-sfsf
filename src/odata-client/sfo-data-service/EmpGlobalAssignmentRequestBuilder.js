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
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var EmpGlobalAssignment_1 = require("./EmpGlobalAssignment");
/**
 * Request builder class for operations supported on the [[EmpGlobalAssignment]] entity.
 */
var EmpGlobalAssignmentRequestBuilder = /** @class */ (function (_super) {
    __extends(EmpGlobalAssignmentRequestBuilder, _super);
    function EmpGlobalAssignmentRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmpGlobalAssignment` entity based on its keys.
     * @param userId Key property. See [[EmpGlobalAssignment.userId]].
     * @returns A request builder for creating requests to retrieve one `EmpGlobalAssignment` entity based on its keys.
     */
    EmpGlobalAssignmentRequestBuilder.prototype.getByKey = function (userId) {
        return new core_1.GetByKeyRequestBuilder(EmpGlobalAssignment_1.EmpGlobalAssignment, { userId: userId });
    };
    /**
     * Returns a request builder for querying all `EmpGlobalAssignment` entities.
     * @returns A request builder for creating requests to retrieve all `EmpGlobalAssignment` entities.
     */
    EmpGlobalAssignmentRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmpGlobalAssignment_1.EmpGlobalAssignment);
    };
    return EmpGlobalAssignmentRequestBuilder;
}(core_1.RequestBuilder));
exports.EmpGlobalAssignmentRequestBuilder = EmpGlobalAssignmentRequestBuilder;
//# sourceMappingURL=EmpGlobalAssignmentRequestBuilder.js.map