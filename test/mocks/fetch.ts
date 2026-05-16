import { vi } from "vitest";

export function mockFetch(data: any) {
    global.fetch = vi.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(data),
        })
    ) as any;
}