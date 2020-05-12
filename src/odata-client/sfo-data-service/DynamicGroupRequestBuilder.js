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
var DynamicGroup_1 = require("./DynamicGroup");
/**
 * Request builder class for operations supported on the [[DynamicGroup]] entity.
 */
var DynamicGroupRequestBuilder = /** @class */ (function (_super) {
    __extends(DynamicGroupRequestBuilder, _super);
    function DynamicGroupRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DynamicGroup` entity based on its keys.
     * @param groupId Key property. See [[DynamicGroup.groupId]].
     * @returns A request builder for creating requests to retrieve one `DynamicGroup` entity based on its keys.
     */
    DynamicGroupRequestBuilder.prototype.getByKey = function (groupId) {
        return new core_1.GetByKeyRequestBuilder(DynamicGroup_1.DynamicGroup, { groupID: groupId });
    };
    /**
     * Returns a request builder for querying all `DynamicGroup` entities.
     * @returns A request builder for creating requests to retrieve all `DynamicGroup` entities.
     */
    DynamicGroupRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DynamicGroup_1.DynamicGroup);
    };
    return DynamicGroupRequestBuilder;
}(core_1.RequestBuilder));
exports.DynamicGroupRequestBuilder = DynamicGroupRequestBuilder;
//# sourceMappingURL=DynamicGroupRequestBuilder.js.map