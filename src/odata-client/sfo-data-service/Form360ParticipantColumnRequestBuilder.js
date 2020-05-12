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
var Form360ParticipantColumn_1 = require("./Form360ParticipantColumn");
/**
 * Request builder class for operations supported on the [[Form360ParticipantColumn]] entity.
 */
var Form360ParticipantColumnRequestBuilder = /** @class */ (function (_super) {
    __extends(Form360ParticipantColumnRequestBuilder, _super);
    function Form360ParticipantColumnRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Form360ParticipantColumn` entity based on its keys.
     * @param columnKey Key property. See [[Form360ParticipantColumn.columnKey]].
     * @param formContentId Key property. See [[Form360ParticipantColumn.formContentId]].
     * @param formDataId Key property. See [[Form360ParticipantColumn.formDataId]].
     * @returns A request builder for creating requests to retrieve one `Form360ParticipantColumn` entity based on its keys.
     */
    Form360ParticipantColumnRequestBuilder.prototype.getByKey = function (columnKey, formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(Form360ParticipantColumn_1.Form360ParticipantColumn, {
            columnKey: columnKey,
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `Form360ParticipantColumn` entities.
     * @returns A request builder for creating requests to retrieve all `Form360ParticipantColumn` entities.
     */
    Form360ParticipantColumnRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Form360ParticipantColumn_1.Form360ParticipantColumn);
    };
    return Form360ParticipantColumnRequestBuilder;
}(core_1.RequestBuilder));
exports.Form360ParticipantColumnRequestBuilder = Form360ParticipantColumnRequestBuilder;
//# sourceMappingURL=Form360ParticipantColumnRequestBuilder.js.map