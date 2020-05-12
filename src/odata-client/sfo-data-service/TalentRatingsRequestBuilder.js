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
var TalentRatings_1 = require("./TalentRatings");
/**
 * Request builder class for operations supported on the [[TalentRatings]] entity.
 */
var TalentRatingsRequestBuilder = /** @class */ (function (_super) {
    __extends(TalentRatingsRequestBuilder, _super);
    function TalentRatingsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TalentRatings` entity based on its keys.
     * @param feedbackId Key property. See [[TalentRatings.feedbackId]].
     * @returns A request builder for creating requests to retrieve one `TalentRatings` entity based on its keys.
     */
    TalentRatingsRequestBuilder.prototype.getByKey = function (feedbackId) {
        return new core_1.GetByKeyRequestBuilder(TalentRatings_1.TalentRatings, { feedbackId: feedbackId });
    };
    /**
     * Returns a request builder for querying all `TalentRatings` entities.
     * @returns A request builder for creating requests to retrieve all `TalentRatings` entities.
     */
    TalentRatingsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TalentRatings_1.TalentRatings);
    };
    return TalentRatingsRequestBuilder;
}(core_1.RequestBuilder));
exports.TalentRatingsRequestBuilder = TalentRatingsRequestBuilder;
//# sourceMappingURL=TalentRatingsRequestBuilder.js.map