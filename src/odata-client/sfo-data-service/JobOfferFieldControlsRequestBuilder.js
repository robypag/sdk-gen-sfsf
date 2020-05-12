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
var JobOfferFieldControls_1 = require("./JobOfferFieldControls");
/**
 * Request builder class for operations supported on the [[JobOfferFieldControls]] entity.
 */
var JobOfferFieldControlsRequestBuilder = /** @class */ (function (_super) {
    __extends(JobOfferFieldControlsRequestBuilder, _super);
    function JobOfferFieldControlsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JobOfferFieldControls` entity based on its keys.
     * @param offerApprovalId Key property. See [[JobOfferFieldControls.offerApprovalId]].
     * @returns A request builder for creating requests to retrieve one `JobOfferFieldControls` entity based on its keys.
     */
    JobOfferFieldControlsRequestBuilder.prototype.getByKey = function (offerApprovalId) {
        return new core_1.GetByKeyRequestBuilder(JobOfferFieldControls_1.JobOfferFieldControls, { offerApprovalId: offerApprovalId });
    };
    /**
     * Returns a request builder for querying all `JobOfferFieldControls` entities.
     * @returns A request builder for creating requests to retrieve all `JobOfferFieldControls` entities.
     */
    JobOfferFieldControlsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(JobOfferFieldControls_1.JobOfferFieldControls);
    };
    return JobOfferFieldControlsRequestBuilder;
}(core_1.RequestBuilder));
exports.JobOfferFieldControlsRequestBuilder = JobOfferFieldControlsRequestBuilder;
//# sourceMappingURL=JobOfferFieldControlsRequestBuilder.js.map