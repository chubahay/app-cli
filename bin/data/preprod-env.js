"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.preprodEnvUrls = void 0;
exports.preprodEnvUrls = {
    fakeService: {
        loadbalanced: "http://localhost:3000",
        cluster1: "http://localhost:3001",
        cluster2: "http://localhost:3002",
    },
    fakeService2: {
        loadbalanced: "http://localhost:3000",
        cluster1: "http://localhost:3001",
        cluster2: "http://localhost:3002",
    }
};
