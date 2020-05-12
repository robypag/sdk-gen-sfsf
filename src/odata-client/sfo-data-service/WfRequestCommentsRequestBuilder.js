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
var WfRequestComments_1 = require("./WfRequestComments");
/**
 * Request builder class for operations supported on the [[WfRequestComments]] entity.
 */
var WfRequestCommentsRequestBuilder = /** @class */ (function (_super) {
    __extends(WfRequestCommentsRequestBuilder, _super);
    function WfRequestCommentsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WfRequestComments` entity based on its keys.
     * @param wfRequestCommentId Key property. See [[WfRequestComments.wfRequestCommentId]].
     * @returns A request builder for creating requests to retrieve one `WfRequestComments` entity based on its keys.
     */
    WfRequestCommentsRequestBuilder.prototype.getByKey = function (wfRequestCommentId) {
        return new core_1.GetByKeyRequestBuilder(WfRequestComments_1.WfRequestComments, { wfRequestCommentId: wfRequestCommentId });
    };
    /**
     * Returns a request builder for querying all `WfRequestComments` entities.
     * @returns A request builder for creating requests to retrieve all `WfRequestComments` entities.
     */
    WfRequestCommentsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(WfRequestComments_1.WfRequestComments);
    };
    return WfRequestCommentsRequestBuilder;
}(core_1.RequestBuilder));
exports.WfRequestCommentsRequestBuilder = WfRequestCommentsRequestBuilder;
//# sourceMappingURL=WfRequestCommentsRequestBuilder.js.map