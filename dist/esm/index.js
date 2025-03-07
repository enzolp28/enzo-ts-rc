import React from 'react';

var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, title = _a.title, message = _a.message;
    if (!isOpen)
        return null;
    return (React.createElement("div", { className: "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center" },
        React.createElement("div", { className: "bg-white p-6 rounded-lg shadow-xl" },
            React.createElement("h3", { className: "text-lg font-medium text-gray-900" }, title),
            React.createElement("p", { className: "mt-2" }, message),
            React.createElement("button", { onClick: onClose, className: "mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700" }, "Close"))));
};

export { Modal };
//# sourceMappingURL=index.js.map
