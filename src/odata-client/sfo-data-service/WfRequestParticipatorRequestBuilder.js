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
var WfRequestParticipator_1 = require("./WfRequestParticipator");
/**
 * Request builder class for operations supported on the [[WfRequestParticipator]] entity.
 */
var WfRequestParticipatorRequestBuilder = /** @class */ (function (_super) {
    __extends(WfRequestParticipatorRequestBuilder, _super);
    function WfRequestParticipatorRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WfRequestParticipator` entity based on its keys.
     * @param wfRequestParticipatorId Key property. See [[WfRequestParticipator.wfRequestParticipatorId]].
     * @returns A request builder for creating requests to retrieve one `WfRequestParticipator` entity based on its keys.
     */
    WfRequestParticipatorRequestBuilder.prototype.getByKey = function (wfRequestParticipatorId) {
        return new core_1.GetByKeyRequestBuilder(WfRequestParticipator_1.WfRequestParticipator, { wfRequestParticipatorId: wfRequestParticipatorId });
    };
    /**
     * Returns a request builder for querying all `WfRequestParticipator` entities.
     * @returns A request builder for creating requests to retrieve all `WfRequestParticipator` entities.
     */
    WfRequestParticipatorRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(WfRequestParticipator_1.WfRequestParticipator);
    };
    return WfRequestParticipatorRequestBuilder;
}(core_1.RequestBuilder));
exports.WfRequestParticipatorRequestBuilder = WfRequestParticipatorRequestBuilder;
//# sourceMappingURL=WfRequestParticipatorRequestBuilder.js.map