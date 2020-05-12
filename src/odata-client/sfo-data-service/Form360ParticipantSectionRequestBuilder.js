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
var Form360ParticipantSection_1 = require("./Form360ParticipantSection");
/**
 * Request builder class for operations supported on the [[Form360ParticipantSection]] entity.
 */
var Form360ParticipantSectionRequestBuilder = /** @class */ (function (_super) {
    __extends(Form360ParticipantSectionRequestBuilder, _super);
    function Form360ParticipantSectionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Form360ParticipantSection` entity based on its keys.
     * @param formContentId Key property. See [[Form360ParticipantSection.formContentId]].
     * @param formDataId Key property. See [[Form360ParticipantSection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `Form360ParticipantSection` entity based on its keys.
     */
    Form360ParticipantSectionRequestBuilder.prototype.getByKey = function (formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(Form360ParticipantSection_1.Form360ParticipantSection, {
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `Form360ParticipantSection` entities.
     * @returns A request builder for creating requests to retrieve all `Form360ParticipantSection` entities.
     */
    Form360ParticipantSectionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Form360ParticipantSection_1.Form360ParticipantSection);
    };
    return Form360ParticipantSectionRequestBuilder;
}(core_1.RequestBuilder));
exports.Form360ParticipantSectionRequestBuilder = Form360ParticipantSectionRequestBuilder;
//# sourceMappingURL=Form360ParticipantSectionRequestBuilder.js.map