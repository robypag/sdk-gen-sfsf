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
var FoLocationGroup_1 = require("./FoLocationGroup");
/**
 * Request builder class for operations supported on the [[FoLocationGroup]] entity.
 */
var FoLocationGroupRequestBuilder = /** @class */ (function (_super) {
    __extends(FoLocationGroupRequestBuilder, _super);
    function FoLocationGroupRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FoLocationGroup` entity based on its keys.
     * @param externalCode Key property. See [[FoLocationGroup.externalCode]].
     * @param startDate Key property. See [[FoLocationGroup.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoLocationGroup` entity based on its keys.
     */
    FoLocationGroupRequestBuilder.prototype.getByKey = function (externalCode, startDate) {
        return new core_1.GetByKeyRequestBuilder(FoLocationGroup_1.FoLocationGroup, {
            externalCode: externalCode,
            startDate: startDate
        });
    };
    /**
     * Returns a request builder for querying all `FoLocationGroup` entities.
     * @returns A request builder for creating requests to retrieve all `FoLocationGroup` entities.
     */
    FoLocationGroupRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FoLocationGroup_1.FoLocationGroup);
    };
    return FoLocationGroupRequestBuilder;
}(core_1.RequestBuilder));
exports.FoLocationGroupRequestBuilder = FoLocationGroupRequestBuilder;
//# sourceMappingURL=FoLocationGroupRequestBuilder.js.map